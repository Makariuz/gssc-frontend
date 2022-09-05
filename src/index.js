import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Landing, Home, NotFound } from "./pages";
import { PrivateRoute } from "./components";
import { AuthContextProvider } from "./context";





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
  <AuthContextProvider>
  <Routes>
  <Route path="/" element={<App />}>
            <Route
              index
              element={
                <PrivateRoute>
                  <Home />
                </PrivateRoute>
              }
            />
            <Route path="landing" element={<Landing />} />
            <Route path="*" element={<NotFound />} />
          </Route>
  </Routes>
</AuthContextProvider>
  </BrowserRouter>

  </React.StrictMode>
);


