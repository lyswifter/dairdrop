export interface ImageItem {
    name: string;
    url: string;
    srcList: string[];
}

export interface StepTaskSubItem {
    subId: number;
    title: string;
    accessory: string;
    note: string;
    content: string;
    imgs: ImageItem[];
    isVerify: boolean;
    isNeedVerify: boolean;
}

export interface StepTaskItem {
    id: number;
    class: string;
    title: string;
    accessory: string; // connect, check, empty
    note: string;
    content: string;
    imgs: ImageItem[];
    subSteps: StepTaskSubItem[];
    isFulfilled: boolean;
    isOpen: boolean;
    isLoading: boolean;
}

export interface RecommendationItem {
    id: number;
    name: string;
    descripation: string;
    tag: string;
    process: number;
    image: string;
    detail: string;
    tasks: StepTaskItem[];
}