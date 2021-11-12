import React from "react";
import { useSpring, animated as a } from "react-spring";
import Navbar from "./Navbar";

const App = () => {
  const [greetingStatus, displayGreeting] = React.useState(false);
  const contentProps = useSpring({
    opacity: greetingStatus ? 1 : 0,
    marginTop: greetingStatus ? 0 : -500,
  });
  return (
    <div className="container">
      <div className="button-container">
        <button onClick={() => displayGreeting((a) => !a)} className="button">
          MENU
        </button>
      </div>
      {!greetingStatus ? (
        <div className="Intro"></div>
      ) : (
        <a.div className="box" style={contentProps}>
          <Navbar />
        </a.div>
      )}
    </div>
  );
};

export default App;
