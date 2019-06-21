self.addEventListener(
  "message",
  ({ data }) => {
    if (data === "ping") {
      setTimeout(() => self.postMessage("pong"), 2000);
    }
  },
  false
);
