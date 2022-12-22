"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[3589],{3179:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var n=a(87462),l=(a(67294),a(3905));a(30828);const r={},o="Unified deployment for the collator node",i={unversionedId:"applications/unified_collator_node_deployment",id:"applications/unified_collator_node_deployment",title:"Unified deployment for the collator node",description:"- Team Name: Blaize.tech",source:"@site/docs/applications/unified_collator_node_deployment.md",sourceDirName:"applications",slug:"/applications/unified_collator_node_deployment",permalink:"/Grants-Program/applications/unified_collator_node_deployment",draft:!1,tags:[],version:"current",frontMatter:{}},s={},p=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-",level:2},{value:"Overview",id:"overview",level:3},{value:"Project Details",id:"project-details",level:3},{value:"Components",id:"components",level:4},{value:"Technologies",id:"technologies",level:4},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team \ud83d\udc65",id:"team-",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Team LinkedIn Profiles (if available)",id:"team-linkedin-profiles-if-available",level:3},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1 Unify collator node deployment",id:"milestone-1-unify-collator-node-deployment",level:3},{value:"Future Plans",id:"future-plans",level:2},{value:"Additional Information \u2795",id:"additional-information-",level:2}],d={toc:p};function u(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"unified-deployment-for-the-collator-node"},"Unified deployment for the collator node"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Team Name:")," Blaize.tech"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Payment Address:")," 0x7a83b5F20e69dfFe2c8FC942b54b159460C3D3d2"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("a",{parentName:"strong",href:"https://github.com/w3f/Grants-Program/tree/master#level_slider-levels"},"Level"),":")," 2")),(0,l.kt)("h2",{id:"project-overview-"},"Project Overview \ud83d\udcc4"),(0,l.kt)("p",null,"This application is the response to the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/w3f/Grants-Program/blob/master/rfps/open/polkadot-collator-setup.md"},"Polkadot Collator Setup")," RFP"),(0,l.kt)("h3",{id:"overview"},"Overview"),(0,l.kt)("p",null,"The main goal is to provide production-ready deployment for the Collator node that could work for any parachain with very few adjustments. "),(0,l.kt)("p",null,"There are a lot of parachains in the substrate ecosystem, and each of them has its guide on how to spin up a collator node ",(0,l.kt)("a",{parentName:"p",href:"https://docs.astar.network/docs/nodes/collator/secure_setup_guide/"},"astar"),", ",(0,l.kt)("a",{parentName:"p",href:"https://dev.datahighway.com/docs/tutorials/tutorials-nodes-collators-setup"},"datahighway"),", ",(0,l.kt)("a",{parentName:"p",href:"https://docs.moonbeam.network/node-operators/networks/run-a-node/docker/#collator"},"moonbeam"),", ",(0,l.kt)("a",{parentName:"p",href:"https://docs.hydradx.io/collator_setup/"},"hydradx"),", ",(0,l.kt)("a",{parentName:"p",href:"https://docs.oak.tech/docs/setup-collator-node/"},"oak"),".\nMost of those guides are just examples of how to start a collator for testing purposes and are not production-ready. That complicates life for those who want to manage collators for several parachains because each new parachain requires an entirely new setup. We aim to pack a common part of infrastructure and Collator node deployment into functional building blocks that could be used with any parachain and make it highly extendable and configurable for each specific case. "),(0,l.kt)("p",null,"Every collator node has common steps to run it that do not depend on concrete parachain: "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"build "),(0,l.kt)("li",{parentName:"ul"},"containerize "),(0,l.kt)("li",{parentName:"ul"},"terraform infrastructure "),(0,l.kt)("li",{parentName:"ul"},"deploy")),(0,l.kt)("p",null,"All of that could be automated and templated for all existing and parachains future. Even if building and containerization are relatively simple tasks, most teams handle them in their own way, sometimes far away from IaC best practices. Unfortunately, there is still no unified way approved \\ recommended by Web3 so we aim to fill this gap."),(0,l.kt)("h3",{id:"project-details"},"Project Details"),(0,l.kt)("p",null,"First, we want to start from two unified Dockerfile templates for building and running collator node that suits best practices like minimal runtime, no root user, minimal port exposure, etc. Those templates could be easily extended with all required dependencies if needed."),(0,l.kt)("p",null,"The next step is to provide reproducible and configurable infrastructure via terraforming one of the supported clouds. In most cases, Collator nodes have similar requirements on infrastructure, but in case of special requirements, it would be pretty easy to configure terraform scripts for the needs."),(0,l.kt)("p",null,"Last step that requires most of the confgurability is a deployment step which would be handled by ansible scripts. We would provide unified deployment with configuration for the relay chain and common Collator parameters."),(0,l.kt)("h4",{id:"components"},"Components"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Terraform deployment of the Collator infrastructure to the corresponding AWS and GCP clouds"),(0,l.kt)("li",{parentName:"ul"},"Ansible scrips for the configurable deployment of a Collator node for different parachains")),(0,l.kt)("h4",{id:"technologies"},"Technologies"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Docker as virtualization for the collator node"),(0,l.kt)("li",{parentName:"ul"},"Terraform as IaC for the reliable and reproducible infrastructure deployment"),(0,l.kt)("li",{parentName:"ul"},"Ansible as deployment automatization tool")),(0,l.kt)("h3",{id:"ecosystem-fit"},"Ecosystem Fit"),(0,l.kt)("p",null,"Currently, most parachains provide a setup guide on how to run the Collator on bare metal; however, it is neither automatized (hence non-reproducible) nor suits high availability standards. Our solution will provide most parachains with the out-of-the-box instrument for spinning up Collator. That would increase the reliability of the existing parachains as they may utilize reliability, high availability and scaling of Kubernetes. As well will significantly reduce the time and cost of spinning up the Collator for those who want to support several parachains "),(0,l.kt)("h2",{id:"team-"},"Team \ud83d\udc65"),(0,l.kt)("h3",{id:"team-members"},"Team members"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Mark Tsyrulnyk - Blockchain Solutions Architect at blaize.tech, CTO at momo.finance"),(0,l.kt)("li",{parentName:"ul"},"Oleksandr Bortnik - Senior DevOps at blaize.tech")),(0,l.kt)("h3",{id:"contact"},"Contact"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Contact Name:")," Pasha Bergman"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Contact Email:")," ",(0,l.kt)("a",{parentName:"li",href:"mailto:pasha@blaize.tech"},"pasha@blaize.tech")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Website:")," ",(0,l.kt)("a",{parentName:"li",href:"https://blaize.tech/"},"https://blaize.tech/"))),(0,l.kt)("h3",{id:"legal-structure"},"Legal Structure"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Registered Address:")," Sichovykh Striltsiv St, 20, Dnipro, Dnipropetrovsk Oblast, 49000. Ukraine"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Registered Legal Entity:"),' LIMITED LIABILITY COMPANY "BLAIZE TECHNOLOGY"')),(0,l.kt)("h3",{id:"teams-experience"},"Team's experience"),(0,l.kt)("p",null,"Blaize is a blockchain development company with 5+ years of experience and 60 people on board. Core expertise: DeFi, app development, smart contracts development, and security audits."),(0,l.kt)("h3",{id:"team-code-repos"},"Team Code Repos"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://blaize.tech/clients/"},"https://blaize.tech/clients/")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/markblaize"},"https://github.com/markblaize"),", ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/siexp"},"https://github.com/siexp")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/babebort-blaize"},"https://github.com/babebort-blaize"))),(0,l.kt)("h3",{id:"team-linkedin-profiles-if-available"},"Team LinkedIn Profiles (if available)"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/siexp"},"https://www.linkedin.com/in/siexp"))),(0,l.kt)("h2",{id:"development-roadmap-"},"Development Roadmap \ud83d\udd29"),(0,l.kt)("h3",{id:"overview-1"},"Overview"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Total Estimated Duration:")," 2.5 months"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Full-Time Equivalent (FTE):"),"  FTE 1.5"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Total Costs:")," 24500 USDT")),(0,l.kt)("h3",{id:"milestone-1-unify-collator-node-deployment"},"Milestone 1 Unify collator node deployment"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Total Estimated Duration:")," 2.5 months"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Full-Time Equivalent (FTE):"),"  FTE 1.5"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Total Costs:")," 24500 USDT")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,l.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,l.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},(0,l.kt)("strong",{parentName:"td"},"0a.")),(0,l.kt)("td",{parentName:"tr",align:null},"License"),(0,l.kt)("td",{parentName:"tr",align:null},"Apache 2.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},(0,l.kt)("strong",{parentName:"td"},"0b.")),(0,l.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,l.kt)("td",{parentName:"tr",align:null},"Documentation includes a comprehensive guide of deployment options, recommended infrastructure and minimal requirements, step-by-step guide on how to deploy, maintain and monitor the collator node")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},(0,l.kt)("strong",{parentName:"td"},"0c.")),(0,l.kt)("td",{parentName:"tr",align:null},"Testing and Testing Guide"),(0,l.kt)("td",{parentName:"tr",align:null},"Core functions will be fully covered by comprehensive infrustructure tests to ensure functionality and robustness. In the guide, we will describe how to run these tests.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},(0,l.kt)("strong",{parentName:"td"},"0d.")),(0,l.kt)("td",{parentName:"tr",align:null},"Article"),(0,l.kt)("td",{parentName:"tr",align:null},"We will publish an article that explains the architecture, possible tweaks and benefits of using a unified collator deployment solution")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"1."),(0,l.kt)("td",{parentName:"tr",align:null},"Unified Infrastructure as Code"),(0,l.kt)("td",{parentName:"tr",align:null},"Terraforming scrips and deployment scripts for spinning up a Collator node on AWS and GCP clouds")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"1a."),(0,l.kt)("td",{parentName:"tr",align:null},"Terraform scripts for setting up Collator infrastructure"),(0,l.kt)("td",{parentName:"tr",align:null},"Configurable deployment via terraform to Kubernetes cluster running on AWS and GCP clouds")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"1b."),(0,l.kt)("td",{parentName:"tr",align:null},"Ansible scripts for spinning up Collator node"),(0,l.kt)("td",{parentName:"tr",align:null},"Configurable scripts to run collator node over the infrastructure")))),(0,l.kt)("h2",{id:"future-plans"},"Future Plans"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Provide more vendor-specific deployment like Azure, Vultr, IBM Cloud etc. "),(0,l.kt)("li",{parentName:"ul"},"Provide different tiers for Availability \\ SLA for the collator node")),(0,l.kt)("h2",{id:"additional-information-"},"Additional Information \u2795"))}u.isMDXComponent=!0}}]);