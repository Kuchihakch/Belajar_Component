import { StrictMode } from "react";
import { createRoot } from 'react-dom/client';
import "./style.css";

import App from "./app";

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
console.log(document.body.innerHTML);