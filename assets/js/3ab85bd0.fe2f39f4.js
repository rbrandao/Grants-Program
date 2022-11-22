"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[9531],{17949:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));a(16758);const i={},o="New Order - a full onchain orderbook dex with indexers",l={unversionedId:"Applications/new-order",id:"Applications/new-order",title:"New Order - a full onchain orderbook dex with indexers",description:"Team Name:* Standard Protocol",source:"@site/docs/Applications/new-order.md",sourceDirName:"Applications",slug:"/Applications/new-order",permalink:"/Grants-Program/Applications/new-order",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Native Bitcoin Vaults (NBV)",permalink:"/Grants-Program/Applications/native-bitcoin-vaults"},next:{title:"Implementation of the new hash function to BLS12 curves",permalink:"/Grants-Program/Applications/new_bls12_hash_function"}},d={},s=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-",level:2},{value:"Overview",id:"overview",level:3},{value:"Project Details",id:"project-details",level:3},{value:"Technologies",id:"technologies",level:3},{value:"Components",id:"components",level:3},{value:"new-order",id:"new-order",level:3},{value:"Indexer",id:"indexer",level:3},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Project Uniqueness",id:"project-uniqueness",level:3},{value:"Reactive Queue",id:"reactive-queue",level:2},{value:"Target Audience",id:"target-audience",level:3},{value:"Problem Addressed",id:"problem-addressed",level:3},{value:"Team \ud83d\udc65",id:"team-",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Founders&#39; experiences",id:"founders-experiences",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Team LinkedIn Profiles (if available)",id:"team-linkedin-profiles-if-available",level:3},{value:"Development Status \ud83d\udcd6",id:"development-status-",level:2},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1 \u2014 Implement Runtime module for dex order",id:"milestone-1--implement-runtime-module-for-dex-order",level:3},{value:"Primitives",id:"primitives",level:6},{value:"Storages",id:"storages",level:6},{value:"Calls",id:"calls",level:6},{value:"Events",id:"events",level:6},{value:"Documentation",id:"documentation",level:3},{value:"Why Docusauraus?",id:"why-docusauraus",level:5},{value:"Documentation",id:"documentation-1",level:3},{value:"Future Plans",id:"future-plans",level:2},{value:"Additional Information \u2795",id:"additional-information-",level:2}],u={toc:s};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"new-order---a-full-onchain-orderbook-dex-with-indexers"},"New Order - a full onchain orderbook dex with indexers"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Team Name:")," Standard Protocol"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"USDC Payment Address:"),"  0xd2234E506862991ADA75f930c6D79B4236e3E265"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"https://github.com/w3f/Grants-Program/tree/master#level_slider-levels"},"Level"),":")," 2")),(0,r.kt)("h2",{id:"project-overview-"},"Project Overview \ud83d\udcc4"),(0,r.kt)("h3",{id:"overview"},"Overview"),(0,r.kt)("p",null,"This orderbook dex substrate frame and indexer logics focuses on bringing true orderbook runtime with feasible indexer in Polkadot ecosystem other than just UI mockup from Fiverr.\nThis is clearly a frame and indexer using Subquery with reasons, not investment seeking parachain design."),(0,r.kt)("h3",{id:"project-details"},"Project Details"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://standard.tech/"},"Standard Protocol Website"))),(0,r.kt)("h3",{id:"technologies"},"Technologies"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Rust"),(0,r.kt)("li",{parentName:"ol"},"Substrate Runtime")),(0,r.kt)("h3",{id:"components"},"Components"),(0,r.kt)("h3",{id:"new-order"},"new-order"),(0,r.kt)("p",null,"New order is the substrate module that processes orders in a queue model."),(0,r.kt)("h3",{id:"indexer"},"Indexer"),(0,r.kt)("p",null,"Indexer is the middleware in blockchain where it aggregates events from the block and make a database with insights.\nIt is often used to retrieve an account's status upon interaction with a certain dapp.\nSubquery is an indexer middleware that we use to integrate with in this grant."),(0,r.kt)("h3",{id:"ecosystem-fit"},"Ecosystem Fit"),(0,r.kt)("p",null,"\ud83d\udd17  ",(0,r.kt)("strong",{parentName:"p"},"Smart Contract Development Tool"),(0,r.kt)("br",null)),(0,r.kt)("h3",{id:"project-uniqueness"},"Project Uniqueness"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The world's first fully open-source permissionless orderbook dex runtime with queue model.")),(0,r.kt)("h2",{id:"reactive-queue"},"Reactive Queue"),(0,r.kt)("p",null,"Unlike other layer 2 orderbook dex which uses"),(0,r.kt)("h3",{id:"target-audience"},"Target Audience"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"End users who are used to order book exchanges")),(0,r.kt)("h3",{id:"problem-addressed"},"Problem Addressed"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Why Orderbook?")),(0,r.kt)("p",null,"After developing dex with ",(0,r.kt)("a",{parentName:"p",href:"www.github.com/digitalnativeinc/standard-evm"},"Standard")," in Polkadot ecosystem, There is a huge blocker on providing liqudity between polkadot ecosystem assets; ",(0,r.kt)("strong",{parentName:"p"},"XYK pool economically does not make sense to be made from bottom-up"),".\n0. Just to explain DEX in this document, It is an automated market maker between asset x and y keeping its equation x * y = k(k as the variable determining the price between asset on each trade). I see some grant editors are new to this field, so I leave this video link ",(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=Af3NxB7r-Ws"},"https://www.youtube.com/watch?v=Af3NxB7r-Ws")," to understand the concept. Many people forget that to make an xyk pool it requires a centralized power-play setting up initial price, and this is something that this grant focuses."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"XYK pool relies on the fact that price K can be made from each pair liquidity providers. To choose the price, the liquidity provider with more dominant or liquid asset in an ecosystem take the advantage. Let's say there is a pair between USDC and some new parachain project token $NEW or $DOT and $NEW. It is obvious that $DOT and $USDC liquidity provider take advantage of the $NEW token."),(0,r.kt)("li",{parentName:"ol"},"$NEW token has two choices; to fight back by buying $DOT or $USDC, but they are fighting with the liquidity provider in the first place. The other is not to list at all, then this may lead to negotiation on finding the right price on initial pair creation."),(0,r.kt)("li",{parentName:"ol"},'While parachain projects are finding the "right" price, pair is not made, and an end user can\'t even trade assets in polkadot ecosystem, so they will quit using this.')),(0,r.kt)("p",null,'Hence, orderbook dex is not only needed for the "actual" polkadot user to trade the asset in polkadot ecosystem and take ownership of the market across this multichain ecosystem but also building market from bottom-up organically.'),(0,r.kt)("p",null,"There are other benefits as well:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Possibility for perpetual trade(e.g. dy/dx)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Possibility for MEV bot ecosystem (e.g. ",(0,r.kt)("a",{parentName:"p",href:"https://www.flashbots.net/"},"flashbot"),")")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Familiar UX")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Why Parachain?"))),(0,r.kt)("p",null,"For adding smart contract tokens and testing xcm tokens."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Why Open Source?")),(0,r.kt)("p",null,"For keeping it real. Doing honest job. Yes Web3.0, No Web2.0. Audit teams require the project to be open-source anyways so we do it."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Reference?")),(0,r.kt)("p",null,"Kujira team from Cosmos ecosystem already built this without bragging or marketing. Instead of bragging about their 10x multichain future in conferences, they kept their mouth shut and built it."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://fin.kujira.app/trade/kujira14hj2tavq8fpesdwxxcu44rty3hh90vhujrvcmstl4zr3txmfvw9sl4e867"},"Kujira Fin")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Concerns?")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"A transaction may be finalized more or less than 12 seconds. Improving the block finalization time may be needed, but it is safer than layer 2 with bridge."),(0,r.kt)("li",{parentName:"ol"},"If indexer from operator shuts down, the UI cannot work.")),(0,r.kt)("h2",{id:"team-"},"Team \ud83d\udc65"),(0,r.kt)("h3",{id:"team-members"},"Team members"),(0,r.kt)("p",null,"(Development & Engineers)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/hyungsukkang"},"Hyungsuk Kang")," - Founder & Head of Development")),(0,r.kt)("h3",{id:"contact"},"Contact"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Contact Name:")," Hyungsuk Kang"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Contact Email:")," ",(0,r.kt)("a",{parentName:"li",href:"mailto:hyungsuk@standard.tech"},"hyungsuk@standard.tech")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Website:")," ",(0,r.kt)("a",{parentName:"li",href:"https://www.standard.tech"},"https://standard.tech"))),(0,r.kt)("h3",{id:"legal-structure"},"Legal Structure"),(0,r.kt)("p",null,"Digital Native Foundation."),(0,r.kt)("p",null,"3 Fraser Street #05-25 Duo Tower,"),(0,r.kt)("p",null,"Singapore"),(0,r.kt)("h3",{id:"founders-experiences"},"Founders' experiences"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/hyungsukkang"},"Hyungsuk Kang")," has experience working in blockchain industry over 3 years and is a contributor to UST restitution group. Being enlightened that with people who are saying DAOs and Governance can bring decentralzation were actually the one who tries to rule the whole system, He is now making a new standard in defi securing self-sovereignty of users' finance in web3.0 with enforceable, immutable financial contract that can keep promise without Governance's interference.")),(0,r.kt)("h3",{id:"team-code-repos"},"Team Code Repos"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Standard Protocol's team Github: ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/digitalnativeinc"},"https://github.com/digitalnativeinc"))),(0,r.kt)("p",null,"Please also provide the GitHub accounts of all team members. If they contain no activity, references to projects hosted elsewhere or live are also fine."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.github.com/hskang9"},"Hyungsuk Kang")," - Founder & Head of Development")),(0,r.kt)("h3",{id:"team-linkedin-profiles-if-available"},"Team LinkedIn Profiles (if available)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/hyungsukkang"},"Hyungsuk Kang"),", Founder")),(0,r.kt)("h2",{id:"development-status-"},"Development Status \ud83d\udcd6"),(0,r.kt)("p",null,"I have fiddled with substrate last year."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/digitalnativeinc/standard-substrate"},"nxcw")),(0,r.kt)("h2",{id:"development-roadmap-"},"Development Roadmap \ud83d\udd29"),(0,r.kt)("h3",{id:"overview-1"},"Overview"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Full-Time Equivalent (FTE):")," 1"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Total Costs:")," $15000 equivalent")),(0,r.kt)("h3",{id:"milestone-1--implement-runtime-module-for-dex-order"},"Milestone 1 \u2014 Implement Runtime module for dex order"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Estimated duration:")," 10 weeks"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"FTE:"),"  1"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Costs:")," $15,000 equivalent USDC")),(0,r.kt)("p",null,"Goal - Develop new-order pallet and documentation for the pallet"),(0,r.kt)("p",null,"New order pallet consists of:"),(0,r.kt)("h6",{id:"primitives"},"Primitives"),(0,r.kt)("p",null,"Order"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"- order_id: Global order identifier for ticketing\n- pair_id: Pair where the order is placed in\n- owner: the owner of the Order request\n- price: Order price for showing info when called individually\n- amount: Requested amount for trade\n- order_type: BID or ASK\n")),(0,r.kt)("p",null,"Pair"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"- id: Pair id\n- human: Human-readable info for the pair(e.g. BTC-USDT)\n- from: Trading from\n- to: Trading to\n")),(0,r.kt)("h6",{id:"storages"},"Storages"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Bids"),"(key1: pair_id, key2: price","[in 6 decimals]",", value: order_id[]): A double hash map for Total bids in a price of an asset\n",(0,r.kt)("inlineCode",{parentName:"p"},"Asks"),"(key1: pair_id, key2: price","[in 6 decimals]",", value: order_id[]): A double hash map for Total asks in a price of an asset\n",(0,r.kt)("inlineCode",{parentName:"p"},"Pairs"),"(key: pair_id, value: Pair): A hashmap for storing pair information.\n",(0,r.kt)("inlineCode",{parentName:"p"},"Orders"),"(key: order_id, value: Option","<","Order",">","): A hashmap for orders.\n",(0,r.kt)("inlineCode",{parentName:"p"},"Prices"),"(key1: pair_id, key2: asset_id, value: price in 6 decimal): A double hash map for market price in new order runtime.\n",(0,r.kt)("inlineCode",{parentName:"p"},"WhiteListed"),"(key: pair_id, value: bool): A hash map to store whitelisted pairs"),(0,r.kt)("h6",{id:"calls"},"Calls"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"add_pair"),": a sudo function to add a pair in the orderbook\n",(0,r.kt)("inlineCode",{parentName:"p"},"remove_pair"),": a sudo function to remove a pair in the orderbook\n",(0,r.kt)("inlineCode",{parentName:"p"},"place_bid"),": place bid on the orderbook, if existing orders match with ask, dissolve while going through the ask queue.\n",(0,r.kt)("inlineCode",{parentName:"p"},"place_ask"),": place ask on the orderboook, if existing orders match with bid, dissolve while going through the bid queue.\n",(0,r.kt)("inlineCode",{parentName:"p"},"cancel_order"),": cancel an order submitted from the sender"),(0,r.kt)("h6",{id:"events"},"Events"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"BidOrderFulfilled"),": an event when an order is fullfilled\n",(0,r.kt)("inlineCode",{parentName:"p"},"AskOrderFulfilled"),": an event when an order is fullfilled\n",(0,r.kt)("inlineCode",{parentName:"p"},"AskOrderMatched"),": an event when an order is matched for certain amount\n",(0,r.kt)("inlineCode",{parentName:"p"},"BidOrderMatched"),": an event when an order is matched for certain amount\n",(0,r.kt)("inlineCode",{parentName:"p"},"NewBidOrder"),": an event when a new bid order is requested in the orderbook\n",(0,r.kt)("inlineCode",{parentName:"p"},"NewAskOrder"),": an event when a new ask order is requested in the orderbook\n",(0,r.kt)("inlineCode",{parentName:"p"},"CanceledOrder"),": an event when an order is canceled\n",(0,r.kt)("inlineCode",{parentName:"p"},"PairWhitelisted"),": an event when an asset pair is whitelisted"),(0,r.kt)("p",null,"I will build this."),(0,r.kt)("h3",{id:"documentation"},"Documentation"),(0,r.kt)("p",null,"Gitbook documentation is not enough to describe interacting with the software in current market. Guides are getting more important as more general people have been exposed to crypto. Polkadot has many tech to build something but coordination of them is poorly done. This section specifies which document to write for sufficient approach for newcomers and new devs. The documentation will add 2 categories, 3 subcategories, and at least 6 pages built with docusaurus framework."),(0,r.kt)("h5",{id:"why-docusauraus"},"Why Docusauraus?"),(0,r.kt)("p",null,"Docusauraus supports algolia search with customizable UI components with React. Some of the components include ",(0,r.kt)("a",{parentName:"p",href:"https://codehike.org/"},"codehike"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"(Home)\n  - What is New Order?\n  - Learn More\n  - Community\n  Security\n  FAQ\n\n\n<Protocol>\n  (Overview)\n    Protocol Participants\n    Tokens\n\n  (Governance)\n    Proposal Types\n    Whitelist procedure\n\n<Runtime>\nnew-order: new-order pallet description \n  - Primitives\n  - Storages\n  - Calls\n  - Events\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,r.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,r.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"0a."),(0,r.kt)("td",{parentName:"tr",align:null},"License"),(0,r.kt)("td",{parentName:"tr",align:null},"Apache 2.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"0b."),(0,r.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,r.kt)("td",{parentName:"tr",align:null},"I will write this in official ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/standardweb3/docs"},"documentation"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"0c."),(0,r.kt)("td",{parentName:"tr",align:null},"Testing Guide"),(0,r.kt)("td",{parentName:"tr",align:null},"Test code will be provided in the pallet.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"0d."),(0,r.kt)("td",{parentName:"tr",align:null},"Docker"),(0,r.kt)("td",{parentName:"tr",align:null},"Docker can be provided for running this in substrate.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"1."),(0,r.kt)("td",{parentName:"tr",align:null},"Pallet code"),(0,r.kt)("td",{parentName:"tr",align:null},"the code repo will be open source with name ",(0,r.kt)("inlineCode",{parentName:"td"},"new-order"))))),(0,r.kt)("h3",{id:"documentation-1"},"Documentation"),(0,r.kt)("p",null,"Gitbook documentation is not enough to describe interacting with the software in current market. Guides are getting more important as more general people have been exposed to crypto. Polkadot has many tech to build something but coordination of them is poorly done. This section specifies which document to write for sufficient approach for newcomers and new devs. The documentation will add 1 category, at least 2 pages."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"<Developers>\nnewordercli: A CLI to execute orders with new order\nneworder.js: Usage guides with query, execution\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,r.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,r.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"0a."),(0,r.kt)("td",{parentName:"tr",align:null},"License"),(0,r.kt)("td",{parentName:"tr",align:null},"Apache 2.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"0b."),(0,r.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,r.kt)("td",{parentName:"tr",align:null},"I will write this in official ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/standardweb3/docs"},"documentation"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"0c."),(0,r.kt)("td",{parentName:"tr",align:null},"Testing Guide"),(0,r.kt)("td",{parentName:"tr",align:null},"Test code will be written in neworder.js")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"0d."),(0,r.kt)("td",{parentName:"tr",align:null},"Docker"),(0,r.kt)("td",{parentName:"tr",align:null},"Dockerfile is not needed")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"1."),(0,r.kt)("td",{parentName:"tr",align:null},"Library Repo"),(0,r.kt)("td",{parentName:"tr",align:null},"The code for the library will be open source for PoC.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"2."),(0,r.kt)("td",{parentName:"tr",align:null},"CLI Repo"),(0,r.kt)("td",{parentName:"tr",align:null},"The code for CLI interacting with new order will be open source for PoC.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"2."),(0,r.kt)("td",{parentName:"tr",align:null},"Article & Video"),(0,r.kt)("td",{parentName:"tr",align:null},"We will write an ",(0,r.kt)("strong",{parentName:"td"},"article")," that explains the work done as part of the grant, as well as release a video demo of executing newordercli")))),(0,r.kt)("h2",{id:"future-plans"},"Future Plans"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Researching BitMex p2p perpetual system, this may be implemented for next step as funding procedure is clarified."),(0,r.kt)("li",{parentName:"ul"},"Turn LPs from pair liquidity provider to future market fund provider"),(0,r.kt)("li",{parentName:"ul"},"Integrate with trading view lightweight chart for building UI"),(0,r.kt)("li",{parentName:"ul"},"XCM integration in Rococo"),(0,r.kt)("li",{parentName:"ul"},"EVM impl for multichain expansion"),(0,r.kt)("li",{parentName:"ul"},"Build Governance for onboarding tokens can be further developed"),(0,r.kt)("li",{parentName:"ul"},"Make real UI based on the working system with SubQuery or other indexer"),(0,r.kt)("li",{parentName:"ul"},"Get funded so that I can feed my devs")),(0,r.kt)("h2",{id:"additional-information-"},"Additional Information \u2795"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"How did you hear about the Grants Program?"),"\nI applied before."))}p.isMDXComponent=!0}}]);