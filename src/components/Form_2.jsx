import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import Commonbtn from "./Commonbtn";

const Form_2 = () => {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    mail: "",
    password: "",
    confirmPassword: "",
  });
  const [formErrors, setFormErrors] = useState({
    name: "",
    number: "",
    mail: "",
    password: "",
    confirmPassword: "",
  });
  const [formMail, setFormMail] = useState({
    name: "",
    number: "",
    mail: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const regex = {
      name: /^[a-zA-Z\s]+$/,
      number: /^\d{10}$/,
      mail: /^[a-zA-Z\s]+@/,
      password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@]{8,}$/,
      confirmPassword: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@]{8,}$/,
    };
    const errors = {};
    if (!regex.name.test(formData.name)) {
      errors.name = "Name is invalid.";
    }
    if (!regex.number.test(formData.number)) {
      errors.number = "Number is invalid.";
    }
    if (!regex.mail.test(formData.mail)) {
      errors.mail = "Mail is invalid.";
    }
    if (!regex.password.test(formData.password)) {
      errors.password = "password is invalid.";
    }

    if (!regex.confirmPassword.test(formData.confirmPassword)) {
      errors.confirmPassword = "Confirm password is invalid.";
    }
    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = "Passwords do not match.";
    }
    setFormErrors(errors);
    if (Object.keys(errors).length === 0) {
      setShowSuccessPopup(true);
    }
  };

  const handlePopupClose = () => {
    setShowSuccessPopup(false);
    setFormData({
      name: "",
      number: "",
      mail: "",
      password: "",
      confirmPassword: "",
    });
    setFormErrors({
      name: "",
      number: "",
      mail: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <>
      <h1 className="text-center">Form , map , props , swiper ---:</h1>

      <form className="form_card" onSubmit={handleSubmit}>
        <h1 className="text-center mb-5">
          Form <span className="clr_change">Validation</span>
        </h1>

        <div className="form-group">
          <label className="fw-semibold" htmlFor="name">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {formErrors.name && (
            <p className="error-message">{formErrors.name}</p>
          )}
        </div>
        <div className="form-group">
          <label className="fw-semibold" htmlFor="number">
            Ph. Number:
          </label>
          <input
            type="text"
            id="number"
            name="number"
            value={formData.number}
            onChange={handleChange}
            className={formErrors.number ? "error" : ""}
          />
          {formErrors.number && (
            <p className="error-message">{formErrors.number}</p>
          )}
        </div>
        <div className="form-group">
          <label className="fw-semibold" htmlFor="mail">
            Email:
          </label>
          <input
            type="mail"
            id="mail"
            name="mail"
            value={formData.mail}
            onChange={handleChange}
          />
          {formErrors.mail && (
            <p className="error-message">{formErrors.mail}</p>
          )}
        </div>
        <div className="form-group ">
          <label className="fw-semibold" htmlFor="password">
            Password:
          </label>
          <div className="password-input position-relative">
            <input
              type={showPassword ? "text" : "password"} // Conditional rendering based on showPassword state
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={formErrors.password ? "error" : ""}
            />
            <button
              className="eye_btn"
              type="button"
              onClick={() => setShowPassword(!showPassword)} // Toggle showPassword state
            >
              <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
            </button>
          </div>
          {formErrors.password && (
            <p className="error-message">{formErrors.password}</p>
          )}
        </div>
        <div className="form-group">
          <label className="fw-semibold" htmlFor="confirmPassword">
            Confirm Password:
          </label>
          <div className="password-input position-relative">
            <input
              type={showConfirmPassword ? "text" : "password"} // Conditional rendering based on showConfirmPassword state
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className={formErrors.confirmPassword ? "error" : ""}
            />
            <button
              className="eye_btn"
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)} // Toggle showConfirmPassword state
            >
              <FontAwesomeIcon
                icon={showConfirmPassword ? faEyeSlash : faEye}
              />
            </button>
          </div>
          {formErrors.confirmPassword && (
            <p className="error-message">{formErrors.confirmPassword}</p>
          )}
        </div>
        <Commonbtn type="submit" text="Submit" />
      </form>
      {showSuccessPopup && (
        <div className="success-popup">
          <p className="fw-bold tet-[35px]">Form submitted successfully!</p>
          <div>
            <Commonbtn click={handlePopupClose} text="Close" />
          </div>
        </div>
      )}
    </>
  );
};

export default Form_2;
