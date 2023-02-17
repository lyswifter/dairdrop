import { StepTaskData as scrollTasks } from "../data/scroll";
import { StepTaskData as arbitrumOneTasks } from "./arbitrum_one";
import { StepTaskData as arbitrumNovaTasks } from "./arbitrum_nova";
import { StepTaskData as zkasinoMainTasks } from "../data/zkasino_mainnet";
import { StepTaskData as zksyncTasks } from "../data/zksync";
import { StepTaskData as startnetTasks } from "../data/starknet";
import { StepTaskData as coinhereTasks } from "../data/coinhere";
import { StepTaskData as ghoTasks } from "../data/gho";

import { domain } from "../router/domain";

export let Projects = {
    production: [{
        id: 8,
        name: "Coinhere",
        descripation: "CoinHere is an airdrop platform which could verify all your on-chain interaction with other projects. Come Here, Coin Here!",
        tag: "",
        process: 0,
        image: domain.domainUrl + "coinhere_logo.png",
        detail: "coinhere",
        tasks: coinhereTasks,
    },{
        id: 9,
        name: "AAVE Testnet - GHO NFT",
        descripation: "AAVE launched their stablecoin $GHO on the Ethereum Goerli Testnet, it is a multi-collateral stablecoin native to AAVE. Try to borrow and repay GHO at Testnet and give your feedback to AAVE Discord. You can also collect a free GHO NFT on Polygon, which is both supported by AAVE and LENS. Don’t forget to prepare some $Matic as your gas fee, you could collect more than one NFT if you want!",
        tag: "",
        process: 0,
        image: domain.domainUrl + "gho_logo.png",
        detail: "gho",
        tasks: ghoTasks,
    },{
        id: 1,
        name: "Scroll",
        descripation: "Scroll is a zkEVM-based zkRollup on Ethereum that enables native compatibility for existing Ethereum applications and tools. Scroll doesn't have its own token yet but may launch one in the future. Early users who've finished testnet tests may get an airdrop if they launch a token.",
        tag: "",
        process: 0,
        image: domain.domainUrl + "scroll_logo.png",
        detail: "scroll",
        tasks: scrollTasks,
    }, 
    {
        id: 3,
        name: "ZKasino(Mainnet)",
        descripation: "ZKasino is a decentralized, crypto betting platform and blockchain casino built on Layer 2 ZK-Rollups technology which aims to be the most fair and transparent platform with the lowest house edge compared to all other betting platforms. ZKasino has confirmed to launch its token called “ZKAS” and has very high potential to do an airdrop. Early users who've played games in testnets and mainnets on the platform may get an airdrop when they launch their token.",
        tag: "",
        process: 0,
        image: domain.domainUrl + "zkasino_logo.png",
        detail: "zkasino",
        tasks: zkasinoMainTasks,
    }, {
        id: 4,
        name: "Arbitrum One",
        descripation: "Arbitrum is a layer 2 solution designed to improve the capabilities of Ethereum smart contracts — boosting their speed and scalability, while adding in additional privacy features to boot.",
        tag: "",
        process: 0,
        image: domain.domainUrl + "arbitrumone_logo.png",
        detail: "arbitrumOne",
        tasks: arbitrumOneTasks,
    }, {
        id: 5,
        name: "Arbitrum Nova",
        descripation: "Arbitrum nova is a layer 2 solution designed to improve the capabilities of Ethereum smart contracts — boosting their speed and scalability, while adding in additional privacy features to boot.",
        tag: "",
        process: 0,
        image: domain.domainUrl + "arbitrumnova_logo.png",
        detail: "arbitrumNova",
        tasks: arbitrumNovaTasks,
    }, {
        id: 6,
        name: "ZkSync",
        descripation: "zkSync 2.0 is a ZK rollup, a trustless protocol that uses cryptographic validity proofs to provide scalable and low-cost transactions on Ethereum. Its current functionality scope includes low gas transfers of ETH and ERC20 tokens in the Ethereum network, atomic swaps & limit orders as well as native L2 NFT support. zkSync has already confirmed that they will launch a token.Early users who’ve tried out both testnet and mainnet may get an airdrop when zkSync launches its token. ",
        tag: "",
        process: 0,
        image: domain.domainUrl + "zksync.testnet_logo.png",
        detail: "zksync",
        tasks: zksyncTasks,
    },{
        id: 7,
        name: "Starknet",
        descripation: "StarkNet is a permissionless decentralized Validity-Rollup (also known as a “ZK-Rollup”). It operates as an L2 network over Ethereum, enabling any dApp to achieve unlimited scale for its computation – without compromising Ethereum’s composability and security, thanks to StarkNet’s reliance on the safest and most scalable cryptographic proof system – STARK.  StarkNet's parent company, Starkware has valuation hits $8 billion with $100 million Series D, historical investor including Tiger Global Management, Sequoia Capital, Intel Capital, and Vitalik Buterin. StarkNet has confirmed to launch an own token and 9% of the total supply has been allocated to end users and developers who've built dApps using StarkNet. StarkNet end users are those who used dApps built on StarkNet. StarkGate is the offical version of StarkNet Bridge, the best choice to become a StarkNet user.",
        tag: "",
        process: 0,
        image: domain.domainUrl + "starknet_logo.png",
        detail: "starknet",
        tasks: startnetTasks,
    }]
}