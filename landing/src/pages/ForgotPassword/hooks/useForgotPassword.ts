import React, { ChangeEvent, SyntheticEvent, useState } from "react";
import toast from "react-hot-toast";

function useForgotPassword() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    if (email === "") {
      return toast.error("invalid email !");
    }
    toast.success("Success !");
    setEmail("");
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);

  return { email, handleSubmit, handleInputChange };
}

export default useForgotPassword;
