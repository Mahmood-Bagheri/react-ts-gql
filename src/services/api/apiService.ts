import axios from "axios";

// * interceptors
import { applyAuthInterceptor } from "./interceptors/Auth";
import { applyAccessTokenRevalidator } from "./interceptors/TokenRevalidator";
import { applyErrorHandler } from "./interceptors/ErrorHandler";
import { applyResponseNormalizer } from "./interceptors/ResponseNormalizer";

const apiService = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
});

// * applying interceptors
applyAuthInterceptor(apiService);
applyAccessTokenRevalidator(apiService);
applyErrorHandler(apiService);
applyResponseNormalizer(apiService);

export * from "axios";
export default apiService;
