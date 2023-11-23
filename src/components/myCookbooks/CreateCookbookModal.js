import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useApp } from "../../context/AppProvider";

export const CreateCookBookModal = ({ isOpen, closeModal }) => {
  const { state, dispatch } = useApp();

  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
    },
    onSubmit: ({ name, description }) => {
      const newCookBook = {
        id: crypto.randomUUID(),
        author: state.user.id,
        name: name,
        description: description,
        items: [],
        likes: [],
        comments: [],
        rating: [],
      };

      dispatch({ type: "CREATE_NEW_COOKBOOK", payload: newCookBook });
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Cookbook name is required")
        .min(4, "Cookbook's name needs to be four characters or longer")
        .max(20, "Cookbooks title should be shorter than twenty characters"),
      description: Yup.string().max(
        250,
        "Description cannot be longer than 250 characters"
      ),
    }),
  });

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={() => {}}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Create a new Cookbook
                </Dialog.Title>
                <form
                  className="w-full flex flex-col gap-1 justify-center items-center"
                  onSubmit={formik.handleSubmit}
                >
                  <input
                    placeholder="New Cookbook's Name"
                    className="w-full rounded-md border-solid placeholder:text-stone-400 border-stone-600 border-[1px] mt-4 bg-white text-black p-2"
                    name="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  ></input>
                  {formik.errors.name ? (
                    <span className="text-sm text-red-400">
                      {formik.errors.name &&
                        formik.touched.name &&
                        formik.errors.name}
                    </span>
                  ) : null}
                  <textarea
                    className="bg-white p-2 mt-2 text-black placeholder:text-stone-400 border-solid border-[1px] border-stone-600 rounded-md w-full min-h-[7rem] resize-none"
                    placeholder="New Cookbook's Description"
                    name="description"
                    value={formik.values.description}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  ></textarea>
                  {formik.errors.description ? (
                    <span className="text-sm text-red-400">
                      {formik.errors.description &&
                        formik.touched.description &&
                        formik.errors.description}
                    </span>
                  ) : null}
                  <div className="flex flex-row gap-4 w-full justify-evenly">
                    <button
                      type="submit"
                      className="btn btn-warning mt-4"
                      onClick={() => {
                        formik.resetForm();

                        closeModal();
                      }}
                    >
                      Create new Cookbook !
                    </button>
                    <button
                      type="button"
                      className="btn btn-error mt-4"
                      onClick={() => {
                        formik.resetForm();

                        closeModal();
                      }}
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
