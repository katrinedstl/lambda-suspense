import React from "react";
import { renderToString } from "react-dom/server";

import { App } from "../src/app";

export async function handler() {
  const content = renderToString(React.createElement(App));

  return {
    statusCode: 200,
    headers: {
      "Content-Type": "text/html",
    },
    body: content,
  };
}