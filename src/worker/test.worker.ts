/* eslint-disable no-restricted-globals */
export const ctx : Worker = self as any;


ctx.onmessage = ({ data }) => {
  if (data === "ping") {
    setTimeout(() => ctx.postMessage("pong"), 2000);
  }
};
