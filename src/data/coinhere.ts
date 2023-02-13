import { domain } from "../router/domain";

export let StepTaskData = [
    {
        id: 1,
        class: "step1",
        title: "Step 1: Connect your Metamask Wallet with Coinhere",
        accessory: "join",
        note: "",
        content: "when you connect your Metamask wallet, you will be automatically asked to change the network to Goerli test network.",
        imgs: [],
        isFulfilled: false,
        isOpen: true,
        subSteps: []
    }, {
        id: 2,
        class: "step2",
        title: "Step 2: Verify Your Twitter Account and Follow CoinHere",
        accessory: "auth",
        note: "",
        content: "",
        imgs: [],
        isFulfilled: false,
        isOpen: true,
        subSteps: []
    }, {
        id: 3,
        class: "step3",
        title: "Step 3: Which of the following fields interest you most?",
        accessory: "verify",
        note: "",
        content: "",
        imgs: [],
        isFulfilled: false,
        isOpen: true,
        subSteps: []
    }
]