(self.webpackChunkfacsalud_a_un_clic=self.webpackChunkfacsalud_a_un_clic||[]).push([[4054],{4054:(i,t,o)=>{"use strict";o.r(t),o.d(t,{ion_img:()=>r});var s=o(2322),e=o(7505);const r=class{constructor(i){(0,s.r)(this,i),this.ionImgWillLoad=(0,s.e)(this,"ionImgWillLoad",7),this.ionImgDidLoad=(0,s.e)(this,"ionImgDidLoad",7),this.ionError=(0,s.e)(this,"ionError",7),this.onLoad=()=>{this.ionImgDidLoad.emit()},this.onError=()=>{this.ionError.emit()}}srcChanged(){this.addIO()}componentDidLoad(){this.addIO()}addIO(){void 0!==this.src&&("undefined"!=typeof window&&"IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"isIntersecting"in window.IntersectionObserverEntry.prototype?(this.removeIO(),this.io=new IntersectionObserver(i=>{i[0].isIntersecting&&(this.load(),this.removeIO())}),this.io.observe(this.el)):setTimeout(()=>this.load(),200))}load(){this.loadError=this.onError,this.loadSrc=this.src,this.ionImgWillLoad.emit()}removeIO(){this.io&&(this.io.disconnect(),this.io=void 0)}render(){return(0,s.h)(s.H,{class:(0,e.b)(this)},(0,s.h)("img",{decoding:"async",src:this.loadSrc,alt:this.alt,onLoad:this.onLoad,onError:this.loadError,part:"image"}))}get el(){return(0,s.i)(this)}static get watchers(){return{src:["srcChanged"]}}};r.style=":host{display:block;-o-object-fit:contain;object-fit:contain}img{display:block;width:100%;height:100%;-o-object-fit:inherit;object-fit:inherit;-o-object-position:inherit;object-position:inherit}"}}]);