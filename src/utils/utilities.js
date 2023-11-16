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
