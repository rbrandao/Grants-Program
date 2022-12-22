"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[4521],{41879:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(87462),o=(n(67294),n(3905));n(30828);const i={},r="Sol2Ink",l={unversionedId:"applications/sol2ink",id:"applications/sol2ink",title:"Sol2Ink",description:"- Team Name: SuperColony",source:"@site/docs/applications/sol2ink.md",sourceDirName:"applications",slug:"/applications/sol2ink",permalink:"/Grants-Program/applications/sol2ink",draft:!1,tags:[],version:"current",frontMatter:{}},s={},p=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-",level:2},{value:"Overview",id:"overview",level:3},{value:"Project Details",id:"project-details",level:3},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team \ud83d\udc65",id:"team-",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Team LinkedIn Profiles",id:"team-linkedin-profiles",level:3},{value:"Development Status \ud83d\udcd6",id:"development-status-",level:2},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1 \u2014 Implement\tSol2Ink cli tool for simple contract parsing",id:"milestone-1--implementsol2ink-cli-tool-for-simple-contract-parsing",level:3},{value:"Future Plans",id:"future-plans",level:2},{value:"Additional Information \u2795",id:"additional-information-",level:2}],d={toc:p};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"sol2ink"},"Sol2Ink"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Team Name:")," ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/Supercolony-net"},"SuperColony")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Payment Address:")," ERC 20 ADDRESS (USDT):\n0xE1B19cE32866cDE87F8f59C7C2C5f90E093A6942 "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://github.com/w3f/Grants-Program/tree/master#level_slider-levels"},"Level"),":")," 2")),(0,o.kt)("h2",{id:"project-overview-"},"Project Overview \ud83d\udcc4"),(0,o.kt)("h3",{id:"overview"},"Overview"),(0,o.kt)("p",null,"The goal of this project is to ease the way to Polkadot (Ink!) ecosystem\nfor the current Solidity smart contract developers and dapps written\nin Solidity. Since the ecosystem is relatively new, it may be\ndiscouraging and time-consuming for developers and teams to rewrite\nwhole existing code bases of their smart contract applications into a\ndifferent language (Rust, Ink!)."),(0,o.kt)("p",null,"This project aims to accelerate this process by transpiling existing\nSolidity code into Rust and ink! code, while considering existing\nstandards of these languages and ecosystems. Some of the points which\nare the most time-consuming while doing such transformation are for\nexample rewriting the headers of functions (position of type and name\nidentifiers), different behavior of common data types, as well as\nusage of different primitive types, and many more. If a developer\ndecides to use Sol2Ink, it is still needed for them to check the\ngenerated code and correct some issues which may not be handled well\nby the program, but the first step of transforming the code base is\ncompleted and already has saved the developer a lot of time. A simple\nprototype that was already tested by our developers, which handles\nonly interfaces for now (since it is very simple to transform those),\ncan already decrease the time of rewriting some extensive interfaces\ninto Rust and Ink! from one hour to ten minutes, after correcting\nsmall issues, which the prototype did not consider yet."),(0,o.kt)("h3",{id:"project-details"},"Project Details"),(0,o.kt)("p",null,"Sol2Ink will take the code of an existing smart contract (or existing\nsmart contract application) and transpile the code from Solidity into\nRust. Since it is a smart contract application, it will also use Ink!\nimplementations to make it a deployable smart contract application.\nWhile doing this, the developer will have an option to use existing\nstandards and PSPs, one example may be optional usage of OpenBrush\nstandards (e.g. if there is a call to the ERC-20 interface inside\nthe contract being transformed, the program will use the PSP-22\ninterface from OpenBrush to do the same call). The next step (where\nRust applications differ from Solidity applications) is to use the\ncorrect file structure in the transformed application, and Sol2Ink\nwill handle this as well."),(0,o.kt)("p",null,"This way, we can divide the details of Sol2Ink into a roadmap:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Implement\tSol2Ink cli tool for simple contract parsing")),(0,o.kt)("p",null,"The user will give Sol2Ink the\ncode they want to transform into Ink! and Rust, Sol2Ink will\ntranspile this code and output the Rust/Ink! code in a new file."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Create\tdocumentation and a website with guides on how to use Sol2Ink")),(0,o.kt)("p",null,"Users will better understand\nthe processes behind the code transpilation and will be more aware of\npossible issues which may emerge while using Sol2Ink."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Sol2Ink\tupgrade focused on the ability to parse complex smart contract\tapplications")),(0,o.kt)("p",null,"The user will be able to give Sol2Ink their whole Solidity project, Sol2Ink will transpile the code and output the Rust/Ink! code in files with a comprehensive file structure. At this stage, Sol2Ink should be able to handle generalization or multiple file dapps in a single step"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Integration\tof parsing dependencies and PSP usage option")),(0,o.kt)("p",null,"One problem may emerge with\ngeneralization, which exists in Solidity but does not exist in Rust.\nWe can solve this with traits, and this milestone will be focused on\na more efficient way of handling such cases."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Sol2Ink\tweb application interface")),(0,o.kt)("p",null,"More user-friendly way of using Sol2Ink, with a better user experience and without the need of downloading additional tools."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Maintenance\tand integration of new ecosystem standards and updates")),(0,o.kt)("p",null,"The ecosystem is growing each day, each day new standards and tools emerge. Our product aims to give the best results, and we need to keep up with the ecosystem to fulfill this goal."),(0,o.kt)("h3",{id:"ecosystem-fit"},"Ecosystem Fit"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Where\tand how does your project fit into the ecosystem?")),(0,o.kt)("p",null,"As there are many products already existing within the Solidity\necosystem, which aim to live in the Polkadot/Ink! ecosystem as well,\nwe think that a lot of processes linked with such transformation are\nrepetitive and time-consuming and can be done faster with such\ntranspiler as Sol2Ink aims to be. Therefore we think, that such a\ntranspiler may speed up the development process for teams\ntransforming Solidity code bases into Rust and Ink!, and also ease\nthe way into this ecosystem for new Ink! developers who want to\ntransform their existing Solidity solutions."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Who\tis your target audience (parachain/dapp/wallet/UI developers,\tdesigners, your own user base, some dapp's userbase, yourself)?")),(0,o.kt)("p",null,"Solidity developers looking to transform applications into Rust and Ink!."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"What need(s) does your project meet?")),(0,o.kt)("p",null,"Our project is a tool that will fasten the development process of\ntransforming existing Solidity projects into Rust and Ink!."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Are\tthere any other projects similar to yours in the Substrate /\tPolkadot / Kusama ecosystem?")),(0,o.kt)("p",null,"We know about ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/hyperledger-labs/solang"},"Solang"),", which is a similar project to Sol2Ink, but\nSolang is used for the transition between Solidity and WASM, while Sol2Ink will be a transpiler to readable and editable source code, we are\nnot aware of such projects in the Dotsama ecosystem.\nWe are also aware of ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/madfish-solutions/sol2ligo"},"Sol2Ligo"),", which is a transpiler from Solidity to Ligo, which should help with migration to Tezos."),(0,o.kt)("h2",{id:"team-"},"Team \ud83d\udc65"),(0,o.kt)("h3",{id:"team-members"},"Team members"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Markian Ivanichok")," (\u0421EO of Supercolony)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Toma Sadova")," (Product Owner | Supercolony)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Sven Seven")," (Head of Engineering | Supercolony)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Dominik Kr\xed\u017eo")," (Blockchain Developer | Supercolony)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Green Baneling")," (Blockchain Core Rust Engineer)  ")),(0,o.kt)("h3",{id:"contact"},"Contact"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Contact Name:")," Toma Sadova"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Contact Email:")," ",(0,o.kt)("a",{parentName:"li",href:"mailto:toma.sadova@supercolony.net"},"toma.sadova@supercolony.net")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Website:")," ",(0,o.kt)("a",{parentName:"li",href:"supercolony.net"},"supercolony.net"))),(0,o.kt)("h3",{id:"legal-structure"},"Legal Structure"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Registered Address:")," The registered office shall be in 16192 Coastal Highway, Lewes, Delaware 19958, County of\nSussex, USA. "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Registered Legal Entity:")," SUPERCOLONY CORP.")),(0,o.kt)("h3",{id:"teams-experience"},"Team's experience"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Markian Ivanichok"),(0,o.kt)("br",{parentName:"p"}),"\n","CEO of Supercolony, Blockchain entrepreneur, Software Engineer. Started my engineering career back when I was 15. Since then, I developed and got a lot of experience in engineering and leadership. Gained entrepreneur experience by founding a couple of startups. Inspired, co-founded and invested in Sector F, one of the top consulting companies in Ukraine that helps entrepreneurs to move faster. Since the beginning of this year, co-founded and led Supercolony, a Polkadot venture studio that is dedicated to building and creating of Polkadot\u2019s ecosystem."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Toma Sadova"),(0,o.kt)("br",{parentName:"p"}),"\n","Product Owner\nToma is a Product Owner of OpenBrush, Head of Education and the main organizer of the ",(0,o.kt)("a",{parentName:"p",href:"https://wasm-conference.com/"},"the biggest WASM conference"),". Toma started her career when she was 14. Since then, Toma has gained a lot of experience in IT technologies, management, leadership and crypto. She switched 4 career paths and figured out that blockchain/crypto is her calling! "),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Sven Seven"),(0,o.kt)("br",{parentName:"p"}),"\n","Blockchain Developer\nSoftware engineer with prod experience since 2015. Master degree Information Security. Has worked in finance, e-commerce, networking domains as full-stack dev. Programming languages are JS, Java, Python, Rust, C++ . Blockchain dev since 2021."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Dominik Kr\xed\u017eo"),(0,o.kt)("br",{parentName:"p"}),"\n","Blockchain Developer\nStarted programming own games at age of 15 as a hobby, then went to University studying informatics and object oriented programming, becoming an Android developer in 2018. In 2017 he started his crypto venture by investing in BTC and Ethereum and getting more knowledge regarding smart contracts and DeFi protocols during DeFi summer 2020. As a programmer, he wanted to know more behind the scenes of smart contracts, so he started to develop his own smart contract applications for Ethereum and then becoming a Rust and Ink! developer in Supercolony, since he believes that WASM with its benefits over EVM is the future of smart contract applications. As a part of his Android developer career, Dominik was working on porting of applications from C++ to Android/Java, for which he also worked on a tool to ease this process, describing the process of transformation of code base from one language to another in his bachelor's thesis."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Green Baneling"),(0,o.kt)("br",{parentName:"p"}),"\n","Blockchain Core Developer",(0,o.kt)("br",{parentName:"p"}),"\n","Primary programming languages are: C++, Go, Rust"),(0,o.kt)("p",null,"Finished the faculty of applied mathematics(Master degree). Participated in programming competitions during education. Has worked as a programmer for around 6 years."),(0,o.kt)("p",null,"Was a freelancer the first year, creating an application for IOS(Swift), creating modules for the desktop application on C++. After that, spent 2 years in a company which created software for TV devices(C++/ Haxe).  After which, for 3 years, worked on different blockchain projects(C++/Go/Rust/Solidity/Js)."),(0,o.kt)("h3",{id:"team-code-repos"},"Team Code Repos"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/Supercolony-net"},"https://github.com/Supercolony-net"))),(0,o.kt)("p",null,"Please also provide the GitHub accounts of all team members. If they contain no activity, references to projects hosted elsewhere or live are also fine."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/sventime"},"https://github.com/sventime")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/coreggon11"},"https://github.com/coreggon11")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/xgreenx"},"https://github.com/xgreenx"))),(0,o.kt)("h3",{id:"team-linkedin-profiles"},"Team LinkedIn Profiles"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/mivanichok/"},"https://www.linkedin.com/in/mivanichok/")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/toma-sadova/"},"https://www.linkedin.com/in/toma-sadova/")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/sven-seventimes/"},"https://www.linkedin.com/in/sven-seventimes/")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/dominik-krizo/"},"https://www.linkedin.com/in/dominik-krizo/"))),(0,o.kt)("h2",{id:"development-status-"},"Development Status \ud83d\udcd6"),(0,o.kt)("p",null,"The project development has not started yet, we have just tested a very simple prototype on our commercial projects, which is able to parse Solidity interfaces into Rust traits with Ink! usage."),(0,o.kt)("h2",{id:"development-roadmap-"},"Development Roadmap \ud83d\udd29"),(0,o.kt)("h3",{id:"overview-1"},"Overview"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Total Estimated Duration:")," 20 weeks"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Full-Time Equivalent (FTE):")," 1-2"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Total Costs:")," 36,000 USD")),(0,o.kt)("h3",{id:"milestone-1--implementsol2ink-cli-tool-for-simple-contract-parsing"},"Milestone 1 \u2014 Implement\tSol2Ink cli tool for simple contract parsing"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Estimated duration:")," 8 weeks"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"FTE:"),"  1.5"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Costs:")," 36,000 USD")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,o.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,o.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"right"},"0a."),(0,o.kt)("td",{parentName:"tr",align:null},"License"),(0,o.kt)("td",{parentName:"tr",align:null},"MIT")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"right"},"0b."),(0,o.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,o.kt)("td",{parentName:"tr",align:null},"We will provide a documentation for the user on how to use our tool for simplification of their process of transformation of Solidity code to Rust and Ink! code, along with inline documentation of code so the developers can better understand the processes in the backend")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"right"},"1."),(0,o.kt)("td",{parentName:"tr",align:null},"Sol2Ink CLI"),(0,o.kt)("td",{parentName:"tr",align:null},"A CLI application which will take a Solidity file as the input and produce a transformed Rust file with Rust and ink! code as the output")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"right"},"2."),(0,o.kt)("td",{parentName:"tr",align:null},"Integrate OpenBrush"),(0,o.kt)("td",{parentName:"tr",align:null},"Since OpenBrush is a tool to ease and fasten the smart contracts development in Ink!, we will add this library to the smart contracts generated by Sol2Ink")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"right"},"3."),(0,o.kt)("td",{parentName:"tr",align:null},"Website with guides"),(0,o.kt)("td",{parentName:"tr",align:null},"We will provide a website where we will compare a transformation of Solidity code into Rust and ink! code, along with issues which may occur (for example handling of Assembly blocks etc.).")))),(0,o.kt)("h2",{id:"future-plans"},"Future Plans"),(0,o.kt)("p",null,"After this grant, we plan to upgrade the parser to handle more complicated Solidity codebases (e.g. generalization, storage manipulation, delegate calls), parsing of whole projects (multiple files) with dependencies and making a web application of this tool. We also plan to maintain the project to keep up with new emerging ecosystem standards and listen to issues from community and update the tool to make the process of transformation a nicer experience for the developers and teams."),(0,o.kt)("h2",{id:"additional-information-"},"Additional Information \u2795"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"How did you hear about the Grants Program?")," personal recommendation"))}m.isMDXComponent=!0}}]);