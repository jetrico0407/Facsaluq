(self.webpackChunkfacsalud_a_un_clic=self.webpackChunkfacsalud_a_un_clic||[]).push([[3111],{3111:(e,t,i)=>{"use strict";i.r(t),i.d(t,{KEYBOARD_DID_CLOSE:()=>a,KEYBOARD_DID_OPEN:()=>s,copyVisualViewport:()=>D,keyboardDidClose:()=>f,keyboardDidOpen:()=>u,keyboardDidResize:()=>b,resetKeyboardAssist:()=>r,setKeyboardClose:()=>l,setKeyboardOpen:()=>c,startKeyboardAssist:()=>h,trackViewportChanges:()=>y});const s="ionKeyboardDidShow",a="ionKeyboardDidHide";let o={},d={},n=!1;const r=()=>{o={},d={},n=!1},h=e=>{p(e),e.visualViewport&&(d=D(e.visualViewport),e.visualViewport.onresize=()=>{y(e),u()||b(e)?c(e):f(e)&&l(e)})},p=e=>{e.addEventListener("keyboardDidShow",t=>c(e,t)),e.addEventListener("keyboardDidHide",()=>l(e))},c=(e,t)=>{g(e,t),n=!0},l=e=>{w(e),n=!1},u=()=>!n&&o.width===d.width&&(o.height-d.height)*d.scale>150,b=e=>n&&!f(e),f=e=>n&&d.height===e.innerHeight,g=(e,t)=>{const i=new CustomEvent(s,{detail:{keyboardHeight:t?t.keyboardHeight:e.innerHeight-d.height}});e.dispatchEvent(i)},w=e=>{const t=new CustomEvent(a);e.dispatchEvent(t)},y=e=>{o=Object.assign({},d),d=D(e.visualViewport)},D=e=>({width:Math.round(e.width),height:Math.round(e.height),offsetTop:e.offsetTop,offsetLeft:e.offsetLeft,pageTop:e.pageTop,pageLeft:e.pageLeft,scale:e.scale})}}]);