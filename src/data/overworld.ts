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
        title: "Step 2: Verify Your Twitter Account and Follow CoinHere",
        accessory: "auth",
        note: "",
        content: "",
        imgs: [],
        isFulfilled: false,
        isOpen: true,
        subSteps: []
    }, {
        id: 3,
        class: "step3",
        title: "Step 3: Interact with Overworld on Twitter to Free Mint a Pass KEY NFT",
        accessory: "verify",
        note: "",
        content: "It's better to interact more with the official twitter account than the following steps, be more generous to click the like, retweet and reply more tweets, you may get a surprise in the future.",
        imgs: [],
        isFulfilled: false,
        isOpen: true,
        subSteps: [{
            subId: 1,
            title: "3.1 Follow @OverworldPlay",
            accessory: "check",
            note: "https://twitter.com/OverworldPlay",
            content: "",
            imgs: [],
            isVerify: false,
        }, {
            subId: 2,
            title: "3.2 Follow @ HeyJeremyHorn",
            accessory: "check",
            note: "https://twitter.com/HeyJeremyHorn",
            content: "",
            imgs: [],
            isVerify: false,
        }, {
            subId: 3,
            title: "3.3 Retweet the Following Tweet",
            accessory: "check",
            note: "https://twitter.com/OverworldPlay/status/1626280443308916737",
            content: "",
            imgs: [],
            isVerify: false,
        }, {
            subId: 4,
            title: "3.4 Like the Following Tweet",
            accessory: "check",
            note: "https://twitter.com/OverworldPlay/status/1626280443308916737",
            content: "",
            imgs: [],
            isVerify: false,
        }, {
            subId: 5,
            title: "3.5 Comment the Following Tweet and @ at least 3 Friends",
            accessory: "check",
            note: "https://twitter.com/OverworldPlay/status/1626280443308916737",
            content: "",
            imgs: [],
            isVerify: false,
        }
        ]
    }]