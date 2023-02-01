export interface ImageItem {
    name: string;
    url: string;
    srcList: string[];
}

export interface StepTaskItem {
    id: number;
    class: string;
    title: string;
    accessory: string; // connect, check, empty
    note: string;
    content: string;
    imgs: ImageItem[];
    subSteps: [{
        subId: number;
        title: string;
        accessory: string; // verify, empty
        note: string;
        content: string;
        imgs: ImageItem[];
        isVerify: boolean;
    }];
    isFulfilled: boolean;
    isOpen: boolean;
}

export interface RecommendationItem {
    id: number;
    name: string;
    descripation: string;
    tag: string;
    process: number;
    image: string;
    detail: string;
    tasks: StepTaskItem;
}

export let Projects = {
    production: [{
        id: 1,
        name: "Scroll",
        descripation: "Scroll is a zkEVM-based zkRollup on Ethereum that enables native compatibility for existing Ethereum applications and tools. Scroll doesn't have its own token yet but may launch one in the future. Early users who've finished testnet tests may get an airdrop if they launch a token.",
        tag: "",
        process: 50,
        image: "../../src/logos/scroll---logo-245px.png",
        detail: "scroll"
    }, {
        id: 2,
        name: "ZKasino",
        descripation: "ZKasino is a decentralized, crypto betting platform and blockchain casino built on Layer 2 ZK-Rollups technology which aims to be the most fair and transparent platform with the lowest house edge compared to all other betting platforms. ZKasino has confirmed to launch its token called “ZKAS” and has very high potential to do an airdrop. Early users who've played games in testnets and mainnets on the platform may get an airdrop when they launch their token.",
        tag: "",
        process: 20,
        image: "../../src/logos/ZKASINO_logo.png",
        detail: "zkasino"
    }]
}

export let StepTaskData = {
    production: [{
        id: 1,
        class: "step1",
        title: "Step 1: Connect Metamask wallet",
        accessory: "connect", // connect, verify, check, both
        note: "",
        content: "Connect MetaMask wallet",
        imgs: [],
        isFulfilled: false,
        isOpen: true,
        subSteps: []
    },{
        id: 2,
        class: "step2",
        title: "Step 2: Visit the Scroll testnet page.",
        accessory: "check",
        note: "Note: Please completely remove any previous Scroll L1 and L2 networks from your MetaMask before proceeding. And make sure your wallet address you interact withScroll is the same as the one you interact with Coinhere that we could verify each of your interactions with Scroll.",
        content: "",
        imgs: [{
            name: "zksync.png",
            url: "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
            srcList: [
                'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
            ],
        },{
            name: "zksync.png",
            url: "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
            srcList: [
                'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
            ],
        }],
        isFulfilled: false,
        isOpen: true,
        subSteps: [{
            subId: 1,
            title: "2.1 Connect MetaMask for Scroll L1 Testnet and Scroll L2 Testnet on Prealpha page(Note: Please completely remove any previous Scroll L1 and L2 networks from your MetaMask before proceeding)",
            accessory: "verify",
            note: "",
            content: "",
            imgs: [{
                name: "zksync.png",
                url: "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
                srcList: [
                    'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
                ],
            },{
                name: "zksync.png",
                url: "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
                srcList: [
                    'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
                ],
            }],
            isVerify: false,
        },{
            subId: 2,
            title: "2.2 Add TSUSDC token on L1 Testnet, TSUSDC token on L2 Testnet and TSUNI2 token on L2 Testnet to your wallet on Prealpha page.",
            accessory: "verify",
            imgs: [],
            isVerify: false,
        }]
    },{
        id: 3,
        class: "step3",
        title: "Step 3: Get some test ETH(TSETH) and test USDC(TSUSDC) tokens",
        accessory: "check",
        note: "Note: You could request tokens every 24h and receive 1 TSETH & 100 TSUSDC per request",
        content: "You could receive test ETH(TSETH) and test USDC(TSUSDC) tokens on Scroll L1 Testnet on Faucet page.",
        imgs: [],
        isFulfilled: false,
        isOpen: true,
        subSteps: []
    },{
        id: 4,
        class: "step4",
        title: "Step 4: Try Scroll Bridge",
        accessory: "check",
        note: "",
        content: "Click the bridge section and try to send tokens from and to Scroll L1 Testnet and Scroll L2 Testnet.",
        imgs: [],
        isFulfilled: false,
        isOpen: true,
        subSteps: [{
            subId: 1,
            title: "4.1 Send some TSETH token from Scroll L1 Testnet to Scroll L2 Testnet.",
            accessory: "verify",
            imgs: [],
            isVerify: false,
        },{
            subId: 2,
            title: "4.2 Send some TSUSDC token from Scroll L1 Testnet to Scroll L2 Testnet on Bridge page.",
            accessory: "verify",
            imgs: [],
            isVerify: false,
        },{
            subId: 3,
            title: "4.3 Send some TSETH token from Scroll L2 Testnet to Scroll L1 Testnet on Bridge page.",
            accessory: "verify",
            imgs: [],
            isVerify: false,
        },{
            subId: 4,
            title: "4.4 Send some TSUSDC token from Scroll L2 Testnet to Scroll L1 Testnet on Bridge page.",
            accessory: "verify",
            imgs: [],
            isVerify: false,
        }]
    },{
        id: 5,
        class: "step5",
        title: "Step 5: Try Scroll Swap",
        accessory: "check",
        note: "",
        content: "Click the Swap section in Scroll L2 Testnet, you could try the swap function and add liquidity function",
        imgs: [],
        isFulfilled: false,
        isOpen: true,
        subSteps: [{
            subId: 1,
            title: "5.1 Wrap TSETH to TSWETH",
            accessory: "verify",
            imgs: [],
            isVerify: false,
        },{
            subId: 2,
            title: "5.2 Unwap TSWETH to TSETH",
            accessory: "verify",
            imgs: [],
            isVerify: false,
        },{
            subId: 3,
            title: "5.3 Swap one Token to another Swap one Token to another, for example, you could try to swap TSWETH for TSUSDC",
            accessory: "verify",
            imgs: [],
            isVerify: false,
        }]
    },{
        id: 6,
        class: "step6",
        title: "Step 6: Add and remove liquidity",
        accessory: "check",
        note: "",
        content: "Click the Swap section in Scroll L2 Testnet, you could try the swap function and add liquidity function",
        isFulfilled: false,
        isOpen: true,
        subSteps: [{
            subId: 1,
            title: "6.1 add liquidity",
            accessory: "verify",
            note: "",
            content: "Click liquidity pool then try to add liquidity, for example, you could input some TSETH and some TSUSDC then click the supply bottom and then click the confirm supply.",
            imgs: [{
                name: "zksync.png",
                url: "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
                srcList: [
                    'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
                ],
            },{
                name: "zksync.png",
                url: "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
                srcList: [
                    'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
                ],
            }],
            isVerify: false,
        },{
            subId: 2,
            title: "6.2 Remove liquidity",
            accessory: "verify",
            note: "Note:xxxxxx",
            content: "After you providing LP liquidity, you could click Token1/Token2 folded page(eg.TSUSDC/TSETH) and could try to remove your liquidity.",
            imgs: [{
                name: "zksync.png",
                url: "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
                srcList: [
                    'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
                ],
            }],
            isVerify: false,
        }]
    }]
}