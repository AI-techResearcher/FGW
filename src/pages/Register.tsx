import { Alert } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Register() {
  const [isSubmitSuccessfull, setIsSubmitSuccessfull] = useState(false);
  const [isSuccessMessage, setIsSuccessMessage] = useState(false);
  const [isServerError, setIsServerError] = useState("");

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const navigate = useNavigate();

  const postRequest = async ({ name, email, password }) => {
    setIsServerError("");
    setIsSubmitSuccessfull(true);
    setIsSuccessMessage(false);

    if (!name || !email || !password) {
      setIsSubmitSuccessfull(false);
      return;
    }

    try {
      const response = await fetch(`http://127.0.0.1:8000/api/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });
      const data = await response.json();

      console.log("Data:",data)
      if (response?.status === 201 || response?.status === 200) {
        setTimeout(() => {
          // console.log(data);
          localStorage.setItem("authToken", data?.access);
          reset();
          setIsSubmitSuccessfull(false);
          setIsSuccessMessage(true);
          toast.success("Registration Successfull")
          navigate("/login");
        }, 2000);
      } else {
        // console.log(data);
        // console.log(
        //   data?.error?.details?.detail
        //     ? data?.error?.details?.detail
        //     : data?.error?.message
        // );
        setTimeout(() => {
          setIsServerError(
            data?.error?.details?.detail
              ? data?.error?.details?.detail
              : data?.error?.message
          );
          setIsSubmitSuccessfull(false);
        }, 1000);
      }
    } catch (err) {
      console.log(err);
      setTimeout(() => {
        setIsSubmitSuccessfull(false);
        setIsServerError(err);
      }, 1000);
    }
  };
  return (
    <main className="bg-slate-950 dark px-2 py-24">
      <div className="space-y-2 px-5 py-8 rounded-2xl max-w-lg w-full mx-auto bg-slate-900">
        <form onSubmit={handleSubmit(postRequest)}>
          {isServerError && (
            <div className={`row mb-4 form-errors`}>
              {isServerError ? isServerError : ""}
            </div>
          )}

          {errors?.name && <p className="invalid">{errors?.name?.message}</p>}
          <Input
            {...register("name", {
              required: {
                value: true,
                message: "Name field is required!",
              },
            })}
            type="text"
            className={`input ${errors?.name && "invalid-input"}`}
            placeholder="Enter your Name ..."
          />
          {errors?.email && <p className="invalid">{errors?.email?.message}</p>}
          <Input
            {...register("email", {
              required: {
                value: true,
                message: "Email field is required!",
              },
              pattern: {
                value:
                  /^(?!.*\.\.)[a-zA-Z][^\s@]*@(?!.*\.\.)[^\s@]+(\.[^\s@]+)+[^\W\d_][^\W\s\d]*$/,
                message: "Email should be valid!",
              },
            })}
            type="email"
            className={`input ${errors?.email && "invalid-input"}`}
            placeholder="Enter your email ..."
          />
          {errors?.password && (
            <p className="invalid">{errors?.password?.message}</p>
          )}

          <Input
            {...register("password", {
              required: {
                value: true,
                message: "Password field is required!",
              },
              minLength: {
                value: 5,
                message: "Password should be 5 character long!",
              },
            })}
            type="password"
            className={`input ${errors?.password && "invalid-input"}`}
            placeholder="Enter your password ..."
          />
          <Button
            className="text-white w-full"
            type={isSubmitSuccessfull ? "button" : "submit"}
            disabled={isSubmitSuccessfull ? true : false}
          >
            {isSubmitSuccessfull ? "Loading..." : "Register"}
          </Button>
        </form>
      </div>
      <Alert className="border-none bg-slate-900 max-w-lg mx-auto mt-5">
        Already have a account?{" "}
        <Link to={"/login"} className="hover:underline text-primary">
          Login
        </Link>{" "}
        here.
      </Alert>
    </main>
  );
}

export default Register;
