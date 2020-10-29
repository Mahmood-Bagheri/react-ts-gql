import NProgress, { NProgressOptions } from "nprogress";

const NprogressConfig: Partial<NProgressOptions> = {
    showSpinner: true,
};

NProgress.configure(NprogressConfig);
export { NProgress };
