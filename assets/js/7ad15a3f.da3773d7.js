"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[5798],{6031:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>m,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));n(16758);const l={},i="WebAssembly Runtimes Fuzzing (WARF)",o={unversionedId:"Applications/wasm_runtimes_fuzzing",id:"Applications/wasm_runtimes_fuzzing",title:"WebAssembly Runtimes Fuzzing (WARF)",description:"This document is referenced in the terms and conditions and therefore needs to contain all the required information. Don't remove any of the mandatory parts presented in bold letters or as headlines! See the Open Grants Program Process on how to submit a proposal.",source:"@site/docs/Applications/wasm_runtimes_fuzzing.md",sourceDirName:"Applications",slug:"/Applications/wasm_runtimes_fuzzing",permalink:"/Grants-Program/Applications/wasm_runtimes_fuzzing",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"`wasm-opt` for Rust",permalink:"/Grants-Program/Applications/wasm-opt-for-rust"},next:{title:"WasmEdge for Substrate",permalink:"/Grants-Program/Applications/wasmedge_substrate"}},m={},s=[{value:"Project Description \ud83d\udcc4",id:"project-description-",level:2},{value:"Team \ud83d\udc65",id:"team-",level:2},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-",level:2},{value:"Milestone 1 - Discovery &amp; project architecture",id:"milestone-1---discovery--project-architecture",level:3},{value:"Milestone 2 - WebAssembly VM/parsers integration",id:"milestone-2---webassembly-vmparsers-integration",level:3},{value:"Milestone 3 - Fuzzing &amp; improvement",id:"milestone-3---fuzzing--improvement",level:3},{value:"Milestone 4 - Performance &amp; Documentation",id:"milestone-4---performance--documentation",level:3},{value:"Additional Information \u2795",id:"additional-information-",level:2}],p={toc:s};function u(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"webassembly-runtimes-fuzzing-warf"},"WebAssembly Runtimes Fuzzing (WARF)"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This document is referenced in the terms and conditions and therefore needs to contain all the required information. Don't remove any of the mandatory parts presented in bold letters or as headlines! See the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/w3f/Open-Grants-Program/blob/master/README_2.md"},"Open Grants Program Process")," on how to submit a proposal.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Proposer:")," pventuzelo"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Payment Address:")," 3An3qG2j5RJA3inJMVSzZ8uLp1T55JuL1M")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"The above combination of your GitHub account and payment address will be your unique identifier during the program. Please keep them safe.")),(0,r.kt)("h2",{id:"project-description-"},"Project Description \ud83d\udcc4"),(0,r.kt)("p",null,"This project aim to improve security and resilience of WebAssembly runtimes and parsers using fuzzing. This project will help developers to audit automatically wasm runtime engines and identify security issues/bugs. Multiple fuzzing techniques will be used to achieve this goal but mainly grammar-based fuzzing and differential fuzzing. Complete documentation and user-friendly APIs will be provide to help developers to integrate new WebAssembly runtimes quickly and without any fuzzing skills."),(0,r.kt)("h2",{id:"team-"},"Team \ud83d\udc65"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Members:")," Patrick Ventuzelo"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"LinkedIn Profiles:")," ",(0,r.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/patrick-ventuzelo/"},"https://www.linkedin.com/in/patrick-ventuzelo/")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Code Repos:")," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/pventuzelo/wasm_runtimes_fuzzing"},"https://github.com/pventuzelo/wasm_runtimes_fuzzing")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Website:")," ",(0,r.kt)("a",{parentName:"li",href:"https://webassembly-security.com/"},"https://webassembly-security.com/")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Legal Structure:")," Patrick Ventuzelo, 113 grande rue, 91290 Arpajon, FRANCE"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Team's Experience:"))),(0,r.kt)("p",null,"Patrick is an Independent Security Researcher specialized in vulnerability research, fuzzing, reverse engineering and program analysis. He is teacher of two training respectively about ",(0,r.kt)("a",{parentName:"p",href:"https://webassembly-security.com/wasm-security-training/"},"WebAssembly Security")," and ",(0,r.kt)("a",{parentName:"p",href:"https://webassembly-security.com/rust-security-training/"},"Rust Security"),"."),(0,r.kt)("p",null,"Patrick found hundred of bugs in opensource projects mainly inside WebAssembly VMs and parsers. He is the author of ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pventuzelo/octopus"},"Octopus"),", one of the first open-source security analysis tool supporting WebAssembly and multiple Blockchain smart contracts bytecode to help researchers perform closed-source analysis."),(0,r.kt)("h2",{id:"development-roadmap-"},"Development Roadmap \ud83d\udd29"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Total Estimated Duration:")," 3 months"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Total Costs:")," 4.5 BTC")),(0,r.kt)("h3",{id:"milestone-1---discovery--project-architecture"},"Milestone 1 - Discovery & project architecture"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Estimated Duration:")," 2 weeks"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Costs:")," 0.75 BTC")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Number"),(0,r.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,r.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1."),(0,r.kt)("td",{parentName:"tr",align:null},"Integration Plan"),(0,r.kt)("td",{parentName:"tr",align:null},"List of major WebAssembly runtimes used in Polkadot ecosystem and APIs to interact with them.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2."),(0,r.kt)("td",{parentName:"tr",align:null},"Project development"),(0,r.kt)("td",{parentName:"tr",align:null},"Development of the project base (architecture and interface)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3."),(0,r.kt)("td",{parentName:"tr",align:null},"APIs"),(0,r.kt)("td",{parentName:"tr",align:null},"Creation of integration APIs + documentation")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"4."),(0,r.kt)("td",{parentName:"tr",align:null},"Delivery report"),(0,r.kt)("td",{parentName:"tr",align:null},"Tutorial for project installation and testings")))),(0,r.kt)("h3",{id:"milestone-2---webassembly-vmparsers-integration"},"Milestone 2 - WebAssembly VM/parsers integration"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Estimated Duration:")," 4 weeks"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Costs:")," 1.5 BTC")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Number"),(0,r.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,r.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1."),(0,r.kt)("td",{parentName:"tr",align:null},"Runtimes Integration"),(0,r.kt)("td",{parentName:"tr",align:null},"Integration with previously listed runtimes engines.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2."),(0,r.kt)("td",{parentName:"tr",align:null},"CLI tool"),(0,r.kt)("td",{parentName:"tr",align:null},"Command line tool allowing execution of wasm modules through all runtimes.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3."),(0,r.kt)("td",{parentName:"tr",align:null},"Project development"),(0,r.kt)("td",{parentName:"tr",align:null},"Improvement of the project (threading, runtimes perf monitoring)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"4."),(0,r.kt)("td",{parentName:"tr",align:null},"Project development"),(0,r.kt)("td",{parentName:"tr",align:null},"Development of fuzzing harness per runtimes.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"5."),(0,r.kt)("td",{parentName:"tr",align:null},"Runtimes dockers"),(0,r.kt)("td",{parentName:"tr",align:null},"Dockers to install runtimes engines easily")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"6."),(0,r.kt)("td",{parentName:"tr",align:null},"Delivery reports"),(0,r.kt)("td",{parentName:"tr",align:null},"Tutorial for runtimes installation, compilation, how to run tools and unittests")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"7."),(0,r.kt)("td",{parentName:"tr",align:null},"Unittest"),(0,r.kt)("td",{parentName:"tr",align:null},"unit test to verify all runtimes engines work as expected")))),(0,r.kt)("h3",{id:"milestone-3---fuzzing--improvement"},"Milestone 3 - Fuzzing & improvement"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Estimated Duration:")," 4 weeks"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Costs:")," 1.5 BTC")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Number"),(0,r.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,r.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1."),(0,r.kt)("td",{parentName:"tr",align:null},"Project development"),(0,r.kt)("td",{parentName:"tr",align:null},"Evaluation fuzzing hardness + improvement")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2."),(0,r.kt)("td",{parentName:"tr",align:null},"Fuzzing Implementation"),(0,r.kt)("td",{parentName:"tr",align:null},"Differential fuzzing implementation for wasm runtimes and parsers.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3."),(0,r.kt)("td",{parentName:"tr",align:null},"Fuzzing Implementation"),(0,r.kt)("td",{parentName:"tr",align:null},"Grammar fuzzing implementation specific to WebAssembly module")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"4."),(0,r.kt)("td",{parentName:"tr",align:null},"Project development"),(0,r.kt)("td",{parentName:"tr",align:null},"Improvement of the fuzzing (input file sharing, mutation algorithm, speed).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"5."),(0,r.kt)("td",{parentName:"tr",align:null},"Delivery reports"),(0,r.kt)("td",{parentName:"tr",align:null},"Tutorial for running fuzzers and use advanced CLI options")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"6."),(0,r.kt)("td",{parentName:"tr",align:null},"Unittest"),(0,r.kt)("td",{parentName:"tr",align:null},"unit test to verify fuzzing is deterministic and reproductible")))),(0,r.kt)("h3",{id:"milestone-4---performance--documentation"},"Milestone 4 - Performance & Documentation"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Estimated Duration:")," 2 weeks"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Costs:")," 0.75 BTC")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Number"),(0,r.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,r.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1."),(0,r.kt)("td",{parentName:"tr",align:null},"Tutorial"),(0,r.kt)("td",{parentName:"tr",align:null},"Runtime integration tutorial")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2."),(0,r.kt)("td",{parentName:"tr",align:null},"Tutorial"),(0,r.kt)("td",{parentName:"tr",align:null},"Utilisation tutorial")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3."),(0,r.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,r.kt)("td",{parentName:"tr",align:null},"Internal architecture")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"4."),(0,r.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,r.kt)("td",{parentName:"tr",align:null},"Details fuzzing engines & techniques")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"5."),(0,r.kt)("td",{parentName:"tr",align:null},"Performance testing"),(0,r.kt)("td",{parentName:"tr",align:null},"Improve fuzzing performances and benchmarks")))),(0,r.kt)("h2",{id:"additional-information-"},"Additional Information \u2795"),(0,r.kt)("p",null,"Some additional information :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"I'm planning to support a maximum of wasm runtimes and parsers"),(0,r.kt)("li",{parentName:"ul"},"The project will interact with runtimes implemented in different languages but mainly Rust, C, C++ and Go (potentially Python and JS)"),(0,r.kt)("li",{parentName:"ul"},"Huge part of the project will be focused on improving fuzzing performance and create a friendly way to integrate new wasm runtime with the project."),(0,r.kt)("li",{parentName:"ul"},"Based on actual Polkadot hosts (Substrate, Kagome, Gossamer), I will start integrating parity-wasm, wasmi, wasmtime, wasmer and binaryen.")))}u.isMDXComponent=!0}}]);