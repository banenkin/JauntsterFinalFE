"use client";
import Button from "../Buttons/Button";
import ButtonGoogle from "../Buttons/ButtonGoogle";

import * as React from "react";
import InputField from "../InputField";
import Link from "next/link";

const LoginForm = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform validation or form submission logic here
    if (!email || !password) {
      setError("Please fill in all fields");
    } else {
      setError("");
      // Submit the form or perform further validation
    }
  };

  return (

      <div className="flex flex-col items-center justify-evenly h-4/5 ">
        <h2 className="text-center  text-white text-[32px] font-medium font-['Inter']">
          Sign In
        </h2>
        <form
          className="flex items-center justify-evenly flex-col w-[582px] h-[602px] bg-neutral-50"
          action=" "
          onSubmit={handleSubmit}
        >
          <ButtonGoogle />

          <div className="flex justify-center items-center w-full  gap-2">

            <div className="w-[182px] h-[0px] border border-zinc-400"></div>
            
            <div className="text-center text-zinc-400 text-sm font-medium font-['Inter Tight']">
              OR
            </div>
            <div className="w-[183px] h-[0px] border border-zinc-400"></div>
          </div>

          <InputField
            id="email"
            label="Email"
            placeholder="Enter your email"
            name="email"
            type="email"
            value={email}
            onChange={handleEmailChange}
            error={error}
            hint="Please enter a valid email address"
            required
          />

          <InputField
            id="password"
            label="Password"
            placeholder="Enter your password"
            name="password"
            type="password"
            value={password}
            onChange={handlePasswordChange}
            error={error}
            hint="Your password must be at least 8 characters long"
            required
          />

          <Link href="/sign-in">
            <Button variant="primary-long" text="Sign In" />
          </Link>
        </form>
        {/* <Button variant="primary-short" text="Button" />
      <Button variant="primary-long" text="Button" />
      <Button variant="secondary" text="Button" />
      <Button variant="secondary-short" text="Button" />
      <Button variant="secondary-outlined" text="Button" />
      <Button variant="secondary-bg-color" text="Button" /> */}
      </div>
      

  );
};

export default LoginForm;