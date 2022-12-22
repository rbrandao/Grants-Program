"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[9509],{71450:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var n=a(87462),i=(a(67294),a(3905));a(30828);const r={},o=void 0,l={unversionedId:"applications/hybrid_node_research",id:"applications/hybrid_node_research",title:"hybrid_node_research",description:"- Team Name: Zondax AG",source:"@site/docs/applications/hybrid_node_research.md",sourceDirName:"applications",slug:"/applications/hybrid_node_research",permalink:"/Grants-Program/applications/hybrid_node_research",draft:!1,tags:[],version:"current",frontMatter:{}},s={},d=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-",level:2},{value:"Overview",id:"overview",level:3},{value:"Project Details",id:"project-details",level:3},{value:"Technology and Languages",id:"technology-and-languages",level:4},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team \ud83d\udc65",id:"team-",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Development Status \ud83d\udcd6",id:"development-status-",level:2},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-",level:2},{value:"Technical Scope:",id:"technical-scope",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1 - Preengineering of hybrid node and research analysis",id:"milestone-1---preengineering-of-hybrid-node-and-research-analysis",level:3},{value:"Future Plans",id:"future-plans",level:2},{value:"Additional Information \u2795",id:"additional-information-",level:2}],p={toc:d};function c(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Team Name:")," Zondax AG"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Payment Address:")," (DAI ERC 20)  0xf50a09731dc32a64431920e10e1e58dce28e6b11 "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"[Level]"),": 3")),(0,i.kt)("h2",{id:"project-overview-"},"Project Overview \ud83d\udcc4"),(0,i.kt)("p",null,"This grant application falls under this RFP ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/w3f/Grants-Program/blob/master/docs/rfps/Open/alternative_polkadot_host_implementations.md"},"https://github.com/w3f/Grants-Program/blob/master/docs/rfps/Open/alternative_polkadot_host_implementations.md")," and it is meant as a previous research work analysis before the actual rework of the host implementation. "),(0,i.kt)("h3",{id:"overview"},"Overview"),(0,i.kt)("p",null,"A Polkadot host provides the environment in which the runtime executes. For this reason, hosts typically evolve slowly and are based on the Polkadot specification. This specification defines the boundaries and interactions between the host implementation and the network runtime."),(0,i.kt)("p",null,"The polkadot network (and other related chains) have been successfully running for a few years already. There is a collective evolution and experience beyond the specifications themselves. Moreover, there are already a few other alternative implementations that have not reached production level quality yet. We consider that starting from scratch will require a significant effort and high risk objective. "),(0,i.kt)("p",null,"For this reason, we consider that building an alternative implementation based on a hybrid and progressive approach can minimize risk and ensure a successful roadmap. By hybrid and progressive, we mean that we will start by taking the existing Parity host based on Rust and progressively replacing substantial areas using a combination of new C++ or Rust implementations."),(0,i.kt)("p",null,"Given the risk and complexity of this project, we would like to propose an initial pre-engineering phase. We will focus on analysing the current situation and preparing a clear and detailed execution plan that takes into consideration possible risks and blockers."),(0,i.kt)("h3",{id:"project-details"},"Project Details"),(0,i.kt)("p",null,"This project will ",(0,i.kt)("em",{parentName:"p"},"not")," provide a working alternative node. Instead, it will concentrate on analysing and providing a clear work plan aligned with our proposal of a hybrid approach."),(0,i.kt)("p",null,"As a proof of concept, we will also select a specific component (such as Keystore) and will show how our development process and be effectively used to progressively evolve the existing Parity node. "),(0,i.kt)("p",null,"Last but not least, a member our our research team will analyse existing specifications looking for possible gaps and risky areas. The objective is to determine possible mitigations and alternative plans beforehand."),(0,i.kt)("h4",{id:"technology-and-languages"},"Technology and Languages"),(0,i.kt)("p",null,"To minimize extensive testing and validation, we will concentrate on Linux based systems only.  Our main technology focus will be to promote modularity and replace different parts of the reference node by rewriting them in C/C++. "),(0,i.kt)("p",null,"At the moment of this writing, we intend to concentrate on C++ 17/20, however, we don\u2019t disregard the possibility of using Rust in some cases. In particular, to facilitate adequate FFI between official Parity code and rewritten C/C++ or Rust code by Zondax."),(0,i.kt)("p",null,"At the end of this project, we will summarize our experience and make a recommendation for future work."),(0,i.kt)("h3",{id:"ecosystem-fit"},"Ecosystem Fit"),(0,i.kt)("p",null,"Zondax is a growing and distributed team with experience and projects for more than 50 blockchains. Zondax has been contributing to the Substrate ecosystem since 2018-2019. The team has received and completed a large number of W3F grants and currently maintains most Ledger apps for the ecosystem. "),(0,i.kt)("h2",{id:"team-"},"Team \ud83d\udc65"),(0,i.kt)("h3",{id:"team-members"},"Team members"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"1 x Researcher "),(0,i.kt)("li",{parentName:"ul"},"2 x Rust / C++ Engineers"),(0,i.kt)("li",{parentName:"ul"},"1 x Project Manager")),(0,i.kt)("h3",{id:"contact"},"Contact"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Contact Name:")," Juan Leni and Ainhoa Aldave"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Contact Email:")," ",(0,i.kt)("a",{parentName:"li",href:"mailto:juan.leni@zondax.ch"},"juan.leni@zondax.ch")," / ",(0,i.kt)("a",{parentName:"li",href:"mailto:ainhoa.aldave@zondax.ch"},"ainhoa.aldave@zondax.ch")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Website:"),"  zondax.ch")),(0,i.kt)("h3",{id:"legal-structure"},"Legal Structure"),(0,i.kt)("p",null,"Legal structure\nZondax AG\nDammstrasse 16\nZug 6300\nSwitzerland\nUID CHE-491.796.576"),(0,i.kt)("h3",{id:"teams-experience"},"Team's experience"),(0,i.kt)("p",null,"Over the last few years, Zondax has been involved in a large number of projects for most of the key players in the blockchain industry. Our team includes experts in most blockchain aspects, from cryptography to data and protocol engineering. "),(0,i.kt)("h3",{id:"team-code-repos"},"Team Code Repos"),(0,i.kt)("p",null,"Most of our contributions to the blockchain ecosystem can be found in our GitHub organization: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/zondax"},"https://github.com/zondax")),(0,i.kt)("h2",{id:"development-status-"},"Development Status \ud83d\udcd6"),(0,i.kt)("p",null,"Not initiated. "),(0,i.kt)("h2",{id:"development-roadmap-"},"Development Roadmap \ud83d\udd29"),(0,i.kt)("h2",{id:"technical-scope"},"Technical Scope:"),(0,i.kt)("p",null,"The scope of this proposal will consist of:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Review of specifications and conformance tests\nThe Polkadot specification and the corresponding conformance tests will be used as a reference of expected valid behavior:\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/w3f/polkadot-spec"},"https://github.com/w3f/polkadot-spec"),"\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/w3f/polkadot-tests"},"https://github.com/w3f/polkadot-tests"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Review of Polkadot Host (Parity)\nWe will pay particular attention to the following areas:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Code churn. Determine stable and more active areas"),(0,i.kt)("li",{parentName:"ul"},"Traits and extensibility points"),(0,i.kt)("li",{parentName:"ul"},"Internal and external interfaces"),(0,i.kt)("li",{parentName:"ul"},"Quality of protocol specification and how they are tested"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Analysis, initial rework (as a proof of concept) and reimplementation of a module:\nBased on the findings from the previous stage, we will select and replace a module (such as Keystore and remote signing APIs) while keeping everything else in the node functional."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Select component to be replace"),(0,i.kt)("li",{parentName:"ul"},"Write integration tests at the boundary level"),(0,i.kt)("li",{parentName:"ul"},"Replace the module with an external implementation"),(0,i.kt)("li",{parentName:"ul"},"Define how to integrate and follow upstream changes"),(0,i.kt)("li",{parentName:"ul"},"Define and inform future practices based on this proof of concept.\n")))),(0,i.kt)("h3",{id:"overview-1"},"Overview"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Total estimated workload:")," 4 weeks"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Delivery time:"),": 6 to 8 weeks"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Full-Time Equivalent (FTE):"),"  2.5 FTE"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Total Costs:")," 58'800 DAI")),(0,i.kt)("h3",{id:"milestone-1---preengineering-of-hybrid-node-and-research-analysis"},"Milestone 1 - Preengineering of hybrid node and research analysis"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Estimated workload:")," 4 working weeks"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Delivery time:"),": 6 to 8 weeks"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"FTE:"),"  2,5"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Costs:")," 58'800 DAI")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,i.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,i.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("strong",{parentName:"td"},"0a.")),(0,i.kt)("td",{parentName:"tr",align:null},"License"),(0,i.kt)("td",{parentName:"tr",align:null},"Apache 2.0 / GPLv3 / MIT")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("strong",{parentName:"td"},"0b.")),(0,i.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,i.kt)("td",{parentName:"tr",align:null},"We will provide a inline documentation of the code and   inline documentation of the code and a basic tutorial")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("strong",{parentName:"td"},"0c.")),(0,i.kt)("td",{parentName:"tr",align:null},"Testing and Testing Guide"),(0,i.kt)("td",{parentName:"tr",align:null},"Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. We plan to write integration tests at the boundary level")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("strong",{parentName:"td"},"0d.")),(0,i.kt)("td",{parentName:"tr",align:null},"Docker"),(0,i.kt)("td",{parentName:"tr",align:null},"We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0e."),(0,i.kt)("td",{parentName:"tr",align:null},"Article"),(0,i.kt)("td",{parentName:"tr",align:null},"We will publish an article explaining the research analysis done")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"1."),(0,i.kt)("td",{parentName:"tr",align:null},"Research Report"),(0,i.kt)("td",{parentName:"tr",align:null},"We will provide a detailed report covering the review of specifications and conformance tests, the review of Polkadot Host (Parity)and the findings from the re-work of the module and primitives including recommendation practices based on this proof of concept.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"2."),(0,i.kt)("td",{parentName:"tr",align:null},"PoC code"),(0,i.kt)("td",{parentName:"tr",align:null},"We will provide the code from the re-worked primitives.We plan to promote modularity and replace parts of the reference node by rewriting them in C/C++.  ",(0,i.kt)("br",null)," Note: This will not be production-ready code. It is just meant to be used as a proof of concept and to inform future development plans.")))),(0,i.kt)("h2",{id:"future-plans"},"Future Plans"),(0,i.kt)("p",null,"After this first research analysis we plan to apply for additional grant to cover a long-term commitment and full rework implementation of this alternative hybrid Polakdot host. "),(0,i.kt)("h2",{id:"additional-information-"},"Additional Information \u2795"),(0,i.kt)("p",null,"Zondax has been contributing to the Polkadot ecosystem for several years, and has succesfully completed several grants."))}c.isMDXComponent=!0}}]);