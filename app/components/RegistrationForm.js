'use client';

import { useState } from 'react';

export default function RegistrationForm() {
  // Add state for username and usernameErrorText
  const [name, setName] = useState(``);
  const [nameErrorText, setNameErrorText] = useState('');

  // Add state for password and passwordErrortext
  const [password, setPassword] = useState(``);
  const [passwordError, setPasswordError] = useState(``);
  // Add state for confirmPassword and confirmPasswordErrorText
  const [confirmPassword, setConfirmPassword] = useState(``);
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  // Extra - add state for email and emailErrorText
  const [email, setEmail] = useState(``);
  const [emailErrorText, setEmailErrorText] = useState(``);

  // Add state for isFormValid
  const [isFormValid, setIsFormValid] = useState(false);
  const [isFormValidError, setIsFormValidError] = useState();

  // Add state to set formData
  const [formData, setFormData] = useState(null); // For storing and displaying results

  // Add function to validateForm
  const ValidateForm = (validateFormName, validatePw, validatePwConfirm) => {
    function conditions(validate, validatePw, validatePwConfirm) {
      setIsFormValid(
        nameFormValidation(validateFormName) &&
          pwFormValidation(validatePw) &&
          confirmPwValidation(validatePwConfirm)
      );
    }
    conditions();

    setIsFormValid(isValid);
    setIsFormValidError(
      isValid ? '' : 'Please meet conditions of Form to submit.'
    );
    console.log(isValid);
    console.log(
      nameFormValidation(validateFormName) &&
        pwFormValidation(validatePw) &&
        confirmPwValidation(validatePwConfirm)
    );
    return isValid;
  };

  // Add function to validate username
  function validateName(value) {
    if (value.length < 3) {
      setNameErrorText('Name must be at least 3 characters.');
    } else {
      setNameErrorText('');
    }
  }
  // Add function to validate password
  function validatePassword(value) {
    if (value.length < 9) {
      setPasswordError('Password must be at least 8 characters.');
    } else {
      setPasswordError('');
    }
  }
  // Add function to validate confirm password
  function validateConfirmPassword(value) {
    value === password
      ? setConfirmPasswordError('')
      : setConfirmPasswordError('Does not match with password.');
  }

  // Extra add function to validate email

  // Add function to handle username change
  const nameFormValidation = (currentName) => {
    if (currentName.length === 0 || nameErrorText.length > 0) {
      return false;
    } else {
      return true;
    }
  };

  // Add function to handle password change
  const pwFormValidation = (currentPw) => {
    if (currentPw.length === 0 || passwordError.length > 0) {
      return false;
    } else {
      return true;
    }
  };

  // Add function to handle confirm password change
  const confirmPwValidation = (currentPwConfirm) => {
    if (currentPwConfirm.length === 0 || confirmPasswordError.length > 0) {
      return false;
    } else {
      return true;
    }
  };

  // Extra - Add function to handle email value change

  // Create a handleSubmitFunction

  return (
    <div className="bg-black text-white min-h-screen flex justify-center items-center p-4">
      <div className="flex flex-wrap lg:flex-nowrap gap-8 w-full justify-center">
        {/* Form Section */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-md w-full">
          <h1 className="text-2xl font-bold text-blue-500 mb-6 text-center">
            Registration Form
          </h1>
          <form className="space-y-4">
            <div>
              <label htmlFor="username" className="block font-semibold mb-2">
                Username:
              </label>
              <input
                type="text"
                id="username"
                className="w-full p-2 bg-gray-900 text-white border border-gray-700 rounded focus:outline-none focus:ring focus:ring-blue-500"
                value={name}
                onChange={(e) => {
                  const value = e.target.value;
                  setName(value);
                  validateName(value);
                  ValidateForm(value, password, confirmPassword);
                }}
              />
              {nameErrorText && (
                <p className="text-red-500 text-sm mt-2">{nameErrorText}</p>
              )}
            </div>

            <div>
              <label htmlFor="password" className="block font-semibold mb-2">
                Password:
              </label>
              <input
                type="password"
                id="password"
                className="w-full p-2 bg-gray-900 text-white border border-gray-700 rounded focus:outline-none focus:ring focus:ring-blue-500"
                value={password}
                onChange={(e) => {
                  const value = e.target.value;
                  setPassword(value);
                  validatePassword(value);
                  ValidateForm(value, password, confirmPassword);
                }}
              />
              {passwordError && (
                <p className="text-red-500 text-sm mt-2">{passwordError}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="confirmPassword"
                className="block font-semibold mb-2"
              >
                Confirm Password:
              </label>
              <input
                type="password"
                id="confirmPassword"
                className="w-full p-2 bg-gray-900 text-white border border-gray-700 rounded focus:outline-none focus:ring focus:ring-blue-500"
                value={confirmPassword}
                onChange={(e) => {
                  const value = e.target.value;

                  setConfirmPassword(value);
                  validateConfirmPassword(value);
                  ValidateForm(value, password, confirmPassword);
                }}
              />

              {confirmPasswordError && (
                <p className="text-red-500 text-sm mt-2">
                  {confirmPasswordError}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block font-semibold mb-2">
                Email (Optional):
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-2 bg-gray-900 text-white border border-gray-700 rounded focus:outline-none focus:ring focus:ring-blue-500"
              />
              <p className="text-red-500 text-sm mt-2"></p>
            </div>
            {console.log(` ${nameFormValidation(name)} &&
        ${pwFormValidation(password)} &&
        ${confirmPwValidation(confirmPassword)}
        final check : ${isFormValid}`)}
            <button
              type="submit"
              className={`w-full py-2 rounded bg-blue-600`}
              disabled={!isFormValid}
            >
              Register
            </button>
            {!isFormValid && (
              <p className="text-red-500 text-sm mt-2">Please fill out form</p>
            )}
          </form>
        </div>

        {/* Results Section */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-md w-full">
          <h2 className="text-xl font-bold text-blue-500 mb-4">
            Registration Results
          </h2>
          {formData ? (
            <div>
              <p className="mb-2">
                <span className="font-semibold">Username:</span>
                {formData.username}
              </p>
              <p>
                <span className="font-semibold">Email:</span>
                {formData.email || 'N/A'}
              </p>
            </div>
          ) : (
            <p className="text-gray-400">No registration details to show.</p>
          )}
        </div>
      </div>
    </div>
  );
}
