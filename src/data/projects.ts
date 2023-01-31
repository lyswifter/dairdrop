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