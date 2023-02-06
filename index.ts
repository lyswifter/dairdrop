import axios, { AxiosInstance, AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { ElMessage } from "element-plus";

interface Result {
    code: number;
    msg: string;
}

interface ResultData<T = any> extends Result {
    data? T;
}

const URL: string = ''
enum RequestEnums {
    TIMEOUT = 20000,
    OVERDUE = 600,
    FAIL = 999,
    SUCCESS = 200
}

const config = {
    baseURL: URL as string,

    timeout: RequestEnums.TIMEOUT as number,

    withCredential: true,
}

class RequestHttp {
    service: AxiosInstance;
    public constructor(config: AxiosRequestConfig) {
        this.service = axios.create(config);

        this.service.interceptors.request.use(
            (config: AxiosRequestConfig) => {
                const token = localStorage.getItem('token') || '';
                return {
                    ...config,
                    headers: {
                        'Authorization': token,
                    }
                }
            },
            (error: AxiosError) => {
                Promise.reject(error)
            }
        )

        this.service.interceptors.response.use(
            (response: AxiosResponse) => {
                const { data, config } = response;
                if (data.code === RequestEnums.OVERDUE) {
                    localStorage.setItem('token', '');
                    //router reset
                    return Promise.reject(data);
                }
            },
            (error: AxiosError) => {
                const {response} = error;
                if (response) {
                    this.handleCode(response.status)
                }
                if (!window.navigator.onLine) {
                    ElMessage.error("network connect failed")
                    // nav to 404 or do nothing
                }
            }
        )
    }

    handleCode(code: number): void {
        switch (code) {
            case 401:
                ElMessage.error("login error, please retry.");
                break;
        
            default:
                ElMessage.error("bad request");
                break;
        }
    }

    get<T>(url: string, params?: object): Promise<ResultData<T>> {
        return this.service.get(url, {params});
    }

    post<T>(url: string, params?: object): Promise<ResultData<T>> {
        return this.service.post(url, params);
    }
}

export default new RequestHttp(config);