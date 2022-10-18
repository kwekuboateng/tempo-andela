import React from "react";
import Teams from "./Teams/Teams";
import Team from "./Team/Team";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import ErrorPage from "./ErrorPage/ErrorPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <ErrorBoundary FallbackComponent={ErrorPage}>
              <Teams />
            </ErrorBoundary>
          }
        />
        <Route path="/team/:id" element={
            <ErrorBoundary FallbackComponent={ErrorPage}>
              <Team />
            </ErrorBoundary>
          } 
        
        />
      </Routes>
    </Router>
  );
}

export default App;
