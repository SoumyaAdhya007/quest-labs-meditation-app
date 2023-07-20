import axios from "axios";

const BaseURL = "https://meditation-baba.onrender.com/api";

// Function to generate meditation text based on user data
export const generateMeditationText = async (data) => {
  try {
    // Send a POST request to the backend API to generate meditation text
    const response = await axios.post(`${BaseURL}/meditation`, data);
    if (response.status === 201) {
      // Extract and return the generated text from the response data
      const text = await response.data;
      return text;
    }
  } catch (error) {
    // Log any errors that occur during the API call
    console.error("Error while calling generateMeditationText:", error.message);
  }
};

// Function to generate text-to-speech audio for the provided text
export const generateTextToSpeech = async (text) => {
  try {
    // Send a POST request to the external text-to-speech API
    const response = await axios.post(
      `https://api.elevenlabs.io/v1/text-to-speech/21m00Tcm4TlvDq8ikWAM`,
      {
        // Limit the text to 100 characters because of the API's limitations
        text: text.slice(0, 100),
        model_id: "eleven_monolingual_v1",
        voice_settings: {
          stability: 0.1,
          similarity_boost: 0.1,
        },
      },
      {
        headers: {
          accept: "audio/mpeg",
          // Set the API key in the header for authentication
          "xi-api-key": process.env.REACT_APP_API_KEY,
          "Content-Type": "application/json",
        },
        responseType: "arraybuffer",
      }
    );
    if (response.status === 200) {
      // Return the audio data received from the API
      return response.data;
    }
  } catch (error) {
    // Log any errors that occur during the API call
    console.error("Error while calling generateTextToSpeech:", error.message);
  }
};
