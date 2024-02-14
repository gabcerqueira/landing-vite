import { ChangeEvent, SyntheticEvent, useState } from "react";
import toast from "react-hot-toast";
import { UserCredentials } from "../../../features/auth/interfaces/UserCredentials";

const useLogin = () => {
  const [credentials, setCredentials] = useState<UserCredentials>({
    email: "",
    password: "",
  });

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();

    // API CALL

    if (credentials.password !== "123456") {
      return toast.error("Invalid Credentials !");
    }

    toast.success("Success !");
    setCredentials({
      email: "",
      password: "",
    });
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    }));
  };

  return { credentials, handleSubmit, handleInputChange };
};

export default useLogin;
