import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store/Store.js";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <div className="bg-white dark:bg-[#1c1c1c] w-screen h-screen max-h-screen max-w-[100vw] ">
      <App />
    </div>
  </Provider>
);
