import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
<link
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
  rel="stylesheet"
  integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
  crossorigin="anonymous"
></link>;

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    FullName: "",
    Email: "",
    Mobile: "",
    Gender: "",
    Education: "",
    Date: "",
    Relocate: "",
    Languages: [],
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        Languages: checked
          ? [...prev.Languages, value]
          : prev.Languages.filter((lang) => lang !== value),
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const validate = () => {
    let newErrors = {};
    if (!formData.FullName) newErrors.FullName = "Full name is required";
    if (!formData.Email) {
      newErrors.Email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.Email)) {
      newErrors.Email = "Invalid email format";
    }
    if (!formData.Mobile || formData.Mobile.length !== 10) {
      newErrors.Mobile = "Enter a valid 10-digit mobile number";
    }
    if (!formData.Gender) newErrors.Gender = "Gender is required";
    if (!formData.Education) newErrors.Education = "Education is required";
    if (!formData.Date) newErrors.Date = "Date of Birth is required";
    if (!formData.Relocate)
      newErrors.Relocate = "Relocation preference is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(validate());

    if (validate()) {
      console.log("Form Data:", formData);
      alert("Form submitted successfully!");
      setFormData({
        FullName: "",
        Email: "",
        Mobile: "",
        Gender: "",
        Education: "",
        Date: "",
        Relocate: "",
        Languages: [],
      });
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center">Registration Form</h2>
      <form onSubmit={handleSubmit} className="p-4 border rounded bg-light">
        <div className="mb-3">
          <label className="form-label">
            Full Name<span style={{ color: "red" }}>*</span>
          </label>
          <input
            type="text"
            className="form-control"
            name="FullName"
            value={formData.FullName}
            onChange={handleChange}
          />
          {errors?.FullName && (
            <div
              style={{ color: "red", fontSize: "14px" }}
            >{`${errors?.FullName}*`}</div>
          )}
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            name="Email"
            value={formData.Email}
            onChange={handleChange}
          />
          {errors?.Email && (
            <div
              style={{ color: "red", fontSize: "14px" }}
            >{`${errors?.Email}*`}</div>
          )}
        </div>
        <div className="mb-3">
          <label className="form-label">Mobile Number</label>
          <input
            type="number"
            className="form-control"
            name="Mobile"
            value={formData.Mobile}
            onChange={handleChange}
          />
          {errors?.Mobile && (
            <div
              style={{ color: "red", fontSize: "14px" }}
            >{`${errors?.Mobile}*`}</div>
          )}
        </div>

        <div className="mb-3">
          <label className="form-label">Gender</label>
          <div>
            {["Male", "Female", "Other"].map((gender) => (
              <div className="form-check form-check-inline" key={gender}>
                <input
                  className="form-check-input"
                  type="radio"
                  name="Gender"
                  value={gender}
                  onChange={handleChange}
                  checked={formData.Gender === gender}
                />

                <label className="form-check-label">{gender}</label>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label">Education</label>
          <div>
            {["10th", "12th", "Pursuing", "Graduate", "Post-Graduate"].map(
              (edu) => (
                <div className="form-check form-check-inline" key={edu}>
                  <input
                    className="form-check-input"
                    type="radio"
                    name="Education"
                    value={edu}
                    onChange={handleChange}
                    checked={formData.Education === edu}
                  />
                  <label className="form-check-label">{edu}</label>
                </div>
              )
            )}
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label">Date of Birth</label>
          <input
            type="date"
            className="form-control"
            name="Date"
            value={formData.Date}
            onChange={handleChange}
          />
          {errors?.Date && (
            <div
              style={{ color: "red", fontSize: "14px" }}
            >{`${errors?.Date}*`}</div>
          )}
        </div>
        <div className="mb-3">
          <label className="form-label">Willing to Relocate?</label>
          <div>
            {["Yes", "No", "Maybe"].map((choice) => (
              <div className="form-check form-check-inline" key={choice}>
                <input
                  className="form-check-input"
                  type="radio"
                  name="Relocate"
                  value={choice}
                  onChange={handleChange}
                  checked={formData.Relocate === choice}
                />
                <label className="form-check-label">{choice}</label>
              </div>
            ))}
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label">Languages Known</label>
          <div>
            {["Marathi", "Hindi", "English", "Other"].map((lang) => (
              <div className="form-check form-check-inline" key={lang}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="Languages"
                  value={lang}
                  onChange={handleChange}
                  checked={formData.Languages.includes(lang)}
                />
                <label className="form-check-label">{lang}</label>
              </div>
            ))}
          </div>
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Submit
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
