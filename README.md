# Meditation Baba
**Generate personalized meditations based on your feelings.**

![Meditation_Baba](https://github.com/SoumyaAdhya007/quest-labs-meditation-app/assets/112754567/8cacde6b-7c4c-4783-a9a1-cd933063cdd4)


## Features
- Answer 3 questions, and AI will generate a meditation tailored to you.
- Convert the text into audio (limit: 100 words).


  ## Deployment
  - **Frontend**
  : [https://meditation-baba.netlify.app/](https://meditation-baba.netlify.app/)
  - **Backend**
  : [https://meditation-baba.onrender.com](https://meditation-baba.onrender.com)

## NPM Packages
- ### Frontend
```json
    "@emotion/react": "^11.11.1",
    "@emotion/styled": "^11.11.0",
    "@mui/icons-material": "^5.14.1",
    "@mui/material": "^5.14.1",
    "@testing-library/jest-dom": "^5.17.0",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "axios": "^1.4.0",
    "dotenv": "^16.3.1",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-loading-skeleton": "^3.3.1",
    "react-scripts": "5.0.1",
    "react-toastify": "^9.1.3",
    "web-vitals": "^2.1.4"
```
- ### Backend 
  ```json
    "axios": "^1.4.0",
    "cors": "^2.8.5",
    "dotenv": "^16.3.1",
    "express": "^4.18.2",
    "nodemon": "^3.0.1"
  ```

  ###  Run Locally Clone this Project

```bash
    step 1.  https://github.com/SoumyaAdhya007/quest-labs-meditation-app
```
- ### Frontend
  ``` bash
  - Step 2. Go to the root directory: cd client

  - Step 3. Install the required dependencies: npm i

  - Step 4. Set the environment variable API_KEY

  - Step 5. Run the application: npm start
  
  ````
- ### Backend
  ```bash
   - Step 2. Go to the root directory: cd server

   - Step 3. Install the required dependencies: npm i

   - Step 4. Set the environment variable port

   - Step 5. Run the server: npm run server
        
  ```
  ## API Endpoints

  ####  Genaarate Meditation.
  
-
  ```javascript

    POST  http://localhost:8080/api/meditation

  ```
- >body : {ans1,ans2,ans3}

| `Author` |
| :-------: | 

 
 [@SoumyaAdhya007](https://github.com/SoumyaAdhya007) 
    
