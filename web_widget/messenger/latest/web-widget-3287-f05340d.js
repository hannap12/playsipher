"use strict";(globalThis.webpackChunk_zendesk_web_widget_messenger=globalThis.webpackChunk_zendesk_web_widget_messenger||[]).push([[3287],{51846:(e,t,n)=>{n.r(t),n.d(t,{default:()=>Se});var r=n(744),s=n(29798),i=n(15826),a=n(98049),o=n.n(a),l=n(12682),d=n(83839),c=n(14824),p=n(17255),u=n(7606);const h=p.ZP.div.withConfig({componentId:"sc-1q9fwvy-0"})(["position:absolute;left:0px;display:flex;align-items:center;justify-content:center;height:100%;width:100%;transition:top ","s ",";",""],.5,u.dF,(e=>"entering"===e.state||"entered"===e.state?(0,p.iv)(["top:0;"]):(0,p.iv)(["top:",";"],e.hiddenPosition)));var m=n(55786);const x=e=>{let{isVisible:t,hiddenPosition:n,children:r}=e;return(0,m.jsx)(c.ZP,{in:t,timeout:500,children:e=>(0,m.jsx)(h,{state:e,hiddenPosition:n,"aria-hidden":"exited"===e,children:r})})};x.propTypes={isVisible:o().bool,hiddenPosition:o().string,children:o().node};const f=x;var g=function(e){return(0,m.jsx)("svg",{...e,children:(0,m.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",fill:"currentColor",d:"M20.1005 2.7169L10.9931 11.8244C10.4724 12.3451 9.62815 12.3451 9.10745 11.8244L-8.00829e-06 2.7169L1.88561 0.831278L10.0503 8.99593L18.2149 0.831278L20.1005 2.7169Z"})})};g.defaultProps={xmlns:"http://www.w3.org/2000/svg",width:"21",height:"13",viewBox:"0 0 21 13",focusable:"false",role:"presentation"};var b=function(e){return(0,m.jsx)("svg",{...e,children:(0,m.jsx)("path",{d:"M10,18 L6,22 L6,18 L10,18 Z M17,6 C19.7614237,6 22,8.23857625 22,11 C22,13.7614237 19.7614237,16 17,16 L17,16 L7,16 C4.23857625,16 2,13.7614237 2,11 C2,8.23857625 4.23857625,6 7,6 L7,6 Z",transform:"translate(12.000000, 14.000000) scale(-1, 1) translate(-12.000000, -14.000000) "})})};b.defaultProps={width:"24px",height:"24px",viewBox:"0 0 24 24",version:"1.1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"};const v=(0,p.ZP)(g).withConfig({componentId:"sc-1k07fow-0"})(["path{fill:",";}"],(e=>e.theme.messenger.colors.primaryText)),w=(0,p.ZP)(b).withConfig({componentId:"sc-1k07fow-1"})(["width:60% !important;height:60% !important;path{fill:",";}",""],(e=>e.theme.messenger.colors.primaryText),(e=>"left"===e.position&&"\n    transform: scaleX(-1);\n  ")),E=e=>{let{isOpen:t,position:n}=e;return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(f,{isVisible:!t,hiddenPosition:"-100%",children:(0,m.jsx)(w,{position:n})}),(0,m.jsx)(f,{isVisible:t,hiddenPosition:"100%",children:(0,m.jsx)(v,{})})]})};E.propTypes={isOpen:o().bool,position:o().oneOf(["left","right"])};const k=E;var y=n(87261);const C=p.ZP.div.withConfig({componentId:"sc-1w3tvxe-0"})(["width:",";height:",";border-radius:",";box-shadow:rgb(36,36,36,0.15) 0px 20px 30px 0px;display:flex;align-items:center;justify-content:center;background-color:"," !important;"],(e=>e.size??"100%"),(e=>e.size??"100%"),(e=>S(e.shape,e.shapeSettings)),(e=>e.theme.messenger.colors.primary)),j=(0,p.ZP)(y.hU).withConfig({componentId:"sc-1w3tvxe-1"})(["&&&{position:relative;overflow:hidden;border-radius:",";width:100%;height:100%;background-color:",";&:active{box-shadow:none;}&:focus{box-shadow:none;}&[data-garden-focus-visible]{box-shadow:inset ",";}}"],(e=>S(e.shape,e.shapeSettings)),(e=>e.theme.messenger.colors.primary),(e=>e.theme.shadows.md(e.theme.messenger.colors.primaryText))),S=(e,t)=>{switch(e){case l._c.circle:return l.UW.circle;case l._c.square:return t?.borderRadius?`${t.borderRadius}px`:l.UW.square;default:return"0"}},Z=(0,i.forwardRef)(((e,t)=>{let{shape:n,shapeSettings:r,isOpen:s,onClick:i,position:a,size:o,unreadCount:l}=e;const{launcher:{openWindowAriaLabel:c,closeWindowAriaLabel:p},ariaLabels:{unreadMessagesCount:{oneUnreadMessage:u,moreThanOneUnreadMessage:h}}}=(0,d.Z)();let x;x=1===l?`, ${u}`:l>1?`, ${h(l)}`:"";const f=s?p:`${c}${x}`;return(0,m.jsx)(C,{ref:t,size:o,shape:n,shapeSettings:r,children:(0,m.jsx)(j,{shape:n,shapeSettings:r,onClick:i,"aria-label":f,isPill:!1,onKeyDown:()=>{},children:(0,m.jsx)(k,{isOpen:s,position:a})})})}));Z.propTypes={shape:o().oneOf(Object.keys(l._c)),shapeSettings:o().shape({borderRadius:o().string}),isOpen:o().bool,onClick:o().func,position:o().oneOf(Object.keys(l.Wo)),size:o().string},Z.defaultProps={size:"64px"};const O=Z;var _=n(21110),L=n(40711),T=n(77588),R=n(4755),I=n(10586),P=n(57957),$=n(47139),Y=n(92265),F=n(67016),z=n(69276),D=n(13672),W=n(69738),M=n(75006),N=n(65083),X=n(99377),U=n(28788),B=n(92795),H=n(90482);const V=`ww-${(0,n(25474).Z)()}`,K=`${V}-launcherOnOpen`,A=`${V}-widgetOnLoad`,q=`\n        @-webkit-keyframes ${K} {\n          0% {\n            -webkit-transform: translateY(0px) rotate(0deg);\n                    transform: translateY(0px) rotate(0deg);\n          }\n\n          30% {\n            -webkit-transform: translateY(-5px) rotate(2deg);\n                    transform: translateY(-5px) rotate(2deg);\n          }\n\n          60% {\n            -webkit-transform: translateY(0px) rotate(0deg);\n                    transform: translateY(0px) rotate(0deg);\n          }\n\n\n          90% {\n            -webkit-transform: translateY(-1px) rotate(0deg);\n                    transform: translateY(-1px) rotate(0deg);\n\n          }\n\n          100% {\n            -webkit-transform: translateY(-0px) rotate(0deg);\n                    transform: translateY(-0px) rotate(0deg);\n          }\n        }\n        @keyframes ${K} {\n          0% {\n            -webkit-transform: translateY(0px) rotate(0deg);\n                    transform: translateY(0px) rotate(0deg);\n          }\n\n          30% {\n            -webkit-transform: translateY(-5px) rotate(2deg);\n                    transform: translateY(-5px) rotate(2deg);\n          }\n\n          60% {\n            -webkit-transform: translateY(0px) rotate(0deg);\n                    transform: translateY(0px) rotate(0deg);\n          }\n\n\n          90% {\n            -webkit-transform: translateY(-1px) rotate(0deg);\n                    transform: translateY(-1px) rotate(0deg);\n\n          }\n\n          100% {\n            -webkit-transform: translateY(-0px) rotate(0deg);\n                    transform: translateY(-0px) rotate(0deg);\n          }\n        }\n\n        @keyframes ${A} {\n          0% {\n            opacity: 0;\n          }\n          100% {\n            opacity: 1;\n          }\n        }\n\n        @-webkit-keyframes ${A} {\n          0% {\n            opacity: 0;\n          }\n          100% {\n            opacity: 1;\n          }\n        }\n      `,G=e=>{let{children:t}=e;const n=(0,s.v9)(R.FB),r=(0,s.v9)(N.l),a=(0,s.v9)(N.V),o=(0,s.v9)(P.bt),d=(0,s.v9)(L.Y4),c=(0,s.v9)(P.KK),p=(0,s.v9)(L.H0),u=(0,s.v9)(L.nx),{horizontal:h,vertical:x}=(0,s.v9)(P.Xf),f=x>_.rR,g=(0,s.v9)(z.oD),b=(0,s.v9)(U.uC),v=(0,M.Z)(),{isZoomedIn:w}=(0,W.Z)(),E=!r&&!a,k=S(p,u),y=(0,s.oR)(),C=(0,i.useCallback)((()=>{let e=v("embeddable_framework.messenger.launcher.frame.title");return b===H.Q.Successful&&(e=0===g?v("embeddable_framework.messenger.launcher.frame.no_new_messages_title"):1===g?v("embeddable_framework.messenger.launcher.frame.one_new_message_title"):v("embeddable_framework.messenger.launcher.frame.new_messages_title",{count:g})),e}),[b,g]);let j=[];return d&&j.push(`${A} 0.2s ease-in ${X.e}s forwards`),n&&E&&j.push(`${K} ${l.Aq}s ${_.dF}`),(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("style",{dangerouslySetInnerHTML:{__html:q}}),(0,m.jsx)(D.ZP,{title:C(),hidden:!d,id:"launcher",style:{height:_.Wd,width:_.Wd,position:"fixed",bottom:w&&f?_.rR:x,[o]:h,border:0,marginTop:0,opacity:0,boxShadow:_.rP,animation:j.join(", "),zIndex:c,borderRadius:k},onKeyDown:e=>{(0,Y.uZ)(e,y)},children:(0,m.jsx)(B.Z,{setBackgroundColor:!0,children:t})})]})};G.propTypes={children:o().node};const Q=G,J=()=>{const e=(0,s.I0)(),t=(0,s.v9)(R.FB),n=(0,s.v9)(P.bt),r=(0,s.v9)(L.H0),a=(0,s.v9)(L.nx),o=(0,s.v9)($.SD),l=(0,i.useRef)(null),d=(0,s.v9)(z.oD);return(0,i.useEffect)((()=>{F.Z.markOnce("launcher_rendered")}),[]),(0,i.useEffect)((()=>((0,Y.ui)("refLauncher",l),T.I(l.current),()=>{T.O(l.current)})),[l]),o?(0,m.jsx)(Q,{children:(0,m.jsx)(O,{ref:l,isOpen:t,onClick:()=>{F.Z.markOnce("launcher_clicked"),e((0,I.Gx)())},position:n,shape:r,shapeSettings:a,size:`${_.Wd}px`,unreadCount:d})}):null};var ee=n(39707),te=n(93074),ne=n(26364),re=n(52696),se=n(59563),ie=n(68566),ae=n(24489),oe=n(5527),le=n(21062),de=n(66064),ce=n(78005),pe=n(51383);const ue=()=>{const e=(0,s.I0)(),t=(0,s.v9)(R.FB),n=(0,s.v9)(re.Rr),r=(0,s.v9)(ne.pd),a=(0,s.v9)($.SD),o=(0,i.useRef)(n),l=(0,s.v9)(pe.uY),[d,c]=(0,i.useState)(!1);n&&(o.current=!0),(0,i.useLayoutEffect)((()=>{t&&o.current&&e((0,re.rh)())}),[t]),(0,i.useEffect)((()=>{l&&!d&&c(!0)}),[l]);const p=(0,M.Z)(),u=p("embeddable_framework.messenger.launcher_label.close_v2"),h=p("embeddable_framework.messenger.launcher_label.close_v3"),x=p("embeddable_framework.messenger.launcher_label.frame.title"),f=n&&a&&!d,g=(0,i.useRef)({}),{onClickAnimate:b,animateHide:v}=(0,de.Z)({isLabelVisible:f,refs:g}),{maxWidth:w,messageContainerHeight:E,messageFrameHeight:k,messageFrameWidth:y,setFrameDimensions:C}=(0,ce.Z)({refs:g,isIconNextToMessage:!0});return f?(0,m.jsx)(se.Z,{children:(0,m.jsxs)(ie.Z,{children:[(0,m.jsx)(ae.Z,{title:u,ref:e=>g.current.closeFrame=e,children:(0,m.jsx)(ee.Z,{ariaLabel:h,onClick:()=>{v((()=>{e((0,re.rh)())}))}})}),(0,m.jsx)(oe.Z,{ref:e=>g.current.messageFrame=e,title:x,maxWidth:w,messageFrameWidth:y,messageFrameHeight:k,children:(0,m.jsx)(le.E,{maxMessageContainerHeight:E,children:(0,m.jsx)(te.Z,{message:r,maxWidth:w,onClick:()=>{b((()=>{e((0,I.lF)())}))},onRender:C})})})]})}):null};var he=n(21659);const me=(0,i.lazy)((()=>n.e(3290).then(n.bind(n,83290)))),xe=()=>{const[e,t]=(0,i.useState)(!1),n=(0,s.v9)(he.u5);return(0,i.useEffect)((()=>{n&&t(!0)}),[n]),(0,m.jsx)(i.Suspense,{fallback:null,children:e&&(0,m.jsx)(me,{})})},fe=p.ZP.div.withConfig({componentId:"sc-1o8glcn-0"})(["height:","px;min-width:","px;color:",";background-color:",";border-radius:","px;display:flex;justify-content:center;align-items:center;font-size:14px;padding:0 6px;",""],20,20,(e=>e.theme.palette.white),(e=>e.theme.palette.red[500]),20,(e=>{let{position:t}=e;return`margin-${"right"===t?"left":"right"}: auto`})),ge=p.ZP.div.withConfig({componentId:"sc-1o8glcn-1"})(["font-size:12px;"]),be=e=>{let{unreadCount:t=0}=e;const n=(0,s.I0)(),r=Math.min(t,99),i=(0,s.v9)(P.bt);return(0,m.jsx)("div",{onClick:()=>{n((0,I.Gx)())},"aria-hidden":"true",style:{cursor:"pointer",width:_.uL+20,display:"flex"},children:(0,m.jsxs)(fe,{position:i,"data-testid":"unread-indicator-container",children:[r,t>99&&(0,m.jsx)(ge,{children:"+"})]})})};be.propTypes={unreadCount:o().number};const ve=be,we=(0,p.vJ)(["html{background-color:transparent;}"]),Ee=e=>{let{children:t}=e;const n=(0,s.v9)(L.Y4),r=(0,s.v9)(P.bt),i=(0,s.v9)(P.KK),a=(0,M.Z)(),{vertical:o,horizontal:l}=(0,s.v9)(P.Xf),d=o>_.rR,{isZoomedIn:c}=(0,W.Z)();return(0,m.jsx)(D.ZP,{tabIndex:"-1",title:a("embeddable_framework.messenger.unread_indicator.frame.title"),hidden:!n,style:{zIndex:i,height:_.uL,width:_.uL+20,position:"fixed",bottom:c&&d?_.jX.bottom(_.rR):_.jX.bottom(o),[r]:"right"===r?_.jX.right(l):_.jX.left(l),border:0,marginTop:0},children:(0,m.jsx)(B.Z,{children:(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(we,{}),t]})})})};Ee.propTypes={children:o().node};const ke=Ee,ye=e=>{let{unreadCount:t,isWidgetOpen:n}=e;return n||0===t?null:(0,m.jsx)(ke,{children:(0,m.jsx)(ve,{unreadCount:t})})};ye.propTypes={unreadCount:o().number,isWidgetOpen:o().bool};const Ce=ye,je=()=>{const e=(0,s.v9)(z.oD),t=(0,s.v9)(R.FB);return(0,m.jsx)(Ce,{unreadCount:e,isWidgetOpen:t})},Se=e=>{let{store:t,container:n,callback:i=null}=e;r.render((0,m.jsxs)(s.zt,{store:t,children:[(0,m.jsx)(xe,{}),(0,m.jsx)(ue,{}),(0,m.jsx)(J,{}),(0,m.jsx)(je,{})]}),n,i)}},65611:(e,t,n)=>{n.d(t,{dS:()=>c,Vd:()=>p,$l:()=>o,hQ:()=>i,yx:()=>l,Oz:()=>a,wR:()=>d,N7:()=>s,b:()=>u});var r=n(21110);const s="0px 20px 30px rgba(23, 73, 77, 0.15)",i="ZD-campaigns",a=280,o=40,l=40,d="20px",c=[{opacity:0},{opacity:1}],p={duration:300,fill:"forwards",easing:"ease-in-out"},u=e=>r.$i+r.Wd+e},77588:(e,t,n)=>{n.d(t,{I:()=>s,O:()=>i});var r=n(24430);const s=e=>{try{e.addEventListener("click",(()=>{(0,r.Il)()}),{once:!0}),e.addEventListener("input",(()=>{(0,r.Il)()}),{once:!0})}catch{}},i=e=>{try{e.removeEventListener("click",(()=>{(0,r.Il)()})),e.removeEventListener("input",(()=>{(0,r.Il)()}))}catch{}}},14824:(e,t,n)=>{n.d(t,{ZP:()=>f});var r=n(76681),s=n(69314),i=(n(98049),n(15826)),a=n(744);const o=!1,l=i.createContext(null);var d="unmounted",c="exited",p="entering",u="entered",h="exiting",m=function(e){function t(t,n){var r;r=e.call(this,t,n)||this;var s,i=n&&!n.isMounting?t.enter:t.appear;return r.appearStatus=null,t.in?i?(s=c,r.appearStatus=p):s=u:s=t.unmountOnExit||t.mountOnEnter?d:c,r.state={status:s},r.nextCallback=null,r}(0,s.Z)(t,e),t.getDerivedStateFromProps=function(e,t){return e.in&&t.status===d?{status:c}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?n!==p&&n!==u&&(t=p):n!==p&&n!==u||(t=h)}this.updateStatus(!1,t)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var e,t,n,r=this.props.timeout;return e=t=n=r,null!=r&&"number"!=typeof r&&(e=r.exit,t=r.enter,n=void 0!==r.appear?r.appear:t),{exit:e,enter:t,appear:n}},n.updateStatus=function(e,t){void 0===e&&(e=!1),null!==t?(this.cancelNextCallback(),t===p?this.performEnter(e):this.performExit()):this.props.unmountOnExit&&this.state.status===c&&this.setState({status:d})},n.performEnter=function(e){var t=this,n=this.props.enter,r=this.context?this.context.isMounting:e,s=this.props.nodeRef?[r]:[a.findDOMNode(this),r],i=s[0],l=s[1],d=this.getTimeouts(),c=r?d.appear:d.enter;!e&&!n||o?this.safeSetState({status:u},(function(){t.props.onEntered(i)})):(this.props.onEnter(i,l),this.safeSetState({status:p},(function(){t.props.onEntering(i,l),t.onTransitionEnd(c,(function(){t.safeSetState({status:u},(function(){t.props.onEntered(i,l)}))}))})))},n.performExit=function(){var e=this,t=this.props.exit,n=this.getTimeouts(),r=this.props.nodeRef?void 0:a.findDOMNode(this);t&&!o?(this.props.onExit(r),this.safeSetState({status:h},(function(){e.props.onExiting(r),e.onTransitionEnd(n.exit,(function(){e.safeSetState({status:c},(function(){e.props.onExited(r)}))}))}))):this.safeSetState({status:c},(function(){e.props.onExited(r)}))},n.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},n.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(r){n&&(n=!1,t.nextCallback=null,e(r))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},n.onTransitionEnd=function(e,t){this.setNextCallback(t);var n=this.props.nodeRef?this.props.nodeRef.current:a.findDOMNode(this),r=null==e&&!this.props.addEndListener;if(n&&!r){if(this.props.addEndListener){var s=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],i=s[0],o=s[1];this.props.addEndListener(i,o)}null!=e&&setTimeout(this.nextCallback,e)}else setTimeout(this.nextCallback,0)},n.render=function(){var e=this.state.status;if(e===d)return null;var t=this.props,n=t.children,s=(t.in,t.mountOnEnter,t.unmountOnExit,t.appear,t.enter,t.exit,t.timeout,t.addEndListener,t.onEnter,t.onEntering,t.onEntered,t.onExit,t.onExiting,t.onExited,t.nodeRef,(0,r.Z)(t,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return i.createElement(l.Provider,{value:null},"function"==typeof n?n(e,s):i.cloneElement(i.Children.only(n),s))},t}(i.Component);function x(){}m.contextType=l,m.propTypes={},m.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:x,onEntering:x,onEntered:x,onExit:x,onExiting:x,onExited:x},m.UNMOUNTED=d,m.EXITED=c,m.ENTERING=p,m.ENTERED=u,m.EXITING=h;const f=m},7606:(e,t,n)=>{n.d(t,{ZP:()=>C,dF:()=>s,eR:()=>k,oQ:()=>y});var r=n(17255);const s="cubic-bezier(0.66, 0, 0.12, 1)",i=function(){return{duration:.3,delay:0,timing:"linear",...arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}}};let a=0;const o=i({delay:a,timing:s,duration:.15}),l=i({delay:a,timing:"ease"}),d=i({delay:a,duration:0}),c=i({delay:a,duration:0}),p=i({delay:a,duration:0}),u=i({delay:a}),h=i({delay:a,duration:.2,timing:"linear"});a=.15;const m=i({delay:a,duration:.15});a=.3;const x=i({delay:a,duration:.5,fill:"both"}),f=i({delay:a,duration:.3}),g=i({delay:a,duration:.3}),b=i({delay:a,duration:0});a=.6;const v=i({delay:a,timing:s});a=.7;const w=i({delay:a,duration:0});a=.9;const E=i({delay:a,timing:"ease"}),k=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return n.map((t=>`${t} ${e.duration}s ${e.timing} ${e.delay}s`)).join(", ")},y=(e,t)=>(0,r.iv)([""," ","s "," ","s ",""],t,e.duration,e.timing,e.delay,e.fill),C={tailEnter:v,tailExit:o,textEnter:E,textExit:l,messageBorder:m,messageEnter:x,messageStatusOpacity:u,messageColor:h,existingRepliesEnter:d,freshRepliesEnter:w,repliesExit:c,repliesFadeIn:f,receiptEnter:p,receiptReenter:g,receiptExit:b}}}]);