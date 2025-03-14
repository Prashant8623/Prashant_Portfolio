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
        <QRCodeCanvas value={formUrl} size={200} className="mt-4" />
      </div>
    </>
  );
};

const QrForm = () => {
  const registrationUrl = "http://192.168.1.52:3000/form";

  return (
    <div className="flex flex-col items-center p-4">
      <QRCodeGenerator formUrl={registrationUrl} />
    </div>
  );
};

export default QrForm;
