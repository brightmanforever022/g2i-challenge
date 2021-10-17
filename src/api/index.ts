const { URL } = require("../constants");

export const getQuestions = async () => {
  return await fetch(URL)
    .then(response => response.json())
    .then(data => {
      return data.results;
    });
};