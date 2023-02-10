import { domain } from "../router/domain";

export let StepTaskData = [
    {
        id: 1,
        class: "step1",
        title: "Step 1: Connect Metamask Wallet with Coinhere",
        accessory: "connect",
        note: "",
        content: "when you connect your Metamask wallet, you will be automatically asked to change the network to Goerli test network.",
        imgs: [],
        isFulfilled: false,
        isOpen: true,
        subSteps: []
    }, {
        id: 2,
        class: "step2",
        title: "Step 2: Get some Goerli test ETH from Faucet",
        accessory: "verify",
        note: "Visit the zkSync testnet page and connect your Metamask wallet,when you connect your Metamask wallet, you will be automatically asked to change the network to Goerli test network.",
        content: "Click the link: https://portal.zksync.io",
        imgs: [],
        isFulfilled: false,
        isOpen: true,
        subSteps: [{
            subId: 1,
            title: "2.1 Click the “Request Funds from Faucet” Button.",
            accessory: "check",
            content: "",
            note: "Note: You can request a limited amount of tokens from the faucet for testing once per 24h. ",
            imgs: [{
                name: "zksync.testnet_2.1.png",
                url: domain.domainUrl + "zksync.testnet_2.1.png",
                srcList: [
                    domain.domainUrl + 'zksync.testnet_2.1.png',
                ],
            },
            ],
            isVerify: true,
        }, {
            subId: 2,
            title: "2.2 Join the Discord of zkSync",
            accessory: "check",
            content: "Click the link: https://join.zksync.dev/",
            note: "After joining the discord of zkSync, you could find the goerli-eth-faucet channel, input “/faucet ” and your wallet address, then you will get 0.01 ETH.",
            imgs: [{
                name: "zksync.testnet_2.2.png",
                url: domain.domainUrl + "zksync.testnet_2.2.png",
                srcList: [
                    domain.domainUrl + "zksync.testnet_2.2.png",
                ],
            }],
            isVerify: true,
        }]
    }, {
        id: 3,
        class: "step3",
        title: "Step 3: zkSync Bridge",
        accessory: "verify",
        note: "",
        content: "",
        imgs: [{
            name: "zksync.testnet_3.png",
            url: domain.domainUrl + "zksync.testnet_3.png",
            srcList: [
                domain.domainUrl + "zksync.testnet_3.png",
            ],
        }],
        isFulfilled: false,
        isOpen: true,
        subSteps: [{
            subId: 1,
            title: "3.1 Deposit Some Token from Ethereum Goerli (Testnet2) to zkSync Goerli (Testnet2)",
            accessory: "check",
            content: "",
            note: " ",
            imgs: [],
            isVerify: true,
        }, {
            subId: 2,
            title: "3.2 Withdraw Some Token from zkSync Goerli (Testnet2) to  Ethereum Goerli (Testnet2)",
            accessory: "check",
            content: "",
            note: "",
            imgs: [],
            isVerify: true,
        }]
    }, {
        id: 4,
        class: "step4",
        title: "Step 4: Transfer Some Token",
        accessory: "",
        note: "",
        content: "Now you can try to transfer some token to another address on zkSync Goerli (Testnet2).",
        imgs: [{
            name: "zksync.testnet_4.png",
            url: domain.domainUrl + "zksync.testnet_4.png",
            srcList: [
                domain.domainUrl + "zksync.testnet_4.png",
            ],
        }],
        isFulfilled: false,
        isOpen: true,
        subSteps: []
    }, {
        id: 5,
        class: "step5",
        title: "Step 5: Use zkSync Based Dapps",
        accessory: "",
        note: "",
        content: "Now you could try to use zkSync2.0 testnet based dapps like Zcasino (Another potential airdrop, Coinhere also provide Zcasino airdrop guide) to increase the possibility of getting a potential airdrop.",
        imgs: [],
        isFulfilled: false,
        isOpen: true,
        subSteps: []
    }
]