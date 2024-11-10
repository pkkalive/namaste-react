import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => {
  return (
    <h1 className="title" tabIndex="5">
      Namaste React using JSX 🚀
    </h1>
  );
};

// Component Composition: a component inside a component like here title is inside heading
const Heading = () => {
  return (
    <header className="header">
      <Title />
      <h1 className="heading">Namaste React Functional Component</h1>
    </header>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading />);
