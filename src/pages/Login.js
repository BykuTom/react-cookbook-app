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
  console.log(state);
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
    <div className="bg-orange-50">
      <div className="text-black min-h-[calc(100vh-7rem)] w-full mx-auto">
        {!state.user && (
          <div className="flex justify-center h-[calc(100vh-4rem)] items-center">
            <div className="w-1/2 h-[calc(100vh-4rem)] hidden lg:block">
              <img
                src={filletImage}
                alt="Placeholder"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="lg:p-36 md:p-52 sm:p-20 p-8 w-full lg:w-1/2 2xl:p-64">
              <h1 className="text-2xl md:text-3xl font-semibold mb-4 text-[#FE5F55]">
                Login
              </h1>
              <form onSubmit={formik.handleSubmit}>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-[#FE5F55] font-bold"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    name="email"
                    className="bg-orange-50 w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="password"
                    className="block text-[#FE5F55] font-bold"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    name="password"
                    className="bg-orange-50 w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                  />
                </div>
                <button type="submit" className="btn bg-[#FE5F55] w-full">
                  Login
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
