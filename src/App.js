import React from "react";
import RegistrationForm from "./components/task/RegistrationForm";
import QrForm from "./components/task/QrForm";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<QrForm />} />
        <Route path="/form" element={<RegistrationForm />} />
      </Routes>
    </>
  );
};

export default App;
