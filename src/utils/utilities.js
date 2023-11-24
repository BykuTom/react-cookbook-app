import parse from "html-react-parser";
import { addDays } from "date-fns";
import { userData } from "../assets/data/mockUserData";

export const encodeURIObject = (object) => {
  if (object) {
    return encodeURIComponent(JSON.stringify(object));
  }
};

export const decodeURIObject = (objectURI) => {
  try {
    if (objectURI) {
      return JSON.parse(decodeURIComponent(objectURI));
    }
  } catch (error) {
    console.error("Error parsing JSON:", error);
  }
  return undefined;
};

export const getFromLocalStorage = (key, defaultValue) => {
  const dataFromLS = localStorage.getItem(key);

  if (!dataFromLS) {
    localStorage.setItem(key, JSON.stringify(defaultValue));
    return defaultValue;
  }
  return JSON.parse(dataFromLS);
};

export const setToLocalStorage = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const parseToHTML = (string) => {
  return parse(string);
};

export const setCookie = (name, value, days) => {
  const expirationDate = addDays(new Date(), days);

  const cookie = `${name}=${encodeURIComponent(
    value
  )}; expires=${expirationDate.toUTCString()}; path=/`;
  document.cookie = cookie;
};

export const getCookie = (name) => {
  const cookies = document.cookie.split(";");

  for (const cookie of cookies) {
    const [cookieName, cookieValue] = cookie.split("=").map((c) => c.trim());

    if (cookieName === name) {
      return JSON.parse(decodeURIComponent(cookieValue));
    }
  }

  return null;
};

export const getAuthor = (cookbook) => {
  const user = userData.find((user) => user.id === cookbook.author);

  return user.username;
};

export const handleRating = (event, state, dispatch, cookbook, setRating) => {
  if (state.user) {
    const payload = {
      cookbookID: cookbook.id,
      ratingObject: {
        author: state.user.id,
        score: event,
      },
    };
    dispatch({ type: "RATE_COOKBOOK", payload: payload });
    setRating(event);
  } else {
    console.log("Please Log in"); // Dispalay loggin alert modal
  }
};

export const averageRating = (cookbook) => {
  let overallScore = 0;
  let numberOfUniqueRatings = 0;

  if (cookbook.rating) {
    cookbook.rating.forEach((rating) => {
      overallScore += rating.score;
      numberOfUniqueRatings += 1;
    });
  }

  if (numberOfUniqueRatings === 0) {
    return 0;
  }

  return overallScore / numberOfUniqueRatings;
};

export const getUserByID = (userID) => {
  const user = userData.find((user) => user.id === userID);

  return user;
};
export const getCookbookByID = (cookbookID) => {
  const cookbooks = getFromLocalStorage("cookbooks", []);
  const cookbook = cookbooks.find((cookbook) => cookbook.id === cookbookID);

  return cookbook;
};

export const checkCommentStatusByID = (cookbookID, userID) => {
  const cookbook = getCookbookByID(cookbookID);
  const review = cookbook.comments.find((comment) => comment.author === userID);

  if (review) {
    return true;
  } else {
    return false;
  }
};
