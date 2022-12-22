"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[1863],{78570:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var o=a(87462),n=(a(67294),a(3905));a(30828);const r={},l="Crowdloan Front End Template",i={unversionedId:"RFPs/Under Development/crowdloan_front_end_template",id:"RFPs/Under Development/crowdloan_front_end_template",title:"Crowdloan Front End Template",description:"Status:* Under Development 1, Under Development 2",source:"@site/docs/RFPs/Under Development/crowdloan_front_end_template.md",sourceDirName:"RFPs/Under Development",slug:"/RFPs/Under Development/crowdloan_front_end_template",permalink:"/Grants-Program/RFPs/Under Development/crowdloan_front_end_template",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"RFP: ISO 8583",permalink:"/Grants-Program/RFPs/Under Development/ISO_8583"},next:{title:"RFP: Substrate Identity Directory",permalink:"/Grants-Program/RFPs/Under Development/identity-directory"}},s={},p=[{value:"Project Description \ud83d\udcc4",id:"project-description-",level:2},{value:"Project Information",id:"project-information",level:3},{value:"Rewards Schema",id:"rewards-schema",level:3},{value:"Current Contributions",id:"current-contributions",level:3},{value:"Time left in Crowdloan and competition",id:"time-left-in-crowdloan-and-competition",level:3},{value:"Contribute CTA",id:"contribute-cta",level:3},{value:"After the Crowdloan",id:"after-the-crowdloan",level:3},{value:"Available Tools",id:"available-tools",level:2},{value:"Past examples",id:"past-examples",level:2}],d={toc:p};function m(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,o.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"crowdloan-front-end-template"},"Crowdloan Front End Template"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Status:")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/w3f/Grants-Program/blob/master/applications/crowdloan_frontend_template.md"},"Under Development 1"),", ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/w3f/Grants-Program/blob/master/applications/Crowdloans-FET.md"},"Under Development 2")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Proposer:")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/SBalaguer"},"SBalaguer"),", ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/Noc2"},"Noc2"))),(0,n.kt)("h2",{id:"project-description-"},"Project Description \ud83d\udcc4"),(0,n.kt)("p",null,"The following document intends to outline what a front-end white-label template could look like for teams to use to easily build their Polkadot Crowdloan (",(0,n.kt)("a",{parentName:"p",href:"https://wiki.polkadot.network/docs/learn-crowdloans"},"see Wiki: Parachain Crowdloans"),") websites. Teams applying for this RFP can change and adapt this. "),(0,n.kt)("p",null,"The overall objective of this project is to provide a white-label solution to teams to be able to plug into and offer all the information users need to contribute to their Crowdloan. In essence, it's a collection of:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"#project-information"},"Project information")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"#rewards-schema"},"Rewards Schema")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"#current-contributions"},"Current contributions")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"#time-left-in-crowdloan-and-competition"},"Time left in Crowdloan and competition")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"#contribute-cta"},"Contribute CTA")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"#after-the-crowdloan"},"After the Crowdloan"))),(0,n.kt)("p",null,"All of the above should be done ",(0,n.kt)("em",{parentName:"p"},"style agnostic")," so that the project can plug their own look and feel into the site."),(0,n.kt)("h3",{id:"project-information"},"Project Information"),(0,n.kt)("p",null,"This is just a place where the project can talk more about what they are doing."),(0,n.kt)("h3",{id:"rewards-schema"},"Rewards Schema"),(0,n.kt)("p",null,"This is just a place what the reward schema looks like. It's important to know that different teams can have different rewards mechanisms. For example, a team can offer higher contribution to early-birds (first ",(0,n.kt)("inlineCode",{parentName:"p"},"x_amount_of_contributors"),"; first ",(0,n.kt)("inlineCode",{parentName:"p"},"y amount_of_tokens_contributed"),"), they can offer referrals or even they can get smarter and offer higher rewards if they are losing. "),(0,n.kt)("p",null,"In the end, for this section it's more important to give the teams the ability to query easily the information than rather to get them a UI pre-defined. In general, it would be good for the template to offer two out-of-the-box mechanisms:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Early Bird contributions."),(0,n.kt)("li",{parentName:"ol"},"Rewards schema.")),(0,n.kt)("p",null,"Whichever the schema, there should be also a way of having this information available later on for the team to effectively give out the rewards."),(0,n.kt)("h3",{id:"current-contributions"},"Current Contributions"),(0,n.kt)("p",null,"Some teams like to show the number of contributors, others the list of addresses and how much they contributed, and others nothing at all. We need to give them all an option."),(0,n.kt)("h3",{id:"time-left-in-crowdloan-and-competition"},"Time left in Crowdloan and competition"),(0,n.kt)("p",null,"Auctions have two phases: ",(0,n.kt)("inlineCode",{parentName:"p"},"start_period")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"ending_period"),". During the ",(0,n.kt)("inlineCode",{parentName:"p"},"start_period")," nothing important really happens, however every block of the ",(0,n.kt)("inlineCode",{parentName:"p"},"ending_period")," matters, as this is when the candle can go out."),(0,n.kt)("p",null,"On top of this, teams will have other teams competing for the slots as well. This information needs to be displayed as well."),(0,n.kt)("h3",{id:"contribute-cta"},"Contribute CTA"),(0,n.kt)("p",null,"A simple button to allow users to contribute directly through the UI. This should open PolkadotJS or whatever wallet the user prefers, and add this directly on chain. Important to manage the entire cycle of the contribution: "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"contribute -> waiting for finalization -> finalized."),(0,n.kt)("li",{parentName:"ul"},"contribute -> waiting for finalization -> error.")),(0,n.kt)("h3",{id:"after-the-crowdloan"},"After the Crowdloan"),(0,n.kt)("p",null,"Once the Crowdloan ends, it will be good for the team to easily query all contributors and have them sort it to calculate the rewards given the ",(0,n.kt)("a",{parentName:"p",href:"#Rewards-Schema"},"rewads schema"),"."),(0,n.kt)("h2",{id:"available-tools"},"Available Tools"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://polkadot.js.org/docs/"},"PolkadotJS Apps")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/paritytech/capi"},"CAPI"))),(0,n.kt)("h2",{id:"past-examples"},"Past examples"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://acala.network/acala/join-acala"},"Acala")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://mantanetwork.medium.com/the-calamari-crowdloan-on-kusama-74a3cb2a2a4b"},"Calamari")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://loan.bsx.fi/"},"Basilisk")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://parachains.info/auctions"},"Parachains Info"),". In here check timeline and competition.")))}m.isMDXComponent=!0}}]);