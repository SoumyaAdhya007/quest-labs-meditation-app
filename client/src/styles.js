import { Box, Button, Typography } from "@mui/material";

import styled from "@emotion/styled";
export const QuestionBox = styled(Box)`
  width: 60%;
  min-height: 300px;
  max-height: auto;
  margin: auto;
  margin-top: 50px;
  padding: 30px;
  background-color: #fffbf4;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  text-align: center;
`;
export const QuestionText = styled(Typography)`
  font-size: 25px;
  font-weight: bold;
`;

export const ChoiceButton = styled(Button)`
  min-width: 20%;
  margin: 30px;
  height: auto;
  padding: 5px;
  background-color: ${(props) => (props.active ? "#0c348b" : "#71c0fd")};
  font-weight: bold;
  color: #fffbf4;

  &:hover {
    background-color: #0877c6;
  }
`;
export const ButtonBox = styled(Box)`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
export const PreviousButton = styled(Button)`
  width: 48%;
  background-color: ${(props) => (props.index === 0 ? "#fffbf4" : "#0991b1")};
  color: #fffbf4;
  &:hover {
    background-color: #26788b;
  }
`;
export const NextButton = styled(Button)`
  width: 48%;
  background-color: ${(props) => (props.value ? "#a8234d" : "#fffbf4")};
  color: #fffbf4;
  &:hover {
    background-color: #ec0d54;
  }
`;
export const MeditationBox = styled(Box)`
  width: 80%;
  min-height: 300px;
  max-height: auto;
  margin: auto;
  margin-top: 50px;
  padding: 30px;
  background-color: #fffbf4;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  text-align: center;
`;
export const PlayButton = styled(Button)`
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
  background-color: ${(props) => (props.isPlayed ? "#e2e2e2" : "#15998f")};
  color: #fff;
  outline: ${(props) => (props.isPlayed ? "1px solid #78767c" : null)};
  &:hover {
    background-color: #146d66;
  }
`;
export const Heading = styled(Typography)`
  font-size: 30px;
  font-weight: bold;
  color: #0e6a20;
  margin-top: 20px;
  margin-bottom: 20px;
`;
export const Text = styled(Typography)`
  font-size: 17px;
  font-weight: bold;
  color: #000a0e;
`;
export const ReTryButton = styled(Button)`
  width: 30%;
  margin-top: 20px;
  margin-bottom: 20px;
  background-color: #66a2dd;
  color: #fff;
  outline: 2px solid #66a2dd;
  &:hover {
    background-color: #257cd1;
  }
`;
