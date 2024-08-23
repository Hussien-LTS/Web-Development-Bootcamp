import React from "react";
import { createRoot } from "react-dom/client";

const name = "Hussien";
const currentDate = new Date();
const year = currentDate.getFullYear();

createRoot(document.getElementById("root")).render(
  <div>
    <p>Created by {name}</p>
    <p>Copyright {year}</p>
  </div>,
  document.getElementById("root")
);

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
