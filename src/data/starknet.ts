export let StepTaskData = [{
    id: 1,
    class: "step1",
    title: "Step 1: Install Argent X wallet and Create StarkNet account",
    accessory: "", // connect, verify, check, both
    note: "",
    content: "",
    imgs: [],
    isFulfilled: false,
    isOpen: true,
    subSteps: [{
        subId: 1,
        title: "1.1 Install Argent X wallet at Argent X Chrome Store ",
        accessory: "",
        note: "",
        content: "https://chrome.google.com/webstore/detail/argent-x/dlcobpjiigpikoobohmabehhmhfoodbb",
        imgs: [],
        isVerify: false,
    },{
        subId: 2,
        title: "1.2 Create an account using following steps",
        accessory: "",
        imgs: [{
            name: "starknet_2.1.png",
            url: "https://cionhere.net/airdrops/starknet_2.1.png",
            srcList: [
                'https://cionhere.net/airdrops/starknet_2.1.png',
            ],
        }],
        isVerify: false,
    }]
},{
    id: 2,
    class: "step2",
    title: "Step 2: Interacting on Starknet Mainnet",
    accessory: "both",
    note: "",
    content: "",
    imgs: [],
    isFulfilled: false,
    isOpen: true,
    subSteps: [{
        subId: 1,
        title: "2.1 Go to https://starkgate.starknet.io/",
        accessory: "",
        note: "",
        content: "",
        imgs: [],
        isVerify: false,
    },{
        subId: 2,
        title: "2.2 Connect wallet then select Metamask.",
        accessory: "",
        imgs: [{
            name: "starknet_2.2.png",
            url: "https://cionhere.net/airdrops/starknet_2.2.png",
            srcList: [
                'https://cionhere.net/airdrops/starknet_2.2.png',
            ],
        }],
        isVerify: false,
    },{
        subId: 3,
        title: "2.3 Deposit",
        accessory: "check",
        note: "",
        content: "You may choose a deposit amount（like 0.1 eth） below and view your associated Metamask and Argent wallet in the top right corner. Keep in mind that you will need to pay gas fees while doing this transaction.",
        imgs: [],
        isVerify: true,
    },{
        subId: 4,
        title: "2.4 Confirm in Metamask",
        accessory: "",
        note: "",
        content: "Confirm in Metamask, following which you will be able to view your balance on Starknet in a few minutes or hours.",
        imgs: [],
        isVerify: false, 
    },{
        subId: 5,
        title: "2.5 Withdraw",
        accessory: "",
        note: "",
        content: "Send back some ETH from Starknet blockchain back to the Ethereum mainnet, send a bit less than what you deposit for paying gas fee, like 0.096 if you deposit 0.1 eth.",
        imgs: [],
        isVerify: true, 
    }]
}]