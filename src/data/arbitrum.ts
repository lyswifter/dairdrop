export let StepTaskData = [{
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
}, {
    id: 2,
    class: "step2",
    title: "Step 2: Visit the Arbitrium Bridge Page",
    accessory: "both",
    note: "",
    content: "",
    imgs: [],
    isFulfilled: false,
    isOpen: true,
    subSteps: [{
        subId: 1,
        title: "2.1 Transfer some ETH from Ethereum Mainnet to Arbitrum One",
        accessory: "check",
        content: "Make sure to set your net into Ethereum mainnet, transfer some ETH from Ethereum mainnet to Arbitrum One. You need to wait for almost 15 min to move ETH into Arbitrum One. According to the former airdrop, the larger amount and higher frequency you have tried, the larger possibility you can get the airdrop.",
        note: "Note: According to the former airdrop, the larger amount and higher frequency you have tried, the larger possibility you can get the airdrop.",
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
        title: "2.2 Transfer some ETH from Arbitrum One to Ethereum Mainnet by Arbitrium’s Bridge",
        accessory: "check",
        content: "Make sure to set your net into Arbitrium One, transfer some ETH from Arbitrum One to  Ethereum mainnet by Arbitrium’s Bridge.",
        note: "Note: It will take almost 8 days before you can claim your funds on Ethereum Mainnet.",
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
        title: "2.3 Transfer some ETH from Ethereum Mainnet to Arbitrum Nova",
        accessory: "check",
        content: "Make sure to set your net into Ethereum mainnet, transfer some ETH from Ethereum mainnet to Arbitrum Nova. You need to wait for almost 15 min to move ETH into Arbitrum Nova.",
        note: "Note: According to the former airdrop, the larger amount and higher frequency you have tried, the larger possibility you can get the airdrop.",
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
        title: "2.4 Transfer some ETH from Arbitrum Nova to Ethereum Mainnet by Arbitrium's Bridge",
        accessory: "check",
        content: "Make sure to set your net into Arbitrium Nova, transfer some ETH from Arbitrum Nova to Ethereum mainnet by Arbitrium’s Bridge.",
        note: "Note: It will take almost 8 days before you can claim your funds on Ethereum Mainnet.",
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