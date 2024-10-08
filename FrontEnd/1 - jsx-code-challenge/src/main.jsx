import React from "react";
import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root")).render(
  <div>
    <h1>My Favorite Foods</h1>
    <ul>
      <li>Bacon</li>
      <li>Noodles</li>
      <li>Jamon</li>
    </ul>
  </div>,
  document.getElementById("root")
);

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
