"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[205],{99695:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var n=a(87462),i=(a(67294),a(3905));a(30828);const r={},l="ZK-Snarks tutorial",o={unversionedId:"applications/ZK-Snarks tutorial",id:"applications/ZK-Snarks tutorial",title:"ZK-Snarks tutorial",description:"Team Name:* Bright Inventions",source:"@site/docs/applications/ZK-Snarks tutorial.md",sourceDirName:"applications",slug:"/applications/ZK-Snarks tutorial",permalink:"/Grants-Program/applications/ZK-Snarks tutorial",draft:!1,tags:[],version:"current",frontMatter:{}},s={},p=[{value:"Project Description \ud83d\udcc4",id:"project-description-",level:2},{value:"Overview",id:"overview",level:3},{value:"Project Details",id:"project-details",level:3},{value:"Technology stack",id:"technology-stack",level:3},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team \ud83d\udc65",id:"team-",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Team LinkedIn Profiles",id:"team-linkedin-profiles",level:3},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 2",id:"milestone-2",level:3}],m={toc:p};function u(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"zk-snarks-tutorial"},"ZK-Snarks tutorial"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Team Name:")," Bright Inventions"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Payment Address:")," 0xDDcfd2a1D4Bcf058cf2828eb78dB59b300e80F8d")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"https://github.com/w3f/Grants-Program/tree/master#level_slider-levels"},"Level"),":")," 2")),(0,i.kt)("h2",{id:"project-description-"},"Project Description \ud83d\udcc4"),(0,i.kt)("h3",{id:"overview"},"Overview"),(0,i.kt)("p",null,"Main goal of this PoC is to introduce the substrate community into the zk-snarks concept. At this point we would like to create a few blog posts with the tutorial codebase, which will help in better understanding the zk-snarks for the substrate community."),(0,i.kt)("h3",{id:"project-details"},"Project Details"),(0,i.kt)("p",null,"Short description of the problem: Bob has sha256 hashed value and he would like to make sure Alice knows hashed value without Alice revealing it. To do so, Alice can use zksnarks to prove him she knows given value without making it public."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"function C(X, w) -> bool {\n  return ( sha256(w) == X );\n}\n")),(0,i.kt)("h3",{id:"technology-stack"},"Technology stack"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Rust - groth16 proof verification"),(0,i.kt)("li",{parentName:"ul"},"Substrate - environment for pallet creation"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.circom.io/"},"Circom compiler")," - model problem to be solved by prover"),(0,i.kt)("li",{parentName:"ul"},"SnarkJS - zksnark setup and proof generation"),(0,i.kt)("li",{parentName:"ul"},"PolkadotJS - presentation purposes")),(0,i.kt)("h3",{id:"ecosystem-fit"},"Ecosystem Fit"),(0,i.kt)("p",null,"By preparing a tutorial with basic implementation of the ZK-Snarks ion Substrate ecosystem, we hope to popularise this concept and make it more accessible to the Substrate developers. There are similar initiatives available in other blockchain technologies, however currently there is no easily accessible up to date demonstrational implementation of ZK-Snarks. "),(0,i.kt)("p",null,"Few years ago a project aiming at such implementation (",(0,i.kt)("a",{parentName:"p",href:"https://github.com/zeropoolnetwork/zeropool-substrate-groth16-example"},"Zeropool Substrate"),") was shared on github, however it is not up to date at the moment. We haven't found a working, updated solution available to the public."),(0,i.kt)("p",null,"As our implementation will be accompanied by series of blog posts and a youtube tutorial video, we aim to reach wider audience and provide an accessible introduction to ZK-Snarks in Substrate for developers. "),(0,i.kt)("h2",{id:"team-"},"Team \ud83d\udc65"),(0,i.kt)("h3",{id:"team-members"},"Team members"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Micha\u0142 Grali\u0144ski - Rust Developer"),(0,i.kt)("li",{parentName:"ul"},"Kasper Ziemianek - Rust Developer"),(0,i.kt)("li",{parentName:"ul"},"Katarzyna \u0141ukasiewicz - Project Manager")),(0,i.kt)("h3",{id:"contact"},"Contact"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Katarzyna \u0141ukasiewicz:")," "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Contact Email:")," ",(0,i.kt)("a",{parentName:"li",href:"mailto:katarzyna.lukasiewicz@brightinventions.pl"},"katarzyna.lukasiewicz@brightinventions.pl")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Website")," ",(0,i.kt)("a",{parentName:"li",href:"https://brightinventions.pl/"},"https://brightinventions.pl/"))),(0,i.kt)("h3",{id:"legal-structure"},"Legal Structure"),(0,i.kt)("p",null,"Bright Inventions is a limited liability company based in Gdansk, Poland. Company was founded in 2012 by Daniel Makurat and Micha\u0142 \u0141ukasiewicz."),(0,i.kt)("p",null,"Full address details:"),(0,i.kt)("p",null,"Bright Inventions Sp. z o. o."),(0,i.kt)("p",null,"ul. Jana Matejki 12"),(0,i.kt)("p",null,"80-232 Gda\u0144sk, Poland"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"mailto:info@brightinventions.pl"},"info@brightinventions.pl")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"http://www.brightinventions.pl"},"www.brightinventions.pl")),(0,i.kt)("p",null,"Company registration number: 0000687244"),(0,i.kt)("p",null,"VAT EU: PL5842761920"),(0,i.kt)("p",null,"REGON: 367805647 "),(0,i.kt)("p",null,"Bright Inventions is a team of oveer 70 full-time onsite developers, project managers & UX/UI designers - experts in mobile and web applications, systems integration, IOT devices and Blockchain platforms. "),(0,i.kt)("p",null,"We believe that building a software product is about people working together in a collective way. By offering complex support \u2013 mobile and web development as well as IT consultancy we try to eliminate roadblocks towards engaging clients as partners at every step of the process. "),(0,i.kt)("p",null,"We support startups, digital agencies as well as medium to big businesses. We cooperate with startups, accelerators and incubators. Whatever the client profile is, we always  aim to establish a satisfying partnership for both sides. Since 2012 we have built software for more than 40 businesses worldwide."),(0,i.kt)("h3",{id:"teams-experience"},"Team's experience"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Micha\u0142 - Rust Developer, for over 12 years he has been working as a C++ developer. In his career he participate in various projects, starting from the embedded devices, automotive, mobile games and ending on the financial systems. Right now he is focused on the blockchain technology."),(0,i.kt)("li",{parentName:"ul"},"Kasper - Software developer with 10 years of experience. Former Java Developer who has recently switched to Rust. Around blockchain ecosystem since 2017."),(0,i.kt)("li",{parentName:"ul"},"Kasia - she has been working with agile methods for over 10 years, both as a researcher and a practitioner. She believes in teamwork and a power of user centered mindset. With experience in leading international projects, she knows how to support and encourage timely and high quality deliveries.")),(0,i.kt)("h3",{id:"team-code-repos"},"Team Code Repos"),(0,i.kt)("p",null," ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/bright/"},"https://github.com/bright/")),(0,i.kt)("h3",{id:"team-linkedin-profiles"},"Team LinkedIn Profiles"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/michal-gralinski-b464152/"},"https://www.linkedin.com/in/michal-gralinski-b464152/")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/kziemianek/"},"https://www.linkedin.com/in/kziemianek/")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/katarzyna-%C5%82ukasiewicz-b473901aa/"},"https://www.linkedin.com/in/katarzyna-\u0142ukasiewicz-b473901aa/"))),(0,i.kt)("h2",{id:"development-roadmap-"},"Development Roadmap \ud83d\udd29"),(0,i.kt)("h3",{id:"overview-1"},"Overview"),(0,i.kt)("blockquote",null,(0,i.kt)("ul",{parentName:"blockquote"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Total Estimated Duration:")," 10 weeks"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Full-Time Equivalent (FTE):"),"  1 FTE"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Total Costs:")," 25 000 DAI")),(0,i.kt)("h3",{parentName:"blockquote",id:"milestone-1"},"Milestone 1"),(0,i.kt)("ul",{parentName:"blockquote"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Estimated duration:")," 4 weeks"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"FTE:"),"  1"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Costs:")," 10 000 DAI"))),(0,i.kt)("p",null,"Create a pallet which will store a necessary data for a zk-Snarks + Research on ZK-Snarks concept\n| Number | Deliverable | Specification |\n| -----: | ----------- | ------------- |\n| ",(0,i.kt)("strong",{parentName:"p"},"0a.")," | License | Apache 2.0 / GPLv3 / MIT / Unlicense |\n| ",(0,i.kt)("strong",{parentName:"p"},"0b.")," | Documentation | We will provide inline documentation. The accompanying blogpost will also serve as an additional documentation. |\n| ",(0,i.kt)("strong",{parentName:"p"},"0c.")," | Testing and Testing Guide | We will provide unit tests for the pallet and the guidelines for running and testing it. |\n| ",(0,i.kt)("strong",{parentName:"p"},"0d.")," | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |\n| 1. | The pallet | Pallet allows storing a verification key and the proof on the blockchain and run the on-chain verification. With the first milestone we will provide a dummy version mechanism, which is going to be replaced with the grooth16 in the next milestone. |\n| 2. | Blog post | With the first blog post we would like to focus on describing the audience the Zk-Snarks concept: A/ what are the zk-snarks, B/ describing the \u201cBob\u201d problem and how they can solve it. C/ describing the process of creating proof D/ creating a \u201ccircom\u201d example where we generate a proof. |"),(0,i.kt)("h3",{id:"milestone-2"},"Milestone 2"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Estimated duration:")," 6 weeks"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"FTE:"),"  1"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Costs:")," 15 000 DAI")),(0,i.kt)("p",null,"Implement the on-chain proof verification mechanism followed by series of educational materials. "),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,i.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,i.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("strong",{parentName:"td"},"0a.")),(0,i.kt)("td",{parentName:"tr",align:null},"License"),(0,i.kt)("td",{parentName:"tr",align:null},"Apache 2.0 / GPLv3 / MIT / Unlicense")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("strong",{parentName:"td"},"0b.")),(0,i.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,i.kt)("td",{parentName:"tr",align:null},"We will provide both inline documentation of the code and a tutorial (which will be a part of the blog post) that explains how a user can (for example) spin up Substrate nodes and upload a verification key and the proof. This will show how the new functionality works.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("strong",{parentName:"td"},"0c.")),(0,i.kt)("td",{parentName:"tr",align:null},"Testing and Testing Guide"),(0,i.kt)("td",{parentName:"tr",align:null},"We will provide unit tests for the proof verification mechanism.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("strong",{parentName:"td"},"0d.")),(0,i.kt)("td",{parentName:"tr",align:null},"Docker"),(0,i.kt)("td",{parentName:"tr",align:null},"We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"1."),(0,i.kt)("td",{parentName:"tr",align:null},"Research notes"),(0,i.kt)("td",{parentName:"tr",align:null},"Mathematical calculations based on Groth16")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"2."),(0,i.kt)("td",{parentName:"tr",align:null},"Groth16  proof verification method"),(0,i.kt)("td",{parentName:"tr",align:null},"Implement Groth16  proof verification method which will be used by pallet")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"3."),(0,i.kt)("td",{parentName:"tr",align:null},"Demo"),(0,i.kt)("td",{parentName:"tr",align:null},"Create a demo, where we will use a 3-rd party tool to verify a solution & where we Alice could be rewarded for finding a solution.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"4."),(0,i.kt)("td",{parentName:"tr",align:null},"Circuits in circom"),(0,i.kt)("td",{parentName:"tr",align:null},"Prepare a circuits in circom, which will describe our problem")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"5."),(0,i.kt)("td",{parentName:"tr",align:null},"Blog post: Tutorial Groth16 (Part 1)"),(0,i.kt)("td",{parentName:"tr",align:null},'describing the groth16 & running "circom proof" from previous post with the Rust Unit test / CMD')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"6."),(0,i.kt)("td",{parentName:"tr",align:null},"Blog post: Tutorial Pallet (Part 2)"),(0,i.kt)("td",{parentName:"tr",align:null},"updating the pallet with the groth16 & running an example from the previous tutorial with the PolkaJS")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"7."),(0,i.kt)("td",{parentName:"tr",align:null},"Youtube video"),(0,i.kt)("td",{parentName:"tr",align:null},"Youtube video tutorial explaining the concepts from the blog posts")))))}u.isMDXComponent=!0}}]);