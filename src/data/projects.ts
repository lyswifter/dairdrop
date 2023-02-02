import { RecommendationItem, StepTaskItem, ImageItem } from "../data/types";

import { StepTaskData as scrollTasks } from "../data/scroll";
import { StepTaskData as arbitrumTasks } from "../data/arbitrum";
import { StepTaskData as zkasinoTestTasks } from "../data/zkasino_testnet";
import { StepTaskData as zkasinoMainTasks } from "../data/zkasino_mainnet";
import { StepTaskData as zksyncTasks } from "../data/zksync";

export let Projects = {
    production: [{
        id: 1,
        name: "Scroll",
        descripation: "Scroll is a zkEVM-based zkRollup on Ethereum that enables native compatibility for existing Ethereum applications and tools. Scroll doesn't have its own token yet but may launch one in the future. Early users who've finished testnet tests may get an airdrop if they launch a token.",
        tag: "",
        process: 0,
        image: "../../src/logos/scroll---logo-245px.png",
        detail: "scroll",
        tasks: scrollTasks,
    }, {
        id: 2,
        name: "ZKasino(testnet)",
        descripation: "ZKasino is a decentralized, crypto betting platform and blockchain casino built on Layer 2 ZK-Rollups technology which aims to be the most fair and transparent platform with the lowest house edge compared to all other betting platforms. ZKasino has confirmed to launch its token called “ZKAS” and has very high potential to do an airdrop. Early users who've played games in testnets and mainnets on the platform may get an airdrop when they launch their token.",
        tag: "",
        process: 0,
        image: "../../src/logos/ZKASINO_logo.png",
        detail: "zkasino",
        tasks: zkasinoTestTasks,
    }, {
        id: 3,
        name: "ZKasino(mainnet)",
        descripation: "ZKasino is a decentralized, crypto betting platform and blockchain casino built on Layer 2 ZK-Rollups technology which aims to be the most fair and transparent platform with the lowest house edge compared to all other betting platforms. ZKasino has confirmed to launch its token called “ZKAS” and has very high potential to do an airdrop. Early users who've played games in testnets and mainnets on the platform may get an airdrop when they launch their token.",
        tag: "",
        process: 0,
        image: "../../src/logos/ZKASINO_logo.png",
        detail: "zkasino",
        tasks: zkasinoMainTasks,
    }, {
        id: 4,
        name: "Arbitrum",
        descripation: "Arbitrum is a layer 2 solution designed to improve the capabilities of Ethereum smart contracts — boosting their speed and scalability, while adding in additional privacy features to boot.",
        tag: "",
        process: 0,
        image: "../../src/logos/ZKASINO_logo.png",
        detail: "arbitrum",
        tasks: arbitrumTasks,
    }, {
        id: 5,
        name: "Zksync",
        descripation: "zkSync 2.0 is a ZK rollup, a trustless protocol that uses cryptographic validity proofs to provide scalable and low-cost transactions on Ethereum. Its current functionality scope includes low gas transfers of ETH and ERC20 tokens in the Ethereum network, atomic swaps & limit orders as well as native L2 NFT support. zkSync has already confirmed that they will launch a token.Early users who’ve tried out both testnet and mainnet may get an airdrop when zkSync launches its token. ",
        tag: "",
        process: 0,
        image: "../../src/logos/ZKASINO_logo.png",
        detail: "arbitrum",
        tasks: zksyncTasks,
    }]
}