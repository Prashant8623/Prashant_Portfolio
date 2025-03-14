import React from "react";
import BasicApiCall from "./components/basic-apis-call/BasicApiCall";
// import UserApp from "./components/basic-call-api-task/UserApp";
// import HTTPInterceptors from "./components/interceptores/HTTPInterceptors";
import StoreApp from "./components/store-app/StoreApp";
import UserApp from "./components/basic-call-api-task/UserApp";
import BasicCall from "./components/basicCall/BasicCall";
import RegistrationForm from "./components/task/RegistrationForm";
import QrForm from "./components/task/QrForm";
import { Route, Router, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<QrForm />} />
        <Route path="/form" element={<RegistrationForm />} />
        {/* <h3>App components</h3> */}
        {/* <BasicApiCall /> */}
        {/* <UserApp /> */}
        {/* <HTTPInterceptors /> */}
        {/* <StoreApp /> */}
        {/* <UserApp /> */}
        {/* <UserApp /> */}
        {/* <BasicCall /> */}
        {/* <RegistrationForm /> */}
        {/* <QrForm /> */}
      </Routes>
    </>
  );
};

export default App;
