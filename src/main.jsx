import { StrictMode } from "react";

import  App from "./App"

import "./index.css"
import {createRoot} from "react-dom/client"

import "@ant-design/v5-patch-for-react-19";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App/>
  </StrictMode>
)