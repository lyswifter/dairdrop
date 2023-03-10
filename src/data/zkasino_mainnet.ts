import { domain } from "../router/domain";

export let StepTaskData = [{
    id: 1,
    class: "step1",
    title: "Step 1: Connect Metamask Wallet with Coinhere",
    accessory: "connect", // connect, verify, check
    note: "",
    content: "Connect MetaMask wallet",
    imgs: [],
    isFulfilled: false,
    isOpen: true,
    subSteps: []
}, {
    id: 2,
    class: "step2",
    title: "Step 2: Play games on Polygon Chain Mainnet.",
    accessory: "verify",
    note: "https://play.zkasino.io/en",
    content: "",
    imgs: [{
        name: "zkasino.mainnet_2.png",
        url: domain.domainUrl + "zkasino.mainnet_2.png",
        srcList: [
            domain.domainUrl + "zkasino.mainnet_2.png",
        ],
    }],
    isFulfilled: false,
    isOpen: true,
    subSteps: [{
        subId: 1,
        title: "2.1 Play Dice on Polygon Mainnet",
        accessory: "check",
        content: "",
        note: "",
        imgs: [],
        isVerify: false,
    }, {
        subId: 1,
        title: "2.2 Play Plinko on Polygon Mainnet",
        accessory: "check",
        content: "",
        note: "",
        imgs: [],
        isVerify: false,
    }, {
        subId: 1,
        title: "2.3 Play Video Poker on Polygon Mainnet",
        accessory: "check",
        content: "",
        note: "",
        imgs: [],
        isVerify: false,
    }, {
        subId: 1,
        title: "2.4 Play Slots on Polygon Mainnet",
        accessory: "check",
        content: "",
        note: "",
        imgs: [],
        isVerify: false,
    }, {
        subId: 1,
        title: "2.5 Play Mines on Polygon Mainnet",
        accessory: "check",
        content: "",
        note: "",
        imgs: [],
        isVerify: false,
    }, {
        subId: 1,
        title: "2.6 Play Rock Paper Scissors on Polygon Mainnet",
        accessory: "check",
        content: "",
        note: "",
        imgs: [],
        isVerify: false,
    }, {
        subId: 1,
        title: "2.7 Play Coin Flip on Polygon Mainnet",
        accessory: "check",
        content: "",
        note: "",
        imgs: [],
        isVerify: false,
    }],
}, {
    id: 3,
    class: "step3",
    title: "Step 3: Paly games on BNB Chain Mainnet.",
    accessory: "verify",
    note: "",
    content: "Connect your Metamask wallet with a testnet, you could get testnet tokens by clicking the ???Request Gas & Tweet??? button and ZKUSD (ZKasino USD) by clicking the ???Mint??? button on Page Testnet. After getting both test tokens of the test chains and ZKUSD, you could try to play the games on the Page Games. Don???t forget to change the testnet into another testnet and repeat the above methods.",
    imgs: [],
    isFulfilled: false,
    isOpen: true,
    subSteps: [{
        subId: 1,
        title: "3.1 Play Dice on BNB Chain Mainnet",
        accessory: "check",
        content: "",
        note: "",
        imgs: [],
        isVerify: false,
    }, {
        subId: 1,
        title: "3.2 Play Plinko on BNB Chain Mainnet",
        accessory: "check",
        content: "",
        note: "",
        imgs: [],
        isVerify: false,
    }, {
        subId: 1,
        title: "3.3 Play Video Poker on BNB Chain Mainnet",
        accessory: "check",
        content: "",
        note: "",
        imgs: [],
        isVerify: false,
    }, {
        subId: 1,
        title: "3.4 Play Slots on BNB Chain Mainnet",
        accessory: "check",
        content: "",
        note: "",
        imgs: [],
        isVerify: false,
    }, {
        subId: 1,
        title: "3.5 Play Mines on BNB Chain Mainnet",
        accessory: "check",
        content: "",
        note: "",
        imgs: [],
        isVerify: false,
    }, {
        subId: 1,
        title: "3.6 Play Rock Paper Scissors on BNB Chain Mainnet",
        accessory: "check",
        content: "",
        note: "",
        imgs: [],
        isVerify: false,
    }, {
        subId: 1,
        title: "3.7 Play Coin Flip on BNB Chain Mainnet",
        accessory: "check",
        content: "",
        note: "",
        imgs: [],
        isVerify: false,
    }],
}]