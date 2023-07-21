import Question from "./components/Question";
function App() {
  return (
    <>
      <h1 style={{ textAlign: "center", color: "#0c841b", fontSize: "40px" }}>
        Meditation Baba
      </h1>
      <h3 style={{ textAlign: "center", color: "#17a354" }}>
        Generates Meditation As Per Your Mood
      </h3>
      <Question />
    </>
  );
}

export default App;
