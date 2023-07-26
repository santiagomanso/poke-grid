import { SignInButton } from "@clerk/nextjs";
import React from "react";

const signIn = () => {
  return (
    <SignInButton mode="modal">
      <button className="btn">Sign in</button>
    </SignInButton>
  );
};

export default signIn;
