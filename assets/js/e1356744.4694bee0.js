"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[14],{60059:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));a(16758);const i={},l="Halva",s={unversionedId:"Applications/halva_framework",id:"Applications/halva_framework",title:"Halva",description:"This document is referenced in the terms and conditions and therefore needs to contain all the required information. Don't remove any of the mandatory parts presented in bold letters or as headlines! See the Open Grants Program Process on how to submit a proposal.",source:"@site/docs/Applications/halva_framework.md",sourceDirName:"Applications",slug:"/Applications/halva_framework",permalink:"/Grants-Program/Applications/halva_framework",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Halva [Bootstrapping and Scaffolding]",permalink:"/Grants-Program/Applications/halva_bootstrapping"},next:{title:"Hamster",permalink:"/Grants-Program/Applications/hamster"}},o={},p=[{value:"Project Description \ud83d\udcc4",id:"project-description-",level:2},{value:"Team \ud83d\udc65",id:"team-",level:2},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-",level:2},{value:"Milestone 1",id:"milestone-1",level:3}],m={toc:p};function u(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"halva"},"Halva"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This document is referenced in the terms and conditions and therefore needs to contain all the required information. Don't remove any of the mandatory parts presented in bold letters or as headlines! See the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/w3f/Open-Grants-Program/blob/master/README_2.md"},"Open Grants Program Process")," on how to submit a proposal.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Proposer:")," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/orgs/halva-suite"},"Halva")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Payment Address:")," 1837ca1w8WK9yfaVo5Lhgg4sENK2Tq3FgW")),(0,r.kt)("h2",{id:"project-description-"},"Project Description \ud83d\udcc4"),(0,r.kt)("p",null,"Halva is a toolchain for improving the experience of developing Decentralized Applications based on Substrate. It provides a high-level way to configure a development environment, interact with Substrate through external API and writing your test cases."),(0,r.kt)("p",null,"Halva inspired by ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/trufflesuite/truffle"},"Truffle")," but implements Substrate specific API. It targets testing extrinsics via RPC calls this allows test Substrate (or clients compatible with Substrate RPC) as a black-box. Halva uses ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/polkadot-js"},"Polkadot.js")," to interact with RPC."),(0,r.kt)("p",null,"Right now you must do much boilerplate code around your testing framework (mocha, chai, ava, etc) so that beginning testing your Substrate based app. Halva addressing these challenges."),(0,r.kt)("h2",{id:"team-"},"Team \ud83d\udc65"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Members:")," Wintex"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"LinkedIn Profiles:")," -"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Code Repos:")," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/orgs/halva-suite"},"https://github.com/orgs/halva-suite")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Website:")," ",(0,r.kt)("a",{parentName:"li",href:"https://wintex.pro/en/"},"https://wintex.pro/en/")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Legal Structure:")," individual"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Team's Experience:"))),(0,r.kt)("p",null,"Our team develops software about 10+ years and decentralized applications since 2017. We have a great experience with typescript, node.js, and testing frameworks."),(0,r.kt)("h2",{id:"development-roadmap-"},"Development Roadmap \ud83d\udd29"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Total Estimated Duration:")," 5 weeks"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Full-time equivalent (FTE):")," 1.5"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Total Costs:")," 1.82 BTC")),(0,r.kt)("h3",{id:"milestone-1"},"Milestone 1"),(0,r.kt)("p",null,"Core functional for automated testing with Mocha and Chai. This stage involves the creation of basic functionality for running tests. It will include the TestRunner package, and assertions to simplify checking external calls."),(0,r.kt)("p",null,"Assertions:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},".passes")," Asserts that the passed async extrinsic does not fail.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},".eventEmitted")," The eventEmitted assertion checks that an event has been emitted by the transaction with result")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},".eventNotEmitted")," The eventNotEmitted assertion checks that an event has not been emitted by the transaction with result")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},".reverts")," Asserts that the passed async extrinsic fails with a certain reason.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Estimated Duration:")," 5 weeks")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"FTE:")," 1.5")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Costs:")," 1.82 BTC"))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Number"),(0,r.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,r.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1."),(0,r.kt)("td",{parentName:"tr",align:null},"Configuration"),(0,r.kt)("td",{parentName:"tr",align:null},"Network config for interacting with many public & private networks, keyring config for initializing test accounts and chain spec parser")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2."),(0,r.kt)("td",{parentName:"tr",align:null},"Core"),(0,r.kt)("td",{parentName:"tr",align:null},"Implement primitives, assertions, a high-order function for a test-cases")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3."),(0,r.kt)("td",{parentName:"tr",align:null},"Testing"),(0,r.kt)("td",{parentName:"tr",align:null},"Implement scripts for command ",(0,r.kt)("inlineCode",{parentName:"td"},"halva test"),". It run JavaScript tests with pre-initialized accounts.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"4."),(0,r.kt)("td",{parentName:"tr",align:null},"Documentations"),(0,r.kt)("td",{parentName:"tr",align:null},"Write documentations")))))}u.isMDXComponent=!0}}]);