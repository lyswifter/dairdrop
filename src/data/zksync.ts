export let StepTaskData = [
    {
        id: 1,
        class: "step1",
        title: "Step 1: Visit the zkSync testnet page and connect your Metamask wallet",
        accessory: "connect", // connect, verify, check, both
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
        accessory: "both",
        note: "",
        content: "",
        imgs: [],
        isFulfilled: false,
        isOpen: true,
        subSteps: [{
            subId: 1,
            title: "2.1 Click the “Request Funds from Faucet” button.",
            accessory: "check",
            content: "",
            note: "Note: You can request a limited amount of tokens from the faucet for testing once per 24h. ",
            imgs: [{
                name: "zksync.testnet_2.1.png",
                url: "https://cionhere.net/airdrops/zksync.testnet_2.1.png",
                srcList: [
                    'https://cionhere.net/airdrops/zksync.testnet_2.1.png',
                ],
            },
            ],
            isVerify: true,
        }, {
            subId: 2,
            title: "2.2 Join the discord of zkSync",
            accessory: "check",
            content: "After joining the discord of zkSync, you could find the goerli-eth-faucet channel, input “/faucet ” and your wallet address, then you will get 0.01 ETH.",
            note: "",
            imgs: [{
                name: "zksync.testnet_2.2.png",
                url: "https://cionhere.net/airdrops/zksync.testnet_2.2.png",
                srcList: [
                    'https://cionhere.net/airdrops/zksync.testnet_2.2.png',
                ],
            }],
            isVerify: true,
        }]
    }, {
        id: 3,
        class: "step3",
        title: "Step 3: zkSync Bridge",
        accessory: "both",
        note: "",
        content: "",
        imgs: [{
            name: "zksync.testnet_3.png",
            url: "https://cionhere.net/airdrops/zksync.testnet_3.png",
            srcList: [
                'https://cionhere.net/airdrops/zksync.testnet_3.png',
            ],
        }],
        isFulfilled: false,
        isOpen: true,
        subSteps: [{
            subId: 1,
            title: "3.1 Deposit some token from Ethereum Goerli (Testnet2) to zkSync Goerli (Testnet2)",
            accessory: "check",
            content: "",
            note: " ",
            imgs: [],
            isVerify: true,
        }, {
            subId: 2,
            title: "3.2 Withdraw some token from zkSync Goerli (Testnet2) to  Ethereum Goerli (Testnet2)",
            accessory: "check",
            content: "",
            note: "",
            imgs: [],
            isVerify: true,
        }]
    }, {
        id: 4,
        class: "step4",
        title: "Step 4: Transfer some token",
        accessory: "",
        note: "",
        content: "Now you can try to transfer some token to another address on zkSync Goerli (Testnet2).",
        imgs: [{
            name: "zksync.testnet_4.png",
            url: "https://cionhere.net/airdrops/zksync.testnet_4.png",
            srcList: [
                'https://cionhere.net/airdrops/zksync.testnet_4.png',
            ],
        }],
        isFulfilled: false,
        isOpen: true,
        subSteps: []
    }, {
        id: 5,
        class: "step5",
        title: "Step 5: Use zkSync based dapps",
        accessory: "",
        note: "",
        content: "Now you could try to use zkSync2.0 testnet based dapps like Zcasino (Another potential airdrop, Coinhere also provide Zcasino airdrop guide) to increase the possibility of getting a potential airdrop.",
        imgs: [],
        isFulfilled: false,
        isOpen: true,
        subSteps: []
    }
]