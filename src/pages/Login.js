import filletImage from "../assets/images/Reverse-Sear-Filet-Mignon.webp";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useApp } from "../context/AppProvider";
import { userData } from "../assets/data/mockUserData";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const Login = () => {
  const { state, dispatch } = useApp();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: ({ email, password }) => {
      const user = userData.find(
        (user) => user.email === email && user.password === password
      );

      if (user) {
        dispatch({ type: "LOGIN", payload: user });
      } else {
        console.log("User cannot be indenified.");
      }
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .required("Email field is required")
        .email("Not a valid Email."),
      password: Yup.string().required("Password is required."),
    }),
  });

  useEffect(() => {
    state.user && navigate("/");
  }, [state.user, navigate]);

  return (
    <div className="text-black min-h-[calc(100vh-7rem)] w-full">
      {!state.user && (
        <div className="bg-gray-100 flex justify-center items-center h-screen">
          <div className="w-1/2 h-screen hidden lg:block">
            <img
              src={filletImage}
              alt="Placeholder"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="lg:p-36 md:p-52 sm:p-20 p-8 w-full lg:w-1/2">
            <h1 className="text-2xl font-semibold mb-4">Login</h1>
            <form onSubmit={formik.handleSubmit}>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-600">
                  Email
                </label>
                <input
                  type="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  name="email"
                  className="bg-gray-50 w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block text-gray-600">
                  Password
                </label>
                <input
                  type="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  name="password"
                  className="bg-gray-50 w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="mb-4 flex items-center">
                <input
                  type="checkbox"
                  name="remember"
                  className="text-blue-500"
                />
                <label htmlFor="remember" className="text-gray-600 ml-2">
                  Remember Me
                </label>
              </div>
              <div className="mb-6 text-blue-500">
                <a href="#" className="hover:underline">
                  Forgot Password?
                </a>
              </div>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full"
              >
                Login
              </button>
            </form>
            <div className="mt-6 text-blue-500 text-center">
              <a href="#" className="hover:underline">
                Sign up Here
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
