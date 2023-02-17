import { domain } from "../router/domain";

export let StepTaskData = [
    {
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
        title: "Step 2: Get Some Test Tokens",
        accessory: "",
        note: "",
        content: "",
        imgs: [],
        isFulfilled: false,
        isOpen: true,
        subSteps: [{
            subId: 1,
            title: "2.1 Get Some Free Goerli ETH",
            accessory: "",
            content: "If you don’t have any Goerli ETH in your wallet, login with your email account and enter your wallet address, you could get 0.2 Goerli ETH at Ethereum Goerli Faucet every day.",
            note: "https://goerlifaucet.com/",
            imgs: [{
                name: "gho_2.1.png",
                url: domain.domainUrl + "gho_2.1.png",
                srcList: [
                    domain.domainUrl + "gho_2.1.png",
                ],
            },
            ],
            isVerify: false,
        }, {
            subId: 2,
            title: "2.2 Get Some Free Test Assets from AAVE",
            accessory: "",
            content: "Connect your Metamask wallet with AAVE, choose one Test Asset, for example, click the Faucet AAVE Button, you could get 100 Test AAVE at Ethereum Goerli.",
            note: "https://gho.aave.com/faucet/",
            imgs: [{
                name: "gho_2.2_1.png",
                url: domain.domainUrl + "gho_2.2_1.png",
                srcList: [
                    domain.domainUrl + "gho_2.2_1.png",
                ],
            },
            {
                name: "gho_2.2_2.png",
                url: domain.domainUrl + "gho_2.2_2.png",
                srcList: [
                    domain.domainUrl + "gho_2.2_2.png",
                ],
            },
            {
                name: "gho_2.2_3.png",
                url: domain.domainUrl + "gho_2.2_3.png",
                srcList: [
                    domain.domainUrl + "gho_2.2_3.png",
                ],
            }],
            isVerify: false,
        }]
    }, {
        id: 3,
        class: "step3",
        title: "Step 3: Assets to Supply",
        accessory: "",
        note: "https://gho.aave.com/",
        content: "Try to supply and withdraw some test assets, make sure the amount you withdraw is lower than the amount you supply. In order to borrow GHO at Step 4, the collateral amount must be positive.",
        imgs: [],
        isFulfilled: false,
        isOpen: true,
        subSteps: [{
            subId: 1,
            title: "3.1 Supply some Token",
            accessory: "",
            content: "Click the Supply Button, for example, you could choose to supply test DAI. After entering the amount, you could click the Approve DAI to Continue Button and then click the Supplying DAI Button.",
            note: " ",
            imgs: [{
                name: "gho_3.1_1.png",
                url: domain.domainUrl + "gho_3.1_1.png",
                srcList: [
                    domain.domainUrl + "gho_3.1_1.png",
                ],
            },
            {
                name: "gho_3.1_2.png",
                url: domain.domainUrl + "gho_3.1_2.png",
                srcList: [
                    domain.domainUrl + "gho_3.1_2.png",
                ],
            }],
            isVerify: false,
        }, {
            subId: 2,
            title: "3.2 Withdraw some Token",
            accessory: "",
            content: "Click the Withdraw Button and try the withdraw function of AAVE.",
            note: "",
            imgs: [{
                name: "gho_3.2.png",
                url: domain.domainUrl + "gho_3.2.png",
                srcList: [
                    domain.domainUrl + "gho_3.2.png",
                ],
            }
            ],
            isVerify: false,
        }]
    }, {
        id: 4,
        class: "step4",
        title: "Step 4: Borrow and Repay GHO",
        accessory: "verify",
        note: "",
        content: "Try to borrow and repay some GHO, you could try several times to leave more interaction marks.",
        imgs: [],
        isFulfilled: false,
        isOpen: true,
        subSteps: [{
            subId: 1,
            title: "4.1 Borrow GHO",
            accessory: "check",
            content: "Click the Borrow Button of GHO, after entering the amount, you could click the Borrow GHO Button.",
            note: " ",
            imgs: [{
                name: "gho_4.1_1.png",
                url: domain.domainUrl + "gho_4.1_1.png",
                srcList: [
                    domain.domainUrl + "gho_4.1_1.png",
                ],
            },
            {
                name: " gho_4.1_2.png",
                url: domain.domainUrl + " gho_4.1_2.png",
                srcList: [
                    domain.domainUrl + " gho_4.1_2.png",
                ],
            }],
            isVerify: false,
        }, {
            subId: 2,
            title: "4.2 Repay GHO",
            accessory: "check",
            content: "Click the Repay Button of GHO, after entering the amount, you could click the Approve GHO Button and the Repay GHO Button.",
            note: "",
            imgs: [{
                name: "gho_4.2_1.png",
                url: domain.domainUrl + "gho_4.2_1.png",
                srcList: [
                    domain.domainUrl + "gho_4.2_1.png",
                ],
            }, {
                name: "gho_4.2_2.png",
                url: domain.domainUrl + "gho_4.2_2.png",
                srcList: [
                    domain.domainUrl + "gho_4.2_2.png",
                ],
            }
            ],
            isVerify: false,
        }
        ]
    }, {
        id: 5,
        class: "step5",
        title: "Step 5: Collect GHO NFT",
        accessory: "verify",
        note: "",
        content: "",
        imgs: [],
        isFulfilled: false,
        isOpen: true,
        subSteps: [{
            subId: 1,
            title: "5.1 Collect GHO NFT",
            accessory: "check",
            content: "Connect your wallet and change the connection into Polygon Mainnet. Then click the COLLECT Button to collect GHO NFT, which is supported by both AAVE and LENS.",
            note: "https://collect.gho.xyz/",
            imgs: [{
                name: "gho_5.1.png",
                url: domain.domainUrl + "gho_5.1.png",
                srcList: [
                    domain.domainUrl + "gho_5.1.png",
                ],
            }],
            isVerify: false,
        }
        ]
    }, {
        id: 6,
        class: "step6",
        title: "Step 6: Join the Discord of AAVE and Give Feedback about Testnet",
        accessory: "",
        note: "https://discord.com/invite/aave",
        content: "Click the link to join the Discord of AAVE, enter the # feedback chanel to give your feedback about testnet, don’t forget to leave your wallet address and the screenshot of your interactive record with the testnet.",
        imgs: [{
            name: "gho_6.png",
            url: domain.domainUrl + "gho_6.png",
            srcList: [
                domain.domainUrl + "gho_6.png",
            ],
        }
        ],
        isFulfilled: false,
        isOpen: true,
        subSteps: [],
        isVerify: false,
    }
]