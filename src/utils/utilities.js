import parse from "html-react-parser";
import { addDays } from "date-fns";

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
