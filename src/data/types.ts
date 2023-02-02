export interface ImageItem {
    name: string;
    url: string;
    srcList: string[];
}

export interface StepTaskItem {
    id: number;
    class: string;
    title: string;
    accessory: string; // connect, check, empty
    note: string;
    content: string;
    imgs: ImageItem[];
    subSteps: [{
        subId: number;
        title: string;
        accessory: string; // verify, empty
        note: string;
        content: string;
        imgs: ImageItem[];
        isVerify: boolean;
    }];
    isFulfilled: boolean;
    isOpen: boolean;
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