self.onmessage = ({ data }) => {
  if (data === "ping") {
    setTimeout(() => self.postMessage("pong"), 2000);
  }
};
