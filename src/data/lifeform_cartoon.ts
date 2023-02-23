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
}, {
    id: 2,
    class: "step2",
    title: "Step 2: Free Mint LifeForm Cartoon Avatar",
    accessory: "verify",
    note: "",
    content: "",
    imgs: [],
    isFulfilled: false,
    isOpen: true,
    subSteps: [{
        subId: 1,
        title: "2.1 Free Mint LifeForm Cartoon Avatar and Get 500 Points",
        accessory: "check",
        note: "https://cartoon.lifeform.cc",
        content: "If you don't want to customize your Avatar, just click the Mint Button and then Click the Confirm Button when the Referral Campaign pop-up is displayed. To get another 500 Points, make sure to add one referral address, it could be another wallet address of you or your friends! If you want to customize your Avatar, follow the guidance in step 2.3.",
        imgs: [{
            name: "lifeformcartoon_2.1_1.png",
            url: domain.domainUrl + "lifeformcartoon_2.1_1.png",
            srcList: [
                domain.domainUrl + "lifeformcartoon_2.1_1.png",
            ],
        },
        {
            name: "lifeformcartoon_2.1_2.png",
            url: domain.domainUrl + "lifeformcartoon_2.1_2.png",
            srcList: [
                domain.domainUrl + "lifeformcartoon_2.1_2.png",
            ],
        }
        ],
        isVerify: false,
    }, {
        subId: 2,
        title: "2.2 Invite Friends to Get More Points",
        accessory: "check",
        content: "Click the Invite Friends Button to copy your referral URL, send it to your social media and friends, when the person you invited mint a NFT, each of you will get 500 points!",
        note: "",
        imgs: [],
        isVerify: false,
    }, {
        subId: 3,
        title: "2.3 Customize your LifeForm Cartoon Avatar",
        accessory: "check",
        content: "Click the link to download LifeForm Cartoon, login with your wallet address.Click the CREATE Button to choose the gender or you could even free use the AI function to generate your own Avatar! Then click the EDIT Button to change some details like the haircut and the lip color.",
        note: "https://lifeform.cc/product",
        imgs: [{
            name: "lifeformcartoon_2.3.png",
            url: domain.domainUrl + "lifeformcartoon_2.3.png",
            srcList: [
                domain.domainUrl + "lifeformcartoon_2.3.png",
            ],
        }],
        isVerify: false,
    }]
}]