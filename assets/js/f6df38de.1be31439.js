"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[9678],{42056:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));a(30828);const l={},i="Signac - a monorepo plugin for developing multiple Parity ink! smart contracts",o={unversionedId:"applications/signac",id:"applications/signac",title:"Signac - a monorepo plugin for developing multiple Parity ink! smart contracts",description:"- Team Name: Standard Protocol",source:"@site/docs/applications/signac.md",sourceDirName:"applications",slug:"/applications/signac",permalink:"/Grants-Program/applications/signac",draft:!1,tags:[],version:"current",frontMatter:{}},s={},p=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-",level:2},{value:"Overview",id:"overview",level:3},{value:"Project Details",id:"project-details",level:3},{value:"Technologies",id:"technologies",level:3},{value:"Components",id:"components",level:3},{value:"Nxink",id:"nxink",level:3},{value:"Signac",id:"signac",level:3},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Project Uniqueness",id:"project-uniqueness",level:3},{value:"Target Audience",id:"target-audience",level:3},{value:"Problem Addressed",id:"problem-addressed",level:3},{value:"Team \ud83d\udc65",id:"team-",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Founders&#39; experiences",id:"founders-experiences",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Team LinkedIn Profiles (if available)",id:"team-linkedin-profiles-if-available",level:3},{value:"Development Status \ud83d\udcd6",id:"development-status-",level:2},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1 \u2014 Implement Nx plugin for Parity ink",id:"milestone-1--implement-nx-plugin-for-parity-ink",level:3},{value:"Milestone 2 \u2014 Signac CLI",id:"milestone-2--signac-cli",level:3},{value:"Future Plans",id:"future-plans",level:2},{value:"Additional Information \u2795",id:"additional-information-",level:2}],m={toc:p};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"signac---a-monorepo-plugin-for-developing-multiple-parity-ink-smart-contracts"},"Signac - a monorepo plugin for developing multiple Parity ink! smart contracts"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Team Name:")," Standard Protocol"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"USDC Payment Address:"),"  0xd2234E506862991ADA75f930c6D79B4236e3E265"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"https://github.com/w3f/Grants-Program/tree/master#level_slider-levels"},"Level"),":")," 2")),(0,r.kt)("h2",{id:"project-overview-"},"Project Overview \ud83d\udcc4"),(0,r.kt)("p",null,"Inspired from painter from pointillism, I named the framework signac. Seurat was reserved in NPM, so the framework name is now signac."),(0,r.kt)("p",null,"Here is the overview of Signac by Sotherby's ",(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=XcOF5Ok6vrM"},"link"),"."),(0,r.kt)("p",null,"In short, Signac is monorepo parity ink! framework for versatile functions regarding wasm smart contract development on Polkadot ecosystem. The framework was initially being made for implementing Standard Protocol in ink!, but I see the opportunity to make it as offical smart contract dev tool."),(0,r.kt)("h3",{id:"overview"},"Overview"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Why Monorepo?")),(0,r.kt)("p",null,"After developing wasm contract development framework ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/terra-money/houston"},"Houston")," in Cosmos ecosystem, I found out it will never going to work like hardhat nor truffle because ",(0,r.kt)("strong",{parentName:"p"},"Rust smart contracts are consisted of not just files, but projects"),"."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"They are wrapped in Cargo, which means you have to move around current working directory to compile each contract. (e.g. cd .. && cd ./contract1 && cargo build --release && ..)"),(0,r.kt)("li",{parentName:"ol"},"To import from other contracts, it is not done in path, you have to specify both path and version -> More tedious jobs"),(0,r.kt)("li",{parentName:"ol"},"Multiple compiled outputs in each project folder -> harder to locate each of them on deployment")),(0,r.kt)("p",null,"To keep an eye on whole contracts, I found out the monorepo is the optimal way to develop them to provide the most same experience as existing solidity contract dev tools."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Why Nx?")),(0,r.kt)("p",null,"For cloud build."),(0,r.kt)("br",null),"![image](https://user-images.githubusercontent.com/12888144/177867044-74491815-860b-4e0e-ab36-95d021498699.png)",(0,r.kt)("p",null,"Rust smart contracts take extensive amount of time just to compile a contract.\nNow imagine there are more than 10 of them, and you compile all of them.\nCloud build was the necessary feature that we needed to work with."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Reference?")),(0,r.kt)("p",null,"I have used nx with other rust smart contract Cosmwasm for developing a project."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/digitalnativeinc/nxcw"},"nxcw")),(0,r.kt)("h3",{id:"project-details"},"Project Details"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://standard.tech/"},"Standard Protocol Website"))),(0,r.kt)("h3",{id:"technologies"},"Technologies"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Rust"),(0,r.kt)("li",{parentName:"ol"},"Parity ink!"),(0,r.kt)("li",{parentName:"ol"},"Polkadot.js or substrate-connect")),(0,r.kt)("h3",{id:"components"},"Components"),(0,r.kt)("h3",{id:"nxink"},"Nxink"),(0,r.kt)("p",null,"Nxink is a nx plugin where it creates boilerplates for parity ink! smart contracts. It also supports cloud build where developers can save local computer resources for compiling smart contracts."),(0,r.kt)("h3",{id:"signac"},"Signac"),(0,r.kt)("p",null,"Signac is a CLI that creates an nxink-integrated project for developers to start developing with ink! contract without knowing nx.\nSignac is also used to call other related tools in ink! smart contract ecosystem."),(0,r.kt)("h3",{id:"ecosystem-fit"},"Ecosystem Fit"),(0,r.kt)("p",null,"\ud83d\udd17  ",(0,r.kt)("strong",{parentName:"p"},"Smart Contract Development Tool"),(0,r.kt)("br",null)),(0,r.kt)("h3",{id:"project-uniqueness"},"Project Uniqueness"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The world's first framework for developing multiple parity ink! smart contract, from a former dev who developed a wasm smart contract framework.")),(0,r.kt)("h3",{id:"target-audience"},"Target Audience"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Developers/Developers/Developers")),(0,r.kt)("h3",{id:"problem-addressed"},"Problem Addressed"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"1. Rust smart contract requires unique approach to have fungible developer experience"),"\nAfter developing wasm contract development framework ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/terra-money/houston"},"Houston")," in Cosmos ecosystem. I found out it will never going to work like hardhat nor truffle because ",(0,r.kt)("strong",{parentName:"p"},"Rust smart contracts are consisted of not just files, but projects"),"."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"They are wrapped in Cargo, which means you have to move around current working directory to compile each contract. (e.g. cd .. && cd ./contract1 && cargo build --release && ..)"),(0,r.kt)("li",{parentName:"ol"},"To import from other contracts, it is not done in path, you have to specify both path and version -> More tedious jobs"),(0,r.kt)("li",{parentName:"ol"},"Multiple compiled outputs in each project folder -> harder to locate each of them on deployment")),(0,r.kt)("p",null,"To keep an eye on whole contracts, I found out the monorepo is the optimal way to develop them to provide the most same experience as existing solidity contract dev tools."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"2. Rust compilation is heavy in local computer")),(0,r.kt)("br",null),"For cloud build.",(0,r.kt)("br",null),"![image](https://user-images.githubusercontent.com/12888144/177867044-74491815-860b-4e0e-ab36-95d021498699.png)",(0,r.kt)("p",null,"Rust smart contracts take extensive amount of time just to compile a contract.\nNow imagine there are more than 10 of them, and you compile all of them.\nCloud build was the necessary feature that we needed to work with."),(0,r.kt)("h2",{id:"team-"},"Team \ud83d\udc65"),(0,r.kt)("h3",{id:"team-members"},"Team members"),(0,r.kt)("p",null,"(Development & Engineers)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/hyungsukkang"},"Hyungsuk Kang")," - Founder & Head of Development")),(0,r.kt)("h3",{id:"contact"},"Contact"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Contact Name:")," Hyungsuk Kang"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Contact Email:")," ",(0,r.kt)("a",{parentName:"li",href:"mailto:hyungsuk@standard.tech"},"hyungsuk@standard.tech")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Website:")," ",(0,r.kt)("a",{parentName:"li",href:"https://www.standard.tech"},"https://standard.tech"))),(0,r.kt)("h3",{id:"legal-structure"},"Legal Structure"),(0,r.kt)("p",null,"Digital Native Foundation."),(0,r.kt)("p",null,"3 Fraser Street #05-25 Duo Tower,"),(0,r.kt)("p",null,"Singapore"),(0,r.kt)("h3",{id:"founders-experiences"},"Founders' experiences"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/hyungsukkang"},"Hyungsuk Kang")," has experience working in blockchain industry over 3 years and is a contributor to UST restitution group. Being enlightened that with people who are saying DAOs and Governance can bring decentralzation were actually the one who tries to rule the whole system, He is now making a new standard in defi securing self-sovereignty of users' finance in web3.0 with enforceable, immutable financial contract that can keep promise without Governance's interference.")),(0,r.kt)("h3",{id:"team-code-repos"},"Team Code Repos"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Standard Protocol's team Github: ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/digitalnativeinc"},"https://github.com/digitalnativeinc"))),(0,r.kt)("p",null,"Please also provide the GitHub accounts of all team members. If they contain no activity, references to projects hosted elsewhere or live are also fine."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.github.com/hskang9"},"Hyungsuk Kang")," - Founder & Head of Development")),(0,r.kt)("h3",{id:"team-linkedin-profiles-if-available"},"Team LinkedIn Profiles (if available)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/hyungsukkang"},"Hyungsuk Kang"),", Founder")),(0,r.kt)("h2",{id:"development-status-"},"Development Status \ud83d\udcd6"),(0,r.kt)("p",null,"I have used nx with other rust smart contract Cosmwasm for developing a project."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/digitalnativeinc/nxcw"},"nxcw")),(0,r.kt)("h2",{id:"development-roadmap-"},"Development Roadmap \ud83d\udd29"),(0,r.kt)("h3",{id:"overview-1"},"Overview"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Full-Time Equivalent (FTE):")," 1"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Total Costs:")," $30000 equivalent")),(0,r.kt)("h3",{id:"milestone-1--implement-nx-plugin-for-parity-ink"},"Milestone 1 \u2014 Implement Nx plugin for Parity ink"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Estimated duration:")," 4 weeks"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"FTE:"),"  1"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Costs:")," $10,000 equivalent USDC")),(0,r.kt)("p",null,"Goal - Develop Nx plugin for boilerplate in Parity ink! contract project"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,r.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,r.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"0a."),(0,r.kt)("td",{parentName:"tr",align:null},"License"),(0,r.kt)("td",{parentName:"tr",align:null},"Apache 2.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"0b."),(0,r.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,r.kt)("td",{parentName:"tr",align:null},"This code is the inner works of the signac, so what user needs to focus is the documnetation from signac, so there will be no documentation.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"0c."),(0,r.kt)("td",{parentName:"tr",align:null},"Testing Guide"),(0,r.kt)("td",{parentName:"tr",align:null},"E2E test code will be provided to test. If not verifiable due to processing time on a command, sandbox is provided in ",(0,r.kt)("inlineCode",{parentName:"td"},"/tmp")," folder so tester can manually operate to verify functionality.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"0d."),(0,r.kt)("td",{parentName:"tr",align:null},"Docker"),(0,r.kt)("td",{parentName:"tr",align:null},"This is a javascript library that does not need docker.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"1."),(0,r.kt)("td",{parentName:"tr",align:null},"Nx Plugin Repo"),(0,r.kt)("td",{parentName:"tr",align:null},"The entire code for the boilerplate plugin will be shared in a github public repository.")))),(0,r.kt)("h3",{id:"milestone-2--signac-cli"},"Milestone 2 \u2014 Signac CLI"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Estimated duration:")," 10 weeks"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"FTE:"),"  1"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Costs:")," $20,000 equivalent USDC")),(0,r.kt)("p",null,"Goal - Make a CLI binary that can put this in a production level.\nTaking one step further from ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/nrwl/nx/blob/b8efa778f639d26e339cecb1d16e0f5a51b1d082/packages/create-nx-workspace/bin/create-nx-workspace.ts"},"create-nx-workspace"),", Signac will generate nx boilerplate for parity ink! smart contract development and support other commands that are related to not only in contract development.\nThis includes deploying contract, running the test chain, and setting up a task to run.\nThe cli binary aims to cover whole feature in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/ink-waterfall"},"ink-waterfall"),"."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,r.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,r.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"0a."),(0,r.kt)("td",{parentName:"tr",align:null},"License"),(0,r.kt)("td",{parentName:"tr",align:null},"Apache 2.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"0b."),(0,r.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,r.kt)("td",{parentName:"tr",align:null},"Documentation of Signac will be provided in gitbook")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"0c."),(0,r.kt)("td",{parentName:"tr",align:null},"Testing Guide"),(0,r.kt)("td",{parentName:"tr",align:null},"Testing guide will be provided as a tutorial in gitbook documentation")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"0d."),(0,r.kt)("td",{parentName:"tr",align:null},"Docker"),(0,r.kt)("td",{parentName:"tr",align:null},"There will be a dockerfile included in the codebase to run local substrate node with ",(0,r.kt)("inlineCode",{parentName:"td"},"contract")," pallet")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"1."),(0,r.kt)("td",{parentName:"tr",align:null},"Signac Repo"),(0,r.kt)("td",{parentName:"tr",align:null},"The entire code for the binary will be shared in a github public repository.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"2."),(0,r.kt)("td",{parentName:"tr",align:null},"Article & Video"),(0,r.kt)("td",{parentName:"tr",align:null},"We will write an ",(0,r.kt)("strong",{parentName:"td"},"article")," that explains the work done as part of the grant, as well as release a video walk through demonstrating Signac")))),(0,r.kt)("h2",{id:"future-plans"},"Future Plans"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Make indexer boilerplate with ",(0,r.kt)("a",{parentName:"li",href:"https://linktr.ee/subquerynetwork"},"SubQuery")),(0,r.kt)("li",{parentName:"ul"},"Test deployment in Canvas or Statemint common-good parachain."),(0,r.kt)("li",{parentName:"ul"},"More example contract generators using XCM, Defi, NFT, etc"),(0,r.kt)("li",{parentName:"ul"},"Build Standard Protocol implementation in Parity ink!"),(0,r.kt)("li",{parentName:"ul"},"Maintain framework to adapt into multichain smart contract environment(e.g. support deploy command for deploying to other ink! contract chains)")),(0,r.kt)("h2",{id:"additional-information-"},"Additional Information \u2795"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"How did you hear about the Grants Program?"),"\nI applied before."))}u.isMDXComponent=!0}}]);