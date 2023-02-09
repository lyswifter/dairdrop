import { RecommendationItem, StepTaskItem, ImageItem } from "../data/types";

import { domain } from "../router/domain";

export let StepTaskData = [
    {
        id: 1,
        class: "step1",
        title: "Step 1: Connect Metamask Wallet with Coinhere",
        accessory: "connect", // connect, verify, check
        note: "",
        content: "Click the Connect, after you log in, click the Join buttom. ",
        imgs: [],
        isFulfilled: false,
        isOpen: true,
        subSteps: []
    }, {
        id: 2,
        class: "step",
        title: "Step 2: Visit the Scroll Testnet Page and Configure Metamask for Testnet",
        accessory: "",
        note: "",
        content: "",
        imgs: [],
        isFulfilled: false,
        isOpen: true,
        subSteps: [{
            subId: 1,
            title: "2.1 Connect MetaMask for Scroll L1 Testnet and Scroll L2 Testnet on Prealpha Page",
            accessory: "verify",
            note: "Note: If the scroll notice Please completely remove any previous Scroll L1 and L2 networks from your MetaMask before proceeding, you could follow the steps they recommend or try to use a new wallet address to interact.",
            content: "Click the link: https://scroll.io/prealpha",
            imgs: [],
            isVerify: false,
        }, {
            subId: 2,
            title: "2.2 Add TSUSDC token on L1 Testnet, TSUSDC token on L2 Testnet and TSUNI2 token on L2 Testnet to Your Wallet on Prealpha Page",
            accessory: "verify",
            imgs: [{
                name: "scroll_1.2.png",
                url: domain.domainUrl + "scroll_1.2.png",
                srcList: [
                    domain.domainUrl + "scroll_1.2.png",
                ],
            }],
            isVerify: false,
        }]
    }, {
        id: 3,
        class: "step3",
        title: "Step 3: Get Some Test Token",
        accessory: "verify",
        note: "Note: You could request tokens every 24h.",
        content: "You could receive test ETH(TSETH) on Scroll L1 Testnet on Faucet page.",
        imgs: [{
            name: "scroll_2.png",
            url: domain.domainUrl + "scroll_2.png",
            srcList: [
                domain.domainUrl + "scroll_2.png",
            ],
        }],
        isFulfilled: false,
        isOpen: true,
        subSteps: [],
        isVerify: false,
    }, {
        id: 4,
        class: "step4",
        title: "Step 4: Try Scroll Bridge",
        accessory: "verify",
        note: "",
        content: "Click the Bridge Section and Try to Send Tokens from and to Scroll L1 Testnet and Scroll L2 Testnet",
        imgs: [],
        isFulfilled: false,
        isOpen: true,
        subSteps: [{
            subId: 1,
            title: "4.1 Send Some TSETH Token from Scroll L1 Testnet to Scroll L2 Testnet",
            accessory: "check",
            note: "Note: After finishing step 4.1, you need to wait for several hours to receive TSETH on Scroll L2. During these period, you could try other airdrops guidance on Coinhere.",
            imgs: [
                {
                    name: "scroll_3.1.png",
                    url: domain.domainUrl + "scroll_3.1.png",
                    srcList: [
                        domain.domainUrl + "scroll_3.1.png",
                    ],
                }
            ],
            isVerify: false,
        }, {
            subId: 2,
            title: "4.2 Send Some TSETH Token from Scroll L2 Testnet to Scroll L1 Testnet on Bridge Page",
            accessory: "check",
            imgs: [
                {
                    name: "scroll_3.3.png",
                    url: domain.domainUrl + "scroll_3.3.png",
                    srcList: [
                        domain.domainUrl + "scroll_3.3.png",
                    ],
                    isVerify: false,
                }]
        }]
    }, {
        id: 5,
        class: "step5",
        title: "Step 5: Try Scroll Swap",
        accessory: "verify",
        note: "",
        content: "Click the Swap section in Scroll L2 Testnet, you could try the swap function and add liquidity function",
        imgs: [],
        isFulfilled: false,
        isOpen: true,
        subSteps: [{
            subId: 1,
            title: "5.1 Wrap TSETH to TSWETH",
            accessory: "check",
            imgs: [
                {
                    name: "scroll_4.1.png",
                    url: domain.domainUrl + "scroll_4.1.png",
                    srcList: [
                        domain.domainUrl + "scroll_4.1.png",
                    ],
                }
            ],
            isVerify: false,
        }, {
            subId: 2,
            title: "5.2 Unwap TSWETH to TSETH",
            accessory: "check",
            imgs: [],
            isVerify: false,
        }, {
            subId: 3,
            title: "5.3 Swap One Token to Another Token",
            accessory: "check",
            content: "Swap one Token to another, for example, you could try to swap TSWETH for TSUSDC",
            imgs: [],
            isVerify: false,
        }]
    }, {
        id: 6,
        class: "step6",
        title: "Step 6: Add and Remove Liquidity",
        accessory: "verify",
        note: "",
        content: "Click the Swap section in Scroll L2 Testnet, you could try the swap function and add liquidity function",
        isFulfilled: false,
        isOpen: true,
        subSteps: [
            {
                subId: 1,
                title: "6.1 Add Liquidity",
                accessory: "check",
                note: "",
                content: "Click liquidity pool then try to add liquidity, for example, you could input some TSETH and some TSUSDC then click the supply bottom and then click the confirm supply.",
                imgs: [{
                    name: "scroll_5.1_1.png",
                    url: domain.domainUrl + "scroll_5.1_1.png",
                    srcList: [
                        domain.domainUrl + "scroll_5.1_1.png",
                    ],
                }, {
                    name: "scroll_5.1_2.png",
                    url: domain.domainUrl + "scroll_5.1_2.png",
                    srcList: [
                        domain.domainUrl + "scroll_5.1_2.png",
                    ],
                }],
                isVerify: false,
            }, {
                subId: 2,
                title: "6.2 Remove Liquidity",
                accessory: "check",
                note: "",
                content: "After you providing LP liquidity, you could click Token1/Token2 folded page(eg.TSUSDC/TSETH) and could try to remove your liquidity.",
                imgs: [{
                    name: "scroll_5.2_1.png",
                    url: domain.domainUrl + "scroll_5.2_1.png",
                    srcList: [
                        domain.domainUrl + "scroll_5.2_1.png",
                    ],
                }, {
                    name: "scroll_5.2_2.png",
                    url: domain.domainUrl + "scroll_5.2_2.png",
                    srcList: [
                        domain.domainUrl + "scroll_5.2_2.png",
                    ],
                }],
                isVerify: false,
            }]
    }]