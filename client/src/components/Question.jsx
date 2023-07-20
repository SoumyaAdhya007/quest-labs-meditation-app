import { useState, useEffect } from "react";
import { Questions } from "../questions/questions";
import { Box, TextField } from "@mui/material";
import {
  QuestionBox,
  QuestionText,
  ChoiceButton,
  ButtonBox,
  PreviousButton,
  NextButton,
} from "../styles";
import Meditation from "./Meditation";

const Question = () => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [userAnswers, setUseruserAnswers] = useState({});
  const [value, setValue] = useState("");
  const [showMeditation, setshowMeditation] = useState(false);
  const [previousAnswer, setPreviousAnswer] = useState("");
  const [reset, setReset] = useState(false);
  // useEffect hook to handle reset action
  useEffect(() => {
    handelReset();
  }, [reset]);
  // Function to reset all states to their initial values
  function handelReset() {
    if (reset) {
      setQuestionIndex(0);
      setUseruserAnswers({});
      setValue("");
      setPreviousAnswer("");
      setshowMeditation(false);
      setReset(false);
    }
  }
  // Function to navigate to the next question
  const nextQuestion = () => {
    const answerKey = `ans${questionIndex + 1}`;
    setUseruserAnswers((prev) => ({ ...prev, [answerKey]: value }));
    setValue("");
    if (questionIndex < Questions.length - 1) {
      setQuestionIndex(questionIndex + 1);
    } else {
      setshowMeditation(true);
    }
  };
  // Function to navigate to the previous question
  const previousQuestion = () => {
    if (questionIndex > 0) {
      const previousquestionIndex = questionIndex - 1;
      const previousAnswerKey = `ans${previousquestionIndex + 1}`;
      setPreviousAnswer(userAnswers[previousAnswerKey]);
      setQuestionIndex(previousquestionIndex);
    }
  };
  // useEffect hook to update the input value based on user answers
  useEffect(() => {
    const currentAnswerKey = `ans${questionIndex + 1}`;
    setValue(userAnswers[currentAnswerKey]);
  }, [questionIndex, userAnswers]);
  return (
    <>
      {showMeditation ? (
        <Meditation userAnswers={userAnswers} setReset={setReset} />
      ) : (
        <QuestionBox>
          <QuestionText>{Questions[questionIndex].ques}</QuestionText>
          <Box>
            {Questions[questionIndex].extra_fields ? (
              Questions[questionIndex].choices.map((item, i) => {
                return (
                  <ChoiceButton
                    key={i}
                    active={item.split(" ")[1] === value}
                    onClick={() => setValue(item.split(" ")[1])}
                  >
                    {item}
                  </ChoiceButton>
                );
              })
            ) : (
              <Box
                component="form"
                sx={{
                  width: "100%",
                  height: "200px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  "& .MuiTextField-root": { m: 1, width: "25ch" },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="outlined-multiline-flexible"
                  multiline
                  maxRows={4}
                  label="Write your answer..."
                  style={{
                    width: "80%",
                  }}
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                />
              </Box>
            )}
          </Box>
          <ButtonBox>
            <PreviousButton
              disabled={questionIndex === 0 ? true : false}
              index={questionIndex}
              onClick={previousQuestion}
            >
              Previous
            </PreviousButton>
            <NextButton value={value} disabled={!value} onClick={nextQuestion}>
              {questionIndex === Questions.length - 1
                ? "Show Meditation"
                : "Next"}
            </NextButton>
          </ButtonBox>
        </QuestionBox>
      )}
    </>
  );
};

export default Question;
