"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[8952],{30251:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));a(16758);const l={},i="Dot Marketplace",o={unversionedId:"Applications/dot_marketplace",id:"Applications/dot_marketplace",title:"Dot Marketplace",description:"- Status: Open",source:"@site/docs/Applications/dot_marketplace.md",sourceDirName:"Applications",slug:"/Applications/dot_marketplace",permalink:"/Grants-Program/Applications/dot_marketplace",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Dot Marketplace v2",permalink:"/Grants-Program/Applications/dot_marketplace-phase2"},next:{title:"DOTMog",permalink:"/Grants-Program/Applications/dotmog"}},s={},p=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-",level:2},{value:"<strong>Overview</strong>",id:"overview",level:3},{value:"<strong>Project Details</strong>",id:"project-details",level:3},{value:"<strong>Repository Hierarchy</strong>",id:"repository-hierarchy",level:3},{value:"<strong>Ecosystem Fit</strong>",id:"ecosystem-fit",level:3},{value:"<strong>Team</strong> \ud83d\udc65",id:"team-",level:2},{value:"<strong>Team members</strong>",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"<strong>Legal Structure</strong>",id:"legal-structure",level:3},{value:"<strong>Team&#39;s experience</strong>",id:"teams-experience",level:3},{value:"<strong>Team Code Repos</strong>",id:"team-code-repos",level:3},{value:"<strong>Team LinkedIn Profiles</strong>",id:"team-linkedin-profiles",level:3},{value:"Development Status \ud83d\udcd6",id:"development-status-",level:2},{value:"<strong>Development Roadmap</strong>\ud83d\udd29",id:"development-roadmap",level:2},{value:"Overview",id:"overview-1",level:3},{value:"<strong>Milestone 1</strong>",id:"milestone-1",level:3},{value:"<strong>Milestone 2</strong>",id:"milestone-2",level:3},{value:"<strong>Milestone 3</strong>",id:"milestone-3",level:3},{value:"<strong>Additional Project Details</strong>",id:"additional-project-details",level:3},{value:"<strong>Future Plans</strong>",id:"future-plans",level:3},{value:"Additional Information \u2795",id:"additional-information-",level:2}],d={toc:p};function m(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"dot-marketplace"},"Dot Marketplace"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Status:")," Open"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Project Name:")," Dot Marketplace"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Team Name:")," Wow Labz  "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Payment Address:")," 0xF13001401396AA866E8012f31fD939C7E83B8601  "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Level:")," 2  ")),(0,r.kt)("h2",{id:"project-overview-"},"Project Overview \ud83d\udcc4"),(0,r.kt)("h3",{id:"overview"},(0,r.kt)("strong",{parentName:"h3"},"Overview")),(0,r.kt)("p",null,"Dot Marketplace is a general purpose decentralised marketplace created as a Substrate pallet."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Dot Marketplace can be used by any decentralised project to float tasks and invite their community members to execute them for a reward. Its POC was developed during the Polkadot India buildathon (2021).  "),(0,r.kt)("li",{parentName:"ul"},"It would be directly integrated in Polkadot JS Apps where such marketplaces could be used to create bounties and tasks that could be fulfilled by community members."),(0,r.kt)("li",{parentName:"ul"},"The inspiration for Dot Marketplace emerged from our own needs while building Yoda - a protocol that facilitates decentralised app development leveraging open data. Dot Marketplace would be used to create data, services and app marketplaces on Yoda, which would motivate us to maintain this project in the long run.")),(0,r.kt)("h3",{id:"project-details"},(0,r.kt)("strong",{parentName:"h3"},"Project Details")),(0,r.kt)("p",null,"The current scope of work involves two user types: ",(0,r.kt)("strong",{parentName:"p"},"Customer")," and ",(0,r.kt)("strong",{parentName:"p"},"Service Provider (or Worker)")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The Customer can post a task and invite bids from Service Providers to fulfill it."),(0,r.kt)("li",{parentName:"ul"},"The Customer needs to deposit the budgeted amount in an escrow for the task to be published."),(0,r.kt)("li",{parentName:"ul"},"The Service Provider needs to deposit some token to participate in a bid. If not shortlisted, this bid amount is returned."),(0,r.kt)("li",{parentName:"ul"},"The Service Provider completes the task and submits it."),(0,r.kt)("li",{parentName:"ul"},"The Customer accepts the work and the escrowed amount is credited to the Service Providers wallet."),(0,r.kt)("li",{parentName:"ul"},"The Customer rates the Service Provider and visa versa.")),(0,r.kt)("p",null,"NOTE: If the Customer doesn't accept the work, a dispute is raised and it gets resolved in a decentralised court (out of current scope) which will be implemented in the next phase."),(0,r.kt)("p",null,"The following diagrams highlight the workflow:"),(0,r.kt)("p",null,"Customer\n:-------------------------:"),(0,r.kt)("img",{src:"https://user-images.githubusercontent.com/11945179/125753620-e1b094dc-552e-4a4f-9826-23cbefe3a677.png",width:"600"}),(0,r.kt)("p",null,"Service Provider (Worker)\n:-------------------------:"),(0,r.kt)("img",{src:"https://user-images.githubusercontent.com/11945179/125753635-1cc3170e-7a19-410e-a350-93f75a10e93f.png",width:"600"}),(0,r.kt)("p",null,"Dot Marketplace is being built as a Substrate pallet. It would include boilerplate code that parachain teams can customize as per their own requirements. We believe this project has the potential to transform community participation, engagement and governance in decentralized projects."),(0,r.kt)("p",null,"Dot Marketplace will also include frontend UI built on top of the ",(0,r.kt)("inlineCode",{parentName:"p"},"substrate-front-end-template"),", here is a snapshot of the same"),(0,r.kt)("h3",{id:"repository-hierarchy"},(0,r.kt)("strong",{parentName:"h3"},"Repository Hierarchy")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'\u251c\u2500\u2500 Dot Marketplace Network Node [link](https://github.com/WowLabz/tasking_backend)\n\u2502   \u251c\u2500\u2500 ./node ["Chainspecs for Node"]\n\u2502   \u251c\u2500\u2500 ./scripts [Packaging & Deployment Scripts]\n\u2502   \u251c\u2500\u2500 ./pallets/pallet-tasking [Pallets]\n\u2502   \u2502     \u2514\u2500\u2500 ./pallet-tasking \n\u2502   \u2502             \u2514\u2500\u2500 ./src/lib.rs [Tasking Pallet (being implemented)]\n\u2502   \u2514\u2500\u2500 ./runtime [Runtime Module]\n\u2502         \u2514\u2500\u2500 Included custom Tasking Pallet\n\n')),(0,r.kt)("p",null,"The current focus is to enhance the existing Substrate pallet and allied code base to get a basic yet functional marketplace up and running:"),(0,r.kt)("h3",{id:"ecosystem-fit"},(0,r.kt)("strong",{parentName:"h3"},"Ecosystem Fit")),(0,r.kt)("p",null,"We believe this work could be useful for: ",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.network/"},"Polkadot"),", ",(0,r.kt)("a",{parentName:"p",href:"https://kusama.network/"},"Kusama"),", ",(0,r.kt)("a",{parentName:"p",href:"https://moonbeam.network/"},"Moonbeam")," and any Polkadot parachains/ parathreads interested in including a marketplace."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Almost all Parachains/ parathreads would find motivation in encouraging their community members to contribute meaningfully to their roadmap. This can be achieved by utilising a marketplace like Dot Marketplace where technical, marketing or governance centric tasks can be published. And community members are invited to bid for and exectute them.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"List of Competitors")),(0,r.kt)("p",null,"Any product or services marketplace would qualify, here are some examples from outside the Polkadot/Kusama ecosystem."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://www.humanprotocol.org/"},"Human Protocol")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://effect.ai/"},"Effect Network")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://market.oceanprotocol.com/"},"Ocean Protocol Market"))),(0,r.kt)("h2",{id:"team-"},(0,r.kt)("strong",{parentName:"h2"},"Team")," \ud83d\udc65"),(0,r.kt)("h3",{id:"team-members"},(0,r.kt)("strong",{parentName:"h3"},"Team members")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Amit Singh (product manager)"),(0,r.kt)("li",{parentName:"ul"},"Roshit Omanakuttan (technical architect)"),(0,r.kt)("li",{parentName:"ul"},"Varun Gyanchandani (backend lead)"),(0,r.kt)("li",{parentName:"ul"},"Loakesh Indiran (full stack dev)"),(0,r.kt)("li",{parentName:"ul"},"Siddharth Teli (backend dev)"),(0,r.kt)("li",{parentName:"ul"},"Bharath Kumar (tester)"),(0,r.kt)("li",{parentName:"ul"},"Smita Ashok (tech content writer)")),(0,r.kt)("h3",{id:"contact"},"Contact"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Contact Name:")," Amit Singh"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Contact Email:")," amit (dot) singh (@) wowlabz.com"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Website:")," ",(0,r.kt)("a",{parentName:"li",href:"https://www.wowlabz.com/"},"http://www.wowlabz.com")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Project Website")," Dot marketplace website is under construction")),(0,r.kt)("h3",{id:"legal-structure"},(0,r.kt)("strong",{parentName:"h3"},"Legal Structure")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Registered Address:")," Wow Labz, 2Gethr Cowork, Tower B, Mantri Commercio, Outer Ring Rd, Bellandur, Bengaluru, Karnataka, India 560103"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Registered Legal Entity:")," Wow Internet Labz Private Limited")),(0,r.kt)("h3",{id:"teams-experience"},(0,r.kt)("strong",{parentName:"h3"},"Team's experience")),(0,r.kt)("p",null,"Dot Marketplace is being built by the team at Wow Labz.\nWow Labz is one of India","'","s leading turnkey product development companies.\nYoda Protocol has been conceptualised and is being built by the team at Wow Labz. The team has previously built a decentralised storage protocol called Lake Network - ",(0,r.kt)("a",{parentName:"p",href:"https://lakenetwork.io/"},"https://lakenetwork.io/")," in addition to multiple dApps on Ethereum, Stellar, EOS and Hyperledger."),(0,r.kt)("p",null,"A list of centralised apps published can be found ",(0,r.kt)("a",{parentName:"p",href:"https://www.wowlabz.com/work/"},"here"),"."),(0,r.kt)("h3",{id:"team-code-repos"},(0,r.kt)("strong",{parentName:"h3"},"Team Code Repos")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/orgs/WowLabz/projects"},"https://github.com/orgs/WowLabz/projects")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/WowLabz/tasking_backend"},"https://github.com/WowLabz/tasking","_","backend")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/WowLabz/tasking_frontend"},"https://github.com/WowLabz/tasking","_","frontend"))),(0,r.kt)("h3",{id:"team-linkedin-profiles"},(0,r.kt)("strong",{parentName:"h3"},"Team LinkedIn Profiles")),(0,r.kt)("p",null,"Profiles of the people working actively on Dot Marketplace"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/startupamit/"},"Amit Singh")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/roshit/"},"Roshit Omanakuttan")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/varunsays/"},"Varun Gyanchandani")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/siddharthteli/"},"Siddharth Teli")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/loakesh-indiran-8a2282140"},"Loakesh Indiran")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/bharath-kumar-h-13a572126/"},"Bharath Kumar")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/smita-ashok-823631175/"},"Smita Ashok"))),(0,r.kt)("h2",{id:"development-status-"},"Development Status \ud83d\udcd6"),(0,r.kt)("p",null,"Dot Marketplace POC was conceptualised and developed during the Polkadot India hackathon. The roadmap listed below comprises of new features that would help take the POC to a minimum viable product (MVP)."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Here's a link to our ",(0,r.kt)("a",{parentName:"li",href:"https://youtu.be/xQNOkXQdDnQ"},"Polkadot India Submission Video")),(0,r.kt)("li",{parentName:"ul"},"We are in touch with Marcin and Raul from the Web 3 Grants and Treasuries team respectively")),(0,r.kt)("h2",{id:"development-roadmap"},(0,r.kt)("strong",{parentName:"h2"},"Development Roadmap"),"\ud83d\udd29"),(0,r.kt)("p",null,"The development of Dot Marketplace is already underway.\nFor the custom pallet (tasking) we are:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Using various Substrate provided traits like - ",(0,r.kt)("inlineCode",{parentName:"li"},"Currency"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"ExistenceRequirement"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"LockIdentifier"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"LockableCurrency"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"ReservableCurrency")," and few more;"),(0,r.kt)("li",{parentName:"ol"},"Using the pre-existing pallets like ",(0,r.kt)("inlineCode",{parentName:"li"},"assets"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"balances")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"staking"),";"),(0,r.kt)("li",{parentName:"ol"},"Implementing custom structs like ",(0,r.kt)("inlineCode",{parentName:"li"},"TaskDetails")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"TransferDetails"),". These in turn are used for various functionalities like ",(0,r.kt)("inlineCode",{parentName:"li"},"create_task"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"bid_task"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"complete_task")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"approve_task"),". A special transfer money function is only initiated once the task cycle gets completed and the escrow funds are released to the worker.")),(0,r.kt)("p",null,"All the below mentioned milestones are going to be implemented and this application is going to be fully public."),(0,r.kt)("p",null,"NOTE: A barebones UI would also be provided as a part of this submission to help the developer experience the functionality"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/4363536/129244239-c843d1c7-477f-48b0-8d65-068bd6df9661.gif",alt:"DotMarketplaceU"})),(0,r.kt)("h3",{id:"overview-1"},"Overview"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Total Estimated Duration:")," 2 months"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Full-Time Equivalent (FTE):"),"  5.9125"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Total Costs:")," 18,920 USD (half of the development fee is financed by Yoda)")),(0,r.kt)("h3",{id:"milestone-1"},(0,r.kt)("strong",{parentName:"h3"},"Milestone 1")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Estimated duration:")," 2 weeks"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"FTE:"),"  1"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"PTE:"),"  4"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Costs:")," 3,220 USD    // rest is funded by Yoda  ")),(0,r.kt)("p",null,"The main deliverable for this milestone will be to allow a user to register via a registration form and link her wallet account along with role based switching from Service Provider view to Customer view and visa versa."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Number"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Deliverable"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Specification"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0a"),(0,r.kt)("td",{parentName:"tr",align:"center"},"License"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Apache 2.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0b"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/WowLabz/tasking_backend"},"Documentation")),(0,r.kt)("td",{parentName:"tr",align:"left"},"We will provide both inline documentation of the code and a tutorial that explains how a user can use DOT Marketplace and understand the flow of tasking pallet.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0c"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Testing Guide"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Functions will be covered by unit tests, the documentation will describe how to run these tests. We will also provide scripts to help deploy, run and test the build.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0d"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Docker Image"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Docker image of the build")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"1"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Registration Module"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Form based user registration")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"2"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Wallet Linking"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Support for user to link their Math wallet, Guarda wallet or Polkadot Js apps with the account.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"3"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Profile Module"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Support for role based screens to ease the usability for users")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"4"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Frontend App"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Supporting frontend UI to test the aforementioned functionality")))),(0,r.kt)("h3",{id:"milestone-2"},(0,r.kt)("strong",{parentName:"h3"},"Milestone 2")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Estimated duration:")," 3 weeks"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"FTE:"),"  2"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"PTE:"),"  4"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Costs:")," 7,440 USD    // rest is funded by Yoda  ")),(0,r.kt)("p",null,"In continuation to the previous work, we will be working on a rating system for both Customer and Service Provider. This rating will eventually be the motivating factor for performance in the network. It would also help in designing incentives in future."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Number"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Deliverable"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Specification"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0a"),(0,r.kt)("td",{parentName:"tr",align:"center"},"License"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Apache 2.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0b"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/WowLabz/tasking_backend"},"Documentation")),(0,r.kt)("td",{parentName:"tr",align:"left"},"We will provide both inline documentation of the code and a tutorial that explains how a user can use DOT Marketplace and understand the flow of tasking pallet.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0c"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Testing Guide"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Functions will be covered by unit tests, the documentation will describe how to run these tests. We will also provide scripts to help deploy, run and test the build.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0d"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Docker Image"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Docker image of the build")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"1"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Rating Module"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Support for profile based rating using substrate balances, treasury and staking pallets to be integrated with our custom tasking pallet to weigh the user's performance and rewards based rating system.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"2"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Programmatic Wallet Transfer"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Substrate based Smart Contract transfer function for programmatic/automated transfer of tokens from one application/user to the other.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"3"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Asset Restrictions"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Support for the locking of assets by time")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"4"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Frontend App"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Supporting frontend UI to test the aforementioned functionality")))),(0,r.kt)("h3",{id:"milestone-3"},(0,r.kt)("strong",{parentName:"h3"},"Milestone 3")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Estimated duration:")," 3 weeks"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"FTE:"),"  2"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"PTE:"),"  5"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Costs:")," 8,260 USD    // rest is funded by Yoda")),(0,r.kt)("p",null,"The deliverable for this milestone is that we will be providing a multi user scenario to test the functionality and integrate with storage and backend APIs for multipart data to be uploaded and downloaded."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Number"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Deliverable"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Specification"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0a"),(0,r.kt)("td",{parentName:"tr",align:"center"},"License"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Apache 2.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0b"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/WowLabz/tasking_backend"},"Documentation")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Documentation of the entire pallet, a guide for developers forking the project including FAQ")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0c"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Testing Guide"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Functions will be covered by unit tests, the documentation will describe how to run these tests. We will also provide scripts to help deploy, run and test the build.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0d"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Docker Image"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Docker image of the build")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"1"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Multiuser Module"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Support for multiple Substrate seed users to test the functionality and make the task based transactions as per the Status mentioned. Substrate based Lockable currency for reserving user funds and allowing the escrow unlock after the approved status.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"2"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Tagging Module"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Support for smart tags with the user profiles for programmatic track/domain alignment in the future")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"3"),(0,r.kt)("td",{parentName:"tr",align:"center"},"File Transfer Module"),(0,r.kt)("td",{parentName:"tr",align:"left"},"API connections to cloud storage async upload/download of small files via Rocket")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"4"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Frontend App"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Supporting frontend UI to test the aforementioned functionality")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"5"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Website"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Dedicated one page website for Dot Marketplace")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"6"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Article"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Website article sharing the motivation behind Dot Marketplace and how to make best use of it")))),(0,r.kt)("h3",{id:"additional-project-details"},(0,r.kt)("strong",{parentName:"h3"},"Additional Project Details")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Technology stack being used",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Rust, Substrate, React, Python, centralised cloud storage")))),(0,r.kt)("h3",{id:"future-plans"},(0,r.kt)("strong",{parentName:"h3"},"Future Plans")),(0,r.kt)("p",null,"Future releases of the Dot Marketplace include:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Phase"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Deliverable"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Specification"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"2"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Decentralised Court"),(0,r.kt)("td",{parentName:"tr",align:"left"},"A fully decentralised dispute resolution mechanism along with configurable rules for slashing and reputation.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"3"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Milestone based submissions"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Making provisions to breakdown a project into multiple configurable milestones to allow parallel or sequential execution")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"4"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Decentralised Storage"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Integration with IPFS or another decentralised storage platform")))),(0,r.kt)("h3",{id:""}),(0,r.kt)("h2",{id:"additional-information-"},"Additional Information \u2795"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"How did you hear about the Grants Program?")," Web3 Foundation Website, Polkadot India Buildathon"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"We have been working on this roadmap since we applied for the Web3 grant")))}m.isMDXComponent=!0}}]);