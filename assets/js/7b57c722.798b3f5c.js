"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[1703],{86595:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>r,toc:()=>p});var a=n(87462),i=(n(67294),n(3905));n(30828);const l={},o="Zenlink DEX Smart Contract",r={unversionedId:"applications/zenlink-cross-chain-dex",id:"applications/zenlink-cross-chain-dex",title:"Zenlink DEX Smart Contract",description:"Team Name:* Zenlink",source:"@site/docs/applications/zenlink-cross-chain-dex.md",sourceDirName:"applications",slug:"/applications/zenlink-cross-chain-dex",permalink:"/Grants-Program/applications/zenlink-cross-chain-dex",draft:!1,tags:[],version:"current",frontMatter:{}},s={},p=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-",level:2},{value:"Overview",id:"overview",level:3},{value:"System Components",id:"system-components",level:3},{value:"Benefit",id:"benefit",level:3},{value:"The whole planning of Zenlink",id:"the-whole-planning-of-zenlink",level:3},{value:"What we will implement in this grant",id:"what-we-will-implement-in-this-grant",level:2},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team \ud83d\udc65",id:"team-",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Team Website",id:"team-website",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Team LinkedIn Profiles",id:"team-linkedin-profiles",level:3},{value:"Development Roadmap",id:"development-roadmap",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1 \u2014 Implementing Zenlink DEX DApp",id:"milestone-1--implementing-zenlink-dex-dapp",level:3},{value:"Community engagement",id:"community-engagement",level:3},{value:"Future Plans",id:"future-plans",level:2},{value:"Additional Information \u2795",id:"additional-information-",level:2}],m={toc:p};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"zenlink-dex-smart-contract"},"Zenlink DEX Smart Contract"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Team Name:")," Zenlink"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Payment Address:")," 3FyMZ4Y6wFXkaSzdBPetizppR5bD6BVLUy"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Status:")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/w3f/Open-Grants-Program/pull/151#issuecomment-870569453"},"Terminated"))),(0,i.kt)("h2",{id:"project-overview-"},"Project Overview \ud83d\udcc4"),(0,i.kt)("h3",{id:"overview"},"Overview"),(0,i.kt)("p",null,"Based on the prediction of the further growth of the DEX ecosystem in the future and the rapid development of the public blockchain technology, we propose a Polkadot network-based, high-liquidity, cross-chain DEX Network, Zenlink."),(0,i.kt)("p",null,"It is a decentralized exchange network that consists of Zenlink DEX Module, Zenlink DEX Aggregator and other DEX Application on parachains."),(0,i.kt)("h3",{id:"system-components"},"System Components"),(0,i.kt)("p",null,"In general, Zenlink project consists of the following parts:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Zenlink DEX Protocol: The top-level unified general DEX protocol which can be implemented by the following ways. We prefer to make it to have Auto Market Maker(AMM) function and be easy imported into parachain in multiple ways.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Module: it's implemented as a Substrate pallet which can be imported into the runtime of a parachain."),(0,i.kt)("li",{parentName:"ul"},"Smart Contract: it's implemented as a smart contract which can be deployed into the ink! pallet of a parachain."))),(0,i.kt)("li",{parentName:"ul"},"Zenlink DEX Aggregator: A simple and user-friendly entrance of DEX world which is able to connect with most of DEX on Polkadot, so that user can do one-click trade with multiple DEX on low slippage"),(0,i.kt)("li",{parentName:"ul"},"Zenlink Token(ZLK): The native token of Zenlink DEX Protocol which can be used to distribute liquidity benefits and governance, etc")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://images-cdn.shimo.im/TrQlWEFKIz34Mv54__thumbnail.png",alt:"Zenlink Ecosystem"})),(0,i.kt)("p",null,"As a result of the above components, a decentralized exchange network, Zenlink DEX Network, will be established."),(0,i.kt)("h3",{id:"benefit"},"Benefit"),(0,i.kt)("p",null,"Parachains don't need to implement dex functionality by themselves since Zenlink DEX Protocol has two implementations so it is easy to be integrated. After that, the tokens of parachains would be involved into Zenlink DEX Network by trading with other tokens of other parachains. The more parachains integrate with the protocol, the more tokens users can exchange, so that they would be like to be a market maker and benefit from the value of the flow."),(0,i.kt)("h3",{id:"the-whole-planning-of-zenlink"},"The whole planning of Zenlink"),(0,i.kt)("p",null,"Firstly, Zenlink DEX Module and Smart Contract will be implemented based on Zenlink DEX Protocol. In order to complete the Zenlink ecosystem, we would like to deploy it to a substrate blockchain and build a front-end website application, Zenlink DEX Dapp, for test."),(0,i.kt)("p",null,"Secondly, we would like to build another important component, Zenlink DEX Aggregator. It will connect to Zenlink DEX Dapp."),(0,i.kt)("p",null,"Thirdly, we will test the full function of Zenlink DEX Module and Aggregator on Kusama. Users also can try it on Zenlink DEX Dapp."),(0,i.kt)("p",null,"Finally, the whole infrastructure(Zenlink DEX Module and Aggregator) will be deployed to Polkadot, so that Zenlink DEX Dapp will be switched to Polkadot network and published."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://uploader.shimo.im/f/aCpI4JDF0fHIhpjw.png!thumbnail",alt:"Zenlink Architecture"})),(0,i.kt)("h2",{id:"what-we-will-implement-in-this-grant"},"What we will implement in this grant"),(0,i.kt)("p",null,"We will make the protocol has ",(0,i.kt)("strong",{parentName:"p"},"cross-chain dex")," functionalities in this grant. "),(0,i.kt)("p",null,"In the past grants(",(0,i.kt)("a",{parentName:"p",href:"/Grants-Program/applications/zenlink"},"Zenlink DEX Pallet")," and ",(0,i.kt)("a",{parentName:"p",href:"/Grants-Program/applications/zenlink-smart-contract"},"Zenlink DEX Smart Contract"),"), We have implemented Zenlink DEX Protocol in two ways and verified its basic dex functionalities, such as token issue, trading, deposit funds, etc. However, the tests are all based on a single Substrate chain. So that, we would like to move further to make cross-chain value liquidity be possible on Zenlink DEX Network. For now, the best testnet should be Rococo which supports parachains and be free. There are still lots of things to do. "),(0,i.kt)("p",null,"Firstly, we will spike some asset modules, for example ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/open-web3-stack/open-runtime-module-library/pull/332/files#diff-9413d5e6d4c0aee4abccc79435f7885925fd1e4d26f8cfa1c5a7a5f377557215"},"orml-xtoken")," which is used for identifying assets in different parachains. Then, we will adapt Zenlink DEX Module to the asset module."),(0,i.kt)("p",null,"Secondly, using the asset module and Zenlink DEX Module, we will implement an one-click cross-chain assets swap. The result is that user can send a swap transaction in Parachain200 which targe to the dex in Parachain300, then user will get another token in Parachain300."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://uploader.shimo.im/f/Th3S540GGIys8j0O.png!thumbnail",alt:"Cross-chain Assets Swap"})),(0,i.kt)("p",null,"Finally, we will deploy the whole system to Rococo v1 to open test for everyone."),(0,i.kt)("p",null,"In generally, the purpose of this grant is to deploy Zenlink Protocol to Rococo V1, then verify the cross-chain dex functionalities."),(0,i.kt)("h3",{id:"ecosystem-fit"},"Ecosystem Fit"),(0,i.kt)("p",null,"no"),(0,i.kt)("h2",{id:"team-"},"Team \ud83d\udc65"),(0,i.kt)("h3",{id:"team-members"},"Team members"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Hui Guo(Leo Guo), Team Leader"),(0,i.kt)("li",{parentName:"ul"},"Tianling, Principal Blockchain Expert"),(0,i.kt)("li",{parentName:"ul"},"Jianbin Zhao, Senior Backend Engineer"),(0,i.kt)("li",{parentName:"ul"},"Rui Shi, Senior Backend Engineer"),(0,i.kt)("li",{parentName:"ul"},"Hui Yuan, Senior Product Manager")),(0,i.kt)("h3",{id:"contact"},"Contact"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Contact Name:")," Victory Van"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Contact Email:")," ",(0,i.kt)("a",{parentName:"li",href:"mailto:vv@zenlink.pro"},"vv@zenlink.pro"))),(0,i.kt)("h3",{id:"team-website"},"Team Website"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://zenlink.pro/"},"https://zenlink.pro/"))),(0,i.kt)("h3",{id:"legal-structure"},"Legal Structure"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Registered Address:")," Address: 3 FRASER STREET #05-25 DUO TOWER SINGAPORE(189352)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Registered Legal Entity:")," ZENLINK FOUNDATION LTD."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"UEN:")," 202029221W")),(0,i.kt)("h3",{id:"teams-experience"},"Team's experience"),(0,i.kt)("p",null,"The team is made up of many experienced professionals in the blockchain industry."),(0,i.kt)("p",null,"Guo hui(Leo Guo) is the project leader. He joined imToken very early (June 2017) and worked for 3 years as a data analyst and marketing operation specialist. He is very good at trading quotes and user data analysis which helps imToken get 10m users and Tokenlon, imToken\u2019s DEX, achieve 600m trading volume as well."),(0,i.kt)("p",null,"Tianling was a former senior expert of Alibaba. After leaving it, he joined a blockchain company as the core developer for 3 years. He is familiar with the underlying blockchain design and substrate development and also was in charge of the architecture design. Now, he is the principal blockchain expert of Zenlink team."),(0,i.kt)("p",null,"Jianbin Zhao is a senior backend dev with 5 years experience, and he is helping the team build the first DEX web application."),(0,i.kt)("p",null,"Rui shi is a senior backend dev with 5 years experience. He is not only familiar with C++/Rust, but also has good project experience on Substrate development."),(0,i.kt)("p",null,"Hui Yuan has rich experience in product design and management. She has built many nice and user-friendly internet application. "),(0,i.kt)("h3",{id:"team-code-repos"},"Team Code Repos"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/zenlinkpro/zenlink_dex_module"},"https://github.com/zenlinkpro/zenlink_dex_module"))),(0,i.kt)("h3",{id:"team-linkedin-profiles"},"Team LinkedIn Profiles"),(0,i.kt)("p",null,"no"),(0,i.kt)("h2",{id:"development-roadmap"},"Development Roadmap"),(0,i.kt)("h3",{id:"overview-1"},"Overview"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Total Estimated Duration:")," 4 weeks"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Full-time equivalent (FTE):")," 4"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Total Costs:")," 0.3 btc")),(0,i.kt)("h3",{id:"milestone-1--implementing-zenlink-dex-dapp"},"Milestone 1 \u2014 Implementing Zenlink DEX DApp"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Estimated Duration:")," 4 weeks"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"FTE:"),"  4"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Costs:")," 0.3 btc")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,i.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Asset Module Technical specifications"),(0,i.kt)("td",{parentName:"tr",align:null},"These spec will describe the architecture and usage with Zenlink DEX Module, and also be included in the ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/zenlinkpro/whitepaper/blob/master/en/zenlink_whitepaper_en.pdf"},"whitepaper"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Zenlink DEX Pallet Repository"),(0,i.kt)("td",{parentName:"tr",align:null},"A git repository containing the dex source code. The pallet will be adapted to a general asset module and achieve the cross-chain dex functionalities.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Tests"),(0,i.kt)("td",{parentName:"tr",align:null},"The code will have proper unit-test coverage to ensure functionality and robustness")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Tutorial"),(0,i.kt)("td",{parentName:"tr",align:null},"The tutorial will not only indicate that how to use set up and deploy it into Rococo testnet, and also introduce special user cases and potential extensibility. It will be be published on Medium.")))),(0,i.kt)("h3",{id:"community-engagement"},"Community engagement"),(0,i.kt)("p",null,"The tutorials and Documentation that we provide will be published as articles in ",(0,i.kt)("a",{parentName:"p",href:"https://medium.com/zenlinkpro"},"Zenlink Medium")," and other social media platforms with due mention about Web3 grant."),(0,i.kt)("p",null,"We also intend to engage community by running range of user testing to get more feedback from the real end-users to improve our product."),(0,i.kt)("h2",{id:"future-plans"},"Future Plans"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Build & deploy Zenlink DEX Aggregator on Kusama/Rococo. "),(0,i.kt)("li",{parentName:"ul"},"Full function test on Kusama/Rococo."),(0,i.kt)("li",{parentName:"ul"},"Deploy the whole components to Polkadot including Zenlink DEX Module, DEX Dapp and DEX Aggregator.")),(0,i.kt)("h2",{id:"additional-information-"},"Additional Information \u2795"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Medium: ",(0,i.kt)("a",{parentName:"li",href:"https://medium.com/zenlinkpro"},"https://medium.com/zenlinkpro")),(0,i.kt)("li",{parentName:"ul"},"Twitter: ",(0,i.kt)("a",{parentName:"li",href:"https://twitter.com/ZenlinkPro"},"https://twitter.com/ZenlinkPro")),(0,i.kt)("li",{parentName:"ul"},"Whitepaper: ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/zenlinkpro/whitepaper/blob/master/en/zenlink_whitepaper_en.pdf"},"https://github.com/zenlinkpro/whitepaper/blob/master/en/zenlink_whitepaper_en.pdf"))))}d.isMDXComponent=!0}}]);