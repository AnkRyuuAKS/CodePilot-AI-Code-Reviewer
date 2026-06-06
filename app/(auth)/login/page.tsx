import LoginUI from "../_components/loginUI"
import { requireUnAuth } from "@/utils/auth-utils";
import React from "react";

const LoginPage = async () => {
  await requireUnAuth();
  return (
    <div>
      <LoginUI />
    </div>
  );
};

export default LoginPage;