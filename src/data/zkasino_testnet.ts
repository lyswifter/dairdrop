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
}, {
    id: 2,
    class: "step2",
    title: "Step 2: Paly games in testnets",
    accessory: "verify",
    note: "Connect your Metamask wallet with a testnet, you could get testnet tokens by clicking the “Request Gas & Tweet” bottom and ZKUSD (ZKasino USD) by clicking the “Mint” bottom on Page Testnet. After getting both test tokens of the test chains and ZKUSD, you could try to play the games on the Page Games. Don’t forget to change the testnet into another testnet and repeat the above methods.",
    content: "Click the link: https://play.zkasino.io/en",
    imgs: [
        {
            name: "zkasino.testnet_2.png",
            url: domain.domainUrl + "zkasino.testnet_2.png",
            srcList: [
                domain.domainUrl + "zkasino.testnet_2.png",
            ],
        }
    ],
    isFulfilled: false,
    isOpen: true,
    subSteps: [{
        subId: 1,
        title: "2.1 Play Games in BNB Chain Testnet",
        accessory: "check",
        content: "",
        note: "",
        imgs: [],
        isVerify: false,
    }, {
        subId: 2,
        title: "2.2 Play Games in Polygon Testnet",
        accessory: "check",
        content: "",
        note: "",
        imgs: [],
        isVerify: false,
    }, {
        subId: 3,
        title: "2.3 Play Games in Fantom Testnet",
        accessory: "check",
        content: "",
        note: "",
        imgs: [],
        isVerify: false,
    }, {
        subId: 4,
        title: "2.4 Play Games in Arbitrium Testnet",
        accessory: "check",
        content: "",
        note: "",
        imgs: [],
        isVerify: false,
    }, {
        subId: 5,
        title: "2.5 Play Games in zkSync 2.0 Testnet",
        accessory: "check",
        content: "",
        note: "",
        imgs: [],
        isVerify: false,
    }]
}]