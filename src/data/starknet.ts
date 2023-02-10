import { domain } from "../router/domain";

export let StepTaskData = [{
    id: 1,
    class: "step1",
    title: "Step 1: Connect Metamask Wallet with Coinhere",
    accessory: "connect",
    note: "",
    content: "Connect MetaMask wallet",
    imgs: [],
    isFulfilled: false,
    isOpen: true,
    subSteps: []
},{
    id: 2,
    class: "step2",
    title: "Step 2: Install Argent X wallet and Create StarkNet account",
    accessory: "", // connect, verify, check, both
    note: "",
    content: "",
    imgs: [],
    isFulfilled: false,
    isOpen: true,
    subSteps: [{
        subId: 1,
        title: "2.1 Install Argent X Wallet at Argent X Chrome Store ",
        accessory: "",
        note: "https://chrome.google.com/webstore/detail/argent-x/dlcobpjiigpikoobohmabehhmhfoodbb",
        content: "",
        imgs: [],
        isVerify: false,
    },{
        subId: 2,
        title: "2.2 Create an Account Using Following Steps",
        accessory: "",
        imgs: [{
            name: "starknet_2.1.png",
            url: domain.domainUrl + "starknet_2.1.png",
            srcList: [
                domain.domainUrl +  'starknet_2.1.png',
            ],
        }],
        isVerify: false,
    }]
},{
    id: 3,
    class: "step3",
    title: "Step 3: Interacting on Starknet Mainnet",
    accessory: "verify",
    note: "",
    content: "",
    imgs: [],
    isFulfilled: false,
    isOpen: true,
    subSteps: [{
        subId: 1,
        title: "3.1 Visit the Starknet Page",
        accessory: "check",
        note: "https://starkgate.starknet.io/",
        content: "",
        imgs: [],
        isVerify: false,
    },{
        subId: 2,
        title: "3.2 Connect Wallet Then Select Metamask.",
        accessory: "check",
        imgs: [{
            name: "starknet_2.2.png",
            url: domain.domainUrl + "starknet_2.2.png",
            srcList: [
                domain.domainUrl +  'starknet_2.2.png',
            ],
        }],
        isVerify: false,
    },{
        subId: 3,
        title: "3.3 Deposit",
        accessory: "check",
        note: "",
        content: "You may choose a deposit amount(like 0.1 eth) below and view your associated Metamask and Argent wallet in the top right corner. Keep in mind that you will need to pay gas fees while doing this transaction.",
        imgs: [],
        isVerify: false,
    },{
        subId: 4,
        title: "3.4 Confirm in Metamask",
        accessory: "",
        note: "",
        content: "Confirm in Metamask, following which you will be able to view your balance on Starknet in a few minutes or hours.",
        imgs: [],
        isVerify: false, 
    },{
        subId: 5,
        title: "3.5 Withdraw",
        accessory: "check",
        note: "",
        content: "Send back some ETH from Starknet blockchain back to the Ethereum mainnet, send a bit less than what you deposit for paying gas fee, like 0.096 if you deposit 0.1 eth.",
        imgs: [],
        isVerify: false, 
    }]
}]