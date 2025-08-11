import { ErrorMessage, Field, Form, Formik } from "formik";
import { useEffect, useState } from "react";
import { RiEyeCloseFill } from "react-icons/ri";
import { ImEye } from "react-icons/im";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import axios from "axios";
import { domain } from "../store/store";
import toast from "react-hot-toast";

export default function LogInForm() {
  const handleLoginValidation = Yup.object({
    email: Yup.string().required().email(),
    password: Yup.string().required(),
    // .matches(/[A-Z]/)
    // .matches(/[a-z]/)
    // .matches(/[0-9]/)
    // .matches(/[^A-Za-z0-9]/)
    // .min(8),
  });

  const [seePass, setSeePass] = useState(false);
  const toggleSeePass = () => {
    setSeePass(!seePass);
  };
  const [user, setUser] = useState([]);

  const endPoint = "/api/auth/local";
  const [userToken, setUserToken] = useState(null);
  const navigate = useNavigate()
  const handleLogin = (values) => {
    setUser(values);
    
    const { rememberMe, ...userData } = values;
    values.rememberMe
      ? localStorage.setItem("current user", JSON.stringify(userData))
      : sessionStorage.setItem("current user", JSON.stringify(userData));
      axios
      .post(domain + endPoint, {
        identifier: values.email,
        password: values.password,
      })
      .then((res) => {
        setUserToken(res.data.jwt)
        console.log(res.data);
        
        navigate("/")
        toast.success(`Welcome ${res.data.user.username}`)
      })
      .catch((err) => {
        toast.error("Wrong Email or Password")
      });
  };

  // useEffect(()=>{

  // },[userToken])
    
  return (
    <>
      <div className="w-full h-[100vh] flex justify-center items-center">
        <div className="container flex justify-center items-center px-3">
          <Formik
            onSubmit={handleLogin}
            initialValues={{ email: "", password: "", rememberMe: false }}
            validationSchema={handleLoginValidation}
          >
            <Form className=" flex flex-col gap-3 w-full md:w-[70%] lg:w-[40%] border border-gray-900 p-4 shadow-2xl rounded-2xl">
              <h1 className="text-center text-gray-900 text-3xl md:text-4xl">
                Welcome Back, Log In
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
              <label className="text-gray-900 text-sm flex gap-1 items-center cursor-pointer w-fit">
                <Field
                  name="rememberMe"
                  type="checkbox"
                  className="checkbox checkbox-neutral w-[18px] h-[18px] rounded-[5px]"
                />
                Remember Me
              </label>
              <button
                type="submit"
                className="w-full btn btn-neutral md:text-[18px]"
              >
                Log In
              </button>
              <span className="relative border-t border-gray-900 mt-4">
                <p className="absolute left-1/2 -translate-x-1/2 top-[-12px] text-gray-900 bg-white px-2.5 text-nowrap">
                  Or create a new account
                </p>
              </span>
              <Link
                to={"/signup"}
                className="w-full btn btn-neutral mt-2.5 md:text-[18px]"
              >
                Sign Up
              </Link>
            </Form>
          </Formik>
        </div>
      </div>
    </>
  );
}
