(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(7821)}])},7319:function(e,t,n){"use strict";n.d(t,{Z:function(){return v}});var r=n(5893),i=n(7294),a=n(9140),o=n.n(a),s=n(5675),l=n.n(s),c=n(1664),d=n.n(c);function p(e){let{current:t}=e,[n,a]=(0,i.useState)(!1),[s,c]=(0,i.useState)(!0),[p,h]=(0,i.useState)(0);(0,i.useEffect)(()=>{let e=()=>{let e=window.pageYOffset;h(e),c(p>e)};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[p]);let m=()=>{a(!n)};return(0,r.jsx)("div",{id:"homeId",children:(0,r.jsx)("nav",{className:o().navBarWrapper,style:{top:s?0:"-6rem"},children:(0,r.jsxs)("div",{className:o().navBarMain,children:[(0,r.jsx)("div",{className:o().logoWrapper,children:(0,r.jsx)(l(),{src:"".concat("/soi/SOI-logo.png"),width:70,height:50,alt:"Picture of the author",priority:!0})}),(0,r.jsxs)("div",{className:o().optionsWrapper,children:[(0,r.jsxs)("div",{className:"".concat(o().optionsMenu," ").concat(n&&o().activeSidebar),children:[(0,r.jsx)("div",{className:o().option,children:(0,r.jsx)(d(),{href:"/#hero",scroll:!1,children:(0,r.jsx)("div",{children:"Home"})})}),(0,r.jsx)("div",{className:o().option,children:(0,r.jsx)(d(),{href:"/#eventsId",scroll:!1,children:(0,r.jsx)("div",{children:"Events"})})}),(0,r.jsx)("div",{className:o().option,children:(0,r.jsx)(d(),{href:"/#timeline",scroll:!1,children:(0,r.jsx)("div",{children:"Timeline"})})}),(0,r.jsx)("div",{className:o().option,style:{pointerEvents:"none"},children:(0,r.jsx)(d(),{href:"/team",style:{pointerEvents:"none"},children:(0,r.jsx)("div",{children:"Team"})})}),(0,r.jsx)("div",{className:o().option,children:(0,r.jsx)(d(),{href:"/#footer",scroll:!1,children:(0,r.jsx)("div",{children:"Contact"})})})]}),(0,r.jsx)("div",{className:o().hamBurgerWrapper,children:(0,r.jsxs)("div",{className:"".concat(o().hamburger," ").concat(n?o().active:o()["not-active"]),onClick:m,children:[(0,r.jsx)("span",{className:o().spans}),(0,r.jsx)("span",{className:o().spans}),(0,r.jsx)("span",{className:o().spans})]})})]})]})})})}var h=n(7889),m=n.n(h);let _=()=>{let e=e=>{let t=document.getElementById(e);t&&t.scrollIntoView({behavior:"smooth"})},t=new Date,n=t.getFullYear();return(0,r.jsx)("div",{id:"footer",children:(0,r.jsx)("div",{className:m().footer,children:(0,r.jsxs)("div",{className:m().footerDiv,children:[(0,r.jsx)("div",{className:m().footerImageWrapper,children:(0,r.jsx)("a",{href:"#",children:(0,r.jsx)(l(),{src:"".concat("/soi/Footer/oss_logo.png"),fill:!0,priority:!0,alt:"oss_logo"})})}),(0,r.jsxs)("div",{className:m().footerLinksWrapper,children:[(0,r.jsx)("div",{onClick:()=>e("hero"),"aria-current":"page",className:"".concat(m().footerlink," ").concat(m().navLink),children:"Home"}),(0,r.jsx)("div",{onClick:()=>e("eventsId"),className:"".concat(m().footerlink," ").concat(m().navLink),children:"Events"})]}),(0,r.jsxs)("div",{className:m().footerContactWrapper,children:[(0,r.jsx)("div",{children:(0,r.jsx)("a",{href:"mailto:gstech@iitdh.ac.in@",className:m().footerlink,children:"gstech@iitdh.ac.in"})}),(0,r.jsx)("div",{children:(0,r.jsx)("a",{href:"mailto:oss@iitdh.ac.in@",className:m().footerlink,children:"oss@iitdh.ac.in"})})]}),(0,r.jsxs)("div",{className:m().rightFooterWrapper,children:[(0,r.jsx)("div",{className:m().footerIconsWrapper,children:(0,r.jsx)("a",{href:"https://www.instagram.com/technical.council_iitdh/",target:"_blank",className:m().footerlink,children:(0,r.jsx)("img",{src:"https://uploads-ssl.webflow.com/60da2de038a15fdb730c5608/62f6a8eaaf7b5b57d23c61a3_Instagram%20White.svg",loading:"lazy",alt:"White Instagram Icon",className:"socialmediaicon"})})}),(0,r.jsxs)("div",{children:["\xa9 Copyright - ",n," SOI all right reserved"]})]})]})})})};function v(e){let{children:t}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(p,{}),t,(0,r.jsx)(_,{})]})}},7821:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return y}});var r=n(5893),i=n(9008),a=n.n(i),o=n(7319),s=n(2111),l=n.n(s),c=n(5675),d=n.n(c),p=n(7294),h=n(9382),m=n(6546);let _="/soi";function v(){let e=(0,p.useRef)();return h.ZP.registerPlugin(m.ScrollTrigger),(0,p.useEffect)(()=>{let t=e.current,n=h.ZP.timeline({scrollTrigger:{trigger:t,start:"top bottom",end:"bottom top",scrub:1}});n.to(t,{rotation:-30})},[]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:"".concat(l().heroWrapper),id:"hero",children:[(0,r.jsx)("div",{className:l().heroBgContainer,children:(0,r.jsx)(d(),{src:"".concat(_+"/Hero/hero-bg.svg"),priority:!0,fill:!0,style:{objectFit:"cover"}})}),(0,r.jsx)("div",{className:"".concat(l().hero),children:(0,r.jsxs)("div",{className:l().heroContentWrapper,children:[(0,r.jsxs)("div",{className:l().heroMain,children:[(0,r.jsx)("h1",{children:"Summer of Innovation 2023"}),(0,r.jsxs)("div",{className:l().heroQuoteWrapper,children:[(0,r.jsx)("div",{className:l().styleBar}),(0,r.jsx)("div",{className:l().Quote,children:"This Summer Conquer your fallacies and carve your finesse."})]})]}),(0,r.jsx)("div",{className:l().heroArtWrapper,children:(0,r.jsx)(d(),{src:"".concat(_+"/Hero/hero-art.svg"),fill:!0,priority:!0})})]})})]}),(0,r.jsxs)("div",{className:l().aboutWrapper,children:[(0,r.jsx)("div",{className:l().aboutWheelWrapper,ref:e,children:(0,r.jsx)(d(),{src:"".concat(_+"/Events/Blue_Wheel_Spcok.svg"),fill:!0,priority:!0})}),(0,r.jsx)("div",{className:"page-wrapper",children:(0,r.jsxs)("div",{className:l().aboutMain,children:[(0,r.jsx)("div",{className:l().aboutStyleStar,children:(0,r.jsx)(d(),{src:"".concat(_+"/Hero/style-star.svg"),fill:!0,priority:!0})}),(0,r.jsx)("div",{className:l().aboutTitle,children:(0,r.jsx)("h1",{children:"Overview"})}),(0,r.jsx)("div",{className:l().aboutContent,children:"The fourth edition of Summer of Innovation is a platform for honing one’s technical skills and promoting tech culture in our institute. Lasting 3 months, the event comprises of problem statements from multiple domains and the participants are allowed to take part in any number of them. The event is a result of the contribution of about every technical organization involved with tech in our institute. This year, the event shall last from 27th of May and will span majorly the months of June and July, allowing the participants to learn the required technical skills from scratch and then implementing them in this period."})]})}),(0,r.jsx)("div",{className:l().aboutBgWrapper,children:(0,r.jsx)(d(),{src:"".concat(_+"/Hero/hero-bg-2.svg"),fill:!0,style:{objectFit:"cover"},priority:!0})})]})]})}var u=n(5802),g=n.n(u),x=n(4991),f=n.n(x);let j="/soi";function b(e){let{leftSideImage:t,data:n,number:i}=e;return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{className:f().eventCardWrapper,children:(0,r.jsxs)("div",{className:f().eventCardMain,children:[(0,r.jsxs)("div",{className:"".concat(f().eventInfo," ").concat(t&&f().eventInfoLeft),children:[(0,r.jsxs)("div",{className:f().eventNumber,children:[(0,r.jsx)("h1",{children:i<10?"0".concat(i):i}),(0,r.jsx)("div",{className:f().styleDiv})]}),(0,r.jsx)("div",{className:f().eventName,children:(0,r.jsx)("h1",{children:n.heading})}),(0,r.jsx)("div",{className:f().eventInfo,children:n.content}),(0,r.jsx)("div",{className:f().knowMore,children:(0,r.jsxs)("a",{href:n.knowMoreLink,target:"_blank",children:[(0,r.jsx)("div",{children:"Know More"}),(0,r.jsx)("div",{className:f().buttonImage,children:(0,r.jsx)(d(),{src:"".concat(j+"/Events/event-button.svg"),fill:!0,priority:!0,alt:"button"})})]})})]}),(0,r.jsx)("div",{className:"".concat(f().eventImageWrapper," ").concat(t&&f().eventImageWrapperLeft),children:(0,r.jsx)("div",{className:f().eventImageCard,children:(0,r.jsx)(d(),{src:j+n.image,fill:!0})})})]})})})}var C=[{heading:"Toolset Unbounded",content:"The problem Statement involves developing a GUI frontend with a user-friendly UI/UX. It includes a secure signup/login page with password/OTP protection. Implement a lossless image and text compression/decompression algorithms. Compressed images are stored in a secure database, and a file management system allows users to add/delete their images. You are free to choose various components, and exploration is encouraged.",image:"/Events/IMAGE_CODING_CLUB_01.jpg",knowMoreLink:"https://drive.google.com/file/d/1HV3reLcxYTSBijPtsfizEHURbx_C__c_/view?usp=sharing"},{heading:"Alokin - Digital",content:"You have to design a hardware module(i.e. come up with the\n      code) using the programming language- Verilog/VHDL with its\n      functionalities similar to those found in a Washing Machine\n      Controller.",image:"/Events/Alokin.jpeg",knowMoreLink:"https://drive.google.com/file/d/1gYahKSXWV9wx5_pXfKa22FHRrT18kFV4/view?usp=sharing"},{heading:"Alokin - Analog",content:"You have to a)Find out some parameters of NMOS and PMOS, b)Design a fully functional Operational Amplifier, which should meet certain specs in Ngspice simulator.",image:"/Events/Alokin_Analog.jpg",knowMoreLink:"https://drive.google.com/file/d/1UpLDai46hG_Xhu4E1YjxeHKwe82lXAaV/view?usp=sharing"}];function N(){let e=(0,p.useRef)();return h.ZP.registerPlugin(m.ScrollTrigger),(0,p.useEffect)(()=>{let t=e.current,n=h.ZP.timeline({scrollTrigger:{trigger:t,start:"top bottom",end:"bottom top",scrub:1}});n.to(t,{rotation:30})},[]),(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{id:"eventsId",className:g().eventsWrapper,children:[(0,r.jsx)("div",{className:g().eventSunWrapper,ref:e,children:(0,r.jsx)(d(),{src:"/soi/Events/events-sun-1.svg",fill:!0,priority:!0})}),(0,r.jsxs)("div",{className:"".concat(g().eventsMain," page-wrapper"),children:[(0,r.jsx)("div",{className:g().eventsHeading,children:(0,r.jsx)("div",{className:g().text_block,children:(0,r.jsx)("h2",{children:"Events"})})}),(0,r.jsx)("div",{className:g().eventsCardWrapper,children:C.map((e,t)=>(0,r.jsx)(b,{data:e,number:t+1,leftSideImage:!(t%2)},t))})]})]})})}var k=n(4167),W=n.n(k),B=n(4313),w=[{title:"Toolset Unbounded",location:"Coding Club, IIT Dharwad",description:"Registrations Started.",date:"27th May - 29th May",color:"#B983FF",icon:"CodingClub"},{title:"Alokin - Analog",location:"",description:"First Checkpoint",date:"4th June EOD",color:"#FFB84C",icon:"Alokin"},{title:"Toolset Unbounded",location:"Coding Club, IIT Dharwad",description:"First Report Submission",date:"5th June EOD",color:"#B983FF",icon:"CodingClub"},{title:"Alokin - Digital",location:"",description:"First Checkpoint",date:"5th June EOD",color:"#FFB84C",icon:"Alokin"},{title:"Toolset Unbounded",location:"Coding Club, IIT Dharwad",description:"Second Report Submission",date:"12th June EOD",color:"#B983FF",icon:"CodingClub"},{title:"Alokin - Analog",location:"",description:"Second Checkpoint",date:"16th June EOD",color:"#FFB84C",icon:"Alokin"},{title:"Toolset Unbounded",location:"Coding Club, IIT Dharwad",description:"Third Report Submission",date:"24th June EOD",color:"#B983FF",icon:"CodingClub"},{title:"Alokin - Digital",location:"",description:"Second Checkpoint",date:"24th June EOD",color:"#FFB84C",icon:"Alokin"},{title:"Alokin - Analog",location:"",description:"Third Checkpoint",date:"30th June EOD",color:"#FFB84C",icon:"Alokin"},{title:"Alokin - Digital",location:"",description:"Third Checkpoint",date:"30th June EOD",color:"#FFB84C",icon:"Alokin"},{title:"Toolset Unbounded",location:"Coding Club, IIT Dharwad",description:"Final Report Submission",date:"7th July EOD",color:"#B983FF",icon:"CodingClub"},{title:"Toolset Unbounded",location:"Coding Club, IIT Dharwad",description:"Project Submission, everything that you have worked past 6 weeks on.",date:"9th July EOD",color:"#B983FF",icon:"CodingClub"}];n(6477);var I=n(7814),E=n(9417);function F(){let e={CodingClub:E.dT$,Alokin:E.zvy};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{className:W().timelineWrapper,id:"timeline",style:{backgroundImage:"url(".concat("/soi","/Timeline/inspiration-geometry.png)")},children:(0,r.jsxs)("div",{className:"".concat(W().timelineMain," page-wrapper"),children:[(0,r.jsx)("div",{className:W().timelineHeading,children:(0,r.jsx)("div",{className:W().text_block,children:(0,r.jsx)("h2",{children:"Timeline"})})}),(0,r.jsx)("div",{className:W().verticalTimelineMain,children:(0,r.jsx)(B.VerticalTimeline,{children:w.map((t,n)=>(0,r.jsxs)(B.VerticalTimelineElement,{date:t.date,dateClassName:"date",className:"".concat(t.key/2?"timeline-right":"timeline-left"),iconStyle:{backgroundColor:t.color},icon:(0,r.jsx)(I.G,{icon:e[t.icon]}),children:[(0,r.jsx)("h2",{className:"vertical-timeline-element-title",children:t.title}),(0,r.jsx)("h5",{className:"vertical-timeline-element-subtitle",children:t.location}),(0,r.jsx)("p",{id:"description",children:t.description})]},n))})})]})})})}function y(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(a(),{children:[(0,r.jsx)("title",{children:"SOI 2023"}),(0,r.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,r.jsx)("link",{rel:"icon",href:"/soi/SOI_Favicon.png"})]}),(0,r.jsxs)(o.Z,{children:[(0,r.jsx)(v,{}),(0,r.jsx)(N,{}),(0,r.jsx)(F,{})]})]})}},9140:function(e){e.exports={navBarWrapper:"AppBar_navBarWrapper__r_j1W",navBarMain:"AppBar_navBarMain__EgszK",optionsWrapper:"AppBar_optionsWrapper__TYXCV",optionsMenu:"AppBar_optionsMenu__w7b_F",option:"AppBar_option__5X3Ov",logoImg:"AppBar_logoImg__h_O5y",activeOption:"AppBar_activeOption__n3J6J",hamBurgerWrapper:"AppBar_hamBurgerWrapper__quZLj",hamburger:"AppBar_hamburger__FZkR8",spans:"AppBar_spans__zvJ3j",active:"AppBar_active__m3gcs",topBar:"AppBar_topBar__UVB85","not-active":"AppBar_not-active__T_1aH",topBarRotate:"AppBar_topBarRotate__V__u_",middleBar:"AppBar_middleBar__nfZSV",middleBarScale:"AppBar_middleBarScale__rkVCo",bottomBar:"AppBar_bottomBar__lX5pK",bottomBarRotate:"AppBar_bottomBarRotate__yRkUW",activeSidebar:"AppBar_activeSidebar__UL9mV"}},4991:function(e){e.exports={eventCardWrapper:"EventCard_eventCardWrapper__QYP5E",eventCardMain:"EventCard_eventCardMain__q_HfA",eventInfo:"EventCard_eventInfo__y0gkm",eventInfoLeft:"EventCard_eventInfoLeft__ttVJS",eventImageWrapper:"EventCard_eventImageWrapper__RVtgP",eventImageWrapperLeft:"EventCard_eventImageWrapperLeft__726Q4",eventNumber:"EventCard_eventNumber__hhlff",eventName:"EventCard_eventName__Qwj8B",knowMore:"EventCard_knowMore__Tcb1s",styleDiv:"EventCard_styleDiv__qySFb",buttonImage:"EventCard_buttonImage__oe9bf",eventImageCard:"EventCard_eventImageCard__K62A0"}},5802:function(e){e.exports={eventsWrapper:"Events_eventsWrapper__fwPcA",eventsMain:"Events_eventsMain__kuire",eventsHeading:"Events_eventsHeading__DEprd",eventSunWrapper:"Events_eventSunWrapper__1SlUh",text_block:"Events_text_block__gMD8H"}},7889:function(e){e.exports={footer:"Footer_footer__nKPS_",footerDiv:"Footer_footerDiv__5QGhb",footerImageWrapper:"Footer_footerImageWrapper__MxzuF",footerLinksWrapper:"Footer_footerLinksWrapper__l3tQi",footerContactWrapper:"Footer_footerContactWrapper___l3Ki",footerIconsWrapper:"Footer_footerIconsWrapper__yDxbs",rightFooterWrapper:"Footer_rightFooterWrapper__7xgfC",navLink:"Footer_navLink__pyW7e"}},2111:function(e){e.exports={heroWrapper:"Hero_heroWrapper__cJ2Ja",hero:"Hero_hero__vHbB0",heroContentWrapper:"Hero_heroContentWrapper__95ink",heroMain:"Hero_heroMain__10g0f",heroQuoteWrapper:"Hero_heroQuoteWrapper__6Kb9g",Quote:"Hero_Quote__nUQfp",styleBar:"Hero_styleBar__s6HAJ",heroArtWrapper:"Hero_heroArtWrapper__hY1A9",aboutWrapper:"Hero_aboutWrapper__HEAE0",aboutWheelWrapper:"Hero_aboutWheelWrapper__XoqD1",aboutMain:"Hero_aboutMain__798rC",aboutStyleStar:"Hero_aboutStyleStar__6YZQE",aboutTitle:"Hero_aboutTitle__0lM6o",aboutContent:"Hero_aboutContent__04xjV",aboutBgWrapper:"Hero_aboutBgWrapper__p2GpK"}},4167:function(e){e.exports={timelineWrapper:"Timeline_timelineWrapper__31Fs7",timelineHeading:"Timeline_timelineHeading__aL1Wh",text_block:"Timeline_text_block__MceJ5",verticalTimelineMain:"Timeline_verticalTimelineMain__MpsMu"}}},function(e){e.O(0,[976,802,61,479,774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);