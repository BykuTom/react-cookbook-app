import { useFormik } from "formik";
import * as Yup from "yup";
import { useApp } from "../../context/AppProvider";
import { format } from "date-fns";
import { checkCommentStatusByID } from "../../utils/utilities";
import noUser from "../../assets/images/nouser.png";
import { PleaseLoginDialog } from "../PleaseLogInDialog";
import { useState } from "react";

export const WriteReviewForm = ({ cookbookID }) => {
  const { state, dispatch } = useApp();
  const [isLoginDialogOpen, setIsLoginDialogOpen] = useState(false);

  const formik = useFormik({
    initialValues: {
      text: "",
    },
    onSubmit: ({ text }) => {
      const review = {
        author: state.user.id,
        text: text,
        date: `${format(new Date(), "HH:mm")}  ${format(
          new Date(),
          "dd/MM/yyyy"
        )}`,
        likes: [],
      };

      dispatch({
        type: "UPLOAD_REVIEW",
        payload: { reviewObject: review, cookbookID: cookbookID },
      });
    },
    validationSchema: Yup.object({
      text: Yup.string()
        .required("You need to include review to submit review.")
        .min(10, "Review needs to be longer than 10 characters")
        .max(750, "Review needs to be under 750 characters long."),
    }),
  });

  return (
    <div className="w-full p-2 bg-orange-100 rounded-lg h-fit flex flex-row gap-2 items-start">
      <PleaseLoginDialog
        isOpen={isLoginDialogOpen}
        setIsOpen={setIsLoginDialogOpen}
        text="Please log in order to be able to post reviews!"
      />
      <div className="w-[4rem] aspect-square bg-gray-500 rounded-full overflow-hidden">
        {state.user ? (
          <img src={state.user.avatarURL} alt={state.user.username} />
        ) : (
          <img src={noUser} alt="noUser" />
        )}
      </div>
      <div className="w-full max-w-[40rem] ">
        <form
          className="w-full flex flex-col gap-1 items-end"
          onSubmit={
            state.user
              ? formik.handleSubmit
              : (event) => {
                  event.preventDefault();
                }
          }
        >
          <textarea
            // readOnly={state.user ? true : false}
            className="w-full bg-orange-200 min-h-[6rem] md:min-h-[4rem] rounded-lg p-2 resize-none  placeholder:text-stone-600"
            name="text"
            placeholder={
              state.user ? "Leave a review!" : "Please log in to comment..."
            }
            value={formik.values.text}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          ></textarea>
          {state.user && formik.errors.text && formik.touched.text && (
            <span className="text-sm text-error">{formik.errors.text}</span>
          )}
          {state.user ? (
            <button
              type="submit"
              className="btn h-[1.5rem] bg-[#FE5F55] px-2 flex flex-row gap-1"
            >
              {checkCommentStatusByID(cookbookID, state.user.id)
                ? "Edit Review"
                : "Submit Review"}
            </button>
          ) : (
            <button
              className="btn h-[1.5rem] bg-[#333] px-2 flex flex-row gap-1"
              onClick={() => {
                setIsLoginDialogOpen(true);
              }}
            >
              Submit Review
            </button>
          )}
        </form>
      </div>
    </div>
  );
};
