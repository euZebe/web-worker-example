export interface WorkerResponse {
  data: string;
}

// typings/custom.d.ts
declare module "worker-loader!*" {
  class WebpackWorker extends Worker {
    constructor();
  }

  export default WebpackWorker;
}
