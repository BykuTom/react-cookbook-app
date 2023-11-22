import { setToLocalStorage } from "../utils/utilities";

export const appReducer = (state, action) => {
  if (action.type === "CREATE_NEW_COOKBOOK") {
    const newCookbooks = [action.payload, ...state.cookbooks];

    localStorage.setItem("cookbooks", JSON.stringify(newCookbooks));

    return {
      ...state,
      cookbooks: newCookbooks,
    };
  }

  if (action.type === "ADD_RECIPE_TO_COOKBOOK") {
    const newCookbooks = state.cookbooks.map((cookbook) => {
      if (cookbook.id === action.payload.cookbookID) {
        return {
          ...cookbook,
          items: [action.payload.recipe, ...cookbook.items],
        };
      }

      return cookbook;
    });

    localStorage.setItem("cookbooks", JSON.stringify(newCookbooks));

    return {
      ...state,
      cookbooks: newCookbooks,
    };
  }

  if (action.type === "REMOVE_RECIPE_FROM_COOKBOOK") {
    const newCookbooks = state.cookbooks.map((cookbook) => {
      if (cookbook.id === action.payload.cookbookID) {
        const newRecipes = cookbook.items.filter((recipe) => {
          return recipe.id !== action.payload.recipeID;
        });

        return {
          ...cookbook,
          items: newRecipes,
        };
      }

      return cookbook;
    });

    localStorage.setItem("cookbooks", JSON.stringify(newCookbooks));

    return {
      ...state,
      cookbooks: newCookbooks,
    };
  }

  if (action.type === "REMOVE_COOKBOOK") {
    const { cookbookID } = action.payload;

    const newCookbooks = state.cookbooks.filter((cookbook) => {
      return cookbook.id !== cookbookID;
    });

    localStorage.setItem("cookbooks", JSON.stringify(newCookbooks));

    return {
      ...state,
      cookbooks: newCookbooks,
    };
  }

  if (action.type === "SET_MY_COOKBOOKS") {
    setToLocalStorage("mycookbooks", action.payload || []);
    return {
      ...state,
      myCookBooks: action.payload || [],
    };
  }

  if (action.type === "LOGIN") {
    return { ...state, user: action.payload };
  }
  if (action.type === "LOGOUT") {
    return { ...state, user: null };
  }

  if (action.type === "RATE_COOKBOOK") {
    const { ratingObject, cookbookID } = action.payload;

    const newCookbooks = state.cookbooks.map((cookbook) => {
      if (cookbook.id === cookbookID) {
        if (cookbook.rating) {
          const existingRatingIndex = cookbook.rating.findIndex(
            (rating) => rating.author === ratingObject.author
          );
          if (existingRatingIndex !== -1) {
            cookbook.rating[existingRatingIndex] = ratingObject;
          } else {
            cookbook.rating.push(ratingObject);
          }
        } else cookbook.rating = [ratingObject];

        return cookbook;
      } else return cookbook;
    });

    localStorage.setItem("cookbooks", JSON.stringify(newCookbooks));

    return {
      ...state,
      cookbooks: newCookbooks,
    };
  }

  if (action.type === "UPLOAD_REVIEW") {
    const { reviewObject, cookbookID } = action.payload;

    const newCookbooks = state.cookbooks.map((cookbook) => {
      if (cookbook.id === cookbookID) {
        if (cookbook.rating) {
          const exitstingReviewIndex = cookbook.comments.findIndex(
            (comments) => comments.author === reviewObject.author
          );
          if (exitstingReviewIndex !== -1) {
            cookbook.comments[exitstingReviewIndex] = reviewObject;
          } else {
            cookbook.comments.push(reviewObject);
          }
        } else cookbook.comments = [reviewObject];

        return cookbook;
      } else return cookbook;
    });

    localStorage.setItem("cookbooks", JSON.stringify(newCookbooks));

    return {
      ...state,
      cookbooks: newCookbooks,
    };
  }

  return state;
};
