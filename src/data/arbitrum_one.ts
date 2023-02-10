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
},{
    id: 2,
    class: "step2",
    title: "Step 2: Visit the Arbitrium Bridge Page",
    accessory: "verify",
    note: "click the link: https://bridge.arbitrum.io/",
    content: "",
    imgs: [
        {
            name: "arbitrumone_1.png",
            url: domain.domainUrl + "arbitrumone_1.png",
            srcList: [
                domain.domainUrl + "arbitrumone_1.png",
            ],
        }
    ],
    isFulfilled: false,
    isOpen: true,
    subSteps: [{
        subId: 1,
        title: "2.1 Transfer some ETH from Ethereum Mainnet to Arbitrum One",
        accessory: "check",
        content: "Make sure to set your net into Ethereum mainnet, transfer some ETH from Ethereum mainnet to Arbitrum One. You need to wait for almost 15 min to move ETH into Arbitrum One. According to the former airdrop, the larger amount and higher frequency you have tried, the larger possibility you can get the airdrop.",
        note: "Note: According to the former airdrop, the larger amount and higher frequency you have tried, the larger possibility you can get the airdrop.",
        imgs: [
            {
                name: "arbitrumone_2.1.png",
                url: domain.domainUrl + "arbitrumone_2.1.png",
                srcList: [
                    domain.domainUrl + "arbitrumone_2.1.png",
                ],
            }
        ],
        isVerify: false,
    },{
        subId: 2,
        title: "2.2 Transfer some ETH from Arbitrum One to Ethereum Mainnet by Arbitrium's Bridge",
        accessory: "check",
        content: "Make sure to set your net into Arbitrium One, transfer some ETH from Arbitrum One to  Ethereum mainnet by Arbitrium's Bridge.",
        note:"Note: It will take almost 8 days before you can claim your funds on Ethereum Mainnet.",
        imgs: [{
            name: "arbitrumone_2.2_1.png",
            url: domain.domainUrl + "arbitrumone_2.2_1.png",
            srcList: [
                domain.domainUrl + "arbitrumone_2.2_1.png",
            ],
        },{
            name: "arbitrumone_2.2_2.png",
            url: domain.domainUrl + "arbitrumone_2.2_2.png",
            srcList: [
                domain.domainUrl + "arbitrumone_2.2_2.png",
            ],
        }],
        isVerify: false, 
    }]
}]