"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[6064],{70384:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var n=a(87462),i=(a(67294),a(3905));a(16758);const l={},r="cScale",o={unversionedId:"Applications/cScale",id:"Applications/cScale",title:"cScale",description:"This document will be part of the terms and conditions of your agreement and therefore needs to contain all the required information about the project. Don't remove any of the mandatory parts presented in bold letters or as headlines! Lines starting with a > (such as this one) can be removed.",source:"@site/docs/Applications/cScale.md",sourceDirName:"Applications",slug:"/Applications/cScale",permalink:"/Grants-Program/Applications/cScale",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Polkadot Light Client in C++",permalink:"/Grants-Program/Applications/c++polkadot-light-client"},next:{title:"Candle Auctions on Ink!",permalink:"/Grants-Program/Applications/candle_auction_ink"}},s={},d=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-",level:2},{value:"Overview",id:"overview",level:3},{value:"Project Details",id:"project-details",level:3},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team \ud83d\udc65",id:"team-",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Development Status \ud83d\udcd6",id:"development-status-",level:2},{value:"Fixed Int",id:"fixed-int",level:4},{value:"Compact Int",id:"compact-int",level:4},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1 - Working Product",id:"milestone-1---working-product",level:3},{value:"Milestone 2 - Additional testing",id:"milestone-2---additional-testing",level:3},{value:"Future Plans",id:"future-plans",level:2},{value:"Additional Information \u2795",id:"additional-information-",level:2}],p={toc:d};function m(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"cscale"},"cScale"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"This document will be part of the terms and conditions of your agreement and therefore needs to contain all the required information about the project. Don't remove any of the mandatory parts presented in bold letters or as headlines! Lines starting with a ",(0,i.kt)("inlineCode",{parentName:"p"},">")," (such as this one) can be removed."),(0,i.kt)("p",{parentName:"blockquote"},"See the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/w3f/Grants-Program/#pencil-process"},"Grants Program Process")," on how to submit a proposal.")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Team Name:")," Matthew Darnell (Individual)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Payment Address:")," ",(0,i.kt)("inlineCode",{parentName:"li"},"15ssDeS9peN9a3rDwFrV19YJ8oRffmphaE")," (BTC)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"https://github.com/w3f/Grants-Program/tree/master#level_slider-levels"},"Level"),":")," 1"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Status:")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/w3f/Grants-Program/pull/625#issuecomment-1047869564"},"Terminated"))),(0,i.kt)("h2",{id:"project-overview-"},"Project Overview \ud83d\udcc4"),(0,i.kt)("h3",{id:"overview"},"Overview"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"cScale is a SCALE codec implementation in C"),(0,i.kt)("li",{parentName:"ul"},"Currently there does not seem to be a working standalone implementation of this serialization codec in C"),(0,i.kt)("li",{parentName:"ul"},"A SCALE implementation would allow for the development of more desktop applications communicating with Substrate nodes"),(0,i.kt)("li",{parentName:"ul"},"I am developing this because I am interested in creating a simple and secure desktop Substrate wallet"),(0,i.kt)("li",{parentName:"ul"},"I already have a generally working product that I would also like to improve as I get suggestions")),(0,i.kt)("h3",{id:"project-details"},"Project Details"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Technology stack will be a simple C library, mostly in C99 with a few uses of C11 ",(0,i.kt)("inlineCode",{parentName:"li"},"_Generic"),". One dependency currently will be included which is an open sourced, single file, pure-header utf8 implementation useful for SCALE string encoding."),(0,i.kt)("li",{parentName:"ul"},"Makefile is included but can do simple CMakeLists.txt if preferred"),(0,i.kt)("li",{parentName:"ul"},"Supported Data Types will be:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Fixed Width Integers"),(0,i.kt)("li",{parentName:"ul"},"Compact/General Integers"),(0,i.kt)("li",{parentName:"ul"},"Booleans"),(0,i.kt)("li",{parentName:"ul"},"Options"),(0,i.kt)("li",{parentName:"ul"},"Vectors (and Strings)"),(0,i.kt)("li",{parentName:"ul"},"Enumerations"),(0,i.kt)("li",{parentName:"ul"},"Tuples"),(0,i.kt)("li",{parentName:"ul"},"User-Defined Data Structures"))),(0,i.kt)("li",{parentName:"ul"},"Some limitations and caveats:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"C does not support ",(0,i.kt)("inlineCode",{parentName:"li"},"uint128_t")," types. Possible options are to introduce a 3rd party dependency or consume ",(0,i.kt)("inlineCode",{parentName:"li"},"u128")," values encoded as ",(0,i.kt)("inlineCode",{parentName:"li"},"char*")," strings. GCC does provide a ",(0,i.kt)("inlineCode",{parentName:"li"},"uint128_t")," extension but I'm not sure how universal this is and C does not support sufficiently long literal int values. Currently I am able to encode from a hex-represented ",(0,i.kt)("inlineCode",{parentName:"li"},"u128")," but could consume decimal represented ",(0,i.kt)("inlineCode",{parentName:"li"},"char*")," strings if required."),(0,i.kt)("li",{parentName:"ul"},"Enumerations are tricky to implement as they are user-defined. I am able to construct a ",(0,i.kt)("inlineCode",{parentName:"li"},"struct")," which generates a custom enum type by consuming an array of strings of different types, e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"[Int, Bool]"),", but I am not sure how to make this very clean for the user."),(0,i.kt)("li",{parentName:"ul"},"A lack of templating and type inference makes encoding/decoding user-defined ",(0,i.kt)("inlineCode",{parentName:"li"},"struct")," values a little difficult. I am able to achieve this by defining a custom ",(0,i.kt)("inlineCode",{parentName:"li"},"struct")," which contains a ",(0,i.kt)("inlineCode",{parentName:"li"},"serialize")," as well as ",(0,i.kt)("inlineCode",{parentName:"li"},"deserialize")," function pointer. The user will be able to include this ",(0,i.kt)("inlineCode",{parentName:"li"},"struct")," in his data structure and assign his own custom function. This works fine, but again, it is a little more in depth for the end user than ideal."),(0,i.kt)("li",{parentName:"ul"},"With each of these, I would love feedback from others on how to improve the library!")))),(0,i.kt)("h3",{id:"ecosystem-fit"},"Ecosystem Fit"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The target audience are Desktop C/C++ developers who would like to be able to encode and decode Substrate API data"),(0,i.kt)("li",{parentName:"ul"},"Similar Projects",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Kagome (C++ and not intended for standalone library use)"),(0,i.kt)("li",{parentName:"ul"},"FinoaBanking substrate-c-tool (Has not been updated for over a year and is in unknown state of completion as far as I can tell)")))),(0,i.kt)("h2",{id:"team-"},"Team \ud83d\udc65"),(0,i.kt)("h3",{id:"team-members"},"Team members"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Matthew Darnell")),(0,i.kt)("h3",{id:"contact"},"Contact"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Contact Email:")," ",(0,i.kt)("a",{parentName:"li",href:"mailto:matthew.darnell@protonmail.com"},"matthew.darnell@protonmail.com"))),(0,i.kt)("h3",{id:"teams-experience"},"Team's experience"),(0,i.kt)("h3",{id:"team-code-repos"},"Team Code Repos"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/MatthewDarnell/iota-simplewallet"},"https://github.com/MatthewDarnell/iota-simplewallet")," -- IOTA C library"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/MatthewDarnell/redis_orderbook"},"https://github.com/MatthewDarnell/redis_orderbook")," -- Order matching engine in Rust")),(0,i.kt)("h2",{id:"development-status-"},"Development Status \ud83d\udcd6"),(0,i.kt)("p",null,"Currently have a basic working implementation. Generating a testing app, a basic cli app, and a statically linked library."),(0,i.kt)("p",null,"Some examples:"),(0,i.kt)("h4",{id:"fixed-int"},"Fixed Int"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},'scale_fixed_int fixed = { 0 };\nencode_int_to_fixed_int_scale(&fixed, (uint16_t)42);\nuint8_t serialized[64] = { 0 };\nsize_t serialized_len = 0;\nserialize_fixed_int(serialized, &serialized_len, &fixed);\n\nuint16_t output = 0;\ndecode_scale_fixed_int((void*)&output, &fixed);\n\nfor(int i=0; i < serialized_len; i++) printf("%02X", serialized[i]);\nprintf(" --- %u\\n", output);\n')),(0,i.kt)("p",null,"Prints:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"2A00 --- 42\n")),(0,i.kt)("h4",{id:"compact-int"},"Compact Int"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},' scale_compact_int compact = { 0 };\n  encode_compact(&compact, (uint32_t)69);\n  uint8_t serialized[64] = { 0 };\n  size_t serialized_len = 0;\n  char *output = decode_compact_to_hex(&compact);\n  serialize_compact_int(serialized, &serialized_len, &compact);\n  uint32_t decoded = strtoul(output, NULL, 16);\n  printf("SCALE=<");\n  for(int i=0; i < serialized_len; i++) printf("%02X", serialized[i]);\n  printf("> --- Hex=<%s> --- Decoded=<%u>\\n", output, decoded);\n  free(output);\n')),(0,i.kt)("p",null,"Prints:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"SCALE=<1501> --- Hex=<45> --- Decoded=<69>\n")),(0,i.kt)("h2",{id:"development-roadmap-"},"Development Roadmap \ud83d\udd29"),(0,i.kt)("h3",{id:"overview-1"},"Overview"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Total Estimated Duration:")," 1 month"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Full-Time Equivalent (FTE):"),"  1 FTE"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Total Costs:")," 10,000 USD, denominated in Bitcoin")),(0,i.kt)("h3",{id:"milestone-1---working-product"},"Milestone 1 - Working Product"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Estimated duration:")," 2 weeks"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"FTE:"),"  1"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Costs:")," 9,000 USD in BTC")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,i.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,i.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0a."),(0,i.kt)("td",{parentName:"tr",align:null},"License"),(0,i.kt)("td",{parentName:"tr",align:null},"GPLv3")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0b."),(0,i.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,i.kt)("td",{parentName:"tr",align:null},"I will provide a README with several examples as well as a .c file for each data type with several tests showing encoding and decoding. I will also provide a ",(0,i.kt)("inlineCode",{parentName:"td"},"docs")," folder containing a markdown file giving examples for each data type as well as commenting  each function in the main header file.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"1."),(0,i.kt)("td",{parentName:"tr",align:null},"Intermediate Structs"),(0,i.kt)("td",{parentName:"tr",align:null},"I will provide a set of Structs which represent SCALE data internally before being processed")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"2."),(0,i.kt)("td",{parentName:"tr",align:null},"Encode"),(0,i.kt)("td",{parentName:"tr",align:null},"I will provide a set of functions that encode data into intermediate structs as well as others to serialize them. Each will generate an array of ",(0,i.kt)("inlineCode",{parentName:"td"},"uint8_t*")," as well as a corresponding length")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"3."),(0,i.kt)("td",{parentName:"tr",align:null},"Decode"),(0,i.kt)("td",{parentName:"tr",align:null},"I will provide a set of functions that decode a valid SCALE ",(0,i.kt)("inlineCode",{parentName:"td"},"uint8_t*")," array into the appropriate intermediate struct as well as functions to deserialize the struct back into raw data")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"4."),(0,i.kt)("td",{parentName:"tr",align:null},"Testing"),(0,i.kt)("td",{parentName:"tr",align:null},"I will provide a testing application which tests each data type and ensures correctness")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"5."),(0,i.kt)("td",{parentName:"tr",align:null},"Basic CLI"),(0,i.kt)("td",{parentName:"tr",align:null},"I will provide a basic command line interface app which will encode/decode fixed width and compact integers")))),(0,i.kt)("h3",{id:"milestone-2---additional-testing"},"Milestone 2 - Additional testing"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Estimated duration:")," 1 month"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"FTE:"),"  1"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Costs:")," 1,000 USD in BTC")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,i.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,i.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0a."),(0,i.kt)("td",{parentName:"tr",align:null},"License"),(0,i.kt)("td",{parentName:"tr",align:null},"GPLv3")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0b."),(0,i.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,i.kt)("td",{parentName:"tr",align:null},"I will add several useful structs to the docs folder which represent actual Substrate data with their respective serialization functions. (AccountInfo, AccountData)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"1."),(0,i.kt)("td",{parentName:"tr",align:null},"Tests"),(0,i.kt)("td",{parentName:"tr",align:null},"I will work to provide more tests, preferably utilizing Rust FFI to compare against parity-scale-code results. This may or may not require some assistance as I have never used Rust FFI.")))),(0,i.kt)("h2",{id:"future-plans"},"Future Plans"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"I am writing this library to use in my own personal desktop wallet application"),(0,i.kt)("li",{parentName:"ul"},"I see a real need for it to allow the Substrate community to grow and I hope it makes it on the official list of ",(0,i.kt)("a",{parentName:"li",href:"https://substrate.dev/docs/en/knowledgebase/advanced/codec#implementations"},"Scale Implementations")),(0,i.kt)("li",{parentName:"ul"},"Long term I would be interested in improving this library to keep current with a possibly-evolving SCALE standard as well as getting help from other C devs making pull requests, which would be most welcome.")),(0,i.kt)("h2",{id:"additional-information-"},"Additional Information \u2795"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"How did you hear about the Grants Program?")," Shawn Tabrizi"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"This started as a personal project and I would like to assist in expanding the Substrate ecosystem by providing a critical element of its infrastructure in C")))}m.isMDXComponent=!0}}]);