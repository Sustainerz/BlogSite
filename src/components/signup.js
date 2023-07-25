import React, { useState } from "react";
import "./signup.css";

function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const handleSubmit = () => {};

  return (
    <div className="relative main min-h-screen w-full bg-cover overflow-y-auto ">
      <div className="register mx-12 sm:mx-24  mt-20 absolute ">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:grid-cols-10 ">
          <div className="flex flex-col col-span-1 sm:col-span-2 register-left items-center">
            <img
              style={{ width: "150px", height: "150px" }}
              src={require("../images/logo.png")}
              alt=""
            />
            <h3>Welcome!</h3>
            <p>Register yourself on our honorable Website</p>
            <input
              type="submit"
              onClick={handleSubmit}
              value="Register"
              className="w-40 py-2 mt-4 bg-blue-500 text-white rounded-lg cursor-pointer"
            />
          </div>
          <div className="col-span-1 sm:col-span-8 register-right">
            <div className="tab-content" id="myTabContent">
              <h3 className="register-heading text-3xl font-semibold ">
                Registration Form
              </h3>
              <form encType="multipart/form-data">
                <div className="grid grid-cols-1 sm:grid-cols-2 register-form gap-4">
                  <div className="space-y-4">
                    <input
                      type="text"
                      id="firstname"
                      name="firstname"
                      className="w-full rounded-lg h-10 p-2"
                      placeholder="First Name *"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                    <input
                      type="text"
                      id="lastname"
                      name="lastname"
                      className="w-full rounded-lg h-10 p-2"
                      placeholder="Last Name *"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                    <input
                      type="password"
                      id="password"
                      name="password"
                      className="w-full rounded-lg h-10 p-2"
                      placeholder="Password *"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <input
                      type="password"
                      id="cpassword"
                      name="cpassword"
                      className="w-full rounded-lg h-10 p-2"
                      placeholder="Confirm Password *"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </div>
                  <div className="space-y-4">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full rounded-lg h-10 p-2"
                      placeholder="Your Email *"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <label htmlFor="interest" className=" font-semibold">Your Interest</label>
                    <select
                      id="interest"
                      className="w-full rounded-lg h-10 p-2"
                    >
                      <option value="select"></option>
                      <option value="Development">Development</option>
                      <option value="Travel">Travelling</option>
                      <option value="Artist">Artist</option>
                      <option value="Cook">Cooking</option>
                    </select>
                    <label htmlFor="image">Select an Image</label>
                    <br />
                    <input
                      type="file"
                      name="image"
                      className="w-full rounded-lg h-10 p-2"
                      id="image1"
                      value=""
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;