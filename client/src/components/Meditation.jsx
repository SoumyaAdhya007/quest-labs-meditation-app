import { useEffect, useState } from "react";
import { generateMeditationText, generateTextToSpeech } from "../service/api";
import { Typography } from "@mui/material";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import ReplayIcon from "@mui/icons-material/Replay";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  MeditationBox,
  PlayButton,
  ReTryButton,
  Heading,
  Text,
} from "../styles";
const styles = {
  preFormatted: {
    whiteSpace: "pre-line",
  },
};
const Meditation = ({ answers, setReset }) => {
  const [loading, setLoading] = useState();
  const [text, setText] = useState("");
  const [isPlay, setIsPlay] = useState(false);
  const [isPlayed, setIsPlayed] = useState(false);
  useEffect(() => {
    // Fetch the generated meditation text when the component mounts
    const fetchText = async () => {
      try {
        setLoading(true);
        const response = await generateMeditationText(answers);
        setText(response);
        setLoading(false);
      } catch (error) {
        toast.error(error.message, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
    };
    fetchText();
  }, []);
  // This function handles the logic for playing the generated meditation audio when the Play button is clicked.
  const handlePlayButtonClick = async () => {
    try {
      // Set the play state to true to indicate that the audio is being played
      setIsPlay(true);
      // Set the isPlayed state to true to prevent multiple play attempts while the audio is playing
      setIsPlayed(true);

      // Create an AudioContext to handle audio playback
      let audioContext = new AudioContext();

      // Generate the audio response using the API to convert text to speech
      const response = await generateTextToSpeech(text);

      // Decode the audio data from the API response into an audio buffer
      const audioBuffer = await audioContext.decodeAudioData(response);

      // Create a buffer source to play the audio
      const source = audioContext.createBufferSource();

      // Show a toast message indicating the audio limitations due to the free API
      toast.info(
        "You can only hear the sound for up to 100 words due to the free API limitations",
        {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        }
      );

      // Set the audio buffer as the source for the buffer source node
      source.buffer = audioBuffer;
      source.connect(audioContext.destination);

      // Start playing the audio
      source.start();

      // Set a listener for when the audio ends to update the play state
      source.onended = () => {
        setIsPlay(false);
      };
    } catch (error) {
      // Show a toast message for API limit exceeded error
      toast.error(
        "Apologies, but the API Limit has been exceeded. As a result, the audio playback for the meditation is currently unavailable",
        {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        }
      );

      // If an error occurs, set the play state to false
      setIsPlay(false);
    }
  };
  return (
    <>
      <MeditationBox>
        <Heading>AI Generating Meditation For You</Heading>
        {loading ? (
          <>
            <Skeleton baseColor="#e2e2e2" count={12} />
            <Skeleton wrapper={PlayButton} baseColor="#15998f" />
            <Skeleton wrapper={ReTryButton} baseColor="#66a2dd" />
          </>
        ) : (
          <>
            <Text style={styles.preFormatted}>{text}</Text>
            <ToastContainer
              position="top-center"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="colored"
            />
            <PlayButton
              onClick={handlePlayButtonClick}
              isPlayed={isPlayed}
              disabled={isPlayed ? true : false}
            >
              {isPlay ? "Playing..." : <PlayCircleFilledWhiteIcon />}
            </PlayButton>
            <ReTryButton
              onClick={() => {
                setReset(true);
                setIsPlayed(false);
              }}
              disabled={isPlay ? true : false}
            >
              <ReplayIcon />
              Try Again
            </ReTryButton>
          </>
        )}
      </MeditationBox>
    </>
  );
};
export default Meditation;
