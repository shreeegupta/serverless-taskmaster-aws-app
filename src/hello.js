"use strict";

const hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Hello From Shreya...",
      },
      null,
      2
    ),
  };
};

module.exports = {
    handler: hello,
};
