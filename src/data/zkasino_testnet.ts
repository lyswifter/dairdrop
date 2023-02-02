export let StepTaskData = [{
    id: 1,
    class: "step1",
    title: "Step 1: Connect Metamask Wallet with Coinhere",
    accessory: "connect", // connect, verify, check, both
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
    accessory: "both",
    note: "",
    content: "Connect your Metamask wallet with a testnet, you could get testnet tokens by clicking the “Request Gas & Tweet” bottom and ZKUSD (ZKasino USD) by clicking the “Mint” bottom on Page Testnet. After getting both test tokens of the test chains and ZKUSD, you could try to play the games on the Page Games. Don’t forget to change the testnet into another testnet and repeat the above methods.",
    imgs: [],
    isFulfilled: false,
    isOpen: true,
    subSteps: [{
        subId: 1,
        title: "2.1 Play Games in BNB Chain Testnet",
        accessory: "",
        content: "",
        note: "",
        imgs: [{
            name: "arbitrum_2.1.png",
            url: "https://cionhere.net/airdrops/arbitrum_2.1.png",
            srcList: [
                'https://cionhere.net/airdrops/arbitrum_2.1.png',
            ],
        },
        ],
        isVerify: true,
    }, {
        subId: 2,
        title: "2.2 Play Games in Polygon Testnet",
        accessory: "",
        content: "",
        note: "",
        imgs: [{
            name: "arbitrum_2.2_1.png",
            url: "https://cionhere.net/airdrops/arbitrum_2.2_1.png",
            srcList: [
                'https://cionhere.net/airdrops/arbitrum_2.2_1.png',
            ],
        }, {
            name: "arbitrum_2.2_2.png",
            url: "https://cionhere.net/airdrops/arbitrum_2.2_2.png",
            srcList: [
                'https://cionhere.net/airdrops/arbitrum_2.2_2.png',
            ],
        }],
        isVerify: true,
    }, {
        subId: 3,
        title: "2.3 Play Games in Fantom Testnet",
        accessory: "",
        content: "",
        note: "",
        imgs: [{
            name: "arbitrum_2.3.png",
            url: "https://cionhere.net/airdrops/arbitrum_2.3.png",
            srcList: [
                'https://cionhere.net/airdrops/arbitrum_2.3.png',
            ],
        },
        ],
        isVerify: true,
    }, {
        subId: 4,
        title: "2.4 Play Games in Arbitrium Testnet",
        accessory: "",
        content: "",
        note: "",
        imgs: [{
            name: "arbitrum_2.4.png",
            url: "https://cionhere.net/airdrops/arbitrum_2.4.png",
            srcList: [
                'https://cionhere.net/airdrops/arbitrum_2.4.png',
            ],
        },
        ],
        isVerify: true,
    }, {
        subId: 5,
        title: "2.5 Play Games in zkSync 2.0 Testnet",
        accessory: "",
        content: "",
        note: "",
        imgs: [{
            name: "arbitrum_2.4.png",
            url: "https://cionhere.net/airdrops/arbitrum_2.4.png",
            srcList: [
                'https://cionhere.net/airdrops/arbitrum_2.4.png',
            ],
        },
        ],
        isVerify: true,
    }]
}]