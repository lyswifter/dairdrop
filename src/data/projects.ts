export interface RecommendationItem {
    id: number;
    name: string;
    descripation: string;
    tag: string;
    process: number;
    image: string;
    detail: string;
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

export interface StepTaskItem {
    id: number;
    class: string;
    title: string;
    accesory: string;
    subtitle: string;
    note: string;
    subSteps: [{
        subId: number;
        title: string;
        accesory: string;
        imgs: []
        isVerify: boolean;
    }];
    isFulfilled: boolean;
    isOpen: boolean;
}

export let StepTaskData = {
    production: [{
        id: 1,
        class: "step1",
        title: "Step 1: Connect Metamask wallet",
        accesory: "connect", // connect, verify, check, both
        subtitle: "",
        note: "",
        isFulfilled: false,
        isOpen: true,
        subSteps: [{
            subId: 1,
            title: "Connect MetaMask wallet",
            accesory: "verify",
            imgs: [],
            isVerify: false,
        }]
    },{
        id: 2,
        class: "step2",
        title: "Step 2: Visit the Scroll testnet page.",
        accesory: "verify",
        subtitle: "",
        note: "Note: Please completely remove any previous Scroll L1 and L2 networks from your MetaMask before proceeding. And make sure your wallet address you interact withScroll is the same as the one you interact with Coinhere that we could verify each of your interactions with Scroll.",
        isFulfilled: false,
        isOpen: true,
        subSteps: [{
            subId: 1,
            title: "2.1 Connect MetaMask for Scroll L1 Testnet and Scroll L2 Testnet on Prealpha page(Note: Please completely remove any previous Scroll L1 and L2 networks from your MetaMask before proceeding)",
            accesory: "verify",
            imgs: [],
            isVerify: false,
        },{
            subId: 2,
            title: "2.2 Add TSUSDC token on L1 Testnet, TSUSDC token on L2 Testnet and TSUNI2 token on L2 Testnet to your wallet on Prealpha page.",
            accesory: "verify",
            imgs: [],
            isVerify: false,
        }]
    },{
        id: 3,
        class: "step3",
        title: "Step 3: Get some test ETH(TSETH) and test USDC(TSUSDC) tokens",
        accesory: "",
        subtitle: "You could receive test ETH(TSETH) and test USDC(TSUSDC) tokens on Scroll L1 Testnet on Faucet page.",
        note: "",
        isFulfilled: false,
        isOpen: true,
        subSteps: [{
            subId: 1,
            title: "",
            accesory: "verify",
            imgs: [],
            isVerify: false,
        }]
    },{
        id: 4,
        class: "step4",
        title: "Step 4: Try Scroll Bridge",
        accesory: "",
        note: "Click the bridge section and try to send tokens from and to Scroll L1 Testnet and Scroll L2 Testnet.",
        isFulfilled: false,
        isOpen: true,
        subSteps: [{
            subId: 1,
            title: "4.1 Send some TSETH token from Scroll L1 Testnet to Scroll L2 Testnet.",
            accesory: "verify",
            imgs: [],
            isVerify: false,
        },{
            subId: 2,
            title: "4.2 Send some TSUSDC token from Scroll L1 Testnet to Scroll L2 Testnet on Bridge page.",
            accesory: "verify",
            imgs: [],
            isVerify: false,
        },{
            subId: 3,
            title: "4.3 Send some TSETH token from Scroll L2 Testnet to Scroll L1 Testnet on Bridge page.",
            accesory: "verify",
            imgs: [],
            isVerify: false,
        },{
            subId: 4,
            title: "4.4 Send some TSUSDC token from Scroll L2 Testnet to Scroll L1 Testnet on Bridge page.",
            accesory: "verify",
            imgs: [],
            isVerify: false,
        }]
    },{
        id: 5,
        class: "step5",
        title: "Step 5: Try Scroll Swap",
        accesory: "",
        note: "Click the Swap section in Scroll L2 Testnet, you could try the swap function and add liquidity function",
        isFulfilled: false,
        isOpen: true,
        subSteps: [{
            subId: 1,
            title: "5.1 Wrap TSETH to TSWETH",
            accesory: "verify",
            imgs: [],
            isVerify: false,
        },{
            subId: 2,
            title: "5.2 Unwap TSWETH to TSETH",
            accesory: "verify",
            imgs: [],
            isVerify: false,
        },{
            subId: 3,
            title: "5.3 Swap one Token to another Swap one Token to another, for example, you could try to swap TSWETH for TSUSDC",
            accesory: "verify",
            imgs: [],
            isVerify: false,
        }]
    },{
        id: 6,
        class: "step6",
        title: "Step 6: Add and remove liquidity",
        accesory: "",
        note: "Click the Swap section in Scroll L2 Testnet, you could try the swap function and add liquidity function",
        isFulfilled: false,
        isOpen: true,
        subSteps: [{
            subId: 1,
            title: "6.1 add liquidity",
            accesory: "verify",
            imgs: [],
            isVerify: false,
        },{
            subId: 2,
            title: "6.2 Remove liquidity",
            accesory: "verify",
            imgs: [],
            isVerify: false,
        }]
    }]
}