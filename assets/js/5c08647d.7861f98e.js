"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[3865],{58800:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>m,frontMatter:()=>n,metadata:()=>i,toc:()=>u});var o=a(87462),l=(a(67294),a(3905));a(30828);const n={},r="Quadratic Funding Pallet",i={unversionedId:"applications/dora-factory-molochdao-v1-v2",id:"applications/dora-factory-molochdao-v1-v2",title:"Quadratic Funding Pallet",description:"Project Name:* Build MolochDAO v1 and v2 on Substrate",source:"@site/docs/applications/dora-factory-molochdao-v1-v2.md",sourceDirName:"applications",slug:"/applications/dora-factory-molochdao-v1-v2",permalink:"/Grants-Program/applications/dora-factory-molochdao-v1-v2",draft:!1,tags:[],version:"current",frontMatter:{}},s={},u=[{value:"Project Overview",id:"project-overview",level:2},{value:"Overview",id:"overview",level:3},{value:"Project Details",id:"project-details",level:3},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Development Roadmap",id:"development-roadmap",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1 -- Implement MolochDAO v1 Pallet",id:"milestone-1----implement-molochdao-v1-pallet",level:3},{value:"Milestone 2  -- Implement MolochDAO v2 Pallet",id:"milestone-2-----implement-molochdao-v2-pallet",level:3},{value:"Future Plans",id:"future-plans",level:2}],c={toc:u};function m(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,o.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"quadratic-funding-pallet"},"Quadratic Funding Pallet"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Project Name:")," Build MolochDAO v1 and v2 on Substrate"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Team Name:")," Dora Factory"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Payment Address:")," 0xadcba9C5C8c33F7F71600c436F2F2B00bAbc9997")),(0,l.kt)("h2",{id:"project-overview"},"Project Overview"),(0,l.kt)("p",null,"MolochDAO is the mostly used venture DAO template so far, hosting major venture & grant DAOs such as MolochDAO, The LAO, and MetaCartel Ventures. This project implements MolochDAO v1 on a Substrate pallet. The goal of this project is to eventually launch a MolochDAO for Polkadot ecosystem grants."),(0,l.kt)("h3",{id:"overview"},"Overview"),(0,l.kt)("p",null,"MolochDAO was conceived after the fail of The DAO -- the first pioneering effort to support Ethereum ecosystem projects. After The DAO failed, MolochDAO revived the idea of The DAO but with simplicity and security. The MolochDAO itself is a minimum viable DAO, which implemented a concise set of mechanisms including proposal submission, voting, and ragequit. It has been operating safely for some time, and currently hosting more than $6 Million to support Ethereum ecosystem projects with grants."),(0,l.kt)("p",null,"The open-source approach of MolochDAO has encouraged many other efforts. For example, The LAO (",(0,l.kt)("a",{parentName:"p",href:"https://www.thelao.io/"},"https://www.thelao.io/"),") and MetaCartel Ventures are using Moloch as an infrastructure to build DAO venture funds. Together, they are managing more than $50 Million worth of assets at this moment of writing. DAOhaus, on the other hand, creates a platform to create DAOs based on Moloch. It allows different types of organizations to create Moloch-like DAOs on Ethereum to manage its funds. The Open Law team is also developing a MolochV3 codebase (",(0,l.kt)("a",{parentName:"p",href:"https://github.com/openlawteam/molochv3-contracts"},"https://github.com/openlawteam/molochv3-contracts"),"), which aims to break Moloch main contract into smaller smart contracts, and bring modularity to Moloch."),(0,l.kt)("p",null,"Currently, there are two mature versions of MolochDAO that are widely accepted -- the MolochDAO v1 and the MolochDAO v2. MolochV2 has some major features on top of MolochV1, including 1) multiple tokens in guild bank; 2) loot and shares; 3) guildkick."),(0,l.kt)("p",null,"This project develops a substrate pallet that implmenets MolochDAO v1 and v2, in two separate milestones. The goal of this project is to bring MolochDAO to Substrate and make it available for future DAOs on Polkadot, Kusama, and other parachain ecosystems."),(0,l.kt)("p",null,"Dora Factory and DoraHacks team is building tools and infrastructures to incentivize / fund open source blockchain innovation. Therefore, one of the first use cases of a Substrate MolochDAO can be a grant DAO to support open source developer projects that build on Substrate. It is yet another alternative to the current funding schemes."),(0,l.kt)("h3",{id:"project-details"},"Project Details"),(0,l.kt)("p",null,"The MolochDAO is an open source project."),(0,l.kt)("p",null,"MolochDAO v1 codebase can be found here: ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/MolochVentures/moloch/tree/master/v1_contracts"},"https://github.com/MolochVentures/moloch/tree/master/v1_contracts")),(0,l.kt)("p",null,"The current MolochDAO (V2) codebase can be found here: ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/MolochVentures/moloch"},"https://github.com/MolochVentures/moloch")),(0,l.kt)("p",null,"This project will implement MolochDAO v1 and v2 in two milestones. The first milestone is to create a Substrate pallet that implements MolochV1, and the second milestone is to create a Substrate pallet that implements MolochV2."),(0,l.kt)("p",null,"The MolochV1 Substrate pallet will implement features including the following:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Guild bank"),(0,l.kt)("li",{parentName:"ul"},"Guild shares"),(0,l.kt)("li",{parentName:"ul"},"Submit a proposal"),(0,l.kt)("li",{parentName:"ul"},"Vote for a proposal"),(0,l.kt)("li",{parentName:"ul"},"Process a proposal"),(0,l.kt)("li",{parentName:"ul"},"Ragequit")),(0,l.kt)("p",null,"The MolochV2 Substrate pallet will be built on top of MolochV1 and further implement features including the following:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Support multiple tokens in guild bank"),(0,l.kt)("li",{parentName:"ul"},"Implement loot"),(0,l.kt)("li",{parentName:"ul"},"Guild kick"),(0,l.kt)("li",{parentName:"ul"},"Ragekick")),(0,l.kt)("p",null,"In this grant, we will not change the mechanism or logic of the original design of Moloch v1 and v2, because of its simplicity and security. However, we recognize the importance of building Moloch in the Polkadot ecosystem as an incentive mechanism and open source DAO infrastructure that can be used in many use cases."),(0,l.kt)("p",null,"With an implementation of Moloch v1 and v2 on Substrate, developers from the whole Polkadot ecosystem can build DAOs or other applications based on the code, such as DAO venture funds, parachain grant programs, clubs, project governance bodies, etc."),(0,l.kt)("p",null,"A Substrate implementation of Moloch can allow us to make Moloch more useful. For example, managing cross-chain assets or adding application-level features can be made easier on a Substrate-based Moloch implementation. Therefore, after completion of this grant, we can start to build a more general DAO infrastructure based on the codebase, which could evolve into an open platform for DAOs, and every blockchain based organization can use it to support on-chain governance and open source ventures. However, it will depend on a successful delivery of the current grant."),(0,l.kt)("h3",{id:"ecosystem-fit"},"Ecosystem Fit"),(0,l.kt)("p",null,"Since quadratic funding is a community driven funding mechanism for early-stage grants, it will introduce a more community-driven method to fund developer community projects in the Polkadot and Kusama ecosystem."),(0,l.kt)("p",null,"It's also exciting to implement quadratic funding as an on-chain governance module and add it to Polkadot governance stack."),(0,l.kt)("p",null,"MolochDAO is the most important open source DAO template in Ethereum ecosystem at this moment. It supports grant DAOs like MolochDAO and venture DAOs like The LAO and MetaCartel. Because of the simplicity of the Moloch mechanism, it can be extended to more use cases in the future."),(0,l.kt)("p",null,"Supporting on-chain governance and open source ventures is an important task in the Polkadot ecosystem. Therefore, an open source MolochDAO will be a useful building block is important."),(0,l.kt)("h3",{id:"team-members"},"Team members"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Dora Factory & DoraHacks Dev Team -- a team of developers who has built HackerLink.io/en, now hosting quadratic funding grants, bounties, and hackathons for BSC, Filecoin, HECO, Solana, etc. The team also implemented a quadratic funding Substrate pallet (",(0,l.kt)("a",{parentName:"li",href:"https://github.com/w3f/Grant-Milestone-Delivery/pull/104"},"https://github.com/w3f/Grant-Milestone-Delivery/pull/104"),").")),(0,l.kt)("h3",{id:"contact"},"Contact"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Contact Name:")," Eric Zhang"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Contact Email:")," ",(0,l.kt)("a",{parentName:"li",href:"mailto:eric@dorafactory.org"},"eric@dorafactory.org")),(0,l.kt)("li",{parentName:"ul"},"HackerLink.io/en")),(0,l.kt)("h3",{id:"legal-structure"},"Legal Structure"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Matsushiba Foundation LTD.")),(0,l.kt)("h3",{id:"team-code-repos"},"Team Code Repos"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/DoraFactory"},"https://github.com/DoraFactory")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/zhangjiannan/QFgrant"},"https://github.com/zhangjiannan/QFgrant"))),(0,l.kt)("h2",{id:"development-roadmap"},"Development Roadmap"),(0,l.kt)("h3",{id:"overview-1"},"Overview"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Total Estimated Duration:")," 2.5 months"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Full-time equivalent (FTE):"),"  2"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Total Costs:")," 2000 DAI")),(0,l.kt)("h3",{id:"milestone-1----implement-molochdao-v1-pallet"},"Milestone 1 -- Implement MolochDAO v1 Pallet"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Estimated Duration:")," 6 weeks"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"FTE:"),"  2"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Costs:"),"  1000 DAI")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Number"),(0,l.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,l.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0a."),(0,l.kt)("td",{parentName:"tr",align:null},"License"),(0,l.kt)("td",{parentName:"tr",align:null},"Apache 2.0 / MIT")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0b."),(0,l.kt)("td",{parentName:"tr",align:null},"Testing Guide"),(0,l.kt)("td",{parentName:"tr",align:null},"The code will have unit-test coverage to ensure functionality and robustness. In the guide we will describe how to run these tests")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1."),(0,l.kt)("td",{parentName:"tr",align:null},"MolochDAO v1 Substrate Pallet"),(0,l.kt)("td",{parentName:"tr",align:null},"An open-source prototype of a MolochDAO v1 substrate pallet. The pallet will implement Moloch v1. Key features include 1) guild bank, 2) guild shares, 3) submit a proposal, 4) vote for a proposal, 5) process a proposal, 6) ragequit")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2."),(0,l.kt)("td",{parentName:"tr",align:null},"Test"),(0,l.kt)("td",{parentName:"tr",align:null},"Deploy the runtime module to a Substrate node and test MolochDAO v1 functions described above\uff5c")))),(0,l.kt)("h3",{id:"milestone-2-----implement-molochdao-v2-pallet"},"Milestone 2  -- Implement MolochDAO v2 Pallet"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Estimated Duration:")," 4 weeks"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"FTE:"),"  2"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Costs:")," 1000 DAI")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Number"),(0,l.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,l.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0a."),(0,l.kt)("td",{parentName:"tr",align:null},"License"),(0,l.kt)("td",{parentName:"tr",align:null},"Apache 2.0 / MIT")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0b."),(0,l.kt)("td",{parentName:"tr",align:null},"Testing Guide"),(0,l.kt)("td",{parentName:"tr",align:null},"The code will have unit-test coverage to ensure functionality and robustness. In the guide we will describe how to run these tests")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1."),(0,l.kt)("td",{parentName:"tr",align:null},"MolochDAO v2 Substrate Pallet"),(0,l.kt)("td",{parentName:"tr",align:null},"An open-source prototype of a MolochDAO v2 substrate pallet. The pallet will implement Moloch v2 based on the delivery of Milestone 1 (Moloch v1). Key features include 1) support multiple tokens in guild bank, 2) implement loot, 3) guild kick 4) ragekick")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2."),(0,l.kt)("td",{parentName:"tr",align:null},"Test"),(0,l.kt)("td",{parentName:"tr",align:null},"Deploy the runtime module to a Substrate node and test MolochDAO v2 functions described above\uff5c")))),(0,l.kt)("h2",{id:"future-plans"},"Future Plans"),(0,l.kt)("p",null,"The next step after completion of the milestone, we will consider to run a MolochDAO grant to support important projects from Polkadot and Kusama developer communities."),(0,l.kt)("p",null,"We will develop frontend solutions in parallel with the pallet. Eventually, we are providing an open source Moloch infrastructure to facilitate on-chain governance and support open source ventures in the Polkadot and Kusama ecosystem."))}m.isMDXComponent=!0}}]);