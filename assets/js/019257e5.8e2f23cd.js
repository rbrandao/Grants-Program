"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[4548],{6934:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));a(30828);const i={},o="PolkaMusic",l={unversionedId:"applications/polkamusic",id:"applications/polkamusic",title:"PolkaMusic",description:"- Team Name: PolkaMusic",source:"@site/docs/applications/polkamusic.md",sourceDirName:"applications",slug:"/applications/polkamusic",permalink:"/Grants-Program/applications/polkamusic",draft:!1,tags:[],version:"current",frontMatter:{}},s={},p=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-",level:2},{value:"Overview",id:"overview",level:3},{value:"Project Details",id:"project-details",level:3},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team \ud83d\udc65",id:"team-",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Phalgun Shenoy",id:"phalgun-shenoy",level:3},{value:"John Fortner",id:"john-fortner",level:3},{value:"Suraj Kumar",id:"suraj-kumar",level:3},{value:"Pranshu Rastogi",id:"pranshu-rastogi",level:3},{value:"David Hidalgo-Gato",id:"david-hidalgo-gato",level:3},{value:"Amit Dua",id:"amit-dua",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Team LinkedIn Profiles",id:"team-linkedin-profiles",level:3},{value:"Development Status \ud83d\udcd6",id:"development-status-",level:2},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1 Creation of <em>Rights Management Pallet</em> and <em>Rights Management Portal</em>",id:"milestone-1-creation-of-rights-management-pallet-and-rights-management-portal",level:3},{value:"Milestone 2 Creation of <em>Royalty Splitter Pallet</em> and <em>Front-end integration</em>",id:"milestone-2-creation-of-royalty-splitter-pallet-and-front-end-integration",level:3},{value:"Future Plans",id:"future-plans",level:2},{value:"Additional Information \u2795",id:"additional-information-",level:2}],m={toc:p};function u(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"polkamusic"},"PolkaMusic"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Team Name:")," PolkaMusic"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Payment Address (BTC):")," 3NQASZ1jJHsWVo6xDdAxyzWWu67HpfRr5u"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Status:")," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/w3f/Grants-Program/pull/332#issuecomment-994706244"},"Terminated"))),(0,r.kt)("h2",{id:"project-overview-"},"Project Overview \ud83d\udcc4"),(0,r.kt)("h3",{id:"overview"},"Overview"),(0,r.kt)("p",null,"PolkaMusic is a substrate based public chain crafted exclusively for operating decentralized music businesses on blockchain. While PolkaMusic.io is a decentralized streaming platform by itself, it is envisioned as a 360 infrastructure for decentralized music using which music entrepreneurs can not only create their own micro-economy for their music platform, but also leverage the ever growing list of features such as NFT, crowdfunding, decentralized storage and more. PolkaMusic also allows existing music blockchains to connect to the Polkadot ecosystem in order to interconnect siloed music economies and enables interoperability, wherever possible."),(0,r.kt)("p",null,"PolkaMusic is trying to solve 3 major problems that is unique to the music industry:"),(0,r.kt)("p",null,"1) Pro Rata Royalty Payment Model: Due to the computation complexity, on Spotify and Apple Music, rights-holders are paid according to market share; how their streams stack up against the most popular songs in a given time period. The pro rata model favors artists/tracks with the biggest amount of played streams, regardless of if they are created by a large number of users with few plays or a smaller number of users who have played them repeatedly. The user centric model favours artists with smaller number of streams, especially when the overall stream count is smaller. Here's a study that compares Pro Rata and User Centric Distribution Models:  ",(0,r.kt)("a",{parentName:"p",href:"https://www.fim-musicians.org/wp-content/uploads/prorata-vs-user-centric-models-study-2018.pdf"},"Study")),(0,r.kt)("p",null,'2) Lack of transparency: You cannot get actual data, especially financial data, from centralized streaming platforms. Data frauds can happen where certain artists are favored to receive fake streams in order to get a favorable position on music ranking charts. This combined with Pro Rata Model puts smaller artists at risk of losing royalty payments to popular artists. With lack of live events due to Covid pandemic, smaller artists, who otherwise are dependent on offline gigs, are increasingly dependent on online platforms for their livelihood. Here\'s an investigation into a popular platform called "Tidal" for data fraud -> ',(0,r.kt)("a",{parentName:"p",href:"https://variety.com/2020/digital/global/tidal-jay-z-beyonce-data-fraud-investigation-in-norway-1234631663/"},"Link")),(0,r.kt)("p",null,'3) Digital blind spots: Bad metadata have contributed to a "royalty black box" of unpaid money, thought to be somewhere at least in the millions. Every platform and royalty collection agencies have their own proprietary database, and sometimes there\'s a mismatch of database structure which leads to corruption of meta-data, and organizations do not really know who to pay. Such inefficiencies result in unidentified rights owners and unattributed royalties.'),(0,r.kt)("p",null,"All the above problems can be solved using the blockchain technology with no middlemen. PolkaMusic will enable:"),(0,r.kt)("p",null,"1) User Centric Model: A user's royalty pool allocation will be distributed to the artists she's actually listening to. This way, livelihood of smaller artists are preserved."),(0,r.kt)("p",null,"2) Transparency: Every stream is reported to the off-chain worker which calculates payments as per the user-centric model and reports to the SSP Smart Contract for further processing. The royalty payments can be verified by anyone via the block explorer."),(0,r.kt)("p",null,'3) Smart Record Contracts: Smart Record Contracts are smart versions of legacy "Record Contracts", which consists of all the meta-data about the music, including ownership splits. Smart Record Contracts live on the blockchain, accessible by anyone, solving the "royalty black box" issue. Anybody having any doubts about who to pay for a particular song can always refer to the public database and even send money to it, which will automatically split such payments to constituent copyright holder\'s wallets.'),(0,r.kt)("p",null,"In addition to solving the above mentioned fundamental problems in the music industry, PolkaMusic can also process royalties every 24 hours, which is unheard of in the traditional music world due to inefficiencies in the payment infrastructure."),(0,r.kt)("p",null,'We want to revolutionize the back-end of the music world, so anybody who wants to imitate the business model of PolkaMusic doesn\'t have to jump through the hoops of forking and creating own blockchain, but can just initilize the "Smart Streaming Platform" smart contract with custom token name and inflationary properties through an easy GUI, instantly spinning up a new micro-economy for their own streaming business on the blockchain. The new Smart Streaming Platforms can leverage the public "Rights Management" infrastructure of PolkaMusic for payment purposes, though the artist/rights holders have to individually permit the listing of their songs on these SSPs as they\'ll pay in their own tokens.'),(0,r.kt)("h3",{id:"project-details"},"Project Details"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Architecture"))),(0,r.kt)("p",{align:"center"},(0,r.kt)("img",{src:"https://user-images.githubusercontent.com/76401865/113667186-09fdf600-96ce-11eb-970c-4f70c5895c9f.jpg",width:"1500",title:"hover text"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Rights Management Pallet"),': The \u201cRights Management\u201d Pallet is central to the whole PolkaMusic ecosystem and holds the "rights" information of a music in the form of "Smart Record Contract" (SRC). SRCs are accessible publicly and artists can create it via the Rights Management Portal. Whenever any royalty needs to be processed for a song, the SRC\'s unique identifier (computed multihash of the original music file uploaded) will be used to retrieve the ownership shares. SRCs also doubles up as a copyright for the music as it is timestamped at the time of submission, and such proof on a public blockchain is increasingly being accepted in various jurisdictions across the world. The data structure of a Smart Record Contract is as follows:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'album_meta{\nalbum_artist: string\nalbum_producer: string\nalbum_title: string\nalbum_type: string\nc_line: string\ncountry_of_origin: string\ndisplay_label_name: string\nexplicit_: boolean\ngenre_1: int\nmaster_label_name: string\np_line: string\npart_of_album: boolean\nrelease_date: int\nrelease_year: int\nsales_start_date: int\nupc_or_ean: boolean\n}\n\ncomp_meta{\nPRO: string\ncomposition_title: string\npublishers: Array\nthird_party_publishers: boolean\nwriters: Array\ncreated: timstamp\n}\n\ndistributions{\ndistributions_comp: {payee: "username", bp: 10000}\ndistributions_master: {payee: "username", bp: 10000}\n}\n\ntrack_meta{\nISRC: ""\ngenre_1: int\ngenre_2: int\np_line: string\nsamples: boolean\ntrack_artists: Array\n0: {artist: "artist_name", aliases: "alias"}\n1: {artist: "artist_name", aliases: "alias"}\ntrack_duration: int\ntrack_no: int\ntrack_producer: string\ntrack_title: string\ntrack_volume: 0\ntrack_title: string\nipfs: "ipfs_hash"\n}\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Royalty Splitter Pallet"),": Any royalty payment that needs to be processed for a song will go through the Royalty Splitter, which retrieves the ownership shares from Smart Record Contracts and splits the payments to multiple stakeholder's wallets based on ownership weights."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Quorum Pallet"),": In order to deter bad actors and to thwart their efforts, Quorum Pallet will let users vote on SRCs, which will increase/reduce the trust score of an SRC/artist."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Smart Streaming Platform Smart Contract"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"$SSP_Token")," - When a Smart Streaming Platform initializes the Smart Contract, the platform can issue its own token that can be used for royalty payments, membership fee, tipping etc."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Custom Inflation")," - In order to pay the artists in $SSP_Token, a daily reward pool must be created that results in inflation of $SSP_Token supply. The inflation percentage can be customized during the initialization."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Smart Record Contracts (SRC)")," - Artists can create Smart Record Contracts for each song, containing meta data such as song name, license and the wallet information of multiple stakeholders."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Royalty Dispatcher")," - After processing the user-centric royalty computation using stream reports, the off-chain workers will submit a transaction to the Royalty Dispatcher, which, after a fail-safe check, dispatches royalty payment from the inflationary reward pool to the royalty splitter pallet."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Off-chain Workers"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Stream Reports")," - The stream reports saved in Smart Streaming Platform's (SSP) centralized database will be retrieved for further processing to determine the royalty payments to be made."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"User-Centric Royalty Computation")," - Processes the stream reports every 24 hours by autonomously calculating using following metrics:"),(0,r.kt)("p",null,"1) The play_time of a particular Stream Report by the user.\n2) The user's total play_time in the last 24 hours\n3) The total royalty reward pool available.\n4) The total number of full-time listeners on the SSP (a user is considered full-time listener if she streams 3600 sec of music)."),(0,r.kt)("p",null,"The available reward pool (from the inflation) is split between all the listeners on the SSP (as a quota), with\n",(0,r.kt)("inlineCode",{parentName:"p"},"max_quota = daily_reward_pool / total_full_time_listeners"),". For every stream report, the royalty will be paid from listener's quota, and is calculated as ",(0,r.kt)("inlineCode",{parentName:"p"},"stream_report_royalty = (stream_report_play_time / total_user_play_time) * assigned_quota")),(0,r.kt)("p",null,"The current version of PolkaMusic.io hosts a fully functional streaming platform that will connect to the SSP Smart Contract instance.\nWe also have an ecosystem of Smart Streaming Platforms & blockchains that are ready to connect to PolkaMusic in the following fashion."),(0,r.kt)("p",{align:"center"},(0,r.kt)("img",{src:"https://user-images.githubusercontent.com/76401865/113570453-fac96a80-9631-11eb-8725-a5c2a0b6c390.png",width:"1000",title:"hover text"})),(0,r.kt)("h3",{id:"ecosystem-fit"},"Ecosystem Fit"),(0,r.kt)("p",null,'The music industry is complex with a lot of revenue streams and middle-men. With PolkaMusic, we will focus on digital streaming, which is the most dominant mode of listening in the current era. The current royalty payment infrastructure is designed for CD-era, with royalty payouts taking about 1-6 months on the optimistic-end to about 2 years in the worse-case scenario, and there\'s no verifiable transparency. In case the song is registered with a rights society such as ASCAP, digital platforms like Spotify actually fill a spreadsheet in order to report the streams, which is then processed through legacy systems and databases, none of which are efficient. Digital music streaming warrants a reimagined infrastrucutre that is able to process royalties frequently, accurately and transparently, and all this can be done through an autonomous blockchain system. PolkaMusic aims to be the public "foundation" which can be used by anybody to create a transparent music and video streaming service.'),(0,r.kt)("p",null,'There are currently no other projects in the Substrate ecosystem that are solving this problem. Audius.com is one project on Ethereum that is focused on decentralized music, however, PolkaMusic is being built in a way so that anybody can spin up a project like Audius.com using PolkaMusic as an infrastructure. These "Smart Streaming Platforms" (SSP) will have their own unique micro-economy with their own native token. Developers can come up with innovative economic design to create value on the front-end. In addition to this, the SSPs can also integrate more pallets that will be made available publicly on a regular basis.'),(0,r.kt)("h2",{id:"team-"},"Team \ud83d\udc65"),(0,r.kt)("h3",{id:"team-members"},"Team members"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Phalgun Shenoy")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"John Fortner")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Suraj Kumar")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Pranshu Rastogi"))),(0,r.kt)("h3",{id:"contact"},"Contact"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Contact Name:")," Phalgun Shenoy")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Contact Email:")," ",(0,r.kt)("a",{parentName:"p",href:"mailto:shenoy@polkamusic.io"},"shenoy@polkamusic.io"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Website:")," ",(0,r.kt)("a",{parentName:"p",href:"https://polkamusic.io"},"https://polkamusic.io")," / ",(0,r.kt)("a",{parentName:"p",href:"https://bitcoinmusic.org"},"https://bitcoinmusic.org"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Telegram:")," @polkashenoy")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"LinkedIn:")," ",(0,r.kt)("a",{parentName:"p",href:"https://www.linkedin.com/in/shenoyphalgun/"},"https://www.linkedin.com/in/shenoyphalgun/")))),(0,r.kt)("h3",{id:"legal-structure"},"Legal Structure"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Registered Address:")," -")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Registered Legal Entity:")," The team has no legal entity now, however, the foundation is planned to be registered in Singapore."))),(0,r.kt)("h3",{id:"teams-experience"},"Team's experience"),(0,r.kt)("h3",{id:"phalgun-shenoy"},"Phalgun Shenoy"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Polkadot Ambassador - India")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Hosting the Polkadot India Hackathon 2021.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"4 years of experience in designing blockchain architecture & microeconomy.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"A content creator on YouTube with 20+ million views.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"B.E. Computer Science")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Founder of ",(0,r.kt)("a",{parentName:"p",href:"https://bitcoinmusic.org"},"https://bitcoinmusic.org"),", an industrial grade NFT protocol for the industry."))),(0,r.kt)("h3",{id:"john-fortner"},"John Fortner"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Former US Air Force Avionics Technician")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Baccalaureate Degree in Computer Science")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Experience in developing music blockchain using Graphene blockchain framework")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Full-stack Developer with Rust, C# and Typescript skills."))),(0,r.kt)("h3",{id:"suraj-kumar"},"Suraj Kumar"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Computer Science Engineer")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Waves Tech Ambassador")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Specialities: Javascript, Rust, Python & C++"))),(0,r.kt)("h3",{id:"pranshu-rastogi"},"Pranshu Rastogi"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Bachelor of Technology (B.Tech.) Computer Science")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Blockchain developer - Hyperledger Fabric | Ethereum | Polkadot | SSI"))),(0,r.kt)("h3",{id:"david-hidalgo-gato"},"David Hidalgo-Gato"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Research Assistant - Yale/YNHH Center for Outcomes Research and Evaluation (CORE)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Student - Yale University")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Rust Programmer"))),(0,r.kt)("h3",{id:"amit-dua"},"Amit Dua"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Ph.D. Scholar - Computer Science")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Assistant professor at BITS Pilani, Pilani"))),(0,r.kt)("h3",{id:"team-code-repos"},"Team Code Repos"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"PolkaMusic -> ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/polkamusic/PolkaMusic"},"https://github.com/polkamusic/PolkaMusic"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"BitcoinMusic -> ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/bitcoinmusicorg/bitcoinmusic-core"},"https://github.com/bitcoinmusicorg/bitcoinmusic-core")))),(0,r.kt)("h3",{id:"team-linkedin-profiles"},"Team LinkedIn Profiles"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://www.linkedin.com/in/shenoyphalgun/"},"https://www.linkedin.com/in/shenoyphalgun/"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://www.linkedin.com/in/johnfortner/"},"https://www.linkedin.com/in/johnfortner/"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://www.linkedin.com/in/s5k0651/"},"https://www.linkedin.com/in/s5k0651/"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://www.linkedin.com/in/rastogipranshu/"},"https://www.linkedin.com/in/rastogipranshu/"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://www.linkedin.com/in/david-hidalgo-gato/"},"https://www.linkedin.com/in/david-hidalgo-gato/"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://www.linkedin.com/in/amit-dua-97348415/"},"https://www.linkedin.com/in/amit-dua-97348415/")))),(0,r.kt)("h2",{id:"development-status-"},"Development Status \ud83d\udcd6"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Our reference Smart Streaming Platform front-end is live on ",(0,r.kt)("a",{parentName:"li",href:"https://polkamusic.io"},"https://polkamusic.io")),(0,r.kt)("li",{parentName:"ul"},"PolkaMusic substrate testnet is currently being run for development"),(0,r.kt)("li",{parentName:"ul"},"The Rights Management Pallet is in the process of being built and public on ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/polkamusic/PolkaMusic/blob/master/pallets/rmp/src/lib.rs"},"PolkaMusic Repo"))),(0,r.kt)("h2",{id:"development-roadmap-"},"Development Roadmap \ud83d\udd29"),(0,r.kt)("h3",{id:"overview-1"},"Overview"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Total Estimated Duration:"),"  8 weeks")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Full-Time Equivalent (FTE):"),"  4")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Total Costs:")," 12000 USD"))),(0,r.kt)("h3",{id:"milestone-1-creation-of-rights-management-pallet-and-rights-management-portal"},"Milestone 1 Creation of ",(0,r.kt)("em",{parentName:"h3"},"Rights Management Pallet")," and ",(0,r.kt)("em",{parentName:"h3"},"Rights Management Portal")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Estimated Duration:")," 4 weeks")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"FTE:"),"  2")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Costs:")," 6000 USD"))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,r.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,r.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"0a."),(0,r.kt)("td",{parentName:"tr",align:null},"License"),(0,r.kt)("td",{parentName:"tr",align:null},"Apache 2.0 / MIT / Unlicense")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"0b."),(0,r.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,r.kt)("td",{parentName:"tr",align:null},"Documents containing the data structure and guide to operate Rights Management Portal (RMP) in order to create a Smart Record Contract.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"0c."),(0,r.kt)("td",{parentName:"tr",align:null},"Testing Guide"),(0,r.kt)("td",{parentName:"tr",align:null},"We will provide a guide wherein a user can create a SRC through the RMP and verify the data on the blockchain")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"1."),(0,r.kt)("td",{parentName:"tr",align:null},"Rights Management Pallet"),(0,r.kt)("td",{parentName:"tr",align:null},"Rights Management Pallet will have the data structure to store all the info regarding a music composition. SRC can be created through the extrinsic ",(0,r.kt)("inlineCode",{parentName:"td"},"rightsMgmtPortal.registerMusic(album_artist, album_producer, album_title .....)"),". The complete list of arguments would be as per the ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/polkamusic/PolkaMusic/blob/master/src_data_struct"},"SRC data structure"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"2."),(0,r.kt)("td",{parentName:"tr",align:null},"Rights Management Portal"),(0,r.kt)("td",{parentName:"tr",align:null},"A GUI that lets the user enter the data and submit to the Rights Management Pallet in order to create a Smart Record Contract.")))),(0,r.kt)("p",null,"The Rights Management Portal will have 2 modes and the mockups are linked below:"),(0,r.kt)("p",null,"Simple Mode -> ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/polkamusic/PolkaMusic/raw/master/RMP%20simple%20mode.pdf"},"Link")),(0,r.kt)("p",null,"Advanced Mode -> ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/polkamusic/PolkaMusic/raw/master/RMP%20advanced%20mode.pdf"},"Link")),(0,r.kt)("h3",{id:"milestone-2-creation-of-royalty-splitter-pallet-and-front-end-integration"},"Milestone 2 Creation of ",(0,r.kt)("em",{parentName:"h3"},"Royalty Splitter Pallet")," and ",(0,r.kt)("em",{parentName:"h3"},"Front-end integration")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Estimated Duration:")," 4 Weeks")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"FTE:"),"  2")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Costs:")," 6000 USD"))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,r.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,r.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"0a."),(0,r.kt)("td",{parentName:"tr",align:null},"License"),(0,r.kt)("td",{parentName:"tr",align:null},"Apache 2.0 / MIT / Unlicense")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"0b."),(0,r.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,r.kt)("td",{parentName:"tr",align:null},"Documents explaining the structure of Royalty Splitter Pallet and the streaming platform")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"0c."),(0,r.kt)("td",{parentName:"tr",align:null},"Testing Guide"),(0,r.kt)("td",{parentName:"tr",align:null},"We will provide a guide to test by streaming a song on the front end and have the royalty processed through the Royalty Splitter Pallet, and verify the result on the block explorer.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"1."),(0,r.kt)("td",{parentName:"tr",align:null},"Royalty Splitter Pallet"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"royaltySplitter(to:src_ipfs,amount:u256,tokenId:u256)")," For every request, Royalty Splitter Pallet will retrieve the SRC data, and split the incoming currency to its constituent owners based on the the ownership weights.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"2."),(0,r.kt)("td",{parentName:"tr",align:null},"Front-end"),(0,r.kt)("td",{parentName:"tr",align:null},"For every stream on the prototype frontend hosted on polkamusic.io, tokens are dispatched from the reward pool (a contract with $POLM tokens) to the Royalty Splitter, which will pay the artists as per the payment details in the SRC.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"3."),(0,r.kt)("td",{parentName:"tr",align:null},"Quorum Pallet Specification"),(0,r.kt)("td",{parentName:"tr",align:null},"A document outlining our mechanism to weed out the bad actors by introducing democratic trust scoring on submitted content")))),(0,r.kt)("p",null,"..."),(0,r.kt)("h2",{id:"future-plans"},"Future Plans"),(0,r.kt)("p",null,"After the milestones are completed, we plan to apply grants for Web3 Foundation General Grant or Substrate Builders Program during which we will be developing the following tems:"),(0,r.kt)("p",null,"1) Off-chain worker which processes the stream reports from the front-end database to generate user-centric royalty payouts.\n2) Smart Streaming Platform contract using which anybody will be able to issue a coin with its own inflationary properties, and payout artists accurately using that.\n3) Permissioned File Storage (using NFTs for granting permission) to distribute content to various SSPs."),(0,r.kt)("p",null,"We plan to make PolkaMusic the go-to protocol for music businesses wanting to adopt blockchain technology, or existing music blockchains to connect with Polkadot ecosystem and leverage the interoperability of music economies."),(0,r.kt)("p",null,"In the immediate short term, we have the following 3rd party SSPs/blockchains integrating into PolkaMusic once we are live:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://OneMusic.space"},"https://OneMusic.space")," - Works similar to soundcloud, tokenized via ONEM tokens."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://kuting.club"},"https://kuting.club")," - A Chinese Smart Streaming Platform with KUTING tokens."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://BitcoinMusic.org"},"https://BitcoinMusic.org")," - An industrial grade NFT platform for the Music industry, connecting to PolkaMusic to leverage PolkaBTC.")),(0,r.kt)("p",null,"The long term features would include:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Integrate traditional digital streaming platforms such as Spotify, Youtube etc to communicate accurate data (from SRCs), publish music and collect royalties on blockchain through cryptocurrency, paid out to the SRC which will split the currency automatically to the constituent rights holders."),(0,r.kt)("li",{parentName:"ul"},"A fundraising platform that collects the royalties from mainstream platforms and distributes to the artist and the fundraiser participants."),(0,r.kt)("li",{parentName:"ul"},"Artist Coins / NFTs - Artists can create their own coins/NFTs for their own creative usecases."),(0,r.kt)("li",{parentName:"ul"},"Store - A store contract to sell merchandise/products with Artist Coins as payment.")),(0,r.kt)("h2",{id:"additional-information-"},"Additional Information \u2795"),(0,r.kt)("p",null,"Storage: When a user creates a Smart Record Contract, she will be asked for the music file as well as the album cover. These files are saved on a centralized storage at the moment as anybody can download the files from ipfs with no benefit to the artist. Artist can individually choose the SSPs she would like to distribute the songs to, or can upload with them directly, and refer to the SRC Address for royalty payment purposes. In the future, we will implement decentralized file storage through IPFS with Access Control List, a permissioned version of IPFS where access is controlled by programmable smart contracts that contain an Access Control List (ACL). The modified ipfs client will serve files to the requestor only if the permission is approved in the ACL. This offers transparent, public and verifiable access without a central controller. Control is always in the hands of the data owner, the smart contract author. Every SSP will be required to run a ACL-IPFS node of their own."),(0,r.kt)("p",null,"It must be noted that the above mentioned file storage mechanisms are based on high latency storage solutions and is for data transfer between the artist and the SSPs. The SSPs will have to maintain a local cache in order to serve files to the end user."),(0,r.kt)("p",null,"Traditional Performing Rights Organizations: Every country has multiple local performing rights organizations who are running inefficient softwares with very high licensing costs. Such PROs can use a SSP Smart Contract instance to calculate royalties and send payments on the blockchain using currency of their choice."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Polkadot Buildathon Participation:\nPolkaMusic team will be participating in the Polkadot Buildathon event, during which we are implementing an NFT incentivization program where PolkaMusic streamers will receive free NFTs for the duration they listen for. The goals of the buildathon don't overlap with any of the milestones of the open-grant application. We will be transparent regarding the open-grant and the organizers/judges will be notified about this.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Are there any teams who have already contributed (financially) to your project?"))),(0,r.kt)("p",null,"No. This is currently a self-funded project."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Do you have a community of users or open-source developers who are contributing to your project?")),(0,r.kt)("p",null,"We have attracted 3 open-source developers. Apart from this, we are well connected in the music industry and we have 100+ artists willing to upload their songs."))}u.isMDXComponent=!0}}]);