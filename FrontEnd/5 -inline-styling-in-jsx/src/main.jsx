import React from "react";
import { createRoot } from "react-dom/client";

const customStyle = {
  color: "red",
  fontSize: "20px",
  border: "1px solid black",
};

customStyle.color = "blue";

createRoot(document.getElementById("root")).render(
  <h1 style={customStyle}>Hello World!</h1>,
  document.getElementById("root")
);

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
