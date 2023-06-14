import React from "react";
import { renderToString } from "react-dom/server";
import { streamifyResponse } from "lambda-stream"; // https://github.com/astuyve/lambda-stream

import { App } from "../src/app";

export const handler = streamifyResponse(myHandler);

async function myHandler(_event, responseStream) {
  const content = renderToString(React.createElement(App));

  responseStream.setContentType("text/html");
  responseStream.write(content);
  responseStream.end();
}
