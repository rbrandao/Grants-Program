"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[3332],{91407:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var n=a(87462),r=(a(67294),a(3905));a(30828);const i={},o="Staking Rewards Viewer",l={unversionedId:"applications/staking-rewards-collector-front-end",id:"applications/staking-rewards-collector-front-end",title:"Staking Rewards Viewer",description:"This document will be part of the terms and conditions of your agreement and therefore needs to contain all the required information about the project. Don't remove any of the mandatory parts presented in bold letters or as headlines! Lines starting with a > (such as this one) can be removed.",source:"@site/docs/applications/staking-rewards-collector-front-end.md",sourceDirName:"applications",slug:"/applications/staking-rewards-collector-front-end",permalink:"/Grants-Program/applications/staking-rewards-collector-front-end",draft:!1,tags:[],version:"current",frontMatter:{}},s={},d=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-",level:2},{value:"Overview",id:"overview",level:3},{value:"Project Details",id:"project-details",level:3},{value:"MockUp",id:"mockup",level:4},{value:"Technologies",id:"technologies",level:4},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team \ud83d\udc65",id:"team-",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Team LinkedIn Profiles",id:"team-linkedin-profiles",level:3},{value:"Development Status \ud83d\udcd6",id:"development-status-",level:2},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-",level:2},{value:"Milestone 1 (Implementation &amp; Testing)",id:"milestone-1-implementation--testing",level:3},{value:"Future Plans",id:"future-plans",level:2},{value:"Additional Information \u2795",id:"additional-information-",level:2}],p={toc:d};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"staking-rewards-viewer"},"Staking Rewards Viewer"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This document will be part of the terms and conditions of your agreement and therefore needs to contain all the required information about the project. Don't remove any of the mandatory parts presented in bold letters or as headlines! Lines starting with a ",(0,r.kt)("inlineCode",{parentName:"p"},">")," (such as this one) can be removed."),(0,r.kt)("p",{parentName:"blockquote"},"See the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/w3f/Open-Grants-Program/#pencil-process"},"Open Grants Program Process")," on how to submit a proposal.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Team Name:")," Jackson Harris III"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Payment Address:")," Ethereum (DAI) payment address 0x2E07c8624da45FF0Bd4ba18dE7b9156995C44034.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f ",(0,r.kt)("em",{parentName:"p"},"The combination of your GitHub account submitting the application and the payment address above will be your unique identifier during the program. Please keep them safe."))),(0,r.kt)("h2",{id:"project-overview-"},"Project Overview \ud83d\udcc4"),(0,r.kt)("p",null,"This application is in response to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/w3f/General-Grants-Program/blob/master/rfps/staking-rewards-collector-front-end.md"},"Front-End for Staking Rewards Collector")),(0,r.kt)("h3",{id:"overview"},"Overview"),(0,r.kt)("p",null,"This is a Staking Rewards Viewer for Polkadot and Kusama allowing users to view their staking rewards and easily download their search results.\nThis implementation will take the work started in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/w3f/staking-rewards-collector"},"staking-rewards-collector")," and integrate it with an easy to use modern front end using Next.js and deployed on Vercel with the goal of deploying to IPFS."),(0,r.kt)("p",null,"I am interested in utilizing my current Software engineering skills to contribute to the Polkadot ecosystem. I have been following the project for a few years and have been looking for a way to participate."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/jackson-harris-iii/staking-rewards-viewer"},"Propsoal Repo")," with a screenshot of mockup created in Adobe Xd. Here is a quick demo video of a work in progress ",(0,r.kt)("a",{parentName:"p",href:"https://www.loom.com/share/435c92cb3abe4984b18716642d01f631"},"Video")," and a ",(0,r.kt)("a",{parentName:"p",href:"https://staking-rewards-viewer.vercel.app/"},"Deployed")," demo on vercel. (currently, the vercel version is not making requests. Looking at swapping out the curlRequest for fetch API calls."),(0,r.kt)("h3",{id:"project-details"},"Project Details"),(0,r.kt)("h4",{id:"mockup"},"MockUp"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://github.com/jackson-harris-iii/staking-rewards-viewer/blob/main/mockup.png",alt:null})),(0,r.kt)("h4",{id:"technologies"},"Technologies"),(0,r.kt)("p",null,"We expect the teams to already have a solid idea about your project's expected final state. Therefore, we ask the teams to submit (where relevant):"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Mockups/designs Adobe Xd"),(0,r.kt)("li",{parentName:"ul"},"Front End: Next.js, Material Design Bootstrap React"),(0,r.kt)("li",{parentName:"ul"},"Back End: N/A (The applicatoin will use a serverless design on Vercel/Fleek)")),(0,r.kt)("h3",{id:"ecosystem-fit"},"Ecosystem Fit"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/w3f/staking-rewards-collector"},"staking-rewards-collector")," is a tool to gather staking rewards for given addresses and cross-reference those with daily price data. This is a very useful tool for every validator and nominator in the ecosystem. However, since it has currently a CLI and requires some technical knowledge to set up (git, nodejs, yarn). A front-end hosted on a website could help many users getting access to this tool and enjoy the benefits."),(0,r.kt)("h2",{id:"team-"},"Team \ud83d\udc65"),(0,r.kt)("h3",{id:"team-members"},"Team members"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Jackson Harris ",(0,r.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/jacksonharris3/"},"Linkedin")," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/jackson-harris-iii"},"GitHub"))),(0,r.kt)("h3",{id:"contact"},"Contact"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Contact Name:")," Jackson Harris III"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Contact Email:")," ",(0,r.kt)("a",{parentName:"li",href:"mailto:jackson.harris3@gmail.com"},"jackson.harris3@gmail.com")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Website:")," ",(0,r.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/jacksonharris3/"},"https://www.linkedin.com/in/jacksonharris3/"))),(0,r.kt)("h3",{id:"legal-structure"},"Legal Structure"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Registered Address:")," Can Provide Home Address offline"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Registered Legal Entity:")," Freelance/Contractor for tax purposes I am an Independent Contractor")),(0,r.kt)("h3",{id:"teams-experience"},"Team's experience"),(0,r.kt)("p",null,"Jackson Harris: Software Engineer 3 years, Digital Marketing/Business Development 10 years."),(0,r.kt)("h3",{id:"team-code-repos"},"Team Code Repos"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/jackson-harris-iii/staking-rewards-viewer"},"https://github.com/jackson-harris-iii/staking-rewards-viewer"))),(0,r.kt)("h3",{id:"team-linkedin-profiles"},"Team LinkedIn Profiles"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/jacksonharris3/"},"https://www.linkedin.com/in/jacksonharris3/"))),(0,r.kt)("h2",{id:"development-status-"},"Development Status \ud83d\udcd6"),(0,r.kt)("p",null,"If you've already started implementing your project or it is part of a larger repository, please provide a link and a description of the code here. In any case, please provide some documentation on the research and other work you have conducted before applying. This could be:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Original ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/w3f/General-Grants-Program/blob/master/rfps/staking-rewards-collector-front-end.md"},"RFP")," (requests for proposal),"),(0,r.kt)("li",{parentName:"ul"},"Conversation reference to my original ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/w3f/General-Grants-Program/pull/439"},"submission")," with @axl of w3f")),(0,r.kt)("h2",{id:"development-roadmap-"},"Development Roadmap \ud83d\udd29"),(0,r.kt)("h3",{id:"milestone-1-implementation--testing"},"Milestone 1 (Implementation & Testing)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Estimated Duration:")," 12 days"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"FTE:"),"  12"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Costs:")," 4000 USD")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,r.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,r.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"0a."),(0,r.kt)("td",{parentName:"tr",align:null},"License"),(0,r.kt)("td",{parentName:"tr",align:null},"Apache 2.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"0b."),(0,r.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,r.kt)("td",{parentName:"tr",align:null},"We will provide both ",(0,r.kt)("strong",{parentName:"td"},"inline documentation")," of the code and a basic ",(0,r.kt)("strong",{parentName:"td"},"tutorial")," that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"0c."),(0,r.kt)("td",{parentName:"tr",align:null},"Testing Guide"),(0,r.kt)("td",{parentName:"tr",align:null},"Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"0d."),(0,r.kt)("td",{parentName:"tr",align:null},"Docker"),(0,r.kt)("td",{parentName:"tr",align:null},"We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"1."),(0,r.kt)("td",{parentName:"tr",align:null},"UI for user input"),(0,r.kt)("td",{parentName:"tr",align:null},"Develop an UI to request necessary data from the users.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"2a."),(0,r.kt)("td",{parentName:"tr",align:null},"Address LookUp Functionality"),(0,r.kt)("td",{parentName:"tr",align:null},"Allow users to enter multiple wallet addresses for either or both the Polkdaot and/or Kusama networks and deploy these features to Vercel.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"2b."),(0,r.kt)("td",{parentName:"tr",align:null},"CSV/JSON Download"),(0,r.kt)("td",{parentName:"tr",align:null},"Enable users to download a copy of their lookup results in either CSV or JSON format.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"3."),(0,r.kt)("td",{parentName:"tr",align:null},"Form validation"),(0,r.kt)("td",{parentName:"tr",align:null},"Add form validation to wallet address input while still allowing for multiple addresses to be entered. Validation for fiat amounts that will properly display based on the selected currency.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"4."),(0,r.kt)("td",{parentName:"tr",align:null},"UI for data visualizer"),(0,r.kt)("td",{parentName:"tr",align:null},"Develop an environment to display the output (.csv and .json) for the end user in a pleasurable way.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"5."),(0,r.kt)("td",{parentName:"tr",align:null},"Tooltips/Helpers"),(0,r.kt)("td",{parentName:"tr",align:null},"Implement help texts and tooltips to explain the different features and inputs to users.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"6."),(0,r.kt)("td",{parentName:"tr",align:null},"Testing"),(0,r.kt)("td",{parentName:"tr",align:null},"Write tests to confirm the application behaves as expected")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"7."),(0,r.kt)("td",{parentName:"tr",align:null},"Polishing & Delivery"),(0,r.kt)("td",{parentName:"tr",align:null},"Reach out for feedback to the Grants Team. Integrate final feedback on functional, as well as cosmetic changes like font size, colors, typos etc.")))),(0,r.kt)("h2",{id:"future-plans"},"Future Plans"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Collaborate with the original RFP proposer to determine how to best promote the finished application throughout the community."),(0,r.kt)("li",{parentName:"ul"},"Ask the community for suggestions to improve and add new features as necesary."),(0,r.kt)("li",{parentName:"ul"},"Refactor and Deploy to IPFS")),(0,r.kt)("h2",{id:"additional-information-"},"Additional Information \u2795"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"How did you hear about the Grants Program?")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"I watched a video, on youtube, with Gavin Wood where he mentioned the Web3 Foundation and the grants program.")))}m.isMDXComponent=!0}}]);