"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[4921],{54323:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>m});var n=a(87462),i=(a(67294),a(3905));a(30828);const l={},r="NewOmega",o={unversionedId:"applications/newomega",id:"applications/newomega",title:"NewOmega",description:"Team Name:* NewOmega",source:"@site/docs/applications/newomega.md",sourceDirName:"applications",slug:"/applications/newomega",permalink:"/Grants-Program/applications/newomega",draft:!1,tags:[],version:"current",frontMatter:{}},s={},m=[{value:"Project Overview",id:"project-overview",level:2},{value:"Overview",id:"overview",level:3},{value:"Project Details",id:"project-details",level:3},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team",id:"team",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Team LinkedIn Profiles",id:"team-linkedin-profiles",level:3},{value:"Development Roadmap",id:"development-roadmap",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Future Plans",id:"future-plans",level:2},{value:"Additional Information",id:"additional-information",level:2}],p={toc:m};function c(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"newomega"},"NewOmega"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Team Name:")," NewOmega"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Payment Address:")," DAI: 0xBd774017Ea2ae5B9dec156bA8C987d74eF249b30")),(0,i.kt)("h2",{id:"project-overview"},"Project Overview"),(0,i.kt)("h3",{id:"overview"},"Overview"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Description")),(0,i.kt)("p",null,"NewOmega is, very simply, a blockchain game that can not be shut down."),(0,i.kt)("p",null,"The current state of online gaming is a massive in-game purchases system, for anything ranging from quality of life improvements for players, to actual advantages, which usually can otherwise be obtainted but take time to get. Purchasing things, combining gaming and finance (at least, a real money wallet), became the norm. That is certainly the sentiment we're aiming to take advantage of."),(0,i.kt)("p",null,'Purchasing things sounds great, but what if the game stops being profitable tomorrow? It will be shut down. All the spent money on "owned" items suddenly evaporates. The value of in game is at the whim of game developers. This is the second reason why New Omega was born.'),(0,i.kt)("p",null,"With blockchain, there are several things we can solve here, right now. First of all, let's rework the running costs. Let's take advantage of blockchain/smart contract platforms to move the computing away from central servers with traditional financing, into a place where we can easily integrate them with an economic model to keep them going."),(0,i.kt)("p",null,"By moving the processing logic to the blockchain, we achieve another important win when gaming, especially competitive gaming, is concerned: we provide transparency into the code, therefore guaranteeing fairness. Dice rolls are fair (thanks to Oracles). The game engine is fair (you can see the code at any time)."),(0,i.kt)("p",null,"Blockchain also offers an unique opportunity for a different take on a financing model. Since the game interactions are effectively smart contract executions, there is a cost involved with the interactions. At the very basic level, the game can always keep going, because the users pay for the upkeep (the blockchain interactions). On top of that however, NewOmega wants to introduce items and otherwise collectible objects (ideally NFTs), purchasable by crypto, proceeds of which can be divided into 3 Pools: Development, Upkeep, Rewards."),(0,i.kt)("p",null,"Development Pool would finance the development of the game (the development team private address)\nUpkeep Pool would be used to finance smart contract execution for users, especially new users, to ease onboarding. ETH offers solutions like Gas Station, which would ideally be employed.\nRewards Pool would be used to reward the winners of a game season (1 week or 1 month), so the top players would be rearded with crypto."),(0,i.kt)("p",null,"NewOmega wants to be self-financed, never-ending, strategic space game, with provably fair results and crypto rewards for the best. The situation described above (game shutting down due to not being profitable), is an actual real life event that motivated the team to seek a solution. The players should decide which game lives on, not corporations."),(0,i.kt)("p",null,"The game itself:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"a tactical spaceship combat simulator, in which players compose fleets from spaceships and attack each other, for in game progress and the leaderboard (or ladder system)"),(0,i.kt)("li",{parentName:"ul"},"users select fleets, tactics, and then the game resolves without users interaction"),(0,i.kt)("li",{parentName:"ul"},"other features can be incorporated, such as territory control system which would lead to the fights (which are at the core of the game)")),(0,i.kt)("p",null,"The project is currently in prototype stage, a basic client exists and smart contracts are published on the Ethereum Ropsten testnet, so the basic game is fully playable.\nHowever, we are interested in developing this using Polkadot with Ink! and WASM smart contracts, and therefore we would like to submit our application, for your consideration."),(0,i.kt)("h3",{id:"project-details"},"Project Details"),(0,i.kt)("p",null,"The prototype is available on GitHub under ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/WiktorStarczewski/newomega.trinity"},"https://github.com/WiktorStarczewski/newomega.trinity")," (Contracts under hardhat/contracts. Frontend client in src/.)"),(0,i.kt)("p",null,"The technicals:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"a JavaScript (Babylon.js) 3d game frontend"),(0,i.kt)("li",{parentName:"ul"},"Ink smart contracts"),(0,i.kt)("li",{parentName:"ul"},"integrated wallet via polkadot.js"),(0,i.kt)("li",{parentName:"ul"},"game engine, a smart contract"),(0,i.kt)("li",{parentName:"ul"},"game board (state of the game), a smart contract")),(0,i.kt)("p",null,"Game board contains the results, is used to create leaderboards, and also stores individual players progress in game.\nGame engine is pure, does not alter the blockchain, so its free and is used to provide training mode in game. Not everything can be a paid smart contract."),(0,i.kt)("h3",{id:"ecosystem-fit"},"Ecosystem Fit"),(0,i.kt)("p",null,"There are games out there, but in our view, none have fully yet embraced the opportunities of decentalisation."),(0,i.kt)("h2",{id:"team"},"Team"),(0,i.kt)("h3",{id:"team-members"},"Team members"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Wiktor Starczewski")),(0,i.kt)("h3",{id:"contact"},"Contact"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Contact Name:")," Wiktor Starczewski"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Contact Email:")," ",(0,i.kt)("a",{parentName:"li",href:"mailto:celrisen@gmail.com"},"celrisen@gmail.com")," / ",(0,i.kt)("a",{parentName:"li",href:"mailto:poszerny@gmail.com"},"poszerny@gmail.com"))),(0,i.kt)("h3",{id:"legal-structure"},"Legal Structure"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Registered Address:")," N/A"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Registered Legal Entity:")," N/A")),(0,i.kt)("h3",{id:"teams-experience"},"Team's experience"),(0,i.kt)("p",null,"Wiktor:\nI'm an experienced software developer, and an early blockchain adopter. Previously involved with the Elastos Foundation as a freelance developer, my two favourite things are blockchain and web development. I have 15 years experience in the business."),(0,i.kt)("h3",{id:"team-code-repos"},"Team Code Repos"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/WiktorStarczewski"},"https://github.com/WiktorStarczewski"))),(0,i.kt)("h3",{id:"team-linkedin-profiles"},"Team LinkedIn Profiles"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/wiktor-starczewski-94625b96/"},"https://www.linkedin.com/in/wiktor-starczewski-94625b96/"))),(0,i.kt)("h2",{id:"development-roadmap"},"Development Roadmap"),(0,i.kt)("p",null,"Code commited reguarly to the GitHub repository."),(0,i.kt)("p",null,"Milestone 1 \u2014 Migrate to Ink! and integrate game codebase"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Estimated Duration:")," 1 month"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"FTE:"),"  1"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Costs:")," 7500 DAI")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Number"),(0,i.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,i.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"0a."),(0,i.kt)("td",{parentName:"tr",align:null},"License"),(0,i.kt)("td",{parentName:"tr",align:null},"Apache 2.0 / MIT / Unlicense")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"0b."),(0,i.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,i.kt)("td",{parentName:"tr",align:null},"We will provide both inline documentation of the code and a basic tutorial that explains how a user can run the contracts which will show how the new functionality works.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"0c."),(0,i.kt)("td",{parentName:"tr",align:null},"Testing Guide"),(0,i.kt)("td",{parentName:"tr",align:null},"The code will have unit-test coverage (min. 70%) to ensure functionality and robustness. In the guide we will describe how to run these tests")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"0d."),(0,i.kt)("td",{parentName:"tr",align:null},"Article/Tutorial"),(0,i.kt)("td",{parentName:"tr",align:null},"We will write an article or tutorial that explains the work done as part of the grant.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"1."),(0,i.kt)("td",{parentName:"tr",align:null},"Ink: GameEngine"),(0,i.kt)("td",{parentName:"tr",align:null},"We will port NewOmega.sol into Ink (see ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/WiktorStarczewski/newomega.trinity/blob/master/hardhat/contracts"},"https://github.com/WiktorStarczewski/newomega.trinity/blob/master/hardhat/contracts"),")")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"2."),(0,i.kt)("td",{parentName:"tr",align:null},"Ink: GameRewarder"),(0,i.kt)("td",{parentName:"tr",align:null},"We will write GameRewarder contract in Ink, which will generate buyable packages for the users")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"3."),(0,i.kt)("td",{parentName:"tr",align:null},"GitHub codebase"),(0,i.kt)("td",{parentName:"tr",align:null},"We will provide the prototype JavaScript game client, functionally as of the moment of application (playnewomega.online)")))),(0,i.kt)("p",null,"Milestone 2 \u2014 Working prototype with signing transactions"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Estimated Duration:")," 1 month"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"FTE:"),"  1"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Costs:")," 7500 DAI")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Number"),(0,i.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,i.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"0a."),(0,i.kt)("td",{parentName:"tr",align:null},"License"),(0,i.kt)("td",{parentName:"tr",align:null},"Apache 2.0 / MIT / Unlicense")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"0b."),(0,i.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,i.kt)("td",{parentName:"tr",align:null},"We will provide both inline documentation of the code and a basic tutorial that explains how a user can participate in the game, interact with their wallets etc.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"0c."),(0,i.kt)("td",{parentName:"tr",align:null},"Testing Guide"),(0,i.kt)("td",{parentName:"tr",align:null},"The code will have unit-test coverage (min. 70%) to ensure functionality and robustness. In the guide we will describe how to run these tests")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"0d."),(0,i.kt)("td",{parentName:"tr",align:null},"Article/Tutorial"),(0,i.kt)("td",{parentName:"tr",align:null},"We will write an article or tutorial that explains the work done as part of the grant.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"1."),(0,i.kt)("td",{parentName:"tr",align:null},"Integrate game client with polkadot.js for wallet management and signing txs"),(0,i.kt)("td",{parentName:"tr",align:null},"We will, via polkadot.js, integrate a wallet solution and allow playing the game by interacting with the smart contracts to defend, attack, view leaderboards, and progress in game (basic) via experience points gained through combat.")))),(0,i.kt)("h3",{id:"overview-1"},"Overview"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Total Estimated Duration:")," 2 months"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Full-time equivalent (FTE):")," 2 FTE"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Total Costs:")," 15000 DAI")),(0,i.kt)("h2",{id:"future-plans"},"Future Plans"),(0,i.kt)("p",null,"Gaining an initial playerbase is very important, especially when experimenting with different payment models based on crowdfunding. Organising the self funding aspect therefore has to come first."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Roadmap")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Self Funding / Financing Smart Contracts Fund"),(0,i.kt)("li",{parentName:"ul"},"Designing Own Ships (statistics)\nA way to provide additional strategic options to the game, without increasing the smart contract load too much (one can design a ship and easily pass it into the fight contract as parameter, so its next to free)."),(0,i.kt)("li",{parentName:"ul"},"Territory Control\nWill put more load on the contract side, but for broader gameplay will be unavoidable. Contracts for map control can be kept lean, so they would be cheap."),(0,i.kt)("li",{parentName:"ul"},"Cooperative Play\nCombining fleets together for attacks, etc."),(0,i.kt)("li",{parentName:"ul"},"Alliances")),(0,i.kt)("h2",{id:"additional-information"},"Additional Information"),(0,i.kt)("p",null,"A working frontend prototype and smart contracts on Ethereum Ropsten are available. No teams have already contributed (financially) to the project. No other grant applications have been made."))}c.isMDXComponent=!0}}]);