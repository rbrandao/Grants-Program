"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[8185],{17453:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=a(87462),i=(a(67294),a(3905));a(30828);const l={},r="Subscript",o={unversionedId:"applications/subscript_lang",id:"applications/subscript_lang",title:"Subscript",description:"Subscript: Substrate smart contact written in AssemblyScript",source:"@site/docs/applications/subscript_lang.md",sourceDirName:"applications",slug:"/applications/subscript_lang",permalink:"/Grants-Program/applications/subscript_lang",draft:!1,tags:[],version:"current",frontMatter:{}},s={},p=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-",level:2},{value:"Overview",id:"overview",level:3},{value:"Project Details",id:"project-details",level:3},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team \ud83d\udc65",id:"team-",level:2},{value:"Team members",id:"team-members",level:3},{value:"Team Website",id:"team-website",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1  \u2014 Implement smart contract low level api",id:"milestone-1---implement-smart-contract-low-level-api",level:3},{value:"Future Plans",id:"future-plans",level:2},{value:"Additional Information",id:"additional-information",level:2}],m={toc:p};function c(t){let{components:e,...a}=t;return(0,i.kt)("wrapper",(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"subscript"},"Subscript"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Subscript:")," Substrate smart contact written in ",(0,i.kt)("inlineCode",{parentName:"p"},"AssemblyScript")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Proposer:")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/synote"},"synote")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Payment Address:"),"  bc1qzv5ljrt0sngjjnn25s4jzsu7qtts5d74cq8tz5")),(0,i.kt)("h2",{id:"project-overview-"},"Project Overview \ud83d\udcc4"),(0,i.kt)("p",null,"We are intergrating AssemblyScript into substrate smart contract which is similar to parity's ink. It involve buillding substrate contract runtime api, builtin modules, and development sdk. we name the language and sdk as ",(0,i.kt)("inlineCode",{parentName:"p"},"Subscript"),"."),(0,i.kt)("h3",{id:"overview"},"Overview"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Subscript")," is a smart contract language written in AssemblyScript for substrate based chain. We will provide essential substrate api and builtin tools to support contract development."),(0,i.kt)("p",null,"Similar to parity ink, ",(0,i.kt)("inlineCode",{parentName:"p"},"Subscript")," is built on top of  AssemblyScript and follow all AssemblyScript syntax. Subscript is more like a development kit with some builtin module and tools. As assemblyscript is easy to interact with TypeScript and JavaScript, ",(0,i.kt)("inlineCode",{parentName:"p"},"Subscript")," is much more friendly for dapp developers."),(0,i.kt)("h3",{id:"project-details"},"Project Details"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Subscript")," is designed as standard AssemblyScript with builtin contract api. First of all, ",(0,i.kt)("inlineCode",{parentName:"p"},"Subscript")," libray  will provide  basic ",(0,i.kt)("inlineCode",{parentName:"p"},"contract")," pallet runtime api access."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"contract runtime envionment"),(0,i.kt)("li",{parentName:"ul"},"contract ",(0,i.kt)("inlineCode",{parentName:"li"},"memory")," management"),(0,i.kt)("li",{parentName:"ul"},"state storage access, set and get value by key."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"event")," data generation and storage")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Subscript")," library also add support for contract interaction utilties, including:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"contract metadata generator"),(0,i.kt)("li",{parentName:"ul"},"basic data structure: dynimic array, map, list,"),(0,i.kt)("li",{parentName:"ul"},"user struct storage layout"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"account")," and  ",(0,i.kt)("inlineCode",{parentName:"li"},"balance")," interface"),(0,i.kt)("li",{parentName:"ul"},"contract call abstraction"),(0,i.kt)("li",{parentName:"ul"},"builtin utility fuctions")),(0,i.kt)("p",null,"The package will provide contract template and intergation tool with substrate node."),(0,i.kt)("p",null,"There is no plan for ",(0,i.kt)("inlineCode",{parentName:"p"},"EVM Pallet")," support."),(0,i.kt)("h3",{id:"ecosystem-fit"},"Ecosystem Fit"),(0,i.kt)("p",null,"Some of the function of ",(0,i.kt)("inlineCode",{parentName:"p"},"Subscript")," are similar to LimeChain's work of AssemblyScript Runtime, but they are  made for different scenario. LimeChain AssemblyScript Runtime focus on building substrate runtime with wasm compiled from AssemblyScript. It involves building all the substrate runtime environment entry with AssemblyScript and other basic library. ",(0,i.kt)("inlineCode",{parentName:"p"},"Subscript")," aims to implement all the substrate smart contract low level interface with AssemblyScript. ",(0,i.kt)("inlineCode",{parentName:"p"},"Subscript")," also add support for basic contract lib and project template for easy development.  We may benefit  previous work from LimeChain such as ",(0,i.kt)("inlineCode",{parentName:"p"},"SCALE"),"codec, runtime entry implemention."),(0,i.kt)("h2",{id:"team-"},"Team \ud83d\udc65"),(0,i.kt)("h3",{id:"team-members"},"Team members"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Symon Ho: Fullstack developer Leading consensus R&D and engineering in multichain system. Prior to that, developer of openstack project,  engaged in performance tools and  monitoring  system for cloud platform."),(0,i.kt)("li",{parentName:"ul"},"Ice Min: 10+ years experience in c/c++ development, real time database products and digital currency transaction platform products expert. Developer of BitCoin and Ethereum wallet.")),(0,i.kt)("h3",{id:"team-website"},"Team Website"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/slickup"},"https://github.com/slickup"))),(0,i.kt)("h3",{id:"teams-experience"},"Team's experience"),(0,i.kt)("p",null,"We implemented the fruitchain consensus integrated with ethereum, and used pbft to provide finalization in blockchain system.  Fruitchain mainnet launched in 2019 and privide 500+ TPS for transaction validation."),(0,i.kt)("p",null,"We alse engaged in smart contract tools interaged with vyper for contract audit and testing."),(0,i.kt)("h3",{id:"team-code-repos"},"Team Code Repos"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/slickup/subscript"},"https://github.com/slickup/subscript")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/ascontract/subscript"},"https://github.com/ascontract/subscript"))),(0,i.kt)("h2",{id:"development-roadmap-"},"Development Roadmap \ud83d\udd29"),(0,i.kt)("p",null,"We only provide ",(0,i.kt)("strong",{parentName:"p"},"milestone1"),"  here for contract runtime api implementation. Full milestones are list in the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/slickup/General-Grants-Program/blob/master/grants/speculative/subscript_lang.md"},"general grant repo")),(0,i.kt)("h3",{id:"overview-1"},"Overview"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Total Estimated Duration:")," 2 month"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Full-time equivalent (FTE):"),"  2"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Total Costs:")," 2 btc")),(0,i.kt)("h3",{id:"milestone-1---implement-smart-contract-low-level-api"},"Milestone 1  \u2014 Implement smart contract low level api"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Estimated Duration:")," 2 month"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"FTE:"),"  2"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Costs:")," 2 btc")),(0,i.kt)("p",null,"In this milestone, all the basic substrate contract runtime api will be implemented in AssemblyScript. This stage will deliver a AssemblyScript package which provide encapsulation of current substrate contract api. With the AS api, contracts can be compiled to wasm and deployed on substrate contract node. We may benefit from the reference implemention of parity Ink and provide similar api."),(0,i.kt)("p",null,"The AS package will cover the following substrate contract api:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Number"),(0,i.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,i.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"0a."),(0,i.kt)("td",{parentName:"tr",align:null},"License"),(0,i.kt)("td",{parentName:"tr",align:null},"Apache 2.0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"0b."),(0,i.kt)("td",{parentName:"tr",align:null},"Testing"),(0,i.kt)("td",{parentName:"tr",align:null},"This milestone will have unit-test for all the following runtime api impemented. We will mock most of the contract runtime api to simulate host functions. Integration test will be delivered in next milestone.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"0c."),(0,i.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,i.kt)("td",{parentName:"tr",align:null},"We will provide both inline documentation of all the sdk api and  basic code example that show how developers use the api.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"1."),(0,i.kt)("td",{parentName:"tr",align:null},"contract runtime environment"),(0,i.kt)("td",{parentName:"tr",align:null},"contract builder and execution to initailize the contract code")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"2."),(0,i.kt)("td",{parentName:"tr",align:null},"core types"),(0,i.kt)("td",{parentName:"tr",align:null},"add core component: AccountId, Balance, Hash, Block")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"2."),(0,i.kt)("td",{parentName:"tr",align:null},"storage access"),(0,i.kt)("td",{parentName:"tr",align:null},"contract low level storage read and write with key")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"3."),(0,i.kt)("td",{parentName:"tr",align:null},"object packing utilty"),(0,i.kt)("td",{parentName:"tr",align:null},"Provide user-defined data structure packing and unpacking method to storage access.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"4."),(0,i.kt)("td",{parentName:"tr",align:null},"memory manipulation"),(0,i.kt)("td",{parentName:"tr",align:null},"Implement memory make and getter, setter")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"5."),(0,i.kt)("td",{parentName:"tr",align:null},"contract event generation"),(0,i.kt)("td",{parentName:"tr",align:null},"Generate event from contract call")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"6."),(0,i.kt)("td",{parentName:"tr",align:null},"contract call method"),(0,i.kt)("td",{parentName:"tr",align:null},"Provide method for make contract call.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"7."),(0,i.kt)("td",{parentName:"tr",align:null},"hash utility"),(0,i.kt)("td",{parentName:"tr",align:null},"Make digest of encoded input to generate hash image")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"8."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"SCALE")," codec"),(0,i.kt)("td",{parentName:"tr",align:null},"Builtin codec functions to serialize and deserialize input. We may directly use LimeChain ",(0,i.kt)("inlineCode",{parentName:"td"},"as-scale-codec")," implementation.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"9."),(0,i.kt)("td",{parentName:"tr",align:null},"example for demonstration"),(0,i.kt)("td",{parentName:"tr",align:null},"Provide  ERC20 contract example to test on substrate node")))),(0,i.kt)("h2",{id:"future-plans"},"Future Plans"),(0,i.kt)("p",null,"After the ",(0,i.kt)("inlineCode",{parentName:"p"},"Subscript")," presentation , we may make our effort to bring more  tool for contract development."),(0,i.kt)("p",null,"A simulated contract sandbox similar to ganache is needed to debug and test contract."),(0,i.kt)("p",null,"We may add more intergated tool and IDE packge for contract developer."),(0,i.kt)("h2",{id:"additional-information"},"Additional Information"),(0,i.kt)("p",null,"We expect any developer who is interested in AssemblyScript smart contract join us and build efficient framework."))}c.isMDXComponent=!0}}]);