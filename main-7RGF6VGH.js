import{a as st,c as mt,d as ct,e as dt,f as pt,g as ut,h as ft,i as gt,j as bt,l as yt}from"./chunk-MV5DXNLL.js";import"./chunk-HGBGWIKS.js";import{L as S,W as lt,X as M,a as $,b as J,c as K,d as tt,e as et,g as v,ga as C,h as ot,ha as ht,i as rt,ia as w,j as it,ja as x,k as nt,l as at}from"./chunk-ZHR6T33B.js";import"./chunk-IX6G3U3V.js";import{$ as c,Ba as O,Cb as g,Eb as Y,Fb as _,Gb as q,Hc as y,Ib as Z,Jb as G,Nb as m,Qa as N,Ra as p,Rb as u,Sa as j,Sb as W,T as R,Ua as B,V as A,W as I,Wa as L,Ya as H,Za as z,da as d,ea as T,ec as X,fa as E,ga as P,lb as U,nb as V,ob as Q,ta as F,tc as b,ub as l,vb as s,wb as f}from"./chunk-MTQ75YYG.js";import"./chunk-4CLCTAJ7.js";var At=["*",[["mat-toolbar-row"]]],It=["*","mat-toolbar-row"],Tt=(()=>{let t=class t{};t.\u0275fac=function(e){return new(e||t)},t.\u0275dir=E({type:t,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"],standalone:!0});let r=t;return r})(),vt=(()=>{let t=class t{constructor(o,e,n){this._elementRef=o,this._platform=e,this._document=n}ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){this._toolbarRows.length}};t.\u0275fac=function(e){return new(e||t)(p(F),p(at),p(b))},t.\u0275cmp=d({type:t,selectors:[["mat-toolbar"]],contentQueries:function(e,n,a){if(e&1&&q(a,Tt,5),e&2){let h;Z(h=G())&&(n._toolbarRows=h)}},hostAttrs:[1,"mat-toolbar"],hostVars:6,hostBindings:function(e,n){e&2&&(Q(n.color?"mat-"+n.color:""),V("mat-toolbar-multiple-rows",n._toolbarRows.length>0)("mat-toolbar-single-row",n._toolbarRows.length===0))},inputs:{color:"color"},exportAs:["matToolbar"],standalone:!0,features:[u],ngContentSelectors:It,decls:2,vars:0,template:function(e,n){e&1&&(Y(At),_(0),_(1,1))},styles:[".mat-toolbar{background:var(--mat-toolbar-container-background-color);color:var(--mat-toolbar-container-text-color)}.mat-toolbar,.mat-toolbar h1,.mat-toolbar h2,.mat-toolbar h3,.mat-toolbar h4,.mat-toolbar h5,.mat-toolbar h6{font-family:var(--mat-toolbar-title-text-font);font-size:var(--mat-toolbar-title-text-size);line-height:var(--mat-toolbar-title-text-line-height);font-weight:var(--mat-toolbar-title-text-weight);letter-spacing:var(--mat-toolbar-title-text-tracking);margin:0}.cdk-high-contrast-active .mat-toolbar{outline:solid 1px}.mat-toolbar .mat-form-field-underline,.mat-toolbar .mat-form-field-ripple,.mat-toolbar .mat-focused .mat-form-field-ripple{background-color:currentColor}.mat-toolbar .mat-form-field-label,.mat-toolbar .mat-focused .mat-form-field-label,.mat-toolbar .mat-select-value,.mat-toolbar .mat-select-arrow,.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow{color:inherit}.mat-toolbar .mat-input-element{caret-color:currentColor}.mat-toolbar .mat-mdc-button-base.mat-mdc-button-base.mat-unthemed{--mdc-text-button-label-text-color:var(--mat-toolbar-container-text-color);--mdc-outlined-button-label-text-color:var(--mat-toolbar-container-text-color)}.mat-toolbar-row,.mat-toolbar-single-row{display:flex;box-sizing:border-box;padding:0 16px;width:100%;flex-direction:row;align-items:center;white-space:nowrap;height:var(--mat-toolbar-standard-height)}@media(max-width: 599px){.mat-toolbar-row,.mat-toolbar-single-row{height:var(--mat-toolbar-mobile-height)}}.mat-toolbar-multiple-rows{display:flex;box-sizing:border-box;flex-direction:column;width:100%;min-height:var(--mat-toolbar-standard-height)}@media(max-width: 599px){.mat-toolbar-multiple-rows{min-height:var(--mat-toolbar-mobile-height)}}"],encapsulation:2,changeDetection:0});let r=t;return r})();var Mt=(()=>{let t=class t{};t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=T({type:t}),t.\u0275inj=I({imports:[S,S]});let r=t;return r})();var Ct=(()=>{let t=class t{constructor(o,e,n){this.dialogRef=o,this.router=e,this.ngToastService=n,this.productService=c(x)}ngOnInit(){}onYesClick(){this.ngToastService.success({detail:"Success Message",summary:"User logged out successfully"}),this.productService.key.set(null),this.router.navigate(["/auth/login"])}};t.\u0275fac=function(e){return new(e||t)(p(st),p(ot),p(ft))},t.\u0275cmp=d({type:t,selectors:[["app-log-out-dialog"]],standalone:!0,features:[u],decls:9,vars:0,consts:[["mat-dialog-title",""],["mat-button","","mat-dialog-close",""],["mat-button","","mat-dialog-close","","cdkFocusInitial","",3,"click"]],template:function(e,n){e&1&&(l(0,"h2",0),m(1,"Log out User"),s(),l(2,"mat-dialog-content"),m(3," Are you sure you want to Log out? "),s(),l(4,"mat-dialog-actions")(5,"button",1),m(6,"No"),s(),l(7,"button",2),g("click",function(){return n.onYesClick()}),m(8," Ok "),s()())},dependencies:[y,ut,ct,pt,dt,M,w,C],styles:["button[_ngcontent-%COMP%]{margin-right:8px}"]});let r=t;return r})();var Nt=()=>["/products-list"],wt=(()=>{let t=class t{constructor(){this.dialog=c(mt)}openDialog(){this.dialog.open(Ct,{width:"350px"})}onClick(){this.dialog.open(yt,{data:{onEdit:!1,profile:{}},width:"550px"})}};t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=d({type:t,selectors:[["app-header"]],standalone:!0,features:[u],decls:14,vars:2,consts:[["color","primary",1,"header-toolbar"],["mat-button","","aria-label","Go to Home",1,"mat-button",3,"routerLink"],[1,"spacer"],["mat-button","",1,"mat-button",3,"click"],["mat-icon-button","","aria-label","Logout",1,"mat-button",3,"click"],[1,"material-icons"]],template:function(e,n){e&1&&(l(0,"mat-toolbar",0)(1,"button",1)(2,"mat-icon"),m(3,"home"),s(),m(4," Home "),s(),f(5,"span",2),l(6,"button",3),g("click",function(){return n.onClick()}),l(7,"mat-icon"),m(8,"add"),s(),m(9," Add Product "),s(),l(10,"button",4),g("click",function(){return n.openDialog()}),l(11,"span",5),m(12,"logout"),s()()(),f(13,"router-outlet")),e&2&&(N(),U("routerLink",W(1,Nt)))},dependencies:[y,Mt,vt,M,lt,w,C,ht,nt,v,rt],styles:[".header-toolbar[_ngcontent-%COMP%]{width:100wh;display:flex;margin-bottom:10px;align-items:center;background-color:#1c1d1e}.header-toolbar[_ngcontent-%COMP%]   .spacer[_ngcontent-%COMP%]{flex-grow:1}.header-toolbar[_ngcontent-%COMP%]   .mat-button[_ngcontent-%COMP%]{color:#fff!important}"]});let r=t;return r})();var xt=[{path:"",loadChildren:()=>import("./chunk-GAIR5NC6.js").then(r=>r.routes)},{path:"",component:wt,children:[{path:"",redirectTo:"products-list",pathMatch:"full"},{path:"products-list",loadComponent:()=>import("./chunk-QXC7VWYP.js").then(r=>r.ProductsListComponent)},{path:"products-detail/:id",loadComponent:()=>import("./chunk-LYNGSOIX.js").then(r=>r.ProdactsDetailComponent)}]}];var jt="@",Bt=(()=>{let t=class t{constructor(o,e,n,a,h){this.doc=o,this.delegate=e,this.zone=n,this.animationType=a,this.moduleImpl=h,this._rendererFactoryPromise=null,this.scheduler=c(B,{optional:!0})}ngOnDestroy(){this._engine?.flush()}loadImpl(){return(this.moduleImpl??import("./chunk-4AZEYH6L.js").then(e=>e)).catch(e=>{throw new R(5300,!1)}).then(({\u0275createEngine:e,\u0275AnimationRendererFactory:n})=>{this._engine=e(this.animationType,this.doc);let a=new n(this.delegate,this._engine,this.zone);return this.delegate=a,a})}createRenderer(o,e){let n=this.delegate.createRenderer(o,e);if(n.\u0275type===0)return n;typeof n.throwOnSyntheticProps=="boolean"&&(n.throwOnSyntheticProps=!1);let a=new k(n);return e?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(h=>{let Rt=h.createRenderer(o,e);a.use(Rt),this.scheduler?.notify(9)}).catch(h=>{a.use(n)}),a}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}};t.\u0275fac=function(e){j()},t.\u0275prov=A({token:t,factory:t.\u0275fac});let r=t;return r})(),k=class{constructor(t){this.delegate=t,this.replay=[],this.\u0275type=1}use(t){if(this.delegate=t,this.replay!==null){for(let i of this.replay)i(t);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(t,i){return this.delegate.createElement(t,i)}createComment(t){return this.delegate.createComment(t)}createText(t){return this.delegate.createText(t)}get destroyNode(){return this.delegate.destroyNode}appendChild(t,i){this.delegate.appendChild(t,i)}insertBefore(t,i,o,e){this.delegate.insertBefore(t,i,o,e)}removeChild(t,i,o){this.delegate.removeChild(t,i,o)}selectRootElement(t,i){return this.delegate.selectRootElement(t,i)}parentNode(t){return this.delegate.parentNode(t)}nextSibling(t){return this.delegate.nextSibling(t)}setAttribute(t,i,o,e){this.delegate.setAttribute(t,i,o,e)}removeAttribute(t,i,o){this.delegate.removeAttribute(t,i,o)}addClass(t,i){this.delegate.addClass(t,i)}removeClass(t,i){this.delegate.removeClass(t,i)}setStyle(t,i,o,e){this.delegate.setStyle(t,i,o,e)}removeStyle(t,i,o){this.delegate.removeStyle(t,i,o)}setProperty(t,i,o){this.shouldReplay(i)&&this.replay.push(e=>e.setProperty(t,i,o)),this.delegate.setProperty(t,i,o)}setValue(t,i){this.delegate.setValue(t,i)}listen(t,i,o){return this.shouldReplay(i)&&this.replay.push(e=>e.listen(t,i,o)),this.delegate.listen(t,i,o)}shouldReplay(t){return this.replay!==null&&t.startsWith(jt)}};function Dt(r="animations"){return H("NgAsyncAnimations"),P([{provide:L,useFactory:(t,i,o)=>new Bt(t,i,o,r),deps:[b,K,z]},{provide:O,useValue:r==="noop"?"NoopAnimations":"BrowserAnimations"}])}var _t=(r,t)=>{var i=c(x);let o=r.clone({setHeaders:{Authorization:`Bearer ${i.key()}`}});return t(o)};var St={providers:[X({eventCoalescing:!0}),it(xt),et(),Dt(),$(J([_t]))]};var kt=(()=>{let t=class t{constructor(){this.title="Cloudonix_app"}};t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=d({type:t,selectors:[["app-root"]],standalone:!0,features:[u],decls:3,vars:0,template:function(e,n){e&1&&(l(0,"router-outlet"),m(1,", "),f(2,"ng-toast"),s())},dependencies:[v,bt,gt]});let r=t;return r})();tt(kt,St).catch(r=>console.error(r));
