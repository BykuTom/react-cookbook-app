import { useFormik } from "formik";
import * as Yup from "yup";
import { useApp } from "../../context/AppProvider";
import { format } from "date-fns";
import { checkCommentStatusByID } from "../../utils/utilities";
export const WriteReviewForm = ({ cookbookID }) => {
  const { state, dispatch } = useApp();

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
      <div className="w-[4rem] aspect-square bg-gray-500 rounded-full overflow-hidden">
        <img src={state.user.avatarURL} alt={state.user.username} />
      </div>
      <div className="w-full max-w-[40rem] ">
        <form
          className="w-full flex flex-col gap-1 items-end"
          onSubmit={formik.handleSubmit}
        >
          <textarea
            className="w-full bg-orange-200 min-h-[6rem] md:min-h-[4rem] rounded-lg p-2 resize-none  placeholder:text-stone-600"
            name="text"
            placeholder="Leave a review!"
            value={formik.values.text}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          ></textarea>
          {formik.errors.text ? (
            <span className="text-sm text-error">
              {formik.errors.text && formik.touched.text && formik.errors.text}
            </span>
          ) : null}
          <button
            type="submit"
            className="btn h-[1.5rem] bg-[#FE5F55] px-2 flex flex-row gap-1"
          >
            {checkCommentStatusByID(cookbookID, state.user.id)
              ? "Edit Review"
              : "Submit Review"}
          </button>
        </form>
      </div>
    </div>
  );
};
