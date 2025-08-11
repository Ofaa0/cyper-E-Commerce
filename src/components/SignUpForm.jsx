import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";
import { RiEyeCloseFill } from "react-icons/ri";
import { ImEye } from "react-icons/im";
import { Link } from "react-router-dom";
import * as Yup from "yup";

export default function SignUpForm() {
  const handleLoginValidation = Yup.object({
    email: Yup.string().required().email(),
    username: Yup.string()
      .required()
      .min(3)
      .matches(
        /^[A-Za-z]{3}[A-Za-z0-9]*$/,
        "First 3 characters must be letters, rest can be letters or numbers"
      ),
    password: Yup.string()
      .required()
      .matches(/[A-Z]/)
      .matches(/[a-z]/)
      .matches(/[0-9]/)
      .matches(/[^A-Za-z0-9]/)
      .min(8),
  });

  const [seePass, setSeePass] = useState(false);
  const toggleSeePass = () => {
    setSeePass(!seePass);
  };

  const handleLogin = (values) => {
    console.log(values);
    
  };
  return (
    <>
      <div className="w-full h-[100vh] flex justify-center items-center">
        <div className="container flex justify-center items-center px-3">
          <Formik
            onSubmit={handleLogin}
            initialValues={{ email: "", password: "", username: "" }}
            validationSchema={handleLoginValidation}
          >
            <Form className=" flex flex-col gap-3 w-full md:w-[70%] lg:w-[40%] border border-gray-900 p-4 shadow-2xl rounded-2xl">
              <h1 className="text-center text-gray-900 text-3xl md:text-4xl">
                Create an account
              </h1>
              <label className="text-gray-900 md:text-[18px]" htmlFor="email">
                Email :
              </label>
              <Field
                id="email"
                className="input bg-white w-full text-gray-900 border border-gray-900 md:py-2 md:text-[18px]"
                name="email"
                type="email"
                placeholder="Enter your email here"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-sm"
              />
              <label
                className="text-gray-900 md:text-[18px]"
                htmlFor="username"
              >
                Username :
              </label>
              <Field
                id="username"
                className="input bg-white w-full text-gray-900 border border-gray-900 md:py-2 md:text-[18px]"
                name="username"
                type="text"
                placeholder="Enter your username here"
              />
              <ErrorMessage
                name="username"
                component="div"
                className="text-red-500 text-sm"
              />
              <label
                className="text-gray-900 md:text-[18px]"
                htmlFor="password"
              >
                Password :
              </label>
              <span className="relative">
                <Field
                  id="password"
                  className="input bg-white w-full text-gray-900 border border-gray-900 md:py-2 md:text-[18px]"
                  name="password"
                  type={seePass ? "text" : "password"}
                  placeholder="Enter your password here"
                />
                {seePass ? (
                  <ImEye
                    onClick={toggleSeePass}
                    className="text-gray-900 absolute top-1/2 -translate-y-1/2 right-3 text-[20px] cursor-pointer z-10"
                  />
                ) : (
                  <RiEyeCloseFill
                    onClick={toggleSeePass}
                    className="text-gray-900 absolute top-1/2 -translate-y-1/2 right-3 text-[20px] cursor-pointer z-10"
                  />
                )}
              </span>
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500 text-sm"
              />

              <button
              type="submit"
                className="w-full btn btn-neutral mt-2.5 md:text-[18px]"
              >
                Sign Up
              </button>
            </Form>
          </Formik>
        </div>
      </div>
    </>
  );
}
