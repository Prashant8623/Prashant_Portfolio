import React from "react";
import { QRCodeCanvas } from "qrcode.react";

const QRCodeGenerator = ({ formUrl }) => {
  return (
    <>
      <h2
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Scan to Register
      </h2>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <QRCodeCanvas value={formUrl} size={200} className="mt-4 mx-auto" />
      </div>
    </>
  );
};

const QrForm = () => {
  const registrationUrl = "https://raah-foundation-72dbe.web.app/form";

  return (
    <>
      <div
        className="flex flex-col items-center p-4"
        style={{
          backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF32477xLuOM9QN0wHRy5rpZmZN6n8n7IEmw&s")`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          height: "100vh",
          width: "100vw",
          zIndex: 30,
        }}
      >
        <QRCodeGenerator formUrl={registrationUrl} />
      </div>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(209, 202, 202, 0.5)",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "14px",
          fontWeight: "bold",
          textAlign: "center",
          zIndex: 2,
        }}
      ></div>
    </>
  );
};

export default QrForm;
