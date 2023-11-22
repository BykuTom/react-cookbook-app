import { useFormik } from "formik";
import * as Yup from "yup";
import { useApp } from "../../context/AppProvider";

export const WriteReviewForm = () => {
  const { state, dispatch } = useApp();

  const formik = useFormik({
    initialValues: {
      name: "",
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
        150,
        "Description cannot be longer than 150 characters"
      ),
    }),
  });

  return (
    <div className="w-full p-2 bg-orange-100 rounded-lg h-fit flex flex-row gap-2 items-start">
      <div className="w-[4rem] aspect-square bg-gray-500 rounded-full overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
      </div>
      <div className="flex flex-col gap-1 w-full max-w-[40rem] items-end">
        <textarea
          className="w-full bg-orange-200 min-h-[4rem] rounded-lg p-2 resize-none  placeholder:text-stone-600"
          placeholder="Leave a review!"
        ></textarea>
        <button className="btn h-[1.5rem] bg-[#FE5F55] px-2 flex flex-row gap-1">
          Submit Review
        </button>
      </div>
    </div>
  );
};
