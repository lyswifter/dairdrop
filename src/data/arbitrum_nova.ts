export let StepTaskData = [{
    id: 1,
    class: "step1",
    title: "Step 1: Connect Metamask Wallet with Coinhere",
    accessory: "connect", // connect, verify, check
    note: "",
    content: "Connect MetaMask wallet",
    imgs: [{
        name: "arbitrumone_1.png",
        url: "https://cionhere.net/airdrops/arbitrumnova_1.png",
        srcList: [
            'https://cionhere.net/airdrops/arbitrumnova_1.png',
        ],
    },
     ],
    isFulfilled: false,
    isOpen: true,
    subSteps: []
},{
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
        title: "2.1 Transfer some ETH from Ethereum Mainnet to Arbitrum Nova",
        accessory: "check",
        content: "Make sure to set your net into Ethereum mainnet, transfer some ETH from Ethereum mainnet to Arbitrum Nova. You need to wait for almost 15 min to move ETH into Arbitrum Nova.",
        note:"Note: According to the former airdrop, the larger amount and higher frequency you have tried, the larger possibility you can get the airdrop.",
        imgs: [{
            name: "arbitrumnova_2.1.png",
            url: "https://cionhere.net/airdrops/arbitrumnova_2.1.png",
            srcList: [
                'https://cionhere.net/airdrops/arbitrumnova_2.1.png',
            ],
        },
         ],
        isVerify: true, 
    },{
        subId: 2,
        title: "2.2 Transfer some ETH from Arbitrum Nova to Ethereum Mainnet by Arbitrium’s Bridge",
        accessory: "check",
        content: "Make sure to set your net into Arbitrium Nova, transfer some ETH from Arbitrum Nova to Ethereum mainnet by Arbitrium’s Bridge.",
        note:"Note: It will take almost 8 days before you can claim your funds on Ethereum Mainnet.",
        imgs: [{
            name: "arbitrumnova_2.2.png",
            url: "https://cionhere.net/airdrops/arbitrumnova_2.2.png",
            srcList: [
                'https://cionhere.net/airdrops/arbitrumnova_2.2.png',
            ],
        },
         ],
        isVerify: true,     
    }]
}]