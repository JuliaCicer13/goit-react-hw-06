import React from "react";
import ReactDOM from "react-dom/client";

// Імпорт стилів нормалізації
import "modern-normalize";
import App from "./components/App";
import "./index.css";
// 1. Імпортуємо провайдер
import { Provider } from 'react-redux'
// 2. Імпортуємо створений раніше стор
import { store, persistor } from "./redux/store";
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
          <App />
      </PersistGate>
	  </Provider>
  </React.StrictMode>
);