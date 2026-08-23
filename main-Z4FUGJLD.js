import{$ as l,$a as k,$b as h,A as Ye,Aa as Wr,Ab as T,Ac as Fi,B as Mo,Ba as Uh,Bb as bt,Bc as hf,C as Qi,Ca as Sa,Cb as Et,Cc as Z,D as jr,Da as Ma,Db as pn,Dc as vn,E as qs,Ea as ko,Eb as Pe,Ec as ff,F as vt,Fa as Id,Fb as Ne,Fc as ol,G as Sd,Ga as Ks,Gb as Tt,Gc as pf,H as xa,Ha as Yr,Hb as De,I as Ji,Ia as Aa,Ib as xt,J as Md,Ja as Hh,Jb as nl,K as Ad,Ka as $h,Kb as Ta,L as Oh,La as Gh,Lb as R,M as Rd,Ma as Wh,Mb as il,N as Zs,Na as Yh,Nb as D,O as Rt,Oa as qh,Ob as Qe,P as Pt,Pa as Zh,Pb as ve,Q as Be,Qa as Wt,Qb as gn,R as Ph,Ra as Kh,Rb as ot,S as wt,Sa as p,Sb as re,T as ge,Ta as Ra,Tb as ae,U as zr,Ua as Xh,Ub as tf,V as Kt,Va as Xs,Vb as nf,W as w,Wa as To,Wb as Nd,X as Y,Xa as at,Xb as $n,Y as Nh,Ya as pt,Yb as Gn,Z as S,Za as Nt,Zb as J,_ as G,_a as Je,_b as It,a as x,aa as Ur,ab as ka,ac as lt,b as He,ba as Lh,bb as gt,bc as oe,ca as kt,cb as Qs,cc as qr,d as rt,da as Gt,db as Qh,dc as Zr,e as Th,ea as ee,eb as Js,ec as Kr,f as li,fa as te,fb as N,fc as Xr,g as Ih,ga as fn,gb as q,gc as Qr,h as P,ha as Ao,hb as A,hc as je,i as Bt,ia as ce,ib as Jh,ic as rf,j as Dd,ja as X,jb as ef,jc as af,k as wd,ka as Hr,kb as _e,kc as of,l as Ed,la as Vh,lb as L,lc as sf,m as Zt,ma as j,mb as Fd,mc as Ld,n as Ot,na as de,nb as er,nc as Vd,o as Q,oa as $r,ob as Io,oc as rl,p as ki,pa as Ro,pb as Od,pc as lf,q as Ea,qa as ne,qb as Pd,qc as al,r as Fh,ra as Bh,rb as Ii,rc as cf,s as Oe,sa as jh,sb as pe,sc as Ge,t as Ti,ta as Gr,tb as ke,tc as rn,u as ci,ua as Ue,ub as Te,uc as df,v as xd,va as Xe,vb as el,vc as _n,w as Ws,wa as kd,wb as tl,wc as uf,x as di,xa as U,xb as _,xc as Fo,y as Ys,ya as Td,yb as d,yc as mf,z as hn,za as zh,zb as u,zc as Ee}from"./chunk-EP3WNPNJ.js";var gf=null;function bn(){return gf}function Bd(n){gf??=n}var Oo=class{},Oi=(()=>{class n{historyGo(e){throw new Error("")}static \u0275fac=function(t){return new(t||n)};static \u0275prov=w({token:n,factory:()=>l(_f),providedIn:"platform"})}return n})(),jd=new S(""),_f=(()=>{class n extends Oi{_location;_history;_doc=l(X);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return bn().getBaseHref(this._doc)}onPopState(e){let t=bn().getGlobalEventTarget(this._doc,"window");return t.addEventListener("popstate",e,!1),()=>t.removeEventListener("popstate",e)}onHashChange(e){let t=bn().getGlobalEventTarget(this._doc,"window");return t.addEventListener("hashchange",e,!1),()=>t.removeEventListener("hashchange",e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e,t,r){this._history.pushState(e,t,r)}replaceState(e,t,r){this._history.replaceState(e,t,r)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}static \u0275fac=function(t){return new(t||n)};static \u0275prov=w({token:n,factory:()=>new n,providedIn:"platform"})}return n})();function sl(n,i){return n?i?n.endsWith("/")?i.startsWith("/")?n+i.slice(1):n+i:i.startsWith("/")?n+i:`${n}/${i}`:n:i}function vf(n){let i=n.search(/#|\?|$/);return n[i-1]==="/"?n.slice(0,i-1)+n.slice(i):n}function Wn(n){return n&&n[0]!=="?"?`?${n}`:n}var Yn=(()=>{class n{historyGo(e){throw new Error("")}static \u0275fac=function(t){return new(t||n)};static \u0275prov=w({token:n,factory:()=>l(cl),providedIn:"root"})}return n})(),ll=new S(""),cl=(()=>{class n extends Yn{_platformLocation;_baseHref;_removeListenerFns=[];constructor(e,t){super(),this._platformLocation=e,this._baseHref=t??this._platformLocation.getBaseHrefFromDOM()??l(X).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return sl(this._baseHref,e)}path(e=!1){let t=this._platformLocation.pathname+Wn(this._platformLocation.search),r=this._platformLocation.hash;return r&&e?`${t}${r}`:t}pushState(e,t,r,a){let o=this.prepareExternalUrl(r+Wn(a));this._platformLocation.pushState(e,t,o)}replaceState(e,t,r,a){let o=this.prepareExternalUrl(r+Wn(a));this._platformLocation.replaceState(e,t,o)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(t){return new(t||n)(G(Oi),G(ll,8))};static \u0275prov=w({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var ui=(()=>{class n{_subject=new P;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(e){this._locationStrategy=e;let t=this._locationStrategy.getBaseHref();this._basePath=bb(vf(bf(t))),this._locationStrategy.onPopState(r=>{this._subject.next({url:this.path(!0),pop:!0,state:r.state,type:r.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,t=""){return this.path()==this.normalize(e+Wn(t))}normalize(e){return n.stripTrailingSlash(vb(this._basePath,bf(e)))}prepareExternalUrl(e){return e&&e[0]!=="/"&&(e="/"+e),this._locationStrategy.prepareExternalUrl(e)}go(e,t="",r=null){this._locationStrategy.pushState(r,"",e,t),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+Wn(t)),r)}replaceState(e,t="",r=null){this._locationStrategy.replaceState(r,"",e,t),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+Wn(t)),r)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription??=this.subscribe(t=>{this._notifyUrlChangeListeners(t.url,t.state)}),()=>{let t=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(t,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e="",t){this._urlChangeListeners.forEach(r=>r(e,t))}subscribe(e,t,r){return this._subject.subscribe({next:e,error:t??void 0,complete:r??void 0})}static normalizeQueryParams=Wn;static joinWithSlash=sl;static stripTrailingSlash=vf;static \u0275fac=function(t){return new(t||n)(G(Yn))};static \u0275prov=w({token:n,factory:()=>_b(),providedIn:"root"})}return n})();function _b(){return new ui(G(Yn))}function vb(n,i){if(!n||!i.startsWith(n))return i;let e=i.substring(n.length);return e===""||["/",";","?","#"].includes(e[0])?e:i}function bf(n){return n.replace(/\/index.html$/,"")}function bb(n){if(new RegExp("^(https?:)?//").test(n)){let[,e]=n.split(/\/\/[^\/]+/);return e}return n}var $d=(()=>{class n extends Yn{_platformLocation;_baseHref="";_removeListenerFns=[];constructor(e,t){super(),this._platformLocation=e,t!=null&&(this._baseHref=t)}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}path(e=!1){let t=this._platformLocation.hash??"#";return t.length>0?t.substring(1):t}prepareExternalUrl(e){let t=sl(this._baseHref,e);return t.length>0?"#"+t:t}pushState(e,t,r,a){let o=this.prepareExternalUrl(r+Wn(a))||this._platformLocation.pathname;this._platformLocation.pushState(e,t,o)}replaceState(e,t,r,a){let o=this.prepareExternalUrl(r+Wn(a))||this._platformLocation.pathname;this._platformLocation.replaceState(e,t,o)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(t){return new(t||n)(G(Oi),G(ll,8))};static \u0275prov=w({token:n,factory:n.\u0275fac})}return n})(),xf={ADP:[void 0,void 0,0],AFN:[void 0,"\u060B",0],ALL:[void 0,void 0,0],AMD:[void 0,"\u058F",2],AOA:[void 0,"Kz"],ARS:[void 0,"$"],AUD:["A$","$"],AZN:[void 0,"\u20BC"],BAM:[void 0,"KM"],BBD:[void 0,"$"],BDT:[void 0,"\u09F3"],BHD:[void 0,void 0,3],BIF:[void 0,void 0,0],BMD:[void 0,"$"],BND:[void 0,"$"],BOB:[void 0,"Bs"],BRL:["R$"],BSD:[void 0,"$"],BWP:[void 0,"P"],BYN:[void 0,void 0,2],BYR:[void 0,void 0,0],BZD:[void 0,"$"],CAD:["CA$","$",2],CHF:[void 0,void 0,2],CLF:[void 0,void 0,4],CLP:[void 0,"$",0],CNY:["CN\xA5","\xA5"],COP:[void 0,"$",2],CRC:[void 0,"\u20A1",2],CUC:[void 0,"$"],CUP:[void 0,"$"],CZK:[void 0,"K\u010D",2],DJF:[void 0,void 0,0],DKK:[void 0,"kr",2],DOP:[void 0,"$"],EGP:[void 0,"E\xA3"],ESP:[void 0,"\u20A7",0],EUR:["\u20AC"],FJD:[void 0,"$"],FKP:[void 0,"\xA3"],GBP:["\xA3"],GEL:[void 0,"\u20BE"],GHS:[void 0,"GH\u20B5"],GIP:[void 0,"\xA3"],GNF:[void 0,"FG",0],GTQ:[void 0,"Q"],GYD:[void 0,"$",2],HKD:["HK$","$"],HNL:[void 0,"L"],HRK:[void 0,"kn"],HUF:[void 0,"Ft",2],IDR:[void 0,"Rp",2],ILS:["\u20AA"],INR:["\u20B9"],IQD:[void 0,void 0,0],IRR:[void 0,void 0,0],ISK:[void 0,"kr",0],ITL:[void 0,void 0,0],JMD:[void 0,"$"],JOD:[void 0,void 0,3],JPY:["\xA5",void 0,0],KGS:[void 0,"\u20C0"],KHR:[void 0,"\u17DB"],KMF:[void 0,"CF",0],KPW:[void 0,"\u20A9",0],KRW:["\u20A9",void 0,0],KWD:[void 0,void 0,3],KYD:[void 0,"$"],KZT:[void 0,"\u20B8"],LAK:[void 0,"\u20AD",0],LBP:[void 0,"L\xA3",0],LKR:[void 0,"Rs"],LRD:[void 0,"$"],LTL:[void 0,"Lt"],LUF:[void 0,void 0,0],LVL:[void 0,"Ls"],LYD:[void 0,void 0,3],MGA:[void 0,"Ar",0],MGF:[void 0,void 0,0],MMK:[void 0,"K",0],MNT:[void 0,"\u20AE",2],MRO:[void 0,void 0,0],MUR:[void 0,"Rs",2],MXN:["MX$","$"],MYR:[void 0,"RM"],NAD:[void 0,"$"],NGN:[void 0,"\u20A6"],NIO:[void 0,"C$"],NOK:[void 0,"kr",2],NPR:[void 0,"Rs"],NZD:["NZ$","$"],OMR:[void 0,void 0,3],PHP:["\u20B1"],PKR:[void 0,"Rs",2],PLN:[void 0,"z\u0142"],PYG:[void 0,"\u20B2",0],RON:[void 0,"lei"],RSD:[void 0,void 0,0],RUB:[void 0,"\u20BD"],RWF:[void 0,"RF",0],SBD:[void 0,"$"],SEK:[void 0,"kr",2],SGD:[void 0,"$"],SHP:[void 0,"\xA3"],SLE:[void 0,void 0,2],SLL:[void 0,void 0,0],SOS:[void 0,void 0,0],SRD:[void 0,"$"],SSP:[void 0,"\xA3"],STD:[void 0,void 0,0],STN:[void 0,"Db"],SYP:[void 0,"\xA3",0],THB:[void 0,"\u0E3F"],TMM:[void 0,void 0,0],TND:[void 0,void 0,3],TOP:[void 0,"T$"],TRL:[void 0,void 0,0],TRY:[void 0,"\u20BA"],TTD:[void 0,"$"],TWD:["NT$","$",2],TZS:[void 0,void 0,2],UAH:[void 0,"\u20B4"],UGX:[void 0,void 0,0],USD:["$"],UYI:[void 0,void 0,0],UYU:[void 0,"$"],UYW:[void 0,void 0,4],UZS:[void 0,void 0,2],VEF:[void 0,"Bs",2],VND:["\u20AB",void 0,0],VUV:[void 0,void 0,0],XAF:["FCFA",void 0,0],XCD:["EC$","$"],XCG:["Cg."],XOF:["F\u202FCFA",void 0,0],XPF:["CFPF",void 0,0],XXX:["\xA4"],YER:[void 0,void 0,0],ZAR:[void 0,"R"],ZMK:[void 0,void 0,0],ZMW:[void 0,"ZK"],ZWD:[void 0,void 0,0]},Gd=(function(n){return n[n.Decimal=0]="Decimal",n[n.Percent=1]="Percent",n[n.Currency=2]="Currency",n[n.Scientific=3]="Scientific",n})(Gd||{});var mi={Decimal:0,Group:1,List:2,PercentSign:3,PlusSign:4,MinusSign:5,Exponential:6,SuperscriptingExponent:7,PerMille:8,Infinity:9,NaN:10,TimeSeparator:11,CurrencyDecimal:12,CurrencyGroup:13};function Ia(n,i){let e=nl(n),t=e[Ta.NumberSymbols][i];if(typeof t>"u"){if(i===mi.CurrencyDecimal)return e[Ta.NumberSymbols][mi.Decimal];if(i===mi.CurrencyGroup)return e[Ta.NumberSymbols][mi.Group]}return t}function Sf(n,i){return nl(n)[Ta.NumberFormats][i]}function yb(n){return nl(n)[Ta.Currencies]}function Mf(n,i,e="en"){let t=yb(e)[n]||xf[n]||[],r=t[1];return i==="narrow"&&typeof r=="string"?r:t[0]||n}var Cb=2;function Af(n){let i,e=xf[n];return e&&(i=e[2]),typeof i=="number"?i:Cb}var Db=/^(\d+)?\.((\d+)(-(\d+))?)?$/,yf=22,dl=".",Po="0",wb=";",Eb=",",zd="#",Cf="\xA4";function xb(n,i,e,t,r,a,o=!1){let s="",c=!1;if(!isFinite(n))s=Ia(e,mi.Infinity);else{let m=Ab(n);o&&(m=Mb(m));let f=i.minInt,g=i.minFrac,E=i.maxFrac;if(a){let O=a.match(Db);if(O===null)throw new ge(2306,!1);let F=O[1],he=O[3],Me=O[5];F!=null&&(f=Ud(F)),he!=null&&(g=Ud(he)),Me!=null?E=Ud(Me):he!=null&&g>E&&(E=g)}Rb(m,g,E);let M=m.digits,W=m.integerLen,K=m.exponent,z=[];for(c=M.every(O=>!O);W<f;W++)M.unshift(0);for(;W<0;W++)M.unshift(0);W>0?z=M.splice(W,M.length):(z=M,M=[0]);let $=[];for(M.length>=i.lgSize&&$.unshift(M.splice(-i.lgSize,M.length).join(""));M.length>i.gSize;)$.unshift(M.splice(-i.gSize,M.length).join(""));M.length&&$.unshift(M.join("")),s=$.join(Ia(e,t)),z.length&&(s+=Ia(e,r)+z.join("")),K&&(s+=Ia(e,mi.Exponential)+"+"+K)}return n<0&&!c?s=i.negPre+s+i.negSuf:s=i.posPre+s+i.posSuf,s}function Rf(n,i,e,t,r){let a=Sf(i,Gd.Currency),o=Sb(a,Ia(i,mi.MinusSign));return o.minFrac=Af(t),o.maxFrac=o.minFrac,xb(n,o,i,mi.CurrencyGroup,mi.CurrencyDecimal,r).replace(Cf,e).replace(Cf,"").trim()}function Sb(n,i="-"){let e={minInt:1,minFrac:0,maxFrac:0,posPre:"",posSuf:"",negPre:"",negSuf:"",gSize:0,lgSize:0},t=n.split(wb),r=t[0],a=t[1],o=r.indexOf(dl)!==-1?r.split(dl):[r.substring(0,r.lastIndexOf(Po)+1),r.substring(r.lastIndexOf(Po)+1)],s=o[0],c=o[1]||"";e.posPre=s.substring(0,s.indexOf(zd));for(let f=0;f<c.length;f++){let g=c.charAt(f);g===Po?e.minFrac=e.maxFrac=f+1:g===zd?e.maxFrac=f+1:e.posSuf+=g}let m=s.split(Eb);if(e.gSize=m[1]?m[1].length:0,e.lgSize=m[2]||m[1]?(m[2]||m[1]).length:0,a){let f=r.length-e.posPre.length-e.posSuf.length,g=a.indexOf(zd);e.negPre=a.substring(0,g).replace(/'/g,""),e.negSuf=a.slice(g+f).replace(/'/g,"")}else e.negPre=i+e.posPre,e.negSuf=e.posSuf;return e}function Mb(n){if(n.digits[0]===0)return n;let i=n.digits.length-n.integerLen;return n.exponent?n.exponent+=2:(i===0?n.digits.push(0,0):i===1&&n.digits.push(0),n.integerLen+=2),n}function Ab(n){let i=Math.abs(n)+"",e=0,t,r,a,o,s;for((r=i.indexOf(dl))>-1&&(i=i.replace(dl,"")),(a=i.search(/e/i))>0?(r<0&&(r=a),r+=+i.slice(a+1),i=i.substring(0,a)):r<0&&(r=i.length),a=0;i.charAt(a)===Po;a++);if(a===(s=i.length))t=[0],r=1;else{for(s--;i.charAt(s)===Po;)s--;for(r-=a,t=[],o=0;a<=s;a++,o++)t[o]=Number(i.charAt(a))}return r>yf&&(t=t.splice(0,yf-1),e=r-1,r=1),{digits:t,exponent:e,integerLen:r}}function Rb(n,i,e){if(i>e)throw new ge(2307,!1);let t=n.digits,r=t.length-n.integerLen,a=Math.min(Math.max(i,r),e),o=a+n.integerLen,s=t[o];if(o>0){t.splice(Math.max(n.integerLen,o));for(let g=o;g<t.length;g++)t[g]=0}else{r=Math.max(0,r),n.integerLen=1,t.length=Math.max(1,o=a+1),t[0]=0;for(let g=1;g<o;g++)t[g]=0}if(s>=5)if(o-1<0){for(let g=0;g>o;g--)t.unshift(0),n.integerLen++;t.unshift(1),n.integerLen++}else t[o-1]++;for(;r<Math.max(0,a);r++)t.push(0);let c=a!==0,m=i+n.integerLen,f=t.reduceRight(function(g,E,M,W){return E=E+g,W[M]=E<10?E:E-10,c&&(W[M]===0&&M>=m?W.pop():c=!1),E>=10?1:0},0);f&&(t.unshift(f),n.integerLen++)}function Ud(n){let i=parseInt(n);if(isNaN(i))throw new ge(2305,!1);return i}var Hd=/\s+/,Df=[],Jr=(()=>{class n{_ngEl;_renderer;initialClasses=Df;rawClass;stateMap=new Map;constructor(e,t){this._ngEl=e,this._renderer=t}set klass(e){this.initialClasses=e!=null?e.trim().split(Hd):Df}set ngClass(e){this.rawClass=typeof e=="string"?e.trim().split(Hd):e}ngDoCheck(){for(let t of this.initialClasses)this._updateState(t,!0);let e=this.rawClass;if(Array.isArray(e)||e instanceof Set)for(let t of e)this._updateState(t,!0);else if(e!=null)for(let t of Object.keys(e))this._updateState(t,!!e[t]);this._applyStateDiff()}_updateState(e,t){let r=this.stateMap.get(e);r!==void 0?(r.enabled!==t&&(r.changed=!0,r.enabled=t),r.touched=!0):this.stateMap.set(e,{enabled:t,changed:!0,touched:!0})}_applyStateDiff(){for(let e of this.stateMap){let t=e[0],r=e[1];r.changed?(this._toggleClass(t,r.enabled),r.changed=!1):r.touched||(r.enabled&&this._toggleClass(t,!1),this.stateMap.delete(t)),r.touched=!1}}_toggleClass(e,t){e=e.trim(),e.length>0&&e.split(Hd).forEach(r=>{t?this._renderer.addClass(this._ngEl.nativeElement,r):this._renderer.removeClass(this._ngEl.nativeElement,r)})}static \u0275fac=function(t){return new(t||n)(k(U),k(Je))};static \u0275dir=A({type:n,selectors:[["","ngClass",""]],inputs:{klass:[0,"class","klass"],ngClass:"ngClass"}})}return n})();var ul=class{$implicit;ngForOf;index;count;constructor(i,e,t,r){this.$implicit=i,this.ngForOf=e,this.index=t,this.count=r}get first(){return this.index===0}get last(){return this.index===this.count-1}get even(){return this.index%2===0}get odd(){return!this.even}},tr=(()=>{class n{_viewContainer;_template;_differs;set ngForOf(e){this._ngForOf=e,this._ngForOfDirty=!0}set ngForTrackBy(e){this._trackByFn=e}get ngForTrackBy(){return this._trackByFn}_ngForOf=null;_ngForOfDirty=!0;_differ=null;_trackByFn;constructor(e,t,r){this._viewContainer=e,this._template=t,this._differs=r}set ngForTemplate(e){e&&(this._template=e)}ngDoCheck(){if(this._ngForOfDirty){this._ngForOfDirty=!1;let e=this._ngForOf;!this._differ&&e&&(this._differ=this._differs.find(e).create(this.ngForTrackBy))}if(this._differ){let e=this._differ.diff(this._ngForOf);e&&this._applyChanges(e)}}_applyChanges(e){let t=this._viewContainer;e.forEachOperation((r,a,o)=>{if(r.previousIndex==null)t.createEmbeddedView(this._template,new ul(r.item,this._ngForOf,-1,-1),o===null?void 0:o);else if(o==null)t.remove(a===null?void 0:a);else if(a!==null){let s=t.get(a);t.move(s,o),wf(s,r)}});for(let r=0,a=t.length;r<a;r++){let s=t.get(r).context;s.index=r,s.count=a,s.ngForOf=this._ngForOf}e.forEachIdentityChange(r=>{let a=t.get(r.currentIndex);wf(a,r)})}static ngTemplateContextGuard(e,t){return!0}static \u0275fac=function(t){return new(t||n)(k(gt),k(pt),k(Fi))};static \u0275dir=A({type:n,selectors:[["","ngFor","","ngForOf",""]],inputs:{ngForOf:"ngForOf",ngForTrackBy:"ngForTrackBy",ngForTemplate:"ngForTemplate"}})}return n})();function wf(n,i){n.context.$implicit=i.item}var Yt=(()=>{class n{_viewContainer;_context=new ml;_thenTemplateRef=null;_elseTemplateRef=null;_thenViewRef=null;_elseViewRef=null;constructor(e,t){this._viewContainer=e,this._thenTemplateRef=t}set ngIf(e){this._context.$implicit=this._context.ngIf=e,this._updateView()}set ngIfThen(e){Ef(e,!1),this._thenTemplateRef=e,this._thenViewRef=null,this._updateView()}set ngIfElse(e){Ef(e,!1),this._elseTemplateRef=e,this._elseViewRef=null,this._updateView()}_updateView(){this._context.$implicit?this._thenViewRef||(this._viewContainer.clear(),this._elseViewRef=null,this._thenTemplateRef&&(this._thenViewRef=this._viewContainer.createEmbeddedView(this._thenTemplateRef,this._context))):this._elseViewRef||(this._viewContainer.clear(),this._thenViewRef=null,this._elseTemplateRef&&(this._elseViewRef=this._viewContainer.createEmbeddedView(this._elseTemplateRef,this._context)))}static ngIfUseIfTypeGuard;static ngTemplateGuard_ngIf;static ngTemplateContextGuard(e,t){return!0}static \u0275fac=function(t){return new(t||n)(k(gt),k(pt))};static \u0275dir=A({type:n,selectors:[["","ngIf",""]],inputs:{ngIf:"ngIf",ngIfThen:"ngIfThen",ngIfElse:"ngIfElse"}})}return n})(),ml=class{$implicit=null;ngIf=null};function Ef(n,i){if(n&&!n.createEmbeddedView)throw new ge(2020,!1)}var No=(()=>{class n{_viewContainerRef;_viewRef=null;ngTemplateOutletContext=null;ngTemplateOutlet=null;ngTemplateOutletInjector=null;injector=l(ce);constructor(e){this._viewContainerRef=e}ngOnChanges(e){if(this._shouldRecreateView(e)){let t=this._viewContainerRef;if(this._viewRef&&t.remove(t.indexOf(this._viewRef)),!this.ngTemplateOutlet){this._viewRef=null;return}let r=this._createContextForwardProxy();this._viewRef=t.createEmbeddedView(this.ngTemplateOutlet,r,{injector:this._getInjector()})}}_getInjector(){return this.ngTemplateOutletInjector==="outlet"?this.injector:this.ngTemplateOutletInjector??void 0}_shouldRecreateView(e){return!!e.ngTemplateOutlet||!!e.ngTemplateOutletInjector}_createContextForwardProxy(){return new Proxy({},{set:(e,t,r)=>this.ngTemplateOutletContext?Reflect.set(this.ngTemplateOutletContext,t,r):!1,get:(e,t,r)=>{if(this.ngTemplateOutletContext)return Reflect.get(this.ngTemplateOutletContext,t,r)}})}static \u0275fac=function(t){return new(t||n)(k(gt))};static \u0275dir=A({type:n,selectors:[["","ngTemplateOutlet",""]],inputs:{ngTemplateOutletContext:"ngTemplateOutletContext",ngTemplateOutlet:"ngTemplateOutlet",ngTemplateOutletInjector:"ngTemplateOutletInjector"},features:[Ue]})}return n})();function kb(n,i){return new ge(2100,!1)}var Wd=(()=>{class n{_locale;_defaultCurrencyCode;constructor(e,t="USD"){this._locale=e,this._defaultCurrencyCode=t}transform(e,t=this._defaultCurrencyCode,r="symbol",a,o){if(!Tb(e))return null;o||=this._locale,typeof r=="boolean"&&(r=r?"symbol":"code");let s=t||this._defaultCurrencyCode;r!=="code"&&(r==="symbol"||r==="symbol-narrow"?s=Mf(s,r==="symbol"?"wide":"narrow",o):s=r);try{let c=Ib(e);return Rf(c,o,s,t,a)}catch(c){throw kb(n,c.message)}}static \u0275fac=function(t){return new(t||n)(k(al,16),k(cf,16))};static \u0275pipe=Jh({name:"currency",type:n,pure:!0})}return n})();function Tb(n){return!(n==null||n===""||n!==n)}function Ib(n){if(typeof n=="string"&&!isNaN(Number(n)-parseFloat(n)))return Number(n);if(typeof n!="number")throw new ge(2309,!1);return n}var yt=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=q({type:n});static \u0275inj=Y({})}return n})();function Lo(n,i){i=encodeURIComponent(i);for(let e of n.split(";")){let t=e.indexOf("="),[r,a]=t==-1?[e,""]:[e.slice(0,t),e.slice(t+1)];if(r.trim()===i)return decodeURIComponent(a)}return null}var ea=class{};var Zd="browser";function kf(n){return n===Zd}var Kd=(()=>{class n{static \u0275prov=w({token:n,providedIn:"root",factory:()=>new Yd(l(X),window)})}return n})(),Yd=class{document;window;offset=()=>[0,0];constructor(i,e){this.document=i,this.window=e}setOffset(i){Array.isArray(i)?this.offset=()=>i:this.offset=i}getScrollPosition(){return[this.window.scrollX,this.window.scrollY]}scrollToPosition(i,e){this.window.scrollTo(He(x({},e),{left:i[0],top:i[1]}))}scrollToAnchor(i,e){let t=Ob(this.document,i);t&&(this.scrollToElement(t,e),t.focus())}setHistoryScrollRestoration(i){try{this.window.history.scrollRestoration=i}catch{console.warn(zr(2400,!1))}}scrollToElement(i,e){let t=i.getBoundingClientRect(),r=t.left+this.window.pageXOffset,a=t.top+this.window.pageYOffset,o=this.offset();this.window.scrollTo(He(x({},e),{left:r-o[0],top:a-o[1]}))}};function Ob(n,i){let e=n.getElementById(i)||n.getElementsByName(i)[0];if(e)return e;if(typeof n.createTreeWalker=="function"&&n.body&&typeof n.body.attachShadow=="function"){let t=n.createTreeWalker(n.body,NodeFilter.SHOW_ELEMENT),r=t.currentNode;for(;r;){let a=r.shadowRoot;if(a){let o=a.getElementById(i)||a.querySelector(`[name="${i}"]`);if(o)return o}r=t.nextNode()}}return null}var Vo=class{_doc;constructor(i){this._doc=i}manager},hl=(()=>{class n extends Vo{constructor(e){super(e)}supports(e){return!0}addEventListener(e,t,r,a){return e.addEventListener(t,r,a),()=>this.removeEventListener(e,t,r,a)}removeEventListener(e,t,r,a){return e.removeEventListener(t,r,a)}static \u0275fac=function(t){return new(t||n)(G(X))};static \u0275prov=w({token:n,factory:n.\u0275fac})}return n})(),gl=new S(""),eu=(()=>{class n{_zone;_plugins;_eventNameToPlugin=new Map;constructor(e,t){this._zone=t,e.forEach(o=>{o.manager=this});let r=e.filter(o=>!(o instanceof hl));this._plugins=r.slice().reverse();let a=e.find(o=>o instanceof hl);a&&this._plugins.push(a)}addEventListener(e,t,r,a){return this._findPluginFor(t).addEventListener(e,t,r,a)}getZone(){return this._zone}_findPluginFor(e){let t=this._eventNameToPlugin.get(e);if(t)return t;if(t=this._plugins.find(a=>a.supports(e)),!t)throw new ge(5101,!1);return this._eventNameToPlugin.set(e,t),t}static \u0275fac=function(t){return new(t||n)(G(gl),G(de))};static \u0275prov=w({token:n,factory:n.\u0275fac})}return n})(),Xd="ng-app-id";function Tf(n){for(let i of n)i.remove()}function If(n,i){let e=i.createElement("style");return e.textContent=n,e}function Pb(n,i,e,t){let r=n.head?.querySelectorAll(`style[${Xd}="${i}"],link[${Xd}="${i}"]`);if(r)for(let a of r)a.removeAttribute(Xd),a instanceof HTMLLinkElement?t.set(a.href.slice(a.href.lastIndexOf("/")+1),{usage:0,elements:[a]}):a.textContent&&e.set(a.textContent,{usage:0,elements:[a]})}function Jd(n,i){let e=i.createElement("link");return e.setAttribute("rel","stylesheet"),e.setAttribute("href",n),e}var tu=(()=>{class n{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;constructor(e,t,r,a={}){this.doc=e,this.appId=t,this.nonce=r,Pb(e,t,this.inline,this.external),this.hosts.add(e.head)}addStyles(e,t){for(let r of e)this.addUsage(r,this.inline,If);t?.forEach(r=>this.addUsage(r,this.external,Jd))}removeStyles(e,t){for(let r of e)this.removeUsage(r,this.inline);t?.forEach(r=>this.removeUsage(r,this.external))}addUsage(e,t,r){let a=t.get(e);a?a.usage++:t.set(e,{usage:1,elements:[...this.hosts].map(o=>this.addElement(o,r(e,this.doc)))})}removeUsage(e,t){let r=t.get(e);r&&(r.usage--,r.usage<=0&&(Tf(r.elements),t.delete(e)))}ngOnDestroy(){for(let[,{elements:e}]of[...this.inline,...this.external])Tf(e);this.hosts.clear()}addHost(e){this.hosts.add(e);for(let[t,{elements:r}]of this.inline)r.push(this.addElement(e,If(t,this.doc)));for(let[t,{elements:r}]of this.external)r.push(this.addElement(e,Jd(t,this.doc)))}removeHost(e){this.hosts.delete(e)}addElement(e,t){return this.nonce&&t.setAttribute("nonce",this.nonce),e.appendChild(t)}static \u0275fac=function(t){return new(t||n)(G(X),G(Wr),G(ko,8),G(Sa))};static \u0275prov=w({token:n,factory:n.\u0275fac})}return n})(),Qd={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},nu=/%COMP%/g;var Of="%COMP%",Nb=`_nghost-${Of}`,Lb=`_ngcontent-${Of}`,Vb=!0,Bb=new S("",{factory:()=>Vb});function jb(n){return Lb.replace(nu,n)}function zb(n){return Nb.replace(nu,n)}function Pf(n,i){return i.map(e=>e.replace(nu,n))}var zo=(()=>{class n{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;constructor(e,t,r,a,o,s,c=null,m=null){this.eventManager=e,this.sharedStylesHost=t,this.appId=r,this.removeStylesOnCompDestroy=a,this.doc=o,this.ngZone=s,this.nonce=c,this.tracingService=m,this.defaultRenderer=new Bo(e,o,s,this.tracingService)}createRenderer(e,t){if(!e||!t)return this.defaultRenderer;let r=this.getOrCreateRenderer(e,t);return r instanceof pl?r.applyToHost(e):r instanceof jo&&r.applyStyles(),r}getOrCreateRenderer(e,t){let r=this.rendererByCompId,a=r.get(t.id);if(!a){let o=this.doc,s=this.ngZone,c=this.eventManager,m=this.sharedStylesHost,f=this.removeStylesOnCompDestroy,g=this.tracingService;switch(t.encapsulation){case Ks.Emulated:a=new pl(c,m,t,this.appId,f,o,s,g);break;case Ks.ShadowDom:return new fl(c,e,t,o,s,this.nonce,g,m);case Ks.ExperimentalIsolatedShadowDom:return new fl(c,e,t,o,s,this.nonce,g);default:a=new jo(c,m,t,f,o,s,g);break}r.set(t.id,a)}return a}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(e){this.rendererByCompId.delete(e)}static \u0275fac=function(t){return new(t||n)(G(eu),G(tu),G(Wr),G(Bb),G(X),G(de),G(ko),G(Xs,8))};static \u0275prov=w({token:n,factory:n.\u0275fac})}return n})(),Bo=class{eventManager;doc;ngZone;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(i,e,t,r){this.eventManager=i,this.doc=e,this.ngZone=t,this.tracingService=r}destroy(){}destroyNode=null;createElement(i,e){return e?this.doc.createElementNS(Qd[e]||e,i):this.doc.createElement(i)}createComment(i){return this.doc.createComment(i)}createText(i){return this.doc.createTextNode(i)}appendChild(i,e){(Ff(i)?i.content:i).appendChild(e)}insertBefore(i,e,t){i&&(Ff(i)?i.content:i).insertBefore(e,t)}removeChild(i,e){e.remove()}selectRootElement(i,e){let t=typeof i=="string"?this.doc.querySelector(i):i;if(!t)throw new ge(-5104,!1);return e||(t.textContent=""),t}parentNode(i){return i.parentNode}nextSibling(i){return i.nextSibling}setAttribute(i,e,t,r){if(r){e=r+":"+e;let a=Qd[r];a?i.setAttributeNS(a,e,t):i.setAttribute(e,t)}else i.setAttribute(e,t)}removeAttribute(i,e,t){if(t){let r=Qd[t];r?i.removeAttributeNS(r,e):i.removeAttribute(`${t}:${e}`)}else i.removeAttribute(e)}addClass(i,e){i.classList.add(e)}removeClass(i,e){i.classList.remove(e)}setStyle(i,e,t,r){r&(Ra.DashCase|Ra.Important)?i.style.setProperty(e,t,r&Ra.Important?"important":""):i.style[e]=t}removeStyle(i,e,t){t&Ra.DashCase?i.style.removeProperty(e):i.style[e]=""}setProperty(i,e,t){i!=null&&(i[e]=t)}setValue(i,e){i.nodeValue=e}listen(i,e,t,r){if(typeof i=="string"&&(i=bn().getGlobalEventTarget(this.doc,i),!i))throw new ge(5102,!1);let a=this.decoratePreventDefault(t);return this.tracingService?.wrapEventListener&&(a=this.tracingService.wrapEventListener(i,e,a)),this.eventManager.addEventListener(i,e,a,r)}decoratePreventDefault(i){return e=>{if(e==="__ngUnwrap__")return i;i(e)===!1&&e.preventDefault()}}};function Ff(n){return n.tagName==="TEMPLATE"&&n.content!==void 0}var fl=class extends Bo{hostEl;sharedStylesHost;shadowRoot;constructor(i,e,t,r,a,o,s,c){super(i,r,a,s),this.hostEl=e,this.sharedStylesHost=c,this.shadowRoot=e.attachShadow({mode:"open"}),this.sharedStylesHost&&this.sharedStylesHost.addHost(this.shadowRoot);let m=t.styles;m=Pf(t.id,m);for(let g of m){let E=document.createElement("style");o&&E.setAttribute("nonce",o),E.textContent=g,this.shadowRoot.appendChild(E)}let f=t.getExternalStyles?.();if(f)for(let g of f){let E=Jd(g,r);o&&E.setAttribute("nonce",o),this.shadowRoot.appendChild(E)}}nodeOrShadowRoot(i){return i===this.hostEl?this.shadowRoot:i}appendChild(i,e){return super.appendChild(this.nodeOrShadowRoot(i),e)}insertBefore(i,e,t){return super.insertBefore(this.nodeOrShadowRoot(i),e,t)}removeChild(i,e){return super.removeChild(null,e)}parentNode(i){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(i)))}destroy(){this.sharedStylesHost&&this.sharedStylesHost.removeHost(this.shadowRoot)}},jo=class extends Bo{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(i,e,t,r,a,o,s,c){super(i,a,o,s),this.sharedStylesHost=e,this.removeStylesOnCompDestroy=r;let m=t.styles;this.styles=c?Pf(c,m):m,this.styleUrls=t.getExternalStyles?.(c)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&Xh.size===0&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},pl=class extends jo{contentAttr;hostAttr;constructor(i,e,t,r,a,o,s,c){let m=r+"-"+t.id;super(i,e,t,a,o,s,c,m),this.contentAttr=jb(m),this.hostAttr=zb(m)}applyToHost(i){this.applyStyles(),this.setAttribute(i,this.hostAttr,"")}createElement(i,e){let t=super.createElement(i,e);return super.setAttribute(t,this.contentAttr,""),t}};var _l=class n extends Oo{supportsDOMEvents=!0;static makeCurrent(){Bd(new n)}onAndCancel(i,e,t,r){return i.addEventListener(e,t,r),()=>{i.removeEventListener(e,t,r)}}dispatchEvent(i,e){i.dispatchEvent(e)}remove(i){i.remove()}createElement(i,e){return e=e||this.getDefaultDocument(),e.createElement(i)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(i){return i.nodeType===Node.ELEMENT_NODE}isShadowRoot(i){return i instanceof DocumentFragment}getGlobalEventTarget(i,e){return e==="window"?window:e==="document"?i:e==="body"?i.body:null}getBaseHref(i){let e=Hb();return e==null?null:$b(e)}resetBaseElement(){Uo=null}getUserAgent(){return window.navigator.userAgent}getCookie(i){return Lo(document.cookie,i)}},Uo=null;function Hb(){return Uo=Uo||document.head.querySelector("base"),Uo?Uo.getAttribute("href"):null}function $b(n){return new URL(n,document.baseURI).pathname}var Gb=(()=>{class n{build(){return new XMLHttpRequest}static \u0275fac=function(t){return new(t||n)};static \u0275prov=w({token:n,factory:n.\u0275fac})}return n})(),Nf=["alt","control","meta","shift"],Wb={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},Yb={alt:n=>n.altKey,control:n=>n.ctrlKey,meta:n=>n.metaKey,shift:n=>n.shiftKey},Lf=(()=>{class n extends Vo{constructor(e){super(e)}supports(e){return n.parseEventName(e)!=null}addEventListener(e,t,r,a){let o=n.parseEventName(t),s=n.eventCallback(o.fullKey,r,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>bn().onAndCancel(e,o.domEventName,s,a))}static parseEventName(e){let t=e.toLowerCase().split("."),r=t.shift();if(t.length===0||!(r==="keydown"||r==="keyup"))return null;let a=n._normalizeKey(t.pop()),o="",s=t.indexOf("code");if(s>-1&&(t.splice(s,1),o="code."),Nf.forEach(m=>{let f=t.indexOf(m);f>-1&&(t.splice(f,1),o+=m+".")}),o+=a,t.length!=0||a.length===0)return null;let c={};return c.domEventName=r,c.fullKey=o,c}static matchEventFullKeyCode(e,t){let r=Wb[e.key]||e.key,a="";return t.indexOf("code.")>-1&&(r=e.code,a="code."),r==null||!r?!1:(r=r.toLowerCase(),r===" "?r="space":r==="."&&(r="dot"),Nf.forEach(o=>{if(o!==r){let s=Yb[o];s(e)&&(a+=o+".")}}),a+=r,a===t)}static eventCallback(e,t,r){return a=>{n.matchEventFullKeyCode(a,e)&&r.runGuarded(()=>t(a))}}static _normalizeKey(e){return e==="esc"?"escape":e}static \u0275fac=function(t){return new(t||n)(G(X))};static \u0275prov=w({token:n,factory:n.\u0275fac})}return n})();async function iu(n,i,e){let t=x({rootComponent:n},qb(i,e));return hf(t)}function qb(n,i){return{platformRef:i?.platformRef,appProviders:[...Jb,...n?.providers??[]],platformProviders:Qb}}function Zb(){_l.makeCurrent()}function Kb(){return new $r}function Xb(){return zh(document),document}var Qb=[{provide:Sa,useValue:Zd},{provide:Uh,useValue:Zb,multi:!0},{provide:X,useFactory:Xb}];var Jb=[{provide:Lh,useValue:"root"},{provide:$r,useFactory:Kb},{provide:gl,useClass:hl,multi:!0},{provide:gl,useClass:Lf,multi:!0},zo,tu,eu,{provide:Nt,useExisting:zo},{provide:ea,useClass:Gb},[]];var ir=class n{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(i){i?typeof i=="string"?this.lazyInit=()=>{this.headers=new Map,i.split(`
`).forEach(e=>{let t=e.indexOf(":");if(t>0){let r=e.slice(0,t),a=e.slice(t+1).trim();this.addHeaderEntry(r,a)}})}:typeof Headers<"u"&&i instanceof Headers?(this.headers=new Map,i.forEach((e,t)=>{this.addHeaderEntry(t,e)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(i).forEach(([e,t])=>{this.setHeaderEntries(e,t)})}:this.headers=new Map}has(i){return this.init(),this.headers.has(i.toLowerCase())}get(i){this.init();let e=this.headers.get(i.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(i){return this.init(),this.headers.get(i.toLowerCase())||null}append(i,e){return this.clone({name:i,value:e,op:"a"})}set(i,e){return this.clone({name:i,value:e,op:"s"})}delete(i,e){return this.clone({name:i,value:e,op:"d"})}maybeSetNormalizedName(i,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,i)}init(){this.lazyInit&&(this.lazyInit instanceof n?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(i=>this.applyUpdate(i)),this.lazyUpdate=null))}copyFrom(i){i.init(),Array.from(i.headers.keys()).forEach(e=>{this.headers.set(e,i.headers.get(e)),this.normalizedNames.set(e,i.normalizedNames.get(e))})}clone(i){let e=new n;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof n?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([i]),e}applyUpdate(i){let e=i.name.toLowerCase();switch(i.op){case"a":case"s":let t=i.value;if(typeof t=="string"&&(t=[t]),t.length===0)return;this.maybeSetNormalizedName(i.name,e);let r=(i.op==="a"?this.headers.get(e):void 0)||[];r.push(...t),this.headers.set(e,r);break;case"d":let a=i.value;if(!a)this.headers.delete(e),this.normalizedNames.delete(e);else{let o=this.headers.get(e);if(!o)return;o=o.filter(s=>a.indexOf(s)===-1),o.length===0?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,o)}break}}addHeaderEntry(i,e){let t=i.toLowerCase();this.maybeSetNormalizedName(i,t),this.headers.has(t)?this.headers.get(t).push(e):this.headers.set(t,[e])}setHeaderEntries(i,e){let t=(Array.isArray(e)?e:[e]).map(a=>a.toString()),r=i.toLowerCase();this.headers.set(r,t),this.maybeSetNormalizedName(i,r)}forEach(i){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>i(this.normalizedNames.get(e),this.headers.get(e)))}};var bl=class{map=new Map;set(i,e){return this.map.set(i,e),this}get(i){return this.map.has(i)||this.map.set(i,i.defaultValue()),this.map.get(i)}delete(i){return this.map.delete(i),this}has(i){return this.map.has(i)}keys(){return this.map.keys()}},yl=class{encodeKey(i){return Vf(i)}encodeValue(i){return Vf(i)}decodeKey(i){return decodeURIComponent(i)}decodeValue(i){return decodeURIComponent(i)}};function ey(n,i){let e=new Map;return n.length>0&&n.replace(/^\?/,"").split("&").forEach(r=>{let a=r.indexOf("="),[o,s]=a==-1?[i.decodeKey(r),""]:[i.decodeKey(r.slice(0,a)),i.decodeValue(r.slice(a+1))],c=e.get(o)||[];c.push(s),e.set(o,c)}),e}var ty=/%(\d[a-f0-9])/gi,ny={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function Vf(n){return encodeURIComponent(n).replace(ty,(i,e)=>ny[e]??i)}function vl(n){return`${n}`}var Pi=class n{map;encoder;updates=null;cloneFrom=null;constructor(i={}){if(this.encoder=i.encoder||new yl,i.fromString){if(i.fromObject)throw new ge(2805,!1);this.map=ey(i.fromString,this.encoder)}else i.fromObject?(this.map=new Map,Object.keys(i.fromObject).forEach(e=>{let t=i.fromObject[e],r=Array.isArray(t)?t.map(vl):[vl(t)];this.map.set(e,r)})):this.map=null}has(i){return this.init(),this.map.has(i)}get(i){this.init();let e=this.map.get(i);return e?e[0]:null}getAll(i){return this.init(),this.map.get(i)||null}keys(){return this.init(),Array.from(this.map.keys())}append(i,e){return this.clone({param:i,value:e,op:"a"})}appendAll(i){let e=[];return Object.keys(i).forEach(t=>{let r=i[t];Array.isArray(r)?r.forEach(a=>{e.push({param:t,value:a,op:"a"})}):e.push({param:t,value:r,op:"a"})}),this.clone(e)}set(i,e){return this.clone({param:i,value:e,op:"s"})}delete(i,e){return this.clone({param:i,value:e,op:"d"})}toString(){return this.init(),this.keys().map(i=>{let e=this.encoder.encodeKey(i);return this.map.get(i).map(t=>e+"="+this.encoder.encodeValue(t)).join("&")}).filter(i=>i!=="").join("&")}clone(i){let e=new n({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat(i),e}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(i=>this.map.set(i,this.cloneFrom.map.get(i))),this.updates.forEach(i=>{switch(i.op){case"a":case"s":let e=(i.op==="a"?this.map.get(i.param):void 0)||[];e.push(vl(i.value)),this.map.set(i.param,e);break;case"d":if(i.value!==void 0){let t=this.map.get(i.param)||[],r=t.indexOf(vl(i.value));r!==-1&&t.splice(r,1),t.length>0?this.map.set(i.param,t):this.map.delete(i.param)}else{this.map.delete(i.param);break}}}),this.cloneFrom=this.updates=null)}};function iy(n){switch(n){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function Bf(n){return typeof ArrayBuffer<"u"&&n instanceof ArrayBuffer}function jf(n){return typeof Blob<"u"&&n instanceof Blob}function zf(n){return typeof FormData<"u"&&n instanceof FormData}function ry(n){return typeof URLSearchParams<"u"&&n instanceof URLSearchParams}var Uf="Content-Type",Hf="Accept",$f="text/plain",Gf="application/json",ay=`${Gf}, ${$f}, */*`,Fa=class n{url;body=null;headers;context;reportProgress=!1;withCredentials=!1;credentials;keepalive=!1;cache;priority;mode;redirect;referrer;integrity;referrerPolicy;responseType="json";method;params;urlWithParams;transferCache;timeout;constructor(i,e,t,r){this.url=e,this.method=i.toUpperCase();let a;if(iy(this.method)||r?(this.body=t!==void 0?t:null,a=r):a=t,a){if(this.reportProgress=!!a.reportProgress,this.withCredentials=!!a.withCredentials,this.keepalive=!!a.keepalive,a.responseType&&(this.responseType=a.responseType),a.headers&&(this.headers=a.headers),a.context&&(this.context=a.context),a.params&&(this.params=a.params),a.priority&&(this.priority=a.priority),a.cache&&(this.cache=a.cache),a.credentials&&(this.credentials=a.credentials),typeof a.timeout=="number"){if(a.timeout<1||!Number.isInteger(a.timeout))throw new ge(2822,"");this.timeout=a.timeout}a.mode&&(this.mode=a.mode),a.redirect&&(this.redirect=a.redirect),a.integrity&&(this.integrity=a.integrity),a.referrer&&(this.referrer=a.referrer),a.referrerPolicy&&(this.referrerPolicy=a.referrerPolicy),this.transferCache=a.transferCache}if(this.headers??=new ir,this.context??=new bl,!this.params)this.params=new Pi,this.urlWithParams=e;else{let o=this.params.toString();if(o.length===0)this.urlWithParams=e;else{let s=e.indexOf("?"),c=s===-1?"?":s<e.length-1?"&":"";this.urlWithParams=e+c+o}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||Bf(this.body)||jf(this.body)||zf(this.body)||ry(this.body)?this.body:this.body instanceof Pi?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||zf(this.body)?null:jf(this.body)?this.body.type||null:Bf(this.body)?null:typeof this.body=="string"?$f:this.body instanceof Pi?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?Gf:null}clone(i={}){let e=i.method||this.method,t=i.url||this.url,r=i.responseType||this.responseType,a=i.keepalive??this.keepalive,o=i.priority||this.priority,s=i.cache||this.cache,c=i.mode||this.mode,m=i.redirect||this.redirect,f=i.credentials||this.credentials,g=i.referrer||this.referrer,E=i.integrity||this.integrity,M=i.referrerPolicy||this.referrerPolicy,W=i.transferCache??this.transferCache,K=i.timeout??this.timeout,z=i.body!==void 0?i.body:this.body,$=i.withCredentials??this.withCredentials,O=i.reportProgress??this.reportProgress,F=i.headers||this.headers,he=i.params||this.params,Me=i.context??this.context;return i.setHeaders!==void 0&&(F=Object.keys(i.setHeaders).reduce(($e,ze)=>$e.set(ze,i.setHeaders[ze]),F)),i.setParams&&(he=Object.keys(i.setParams).reduce(($e,ze)=>$e.set(ze,i.setParams[ze]),he)),new n(e,t,z,{params:he,headers:F,context:Me,reportProgress:O,responseType:r,withCredentials:$,transferCache:W,keepalive:a,cache:s,priority:o,timeout:K,mode:c,redirect:m,credentials:f,referrer:g,integrity:E,referrerPolicy:M})}},ta=(function(n){return n[n.Sent=0]="Sent",n[n.UploadProgress=1]="UploadProgress",n[n.ResponseHeader=2]="ResponseHeader",n[n.DownloadProgress=3]="DownloadProgress",n[n.Response=4]="Response",n[n.User=5]="User",n})(ta||{}),Pa=class{headers;status;statusText;url;ok;type;redirected;responseType;constructor(i,e=200,t="OK"){this.headers=i.headers||new ir,this.status=i.status!==void 0?i.status:e,this.statusText=i.statusText||t,this.url=i.url||null,this.redirected=i.redirected,this.responseType=i.responseType,this.ok=this.status>=200&&this.status<300}},Cl=class n extends Pa{constructor(i={}){super(i)}type=ta.ResponseHeader;clone(i={}){return new n({headers:i.headers||this.headers,status:i.status!==void 0?i.status:this.status,statusText:i.statusText||this.statusText,url:i.url||this.url||void 0})}},Ho=class n extends Pa{body;constructor(i={}){super(i),this.body=i.body!==void 0?i.body:null}type=ta.Response;clone(i={}){return new n({body:i.body!==void 0?i.body:this.body,headers:i.headers||this.headers,status:i.status!==void 0?i.status:this.status,statusText:i.statusText||this.statusText,url:i.url||this.url||void 0,redirected:i.redirected??this.redirected,responseType:i.responseType??this.responseType})}},Oa=class extends Pa{name="HttpErrorResponse";message;error;ok=!1;constructor(i){super(i,0,"Unknown Error"),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${i.url||"(unknown url)"}`:this.message=`Http failure response for ${i.url||"(unknown url)"}: ${i.status} ${i.statusText}`,this.error=i.error||null}},oy=200,sy=204;var ly=new S("");var cy=/^\)\]\}',?\n/;var au=(()=>{class n{xhrFactory;tracingService=l(Xs,{optional:!0});constructor(e){this.xhrFactory=e}maybePropagateTrace(e){return this.tracingService?.propagate?this.tracingService.propagate(e):e}handle(e){if(e.method==="JSONP")throw new ge(-2800,!1);let t=this.xhrFactory;return Q(null).pipe(Pt(()=>new li(a=>{let o=t.build();if(o.open(e.method,e.urlWithParams),e.withCredentials&&(o.withCredentials=!0),e.headers.forEach((z,$)=>o.setRequestHeader(z,$.join(","))),e.headers.has(Hf)||o.setRequestHeader(Hf,ay),!e.headers.has(Uf)){let z=e.detectContentTypeHeader();z!==null&&o.setRequestHeader(Uf,z)}if(e.timeout&&(o.timeout=e.timeout),e.responseType){let z=e.responseType.toLowerCase();o.responseType=z!=="json"?z:"text"}let s=e.serializeBody(),c=null,m=()=>{if(c!==null)return c;let z=o.statusText||"OK",$=new ir(o.getAllResponseHeaders()),O=o.responseURL||e.url;return c=new Cl({headers:$,status:o.status,statusText:z,url:O}),c},f=this.maybePropagateTrace(()=>{let{headers:z,status:$,statusText:O,url:F}=m(),he=null;$!==sy&&(he=typeof o.response>"u"?o.responseText:o.response),$===0&&($=he?oy:0);let Me=$>=200&&$<300;if(e.responseType==="json"&&typeof he=="string"){let $e=he;he=he.replace(cy,"");try{he=he!==""?JSON.parse(he):null}catch(ze){he=$e,Me&&(Me=!1,he={error:ze,text:he})}}Me?(a.next(new Ho({body:he,headers:z,status:$,statusText:O,url:F||void 0})),a.complete()):a.error(new Oa({error:he,headers:z,status:$,statusText:O,url:F||void 0}))}),g=this.maybePropagateTrace(z=>{let{url:$}=m(),O=new Oa({error:z,status:o.status||0,statusText:o.statusText||"Unknown Error",url:$||void 0});a.error(O)}),E=g;e.timeout&&(E=this.maybePropagateTrace(z=>{let{url:$}=m(),O=new Oa({error:new DOMException("Request timed out","TimeoutError"),status:o.status||0,statusText:o.statusText||"Request timeout",url:$||void 0});a.error(O)}));let M=!1,W=this.maybePropagateTrace(z=>{M||(a.next(m()),M=!0);let $={type:ta.DownloadProgress,loaded:z.loaded};z.lengthComputable&&($.total=z.total),e.responseType==="text"&&o.responseText&&($.partialText=o.responseText),a.next($)}),K=this.maybePropagateTrace(z=>{let $={type:ta.UploadProgress,loaded:z.loaded};z.lengthComputable&&($.total=z.total),a.next($)});return o.addEventListener("load",f),o.addEventListener("error",g),o.addEventListener("timeout",E),o.addEventListener("abort",g),e.reportProgress&&(o.addEventListener("progress",W),s!==null&&o.upload&&o.upload.addEventListener("progress",K)),o.send(s),a.next({type:ta.Sent}),()=>{o.removeEventListener("error",g),o.removeEventListener("abort",g),o.removeEventListener("load",f),o.removeEventListener("timeout",E),e.reportProgress&&(o.removeEventListener("progress",W),s!==null&&o.upload&&o.upload.removeEventListener("progress",K)),o.readyState!==o.DONE&&o.abort()}})))}static \u0275fac=function(t){return new(t||n)(G(ea))};static \u0275prov=w({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function dy(n,i){return i(n)}function uy(n,i,e){return(t,r)=>Gt(e,()=>i(t,a=>n(a,r)))}var ou=new S("",{factory:()=>[]}),Wf=new S(""),Yf=new S("",{factory:()=>!0});var su=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275prov=w({token:n,factory:function(t){let r=null;return t?r=new(t||n):r=G(au),r},providedIn:"root"})}return n})();var Dl=(()=>{class n{backend;injector;chain=null;pendingTasks=l(jh);contributeToStability=l(Yf);constructor(e,t){this.backend=e,this.injector=t}handle(e){if(this.chain===null){let t=Array.from(new Set([...this.injector.get(ou),...this.injector.get(Wf,[])]));this.chain=t.reduceRight((r,a)=>uy(r,a,this.injector),dy)}if(this.contributeToStability){let t=this.pendingTasks.add();return this.chain(e,r=>this.backend.handle(r)).pipe(xa(t))}else return this.chain(e,t=>this.backend.handle(t))}static \u0275fac=function(t){return new(t||n)(G(su),G(kt))};static \u0275prov=w({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),lu=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275prov=w({token:n,factory:function(t){let r=null;return t?r=new(t||n):r=G(Dl),r},providedIn:"root"})}return n})();function ru(n,i){return{body:i,headers:n.headers,context:n.context,observe:n.observe,params:n.params,reportProgress:n.reportProgress,responseType:n.responseType,withCredentials:n.withCredentials,credentials:n.credentials,transferCache:n.transferCache,timeout:n.timeout,keepalive:n.keepalive,priority:n.priority,cache:n.cache,mode:n.mode,redirect:n.redirect,integrity:n.integrity,referrer:n.referrer,referrerPolicy:n.referrerPolicy}}var Xt=(()=>{class n{handler;constructor(e){this.handler=e}request(e,t,r={}){let a;if(e instanceof Fa)a=e;else{let c;r.headers instanceof ir?c=r.headers:c=new ir(r.headers);let m;r.params&&(r.params instanceof Pi?m=r.params:m=new Pi({fromObject:r.params})),a=new Fa(e,t,r.body!==void 0?r.body:null,{headers:c,context:r.context,params:m,reportProgress:r.reportProgress,responseType:r.responseType||"json",withCredentials:r.withCredentials,transferCache:r.transferCache,keepalive:r.keepalive,priority:r.priority,cache:r.cache,mode:r.mode,redirect:r.redirect,credentials:r.credentials,referrer:r.referrer,referrerPolicy:r.referrerPolicy,integrity:r.integrity,timeout:r.timeout})}let o=Q(a).pipe(jr(c=>this.handler.handle(c)));if(e instanceof Fa||r.observe==="events")return o;let s=o.pipe(Ye(c=>c instanceof Ho));switch(r.observe||"body"){case"body":switch(a.responseType){case"arraybuffer":return s.pipe(Oe(c=>{if(c.body!==null&&!(c.body instanceof ArrayBuffer))throw new ge(2806,!1);return c.body}));case"blob":return s.pipe(Oe(c=>{if(c.body!==null&&!(c.body instanceof Blob))throw new ge(2807,!1);return c.body}));case"text":return s.pipe(Oe(c=>{if(c.body!==null&&typeof c.body!="string")throw new ge(2808,!1);return c.body}));default:return s.pipe(Oe(c=>c.body))}case"response":return s;default:throw new ge(2809,!1)}}delete(e,t={}){return this.request("DELETE",e,t)}get(e,t={}){return this.request("GET",e,t)}head(e,t={}){return this.request("HEAD",e,t)}jsonp(e,t){return this.request("JSONP",e,{params:new Pi().append(t,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,t={}){return this.request("OPTIONS",e,t)}patch(e,t,r={}){return this.request("PATCH",e,ru(r,t))}post(e,t,r={}){return this.request("POST",e,ru(r,t))}put(e,t,r={}){return this.request("PUT",e,ru(r,t))}static \u0275fac=function(t){return new(t||n)(G(lu))};static \u0275prov=w({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var my=new S("",{factory:()=>!0}),hy="XSRF-TOKEN",fy=new S("",{factory:()=>hy}),py="X-XSRF-TOKEN",gy=new S("",{factory:()=>py}),_y=(()=>{class n{cookieName=l(fy);doc=l(X);lastCookieString="";lastToken=null;parseCount=0;getToken(){let e=this.doc.cookie||"";return e!==this.lastCookieString&&(this.parseCount++,this.lastToken=Lo(e,this.cookieName),this.lastCookieString=e),this.lastToken}static \u0275fac=function(t){return new(t||n)};static \u0275prov=w({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),qf=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275prov=w({token:n,factory:function(t){let r=null;return t?r=new(t||n):r=G(_y),r},providedIn:"root"})}return n})();function vy(n,i){if(!l(my)||n.method==="GET"||n.method==="HEAD")return i(n);try{let r=l(Oi).href,{origin:a}=new URL(r),{origin:o}=new URL(n.url,a);if(a!==o)return i(n)}catch{return i(n)}let e=l(qf).getToken(),t=l(gy);return e!=null&&!n.headers.has(t)&&(n=n.clone({headers:n.headers.set(t,e)})),i(n)}var cu=(function(n){return n[n.Interceptors=0]="Interceptors",n[n.LegacyInterceptors=1]="LegacyInterceptors",n[n.CustomXsrfConfiguration=2]="CustomXsrfConfiguration",n[n.NoXsrfProtection=3]="NoXsrfProtection",n[n.JsonpSupport=4]="JsonpSupport",n[n.RequestsMadeViaParent=5]="RequestsMadeViaParent",n[n.Fetch=6]="Fetch",n})(cu||{});function by(n,i){return{\u0275kind:n,\u0275providers:i}}function du(...n){let i=[Xt,Dl,{provide:lu,useExisting:Dl},{provide:su,useFactory:()=>l(ly,{optional:!0})??l(au)},{provide:ou,useValue:vy,multi:!0}];for(let e of n)i.push(...e.\u0275providers);return Ur(i)}function uu(n){return by(cu.Interceptors,n.map(i=>({provide:ou,useValue:i,multi:!0})))}var Zf=(()=>{class n{_doc;constructor(e){this._doc=e}getTitle(){return this._doc.title}setTitle(e){this._doc.title=e||""}static \u0275fac=function(t){return new(t||n)(G(X))};static \u0275prov=w({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var $o=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275prov=w({token:n,factory:function(t){let r=null;return t?r=new(t||n):r=G(Cy),r},providedIn:"root"})}return n})(),Cy=(()=>{class n extends $o{_doc;constructor(e){super(),this._doc=e}sanitize(e,t){if(t==null)return null;switch(e){case Wt.NONE:return t;case Wt.HTML:return Aa(t,"HTML")?Yr(t):Zh(this._doc,String(t)).toString();case Wt.STYLE:return Aa(t,"Style")?Yr(t):t;case Wt.SCRIPT:if(Aa(t,"Script"))return Yr(t);throw new ge(5200,!1);case Wt.URL:return Aa(t,"URL")?Yr(t):qh(String(t));case Wt.RESOURCE_URL:if(Aa(t,"ResourceURL"))return Yr(t);throw new ge(5201,!1);default:throw new ge(5202,!1)}}bypassSecurityTrustHtml(e){return Hh(e)}bypassSecurityTrustStyle(e){return $h(e)}bypassSecurityTrustScript(e){return Gh(e)}bypassSecurityTrustUrl(e){return Wh(e)}bypassSecurityTrustResourceUrl(e){return Yh(e)}static \u0275fac=function(t){return new(t||n)(G(X))};static \u0275prov=w({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var ye="primary",ns=Symbol("RouteTitle"),gu=class{params;constructor(i){this.params=i||{}}has(i){return Object.prototype.hasOwnProperty.call(this.params,i)}get(i){if(this.has(i)){let e=this.params[i];return Array.isArray(e)?e[0]:e}return null}getAll(i){if(this.has(i)){let e=this.params[i];return Array.isArray(e)?e:[e]}return[]}get keys(){return Object.keys(this.params)}};function ia(n){return new gu(n)}function mu(n,i,e){for(let t=0;t<n.length;t++){let r=n[t],a=i[t];if(r[0]===":")e[r.substring(1)]=a;else if(r!==a.path)return!1}return!0}function rp(n,i,e){let t=e.path.split("/"),r=t.indexOf("**");if(r===-1){if(t.length>n.length||e.pathMatch==="full"&&(i.hasChildren()||t.length<n.length))return null;let c={},m=n.slice(0,t.length);return mu(t,m,c)?{consumed:m,posParams:c}:null}if(r!==t.lastIndexOf("**"))return null;let a=t.slice(0,r),o=t.slice(r+1);if(a.length+o.length>n.length||e.pathMatch==="full"&&i.hasChildren()&&e.path!=="**")return null;let s={};return!mu(a,n.slice(0,a.length),s)||!mu(o,n.slice(n.length-o.length),s)?null:{consumed:n,posParams:s}}function Al(n){return new Promise((i,e)=>{n.pipe(Ji()).subscribe({next:t=>i(t),error:t=>e(t)})})}function Dy(n,i){if(n.length!==i.length)return!1;for(let e=0;e<n.length;++e)if(!hi(n[e],i[e]))return!1;return!0}function hi(n,i){let e=n?_u(n):void 0,t=i?_u(i):void 0;if(!e||!t||e.length!=t.length)return!1;let r;for(let a=0;a<e.length;a++)if(r=e[a],!ap(n[r],i[r]))return!1;return!0}function _u(n){return[...Object.keys(n),...Object.getOwnPropertySymbols(n)]}function ap(n,i){if(Array.isArray(n)&&Array.isArray(i)){if(n.length!==i.length)return!1;let e=[...n].sort(),t=[...i].sort();return e.every((r,a)=>t[a]===r)}else return n===i}function wy(n){return n.length>0?n[n.length-1]:null}function aa(n){return Ea(n)?n:Io(n)?Ot(Promise.resolve(n)):Q(n)}function op(n){return Ea(n)?Al(n):Promise.resolve(n)}var Ey={exact:cp,subset:dp},sp={exact:xy,subset:Sy,ignored:()=>!0},lp={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},vu={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"};function Xf(n,i,e){return Ey[e.paths](n.root,i.root,e.matrixParams)&&sp[e.queryParams](n.queryParams,i.queryParams)&&!(e.fragment==="exact"&&n.fragment!==i.fragment)}function xy(n,i){return hi(n,i)}function cp(n,i,e){if(!na(n.segments,i.segments)||!xl(n.segments,i.segments,e)||n.numberOfChildren!==i.numberOfChildren)return!1;for(let t in i.children)if(!n.children[t]||!cp(n.children[t],i.children[t],e))return!1;return!0}function Sy(n,i){return Object.keys(i).length<=Object.keys(n).length&&Object.keys(i).every(e=>ap(n[e],i[e]))}function dp(n,i,e){return up(n,i,i.segments,e)}function up(n,i,e,t){if(n.segments.length>e.length){let r=n.segments.slice(0,e.length);return!(!na(r,e)||i.hasChildren()||!xl(r,e,t))}else if(n.segments.length===e.length){if(!na(n.segments,e)||!xl(n.segments,e,t))return!1;for(let r in i.children)if(!n.children[r]||!dp(n.children[r],i.children[r],t))return!1;return!0}else{let r=e.slice(0,n.segments.length),a=e.slice(n.segments.length);return!na(n.segments,r)||!xl(n.segments,r,t)||!n.children[ye]?!1:up(n.children[ye],i,a,t)}}function xl(n,i,e){return i.every((t,r)=>sp[e](n[r].parameters,t.parameters))}var on=class{root;queryParams;fragment;_queryParamMap;constructor(i=new We([],{}),e={},t=null){this.root=i,this.queryParams=e,this.fragment=t}get queryParamMap(){return this._queryParamMap??=ia(this.queryParams),this._queryParamMap}toString(){return Ry.serialize(this)}},We=class{segments;children;parent=null;constructor(i,e){this.segments=i,this.children=e,Object.values(e).forEach(t=>t.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return Sl(this)}},rr=class{path;parameters;_parameterMap;constructor(i,e){this.path=i,this.parameters=e}get parameterMap(){return this._parameterMap??=ia(this.parameters),this._parameterMap}toString(){return hp(this)}};function My(n,i){return na(n,i)&&n.every((e,t)=>hi(e.parameters,i[t].parameters))}function na(n,i){return n.length!==i.length?!1:n.every((e,t)=>e.path===i[t].path)}function Ay(n,i){let e=[];return Object.entries(n.children).forEach(([t,r])=>{t===ye&&(e=e.concat(i(r,t)))}),Object.entries(n.children).forEach(([t,r])=>{t!==ye&&(e=e.concat(i(r,t)))}),e}var sr=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275prov=w({token:n,factory:()=>new Li,providedIn:"root"})}return n})(),Li=class{parse(i){let e=new yu(i);return new on(e.parseRootSegment(),e.parseQueryParams(),e.parseFragment())}serialize(i){let e=`/${Go(i.root,!0)}`,t=Iy(i.queryParams),r=typeof i.fragment=="string"?`#${ky(i.fragment)}`:"";return`${e}${t}${r}`}},Ry=new Li;function Sl(n){return n.segments.map(i=>hp(i)).join("/")}function Go(n,i){if(!n.hasChildren())return Sl(n);if(i){let e=n.children[ye]?Go(n.children[ye],!1):"",t=[];return Object.entries(n.children).forEach(([r,a])=>{r!==ye&&t.push(`${r}:${Go(a,!1)}`)}),t.length>0?`${e}(${t.join("//")})`:e}else{let e=Ay(n,(t,r)=>r===ye?[Go(n.children[ye],!1)]:[`${r}:${Go(t,!1)}`]);return Object.keys(n.children).length===1&&n.children[ye]!=null?`${Sl(n)}/${e[0]}`:`${Sl(n)}/(${e.join("//")})`}}function mp(n){return encodeURIComponent(n).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function wl(n){return mp(n).replace(/%3B/gi,";")}function ky(n){return encodeURI(n)}function bu(n){return mp(n).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function Ml(n){return decodeURIComponent(n)}function Qf(n){return Ml(n.replace(/\+/g,"%20"))}function hp(n){return`${bu(n.path)}${Ty(n.parameters)}`}function Ty(n){return Object.entries(n).map(([i,e])=>`;${bu(i)}=${bu(e)}`).join("")}function Iy(n){let i=Object.entries(n).map(([e,t])=>Array.isArray(t)?t.map(r=>`${wl(e)}=${wl(r)}`).join("&"):`${wl(e)}=${wl(t)}`).filter(e=>e);return i.length?`?${i.join("&")}`:""}var Fy=/^[^\/()?;#]+/;function hu(n){let i=n.match(Fy);return i?i[0]:""}var Oy=/^[^\/()?;=#]+/;function Py(n){let i=n.match(Oy);return i?i[0]:""}var Ny=/^[^=?&#]+/;function Ly(n){let i=n.match(Ny);return i?i[0]:""}var Vy=/^[^&#]+/;function By(n){let i=n.match(Vy);return i?i[0]:""}var yu=class{url;remaining;constructor(i){this.url=i,this.remaining=i}parseRootSegment(){return this.consumeOptional("/"),this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new We([],{}):new We([],this.parseChildren())}parseQueryParams(){let i={};if(this.consumeOptional("?"))do this.parseQueryParam(i);while(this.consumeOptional("&"));return i}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(i=0){if(i>50)throw new ge(4010,!1);if(this.remaining==="")return{};this.consumeOptional("/");let e=[];for(this.peekStartsWith("(")||e.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),e.push(this.parseSegment());let t={};this.peekStartsWith("/(")&&(this.capture("/"),t=this.parseParens(!0,i));let r={};return this.peekStartsWith("(")&&(r=this.parseParens(!1,i)),(e.length>0||Object.keys(t).length>0)&&(r[ye]=new We(e,t)),r}parseSegment(){let i=hu(this.remaining);if(i===""&&this.peekStartsWith(";"))throw new ge(4009,!1);return this.capture(i),new rr(Ml(i),this.parseMatrixParams())}parseMatrixParams(){let i={};for(;this.consumeOptional(";");)this.parseParam(i);return i}parseParam(i){let e=Py(this.remaining);if(!e)return;this.capture(e);let t="";if(this.consumeOptional("=")){let r=hu(this.remaining);r&&(t=r,this.capture(t))}i[Ml(e)]=Ml(t)}parseQueryParam(i){let e=Ly(this.remaining);if(!e)return;this.capture(e);let t="";if(this.consumeOptional("=")){let o=By(this.remaining);o&&(t=o,this.capture(t))}let r=Qf(e),a=Qf(t);if(i.hasOwnProperty(r)){let o=i[r];Array.isArray(o)||(o=[o],i[r]=o),o.push(a)}else i[r]=a}parseParens(i,e){let t={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let r=hu(this.remaining),a=this.remaining[r.length];if(a!=="/"&&a!==")"&&a!==";")throw new ge(4010,!1);let o;r.indexOf(":")>-1?(o=r.slice(0,r.indexOf(":")),this.capture(o),this.capture(":")):i&&(o=ye);let s=this.parseChildren(e+1);t[o??ye]=Object.keys(s).length===1&&s[ye]?s[ye]:new We([],s),this.consumeOptional("//")}return t}peekStartsWith(i){return this.remaining.startsWith(i)}consumeOptional(i){return this.peekStartsWith(i)?(this.remaining=this.remaining.substring(i.length),!0):!1}capture(i){if(!this.consumeOptional(i))throw new ge(4011,!1)}};function fp(n){return n.segments.length>0?new We([],{[ye]:n}):n}function pp(n){let i={};for(let[t,r]of Object.entries(n.children)){let a=pp(r);if(t===ye&&a.segments.length===0&&a.hasChildren())for(let[o,s]of Object.entries(a.children))i[o]=s;else(a.segments.length>0||a.hasChildren())&&(i[t]=a)}let e=new We(n.segments,i);return jy(e)}function jy(n){if(n.numberOfChildren===1&&n.children[ye]){let i=n.children[ye];return new We(n.segments.concat(i.segments),i.children)}return n}function ar(n){return n instanceof on}function gp(n,i,e=null,t=null,r=new Li){let a=_p(n);return vp(a,i,e,t,r)}function _p(n){let i;function e(a){let o={};for(let c of a.children){let m=e(c);o[c.outlet]=m}let s=new We(a.url,o);return a===n&&(i=s),s}let t=e(n.root),r=fp(t);return i??r}function vp(n,i,e,t,r){let a=n;for(;a.parent;)a=a.parent;if(i.length===0)return fu(a,a,a,e,t,r);let o=zy(i);if(o.toRoot())return fu(a,a,new We([],{}),e,t,r);let s=Uy(o,a,n),c=s.processChildren?Yo(s.segmentGroup,s.index,o.commands):yp(s.segmentGroup,s.index,o.commands);return fu(a,s.segmentGroup,c,e,t,r)}function Rl(n){return typeof n=="object"&&n!=null&&!n.outlets&&!n.segmentPath}function Zo(n){return typeof n=="object"&&n!=null&&n.outlets}function Jf(n,i,e){n||="\u0275";let t=new on;return t.queryParams={[n]:i},e.parse(e.serialize(t)).queryParams[n]}function fu(n,i,e,t,r,a){let o={};for(let[m,f]of Object.entries(t??{}))o[m]=Array.isArray(f)?f.map(g=>Jf(m,g,a)):Jf(m,f,a);let s;n===i?s=e:s=bp(n,i,e);let c=fp(pp(s));return new on(c,o,r)}function bp(n,i,e){let t={};return Object.entries(n.children).forEach(([r,a])=>{a===i?t[r]=e:t[r]=bp(a,i,e)}),new We(n.segments,t)}var kl=class{isAbsolute;numberOfDoubleDots;commands;constructor(i,e,t){if(this.isAbsolute=i,this.numberOfDoubleDots=e,this.commands=t,i&&t.length>0&&Rl(t[0]))throw new ge(4003,!1);let r=t.find(Zo);if(r&&r!==wy(t))throw new ge(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function zy(n){if(typeof n[0]=="string"&&n.length===1&&n[0]==="/")return new kl(!0,0,n);let i=0,e=!1,t=n.reduce((r,a,o)=>{if(typeof a=="object"&&a!=null){if(a.outlets){let s={};return Object.entries(a.outlets).forEach(([c,m])=>{s[c]=typeof m=="string"?m.split("/"):m}),[...r,{outlets:s}]}if(a.segmentPath)return[...r,a.segmentPath]}return typeof a!="string"?[...r,a]:o===0?(a.split("/").forEach((s,c)=>{c==0&&s==="."||(c==0&&s===""?e=!0:s===".."?i++:s!=""&&r.push(s))}),r):[...r,a]},[]);return new kl(e,i,t)}var Va=class{segmentGroup;processChildren;index;constructor(i,e,t){this.segmentGroup=i,this.processChildren=e,this.index=t}};function Uy(n,i,e){if(n.isAbsolute)return new Va(i,!0,0);if(!e)return new Va(i,!1,NaN);if(e.parent===null)return new Va(e,!0,0);let t=Rl(n.commands[0])?0:1,r=e.segments.length-1+t;return Hy(e,r,n.numberOfDoubleDots)}function Hy(n,i,e){let t=n,r=i,a=e;for(;a>r;){if(a-=r,t=t.parent,!t)throw new ge(4005,!1);r=t.segments.length}return new Va(t,!1,r-a)}function $y(n){return Zo(n[0])?n[0].outlets:{[ye]:n}}function yp(n,i,e){if(n??=new We([],{}),n.segments.length===0&&n.hasChildren())return Yo(n,i,e);let t=Gy(n,i,e),r=e.slice(t.commandIndex);if(t.match&&t.pathIndex<n.segments.length){let a=new We(n.segments.slice(0,t.pathIndex),{});return a.children[ye]=new We(n.segments.slice(t.pathIndex),n.children),Yo(a,0,r)}else return t.match&&r.length===0?new We(n.segments,{}):t.match&&!n.hasChildren()?Cu(n,i,e):t.match?Yo(n,0,r):Cu(n,i,e)}function Yo(n,i,e){if(e.length===0)return new We(n.segments,{});{let t=$y(e),r={};if(Object.keys(t).some(a=>a!==ye)&&n.children[ye]&&n.numberOfChildren===1&&n.children[ye].segments.length===0){let a=Yo(n.children[ye],i,e);return new We(n.segments,a.children)}return Object.entries(t).forEach(([a,o])=>{typeof o=="string"&&(o=[o]),o!==null&&(r[a]=yp(n.children[a],i,o))}),Object.entries(n.children).forEach(([a,o])=>{t[a]===void 0&&(r[a]=o)}),new We(n.segments,r)}}function Gy(n,i,e){let t=0,r=i,a={match:!1,pathIndex:0,commandIndex:0};for(;r<n.segments.length;){if(t>=e.length)return a;let o=n.segments[r],s=e[t];if(Zo(s))break;let c=`${s}`,m=t<e.length-1?e[t+1]:null;if(r>0&&c===void 0)break;if(c&&m&&typeof m=="object"&&m.outlets===void 0){if(!tp(c,m,o))return a;t+=2}else{if(!tp(c,{},o))return a;t++}r++}return{match:!0,pathIndex:r,commandIndex:t}}function Cu(n,i,e){let t=n.segments.slice(0,i),r=0;for(;r<e.length;){let a=e[r];if(Zo(a)){let c=Wy(a.outlets);return new We(t,c)}if(r===0&&Rl(e[0])){let c=n.segments[i];t.push(new rr(c.path,ep(e[0]))),r++;continue}let o=Zo(a)?a.outlets[ye]:`${a}`,s=r<e.length-1?e[r+1]:null;o&&s&&Rl(s)?(t.push(new rr(o,ep(s))),r+=2):(t.push(new rr(o,{})),r++)}return new We(t,{})}function Wy(n){let i={};return Object.entries(n).forEach(([e,t])=>{typeof t=="string"&&(t=[t]),t!==null&&(i[e]=Cu(new We([],{}),0,t))}),i}function ep(n){let i={};return Object.entries(n).forEach(([e,t])=>i[e]=`${t}`),i}function tp(n,i,e){return n==e.path&&hi(i,e.parameters)}var Ba="imperative",St=(function(n){return n[n.NavigationStart=0]="NavigationStart",n[n.NavigationEnd=1]="NavigationEnd",n[n.NavigationCancel=2]="NavigationCancel",n[n.NavigationError=3]="NavigationError",n[n.RoutesRecognized=4]="RoutesRecognized",n[n.ResolveStart=5]="ResolveStart",n[n.ResolveEnd=6]="ResolveEnd",n[n.GuardsCheckStart=7]="GuardsCheckStart",n[n.GuardsCheckEnd=8]="GuardsCheckEnd",n[n.RouteConfigLoadStart=9]="RouteConfigLoadStart",n[n.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",n[n.ChildActivationStart=11]="ChildActivationStart",n[n.ChildActivationEnd=12]="ChildActivationEnd",n[n.ActivationStart=13]="ActivationStart",n[n.ActivationEnd=14]="ActivationEnd",n[n.Scroll=15]="Scroll",n[n.NavigationSkipped=16]="NavigationSkipped",n})(St||{}),sn=class{id;url;constructor(i,e){this.id=i,this.url=e}},or=class extends sn{type=St.NavigationStart;navigationTrigger;restoredState;constructor(i,e,t="imperative",r=null){super(i,e),this.navigationTrigger=t,this.restoredState=r}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},Cn=class extends sn{urlAfterRedirects;type=St.NavigationEnd;constructor(i,e,t){super(i,e),this.urlAfterRedirects=t}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},jt=(function(n){return n[n.Redirect=0]="Redirect",n[n.SupersededByNewNavigation=1]="SupersededByNewNavigation",n[n.NoDataFromResolver=2]="NoDataFromResolver",n[n.GuardRejected=3]="GuardRejected",n[n.Aborted=4]="Aborted",n})(jt||{}),za=(function(n){return n[n.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",n[n.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",n})(za||{}),yn=class extends sn{reason;code;type=St.NavigationCancel;constructor(i,e,t,r){super(i,e),this.reason=t,this.code=r}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}};function Cp(n){return n instanceof yn&&(n.code===jt.Redirect||n.code===jt.SupersededByNewNavigation)}var fi=class extends sn{reason;code;type=St.NavigationSkipped;constructor(i,e,t,r){super(i,e),this.reason=t,this.code=r}},ra=class extends sn{error;target;type=St.NavigationError;constructor(i,e,t,r){super(i,e),this.error=t,this.target=r}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},Ko=class extends sn{urlAfterRedirects;state;type=St.RoutesRecognized;constructor(i,e,t,r){super(i,e),this.urlAfterRedirects=t,this.state=r}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Tl=class extends sn{urlAfterRedirects;state;type=St.GuardsCheckStart;constructor(i,e,t,r){super(i,e),this.urlAfterRedirects=t,this.state=r}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Il=class extends sn{urlAfterRedirects;state;shouldActivate;type=St.GuardsCheckEnd;constructor(i,e,t,r,a){super(i,e),this.urlAfterRedirects=t,this.state=r,this.shouldActivate=a}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},Fl=class extends sn{urlAfterRedirects;state;type=St.ResolveStart;constructor(i,e,t,r){super(i,e),this.urlAfterRedirects=t,this.state=r}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Ol=class extends sn{urlAfterRedirects;state;type=St.ResolveEnd;constructor(i,e,t,r){super(i,e),this.urlAfterRedirects=t,this.state=r}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Pl=class{route;type=St.RouteConfigLoadStart;constructor(i){this.route=i}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},Nl=class{route;type=St.RouteConfigLoadEnd;constructor(i){this.route=i}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},Ll=class{snapshot;type=St.ChildActivationStart;constructor(i){this.snapshot=i}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Vl=class{snapshot;type=St.ChildActivationEnd;constructor(i){this.snapshot=i}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Bl=class{snapshot;type=St.ActivationStart;constructor(i){this.snapshot=i}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},jl=class{snapshot;type=St.ActivationEnd;constructor(i){this.snapshot=i}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Ua=class{routerEvent;position;anchor;scrollBehavior;type=St.Scroll;constructor(i,e,t,r){this.routerEvent=i,this.position=e,this.anchor=t,this.scrollBehavior=r}toString(){let i=this.position?`${this.position[0]}, ${this.position[1]}`:null;return`Scroll(anchor: '${this.anchor}', position: '${i}')`}},Ha=class{},Xo=class{},$a=class{url;navigationBehaviorOptions;constructor(i,e){this.url=i,this.navigationBehaviorOptions=e}};function Yy(n){return!(n instanceof Ha)&&!(n instanceof $a)&&!(n instanceof Xo)}var zl=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return this.route?.snapshot._environmentInjector??this.rootInjector}constructor(i){this.rootInjector=i,this.children=new oa(this.rootInjector)}},oa=(()=>{class n{rootInjector;contexts=new Map;constructor(e){this.rootInjector=e}onChildOutletCreated(e,t){let r=this.getOrCreateContext(e);r.outlet=t,this.contexts.set(e,r)}onChildOutletDestroyed(e){let t=this.getContext(e);t&&(t.outlet=null,t.attachRef=null)}onOutletDeactivated(){let e=this.contexts;return this.contexts=new Map,e}onOutletReAttached(e){this.contexts=e}getOrCreateContext(e){let t=this.getContext(e);return t||(t=new zl(this.rootInjector),this.contexts.set(e,t)),t}getContext(e){return this.contexts.get(e)||null}static \u0275fac=function(t){return new(t||n)(G(kt))};static \u0275prov=w({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Ul=class{_root;constructor(i){this._root=i}get root(){return this._root.value}parent(i){let e=this.pathFromRoot(i);return e.length>1?e[e.length-2]:null}children(i){let e=Du(i,this._root);return e?e.children.map(t=>t.value):[]}firstChild(i){let e=Du(i,this._root);return e&&e.children.length>0?e.children[0].value:null}siblings(i){let e=wu(i,this._root);return e.length<2?[]:e[e.length-2].children.map(r=>r.value).filter(r=>r!==i)}pathFromRoot(i){return wu(i,this._root).map(e=>e.value)}};function Du(n,i){if(n===i.value)return i;for(let e of i.children){let t=Du(n,e);if(t)return t}return null}function wu(n,i){if(n===i.value)return[i];for(let e of i.children){let t=wu(n,e);if(t.length)return t.unshift(i),t}return[]}var an=class{value;children;constructor(i,e){this.value=i,this.children=e}toString(){return`TreeNode(${this.value})`}};function La(n){let i={};return n&&n.children.forEach(e=>i[e.value.outlet]=e),i}var Qo=class extends Ul{snapshot;constructor(i,e){super(i),this.snapshot=e,Iu(this,i)}toString(){return this.snapshot.toString()}};function Dp(n,i){let e=qy(n,i),t=new Bt([new rr("",{})]),r=new Bt({}),a=new Bt({}),o=new Bt({}),s=new Bt(""),c=new pi(t,r,o,s,a,ye,n,e.root);return c.snapshot=e.root,new Qo(new an(c,[]),e)}function qy(n,i){let e={},t={},r={},o=new Ga([],e,r,"",t,ye,n,null,{},i);return new Jo("",new an(o,[]))}var pi=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;constructor(i,e,t,r,a,o,s,c){this.urlSubject=i,this.paramsSubject=e,this.queryParamsSubject=t,this.fragmentSubject=r,this.dataSubject=a,this.outlet=o,this.component=s,this._futureSnapshot=c,this.title=this.dataSubject?.pipe(Oe(m=>m[ns]))??Q(void 0),this.url=i,this.params=e,this.queryParams=t,this.fragment=r,this.data=a}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(Oe(i=>ia(i))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(Oe(i=>ia(i))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function Tu(n,i,e="emptyOnly"){let t,{routeConfig:r}=n;return i!==null&&(e==="always"||r?.path===""||!i.component&&!i.routeConfig?.loadComponent)?t={params:x(x({},i.params),n.params),data:x(x({},i.data),n.data),resolve:x(x(x(x({},n.data),i.data),r?.data),n._resolvedData)}:t={params:x({},n.params),data:x({},n.data),resolve:x(x({},n.data),n._resolvedData??{})},r&&Ep(r)&&(t.resolve[ns]=r.title),t}var Ga=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;_environmentInjector;get title(){return this.data?.[ns]}constructor(i,e,t,r,a,o,s,c,m,f){this.url=i,this.params=e,this.queryParams=t,this.fragment=r,this.data=a,this.outlet=o,this.component=s,this.routeConfig=c,this._resolve=m,this._environmentInjector=f}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=ia(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=ia(this.queryParams),this._queryParamMap}toString(){let i=this.url.map(t=>t.toString()).join("/"),e=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${i}', path:'${e}')`}},Jo=class extends Ul{url;constructor(i,e){super(e),this.url=i,Iu(this,e)}toString(){return wp(this._root)}};function Iu(n,i){i.value._routerState=n,i.children.forEach(e=>Iu(n,e))}function wp(n){let i=n.children.length>0?` { ${n.children.map(wp).join(", ")} } `:"";return`${n.value}${i}`}function pu(n){if(n.snapshot){let i=n.snapshot,e=n._futureSnapshot;n.snapshot=e,hi(i.queryParams,e.queryParams)||n.queryParamsSubject.next(e.queryParams),i.fragment!==e.fragment&&n.fragmentSubject.next(e.fragment),hi(i.params,e.params)||n.paramsSubject.next(e.params),Dy(i.url,e.url)||n.urlSubject.next(e.url),hi(i.data,e.data)||n.dataSubject.next(e.data)}else n.snapshot=n._futureSnapshot,n.dataSubject.next(n._futureSnapshot.data)}function Eu(n,i){let e=hi(n.params,i.params)&&My(n.url,i.url),t=!n.parent!=!i.parent;return e&&!t&&(!n.parent||Eu(n.parent,i.parent))}function Ep(n){return typeof n.title=="string"||n.title===null}var xp=new S(""),is=(()=>{class n{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=ye;activateEvents=new j;deactivateEvents=new j;attachEvents=new j;detachEvents=new j;routerOutletData=uf();parentContexts=l(oa);location=l(gt);changeDetector=l(Ee);inputBinder=l(rs,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(e){if(e.name){let{firstChange:t,previousValue:r}=e.name;if(t)return;this.isTrackedInParentContexts(r)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(r)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(e){return this.parentContexts.getContext(e)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let e=this.parentContexts.getContext(this.name);e?.route&&(e.attachRef?this.attach(e.attachRef,e.route):this.activateWith(e.route,e.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new ge(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new ge(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new ge(4012,!1);this.location.detach();let e=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(e.instance),e}attach(e,t){this.activated=e,this._activatedRoute=t,this.location.insert(e.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(e.instance)}deactivate(){if(this.activated){let e=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(e)}}activateWith(e,t){if(this.isActivated)throw new ge(4013,!1);this._activatedRoute=e;let r=this.location,o=e.snapshot.component,s=this.parentContexts.getOrCreateContext(this.name).children,c=new xu(e,s,r.injector,this.routerOutletData);this.activated=r.createComponent(o,{index:r.length,injector:c,environmentInjector:t}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static \u0275fac=function(t){return new(t||n)};static \u0275dir=A({type:n,selectors:[["router-outlet"]],inputs:{name:"name",routerOutletData:[1,"routerOutletData"]},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],features:[Ue]})}return n})(),xu=class{route;childContexts;parent;outletData;constructor(i,e,t,r){this.route=i,this.childContexts=e,this.parent=t,this.outletData=r}get(i,e){return i===pi?this.route:i===oa?this.childContexts:i===xp?this.outletData:this.parent.get(i,e)}},rs=new S(""),Fu=(()=>{class n{outletDataSubscriptions=new Map;bindActivatedRouteToOutletComponent(e){this.unsubscribeFromRouteData(e),this.subscribeToRouteData(e)}unsubscribeFromRouteData(e){this.outletDataSubscriptions.get(e)?.unsubscribe(),this.outletDataSubscriptions.delete(e)}subscribeToRouteData(e){let{activatedRoute:t}=e,r=Ti([t.queryParams,t.params,t.data]).pipe(Pt(([a,o,s],c)=>(s=x(x(x({},a),o),s),c===0?Q(s):Promise.resolve(s)))).subscribe(a=>{if(!e.isActivated||!e.activatedComponentRef||e.activatedRoute!==t||t.component===null){this.unsubscribeFromRouteData(e);return}let o=pf(t.component);if(!o){this.unsubscribeFromRouteData(e);return}for(let{templateName:s}of o.inputs)e.activatedComponentRef.setInput(s,a[s])});this.outletDataSubscriptions.set(e,r)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=w({token:n,factory:n.\u0275fac})}return n})(),Ou=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=N({type:n,selectors:[["ng-component"]],exportAs:["emptyRouterOutlet"],decls:1,vars:0,template:function(t,r){t&1&&T(0,"router-outlet")},dependencies:[is],encapsulation:2})}return n})();function Pu(n){let i=n.children&&n.children.map(Pu),e=i?He(x({},n),{children:i}):x({},n);return!e.component&&!e.loadComponent&&(i||e.loadChildren)&&e.outlet&&e.outlet!==ye&&(e.component=Ou),e}function Zy(n,i,e){let t=es(n,i._root,e?e._root:void 0);return new Qo(t,i)}function es(n,i,e){if(e&&n.shouldReuseRoute(i.value,e.value.snapshot)){let t=e.value;t._futureSnapshot=i.value;let r=Ky(n,i,e);return new an(t,r)}else{if(n.shouldAttach(i.value)){let a=n.retrieve(i.value);if(a!==null){let o=a.route;return o.value._futureSnapshot=i.value,o.children=i.children.map(s=>es(n,s)),o}}let t=Xy(i.value),r=i.children.map(a=>es(n,a));return new an(t,r)}}function Ky(n,i,e){return i.children.map(t=>{for(let r of e.children)if(n.shouldReuseRoute(t.value,r.value.snapshot))return es(n,t,r);return es(n,t)})}function Xy(n){return new pi(new Bt(n.url),new Bt(n.params),new Bt(n.queryParams),new Bt(n.fragment),new Bt(n.data),n.outlet,n.component,n)}var Wa=class{redirectTo;navigationBehaviorOptions;constructor(i,e){this.redirectTo=i,this.navigationBehaviorOptions=e}},Sp="ngNavigationCancelingError";function Hl(n,i){let{redirectTo:e,navigationBehaviorOptions:t}=ar(i)?{redirectTo:i,navigationBehaviorOptions:void 0}:i,r=Mp(!1,jt.Redirect);return r.url=e,r.navigationBehaviorOptions=t,r}function Mp(n,i){let e=new Error(`NavigationCancelingError: ${n||""}`);return e[Sp]=!0,e.cancellationCode=i,e}function Qy(n){return Ap(n)&&ar(n.url)}function Ap(n){return!!n&&n[Sp]}var Su=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(i,e,t,r,a){this.routeReuseStrategy=i,this.futureState=e,this.currState=t,this.forwardEvent=r,this.inputBindingEnabled=a}activate(i){let e=this.futureState._root,t=this.currState?this.currState._root:null;this.deactivateChildRoutes(e,t,i),pu(this.futureState.root),this.activateChildRoutes(e,t,i)}deactivateChildRoutes(i,e,t){let r=La(e);i.children.forEach(a=>{let o=a.value.outlet;this.deactivateRoutes(a,r[o],t),delete r[o]}),Object.values(r).forEach(a=>{this.deactivateRouteAndItsChildren(a,t)})}deactivateRoutes(i,e,t){let r=i.value,a=e?e.value:null;if(r===a)if(r.component){let o=t.getContext(r.outlet);o&&this.deactivateChildRoutes(i,e,o.children)}else this.deactivateChildRoutes(i,e,t);else a&&this.deactivateRouteAndItsChildren(e,t)}deactivateRouteAndItsChildren(i,e){i.value.component&&this.routeReuseStrategy.shouldDetach(i.value.snapshot)?this.detachAndStoreRouteSubtree(i,e):this.deactivateRouteAndOutlet(i,e)}detachAndStoreRouteSubtree(i,e){let t=e.getContext(i.value.outlet),r=t&&i.value.component?t.children:e,a=La(i);for(let o of Object.values(a))this.deactivateRouteAndItsChildren(o,r);if(t&&t.outlet){let o=t.outlet.detach(),s=t.children.onOutletDeactivated();this.routeReuseStrategy.store(i.value.snapshot,{componentRef:o,route:i,contexts:s})}}deactivateRouteAndOutlet(i,e){let t=e.getContext(i.value.outlet),r=t&&i.value.component?t.children:e,a=La(i);for(let o of Object.values(a))this.deactivateRouteAndItsChildren(o,r);t&&(t.outlet&&(t.outlet.deactivate(),t.children.onOutletDeactivated()),t.attachRef=null,t.route=null)}activateChildRoutes(i,e,t){let r=La(e);i.children.forEach(a=>{this.activateRoutes(a,r[a.value.outlet],t),this.forwardEvent(new jl(a.value.snapshot))}),i.children.length&&this.forwardEvent(new Vl(i.value.snapshot))}activateRoutes(i,e,t){let r=i.value,a=e?e.value:null;if(pu(r),r===a)if(r.component){let o=t.getOrCreateContext(r.outlet);this.activateChildRoutes(i,e,o.children)}else this.activateChildRoutes(i,e,t);else if(r.component){let o=t.getOrCreateContext(r.outlet);if(this.routeReuseStrategy.shouldAttach(r.snapshot)){let s=this.routeReuseStrategy.retrieve(r.snapshot);this.routeReuseStrategy.store(r.snapshot,null),o.children.onOutletReAttached(s.contexts),o.attachRef=s.componentRef,o.route=s.route.value,o.outlet&&o.outlet.attach(s.componentRef,s.route.value),pu(s.route.value),this.activateChildRoutes(i,null,o.children)}else o.attachRef=null,o.route=r,o.outlet&&o.outlet.activateWith(r,o.injector),this.activateChildRoutes(i,null,o.children)}else this.activateChildRoutes(i,null,t)}},$l=class{path;route;constructor(i){this.path=i,this.route=this.path[this.path.length-1]}},ja=class{component;route;constructor(i,e){this.component=i,this.route=e}};function Jy(n,i,e){let t=n._root,r=i?i._root:null;return Wo(t,r,e,[t.value])}function e0(n){let i=n.routeConfig?n.routeConfig.canActivateChild:null;return!i||i.length===0?null:{node:n,guards:i}}function qa(n,i){let e=Symbol(),t=i.get(n,e);return t===e?typeof n=="function"&&!Nh(n)?n:i.get(n):t}function Wo(n,i,e,t,r={canDeactivateChecks:[],canActivateChecks:[]}){let a=La(i);return n.children.forEach(o=>{t0(o,a[o.value.outlet],e,t.concat([o.value]),r),delete a[o.value.outlet]}),Object.entries(a).forEach(([o,s])=>qo(s,e.getContext(o),r)),r}function t0(n,i,e,t,r={canDeactivateChecks:[],canActivateChecks:[]}){let a=n.value,o=i?i.value:null,s=e?e.getContext(n.value.outlet):null;if(o&&a.routeConfig===o.routeConfig){let c=n0(o,a,a.routeConfig.runGuardsAndResolvers);c?r.canActivateChecks.push(new $l(t)):(a.data=o.data,a._resolvedData=o._resolvedData),a.component?Wo(n,i,s?s.children:null,t,r):Wo(n,i,e,t,r),c&&s&&s.outlet&&s.outlet.isActivated&&r.canDeactivateChecks.push(new ja(s.outlet.component,o))}else o&&qo(i,s,r),r.canActivateChecks.push(new $l(t)),a.component?Wo(n,null,s?s.children:null,t,r):Wo(n,null,e,t,r);return r}function n0(n,i,e){if(typeof e=="function")return Gt(i._environmentInjector,()=>e(n,i));switch(e){case"pathParamsChange":return!na(n.url,i.url);case"pathParamsOrQueryParamsChange":return!na(n.url,i.url)||!hi(n.queryParams,i.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!Eu(n,i)||!hi(n.queryParams,i.queryParams);default:return!Eu(n,i)}}function qo(n,i,e){let t=La(n),r=n.value;Object.entries(t).forEach(([a,o])=>{r.component?i?qo(o,i.children.getContext(a),e):qo(o,null,e):qo(o,i,e)}),r.component?i&&i.outlet&&i.outlet.isActivated?e.canDeactivateChecks.push(new ja(i.outlet.component,r)):e.canDeactivateChecks.push(new ja(null,r)):e.canDeactivateChecks.push(new ja(null,r))}function as(n){return typeof n=="function"}function i0(n){return typeof n=="boolean"}function r0(n){return n&&as(n.canLoad)}function a0(n){return n&&as(n.canActivate)}function o0(n){return n&&as(n.canActivateChild)}function s0(n){return n&&as(n.canDeactivate)}function l0(n){return n&&as(n.canMatch)}function Rp(n){return n instanceof Fh||n?.name==="EmptyError"}var El=Symbol("INITIAL_VALUE");function Ya(){return Pt(n=>Ti(n.map(i=>i.pipe(vt(1),Rt(El)))).pipe(Oe(i=>{for(let e of i)if(e!==!0){if(e===El)return El;if(e===!1||c0(e))return e}return!0}),Ye(i=>i!==El),vt(1)))}function c0(n){return ar(n)||n instanceof Wa}function kp(n){return n.aborted?Q(void 0).pipe(vt(1)):new li(i=>{let e=()=>{i.next(),i.complete()};return n.addEventListener("abort",e),()=>n.removeEventListener("abort",e)})}function Tp(n){return Be(kp(n))}function d0(n){return ci(i=>{let{targetSnapshot:e,currentSnapshot:t,guards:{canActivateChecks:r,canDeactivateChecks:a}}=i;return a.length===0&&r.length===0?Q(He(x({},i),{guardsResult:!0})):u0(a,e,t).pipe(ci(o=>o&&i0(o)?m0(e,r,n):Q(o)),Oe(o=>He(x({},i),{guardsResult:o})))})}function u0(n,i,e){return Ot(n).pipe(ci(t=>_0(t.component,t.route,e,i)),Ji(t=>t!==!0,!0))}function m0(n,i,e){return Ot(i).pipe(jr(t=>Ws(f0(t.route.parent,e),h0(t.route,e),g0(n,t.path),p0(n,t.route))),Ji(t=>t!==!0,!0))}function h0(n,i){return n!==null&&i&&i(new Bl(n)),Q(!0)}function f0(n,i){return n!==null&&i&&i(new Ll(n)),Q(!0)}function p0(n,i){let e=i.routeConfig?i.routeConfig.canActivate:null;if(!e||e.length===0)return Q(!0);let t=e.map(r=>di(()=>{let a=i._environmentInjector,o=qa(r,a),s=a0(o)?o.canActivate(i,n):Gt(a,()=>o(i,n));return aa(s).pipe(Ji())}));return Q(t).pipe(Ya())}function g0(n,i){let e=i[i.length-1],r=i.slice(0,i.length-1).reverse().map(a=>e0(a)).filter(a=>a!==null).map(a=>di(()=>{let o=a.guards.map(s=>{let c=a.node._environmentInjector,m=qa(s,c),f=o0(m)?m.canActivateChild(e,n):Gt(c,()=>m(e,n));return aa(f).pipe(Ji())});return Q(o).pipe(Ya())}));return Q(r).pipe(Ya())}function _0(n,i,e,t){let r=i&&i.routeConfig?i.routeConfig.canDeactivate:null;if(!r||r.length===0)return Q(!0);let a=r.map(o=>{let s=i._environmentInjector,c=qa(o,s),m=s0(c)?c.canDeactivate(n,i,e,t):Gt(s,()=>c(n,i,e,t));return aa(m).pipe(Ji())});return Q(a).pipe(Ya())}function v0(n,i,e,t,r){let a=i.canLoad;if(a===void 0||a.length===0)return Q(!0);let o=a.map(s=>{let c=qa(s,n),m=r0(c)?c.canLoad(i,e):Gt(n,()=>c(i,e)),f=aa(m);return r?f.pipe(Tp(r)):f});return Q(o).pipe(Ya(),Ip(t))}function Ip(n){return Th(wt(i=>{if(typeof i!="boolean")throw Hl(n,i)}),Oe(i=>i===!0))}function b0(n,i,e,t,r,a){let o=i.canMatch;if(!o||o.length===0)return Q(!0);let s=o.map(c=>{let m=qa(c,n),f=l0(m)?m.canMatch(i,e,r):Gt(n,()=>m(i,e,r));return aa(f).pipe(Tp(a))});return Q(s).pipe(Ya(),Ip(t))}var Ni=class n extends Error{segmentGroup;constructor(i){super(),this.segmentGroup=i||null,Object.setPrototypeOf(this,n.prototype)}},ts=class n extends Error{urlTree;constructor(i){super(),this.urlTree=i,Object.setPrototypeOf(this,n.prototype)}};function y0(n){throw new ge(4e3,!1)}function C0(n){throw Mp(!1,jt.GuardRejected)}var Mu=class{urlSerializer;urlTree;constructor(i,e){this.urlSerializer=i,this.urlTree=e}async lineralizeSegments(i,e){let t=[],r=e.root;for(;;){if(t=t.concat(r.segments),r.numberOfChildren===0)return t;if(r.numberOfChildren>1||!r.children[ye])throw y0(`${i.redirectTo}`);r=r.children[ye]}}async applyRedirectCommands(i,e,t,r,a){let o=await D0(e,r,a);if(o instanceof on)throw new ts(o);let s=this.applyRedirectCreateUrlTree(o,this.urlSerializer.parse(o),i,t);if(o[0]==="/")throw new ts(s);return s}applyRedirectCreateUrlTree(i,e,t,r){let a=this.createSegmentGroup(i,e.root,t,r);return new on(a,this.createQueryParams(e.queryParams,this.urlTree.queryParams),e.fragment)}createQueryParams(i,e){let t={};return Object.entries(i).forEach(([r,a])=>{if(typeof a=="string"&&a[0]===":"){let s=a.substring(1);t[r]=e[s]}else t[r]=a}),t}createSegmentGroup(i,e,t,r){let a=this.createSegments(i,e.segments,t,r),o={};return Object.entries(e.children).forEach(([s,c])=>{o[s]=this.createSegmentGroup(i,c,t,r)}),new We(a,o)}createSegments(i,e,t,r){return e.map(a=>a.path[0]===":"?this.findPosParam(i,a,r):this.findOrReturn(a,t))}findPosParam(i,e,t){let r=t[e.path.substring(1)];if(!r)throw new ge(4001,!1);return r}findOrReturn(i,e){let t=0;for(let r of e){if(r.path===i.path)return e.splice(t),r;t++}return i}};function D0(n,i,e){if(typeof n=="string")return Promise.resolve(n);let t=n;return Al(aa(Gt(e,()=>t(i))))}function w0(n,i){return n.providers&&!n._injector&&(n._injector=Js(n.providers,i,`Route: ${n.path}`)),n._injector??i}function qn(n){return n.outlet||ye}function E0(n,i){let e=n.filter(t=>qn(t)===i);return e.push(...n.filter(t=>qn(t)!==i)),e}var Au={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function Fp(n){return{routeConfig:n.routeConfig,url:n.url,params:n.params,queryParams:n.queryParams,fragment:n.fragment,data:n.data,outlet:n.outlet,title:n.title,paramMap:n.paramMap,queryParamMap:n.queryParamMap}}function x0(n,i,e,t,r,a,o){let s=Op(n,i,e);if(!s.matched)return Q(s);let c=Fp(a(s));return t=w0(i,t),b0(t,i,e,r,c,o).pipe(Oe(m=>m===!0?s:x({},Au)))}function Op(n,i,e){if(i.path==="")return i.pathMatch==="full"&&(n.hasChildren()||e.length>0)?x({},Au):{matched:!0,consumedSegments:[],remainingSegments:e,parameters:{},positionalParamSegments:{}};let r=(i.matcher||rp)(e,n,i);if(!r)return x({},Au);let a={};Object.entries(r.posParams??{}).forEach(([s,c])=>{a[s]=c.path});let o=r.consumed.length>0?x(x({},a),r.consumed[r.consumed.length-1].parameters):a;return{matched:!0,consumedSegments:r.consumed,remainingSegments:e.slice(r.consumed.length),parameters:o,positionalParamSegments:r.posParams??{}}}function np(n,i,e,t,r){return e.length>0&&A0(n,e,t,r)?{segmentGroup:new We(i,M0(t,new We(e,n.children))),slicedSegments:[]}:e.length===0&&R0(n,e,t)?{segmentGroup:new We(n.segments,S0(n,e,t,n.children)),slicedSegments:e}:{segmentGroup:new We(n.segments,n.children),slicedSegments:e}}function S0(n,i,e,t){let r={};for(let a of e)if(Wl(n,i,a)&&!t[qn(a)]){let o=new We([],{});r[qn(a)]=o}return x(x({},t),r)}function M0(n,i){let e={};e[ye]=i;for(let t of n)if(t.path===""&&qn(t)!==ye){let r=new We([],{});e[qn(t)]=r}return e}function A0(n,i,e,t){return e.some(r=>!Wl(n,i,r)||!(qn(r)!==ye)?!1:!(t!==void 0&&qn(r)===t))}function R0(n,i,e){return e.some(t=>Wl(n,i,t))}function Wl(n,i,e){return(n.hasChildren()||i.length>0)&&e.pathMatch==="full"?!1:e.path===""}function k0(n,i,e){return i.length===0&&!n.children[e]}var Ru=class{};async function T0(n,i,e,t,r,a,o="emptyOnly",s){return new ku(n,i,e,t,r,o,a,s).recognize()}var I0=31,ku=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;abortSignal;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;constructor(i,e,t,r,a,o,s,c){this.injector=i,this.configLoader=e,this.rootComponentType=t,this.config=r,this.urlTree=a,this.paramsInheritanceStrategy=o,this.urlSerializer=s,this.abortSignal=c,this.applyRedirects=new Mu(this.urlSerializer,this.urlTree)}noMatchError(i){return new ge(4002,`'${i.segmentGroup}'`)}async recognize(){let i=np(this.urlTree.root,[],[],this.config).segmentGroup,{children:e,rootSnapshot:t}=await this.match(i),r=new an(t,e),a=new Jo("",r),o=gp(t,[],this.urlTree.queryParams,this.urlTree.fragment);return o.queryParams=this.urlTree.queryParams,a.url=this.urlSerializer.serialize(o),{state:a,tree:o}}async match(i){let e=new Ga([],Object.freeze({}),Object.freeze(x({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),ye,this.rootComponentType,null,{},this.injector);try{return{children:await this.processSegmentGroup(this.injector,this.config,i,ye,e),rootSnapshot:e}}catch(t){if(t instanceof ts)return this.urlTree=t.urlTree,this.match(t.urlTree.root);throw t instanceof Ni?this.noMatchError(t):t}}async processSegmentGroup(i,e,t,r,a){if(t.segments.length===0&&t.hasChildren())return this.processChildren(i,e,t,a);let o=await this.processSegment(i,e,t,t.segments,r,!0,a);return o instanceof an?[o]:[]}async processChildren(i,e,t,r){let a=[];for(let c of Object.keys(t.children))c==="primary"?a.unshift(c):a.push(c);let o=[];for(let c of a){let m=t.children[c],f=E0(e,c),g=await this.processSegmentGroup(i,f,m,c,r);o.push(...g)}let s=Pp(o);return F0(s),s}async processSegment(i,e,t,r,a,o,s){for(let c of e)try{return await this.processSegmentAgainstRoute(c._injector??i,e,c,t,r,a,o,s)}catch(m){if(m instanceof Ni||Rp(m))continue;throw m}if(k0(t,r,a))return new Ru;throw new Ni(t)}async processSegmentAgainstRoute(i,e,t,r,a,o,s,c){if(qn(t)!==o&&(o===ye||!Wl(r,a,t)))throw new Ni(r);if(t.redirectTo===void 0)return this.matchSegmentAgainstRoute(i,r,t,a,o,c);if(this.allowRedirects&&s)return this.expandSegmentAgainstRouteUsingRedirect(i,r,e,t,a,o,c);throw new Ni(r)}async expandSegmentAgainstRouteUsingRedirect(i,e,t,r,a,o,s){let{matched:c,parameters:m,consumedSegments:f,positionalParamSegments:g,remainingSegments:E}=Op(e,r,a);if(!c)throw new Ni(e);typeof r.redirectTo=="string"&&r.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>I0&&(this.allowRedirects=!1));let M=this.createSnapshot(i,r,a,m,s);if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let W=await this.applyRedirects.applyRedirectCommands(f,r.redirectTo,g,Fp(M),i),K=await this.applyRedirects.lineralizeSegments(r,W);return this.processSegment(i,t,e,K.concat(E),o,!1,s)}createSnapshot(i,e,t,r,a){let o=new Ga(t,r,Object.freeze(x({},this.urlTree.queryParams)),this.urlTree.fragment,P0(e),qn(e),e.component??e._loadedComponent??null,e,N0(e),i),s=Tu(o,a,this.paramsInheritanceStrategy);return o.params=Object.freeze(s.params),o.data=Object.freeze(s.data),o}async matchSegmentAgainstRoute(i,e,t,r,a,o){if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let s=F=>this.createSnapshot(i,t,F.consumedSegments,F.parameters,o),c=await Al(x0(e,t,r,i,this.urlSerializer,s,this.abortSignal));if(t.path==="**"&&(e.children={}),!c?.matched)throw new Ni(e);i=t._injector??i;let{routes:m}=await this.getChildConfig(i,t,r),f=t._loadedInjector??i,{parameters:g,consumedSegments:E,remainingSegments:M}=c,W=this.createSnapshot(i,t,E,g,o),{segmentGroup:K,slicedSegments:z}=np(e,E,M,m,a);if(z.length===0&&K.hasChildren()){let F=await this.processChildren(f,m,K,W);return new an(W,F)}if(m.length===0&&z.length===0)return new an(W,[]);let $=qn(t)===a,O=await this.processSegment(f,m,K,z,$?ye:a,!0,W);return new an(W,O instanceof an?[O]:[])}async getChildConfig(i,e,t){if(e.children)return{routes:e.children,injector:i};if(e.loadChildren){if(e._loadedRoutes!==void 0){let a=e._loadedNgModuleFactory;return a&&!e._loadedInjector&&(e._loadedInjector=a.create(i).injector),{routes:e._loadedRoutes,injector:e._loadedInjector}}if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);if(await Al(v0(i,e,t,this.urlSerializer,this.abortSignal))){let a=await this.configLoader.loadChildren(i,e);return e._loadedRoutes=a.routes,e._loadedInjector=a.injector,e._loadedNgModuleFactory=a.factory,a}throw C0(e)}return{routes:[],injector:i}}};function F0(n){n.sort((i,e)=>i.value.outlet===ye?-1:e.value.outlet===ye?1:i.value.outlet.localeCompare(e.value.outlet))}function O0(n){let i=n.value.routeConfig;return i&&i.path===""}function Pp(n){let i=[],e=new Set;for(let t of n){if(!O0(t)){i.push(t);continue}let r=i.find(a=>t.value.routeConfig===a.value.routeConfig);r!==void 0?(r.children.push(...t.children),e.add(r)):i.push(t)}for(let t of e){let r=Pp(t.children);i.push(new an(t.value,r))}return i.filter(t=>!e.has(t))}function P0(n){return n.data||{}}function N0(n){return n.resolve||{}}function L0(n,i,e,t,r,a,o){return ci(async s=>{let{state:c,tree:m}=await T0(n,i,e,t,s.extractedUrl,r,a,o);return He(x({},s),{targetSnapshot:c,urlAfterRedirects:m})})}function V0(n){return ci(i=>{let{targetSnapshot:e,guards:{canActivateChecks:t}}=i;if(!t.length)return Q(i);let r=new Set(t.map(s=>s.route)),a=new Set;for(let s of r)if(!a.has(s))for(let c of Np(s))a.add(c);let o=0;return Ot(a).pipe(jr(s=>r.has(s)?B0(s,e,n):(s.data=Tu(s,s.parent,n).resolve,Q(void 0))),wt(()=>o++),Md(1),ci(s=>o===a.size?Q(i):Zt))})}function Np(n){let i=n.children.map(e=>Np(e)).flat();return[n,...i]}function B0(n,i,e){let t=n.routeConfig,r=n._resolve;return t?.title!==void 0&&!Ep(t)&&(r[ns]=t.title),di(()=>(n.data=Tu(n,n.parent,e).resolve,j0(r,n,i).pipe(Oe(a=>(n._resolvedData=a,n.data=x(x({},n.data),a),null)))))}function j0(n,i,e){let t=_u(n);if(t.length===0)return Q({});let r={};return Ot(t).pipe(ci(a=>z0(n[a],i,e).pipe(Ji(),wt(o=>{if(o instanceof Wa)throw Hl(new Li,o);r[a]=o}))),Md(1),Oe(()=>r),Qi(a=>Rp(a)?Zt:ki(a)))}function z0(n,i,e){let t=i._environmentInjector,r=qa(n,t),a=r.resolve?r.resolve(i,e):Gt(t,()=>r(i,e));return aa(a)}function ip(n){return Pt(i=>{let e=n(i);return e?Ot(e).pipe(Oe(()=>i)):Q(i)})}var Nu=(()=>{class n{buildTitle(e){let t,r=e.root;for(;r!==void 0;)t=this.getResolvedTitleForRoute(r)??t,r=r.children.find(a=>a.outlet===ye);return t}getResolvedTitleForRoute(e){return e.data[ns]}static \u0275fac=function(t){return new(t||n)};static \u0275prov=w({token:n,factory:()=>l(Lp),providedIn:"root"})}return n})(),Lp=(()=>{class n extends Nu{title;constructor(e){super(),this.title=e}updateTitle(e){let t=this.buildTitle(e);t!==void 0&&this.title.setTitle(t)}static \u0275fac=function(t){return new(t||n)(G(Zf))};static \u0275prov=w({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),lr=new S("",{factory:()=>({})}),sa=new S(""),Yl=(()=>{class n{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=l(lf);async loadComponent(e,t){if(this.componentLoaders.get(t))return this.componentLoaders.get(t);if(t._loadedComponent)return Promise.resolve(t._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(t);let r=(async()=>{try{let a=await op(Gt(e,()=>t.loadComponent())),o=await jp(Bp(a));return this.onLoadEndListener&&this.onLoadEndListener(t),t._loadedComponent=o,o}finally{this.componentLoaders.delete(t)}})();return this.componentLoaders.set(t,r),r}loadChildren(e,t){if(this.childrenLoaders.get(t))return this.childrenLoaders.get(t);if(t._loadedRoutes)return Promise.resolve({routes:t._loadedRoutes,injector:t._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(t);let r=(async()=>{try{let a=await Vp(t,this.compiler,e,this.onLoadEndListener);return t._loadedRoutes=a.routes,t._loadedInjector=a.injector,t._loadedNgModuleFactory=a.factory,a}finally{this.childrenLoaders.delete(t)}})();return this.childrenLoaders.set(t,r),r}static \u0275fac=function(t){return new(t||n)};static \u0275prov=w({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();async function Vp(n,i,e,t){let r=await op(Gt(e,()=>n.loadChildren())),a=await jp(Bp(r)),o;a instanceof Qh||Array.isArray(a)?o=a:o=await i.compileModuleAsync(a),t&&t(n);let s,c,m=!1,f;return Array.isArray(o)?(c=o,m=!0):(s=o.create(e).injector,f=o,c=s.get(sa,[],{optional:!0,self:!0}).flat()),{routes:c.map(Pu),injector:s,factory:f}}function U0(n){return n&&typeof n=="object"&&"default"in n}function Bp(n){return U0(n)?n.default:n}async function jp(n){return n}var ql=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275prov=w({token:n,factory:()=>l(H0),providedIn:"root"})}return n})(),H0=(()=>{class n{shouldProcessUrl(e){return!0}extract(e){return e}merge(e,t){return e}static \u0275fac=function(t){return new(t||n)};static \u0275prov=w({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Lu=new S(""),Vu=new S("");function zp(n,i,e){let t=n.get(Vu),r=n.get(X);if(!r.startViewTransition||t.skipNextTransition)return t.skipNextTransition=!1,new Promise(m=>setTimeout(m));let a,o=new Promise(m=>{a=m}),s=r.startViewTransition(()=>(a(),$0(n)));s.updateCallbackDone.catch(m=>{}),s.ready.catch(m=>{}),s.finished.catch(m=>{});let{onViewTransitionCreated:c}=t;return c&&Gt(n,()=>c({transition:s,from:i,to:e})),o}function $0(n){return new Promise(i=>{at({read:()=>setTimeout(i)},{injector:n})})}var G0=()=>{},Bu=new S(""),Zl=(()=>{class n{currentNavigation=ne(null,{equal:()=>!1});currentTransition=null;lastSuccessfulNavigation=ne(null);events=new P;transitionAbortWithErrorSubject=new P;configLoader=l(Yl);environmentInjector=l(kt);destroyRef=l(Hr);urlSerializer=l(sr);rootContexts=l(oa);location=l(ui);inputBindingEnabled=l(rs,{optional:!0})!==null;titleStrategy=l(Nu);options=l(lr,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly";urlHandlingStrategy=l(ql);createViewTransition=l(Lu,{optional:!0});navigationErrorHandler=l(Bu,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>Q(void 0);rootComponentType=null;destroyed=!1;constructor(){let e=r=>this.events.next(new Pl(r)),t=r=>this.events.next(new Nl(r));this.configLoader.onLoadEndListener=t,this.configLoader.onLoadStartListener=e,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}complete(){this.transitions?.complete()}handleNavigationRequest(e){let t=++this.navigationId;Ge(()=>{this.transitions?.next(He(x({},e),{extractedUrl:this.urlHandlingStrategy.extract(e.rawUrl),targetSnapshot:null,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null,id:t,routesRecognizeHandler:{},beforeActivateHandler:{}}))})}setupNavigations(e){return this.transitions=new Bt(null),this.transitions.pipe(Ye(t=>t!==null),Pt(t=>{let r=!1,a=new AbortController,o=()=>!r&&this.currentTransition?.id===t.id;return Q(t).pipe(Pt(s=>{if(this.navigationId>t.id)return this.cancelNavigationTransition(t,"",jt.SupersededByNewNavigation),Zt;this.currentTransition=t;let c=this.lastSuccessfulNavigation();this.currentNavigation.set({id:s.id,initialUrl:s.rawUrl,extractedUrl:s.extractedUrl,targetBrowserUrl:typeof s.extras.browserUrl=="string"?this.urlSerializer.parse(s.extras.browserUrl):s.extras.browserUrl,trigger:s.source,extras:s.extras,previousNavigation:c?He(x({},c),{previousNavigation:null}):null,abort:()=>a.abort(),routesRecognizeHandler:s.routesRecognizeHandler,beforeActivateHandler:s.beforeActivateHandler});let m=!e.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),f=s.extras.onSameUrlNavigation??e.onSameUrlNavigation;if(!m&&f!=="reload")return this.events.next(new fi(s.id,this.urlSerializer.serialize(s.rawUrl),"",za.IgnoredSameUrlNavigation)),s.resolve(!1),Zt;if(this.urlHandlingStrategy.shouldProcessUrl(s.rawUrl))return Q(s).pipe(Pt(g=>(this.events.next(new or(g.id,this.urlSerializer.serialize(g.extractedUrl),g.source,g.restoredState)),g.id!==this.navigationId?Zt:Promise.resolve(g))),L0(this.environmentInjector,this.configLoader,this.rootComponentType,e.config,this.urlSerializer,this.paramsInheritanceStrategy,a.signal),wt(g=>{t.targetSnapshot=g.targetSnapshot,t.urlAfterRedirects=g.urlAfterRedirects,this.currentNavigation.update(E=>(E.finalUrl=g.urlAfterRedirects,E)),this.events.next(new Xo)}),Pt(g=>Ot(t.routesRecognizeHandler.deferredHandle??Q(void 0)).pipe(Oe(()=>g))),wt(()=>{let g=new Ko(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(g)}));if(m&&this.urlHandlingStrategy.shouldProcessUrl(s.currentRawUrl)){let{id:g,extractedUrl:E,source:M,restoredState:W,extras:K}=s,z=new or(g,this.urlSerializer.serialize(E),M,W);this.events.next(z);let $=Dp(this.rootComponentType,this.environmentInjector).snapshot;return this.currentTransition=t=He(x({},s),{targetSnapshot:$,urlAfterRedirects:E,extras:He(x({},K),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.update(O=>(O.finalUrl=E,O)),Q(t)}else return this.events.next(new fi(s.id,this.urlSerializer.serialize(s.extractedUrl),"",za.IgnoredByUrlHandlingStrategy)),s.resolve(!1),Zt}),Oe(s=>{let c=new Tl(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);return this.events.next(c),this.currentTransition=t=He(x({},s),{guards:Jy(s.targetSnapshot,s.currentSnapshot,this.rootContexts)}),t}),d0(s=>this.events.next(s)),Pt(s=>{if(t.guardsResult=s.guardsResult,s.guardsResult&&typeof s.guardsResult!="boolean")throw Hl(this.urlSerializer,s.guardsResult);let c=new Il(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot,!!s.guardsResult);if(this.events.next(c),!o())return Zt;if(!s.guardsResult)return this.cancelNavigationTransition(s,"",jt.GuardRejected),Zt;if(s.guards.canActivateChecks.length===0)return Q(s);let m=new Fl(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);if(this.events.next(m),!o())return Zt;let f=!1;return Q(s).pipe(V0(this.paramsInheritanceStrategy),wt({next:()=>{f=!0;let g=new Ol(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(g)},complete:()=>{f||this.cancelNavigationTransition(s,"",jt.NoDataFromResolver)}}))}),ip(s=>{let c=f=>{let g=[];if(f.routeConfig?._loadedComponent)f.component=f.routeConfig?._loadedComponent;else if(f.routeConfig?.loadComponent){let E=f._environmentInjector;g.push(this.configLoader.loadComponent(E,f.routeConfig).then(M=>{f.component=M}))}for(let E of f.children)g.push(...c(E));return g},m=c(s.targetSnapshot.root);return m.length===0?Q(s):Ot(Promise.all(m).then(()=>s))}),ip(()=>this.afterPreactivation()),Pt(()=>{let{currentSnapshot:s,targetSnapshot:c}=t,m=this.createViewTransition?.(this.environmentInjector,s.root,c.root);return m?Ot(m).pipe(Oe(()=>t)):Q(t)}),vt(1),Pt(s=>{let c=Zy(e.routeReuseStrategy,s.targetSnapshot,s.currentRouterState);this.currentTransition=t=s=He(x({},s),{targetRouterState:c}),this.currentNavigation.update(f=>(f.targetRouterState=c,f)),this.events.next(new Ha);let m=t.beforeActivateHandler.deferredHandle;return m?Ot(m.then(()=>s)):Q(s)}),wt(s=>{new Su(e.routeReuseStrategy,t.targetRouterState,t.currentRouterState,c=>this.events.next(c),this.inputBindingEnabled).activate(this.rootContexts),o()&&(r=!0,this.currentNavigation.update(c=>(c.abort=G0,c)),this.lastSuccessfulNavigation.set(Ge(this.currentNavigation)),this.events.next(new Cn(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects))),this.titleStrategy?.updateTitle(s.targetRouterState.snapshot),s.resolve(!0))}),Be(kp(a.signal).pipe(Ye(()=>!r&&!t.targetRouterState),wt(()=>{this.cancelNavigationTransition(t,a.signal.reason+"",jt.Aborted)}))),wt({complete:()=>{r=!0}}),Be(this.transitionAbortWithErrorSubject.pipe(wt(s=>{throw s}))),xa(()=>{a.abort(),r||this.cancelNavigationTransition(t,"",jt.SupersededByNewNavigation),this.currentTransition?.id===t.id&&(this.currentNavigation.set(null),this.currentTransition=null)}),Qi(s=>{if(r=!0,this.destroyed)return t.resolve(!1),Zt;if(Ap(s))this.events.next(new yn(t.id,this.urlSerializer.serialize(t.extractedUrl),s.message,s.cancellationCode)),Qy(s)?this.events.next(new $a(s.url,s.navigationBehaviorOptions)):t.resolve(!1);else{let c=new ra(t.id,this.urlSerializer.serialize(t.extractedUrl),s,t.targetSnapshot??void 0);try{let m=Gt(this.environmentInjector,()=>this.navigationErrorHandler?.(c));if(m instanceof Wa){let{message:f,cancellationCode:g}=Hl(this.urlSerializer,m);this.events.next(new yn(t.id,this.urlSerializer.serialize(t.extractedUrl),f,g)),this.events.next(new $a(m.redirectTo,m.navigationBehaviorOptions))}else throw this.events.next(c),s}catch(m){this.options.resolveNavigationPromiseOnError?t.resolve(!1):t.reject(m)}}return Zt}))}))}cancelNavigationTransition(e,t,r){let a=new yn(e.id,this.urlSerializer.serialize(e.extractedUrl),t,r);this.events.next(a),e.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let e=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),t=Ge(this.currentNavigation),r=t?.targetBrowserUrl??t?.extractedUrl;return e.toString()!==r?.toString()&&!t?.extras.skipLocationChange}static \u0275fac=function(t){return new(t||n)};static \u0275prov=w({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function W0(n){return n!==Ba}var Up=new S("");var Hp=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275prov=w({token:n,factory:()=>l(Y0),providedIn:"root"})}return n})(),Gl=class{shouldDetach(i){return!1}store(i,e){}shouldAttach(i){return!1}retrieve(i){return null}shouldReuseRoute(i,e){return i.routeConfig===e.routeConfig}shouldDestroyInjector(i){return!0}},Y0=(()=>{class n extends Gl{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Xe(n)))(r||n)}})();static \u0275prov=w({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Kl=(()=>{class n{urlSerializer=l(sr);options=l(lr,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||"replace";location=l(ui);urlHandlingStrategy=l(ql);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";currentUrlTree=new on;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}createBrowserPath({finalUrl:e,initialUrl:t,targetBrowserUrl:r}){let a=e!==void 0?this.urlHandlingStrategy.merge(e,t):t,o=r??a;return o instanceof on?this.urlSerializer.serialize(o):o}commitTransition({targetRouterState:e,finalUrl:t,initialUrl:r}){t&&e?(this.currentUrlTree=t,this.rawUrlTree=this.urlHandlingStrategy.merge(t,r),this.routerState=e):this.rawUrlTree=r}routerState=Dp(null,l(kt));getRouterState(){return this.routerState}_stateMemento=this.createStateMemento();get stateMemento(){return this._stateMemento}updateStateMemento(){this._stateMemento=this.createStateMemento()}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}restoredState(){return this.location.getState()}static \u0275fac=function(t){return new(t||n)};static \u0275prov=w({token:n,factory:()=>l(q0),providedIn:"root"})}return n})(),q0=(()=>{class n extends Kl{currentPageId=0;lastSuccessfulId=-1;get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}registerNonRouterCurrentEntryChangeListener(e){return this.location.subscribe(t=>{t.type==="popstate"&&setTimeout(()=>{e(t.url,t.state,"popstate",{replaceUrl:!0})})})}handleRouterEvent(e,t){e instanceof or?this.updateStateMemento():e instanceof fi?this.commitTransition(t):e instanceof Ko?this.urlUpdateStrategy==="eager"&&(t.extras.skipLocationChange||this.setBrowserUrl(this.createBrowserPath(t),t)):e instanceof Ha?(this.commitTransition(t),this.urlUpdateStrategy==="deferred"&&!t.extras.skipLocationChange&&this.setBrowserUrl(this.createBrowserPath(t),t)):e instanceof yn&&!Cp(e)?this.restoreHistory(t):e instanceof ra?this.restoreHistory(t,!0):e instanceof Cn&&(this.lastSuccessfulId=e.id,this.currentPageId=this.browserPageId)}setBrowserUrl(e,{extras:t,id:r}){let{replaceUrl:a,state:o}=t;if(this.location.isCurrentPathEqualTo(e)||a){let s=this.browserPageId,c=x(x({},o),this.generateNgRouterState(r,s));this.location.replaceState(e,"",c)}else{let s=x(x({},o),this.generateNgRouterState(r,this.browserPageId+1));this.location.go(e,"",s)}}restoreHistory(e,t=!1){if(this.canceledNavigationResolution==="computed"){let r=this.browserPageId,a=this.currentPageId-r;a!==0?this.location.historyGo(a):this.getCurrentUrlTree()===e.finalUrl&&a===0&&(this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(t&&this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}resetInternalState({finalUrl:e}){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,e??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(e,t){return this.canceledNavigationResolution==="computed"?{navigationId:e,\u0275routerPageId:t}:{navigationId:e}}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Xe(n)))(r||n)}})();static \u0275prov=w({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function Xl(n,i){n.events.pipe(Ye(e=>e instanceof Cn||e instanceof yn||e instanceof ra||e instanceof fi),Oe(e=>e instanceof Cn||e instanceof fi?0:(e instanceof yn?e.code===jt.Redirect||e.code===jt.SupersededByNewNavigation:!1)?2:1),Ye(e=>e!==2),vt(1)).subscribe(()=>{i()})}var Ct=(()=>{class n{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=l(Fd);stateManager=l(Kl);options=l(lr,{optional:!0})||{};pendingTasks=l(Vh);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";navigationTransitions=l(Zl);urlSerializer=l(sr);location=l(ui);urlHandlingStrategy=l(ql);injector=l(kt);_events=new P;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=l(Hp);injectorCleanup=l(Up,{optional:!0});onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore";config=l(sa,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!l(rs,{optional:!0});currentNavigation=this.navigationTransitions.currentNavigation.asReadonly();constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this).subscribe({error:e=>{}}),this.subscribeToNavigationEvents()}eventsSubscription=new rt;subscribeToNavigationEvents(){let e=this.navigationTransitions.events.subscribe(t=>{try{let r=this.navigationTransitions.currentTransition,a=Ge(this.navigationTransitions.currentNavigation);if(r!==null&&a!==null){if(this.stateManager.handleRouterEvent(t,a),t instanceof yn&&t.code!==jt.Redirect&&t.code!==jt.SupersededByNewNavigation)this.navigated=!0;else if(t instanceof Cn)this.navigated=!0,this.injectorCleanup?.(this.routeReuseStrategy,this.routerState,this.config);else if(t instanceof $a){let o=t.navigationBehaviorOptions,s=this.urlHandlingStrategy.merge(t.url,r.currentRawUrl),c=x({scroll:r.extras.scroll,browserUrl:r.extras.browserUrl,info:r.extras.info,skipLocationChange:r.extras.skipLocationChange,replaceUrl:r.extras.replaceUrl||this.urlUpdateStrategy==="eager"||W0(r.source)},o);this.scheduleNavigation(s,Ba,null,c,{resolve:r.resolve,reject:r.reject,promise:r.promise})}}Yy(t)&&this._events.next(t)}catch(r){this.navigationTransitions.transitionAbortWithErrorSubject.next(r)}});this.eventsSubscription.add(e)}resetRootComponentType(e){this.routerState.root.component=e,this.navigationTransitions.rootComponentType=e}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),Ba,this.stateManager.restoredState(),{replaceUrl:!0})}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((e,t,r,a)=>{this.navigateToSyncWithBrowser(e,r,t,a)})}navigateToSyncWithBrowser(e,t,r,a){let o=r?.navigationId?r:null;if(r){let c=x({},r);delete c.navigationId,delete c.\u0275routerPageId,Object.keys(c).length!==0&&(a.state=c)}let s=this.parseUrl(e);this.scheduleNavigation(s,t,o,a).catch(c=>{this.disposed||this.injector.get(Ro)(c)})}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return Ge(this.navigationTransitions.currentNavigation)}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(e){this.config=e.map(Pu),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription?.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0,this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(e,t={}){let{relativeTo:r,queryParams:a,fragment:o,queryParamsHandling:s,preserveFragment:c}=t,m=c?this.currentUrlTree.fragment:o,f=null;switch(s??this.options.defaultQueryParamsHandling){case"merge":f=x(x({},this.currentUrlTree.queryParams),a);break;case"preserve":f=this.currentUrlTree.queryParams;break;default:f=a||null}f!==null&&(f=this.removeEmptyProps(f));let g;try{let E=r?r.snapshot:this.routerState.snapshot.root;g=_p(E)}catch{(typeof e[0]!="string"||e[0][0]!=="/")&&(e=[]),g=this.currentUrlTree.root}return vp(g,e,f,m??null,this.urlSerializer)}navigateByUrl(e,t={skipLocationChange:!1}){let r=ar(e)?e:this.parseUrl(e),a=this.urlHandlingStrategy.merge(r,this.rawUrlTree);return this.scheduleNavigation(a,Ba,null,t)}navigate(e,t={skipLocationChange:!1}){return Z0(e),this.navigateByUrl(this.createUrlTree(e,t),t)}serializeUrl(e){return this.urlSerializer.serialize(e)}parseUrl(e){try{return this.urlSerializer.parse(e)}catch{return this.console.warn(zr(4018,!1)),this.urlSerializer.parse("/")}}isActive(e,t){let r;if(t===!0?r=x({},lp):t===!1?r=x({},vu):r=x(x({},vu),t),ar(e))return Xf(this.currentUrlTree,e,r);let a=this.parseUrl(e);return Xf(this.currentUrlTree,a,r)}removeEmptyProps(e){return Object.entries(e).reduce((t,[r,a])=>(a!=null&&(t[r]=a),t),{})}scheduleNavigation(e,t,r,a,o){if(this.disposed)return Promise.resolve(!1);let s,c,m;o?(s=o.resolve,c=o.reject,m=o.promise):m=new Promise((g,E)=>{s=g,c=E});let f=this.pendingTasks.add();return Xl(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(f))}),this.navigationTransitions.handleNavigationRequest({source:t,restoredState:r,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:e,extras:a,resolve:s,reject:c,promise:m,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),m.catch(Promise.reject.bind(Promise))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=w({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function Z0(n){for(let i=0;i<n.length;i++)if(n[i]==null)throw new ge(4008,!1)}var X0=(()=>{class n{router=l(Ct);stateManager=l(Kl);fragment=ne("");queryParams=ne({});path=ne("");serializer=l(sr);constructor(){this.updateState(),this.router.events?.subscribe(e=>{e instanceof Cn&&this.updateState()})}updateState(){let{fragment:e,root:t,queryParams:r}=this.stateManager.getCurrentUrlTree();this.fragment.set(e),this.queryParams.set(r),this.path.set(this.serializer.serialize(new on(t)))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=w({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),cr=(()=>{class n{router;route;tabIndexAttribute;renderer;el;locationStrategy;hrefAttributeValue=l(new _n("href"),{optional:!0});reactiveHref=df(()=>this.isAnchorElement?this.computeHref(this._urlTree()):this.hrefAttributeValue);get href(){return Ge(this.reactiveHref)}set href(e){this.reactiveHref.set(e)}set target(e){this._target.set(e)}get target(){return Ge(this._target)}_target=ne(void 0);set queryParams(e){this._queryParams.set(e)}get queryParams(){return Ge(this._queryParams)}_queryParams=ne(void 0,{equal:()=>!1});set fragment(e){this._fragment.set(e)}get fragment(){return Ge(this._fragment)}_fragment=ne(void 0);set queryParamsHandling(e){this._queryParamsHandling.set(e)}get queryParamsHandling(){return Ge(this._queryParamsHandling)}_queryParamsHandling=ne(void 0);set state(e){this._state.set(e)}get state(){return Ge(this._state)}_state=ne(void 0,{equal:()=>!1});set info(e){this._info.set(e)}get info(){return Ge(this._info)}_info=ne(void 0,{equal:()=>!1});set relativeTo(e){this._relativeTo.set(e)}get relativeTo(){return Ge(this._relativeTo)}_relativeTo=ne(void 0);set preserveFragment(e){this._preserveFragment.set(e)}get preserveFragment(){return Ge(this._preserveFragment)}_preserveFragment=ne(!1);set skipLocationChange(e){this._skipLocationChange.set(e)}get skipLocationChange(){return Ge(this._skipLocationChange)}_skipLocationChange=ne(!1);set replaceUrl(e){this._replaceUrl.set(e)}get replaceUrl(){return Ge(this._replaceUrl)}_replaceUrl=ne(!1);isAnchorElement;onChanges=new P;applicationErrorHandler=l(Ro);options=l(lr,{optional:!0});reactiveRouterState=l(X0);constructor(e,t,r,a,o,s){this.router=e,this.route=t,this.tabIndexAttribute=r,this.renderer=a,this.el=o,this.locationStrategy=s;let c=o.nativeElement.tagName?.toLowerCase();this.isAnchorElement=c==="a"||c==="area"||!!(typeof customElements=="object"&&customElements.get(c)?.observedAttributes?.includes?.("href"))}setTabIndexIfNotOnNativeEl(e){this.tabIndexAttribute!=null||this.isAnchorElement||this.applyAttributeValue("tabindex",e)}ngOnChanges(e){this.onChanges.next(this)}routerLinkInput=ne(null);set routerLink(e){e==null?(this.routerLinkInput.set(null),this.setTabIndexIfNotOnNativeEl(null)):(ar(e)?this.routerLinkInput.set(e):this.routerLinkInput.set(Array.isArray(e)?e:[e]),this.setTabIndexIfNotOnNativeEl("0"))}onClick(e,t,r,a,o){let s=this._urlTree();if(s===null||this.isAnchorElement&&(e!==0||t||r||a||o||typeof this.target=="string"&&this.target!="_self"))return!0;let c={skipLocationChange:this.skipLocationChange,replaceUrl:this.replaceUrl,state:this.state,info:this.info};return this.router.navigateByUrl(s,c)?.catch(m=>{this.applicationErrorHandler(m)}),!this.isAnchorElement}ngOnDestroy(){}applyAttributeValue(e,t){let r=this.renderer,a=this.el.nativeElement;t!==null?r.setAttribute(a,e,t):r.removeAttribute(a,e)}_urlTree=rn(()=>{this.reactiveRouterState.path(),this._preserveFragment()&&this.reactiveRouterState.fragment();let e=r=>r==="preserve"||r==="merge";(e(this._queryParamsHandling())||e(this.options?.defaultQueryParamsHandling))&&this.reactiveRouterState.queryParams();let t=this.routerLinkInput();return t===null||!this.router.createUrlTree?null:ar(t)?t:this.router.createUrlTree(t,{relativeTo:this._relativeTo()!==void 0?this._relativeTo():this.route,queryParams:this._queryParams(),fragment:this._fragment(),queryParamsHandling:this._queryParamsHandling(),preserveFragment:this._preserveFragment()})},{equal:(e,t)=>this.computeHref(e)===this.computeHref(t)});get urlTree(){return Ge(this._urlTree)}computeHref(e){return e!==null&&this.locationStrategy?this.locationStrategy?.prepareExternalUrl(this.router.serializeUrl(e))??"":null}static \u0275fac=function(t){return new(t||n)(k(Ct),k(pi),kd("tabindex"),k(Je),k(U),k(Yn))};static \u0275dir=A({type:n,selectors:[["","routerLink",""]],hostVars:2,hostBindings:function(t,r){t&1&&R("click",function(o){return r.onClick(o.button,o.ctrlKey,o.shiftKey,o.altKey,o.metaKey)}),t&2&&pe("href",r.reactiveHref(),Kh)("target",r._target())},inputs:{target:"target",queryParams:"queryParams",fragment:"fragment",queryParamsHandling:"queryParamsHandling",state:"state",info:"info",relativeTo:"relativeTo",preserveFragment:[2,"preserveFragment","preserveFragment",Z],skipLocationChange:[2,"skipLocationChange","skipLocationChange",Z],replaceUrl:[2,"replaceUrl","replaceUrl",Z],routerLink:"routerLink"},features:[Ue]})}return n})();var os=class{};var $p=(()=>{class n{router;injector;preloadingStrategy;loader;subscription;constructor(e,t,r,a){this.router=e,this.injector=t,this.preloadingStrategy=r,this.loader=a}setUpPreloading(){this.subscription=this.router.events.pipe(Ye(e=>e instanceof Cn),jr(()=>this.preload())).subscribe(()=>{})}preload(){return this.processRoutes(this.injector,this.router.config)}ngOnDestroy(){this.subscription?.unsubscribe()}processRoutes(e,t){let r=[];for(let a of t){a.providers&&!a._injector&&(a._injector=Js(a.providers,e,""));let o=a._injector??e;a._loadedNgModuleFactory&&!a._loadedInjector&&(a._loadedInjector=a._loadedNgModuleFactory.create(o).injector);let s=a._loadedInjector??o;(a.loadChildren&&!a._loadedRoutes&&a.canLoad===void 0||a.loadComponent&&!a._loadedComponent)&&r.push(this.preloadConfig(o,a)),(a.children||a._loadedRoutes)&&r.push(this.processRoutes(s,a.children??a._loadedRoutes))}return Ot(r).pipe(xd())}preloadConfig(e,t){return this.preloadingStrategy.preload(t,()=>{if(e.destroyed)return Q(null);let r;t.loadChildren&&t.canLoad===void 0?r=Ot(this.loader.loadChildren(e,t)):r=Q(null);let a=r.pipe(ci(o=>o===null?Q(void 0):(t._loadedRoutes=o.routes,t._loadedInjector=o.injector,t._loadedNgModuleFactory=o.factory,this.processRoutes(o.injector??e,o.routes))));if(t.loadComponent&&!t._loadedComponent){let o=this.loader.loadComponent(e,t);return Ot([a,o]).pipe(xd())}else return a})}static \u0275fac=function(t){return new(t||n)(G(Ct),G(kt),G(os),G(Yl))};static \u0275prov=w({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Gp=new S(""),Q0=(()=>{class n{options;routerEventsSubscription;scrollEventsSubscription;lastId=0;lastSource=Ba;restoredId=0;store={};urlSerializer=l(sr);zone=l(de);viewportScroller=l(Kd);transitions=l(Zl);constructor(e){this.options=e,this.options.scrollPositionRestoration||="disabled",this.options.anchorScrolling||="disabled"}init(){this.options.scrollPositionRestoration!=="disabled"&&this.viewportScroller.setHistoryScrollRestoration("manual"),this.routerEventsSubscription=this.createScrollEvents(),this.scrollEventsSubscription=this.consumeScrollEvents()}createScrollEvents(){return this.transitions.events.subscribe(e=>{e instanceof or?(this.store[this.lastId]=this.viewportScroller.getScrollPosition(),this.lastSource=e.navigationTrigger,this.restoredId=e.restoredState?e.restoredState.navigationId:0):e instanceof Cn?(this.lastId=e.id,this.scheduleScrollEvent(e,this.urlSerializer.parse(e.urlAfterRedirects).fragment)):e instanceof fi&&e.code===za.IgnoredSameUrlNavigation&&(this.lastSource=void 0,this.restoredId=0,this.scheduleScrollEvent(e,this.urlSerializer.parse(e.url).fragment))})}consumeScrollEvents(){return this.transitions.events.subscribe(e=>{if(!(e instanceof Ua)||e.scrollBehavior==="manual")return;let t={behavior:"instant"};e.position?this.options.scrollPositionRestoration==="top"?this.viewportScroller.scrollToPosition([0,0],t):this.options.scrollPositionRestoration==="enabled"&&this.viewportScroller.scrollToPosition(e.position,t):e.anchor&&this.options.anchorScrolling==="enabled"?this.viewportScroller.scrollToAnchor(e.anchor):this.options.scrollPositionRestoration!=="disabled"&&this.viewportScroller.scrollToPosition([0,0])})}scheduleScrollEvent(e,t){let r=Ge(this.transitions.currentNavigation)?.extras.scroll;this.zone.runOutsideAngular(async()=>{await new Promise(a=>{setTimeout(a),typeof requestAnimationFrame<"u"&&requestAnimationFrame(a)}),this.zone.run(()=>{this.transitions.events.next(new Ua(e,this.lastSource==="popstate"?this.store[this.restoredId]:null,t,r))})})}ngOnDestroy(){this.routerEventsSubscription?.unsubscribe(),this.scrollEventsSubscription?.unsubscribe()}static \u0275fac=function(t){ka()};static \u0275prov=w({token:n,factory:n.\u0275fac})}return n})();function zu(n,...i){return Ur([{provide:sa,multi:!0,useValue:n},[],{provide:pi,useFactory:Wp},{provide:Pd,multi:!0,useFactory:Yp},i.map(e=>e.\u0275providers)])}function Wp(){return l(Ct).routerState.root}function ss(n,i){return{\u0275kind:n,\u0275providers:i}}function Yp(){let n=l(ce);return i=>{let e=n.get(Ii);if(i!==e.components[0])return;let t=n.get(Ct),r=n.get(qp);n.get(Uu)===1&&t.initialNavigation(),n.get(Xp,null,{optional:!0})?.setUpPreloading(),n.get(Gp,null,{optional:!0})?.init(),t.resetRootComponentType(e.componentTypes[0]),r.closed||(r.next(),r.complete(),r.unsubscribe())}}var qp=new S("",{factory:()=>new P}),Uu=new S("",{factory:()=>1});function Zp(){let n=[{provide:Id,useValue:!0},{provide:Uu,useValue:0},Od(()=>{let i=l(ce);return i.get(jd,Promise.resolve()).then(()=>new Promise(t=>{let r=i.get(Ct),a=i.get(qp);Xl(r,()=>{t(!0)}),i.get(Zl).afterPreactivation=()=>(t(!0),a.closed?Q(void 0):a),r.initialNavigation()}))})];return ss(2,n)}function Kp(){let n=[Od(()=>{l(Ct).setUpLocationChangeListener()}),{provide:Uu,useValue:2}];return ss(3,n)}var Xp=new S("");function Qp(n){return ss(0,[{provide:Xp,useExisting:$p},{provide:os,useExisting:n}])}function Jp(){return ss(8,[Fu,{provide:rs,useExisting:Fu}])}function eg(n){To("NgRouterViewTransitions");let i=[{provide:Lu,useValue:zp},{provide:Vu,useValue:x({skipNextTransition:!!n?.skipInitialTransition},n)}];return ss(9,i)}var tg=[ui,{provide:sr,useClass:Li},Ct,oa,{provide:pi,useFactory:Wp},Yl,[]],qt=(()=>{class n{constructor(){}static forRoot(e,t){return{ngModule:n,providers:[tg,[],{provide:sa,multi:!0,useValue:e},[],t?.errorHandler?{provide:Bu,useValue:t.errorHandler}:[],{provide:lr,useValue:t||{}},t?.useHash?eC():tC(),J0(),t?.preloadingStrategy?Qp(t.preloadingStrategy).\u0275providers:[],t?.initialNavigation?nC(t):[],t?.bindToComponentInputs?Jp().\u0275providers:[],t?.enableViewTransitions?eg().\u0275providers:[],iC()]}}static forChild(e){return{ngModule:n,providers:[{provide:sa,multi:!0,useValue:e}]}}static \u0275fac=function(t){return new(t||n)};static \u0275mod=q({type:n});static \u0275inj=Y({})}return n})();function J0(){return{provide:Gp,useFactory:()=>{let n=l(Kd),i=l(lr);return i.scrollOffset&&n.setOffset(i.scrollOffset),new Q0(i)}}}function eC(){return{provide:Yn,useClass:$d}}function tC(){return{provide:Yn,useClass:cl}}function nC(n){return[n.initialNavigation==="disabled"?Kp().\u0275providers:[],n.initialNavigation==="enabledBlocking"?Zp().\u0275providers:[]]}var ju=new S("");function iC(){return[{provide:ju,useFactory:Yp},{provide:Pd,multi:!0,useExisting:ju}]}var rC="@",aC=(()=>{class n{doc;delegate;zone;animationType;moduleImpl;_rendererFactoryPromise=null;scheduler=null;injector=l(ce);loadingSchedulerFn=l(oC,{optional:!0});_engine;constructor(e,t,r,a,o){this.doc=e,this.delegate=t,this.zone=r,this.animationType=a,this.moduleImpl=o}ngOnDestroy(){this._engine?.flush()}loadImpl(){let e=()=>this.moduleImpl??import("./chunk-MP3L5457.js").then(r=>r),t;return this.loadingSchedulerFn?t=this.loadingSchedulerFn(e):t=e(),t.catch(r=>{throw new ge(5300,!1)}).then(({\u0275createEngine:r,\u0275AnimationRendererFactory:a})=>{this._engine=r(this.animationType,this.doc);let o=new a(this.delegate,this._engine,this.zone);return this.delegate=o,o})}createRenderer(e,t){let r=this.delegate.createRenderer(e,t);if(r.\u0275type===0)return r;typeof r.throwOnSyntheticProps=="boolean"&&(r.throwOnSyntheticProps=!1);let a=new Hu(r);return t?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(o=>{let s=o.createRenderer(e,t);a.use(s),this.scheduler??=this.injector.get(Bh,null,{optional:!0}),this.scheduler?.notify(10)}).catch(o=>{a.use(r)}),a}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}componentReplaced(e){this._engine?.flush(),this.delegate.componentReplaced?.(e)}static \u0275fac=function(t){ka()};static \u0275prov=w({token:n,factory:n.\u0275fac})}return n})(),Hu=class{delegate;replay=[];\u0275type=1;constructor(i){this.delegate=i}use(i){if(this.delegate=i,this.replay!==null){for(let e of this.replay)e(i);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(i,e){return this.delegate.createElement(i,e)}createComment(i){return this.delegate.createComment(i)}createText(i){return this.delegate.createText(i)}get destroyNode(){return this.delegate.destroyNode}appendChild(i,e){this.delegate.appendChild(i,e)}insertBefore(i,e,t,r){this.delegate.insertBefore(i,e,t,r)}removeChild(i,e,t,r){this.delegate.removeChild(i,e,t,r)}selectRootElement(i,e){return this.delegate.selectRootElement(i,e)}parentNode(i){return this.delegate.parentNode(i)}nextSibling(i){return this.delegate.nextSibling(i)}setAttribute(i,e,t,r){this.delegate.setAttribute(i,e,t,r)}removeAttribute(i,e,t){this.delegate.removeAttribute(i,e,t)}addClass(i,e){this.delegate.addClass(i,e)}removeClass(i,e){this.delegate.removeClass(i,e)}setStyle(i,e,t,r){this.delegate.setStyle(i,e,t,r)}removeStyle(i,e,t){this.delegate.removeStyle(i,e,t)}setProperty(i,e,t){this.shouldReplay(e)&&this.replay.push(r=>r.setProperty(i,e,t)),this.delegate.setProperty(i,e,t)}setValue(i,e){this.delegate.setValue(i,e)}listen(i,e,t,r){return this.shouldReplay(e)&&this.replay.push(a=>a.listen(i,e,t,r)),this.delegate.listen(i,e,t,r)}shouldReplay(i){return this.replay!==null&&i.startsWith(rC)}},oC=new S("");function ng(n="animations"){return To("NgAsyncAnimations"),Ur([{provide:Nt,useFactory:()=>new aC(l(X),l(zo),l(de),n)},{provide:Ma,useValue:n==="noop"?"NoopAnimations":"BrowserAnimations"}])}var ug=(()=>{class n{_renderer;_elementRef;onChange=e=>{};onTouched=()=>{};constructor(e,t){this._renderer=e,this._elementRef=t}setProperty(e,t){this._renderer.setProperty(this._elementRef.nativeElement,e,t)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}static \u0275fac=function(t){return new(t||n)(k(Je),k(U))};static \u0275dir=A({type:n})}return n})(),mg=(()=>{class n extends ug{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Xe(n)))(r||n)}})();static \u0275dir=A({type:n,features:[_e]})}return n})(),ur=new S("");var sC={provide:ur,useExisting:Kt(()=>zt),multi:!0};function lC(){let n=bn()?bn().getUserAgent():"";return/android (\d+)/.test(n.toLowerCase())}var cC=new S(""),zt=(()=>{class n extends ug{_compositionMode;_composing=!1;constructor(e,t,r){super(e,t),this._compositionMode=r,this._compositionMode==null&&(this._compositionMode=!lC())}writeValue(e){let t=e??"";this.setProperty("value",t)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}static \u0275fac=function(t){return new(t||n)(k(Je),k(U),k(cC,8))};static \u0275dir=A({type:n,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(t,r){t&1&&R("input",function(o){return r._handleInput(o.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(o){return r._compositionEnd(o.target.value)})},standalone:!1,features:[je([sC]),_e]})}return n})();function Yu(n){return n==null||qu(n)===0}function qu(n){return n==null?null:Array.isArray(n)||typeof n=="string"?n.length:n instanceof Set?n.size:null}var Vi=new S(""),cc=new S(""),dC=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,Ie=class{static min(i){return uC(i)}static max(i){return mC(i)}static required(i){return hg(i)}static requiredTrue(i){return hC(i)}static email(i){return fC(i)}static minLength(i){return pC(i)}static maxLength(i){return gC(i)}static pattern(i){return _C(i)}static nullValidator(i){return ec()}static compose(i){return bg(i)}static composeAsync(i){return yg(i)}};function uC(n){return i=>{if(i.value==null||n==null)return null;let e=parseFloat(i.value);return!isNaN(e)&&e<n?{min:{min:n,actual:i.value}}:null}}function mC(n){return i=>{if(i.value==null||n==null)return null;let e=parseFloat(i.value);return!isNaN(e)&&e>n?{max:{max:n,actual:i.value}}:null}}function hg(n){return Yu(n.value)?{required:!0}:null}function hC(n){return n.value===!0?null:{required:!0}}function fC(n){return Yu(n.value)||dC.test(n.value)?null:{email:!0}}function pC(n){return i=>{let e=i.value?.length??qu(i.value);return e===null||e===0?null:e<n?{minlength:{requiredLength:n,actualLength:e}}:null}}function gC(n){return i=>{let e=i.value?.length??qu(i.value);return e!==null&&e>n?{maxlength:{requiredLength:n,actualLength:e}}:null}}function _C(n){if(!n)return ec;let i,e;return typeof n=="string"?(e="",n.charAt(0)!=="^"&&(e+="^"),e+=n,n.charAt(n.length-1)!=="$"&&(e+="$"),i=new RegExp(e)):(e=n.toString(),i=n),t=>{if(Yu(t.value))return null;let r=t.value;return i.test(r)?null:{pattern:{requiredPattern:e,actualValue:r}}}}function ec(n){return null}function fg(n){return n!=null}function pg(n){return Io(n)?Ot(n):n}function gg(n){let i={};return n.forEach(e=>{i=e!=null?x(x({},i),e):i}),Object.keys(i).length===0?null:i}function _g(n,i){return i.map(e=>e(n))}function vC(n){return!n.validate}function vg(n){return n.map(i=>vC(i)?i:e=>i.validate(e))}function bg(n){if(!n)return null;let i=n.filter(fg);return i.length==0?null:function(e){return gg(_g(e,i))}}function Zu(n){return n!=null?bg(vg(n)):null}function yg(n){if(!n)return null;let i=n.filter(fg);return i.length==0?null:function(e){let t=_g(e,i).map(pg);return Ys(t).pipe(Oe(gg))}}function Ku(n){return n!=null?yg(vg(n)):null}function ig(n,i){return n===null?[i]:Array.isArray(n)?[...n,i]:[n,i]}function Cg(n){return n._rawValidators}function Dg(n){return n._rawAsyncValidators}function $u(n){return n?Array.isArray(n)?n:[n]:[]}function tc(n,i){return Array.isArray(n)?n.includes(i):n===i}function rg(n,i){let e=$u(i);return $u(n).forEach(r=>{tc(e,r)||e.push(r)}),e}function ag(n,i){return $u(i).filter(e=>!tc(n,e))}var nc=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(i){this._rawValidators=i||[],this._composedValidatorFn=Zu(this._rawValidators)}_setAsyncValidators(i){this._rawAsyncValidators=i||[],this._composedAsyncValidatorFn=Ku(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(i){this._onDestroyCallbacks.push(i)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(i=>i()),this._onDestroyCallbacks=[]}reset(i=void 0){this.control?.reset(i)}hasError(i,e){return this.control?this.control.hasError(i,e):!1}getError(i,e){return this.control?this.control.getError(i,e):null}},gi=class extends nc{name;get formDirective(){return null}get path(){return null}},Dn=class extends nc{_parent=null;name=null;valueAccessor=null},ic=class{_cd;constructor(i){this._cd=i}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}};var Qt=(()=>{class n extends ic{constructor(e){super(e)}static \u0275fac=function(t){return new(t||n)(k(Dn,2))};static \u0275dir=A({type:n,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(t,r){t&2&&J("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},standalone:!1,features:[_e]})}return n})(),wn=(()=>{class n extends ic{constructor(e){super(e)}static \u0275fac=function(t){return new(t||n)(k(gi,10))};static \u0275dir=A({type:n,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["","formArray",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(t,r){t&2&&J("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)("ng-submitted",r.isSubmitted)},standalone:!1,features:[_e]})}return n})();var ls="VALID",Jl="INVALID",Za="PENDING",cs="DISABLED",dr=class{},rc=class extends dr{value;source;constructor(i,e){super(),this.value=i,this.source=e}},us=class extends dr{pristine;source;constructor(i,e){super(),this.pristine=i,this.source=e}},ms=class extends dr{touched;source;constructor(i,e){super(),this.touched=i,this.source=e}},Ka=class extends dr{status;source;constructor(i,e){super(),this.status=i,this.source=e}},ac=class extends dr{source;constructor(i){super(),this.source=i}},fs=class extends dr{source;constructor(i){super(),this.source=i}};function Xu(n){return(dc(n)?n.validators:n)||null}function bC(n){return Array.isArray(n)?Zu(n):n||null}function Qu(n,i){return(dc(i)?i.asyncValidators:n)||null}function yC(n){return Array.isArray(n)?Ku(n):n||null}function dc(n){return n!=null&&!Array.isArray(n)&&typeof n=="object"}function wg(n,i,e){let t=n.controls;if(!(i?Object.keys(t):t).length)throw new ge(1e3,"");if(!t[e])throw new ge(1001,"")}function Eg(n,i,e){n._forEachChild((t,r)=>{if(e[r]===void 0)throw new ge(1002,"")})}var Xa=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(i,e){this._assignValidators(i),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(i){this._rawValidators=this._composedValidatorFn=i}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(i){this._rawAsyncValidators=this._composedAsyncValidatorFn=i}get parent(){return this._parent}get status(){return Ge(this.statusReactive)}set status(i){Ge(()=>this.statusReactive.set(i))}_status=rn(()=>this.statusReactive());statusReactive=ne(void 0);get valid(){return this.status===ls}get invalid(){return this.status===Jl}get pending(){return this.status===Za}get disabled(){return this.status===cs}get enabled(){return this.status!==cs}errors;get pristine(){return Ge(this.pristineReactive)}set pristine(i){Ge(()=>this.pristineReactive.set(i))}_pristine=rn(()=>this.pristineReactive());pristineReactive=ne(!0);get dirty(){return!this.pristine}get touched(){return Ge(this.touchedReactive)}set touched(i){Ge(()=>this.touchedReactive.set(i))}_touched=rn(()=>this.touchedReactive());touchedReactive=ne(!1);get untouched(){return!this.touched}_events=new P;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(i){this._assignValidators(i)}setAsyncValidators(i){this._assignAsyncValidators(i)}addValidators(i){this.setValidators(rg(i,this._rawValidators))}addAsyncValidators(i){this.setAsyncValidators(rg(i,this._rawAsyncValidators))}removeValidators(i){this.setValidators(ag(i,this._rawValidators))}removeAsyncValidators(i){this.setAsyncValidators(ag(i,this._rawAsyncValidators))}hasValidator(i){return tc(this._rawValidators,i)}hasAsyncValidator(i){return tc(this._rawAsyncValidators,i)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(i={}){let e=this.touched===!1;this.touched=!0;let t=i.sourceControl??this;i.onlySelf||this._parent?.markAsTouched(He(x({},i),{sourceControl:t})),e&&i.emitEvent!==!1&&this._events.next(new ms(!0,t))}markAllAsDirty(i={}){this.markAsDirty({onlySelf:!0,emitEvent:i.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsDirty(i))}markAllAsTouched(i={}){this.markAsTouched({onlySelf:!0,emitEvent:i.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsTouched(i))}markAsUntouched(i={}){let e=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let t=i.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:i.emitEvent,sourceControl:t})}),i.onlySelf||this._parent?._updateTouched(i,t),e&&i.emitEvent!==!1&&this._events.next(new ms(!1,t))}markAsDirty(i={}){let e=this.pristine===!0;this.pristine=!1;let t=i.sourceControl??this;i.onlySelf||this._parent?.markAsDirty(He(x({},i),{sourceControl:t})),e&&i.emitEvent!==!1&&this._events.next(new us(!1,t))}markAsPristine(i={}){let e=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let t=i.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:i.emitEvent})}),i.onlySelf||this._parent?._updatePristine(i,t),e&&i.emitEvent!==!1&&this._events.next(new us(!0,t))}markAsPending(i={}){this.status=Za;let e=i.sourceControl??this;i.emitEvent!==!1&&(this._events.next(new Ka(this.status,e)),this.statusChanges.emit(this.status)),i.onlySelf||this._parent?.markAsPending(He(x({},i),{sourceControl:e}))}disable(i={}){let e=this._parentMarkedDirty(i.onlySelf);this.status=cs,this.errors=null,this._forEachChild(r=>{r.disable(He(x({},i),{onlySelf:!0}))}),this._updateValue();let t=i.sourceControl??this;i.emitEvent!==!1&&(this._events.next(new rc(this.value,t)),this._events.next(new Ka(this.status,t)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(He(x({},i),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(i={}){let e=this._parentMarkedDirty(i.onlySelf);this.status=ls,this._forEachChild(t=>{t.enable(He(x({},i),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:i.emitEvent}),this._updateAncestors(He(x({},i),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(t=>t(!1))}_updateAncestors(i,e){i.onlySelf||(this._parent?.updateValueAndValidity(i),i.skipPristineCheck||this._parent?._updatePristine({},e),this._parent?._updateTouched({},e))}setParent(i){this._parent=i}getRawValue(){return this.value}updateValueAndValidity(i={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let t=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===ls||this.status===Za)&&this._runAsyncValidator(t,i.emitEvent)}let e=i.sourceControl??this;i.emitEvent!==!1&&(this._events.next(new rc(this.value,e)),this._events.next(new Ka(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),i.onlySelf||this._parent?.updateValueAndValidity(He(x({},i),{sourceControl:e}))}_updateTreeValidity(i={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(i)),this.updateValueAndValidity({onlySelf:!0,emitEvent:i.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?cs:ls}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(i,e){if(this.asyncValidator){this.status=Za,this._hasOwnPendingAsyncValidator={emitEvent:e!==!1,shouldHaveEmitted:i!==!1};let t=pg(this.asyncValidator(this));this._asyncValidationSubscription=t.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:e,shouldHaveEmitted:i})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let i=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,i}return!1}setErrors(i,e={}){this.errors=i,this._updateControlsErrors(e.emitEvent!==!1,this,e.shouldHaveEmitted)}get(i){let e=i;return e==null||(Array.isArray(e)||(e=e.split(".")),e.length===0)?null:e.reduce((t,r)=>t&&t._find(r),this)}getError(i,e){let t=e?this.get(e):this;return t?.errors?t.errors[i]:null}hasError(i,e){return!!this.getError(i,e)}get root(){let i=this;for(;i._parent;)i=i._parent;return i}_updateControlsErrors(i,e,t){this.status=this._calculateStatus(),i&&this.statusChanges.emit(this.status),(i||t)&&this._events.next(new Ka(this.status,e)),this._parent&&this._parent._updateControlsErrors(i,e,t)}_initObservables(){this.valueChanges=new j,this.statusChanges=new j}_calculateStatus(){return this._allControlsDisabled()?cs:this.errors?Jl:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(Za)?Za:this._anyControlsHaveStatus(Jl)?Jl:ls}_anyControlsHaveStatus(i){return this._anyControls(e=>e.status===i)}_anyControlsDirty(){return this._anyControls(i=>i.dirty)}_anyControlsTouched(){return this._anyControls(i=>i.touched)}_updatePristine(i,e){let t=!this._anyControlsDirty(),r=this.pristine!==t;this.pristine=t,i.onlySelf||this._parent?._updatePristine(i,e),r&&this._events.next(new us(this.pristine,e))}_updateTouched(i={},e){this.touched=this._anyControlsTouched(),this._events.next(new ms(this.touched,e)),i.onlySelf||this._parent?._updateTouched(i,e)}_onDisabledChange=[];_registerOnCollectionChange(i){this._onCollectionChange=i}_setUpdateStrategy(i){dc(i)&&i.updateOn!=null&&(this._updateOn=i.updateOn)}_parentMarkedDirty(i){return!i&&!!this._parent?.dirty&&!this._parent._anyControlsDirty()}_find(i){return null}_assignValidators(i){this._rawValidators=Array.isArray(i)?i.slice():i,this._composedValidatorFn=bC(this._rawValidators)}_assignAsyncValidators(i){this._rawAsyncValidators=Array.isArray(i)?i.slice():i,this._composedAsyncValidatorFn=yC(this._rawAsyncValidators)}},Qa=class extends Xa{constructor(i,e,t){super(Xu(e),Qu(t,e)),this.controls=i,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(i,e){return this.controls[i]?this.controls[i]:(this.controls[i]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(i,e,t={}){this.registerControl(i,e),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}removeControl(i,e={}){this.controls[i]&&this.controls[i]._registerOnCollectionChange(()=>{}),delete this.controls[i],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(i,e,t={}){this.controls[i]&&this.controls[i]._registerOnCollectionChange(()=>{}),delete this.controls[i],e&&this.registerControl(i,e),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}contains(i){return this.controls.hasOwnProperty(i)&&this.controls[i].enabled}setValue(i,e={}){Eg(this,!0,i),Object.keys(i).forEach(t=>{wg(this,!0,t),this.controls[t].setValue(i[t],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(i,e={}){i!=null&&(Object.keys(i).forEach(t=>{let r=this.controls[t];r&&r.patchValue(i[t],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(i={},e={}){this._forEachChild((t,r)=>{t.reset(i?i[r]:null,He(x({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new fs(this))}getRawValue(){return this._reduceChildren({},(i,e,t)=>(i[t]=e.getRawValue(),i))}_syncPendingControls(){let i=this._reduceChildren(!1,(e,t)=>t._syncPendingControls()?!0:e);return i&&this.updateValueAndValidity({onlySelf:!0}),i}_forEachChild(i){Object.keys(this.controls).forEach(e=>{let t=this.controls[e];t&&i(t,e)})}_setUpControls(){this._forEachChild(i=>{i.setParent(this),i._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(i){for(let[e,t]of Object.entries(this.controls))if(this.contains(e)&&i(t))return!0;return!1}_reduceValue(){let i={};return this._reduceChildren(i,(e,t,r)=>((t.enabled||this.disabled)&&(e[r]=t.value),e))}_reduceChildren(i,e){let t=i;return this._forEachChild((r,a)=>{t=e(t,r,a)}),t}_allControlsDisabled(){for(let i of Object.keys(this.controls))if(this.controls[i].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(i){return this.controls.hasOwnProperty(i)?this.controls[i]:null}};var Gu=class extends Qa{};var ps=new S("",{factory:()=>uc}),uc="always";function xg(n,i){return[...i.path,n]}function oc(n,i,e=uc){Ju(n,i),i.valueAccessor.writeValue(n.value),(n.disabled||e==="always")&&i.valueAccessor.setDisabledState?.(n.disabled),DC(n,i),EC(n,i),wC(n,i),CC(n,i)}function og(n,i,e=!0){let t=()=>{};i?.valueAccessor?.registerOnChange(t),i?.valueAccessor?.registerOnTouched(t),lc(n,i),n&&(i._invokeOnDestroyCallbacks(),n._registerOnCollectionChange(()=>{}))}function sc(n,i){n.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(i)})}function CC(n,i){if(i.valueAccessor.setDisabledState){let e=t=>{i.valueAccessor.setDisabledState(t)};n.registerOnDisabledChange(e),i._registerOnDestroy(()=>{n._unregisterOnDisabledChange(e)})}}function Ju(n,i){let e=Cg(n);i.validator!==null?n.setValidators(ig(e,i.validator)):typeof e=="function"&&n.setValidators([e]);let t=Dg(n);i.asyncValidator!==null?n.setAsyncValidators(ig(t,i.asyncValidator)):typeof t=="function"&&n.setAsyncValidators([t]);let r=()=>n.updateValueAndValidity();sc(i._rawValidators,r),sc(i._rawAsyncValidators,r)}function lc(n,i){let e=!1;if(n!==null){if(i.validator!==null){let r=Cg(n);if(Array.isArray(r)&&r.length>0){let a=r.filter(o=>o!==i.validator);a.length!==r.length&&(e=!0,n.setValidators(a))}}if(i.asyncValidator!==null){let r=Dg(n);if(Array.isArray(r)&&r.length>0){let a=r.filter(o=>o!==i.asyncValidator);a.length!==r.length&&(e=!0,n.setAsyncValidators(a))}}}let t=()=>{};return sc(i._rawValidators,t),sc(i._rawAsyncValidators,t),e}function DC(n,i){i.valueAccessor.registerOnChange(e=>{n._pendingValue=e,n._pendingChange=!0,n._pendingDirty=!0,n.updateOn==="change"&&Sg(n,i)})}function wC(n,i){i.valueAccessor.registerOnTouched(()=>{n._pendingTouched=!0,n.updateOn==="blur"&&n._pendingChange&&Sg(n,i),n.updateOn!=="submit"&&n.markAsTouched()})}function Sg(n,i){n._pendingDirty&&n.markAsDirty(),n.setValue(n._pendingValue,{emitModelToViewChange:!1}),i.viewToModelUpdate(n._pendingValue),n._pendingChange=!1}function EC(n,i){let e=(t,r)=>{i.valueAccessor.writeValue(t),r&&i.viewToModelUpdate(t)};n.registerOnChange(e),i._registerOnDestroy(()=>{n._unregisterOnChange(e)})}function Mg(n,i){n==null,Ju(n,i)}function xC(n,i){return lc(n,i)}function Ag(n,i){if(!n.hasOwnProperty("model"))return!1;let e=n.model;return e.isFirstChange()?!0:!Object.is(i,e.currentValue)}function SC(n){return Object.getPrototypeOf(n.constructor)===mg}function Rg(n,i){n._syncPendingControls(),i.forEach(e=>{let t=e.control;t.updateOn==="submit"&&t._pendingChange&&(e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1)})}function kg(n,i){if(!i)return null;Array.isArray(i);let e,t,r;return i.forEach(a=>{a.constructor===zt?e=a:SC(a)?t=a:r=a}),r||t||e||null}function MC(n,i){let e=n.indexOf(i);e>-1&&n.splice(e,1)}var AC={provide:gi,useExisting:Kt(()=>Ja)},ds=Promise.resolve(),Ja=(()=>{class n extends gi{callSetDisabledState;get submitted(){return Ge(this.submittedReactive)}_submitted=rn(()=>this.submittedReactive());submittedReactive=ne(!1);_directives=new Set;form;ngSubmit=new j;options;constructor(e,t,r){super(),this.callSetDisabledState=r,this.form=new Qa({},Zu(e),Ku(t))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(e){ds.then(()=>{let t=this._findContainer(e.path);e.control=t.registerControl(e.name,e.control),oc(e.control,e,this.callSetDisabledState),e.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(e)})}getControl(e){return this.form.get(e.path)}removeControl(e){ds.then(()=>{this._findContainer(e.path)?.removeControl(e.name),this._directives.delete(e)})}addFormGroup(e){ds.then(()=>{let t=this._findContainer(e.path),r=new Qa({});Mg(r,e),t.registerControl(e.name,r),r.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(e){ds.then(()=>{this._findContainer(e.path)?.removeControl?.(e.name)})}getFormGroup(e){return this.form.get(e.path)}updateModel(e,t){ds.then(()=>{this.form.get(e.path).setValue(t)})}setValue(e){this.control.setValue(e)}onSubmit(e){return this.submittedReactive.set(!0),Rg(this.form,this._directives),this.ngSubmit.emit(e),this.form._events.next(new ac(this.control)),e?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(e=void 0){this.form.reset(e),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(e){return e.pop(),e.length?this.form.get(e):this.form}static \u0275fac=function(t){return new(t||n)(k(Vi,10),k(cc,10),k(ps,8))};static \u0275dir=A({type:n,selectors:[["form",3,"ngNoForm","",3,"formGroup","",3,"formArray",""],["ng-form"],["","ngForm",""]],hostBindings:function(t,r){t&1&&R("submit",function(o){return r.onSubmit(o)})("reset",function(){return r.onReset()})},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[je([AC]),_e]})}return n})();function sg(n,i){let e=n.indexOf(i);e>-1&&n.splice(e,1)}function lg(n){return typeof n=="object"&&n!==null&&Object.keys(n).length===2&&"value"in n&&"disabled"in n}var hs=class extends Xa{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(i=null,e,t){super(Xu(e),Qu(t,e)),this._applyFormState(i),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),dc(e)&&(e.nonNullable||e.initialValueIsDefault)&&(lg(i)?this.defaultValue=i.value:this.defaultValue=i)}setValue(i,e={}){this.value=this._pendingValue=i,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(t=>t(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e)}patchValue(i,e={}){this.setValue(i,e)}reset(i=this.defaultValue,e={}){this._applyFormState(i),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),e.overwriteDefaultValue&&(this.defaultValue=this.value),this._pendingChange=!1,e?.emitEvent!==!1&&this._events.next(new fs(this))}_updateValue(){}_anyControls(i){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(i){this._onChange.push(i)}_unregisterOnChange(i){sg(this._onChange,i)}registerOnDisabledChange(i){this._onDisabledChange.push(i)}_unregisterOnDisabledChange(i){sg(this._onDisabledChange,i)}_forEachChild(i){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(i){lg(i)?(this.value=this._pendingValue=i.value,i.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=i}};var RC=n=>n instanceof hs;var kC={provide:Dn,useExisting:Kt(()=>em)},cg=Promise.resolve(),em=(()=>{class n extends Dn{_changeDetectorRef;callSetDisabledState;control=new hs;static ngAcceptInputType_isDisabled;_registered=!1;viewModel;name="";isDisabled;model;options;update=new j;constructor(e,t,r,a,o,s){super(),this._changeDetectorRef=o,this.callSetDisabledState=s,this._parent=e,this._setValidators(t),this._setAsyncValidators(r),this.valueAccessor=kg(this,a)}ngOnChanges(e){if(this._checkForErrors(),!this._registered||"name"in e){if(this._registered&&(this._checkName(),this.formDirective)){let t=e.name.previousValue;this.formDirective.removeControl({name:t,path:this._getPath(t)})}this._setUpControl()}"isDisabled"in e&&this._updateDisabled(e),Ag(e,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective?.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){oc(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._checkName()}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(e){cg.then(()=>{this.control.setValue(e,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(e){let t=e.isDisabled.currentValue,r=t!==0&&Z(t);cg.then(()=>{r&&!this.control.disabled?this.control.disable():!r&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(e){return this._parent?xg(e,this._parent):[e]}static \u0275fac=function(t){return new(t||n)(k(gi,9),k(Vi,10),k(cc,10),k(ur,10),k(Ee,8),k(ps,8))};static \u0275dir=A({type:n,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],standalone:!1,features:[je([kC]),_e,Ue]})}return n})();var En=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=A({type:n,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""],standalone:!1})}return n})(),TC={provide:ur,useExisting:Kt(()=>tm),multi:!0},tm=(()=>{class n extends mg{writeValue(e){let t=e??"";this.setProperty("value",t)}registerOnChange(e){this.onChange=t=>{e(t==""?null:parseFloat(t))}}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Xe(n)))(r||n)}})();static \u0275dir=A({type:n,selectors:[["input","type","number","formControlName",""],["input","type","number","formControl",""],["input","type","number","ngModel",""]],hostBindings:function(t,r){t&1&&R("input",function(o){return r.onChange(o.target.value)})("blur",function(){return r.onTouched()})},standalone:!1,features:[je([TC]),_e]})}return n})();var Wu=class extends Xa{constructor(i,e,t){super(Xu(e),Qu(t,e)),this.controls=i,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;at(i){return this.controls[this._adjustIndex(i)]}push(i,e={}){Array.isArray(i)?i.forEach(t=>{this.controls.push(t),this._registerControl(t)}):(this.controls.push(i),this._registerControl(i)),this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}insert(i,e,t={}){this.controls.splice(i,0,e),this._registerControl(e),this.updateValueAndValidity({emitEvent:t.emitEvent})}removeAt(i,e={}){let t=this._adjustIndex(i);t<0&&(t=0),this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),this.controls.splice(t,1),this.updateValueAndValidity({emitEvent:e.emitEvent})}setControl(i,e,t={}){let r=this._adjustIndex(i);r<0&&(r=0),this.controls[r]&&this.controls[r]._registerOnCollectionChange(()=>{}),this.controls.splice(r,1),e&&(this.controls.splice(r,0,e),this._registerControl(e)),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(i,e={}){Eg(this,!1,i),i.forEach((t,r)=>{wg(this,!1,r),this.at(r).setValue(t,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(i,e={}){i!=null&&(i.forEach((t,r)=>{this.at(r)&&this.at(r).patchValue(t,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(i=[],e={}){this._forEachChild((t,r)=>{t.reset(i[r],He(x({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new fs(this))}getRawValue(){return this.controls.map(i=>i.getRawValue())}clear(i={}){this.controls.length<1||(this._forEachChild(e=>e._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:i.emitEvent}))}_adjustIndex(i){return i<0?i+this.length:i}_syncPendingControls(){let i=this.controls.reduce((e,t)=>t._syncPendingControls()?!0:e,!1);return i&&this.updateValueAndValidity({onlySelf:!0}),i}_forEachChild(i){this.controls.forEach((e,t)=>{i(e,t)})}_updateValue(){this.value=this.controls.filter(i=>i.enabled||this.disabled).map(i=>i.value)}_anyControls(i){return this.controls.some(e=>e.enabled&&i(e))}_setUpControls(){this._forEachChild(i=>this._registerControl(i))}_allControlsDisabled(){for(let i of this.controls)if(i.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(i){i.setParent(this),i._registerOnCollectionChange(this._onCollectionChange)}_find(i){return this.at(i)??null}};var IC=(()=>{class n extends gi{callSetDisabledState;get submitted(){return Ge(this._submittedReactive)}set submitted(e){this._submittedReactive.set(e)}_submitted=rn(()=>this._submittedReactive());_submittedReactive=ne(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];constructor(e,t,r){super(),this.callSetDisabledState=r,this._setValidators(e),this._setAsyncValidators(t)}ngOnChanges(e){this.onChanges(e)}ngOnDestroy(){this.onDestroy()}onChanges(e){this._checkFormPresent(),e.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}onDestroy(){this.form&&(lc(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get path(){return[]}addControl(e){let t=this.form.get(e.path);return oc(t,e,this.callSetDisabledState),t.updateValueAndValidity({emitEvent:!1}),this.directives.push(e),t}getControl(e){return this.form.get(e.path)}removeControl(e){og(e.control||null,e,!1),MC(this.directives,e)}addFormGroup(e){this._setUpFormContainer(e)}removeFormGroup(e){this._cleanUpFormContainer(e)}getFormGroup(e){return this.form.get(e.path)}getFormArray(e){return this.form.get(e.path)}addFormArray(e){this._setUpFormContainer(e)}removeFormArray(e){this._cleanUpFormContainer(e)}updateModel(e,t){this.form.get(e.path).setValue(t)}onReset(){this.resetForm()}resetForm(e=void 0,t={}){this.form.reset(e,t),this._submittedReactive.set(!1)}onSubmit(e){return this.submitted=!0,Rg(this.form,this.directives),this.ngSubmit.emit(e),this.form._events.next(new ac(this.control)),e?.target?.method==="dialog"}_updateDomValue(){this.directives.forEach(e=>{let t=e.control,r=this.form.get(e.path);t!==r&&(og(t||null,e),RC(r)&&(oc(r,e,this.callSetDisabledState),e.control=r))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(e){let t=this.form.get(e.path);Mg(t,e),t.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(e){let t=this.form?.get(e.path);t&&xC(t,e)&&t.updateValueAndValidity({emitEvent:!1})}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm?._registerOnCollectionChange(()=>{})}_updateValidators(){Ju(this.form,this),this._oldForm&&lc(this._oldForm,this)}_checkFormPresent(){this.form}static \u0275fac=function(t){return new(t||n)(k(Vi,10),k(cc,10),k(ps,8))};static \u0275dir=A({type:n,features:[_e,Ue]})}return n})();var Tg=new S("");var FC={provide:Dn,useExisting:Kt(()=>ln)},ln=(()=>{class n extends Dn{_ngModelWarningConfig;_added=!1;viewModel;control;name=null;set isDisabled(e){}model;update=new j;static _ngModelWarningSentOnce=!1;_ngModelWarningSent=!1;constructor(e,t,r,a,o){super(),this._ngModelWarningConfig=o,this._parent=e,this._setValidators(t),this._setAsyncValidators(r),this.valueAccessor=kg(this,a)}ngOnChanges(e){this._added||this._setUpControl(),Ag(e,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective?.removeControl(this)}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}get path(){return xg(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_setUpControl(){this.control=this.formDirective.addControl(this),this._added=!0}static \u0275fac=function(t){return new(t||n)(k(gi,13),k(Vi,10),k(cc,10),k(ur,10),k(Tg,8))};static \u0275dir=A({type:n,selectors:[["","formControlName",""]],inputs:{name:[0,"formControlName","name"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},standalone:!1,features:[je([FC]),_e,Ue]})}return n})();var OC={provide:gi,useExisting:Kt(()=>Ft)},Ft=(()=>{class n extends IC{form=null;ngSubmit=new j;get control(){return this.form}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Xe(n)))(r||n)}})();static \u0275dir=A({type:n,selectors:[["","formGroup",""]],hostBindings:function(t,r){t&1&&R("submit",function(o){return r.onSubmit(o)})("reset",function(){return r.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[je([OC]),_e]})}return n})();var PC=(()=>{class n{_validator=ec;_onChange;_enabled;ngOnChanges(e){if(this.inputName in e){let t=this.normalizeInput(e[this.inputName].currentValue);this._enabled=this.enabled(t),this._validator=this._enabled?this.createValidator(t):ec,this._onChange?.()}}validate(e){return this._validator(e)}registerOnValidatorChange(e){this._onChange=e}enabled(e){return e!=null}static \u0275fac=function(t){return new(t||n)};static \u0275dir=A({type:n,features:[Ue]})}return n})();var NC={provide:Vi,useExisting:Kt(()=>nm),multi:!0};var nm=(()=>{class n extends PC{required;inputName="required";normalizeInput=Z;createValidator=e=>hg;enabled(e){return e}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Xe(n)))(r||n)}})();static \u0275dir=A({type:n,selectors:[["","required","","formControlName","",3,"type","checkbox"],["","required","","formControl","",3,"type","checkbox"],["","required","","ngModel","",3,"type","checkbox"]],hostVars:1,hostBindings:function(t,r){t&2&&pe("required",r._enabled?"":null)},inputs:{required:"required"},standalone:!1,features:[je([NC]),_e]})}return n})();var Ig=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=q({type:n});static \u0275inj=Y({})}return n})();function dg(n){return!!n&&(n.asyncValidators!==void 0||n.validators!==void 0||n.updateOn!==void 0)}var xn=(()=>{class n{useNonNullable=!1;get nonNullable(){let e=new n;return e.useNonNullable=!0,e}group(e,t=null){let r=this._reduceControls(e),a={};return dg(t)?a=t:t!==null&&(a.validators=t.validator,a.asyncValidators=t.asyncValidator),new Qa(r,a)}record(e,t=null){let r=this._reduceControls(e);return new Gu(r,t)}control(e,t,r){let a={};return this.useNonNullable?(dg(t)?a=t:(a.validators=t,a.asyncValidators=r),new hs(e,He(x({},a),{nonNullable:!0}))):new hs(e,t,r)}array(e,t,r){let a=e.map(o=>this._createControl(o));return new Wu(a,t,r)}_reduceControls(e){let t={};return Object.keys(e).forEach(r=>{t[r]=this._createControl(e[r])}),t}_createControl(e){if(e instanceof hs)return e;if(e instanceof Xa)return e;if(Array.isArray(e)){let t=e[0],r=e.length>1?e[1]:null,a=e.length>2?e[2]:null;return this.control(t,r,a)}else return this.control(e)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=w({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var _i=(()=>{class n{static withConfig(e){return{ngModule:n,providers:[{provide:ps,useValue:e.callSetDisabledState??uc}]}}static \u0275fac=function(t){return new(t||n)};static \u0275mod=q({type:n});static \u0275inj=Y({imports:[Ig]})}return n})(),Sn=(()=>{class n{static withConfig(e){return{ngModule:n,providers:[{provide:Tg,useValue:e.warnOnNgModelWithFormControl??"always"},{provide:ps,useValue:e.callSetDisabledState??uc}]}}static \u0275fac=function(t){return new(t||n)};static \u0275mod=q({type:n});static \u0275inj=Y({imports:[Ig]})}return n})();var LC=new S("cdk-dir-doc",{providedIn:"root",factory:()=>l(X)}),VC=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function Fg(n){let i=n?.toLowerCase()||"";return i==="auto"&&typeof navigator<"u"&&navigator?.language?VC.test(navigator.language)?"rtl":"ltr":i==="rtl"?"rtl":"ltr"}var ht=(()=>{class n{get value(){return this.valueSignal()}valueSignal=ne("ltr");change=new j;constructor(){let e=l(LC,{optional:!0});if(e){let t=e.body?e.body.dir:null,r=e.documentElement?e.documentElement.dir:null;this.valueSignal.set(Fg(t||r||"ltr"))}}ngOnDestroy(){this.change.complete()}static \u0275fac=function(t){return new(t||n)};static \u0275prov=w({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Ve=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=q({type:n});static \u0275inj=Y({})}return n})();var BC=["*"];var jC=new S("MAT_CARD_CONFIG"),Mn=(()=>{class n{appearance;constructor(){let e=l(jC,{optional:!0});this.appearance=e?.appearance||"raised"}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=N({type:n,selectors:[["mat-card"]],hostAttrs:[1,"mat-mdc-card","mdc-card"],hostVars:8,hostBindings:function(t,r){t&2&&J("mat-mdc-card-outlined",r.appearance==="outlined")("mdc-card--outlined",r.appearance==="outlined")("mat-mdc-card-filled",r.appearance==="filled")("mdc-card--filled",r.appearance==="filled")},inputs:{appearance:"appearance"},exportAs:["matCard"],ngContentSelectors:BC,decls:1,vars:0,template:function(t,r){t&1&&(Qe(),ve(0))},styles:[`.mat-mdc-card {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  position: relative;
  border-style: solid;
  border-width: 0;
  background-color: var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));
  border-color: var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));
  border-radius: var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium));
  box-shadow: var(--mat-card-elevated-container-elevation, var(--mat-sys-level1));
}
.mat-mdc-card::after {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: solid 1px transparent;
  content: "";
  display: block;
  pointer-events: none;
  box-sizing: border-box;
  border-radius: var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium));
}

.mat-mdc-card-outlined {
  background-color: var(--mat-card-outlined-container-color, var(--mat-sys-surface));
  border-radius: var(--mat-card-outlined-container-shape, var(--mat-sys-corner-medium));
  border-width: var(--mat-card-outlined-outline-width, 1px);
  border-color: var(--mat-card-outlined-outline-color, var(--mat-sys-outline-variant));
  box-shadow: var(--mat-card-outlined-container-elevation, var(--mat-sys-level0));
}
.mat-mdc-card-outlined::after {
  border: none;
}

.mat-mdc-card-filled {
  background-color: var(--mat-card-filled-container-color, var(--mat-sys-surface-container-highest));
  border-radius: var(--mat-card-filled-container-shape, var(--mat-sys-corner-medium));
  box-shadow: var(--mat-card-filled-container-elevation, var(--mat-sys-level0));
}

.mdc-card__media {
  position: relative;
  box-sizing: border-box;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.mdc-card__media::before {
  display: block;
  content: "";
}
.mdc-card__media:first-child {
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
}
.mdc-card__media:last-child {
  border-bottom-left-radius: inherit;
  border-bottom-right-radius: inherit;
}

.mat-mdc-card-actions {
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  min-height: 52px;
  padding: 8px;
}

.mat-mdc-card-title {
  font-family: var(--mat-card-title-text-font, var(--mat-sys-title-large-font));
  line-height: var(--mat-card-title-text-line-height, var(--mat-sys-title-large-line-height));
  font-size: var(--mat-card-title-text-size, var(--mat-sys-title-large-size));
  letter-spacing: var(--mat-card-title-text-tracking, var(--mat-sys-title-large-tracking));
  font-weight: var(--mat-card-title-text-weight, var(--mat-sys-title-large-weight));
}

.mat-mdc-card-subtitle {
  color: var(--mat-card-subtitle-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-card-subtitle-text-font, var(--mat-sys-title-medium-font));
  line-height: var(--mat-card-subtitle-text-line-height, var(--mat-sys-title-medium-line-height));
  font-size: var(--mat-card-subtitle-text-size, var(--mat-sys-title-medium-size));
  letter-spacing: var(--mat-card-subtitle-text-tracking, var(--mat-sys-title-medium-tracking));
  font-weight: var(--mat-card-subtitle-text-weight, var(--mat-sys-title-medium-weight));
}

.mat-mdc-card-title,
.mat-mdc-card-subtitle {
  display: block;
  margin: 0;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle {
  padding: 16px 16px 0;
}

.mat-mdc-card-header {
  display: flex;
  padding: 16px 16px 0;
}

.mat-mdc-card-content {
  display: block;
  padding: 0 16px;
}
.mat-mdc-card-content:first-child {
  padding-top: 16px;
}
.mat-mdc-card-content:last-child {
  padding-bottom: 16px;
}

.mat-mdc-card-title-group {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.mat-mdc-card-avatar {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  flex-shrink: 0;
  margin-bottom: 16px;
  object-fit: cover;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title {
  line-height: normal;
}

.mat-mdc-card-sm-image {
  width: 80px;
  height: 80px;
}

.mat-mdc-card-md-image {
  width: 112px;
  height: 112px;
}

.mat-mdc-card-lg-image {
  width: 152px;
  height: 152px;
}

.mat-mdc-card-xl-image {
  width: 240px;
  height: 240px;
}

.mat-mdc-card-subtitle ~ .mat-mdc-card-title,
.mat-mdc-card-title ~ .mat-mdc-card-subtitle,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-title-group .mat-mdc-card-title,
.mat-mdc-card-title-group .mat-mdc-card-subtitle {
  padding-top: 0;
}

.mat-mdc-card-content > :last-child:not(.mat-mdc-card-footer) {
  margin-bottom: 0;
}

.mat-mdc-card-actions-align-end {
  justify-content: flex-end;
}
`],encapsulation:2,changeDetection:0})}return n})(),An=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=A({type:n,selectors:[["mat-card-title"],["","mat-card-title",""],["","matCardTitle",""]],hostAttrs:[1,"mat-mdc-card-title"]})}return n})();var Rn=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=A({type:n,selectors:[["mat-card-content"]],hostAttrs:[1,"mat-mdc-card-content"]})}return n})(),mr=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=A({type:n,selectors:[["mat-card-subtitle"],["","mat-card-subtitle",""],["","matCardSubtitle",""]],hostAttrs:[1,"mat-mdc-card-subtitle"]})}return n})(),kn=(()=>{class n{align="start";static \u0275fac=function(t){return new(t||n)};static \u0275dir=A({type:n,selectors:[["mat-card-actions"]],hostAttrs:[1,"mat-mdc-card-actions","mdc-card__actions"],hostVars:2,hostBindings:function(t,r){t&2&&J("mat-mdc-card-actions-align-end",r.align==="end")},inputs:{align:"align"},exportAs:["matCardActions"]})}return n})();var Tn=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=q({type:n});static \u0275inj=Y({imports:[Ve]})}return n})();function gs(n){return n.buttons===0||n.detail===0}function _s(n){let i=n.touches&&n.touches[0]||n.changedTouches&&n.changedTouches[0];return!!i&&i.identifier===-1&&(i.radiusX==null||i.radiusX===1)&&(i.radiusY==null||i.radiusY===1)}var im;function Og(){if(im==null){let n=typeof document<"u"?document.head:null;im=!!(n&&(n.createShadowRoot||n.attachShadow))}return im}function rm(n){if(Og()){let i=n.getRootNode?n.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&i instanceof ShadowRoot)return i}return null}function vi(){let n=typeof document<"u"&&document?document.activeElement:null;for(;n&&n.shadowRoot;){let i=n.shadowRoot.activeElement;if(i===n)break;n=i}return n}function Lt(n){return n.composedPath?n.composedPath()[0]:n.target}var am;try{am=typeof Intl<"u"&&Intl.v8BreakIterator}catch{am=!1}var xe=(()=>{class n{_platformId=l(Sa);isBrowser=this._platformId?kf(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||am)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;constructor(){}static \u0275fac=function(t){return new(t||n)};static \u0275prov=w({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var vs;function Pg(){if(vs==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>vs=!0}))}finally{vs=vs||!1}return vs}function to(n){return Pg()?n:!!n.capture}function Bi(n,i=0){return Ng(n)?Number(n):arguments.length===2?i:0}function Ng(n){return!isNaN(parseFloat(n))&&!isNaN(Number(n))}function cn(n){return n instanceof U?n.nativeElement:n}var Lg=new S("cdk-input-modality-detector-options"),Vg={ignoreKeys:[18,17,224,91,16]},Bg=650,om={passive:!0,capture:!0},jg=(()=>{class n{_platform=l(xe);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new Bt(null);_options;_lastTouchMs=0;_onKeydown=e=>{this._options?.ignoreKeys?.some(t=>t===e.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=Lt(e))};_onMousedown=e=>{Date.now()-this._lastTouchMs<Bg||(this._modality.next(gs(e)?"keyboard":"mouse"),this._mostRecentTarget=Lt(e))};_onTouchstart=e=>{if(_s(e)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=Lt(e)};constructor(){let e=l(de),t=l(X),r=l(Lg,{optional:!0});if(this._options=x(x({},Vg),r),this.modalityDetected=this._modality.pipe(Zs(1)),this.modalityChanged=this.modalityDetected.pipe(Sd()),this._platform.isBrowser){let a=l(Nt).createRenderer(null,null);this._listenerCleanups=e.runOutsideAngular(()=>[a.listen(t,"keydown",this._onKeydown,om),a.listen(t,"mousedown",this._onMousedown,om),a.listen(t,"touchstart",this._onTouchstart,om)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(e=>e())}static \u0275fac=function(t){return new(t||n)};static \u0275prov=w({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),bs=(function(n){return n[n.IMMEDIATE=0]="IMMEDIATE",n[n.EVENTUAL=1]="EVENTUAL",n})(bs||{}),zg=new S("cdk-focus-monitor-default-options"),mc=to({passive:!0,capture:!0}),bi=(()=>{class n{_ngZone=l(de);_platform=l(xe);_inputModalityDetector=l(jg);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=l(X);_stopInputModalityDetector=new P;constructor(){let e=l(zg,{optional:!0});this._detectionMode=e?.detectionMode||bs.IMMEDIATE}_rootNodeFocusAndBlurListener=e=>{let t=Lt(e);for(let r=t;r;r=r.parentElement)e.type==="focus"?this._onFocus(e,r):this._onBlur(e,r)};monitor(e,t=!1){let r=cn(e);if(!this._platform.isBrowser||r.nodeType!==1)return Q();let a=rm(r)||this._document,o=this._elementInfo.get(r);if(o)return t&&(o.checkChildren=!0),o.subject;let s={checkChildren:t,subject:new P,rootNode:a};return this._elementInfo.set(r,s),this._registerGlobalListeners(s),s.subject}stopMonitoring(e){let t=cn(e),r=this._elementInfo.get(t);r&&(r.subject.complete(),this._setClasses(t),this._elementInfo.delete(t),this._removeGlobalListeners(r))}focusVia(e,t,r){let a=cn(e),o=this._document.activeElement;a===o?this._getClosestElementsInfo(a).forEach(([s,c])=>this._originChanged(s,t,c)):(this._setOrigin(t),typeof a.focus=="function"&&a.focus(r))}ngOnDestroy(){this._elementInfo.forEach((e,t)=>this.stopMonitoring(t))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(e){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(e)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:e&&this._isLastInteractionFromInputLabel(e)?"mouse":"program"}_shouldBeAttributedToTouch(e){return this._detectionMode===bs.EVENTUAL||!!e?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(e,t){e.classList.toggle("cdk-focused",!!t),e.classList.toggle("cdk-touch-focused",t==="touch"),e.classList.toggle("cdk-keyboard-focused",t==="keyboard"),e.classList.toggle("cdk-mouse-focused",t==="mouse"),e.classList.toggle("cdk-program-focused",t==="program")}_setOrigin(e,t=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=e,this._originFromTouchInteraction=e==="touch"&&t,this._detectionMode===bs.IMMEDIATE){clearTimeout(this._originTimeoutId);let r=this._originFromTouchInteraction?Bg:1;this._originTimeoutId=setTimeout(()=>this._origin=null,r)}})}_onFocus(e,t){let r=this._elementInfo.get(t),a=Lt(e);!r||!r.checkChildren&&t!==a||this._originChanged(t,this._getFocusOrigin(a),r)}_onBlur(e,t){let r=this._elementInfo.get(t);!r||r.checkChildren&&e.relatedTarget instanceof Node&&t.contains(e.relatedTarget)||(this._setClasses(t),this._emitOrigin(r,null))}_emitOrigin(e,t){e.subject.observers.length&&this._ngZone.run(()=>e.subject.next(t))}_registerGlobalListeners(e){if(!this._platform.isBrowser)return;let t=e.rootNode,r=this._rootNodeFocusListenerCount.get(t)||0;r||this._ngZone.runOutsideAngular(()=>{t.addEventListener("focus",this._rootNodeFocusAndBlurListener,mc),t.addEventListener("blur",this._rootNodeFocusAndBlurListener,mc)}),this._rootNodeFocusListenerCount.set(t,r+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(Be(this._stopInputModalityDetector)).subscribe(a=>{this._setOrigin(a,!0)}))}_removeGlobalListeners(e){let t=e.rootNode;if(this._rootNodeFocusListenerCount.has(t)){let r=this._rootNodeFocusListenerCount.get(t);r>1?this._rootNodeFocusListenerCount.set(t,r-1):(t.removeEventListener("focus",this._rootNodeFocusAndBlurListener,mc),t.removeEventListener("blur",this._rootNodeFocusAndBlurListener,mc),this._rootNodeFocusListenerCount.delete(t))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(e,t,r){this._setClasses(e,t),this._emitOrigin(r,t),this._lastFocusOrigin=t}_getClosestElementsInfo(e){let t=[];return this._elementInfo.forEach((r,a)=>{(a===e||r.checkChildren&&a.contains(e))&&t.push([a,r])}),t}_isLastInteractionFromInputLabel(e){let{_mostRecentTarget:t,mostRecentModality:r}=this._inputModalityDetector;if(r!=="mouse"||!t||t===e||e.nodeName!=="INPUT"&&e.nodeName!=="TEXTAREA"||e.disabled)return!1;let a=e.labels;if(a){for(let o=0;o<a.length;o++)if(a[o].contains(t))return!0}return!1}static \u0275fac=function(t){return new(t||n)};static \u0275prov=w({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),sm=(()=>{class n{_elementRef=l(U);_focusMonitor=l(bi);_monitorSubscription;_focusOrigin=null;cdkFocusChange=new j;constructor(){}get focusOrigin(){return this._focusOrigin}ngAfterViewInit(){let e=this._elementRef.nativeElement;this._monitorSubscription=this._focusMonitor.monitor(e,e.nodeType===1&&e.hasAttribute("cdkMonitorSubtreeFocus")).subscribe(t=>{this._focusOrigin=t,this.cdkFocusChange.emit(t)})}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._monitorSubscription?.unsubscribe()}static \u0275fac=function(t){return new(t||n)};static \u0275dir=A({type:n,selectors:[["","cdkMonitorElementFocus",""],["","cdkMonitorSubtreeFocus",""]],outputs:{cdkFocusChange:"cdkFocusChange"},exportAs:["cdkMonitorFocus"]})}return n})();var hc=new WeakMap,dt=(()=>{class n{_appRef;_injector=l(ce);_environmentInjector=l(kt);load(e){let t=this._appRef=this._appRef||this._injector.get(Ii),r=hc.get(t);r||(r={loaders:new Set,refs:[]},hc.set(t,r),t.onDestroy(()=>{hc.get(t)?.refs.forEach(a=>a.destroy()),hc.delete(t)})),r.loaders.has(e)||(r.loaders.add(e),r.refs.push(ol(e,{environmentInjector:this._environmentInjector})))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=w({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var yi=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=N({type:n,selectors:[["ng-component"]],exportAs:["cdkVisuallyHidden"],decls:0,vars:0,template:function(t,r){},styles:[`.cdk-visually-hidden {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  white-space: nowrap;
  outline: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  left: 0;
}
[dir=rtl] .cdk-visually-hidden {
  left: auto;
  right: 0;
}
`],encapsulation:2,changeDetection:0})}return n})(),fc;function zC(){if(fc===void 0&&(fc=null,typeof window<"u")){let n=window;n.trustedTypes!==void 0&&(fc=n.trustedTypes.createPolicy("angular#components",{createHTML:i=>i}))}return fc}function ca(n){return zC()?.createHTML(n)||n}function Ug(n,i,e){let t=e.sanitize(Wt.HTML,i);n.innerHTML=ca(t||"")}function no(n){return Array.isArray(n)?n:[n]}var Hg=new Set,da,io=(()=>{class n{_platform=l(xe);_nonce=l(ko,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):HC}matchMedia(e){return(this._platform.WEBKIT||this._platform.BLINK)&&UC(e,this._nonce),this._matchMedia(e)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=w({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function UC(n,i){if(!Hg.has(n))try{da||(da=document.createElement("style"),i&&da.setAttribute("nonce",i),da.setAttribute("type","text/css"),document.head.appendChild(da)),da.sheet&&(da.sheet.insertRule(`@media ${n} {body{ }}`,0),Hg.add(n))}catch(e){console.error(e)}}function HC(n){return{matches:n==="all"||n==="",media:n,addListener:()=>{},removeListener:()=>{}}}var ys=(()=>{class n{_mediaMatcher=l(io);_zone=l(de);_queries=new Map;_destroySubject=new P;constructor(){}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(e){return $g(no(e)).some(r=>this._registerQuery(r).mql.matches)}observe(e){let r=$g(no(e)).map(o=>this._registerQuery(o).observable),a=Ti(r);return a=Ws(a.pipe(vt(1)),a.pipe(Zs(1),qs(0))),a.pipe(Oe(o=>{let s={matches:!1,breakpoints:{}};return o.forEach(({matches:c,query:m})=>{s.matches=s.matches||c,s.breakpoints[m]=c}),s}))}_registerQuery(e){if(this._queries.has(e))return this._queries.get(e);let t=this._mediaMatcher.matchMedia(e),a={observable:new li(o=>{let s=c=>this._zone.run(()=>o.next(c));return t.addListener(s),()=>{t.removeListener(s)}}).pipe(Rt(t),Oe(({matches:o})=>({query:e,matches:o})),Be(this._destroySubject)),mql:t};return this._queries.set(e,a),a}static \u0275fac=function(t){return new(t||n)};static \u0275prov=w({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function $g(n){return n.map(i=>i.split(",")).reduce((i,e)=>i.concat(e)).map(i=>i.trim())}var $C=(()=>{class n{create(e){return typeof MutationObserver>"u"?null:new MutationObserver(e)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=w({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var pc=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=q({type:n});static \u0275inj=Y({providers:[$C]})}return n})();var dm=(()=>{class n{_platform=l(xe);constructor(){}isDisabled(e){return e.hasAttribute("disabled")}isVisible(e){return WC(e)&&getComputedStyle(e).visibility==="visible"}isTabbable(e){if(!this._platform.isBrowser)return!1;let t=GC(eD(e));if(t&&(Gg(t)===-1||!this.isVisible(t)))return!1;let r=e.nodeName.toLowerCase(),a=Gg(e);return e.hasAttribute("contenteditable")?a!==-1:r==="iframe"||r==="object"||this._platform.WEBKIT&&this._platform.IOS&&!QC(e)?!1:r==="audio"?e.hasAttribute("controls")?a!==-1:!1:r==="video"?a===-1?!1:a!==null?!0:this._platform.FIREFOX||e.hasAttribute("controls"):e.tabIndex>=0}isFocusable(e,t){return JC(e)&&!this.isDisabled(e)&&(t?.ignoreVisibility||this.isVisible(e))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=w({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function GC(n){try{return n.frameElement}catch{return null}}function WC(n){return!!(n.offsetWidth||n.offsetHeight||typeof n.getClientRects=="function"&&n.getClientRects().length)}function YC(n){let i=n.nodeName.toLowerCase();return i==="input"||i==="select"||i==="button"||i==="textarea"}function qC(n){return KC(n)&&n.type=="hidden"}function ZC(n){return XC(n)&&n.hasAttribute("href")}function KC(n){return n.nodeName.toLowerCase()=="input"}function XC(n){return n.nodeName.toLowerCase()=="a"}function qg(n){if(!n.hasAttribute("tabindex")||n.tabIndex===void 0)return!1;let i=n.getAttribute("tabindex");return!!(i&&!isNaN(parseInt(i,10)))}function Gg(n){if(!qg(n))return null;let i=parseInt(n.getAttribute("tabindex")||"",10);return isNaN(i)?-1:i}function QC(n){let i=n.nodeName.toLowerCase(),e=i==="input"&&n.type;return e==="text"||e==="password"||i==="select"||i==="textarea"}function JC(n){return qC(n)?!1:YC(n)||ZC(n)||n.hasAttribute("contenteditable")||qg(n)}function eD(n){return n.ownerDocument&&n.ownerDocument.defaultView||window}var cm=class{_element;_checker;_ngZone;_document;_injector;_startAnchor=null;_endAnchor=null;_hasAttached=!1;startAnchorListener=()=>this.focusLastTabbableElement();endAnchorListener=()=>this.focusFirstTabbableElement();get enabled(){return this._enabled}set enabled(i){this._enabled=i,this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(i,this._startAnchor),this._toggleAnchorTabIndex(i,this._endAnchor))}_enabled=!0;constructor(i,e,t,r,a=!1,o){this._element=i,this._checker=e,this._ngZone=t,this._document=r,this._injector=o,a||this.attachAnchors()}destroy(){let i=this._startAnchor,e=this._endAnchor;i&&(i.removeEventListener("focus",this.startAnchorListener),i.remove()),e&&(e.removeEventListener("focus",this.endAnchorListener),e.remove()),this._startAnchor=this._endAnchor=null,this._hasAttached=!1}attachAnchors(){return this._hasAttached?!0:(this._ngZone.runOutsideAngular(()=>{this._startAnchor||(this._startAnchor=this._createAnchor(),this._startAnchor.addEventListener("focus",this.startAnchorListener)),this._endAnchor||(this._endAnchor=this._createAnchor(),this._endAnchor.addEventListener("focus",this.endAnchorListener))}),this._element.parentNode&&(this._element.parentNode.insertBefore(this._startAnchor,this._element),this._element.parentNode.insertBefore(this._endAnchor,this._element.nextSibling),this._hasAttached=!0),this._hasAttached)}focusInitialElementWhenReady(i){return new Promise(e=>{this._executeOnStable(()=>e(this.focusInitialElement(i)))})}focusFirstTabbableElementWhenReady(i){return new Promise(e=>{this._executeOnStable(()=>e(this.focusFirstTabbableElement(i)))})}focusLastTabbableElementWhenReady(i){return new Promise(e=>{this._executeOnStable(()=>e(this.focusLastTabbableElement(i)))})}_getRegionBoundary(i){let e=this._element.querySelectorAll(`[cdk-focus-region-${i}], [cdkFocusRegion${i}], [cdk-focus-${i}]`);return i=="start"?e.length?e[0]:this._getFirstTabbableElement(this._element):e.length?e[e.length-1]:this._getLastTabbableElement(this._element)}focusInitialElement(i){let e=this._element.querySelector("[cdk-focus-initial], [cdkFocusInitial]");if(e){if(!this._checker.isFocusable(e)){let t=this._getFirstTabbableElement(e);return t?.focus(i),!!t}return e.focus(i),!0}return this.focusFirstTabbableElement(i)}focusFirstTabbableElement(i){let e=this._getRegionBoundary("start");return e&&e.focus(i),!!e}focusLastTabbableElement(i){let e=this._getRegionBoundary("end");return e&&e.focus(i),!!e}hasAttached(){return this._hasAttached}_getFirstTabbableElement(i){if(this._checker.isFocusable(i)&&this._checker.isTabbable(i))return i;let e=i.children;for(let t=0;t<e.length;t++){let r=e[t].nodeType===this._document.ELEMENT_NODE?this._getFirstTabbableElement(e[t]):null;if(r)return r}return null}_getLastTabbableElement(i){if(this._checker.isFocusable(i)&&this._checker.isTabbable(i))return i;let e=i.children;for(let t=e.length-1;t>=0;t--){let r=e[t].nodeType===this._document.ELEMENT_NODE?this._getLastTabbableElement(e[t]):null;if(r)return r}return null}_createAnchor(){let i=this._document.createElement("div");return this._toggleAnchorTabIndex(this._enabled,i),i.classList.add("cdk-visually-hidden"),i.classList.add("cdk-focus-trap-anchor"),i.setAttribute("aria-hidden","true"),i}_toggleAnchorTabIndex(i,e){i?e.setAttribute("tabindex","0"):e.removeAttribute("tabindex")}toggleAnchors(i){this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(i,this._startAnchor),this._toggleAnchorTabIndex(i,this._endAnchor))}_executeOnStable(i){this._injector?at(i,{injector:this._injector}):setTimeout(i)}},gc=(()=>{class n{_checker=l(dm);_ngZone=l(de);_document=l(X);_injector=l(ce);constructor(){l(dt).load(yi)}create(e,t=!1){return new cm(e,this._checker,this._ngZone,this._document,t,this._injector)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=w({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),um=(()=>{class n{_elementRef=l(U);_focusTrapFactory=l(gc);focusTrap=void 0;_previouslyFocusedElement=null;get enabled(){return this.focusTrap?.enabled||!1}set enabled(e){this.focusTrap&&(this.focusTrap.enabled=e)}autoCapture=!1;constructor(){l(xe).isBrowser&&(this.focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement,!0))}ngOnDestroy(){this.focusTrap?.destroy(),this._previouslyFocusedElement&&(this._previouslyFocusedElement.focus(),this._previouslyFocusedElement=null)}ngAfterContentInit(){this.focusTrap?.attachAnchors(),this.autoCapture&&this._captureFocus()}ngDoCheck(){this.focusTrap&&!this.focusTrap.hasAttached()&&this.focusTrap.attachAnchors()}ngOnChanges(e){let t=e.autoCapture;t&&!t.firstChange&&this.autoCapture&&this.focusTrap?.hasAttached()&&this._captureFocus()}_captureFocus(){this._previouslyFocusedElement=vi(),this.focusTrap?.focusInitialElementWhenReady()}static \u0275fac=function(t){return new(t||n)};static \u0275dir=A({type:n,selectors:[["","cdkTrapFocus",""]],inputs:{enabled:[2,"cdkTrapFocus","enabled",Z],autoCapture:[2,"cdkTrapFocusAutoCapture","autoCapture",Z]},exportAs:["cdkTrapFocus"],features:[Ue]})}return n})(),Zg=new S("liveAnnouncerElement",{providedIn:"root",factory:()=>null}),Kg=new S("LIVE_ANNOUNCER_DEFAULT_OPTIONS"),tD=0,Cs=(()=>{class n{_ngZone=l(de);_defaultOptions=l(Kg,{optional:!0});_liveElement;_document=l(X);_sanitizer=l($o);_previousTimeout;_currentPromise;_currentResolve;constructor(){let e=l(Zg,{optional:!0});this._liveElement=e||this._createLiveElement()}announce(e,...t){let r=this._defaultOptions,a,o;return t.length===1&&typeof t[0]=="number"?o=t[0]:[a,o]=t,this.clear(),clearTimeout(this._previousTimeout),a||(a=r&&r.politeness?r.politeness:"polite"),o==null&&r&&(o=r.duration),this._liveElement.setAttribute("aria-live",a),this._liveElement.id&&this._exposeAnnouncerToModals(this._liveElement.id),this._ngZone.runOutsideAngular(()=>(this._currentPromise||(this._currentPromise=new Promise(s=>this._currentResolve=s)),clearTimeout(this._previousTimeout),this._previousTimeout=setTimeout(()=>{!e||typeof e=="string"?this._liveElement.textContent=e:Ug(this._liveElement,e,this._sanitizer),typeof o=="number"&&(this._previousTimeout=setTimeout(()=>this.clear(),o)),this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0},100),this._currentPromise))}clear(){this._liveElement&&(this._liveElement.textContent="")}ngOnDestroy(){clearTimeout(this._previousTimeout),this._liveElement?.remove(),this._liveElement=null,this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0}_createLiveElement(){let e="cdk-live-announcer-element",t=this._document.getElementsByClassName(e),r=this._document.createElement("div");for(let a=0;a<t.length;a++)t[a].remove();return r.classList.add(e),r.classList.add("cdk-visually-hidden"),r.setAttribute("aria-atomic","true"),r.setAttribute("aria-live","polite"),r.id=`cdk-live-announcer-${tD++}`,this._document.body.appendChild(r),r}_exposeAnnouncerToModals(e){let t=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let r=0;r<t.length;r++){let a=t[r],o=a.getAttribute("aria-owns");o?o.indexOf(e)===-1&&a.setAttribute("aria-owns",o+" "+e):a.setAttribute("aria-owns",e)}}static \u0275fac=function(t){return new(t||n)};static \u0275prov=w({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var hr=(function(n){return n[n.NONE=0]="NONE",n[n.BLACK_ON_WHITE=1]="BLACK_ON_WHITE",n[n.WHITE_ON_BLACK=2]="WHITE_ON_BLACK",n})(hr||{}),Wg="cdk-high-contrast-black-on-white",Yg="cdk-high-contrast-white-on-black",lm="cdk-high-contrast-active",Xg=(()=>{class n{_platform=l(xe);_hasCheckedHighContrastMode=!1;_document=l(X);_breakpointSubscription;constructor(){this._breakpointSubscription=l(ys).observe("(forced-colors: active)").subscribe(()=>{this._hasCheckedHighContrastMode&&(this._hasCheckedHighContrastMode=!1,this._applyBodyHighContrastModeCssClasses())})}getHighContrastMode(){if(!this._platform.isBrowser)return hr.NONE;let e=this._document.createElement("div");e.style.backgroundColor="rgb(1,2,3)",e.style.position="absolute",this._document.body.appendChild(e);let t=this._document.defaultView||window,r=t&&t.getComputedStyle?t.getComputedStyle(e):null,a=(r&&r.backgroundColor||"").replace(/ /g,"");switch(e.remove(),a){case"rgb(0,0,0)":case"rgb(45,50,54)":case"rgb(32,32,32)":return hr.WHITE_ON_BLACK;case"rgb(255,255,255)":case"rgb(255,250,239)":return hr.BLACK_ON_WHITE}return hr.NONE}ngOnDestroy(){this._breakpointSubscription.unsubscribe()}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){let e=this._document.body.classList;e.remove(lm,Wg,Yg),this._hasCheckedHighContrastMode=!0;let t=this.getHighContrastMode();t===hr.BLACK_ON_WHITE?e.add(lm,Wg):t===hr.WHITE_ON_BLACK&&e.add(lm,Yg)}}static \u0275fac=function(t){return new(t||n)};static \u0275prov=w({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Ds=(()=>{class n{constructor(){l(Xg)._applyBodyHighContrastModeCssClasses()}static \u0275fac=function(t){return new(t||n)};static \u0275mod=q({type:n});static \u0275inj=Y({imports:[pc]})}return n})();var nD=200,_c=class{_letterKeyStream=new P;_items=[];_selectedItemIndex=-1;_pressedLetters=[];_skipPredicateFn;_selectedItem=new P;selectedItem=this._selectedItem;constructor(i,e){let t=typeof e?.debounceInterval=="number"?e.debounceInterval:nD;e?.skipPredicate&&(this._skipPredicateFn=e.skipPredicate),this.setItems(i),this._setupKeyHandler(t)}destroy(){this._pressedLetters=[],this._letterKeyStream.complete(),this._selectedItem.complete()}setCurrentSelectedItemIndex(i){this._selectedItemIndex=i}setItems(i){this._items=i}handleKey(i){let e=i.keyCode;i.key&&i.key.length===1?this._letterKeyStream.next(i.key.toLocaleUpperCase()):(e>=65&&e<=90||e>=48&&e<=57)&&this._letterKeyStream.next(String.fromCharCode(e))}isTyping(){return this._pressedLetters.length>0}reset(){this._pressedLetters=[]}_setupKeyHandler(i){this._letterKeyStream.pipe(wt(e=>this._pressedLetters.push(e)),qs(i),Ye(()=>this._pressedLetters.length>0),Oe(()=>this._pressedLetters.join("").toLocaleUpperCase())).subscribe(e=>{for(let t=1;t<this._items.length+1;t++){let r=(this._selectedItemIndex+t)%this._items.length,a=this._items[r];if(!this._skipPredicateFn?.(a)&&a.getLabel?.().toLocaleUpperCase().trim().indexOf(e)===0){this._selectedItem.next(a);break}}this._pressedLetters=[]})}};function ut(n,...i){return i.length?i.some(e=>n[e]):n.altKey||n.shiftKey||n.ctrlKey||n.metaKey}var vc=class{_items;_activeItemIndex=ne(-1);_activeItem=ne(null);_wrap=!1;_typeaheadSubscription=rt.EMPTY;_itemChangesSubscription;_vertical=!0;_horizontal=null;_allowedModifierKeys=[];_homeAndEnd=!1;_pageUpAndDown={enabled:!1,delta:10};_effectRef;_typeahead;_skipPredicateFn=i=>i.disabled;constructor(i,e){this._items=i,i instanceof Td?this._itemChangesSubscription=i.changes.subscribe(t=>this._itemsChanged(t.toArray())):er(i)&&(this._effectRef=Gr(()=>this._itemsChanged(i()),{injector:e}))}tabOut=new P;change=new P;skipPredicate(i){return this._skipPredicateFn=i,this}withWrap(i=!0){return this._wrap=i,this}withVerticalOrientation(i=!0){return this._vertical=i,this}withHorizontalOrientation(i){return this._horizontal=i,this}withAllowedModifierKeys(i){return this._allowedModifierKeys=i,this}withTypeAhead(i=200){this._typeaheadSubscription.unsubscribe();let e=this._getItemsArray();return this._typeahead=new _c(e,{debounceInterval:typeof i=="number"?i:void 0,skipPredicate:t=>this._skipPredicateFn(t)}),this._typeaheadSubscription=this._typeahead.selectedItem.subscribe(t=>{this.setActiveItem(t)}),this}cancelTypeahead(){return this._typeahead?.reset(),this}withHomeAndEnd(i=!0){return this._homeAndEnd=i,this}withPageUpDown(i=!0,e=10){return this._pageUpAndDown={enabled:i,delta:e},this}setActiveItem(i){let e=this._activeItem();this.updateActiveItem(i),this._activeItem()!==e&&this.change.next(this._activeItemIndex())}onKeydown(i){let e=i.keyCode,r=["altKey","ctrlKey","metaKey","shiftKey"].every(a=>!i[a]||this._allowedModifierKeys.indexOf(a)>-1);switch(e){case 9:this.tabOut.next();return;case 40:if(this._vertical&&r){this.setNextItemActive();break}else return;case 38:if(this._vertical&&r){this.setPreviousItemActive();break}else return;case 39:if(this._horizontal&&r){this._horizontal==="rtl"?this.setPreviousItemActive():this.setNextItemActive();break}else return;case 37:if(this._horizontal&&r){this._horizontal==="rtl"?this.setNextItemActive():this.setPreviousItemActive();break}else return;case 36:if(this._homeAndEnd&&r){this.setFirstItemActive();break}else return;case 35:if(this._homeAndEnd&&r){this.setLastItemActive();break}else return;case 33:if(this._pageUpAndDown.enabled&&r){let a=this._activeItemIndex()-this._pageUpAndDown.delta;this._setActiveItemByIndex(a>0?a:0,1);break}else return;case 34:if(this._pageUpAndDown.enabled&&r){let a=this._activeItemIndex()+this._pageUpAndDown.delta,o=this._getItemsArray().length;this._setActiveItemByIndex(a<o?a:o-1,-1);break}else return;default:(r||ut(i,"shiftKey"))&&this._typeahead?.handleKey(i);return}this._typeahead?.reset(),i.preventDefault()}get activeItemIndex(){return this._activeItemIndex()}get activeItem(){return this._activeItem()}isTyping(){return!!this._typeahead&&this._typeahead.isTyping()}setFirstItemActive(){this._setActiveItemByIndex(0,1)}setLastItemActive(){this._setActiveItemByIndex(this._getItemsArray().length-1,-1)}setNextItemActive(){this._activeItemIndex()<0?this.setFirstItemActive():this._setActiveItemByDelta(1)}setPreviousItemActive(){this._activeItemIndex()<0&&this._wrap?this.setLastItemActive():this._setActiveItemByDelta(-1)}updateActiveItem(i){let e=this._getItemsArray(),t=typeof i=="number"?i:e.indexOf(i),r=e[t];this._activeItem.set(r??null),this._activeItemIndex.set(t),this._typeahead?.setCurrentSelectedItemIndex(t)}destroy(){this._typeaheadSubscription.unsubscribe(),this._itemChangesSubscription?.unsubscribe(),this._effectRef?.destroy(),this._typeahead?.destroy(),this.tabOut.complete(),this.change.complete()}_setActiveItemByDelta(i){this._wrap?this._setActiveInWrapMode(i):this._setActiveInDefaultMode(i)}_setActiveInWrapMode(i){let e=this._getItemsArray();for(let t=1;t<=e.length;t++){let r=(this._activeItemIndex()+i*t+e.length)%e.length,a=e[r];if(!this._skipPredicateFn(a)){this.setActiveItem(r);return}}}_setActiveInDefaultMode(i){this._setActiveItemByIndex(this._activeItemIndex()+i,i)}_setActiveItemByIndex(i,e){let t=this._getItemsArray();if(t[i]){for(;this._skipPredicateFn(t[i]);)if(i+=e,!t[i])return;this.setActiveItem(i)}}_getItemsArray(){return er(this._items)?this._items():this._items instanceof Td?this._items.toArray():this._items}_itemsChanged(i){this._typeahead?.setItems(i);let e=this._activeItem();if(e){let t=i.indexOf(e);t>-1&&t!==this._activeItemIndex()&&(this._activeItemIndex.set(t),this._typeahead?.setCurrentSelectedItemIndex(t))}}};var xs=class extends vc{setActiveItem(i){this.activeItem&&this.activeItem.setInactiveStyles(),super.setActiveItem(i),this.activeItem&&this.activeItem.setActiveStyles()}};var mm={},et=class n{_appId=l(Wr);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(i,e=!1){return this._appId!=="ng"&&(i+=this._appId),mm.hasOwnProperty(i)||(mm[i]=0),`${i}${e?n._infix+"-":""}${mm[i]++}`}static \u0275fac=function(e){return new(e||n)};static \u0275prov=w({token:n,factory:n.\u0275fac,providedIn:"root"})};var e_=" ";function pm(n,i,e){let t=Dc(n,i);e=e.trim(),!t.some(r=>r.trim()===e)&&(t.push(e),n.setAttribute(i,t.join(e_)))}function wc(n,i,e){let t=Dc(n,i);e=e.trim();let r=t.filter(a=>a!==e);r.length?n.setAttribute(i,r.join(e_)):n.removeAttribute(i)}function Dc(n,i){return n.getAttribute(i)?.match(/\S+/g)??[]}var t_="cdk-describedby-message",Cc="cdk-describedby-host",fm=0,n_=(()=>{class n{_platform=l(xe);_document=l(X);_messageRegistry=new Map;_messagesContainer=null;_id=`${fm++}`;constructor(){l(dt).load(yi),this._id=l(Wr)+"-"+fm++}describe(e,t,r){if(!this._canBeDescribed(e,t))return;let a=hm(t,r);typeof t!="string"?(Jg(t,this._id),this._messageRegistry.set(a,{messageElement:t,referenceCount:0})):this._messageRegistry.has(a)||this._createMessageElement(t,r),this._isElementDescribedByMessage(e,a)||this._addMessageReference(e,a)}removeDescription(e,t,r){if(!t||!this._isElementNode(e))return;let a=hm(t,r);if(this._isElementDescribedByMessage(e,a)&&this._removeMessageReference(e,a),typeof t=="string"){let o=this._messageRegistry.get(a);o&&o.referenceCount===0&&this._deleteMessageElement(a)}this._messagesContainer?.childNodes.length===0&&(this._messagesContainer.remove(),this._messagesContainer=null)}ngOnDestroy(){let e=this._document.querySelectorAll(`[${Cc}="${this._id}"]`);for(let t=0;t<e.length;t++)this._removeCdkDescribedByReferenceIds(e[t]),e[t].removeAttribute(Cc);this._messagesContainer?.remove(),this._messagesContainer=null,this._messageRegistry.clear()}_createMessageElement(e,t){let r=this._document.createElement("div");Jg(r,this._id),r.textContent=e,t&&r.setAttribute("role",t),this._createMessagesContainer(),this._messagesContainer.appendChild(r),this._messageRegistry.set(hm(e,t),{messageElement:r,referenceCount:0})}_deleteMessageElement(e){this._messageRegistry.get(e)?.messageElement?.remove(),this._messageRegistry.delete(e)}_createMessagesContainer(){if(this._messagesContainer)return;let e="cdk-describedby-message-container",t=this._document.querySelectorAll(`.${e}[platform="server"]`);for(let a=0;a<t.length;a++)t[a].remove();let r=this._document.createElement("div");r.style.visibility="hidden",r.classList.add(e),r.classList.add("cdk-visually-hidden"),this._platform.isBrowser||r.setAttribute("platform","server"),this._document.body.appendChild(r),this._messagesContainer=r}_removeCdkDescribedByReferenceIds(e){let t=Dc(e,"aria-describedby").filter(r=>r.indexOf(t_)!=0);e.setAttribute("aria-describedby",t.join(" "))}_addMessageReference(e,t){let r=this._messageRegistry.get(t);pm(e,"aria-describedby",r.messageElement.id),e.setAttribute(Cc,this._id),r.referenceCount++}_removeMessageReference(e,t){let r=this._messageRegistry.get(t);r.referenceCount--,wc(e,"aria-describedby",r.messageElement.id),e.removeAttribute(Cc)}_isElementDescribedByMessage(e,t){let r=Dc(e,"aria-describedby"),a=this._messageRegistry.get(t),o=a&&a.messageElement.id;return!!o&&r.indexOf(o)!=-1}_canBeDescribed(e,t){if(!this._isElementNode(e))return!1;if(t&&typeof t=="object")return!0;let r=t==null?"":`${t}`.trim(),a=e.getAttribute("aria-label");return r?!a||a.trim()!==r:!1}_isElementNode(e){return e.nodeType===this._document.ELEMENT_NODE}static \u0275fac=function(t){return new(t||n)};static \u0275prov=w({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function hm(n,i){return typeof n=="string"?`${i||""}/${n}`:n}function Jg(n,i){n.id||(n.id=`${t_}-${i}-${fm++}`)}function _t(n){return n==null?"":typeof n=="string"?n:`${n}px`}function Ui(n){return n!=null&&`${n}`!="false"}function i_(n,i=/\s+/){let e=[];if(n!=null){let t=Array.isArray(n)?n:`${n}`.split(i);for(let r of t){let a=`${r}`.trim();a&&e.push(a)}}return e}var Zn=(function(n){return n[n.NORMAL=0]="NORMAL",n[n.NEGATED=1]="NEGATED",n[n.INVERTED=2]="INVERTED",n})(Zn||{}),Ec,ha;function xc(){if(ha==null){if(typeof document!="object"||!document||typeof Element!="function"||!Element)return ha=!1,ha;if(document.documentElement?.style&&"scrollBehavior"in document.documentElement.style)ha=!0;else{let n=Element.prototype.scrollTo;n?ha=!/\{\s*\[native code\]\s*\}/.test(n.toString()):ha=!1}}return ha}function ro(){if(typeof document!="object"||!document)return Zn.NORMAL;if(Ec==null){let n=document.createElement("div"),i=n.style;n.dir="rtl",i.width="1px",i.overflow="auto",i.visibility="hidden",i.pointerEvents="none",i.position="absolute";let e=document.createElement("div"),t=e.style;t.width="2px",t.height="1px",n.appendChild(e),document.body.appendChild(n),Ec=Zn.NORMAL,n.scrollLeft===0&&(n.scrollLeft=1,Ec=n.scrollLeft===0?Zn.NEGATED:Zn.INVERTED),n.remove()}return Ec}function gm(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}var ao,r_=["color","button","checkbox","date","datetime-local","email","file","hidden","image","month","number","password","radio","range","reset","search","submit","tel","text","time","url","week"];function _m(){if(ao)return ao;if(typeof document!="object"||!document)return ao=new Set(r_),ao;let n=document.createElement("input");return ao=new Set(r_.filter(i=>(n.setAttribute("type",i),n.type===i))),ao}var vm=class{_box;_destroyed=new P;_resizeSubject=new P;_resizeObserver;_elementObservables=new Map;constructor(i){this._box=i,typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(e=>this._resizeSubject.next(e)))}observe(i){return this._elementObservables.has(i)||this._elementObservables.set(i,new li(e=>{let t=this._resizeSubject.subscribe(e);return this._resizeObserver?.observe(i,{box:this._box}),()=>{this._resizeObserver?.unobserve(i),t.unsubscribe(),this._elementObservables.delete(i)}}).pipe(Ye(e=>e.some(t=>t.target===i)),Rd({bufferSize:1,refCount:!0}),Be(this._destroyed))),this._elementObservables.get(i)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}},a_=(()=>{class n{_cleanupErrorListener;_observers=new Map;_ngZone=l(de);constructor(){typeof ResizeObserver<"u"}ngOnDestroy(){for(let[,e]of this._observers)e.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(e,t){let r=t?.box||"content-box";return this._observers.has(r)||this._observers.set(r,new vm(r)),this._observers.get(r).observe(e)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=w({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var o_={XSmall:"(max-width: 599.98px)",Small:"(min-width: 600px) and (max-width: 959.98px)",Medium:"(min-width: 960px) and (max-width: 1279.98px)",Large:"(min-width: 1280px) and (max-width: 1919.98px)",XLarge:"(min-width: 1920px)",Handset:"(max-width: 599.98px) and (orientation: portrait), (max-width: 959.98px) and (orientation: landscape)",Tablet:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait), (min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",Web:"(min-width: 840px) and (orientation: portrait), (min-width: 1280px) and (orientation: landscape)",HandsetPortrait:"(max-width: 599.98px) and (orientation: portrait)",TabletPortrait:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait)",WebPortrait:"(min-width: 840px) and (orientation: portrait)",HandsetLandscape:"(max-width: 959.98px) and (orientation: landscape)",TabletLandscape:"(min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",WebLandscape:"(min-width: 1280px) and (orientation: landscape)"};var iD=new S("MATERIAL_ANIMATIONS"),s_=null;function bm(){return l(iD,{optional:!0})?.animationsDisabled||l(Ma,{optional:!0})==="NoopAnimations"?"di-disabled":(s_??=l(io).matchMedia("(prefers-reduced-motion)").matches,s_?"reduced-motion":"enabled")}function st(){return bm()!=="enabled"}var rD=["notch"],aD=["matFormFieldNotchedOutline",""],oD=["*"],l_=["iconPrefixContainer"],c_=["textPrefixContainer"],d_=["iconSuffixContainer"],u_=["textSuffixContainer"],sD=["textField"],lD=["*",[["mat-label"]],[["","matPrefix",""],["","matIconPrefix",""]],[["","matTextPrefix",""]],[["","matTextSuffix",""]],[["","matSuffix",""],["","matIconSuffix",""]],[["mat-error"],["","matError",""]],[["mat-hint",3,"align","end"]],[["mat-hint","align","end"]]],cD=["*","mat-label","[matPrefix], [matIconPrefix]","[matTextPrefix]","[matTextSuffix]","[matSuffix], [matIconSuffix]","mat-error, [matError]","mat-hint:not([align='end'])","mat-hint[align='end']"];function dD(n,i){n&1&&T(0,"span",21)}function uD(n,i){if(n&1&&(d(0,"label",20),ve(1,1),ke(2,dD,1,0,"span",21),u()),n&2){let e=D(2);_("floating",e._shouldLabelFloat())("monitorResize",e._hasOutline())("id",e._labelId),pe("for",e._control.disableAutomaticLabeling?null:e._control.id),p(2),Te(!e.hideRequiredMarker&&e._control.required?2:-1)}}function mD(n,i){if(n&1&&ke(0,uD,3,5,"label",20),n&2){let e=D();Te(e._hasFloatingLabel()?0:-1)}}function hD(n,i){n&1&&T(0,"div",7)}function fD(n,i){}function pD(n,i){if(n&1&&L(0,fD,0,0,"ng-template",13),n&2){D(2);let e=$n(1);_("ngTemplateOutlet",e)}}function gD(n,i){if(n&1&&(d(0,"div",9),ke(1,pD,1,1,null,13),u()),n&2){let e=D();_("matFormFieldNotchedOutlineOpen",e._shouldLabelFloat()),p(),Te(e._forceDisplayInfixLabel()?-1:1)}}function _D(n,i){n&1&&(d(0,"div",10,2),ve(2,2),u())}function vD(n,i){n&1&&(d(0,"div",11,3),ve(2,3),u())}function bD(n,i){}function yD(n,i){if(n&1&&L(0,bD,0,0,"ng-template",13),n&2){D();let e=$n(1);_("ngTemplateOutlet",e)}}function CD(n,i){n&1&&(d(0,"div",14,4),ve(2,4),u())}function DD(n,i){n&1&&(d(0,"div",15,5),ve(2,5),u())}function wD(n,i){n&1&&T(0,"div",16)}function ED(n,i){n&1&&(d(0,"div",18),ve(1,6),u())}function xD(n,i){if(n&1&&(d(0,"mat-hint",22),h(1),u()),n&2){let e=D(2);_("id",e._hintLabelId),p(),lt(e.hintLabel)}}function SD(n,i){if(n&1&&(d(0,"div",19),ke(1,xD,2,2,"mat-hint",22),ve(2,7),T(3,"div",23),ve(4,8),u()),n&2){let e=D();p(),Te(e.hintLabel?1:-1)}}var Vt=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=A({type:n,selectors:[["mat-label"]]})}return n})(),v_=new S("MatError"),dn=(()=>{class n{id=l(et).getId("mat-mdc-error-");constructor(){}static \u0275fac=function(t){return new(t||n)};static \u0275dir=A({type:n,selectors:[["mat-error"],["","matError",""]],hostAttrs:[1,"mat-mdc-form-field-error","mat-mdc-form-field-bottom-align"],hostVars:1,hostBindings:function(t,r){t&2&&xt("id",r.id)},inputs:{id:"id"},features:[je([{provide:v_,useExisting:n}])]})}return n})(),Ss=(()=>{class n{align="start";id=l(et).getId("mat-mdc-hint-");static \u0275fac=function(t){return new(t||n)};static \u0275dir=A({type:n,selectors:[["mat-hint"]],hostAttrs:[1,"mat-mdc-form-field-hint","mat-mdc-form-field-bottom-align"],hostVars:4,hostBindings:function(t,r){t&2&&(xt("id",r.id),pe("align",null),J("mat-mdc-form-field-hint-end",r.align==="end"))},inputs:{align:"align",id:"id"}})}return n})(),MD=new S("MatPrefix");var b_=new S("MatSuffix"),ym=(()=>{class n{set _isTextSelector(e){this._isText=!0}_isText=!1;static \u0275fac=function(t){return new(t||n)};static \u0275dir=A({type:n,selectors:[["","matSuffix",""],["","matIconSuffix",""],["","matTextSuffix",""]],inputs:{_isTextSelector:[0,"matTextSuffix","_isTextSelector"]},features:[je([{provide:b_,useExisting:n}])]})}return n})(),y_=new S("FloatingLabelParent"),m_=(()=>{class n{_elementRef=l(U);get floating(){return this._floating}set floating(e){this._floating=e,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(e){this._monitorResize=e,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=l(a_);_ngZone=l(de);_parent=l(y_);_resizeSubscription=new rt;constructor(){}ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return AD(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:"border-box"}).subscribe(()=>this._handleResize())})}static \u0275fac=function(t){return new(t||n)};static \u0275dir=A({type:n,selectors:[["label","matFormFieldFloatingLabel",""]],hostAttrs:[1,"mdc-floating-label","mat-mdc-floating-label"],hostVars:2,hostBindings:function(t,r){t&2&&J("mdc-floating-label--float-above",r.floating)},inputs:{floating:"floating",monitorResize:"monitorResize"}})}return n})();function AD(n){let i=n;if(i.offsetParent!==null)return i.scrollWidth;let e=i.cloneNode(!0);e.style.setProperty("position","absolute"),e.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(e);let t=e.scrollWidth;return e.remove(),t}var h_="mdc-line-ripple--active",Sc="mdc-line-ripple--deactivating",f_=(()=>{class n{_elementRef=l(U);_cleanupTransitionEnd;constructor(){let e=l(de),t=l(Je);e.runOutsideAngular(()=>{this._cleanupTransitionEnd=t.listen(this._elementRef.nativeElement,"transitionend",this._handleTransitionEnd)})}activate(){let e=this._elementRef.nativeElement.classList;e.remove(Sc),e.add(h_)}deactivate(){this._elementRef.nativeElement.classList.add(Sc)}_handleTransitionEnd=e=>{let t=this._elementRef.nativeElement.classList,r=t.contains(Sc);e.propertyName==="opacity"&&r&&t.remove(h_,Sc)};ngOnDestroy(){this._cleanupTransitionEnd()}static \u0275fac=function(t){return new(t||n)};static \u0275dir=A({type:n,selectors:[["div","matFormFieldLineRipple",""]],hostAttrs:[1,"mdc-line-ripple"]})}return n})(),p_=(()=>{class n{_elementRef=l(U);_ngZone=l(de);open=!1;_notch;ngAfterViewInit(){let e=this._elementRef.nativeElement,t=e.querySelector(".mdc-floating-label");t?(e.classList.add("mdc-notched-outline--upgraded"),typeof requestAnimationFrame=="function"&&(t.style.transitionDuration="0s",this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>t.style.transitionDuration="")}))):e.classList.add("mdc-notched-outline--no-label")}_setNotchWidth(e){let t=this._notch.nativeElement;!this.open||!e?t.style.width="":t.style.width=`calc(${e}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(e){this._notch.nativeElement.style.setProperty("--mat-form-field-notch-max-width",`calc(100% - ${e}px)`)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=N({type:n,selectors:[["div","matFormFieldNotchedOutline",""]],viewQuery:function(t,r){if(t&1&&ot(rD,5),t&2){let a;re(a=ae())&&(r._notch=a.first)}},hostAttrs:[1,"mdc-notched-outline"],hostVars:2,hostBindings:function(t,r){t&2&&J("mdc-notched-outline--notched",r.open)},inputs:{open:[0,"matFormFieldNotchedOutlineOpen","open"]},attrs:aD,ngContentSelectors:oD,decls:5,vars:0,consts:[["notch",""],[1,"mat-mdc-notch-piece","mdc-notched-outline__leading"],[1,"mat-mdc-notch-piece","mdc-notched-outline__notch"],[1,"mat-mdc-notch-piece","mdc-notched-outline__trailing"]],template:function(t,r){t&1&&(Qe(),pn(0,"div",1),bt(1,"div",2,0),ve(3),Et(),pn(4,"div",3))},encapsulation:2,changeDetection:0})}return n})(),oo=(()=>{class n{value=null;stateChanges;id;placeholder;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;static \u0275fac=function(t){return new(t||n)};static \u0275dir=A({type:n})}return n})();var fa=new S("MatFormField"),RD=new S("MAT_FORM_FIELD_DEFAULT_OPTIONS"),g_="fill",kD="auto",__="fixed",TD="translateY(-50%)",Ut=(()=>{class n{_elementRef=l(U);_changeDetectorRef=l(Ee);_platform=l(xe);_idGenerator=l(et);_ngZone=l(de);_defaults=l(RD,{optional:!0});_currentDirection;_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=Fo("iconPrefixContainer");_textPrefixContainerSignal=Fo("textPrefixContainer");_iconSuffixContainerSignal=Fo("iconSuffixContainer");_textSuffixContainerSignal=Fo("textSuffixContainer");_prefixSuffixContainers=rn(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(e=>e?.nativeElement).filter(e=>e!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=mf(Vt);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(e){this._hideRequiredMarker=Ui(e)}_hideRequiredMarker=!1;color="primary";get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||kD}set floatLabel(e){e!==this._floatLabel&&(this._floatLabel=e,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(e){let t=e||this._defaults?.appearance||g_;this._appearanceSignal.set(t)}_appearanceSignal=ne(g_);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||__}set subscriptSizing(e){this._subscriptSizing=e||this._defaults?.subscriptSizing||__}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(e){this._hintLabel=e,this._processHints()}_hintLabel="";_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId("mat-mdc-form-field-label-");_hintLabelId=this._idGenerator.getId("mat-mdc-hint-");_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(e){this._explicitFormFieldControl=e}_destroyed=new P;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=st();constructor(){let e=this._defaults,t=l(ht);e&&(e.appearance&&(this.appearance=e.appearance),this._hideRequiredMarker=!!e?.hideRequiredMarker,e.color&&(this.color=e.color)),Gr(()=>this._currentDirection=t.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-form-field-animations-enabled")},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=this._control.ngControl.control.validator),this._previousControl=this._control),this._control.ngControl&&this._control.ngControl.control&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=rn(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel="always")}_initializeControl(e){let t=this._control,r="mat-mdc-form-field-type-";e&&this._elementRef.nativeElement.classList.remove(r+e.controlType),t.controlType&&this._elementRef.nativeElement.classList.add(r+t.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=t.stateChanges.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=t.stateChanges.pipe(Rt([void 0,void 0]),Oe(()=>[t.errorState,t.userAriaDescribedBy]),Ad(),Ye(([[a,o],[s,c]])=>a!==s||o!==c)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),t.ngControl&&t.ngControl.valueChanges&&(this._valueChanges=t.ngControl.valueChanges.pipe(Be(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(e=>!e._isText),this._hasTextPrefix=!!this._prefixChildren.find(e=>e._isText),this._hasIconSuffix=!!this._suffixChildren.find(e=>!e._isText),this._hasTextSuffix=!!this._suffixChildren.find(e=>e._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),hn(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let e=this._control.focused;e&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!e&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle("mat-focused",e),this._textField?.nativeElement.classList.toggle("mdc-text-field--focused",e)}_syncOutlineLabelOffset(){ff({earlyRead:()=>{if(this._appearanceSignal()!=="outline")return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let e of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(e,{box:"border-box"})}return this._getOutlinedLabelOffset()},write:e=>this._writeOutlinedLabelStyles(e())})}_shouldAlwaysFloat(){return this.floatLabel==="always"}_hasOutline(){return this.appearance==="outline"}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=rn(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._control.shouldLabelFloat||this._shouldAlwaysFloat():!1}_shouldForward(e){let t=this._control?this._control.ngControl:null;return t&&t[e]}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._control.errorState?"error":"hint"}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let e=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy=="string"&&e.push(...this._control.userAriaDescribedBy.split(" ")),this._getSubscriptMessageType()==="hint"){let a=this._hintChildren?this._hintChildren.find(s=>s.align==="start"):null,o=this._hintChildren?this._hintChildren.find(s=>s.align==="end"):null;a?e.push(a.id):this._hintLabel&&e.push(this._hintLabelId),o&&e.push(o.id)}else this._errorChildren&&e.push(...this._errorChildren.map(a=>a.id));let t=this._control.describedByIds,r;if(t){let a=this._describedByIds||e;r=e.concat(t.filter(o=>o&&!a.includes(o)))}else r=e;this._control.setDescribedByIds(r),this._describedByIds=e}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return["",null];if(!this._isAttachedToDom())return null;let e=this._iconPrefixContainer?.nativeElement,t=this._textPrefixContainer?.nativeElement,r=this._iconSuffixContainer?.nativeElement,a=this._textSuffixContainer?.nativeElement,o=e?.getBoundingClientRect().width??0,s=t?.getBoundingClientRect().width??0,c=r?.getBoundingClientRect().width??0,m=a?.getBoundingClientRect().width??0,f=this._currentDirection==="rtl"?"-1":"1",g=`${o+s}px`,M=`calc(${f} * (${g} + var(--mat-mdc-form-field-label-offset-x, 0px)))`,W=`var(--mat-mdc-form-field-label-transform, ${TD} translateX(${M}))`,K=o+s+c+m;return[W,K]}_writeOutlinedLabelStyles(e){if(e!==null){let[t,r]=e;this._floatingLabel&&(this._floatingLabel.element.style.transform=t),r!==null&&this._notchedOutline?._setMaxWidth(r)}}_isAttachedToDom(){let e=this._elementRef.nativeElement;if(e.getRootNode){let t=e.getRootNode();return t&&t!==e}return document.documentElement.contains(e)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=N({type:n,selectors:[["mat-form-field"]],contentQueries:function(t,r,a){if(t&1&&(tf(a,r._labelChild,Vt,5),gn(a,oo,5)(a,MD,5)(a,b_,5)(a,v_,5)(a,Ss,5)),t&2){Nd();let o;re(o=ae())&&(r._formFieldControl=o.first),re(o=ae())&&(r._prefixChildren=o),re(o=ae())&&(r._suffixChildren=o),re(o=ae())&&(r._errorChildren=o),re(o=ae())&&(r._hintChildren=o)}},viewQuery:function(t,r){if(t&1&&(nf(r._iconPrefixContainerSignal,l_,5)(r._textPrefixContainerSignal,c_,5)(r._iconSuffixContainerSignal,d_,5)(r._textSuffixContainerSignal,u_,5),ot(sD,5)(l_,5)(c_,5)(d_,5)(u_,5)(m_,5)(p_,5)(f_,5)),t&2){Nd(4);let a;re(a=ae())&&(r._textField=a.first),re(a=ae())&&(r._iconPrefixContainer=a.first),re(a=ae())&&(r._textPrefixContainer=a.first),re(a=ae())&&(r._iconSuffixContainer=a.first),re(a=ae())&&(r._textSuffixContainer=a.first),re(a=ae())&&(r._floatingLabel=a.first),re(a=ae())&&(r._notchedOutline=a.first),re(a=ae())&&(r._lineRipple=a.first)}},hostAttrs:[1,"mat-mdc-form-field"],hostVars:38,hostBindings:function(t,r){t&2&&J("mat-mdc-form-field-label-always-float",r._shouldAlwaysFloat())("mat-mdc-form-field-has-icon-prefix",r._hasIconPrefix)("mat-mdc-form-field-has-icon-suffix",r._hasIconSuffix)("mat-form-field-invalid",r._control.errorState)("mat-form-field-disabled",r._control.disabled)("mat-form-field-autofilled",r._control.autofilled)("mat-form-field-appearance-fill",r.appearance=="fill")("mat-form-field-appearance-outline",r.appearance=="outline")("mat-form-field-hide-placeholder",r._hasFloatingLabel()&&!r._shouldLabelFloat())("mat-primary",r.color!=="accent"&&r.color!=="warn")("mat-accent",r.color==="accent")("mat-warn",r.color==="warn")("ng-untouched",r._shouldForward("untouched"))("ng-touched",r._shouldForward("touched"))("ng-pristine",r._shouldForward("pristine"))("ng-dirty",r._shouldForward("dirty"))("ng-valid",r._shouldForward("valid"))("ng-invalid",r._shouldForward("invalid"))("ng-pending",r._shouldForward("pending"))},inputs:{hideRequiredMarker:"hideRequiredMarker",color:"color",floatLabel:"floatLabel",appearance:"appearance",subscriptSizing:"subscriptSizing",hintLabel:"hintLabel"},exportAs:["matFormField"],features:[je([{provide:fa,useExisting:n},{provide:y_,useExisting:n}])],ngContentSelectors:cD,decls:18,vars:21,consts:[["labelTemplate",""],["textField",""],["iconPrefixContainer",""],["textPrefixContainer",""],["textSuffixContainer",""],["iconSuffixContainer",""],[1,"mat-mdc-text-field-wrapper","mdc-text-field",3,"click"],[1,"mat-mdc-form-field-focus-overlay"],[1,"mat-mdc-form-field-flex"],["matFormFieldNotchedOutline","",3,"matFormFieldNotchedOutlineOpen"],[1,"mat-mdc-form-field-icon-prefix"],[1,"mat-mdc-form-field-text-prefix"],[1,"mat-mdc-form-field-infix"],[3,"ngTemplateOutlet"],[1,"mat-mdc-form-field-text-suffix"],[1,"mat-mdc-form-field-icon-suffix"],["matFormFieldLineRipple",""],["aria-atomic","true","aria-live","polite",1,"mat-mdc-form-field-subscript-wrapper","mat-mdc-form-field-bottom-align"],[1,"mat-mdc-form-field-error-wrapper"],[1,"mat-mdc-form-field-hint-wrapper"],["matFormFieldFloatingLabel","",3,"floating","monitorResize","id"],["aria-hidden","true",1,"mat-mdc-form-field-required-marker","mdc-floating-label--required"],[3,"id"],[1,"mat-mdc-form-field-hint-spacer"]],template:function(t,r){if(t&1&&(Qe(lD),L(0,mD,1,1,"ng-template",null,0,rl),d(2,"div",6,1),R("click",function(o){return r._control.onContainerClick(o)}),ke(4,hD,1,0,"div",7),d(5,"div",8),ke(6,gD,2,2,"div",9),ke(7,_D,3,0,"div",10),ke(8,vD,3,0,"div",11),d(9,"div",12),ke(10,yD,1,1,null,13),ve(11),u(),ke(12,CD,3,0,"div",14),ke(13,DD,3,0,"div",15),u(),ke(14,wD,1,0,"div",16),u(),d(15,"div",17),ke(16,ED,2,0,"div",18)(17,SD,5,1,"div",19),u()),t&2){let a;p(2),J("mdc-text-field--filled",!r._hasOutline())("mdc-text-field--outlined",r._hasOutline())("mdc-text-field--no-label",!r._hasFloatingLabel())("mdc-text-field--disabled",r._control.disabled)("mdc-text-field--invalid",r._control.errorState),p(2),Te(!r._hasOutline()&&!r._control.disabled?4:-1),p(2),Te(r._hasOutline()?6:-1),p(),Te(r._hasIconPrefix?7:-1),p(),Te(r._hasTextPrefix?8:-1),p(2),Te(!r._hasOutline()||r._forceDisplayInfixLabel()?10:-1),p(2),Te(r._hasTextSuffix?12:-1),p(),Te(r._hasIconSuffix?13:-1),p(),Te(r._hasOutline()?-1:14),p(),J("mat-mdc-form-field-subscript-dynamic-size",r.subscriptSizing==="dynamic");let o=r._getSubscriptMessageType();p(),Te((a=o)==="error"?16:a==="hint"?17:-1)}},dependencies:[m_,p_,No,f_,Ss],styles:[`.mdc-text-field {
  display: inline-flex;
  align-items: baseline;
  padding: 0 16px;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  will-change: opacity, transform, color;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.mdc-text-field__input {
  width: 100%;
  min-width: 0;
  border: none;
  border-radius: 0;
  background: none;
  padding: 0;
  -moz-appearance: none;
  -webkit-appearance: none;
  height: 28px;
}
.mdc-text-field__input::-webkit-calendar-picker-indicator, .mdc-text-field__input::-webkit-search-cancel-button {
  display: none;
}
.mdc-text-field__input::-ms-clear {
  display: none;
}
.mdc-text-field__input:focus {
  outline: none;
}
.mdc-text-field__input:invalid {
  box-shadow: none;
}
.mdc-text-field__input::placeholder {
  opacity: 0;
}
.mdc-text-field__input::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field__input::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field__input:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mdc-text-field--focused .mdc-text-field__input::placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  opacity: 1;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--outlined .mdc-text-field__input, .mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input {
  height: 100%;
}
.mdc-text-field--outlined .mdc-text-field__input {
  display: flex;
  border: none !important;
  background-color: transparent;
}
.mdc-text-field--disabled .mdc-text-field__input {
  pointer-events: auto;
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--mat-form-field-filled-input-text-color, var(--mat-sys-on-surface));
  caret-color: var(--mat-form-field-filled-caret-color, var(--mat-sys-primary));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--mat-form-field-outlined-input-text-color, var(--mat-sys-on-surface));
  caret-color: var(--mat-form-field-outlined-caret-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--mat-form-field-filled-error-caret-color, var(--mat-sys-error));
}
.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--mat-form-field-outlined-error-caret-color, var(--mat-sys-error));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--mat-form-field-filled-disabled-input-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--mat-form-field-outlined-disabled-input-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-text-field__input {
    background-color: Window;
  }
}

.mdc-text-field--filled {
  height: 56px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  border-top-left-radius: var(--mat-form-field-filled-container-shape, var(--mat-sys-corner-extra-small));
  border-top-right-radius: var(--mat-form-field-filled-container-shape, var(--mat-sys-corner-extra-small));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) {
  background-color: var(--mat-form-field-filled-container-color, var(--mat-sys-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled {
  background-color: var(--mat-form-field-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 4%, transparent));
}

.mdc-text-field--outlined {
  height: 56px;
  overflow: visible;
  padding-right: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
  padding-left: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)) + 4px);
}
[dir=rtl] .mdc-text-field--outlined {
  padding-right: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)) + 4px);
  padding-left: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
}

.mdc-floating-label {
  position: absolute;
  left: 0;
  transform-origin: left top;
  line-height: 1.15rem;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: text;
  overflow: hidden;
  will-change: transform;
}
[dir=rtl] .mdc-floating-label {
  right: 0;
  left: auto;
  transform-origin: right top;
  text-align: right;
}
.mdc-text-field .mdc-floating-label {
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}
.mdc-notched-outline .mdc-floating-label {
  display: inline-block;
  position: relative;
  max-width: 100%;
}
.mdc-text-field--outlined .mdc-floating-label {
  left: 4px;
  right: auto;
}
[dir=rtl] .mdc-text-field--outlined .mdc-floating-label {
  left: auto;
  right: 4px;
}
.mdc-text-field--filled .mdc-floating-label {
  left: 16px;
  right: auto;
}
[dir=rtl] .mdc-text-field--filled .mdc-floating-label {
  left: auto;
  right: 16px;
}
.mdc-text-field--disabled .mdc-floating-label {
  cursor: default;
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-floating-label {
    z-index: 1;
  }
}
.mdc-text-field--filled.mdc-text-field--no-label .mdc-floating-label {
  display: none;
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--mat-form-field-filled-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-filled-focus-label-text-color, var(--mat-sys-primary));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--mat-form-field-filled-hover-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-floating-label {
  color: var(--mat-form-field-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--mat-form-field-filled-error-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-filled-error-focus-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--mat-form-field-filled-error-hover-label-text-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--filled .mdc-floating-label {
  font-family: var(--mat-form-field-filled-label-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-form-field-filled-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-form-field-filled-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-form-field-filled-label-text-tracking, var(--mat-sys-body-large-tracking));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--mat-form-field-outlined-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-outlined-focus-label-text-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--mat-form-field-outlined-hover-label-text-color, var(--mat-sys-on-surface));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-floating-label {
  color: var(--mat-form-field-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-focus-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-hover-label-text-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--outlined .mdc-floating-label {
  font-family: var(--mat-form-field-outlined-label-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-form-field-outlined-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-form-field-outlined-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-form-field-outlined-label-text-tracking, var(--mat-sys-body-large-tracking));
}

.mdc-floating-label--float-above {
  cursor: auto;
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--filled .mdc-floating-label--float-above {
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--outlined .mdc-floating-label--float-above {
  transform: translateY(-37.25px) scale(1);
  font-size: 0.75rem;
}
.mdc-notched-outline .mdc-floating-label--float-above {
  text-overflow: clip;
}
.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: 133.3333333333%;
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  transform: translateY(-34.75px) scale(0.75);
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: 1rem;
}

.mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 1px;
  margin-right: 0;
  content: "*";
}
[dir=rtl] .mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 0;
  margin-right: 1px;
}

.mdc-notched-outline {
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  height: 100%;
  text-align: left;
  pointer-events: none;
}
[dir=rtl] .mdc-notched-outline {
  text-align: right;
}
.mdc-text-field--outlined .mdc-notched-outline {
  z-index: 1;
}

.mat-mdc-notch-piece {
  box-sizing: border-box;
  height: 100%;
  pointer-events: none;
  border: none;
  border-top: 1px solid;
  border-bottom: 1px solid;
}
.mdc-text-field--focused .mat-mdc-notch-piece {
  border-width: 2px;
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-outline-color, var(--mat-sys-outline));
  border-width: var(--mat-form-field-outlined-outline-width, 1px);
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-hover-outline-color, var(--mat-sys-on-surface));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-focus-outline-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-outline-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-notched-outline .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-hover-outline-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-focus-outline-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline .mat-mdc-notch-piece {
  border-width: var(--mat-form-field-outlined-focus-outline-width, 2px);
}

.mdc-notched-outline__leading {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading {
  width: max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
}
[dir=rtl] .mdc-notched-outline__leading {
  border-left: none;
  border-right: 1px solid;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  border-top-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}

.mdc-notched-outline__trailing {
  flex-grow: 1;
  border-left: none;
  border-right: 1px solid;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}
[dir=rtl] .mdc-notched-outline__trailing {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}

.mdc-notched-outline__notch {
  flex: 0 0 auto;
  width: auto;
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch {
  max-width: min(var(--mat-form-field-notch-max-width, 100%), calc(100% - max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  max-width: min(100%, calc(100% - max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 1px;
}
.mdc-text-field--focused.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 2px;
}
.mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 0;
  padding-right: 8px;
  border-top: none;
}
[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 8px;
  padding-right: 0;
}
.mdc-notched-outline--no-label .mdc-notched-outline__notch {
  display: none;
}

.mdc-line-ripple::before, .mdc-line-ripple::after {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  border-bottom-style: solid;
  content: "";
}
.mdc-line-ripple::before {
  z-index: 1;
  border-bottom-width: var(--mat-form-field-filled-active-indicator-height, 1px);
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-active-indicator-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-hover-active-indicator-color, var(--mat-sys-on-surface));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-disabled-active-indicator-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-error-active-indicator-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-error-hover-active-indicator-color, var(--mat-sys-on-error-container));
}
.mdc-line-ripple::after {
  transform: scaleX(0);
  opacity: 0;
  z-index: 2;
}
.mdc-text-field--filled .mdc-line-ripple::after {
  border-bottom-width: var(--mat-form-field-filled-focus-active-indicator-height, 2px);
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--mat-form-field-filled-focus-active-indicator-color, var(--mat-sys-primary));
}
.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--mat-form-field-filled-error-focus-active-indicator-color, var(--mat-sys-error));
}

.mdc-line-ripple--active::after {
  transform: scaleX(1);
  opacity: 1;
}

.mdc-line-ripple--deactivating::after {
  opacity: 0;
}

.mdc-text-field--disabled {
  pointer-events: none;
}

.mat-mdc-form-field-textarea-control {
  vertical-align: middle;
  resize: vertical;
  box-sizing: border-box;
  height: auto;
  margin: 0;
  padding: 0;
  border: none;
  overflow: auto;
}

.mat-mdc-form-field-input-control.mat-mdc-form-field-input-control {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font: inherit;
  letter-spacing: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  border: none;
}

.mat-mdc-form-field .mat-mdc-floating-label.mdc-floating-label {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  line-height: normal;
  pointer-events: all;
  will-change: auto;
}

.mat-mdc-form-field:not(.mat-form-field-disabled) .mat-mdc-floating-label.mdc-floating-label {
  cursor: inherit;
}

.mdc-text-field--no-label:not(.mdc-text-field--textarea) .mat-mdc-form-field-input-control.mdc-text-field__input,
.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control {
  height: auto;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control.mdc-text-field__input[type=color] {
  height: 23px;
}

.mat-mdc-text-field-wrapper {
  height: auto;
  flex: auto;
  will-change: auto;
}

.mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-left: 0;
  --mat-mdc-form-field-label-offset-x: -16px;
}

.mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

[dir=rtl] .mat-mdc-text-field-wrapper {
  padding-left: 16px;
  padding-right: 16px;
}
[dir=rtl] .mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-left: 0;
}
[dir=rtl] .mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

.mat-form-field-disabled .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-label-always-float .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
  opacity: 1;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-infix .mat-mdc-floating-label {
  left: auto;
  right: auto;
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-text-field__input {
  display: inline-block;
}

.mat-mdc-form-field .mat-mdc-text-field-wrapper.mdc-text-field .mdc-notched-outline__notch {
  padding-top: 0;
}

.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: 1px solid transparent;
}

[dir=rtl] .mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: none;
  border-right: 1px solid transparent;
}

.mat-mdc-form-field-infix {
  min-height: var(--mat-form-field-container-height, 56px);
  padding-top: var(--mat-form-field-filled-with-label-container-padding-top, 24px);
  padding-bottom: var(--mat-form-field-filled-with-label-container-padding-bottom, 8px);
}
.mdc-text-field--outlined .mat-mdc-form-field-infix, .mdc-text-field--no-label .mat-mdc-form-field-infix {
  padding-top: var(--mat-form-field-container-vertical-padding, 16px);
  padding-bottom: var(--mat-form-field-container-vertical-padding, 16px);
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-flex .mat-mdc-floating-label {
  top: calc(var(--mat-form-field-container-height, 56px) / 2);
}

.mdc-text-field--filled .mat-mdc-floating-label {
  display: var(--mat-form-field-filled-label-display, block);
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  --mat-mdc-form-field-label-transform: translateY(calc(calc(6.75px + var(--mat-form-field-container-height, 56px) / 2) * -1))
    scale(var(--mat-mdc-form-field-floating-label-scale, 0.75));
  transform: var(--mat-mdc-form-field-label-transform);
}

@keyframes _mat-form-field-subscript-animation {
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.mat-mdc-form-field-subscript-wrapper {
  box-sizing: border-box;
  width: 100%;
  position: relative;
}

.mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-error-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 16px;
  opacity: 1;
  transform: translateY(0);
  animation: _mat-form-field-subscript-animation 0ms cubic-bezier(0.55, 0, 0.55, 0.2);
}

.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-error-wrapper {
  position: static;
}

.mat-mdc-form-field-bottom-align::before {
  content: "";
  display: inline-block;
  height: 16px;
}

.mat-mdc-form-field-bottom-align.mat-mdc-form-field-subscript-dynamic-size::before {
  content: unset;
}

.mat-mdc-form-field-hint-end {
  order: 1;
}

.mat-mdc-form-field-hint-wrapper {
  display: flex;
}

.mat-mdc-form-field-hint-spacer {
  flex: 1 0 1em;
}

.mat-mdc-form-field-error {
  display: block;
  color: var(--mat-form-field-error-text-color, var(--mat-sys-error));
}

.mat-mdc-form-field-subscript-wrapper,
.mat-mdc-form-field-bottom-align::before {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--mat-form-field-subscript-text-font, var(--mat-sys-body-small-font));
  line-height: var(--mat-form-field-subscript-text-line-height, var(--mat-sys-body-small-line-height));
  font-size: var(--mat-form-field-subscript-text-size, var(--mat-sys-body-small-size));
  letter-spacing: var(--mat-form-field-subscript-text-tracking, var(--mat-sys-body-small-tracking));
  font-weight: var(--mat-form-field-subscript-text-weight, var(--mat-sys-body-small-weight));
}

.mat-mdc-form-field-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  opacity: 0;
  pointer-events: none;
  background-color: var(--mat-form-field-state-layer-color, var(--mat-sys-on-surface));
}
.mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-focus-overlay {
  opacity: var(--mat-form-field-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-form-field.mat-focused .mat-mdc-form-field-focus-overlay {
  opacity: var(--mat-form-field-focus-state-layer-opacity, 0);
}

select.mat-mdc-form-field-input-control {
  -moz-appearance: none;
  -webkit-appearance: none;
  background-color: transparent;
  display: inline-flex;
  box-sizing: border-box;
}
select.mat-mdc-form-field-input-control:not(:disabled) {
  cursor: pointer;
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option {
  color: var(--mat-form-field-select-option-text-color, var(--mat-sys-neutral10));
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option:disabled {
  color: var(--mat-form-field-select-disabled-option-text-color, color-mix(in srgb, var(--mat-sys-neutral10) 38%, transparent));
}

.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  content: "";
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid;
  position: absolute;
  right: 0;
  top: 50%;
  margin-top: -2.5px;
  pointer-events: none;
  color: var(--mat-form-field-enabled-select-arrow-color, var(--mat-sys-on-surface-variant));
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  right: auto;
  left: 0;
}
.mat-mdc-form-field-type-mat-native-select.mat-focused .mat-mdc-form-field-infix::after {
  color: var(--mat-form-field-focus-select-arrow-color, var(--mat-sys-primary));
}
.mat-mdc-form-field-type-mat-native-select.mat-form-field-disabled .mat-mdc-form-field-infix::after {
  color: var(--mat-form-field-disabled-select-arrow-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 15px;
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 0;
  padding-left: 15px;
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill .mat-mdc-text-field-wrapper {
    outline: solid 1px;
  }
}
@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-form-field-disabled .mat-mdc-text-field-wrapper {
    outline-color: GrayText;
  }
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-focused .mat-mdc-text-field-wrapper {
    outline: dashed 3px;
  }
}

@media (forced-colors: active) {
  .mat-mdc-form-field.mat-focused .mdc-notched-outline {
    border: dashed 3px;
  }
}

.mat-mdc-form-field-input-control[type=date], .mat-mdc-form-field-input-control[type=datetime], .mat-mdc-form-field-input-control[type=datetime-local], .mat-mdc-form-field-input-control[type=month], .mat-mdc-form-field-input-control[type=week], .mat-mdc-form-field-input-control[type=time] {
  line-height: 1;
}
.mat-mdc-form-field-input-control::-webkit-datetime-edit {
  line-height: 1;
  padding: 0;
  margin-bottom: -2px;
}

.mat-mdc-form-field {
  --mat-mdc-form-field-floating-label-scale: 0.75;
  display: inline-flex;
  flex-direction: column;
  min-width: 0;
  text-align: left;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--mat-form-field-container-text-font, var(--mat-sys-body-large-font));
  line-height: var(--mat-form-field-container-text-line-height, var(--mat-sys-body-large-line-height));
  font-size: var(--mat-form-field-container-text-size, var(--mat-sys-body-large-size));
  letter-spacing: var(--mat-form-field-container-text-tracking, var(--mat-sys-body-large-tracking));
  font-weight: var(--mat-form-field-container-text-weight, var(--mat-sys-body-large-weight));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-floating-label--float-above {
  font-size: calc(var(--mat-form-field-outlined-label-text-populated-size) * var(--mat-mdc-form-field-floating-label-scale));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: var(--mat-form-field-outlined-label-text-populated-size);
}
[dir=rtl] .mat-mdc-form-field {
  text-align: right;
}

.mat-mdc-form-field-flex {
  display: inline-flex;
  align-items: baseline;
  box-sizing: border-box;
  width: 100%;
}

.mat-mdc-text-field-wrapper {
  width: 100%;
  z-index: 0;
}

.mat-mdc-form-field-icon-prefix,
.mat-mdc-form-field-icon-suffix {
  align-self: center;
  line-height: 0;
  pointer-events: auto;
  position: relative;
  z-index: 1;
}
.mat-mdc-form-field-icon-prefix > .mat-icon,
.mat-mdc-form-field-icon-suffix > .mat-icon {
  padding: 0 12px;
  box-sizing: content-box;
}

.mat-mdc-form-field-icon-prefix {
  color: var(--mat-form-field-leading-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-prefix {
  color: var(--mat-form-field-disabled-leading-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-trailing-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-disabled-trailing-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-invalid .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-trailing-icon-color, var(--mat-sys-error));
}
.mat-form-field-invalid:not(.mat-focused):not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-hover-trailing-icon-color, var(--mat-sys-on-error-container));
}
.mat-form-field-invalid.mat-focused .mat-mdc-text-field-wrapper .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-focus-trailing-icon-color, var(--mat-sys-error));
}

.mat-mdc-form-field-icon-prefix,
[dir=rtl] .mat-mdc-form-field-icon-suffix {
  padding: 0 4px 0 0;
}

.mat-mdc-form-field-icon-suffix,
[dir=rtl] .mat-mdc-form-field-icon-prefix {
  padding: 0 0 0 4px;
}

.mat-mdc-form-field-subscript-wrapper .mat-icon,
.mat-mdc-form-field label .mat-icon {
  width: 1em;
  height: 1em;
  font-size: inherit;
}

.mat-mdc-form-field-infix {
  flex: auto;
  min-width: 0;
  width: 180px;
  position: relative;
  box-sizing: border-box;
}
.mat-mdc-form-field-infix:has(textarea[cols]) {
  width: auto;
}

.mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: -1px;
  -webkit-clip-path: inset(-9em -999em -9em 1px);
  clip-path: inset(-9em -999em -9em 1px);
}
[dir=rtl] .mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: 0;
  margin-right: -1px;
  -webkit-clip-path: inset(-9em 1px -9em -999em);
  clip-path: inset(-9em 1px -9em -999em);
}

.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-floating-label {
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1), color 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input {
  transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-moz-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-webkit-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input:-ms-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field--filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple::before {
  transition-duration: 75ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-line-ripple::after {
  transition: transform 180ms cubic-bezier(0.4, 0, 0.2, 1), opacity 180ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-error-wrapper {
  animation-duration: 300ms;
}

.mdc-notched-outline .mdc-floating-label {
  max-width: calc(100% + 1px);
}

.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: calc(133.3333333333% + 1px);
}
`],encapsulation:2,changeDetection:0})}return n})();var Mt=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=q({type:n});static \u0275inj=Y({imports:[pc,Ut,Ve]})}return n})();var ID=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=N({type:n,selectors:[["ng-component"]],hostAttrs:["cdk-text-field-style-loader",""],decls:0,vars:0,template:function(t,r){},styles:[`textarea.cdk-textarea-autosize {
  resize: none;
}

textarea.cdk-textarea-autosize-measuring {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: auto !important;
  overflow: hidden !important;
}

textarea.cdk-textarea-autosize-measuring-firefox {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: 0 !important;
}

@keyframes cdk-text-field-autofill-start { /*!*/ }
@keyframes cdk-text-field-autofill-end { /*!*/ }
.cdk-text-field-autofill-monitored:-webkit-autofill {
  animation: cdk-text-field-autofill-start 0s 1ms;
}

.cdk-text-field-autofill-monitored:not(:-webkit-autofill) {
  animation: cdk-text-field-autofill-end 0s 1ms;
}
`],encapsulation:2,changeDetection:0})}return n})(),FD={passive:!0},C_=(()=>{class n{_platform=l(xe);_ngZone=l(de);_renderer=l(Nt).createRenderer(null,null);_styleLoader=l(dt);_monitoredElements=new Map;constructor(){}monitor(e){if(!this._platform.isBrowser)return Zt;this._styleLoader.load(ID);let t=cn(e),r=this._monitoredElements.get(t);if(r)return r.subject;let a=new P,o="cdk-text-field-autofilled",s=m=>{m.animationName==="cdk-text-field-autofill-start"&&!t.classList.contains(o)?(t.classList.add(o),this._ngZone.run(()=>a.next({target:m.target,isAutofilled:!0}))):m.animationName==="cdk-text-field-autofill-end"&&t.classList.contains(o)&&(t.classList.remove(o),this._ngZone.run(()=>a.next({target:m.target,isAutofilled:!1})))},c=this._ngZone.runOutsideAngular(()=>(t.classList.add("cdk-text-field-autofill-monitored"),this._renderer.listen(t,"animationstart",s,FD)));return this._monitoredElements.set(t,{subject:a,unlisten:c}),a}stopMonitoring(e){let t=cn(e),r=this._monitoredElements.get(t);r&&(r.unlisten(),r.subject.complete(),t.classList.remove("cdk-text-field-autofill-monitored"),t.classList.remove("cdk-text-field-autofilled"),this._monitoredElements.delete(t))}ngOnDestroy(){this._monitoredElements.forEach((e,t)=>this.stopMonitoring(t))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=w({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var D_=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=q({type:n});static \u0275inj=Y({})}return n})();var Mc=new S("MAT_INPUT_VALUE_ACCESSOR");var Ac=(()=>{class n{isErrorState(e,t){return!!(e&&e.invalid&&(e.touched||t&&t.submitted))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=w({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var so=class{_defaultMatcher;ngControl;_parentFormGroup;_parentForm;_stateChanges;errorState=!1;matcher;constructor(i,e,t,r,a){this._defaultMatcher=i,this.ngControl=e,this._parentFormGroup=t,this._parentForm=r,this._stateChanges=a}updateErrorState(){let i=this.errorState,e=this._parentFormGroup||this._parentForm,t=this.matcher||this._defaultMatcher,r=this.ngControl?this.ngControl.control:null,a=t?.isErrorState(r,e)??!1;a!==i&&(this.errorState=a,this._stateChanges.next())}};var OD=["button","checkbox","file","hidden","image","radio","range","reset","submit"],PD=new S("MAT_INPUT_CONFIG"),Jt=(()=>{class n{_elementRef=l(U);_platform=l(xe);ngControl=l(Dn,{optional:!0,self:!0});_autofillMonitor=l(C_);_ngZone=l(de);_formField=l(fa,{optional:!0});_renderer=l(Je);_uid=l(et).getId("mat-input-");_previousNativeValue;_inputValueAccessor;_signalBasedValueAccessor;_previousPlaceholder=null;_errorStateTracker;_config=l(PD,{optional:!0});_cleanupIosKeyup;_cleanupWebkitWheel;_isServer=!1;_isNativeSelect=!1;_isTextarea=!1;_isInFormField=!1;focused=!1;stateChanges=new P;controlType="mat-input";autofilled=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=Ui(e),this.focused&&(this.focused=!1,this.stateChanges.next())}_disabled=!1;get id(){return this._id}set id(e){this._id=e||this._uid}_id;placeholder;name;get required(){return this._required??this.ngControl?.control?.hasValidator(Ie.required)??!1}set required(e){this._required=Ui(e)}_required;get type(){return this._type}set type(e){this._type=e||"text",this._validateType(),!this._isTextarea&&_m().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}_type="text";get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}userAriaDescribedBy;get value(){return this._signalBasedValueAccessor?this._signalBasedValueAccessor.value():this._inputValueAccessor.value}set value(e){e!==this.value&&(this._signalBasedValueAccessor?this._signalBasedValueAccessor.value.set(e):this._inputValueAccessor.value=e,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(e){this._readonly=Ui(e)}_readonly=!1;disabledInteractive;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}_neverEmptyInputTypes=["date","datetime","datetime-local","month","time","week"].filter(e=>_m().has(e));constructor(){let e=l(Ja,{optional:!0}),t=l(Ft,{optional:!0}),r=l(Ac),a=l(Mc,{optional:!0,self:!0}),o=this._elementRef.nativeElement,s=o.nodeName.toLowerCase();a?er(a.value)?this._signalBasedValueAccessor=a:this._inputValueAccessor=a:this._inputValueAccessor=o,this._previousNativeValue=this.value,this.id=this.id,this._platform.IOS&&this._ngZone.runOutsideAngular(()=>{this._cleanupIosKeyup=this._renderer.listen(o,"keyup",this._iOSKeyupListener)}),this._errorStateTracker=new so(r,this.ngControl,t,e,this.stateChanges),this._isServer=!this._platform.isBrowser,this._isNativeSelect=s==="select",this._isTextarea=s==="textarea",this._isInFormField=!!this._formField,this.disabledInteractive=this._config?.disabledInteractive||!1,this._isNativeSelect&&(this.controlType=o.multiple?"mat-native-select-multiple":"mat-native-select"),this._signalBasedValueAccessor&&Gr(()=>{this._signalBasedValueAccessor.value(),this.stateChanges.next()})}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(e=>{this.autofilled=e.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._cleanupIosKeyup?.(),this._cleanupWebkitWheel?.()}ngDoCheck(){this.ngControl&&(this.updateErrorState(),this.ngControl.disabled!==null&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(e){this._elementRef.nativeElement.focus(e)}updateErrorState(){this._errorStateTracker.updateErrorState()}_focusChanged(e){if(e!==this.focused){if(!this._isNativeSelect&&e&&this.disabled&&this.disabledInteractive){let t=this._elementRef.nativeElement;t.type==="number"?(t.type="text",t.setSelectionRange(0,0),t.type="number"):t.setSelectionRange(0,0)}this.focused=e,this.stateChanges.next()}}_onInput(){}_dirtyCheckNativeValue(){let e=this._elementRef.nativeElement.value;this._previousNativeValue!==e&&(this._previousNativeValue=e,this.stateChanges.next())}_dirtyCheckPlaceholder(){let e=this._getPlaceholder();if(e!==this._previousPlaceholder){let t=this._elementRef.nativeElement;this._previousPlaceholder=e,e?t.setAttribute("placeholder",e):t.removeAttribute("placeholder")}}_getPlaceholder(){return this.placeholder||null}_validateType(){OD.indexOf(this._type)>-1}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let e=this._elementRef.nativeElement.validity;return e&&e.badInput}get empty(){return!this._isNeverEmpty()&&!this._elementRef.nativeElement.value&&!this._isBadInput()&&!this.autofilled}get shouldLabelFloat(){if(this._isNativeSelect){let e=this._elementRef.nativeElement,t=e.options[0];return this.focused||e.multiple||!this.empty||!!(e.selectedIndex>-1&&t&&t.label)}else return this.focused&&!this.disabled||!this.empty}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let t=this._elementRef.nativeElement;e.length?t.setAttribute("aria-describedby",e.join(" ")):t.removeAttribute("aria-describedby")}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){let e=this._elementRef.nativeElement;return this._isNativeSelect&&(e.multiple||e.size>1)}_iOSKeyupListener=e=>{let t=e.target;!t.value&&t.selectionStart===0&&t.selectionEnd===0&&(t.setSelectionRange(1,1),t.setSelectionRange(0,0))};_getReadonlyAttribute(){return this._isNativeSelect?null:this.readonly||this.disabled&&this.disabledInteractive?"true":null}static \u0275fac=function(t){return new(t||n)};static \u0275dir=A({type:n,selectors:[["input","matInput",""],["textarea","matInput",""],["select","matNativeControl",""],["input","matNativeControl",""],["textarea","matNativeControl",""]],hostAttrs:[1,"mat-mdc-input-element"],hostVars:21,hostBindings:function(t,r){t&1&&R("focus",function(){return r._focusChanged(!0)})("blur",function(){return r._focusChanged(!1)})("input",function(){return r._onInput()}),t&2&&(xt("id",r.id)("disabled",r.disabled&&!r.disabledInteractive)("required",r.required),pe("name",r.name||null)("readonly",r._getReadonlyAttribute())("aria-disabled",r.disabled&&r.disabledInteractive?"true":null)("aria-invalid",r.empty&&r.required?null:r.errorState)("aria-required",r.required)("id",r.id),J("mat-input-server",r._isServer)("mat-mdc-form-field-textarea-control",r._isInFormField&&r._isTextarea)("mat-mdc-form-field-input-control",r._isInFormField)("mat-mdc-input-disabled-interactive",r.disabledInteractive)("mdc-text-field__input",r._isInFormField)("mat-mdc-native-select-inline",r._isInlineSelect()))},inputs:{disabled:"disabled",id:"id",placeholder:"placeholder",name:"name",required:"required",type:"type",errorStateMatcher:"errorStateMatcher",userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],value:"value",readonly:"readonly",disabledInteractive:[2,"disabledInteractive","disabledInteractive",Z]},exportAs:["matInput"],features:[je([{provide:oo,useExisting:n}]),Ue]})}return n})(),en=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=q({type:n});static \u0275inj=Y({imports:[Mt,Mt,D_,Ve]})}return n})();var In=(function(n){return n[n.FADING_IN=0]="FADING_IN",n[n.VISIBLE=1]="VISIBLE",n[n.FADING_OUT=2]="FADING_OUT",n[n.HIDDEN=3]="HIDDEN",n})(In||{}),Cm=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=In.HIDDEN;constructor(i,e,t,r=!1){this._renderer=i,this.element=e,this.config=t,this._animationForciblyDisabledThroughCss=r}fadeOut(){this._renderer.fadeOutRipple(this)}},w_=to({passive:!0,capture:!0}),Dm=class{_events=new Map;addHandler(i,e,t,r){let a=this._events.get(e);if(a){let o=a.get(t);o?o.add(r):a.set(t,new Set([r]))}else this._events.set(e,new Map([[t,new Set([r])]])),i.runOutsideAngular(()=>{document.addEventListener(e,this._delegateEventHandler,w_)})}removeHandler(i,e,t){let r=this._events.get(i);if(!r)return;let a=r.get(e);a&&(a.delete(t),a.size===0&&r.delete(e),r.size===0&&(this._events.delete(i),document.removeEventListener(i,this._delegateEventHandler,w_)))}_delegateEventHandler=i=>{let e=Lt(i);e&&this._events.get(i.type)?.forEach((t,r)=>{(r===e||r.contains(e))&&t.forEach(a=>a.handleEvent(i))})}},Ms={enterDuration:225,exitDuration:150},ND=800,E_=to({passive:!0,capture:!0}),x_=["mousedown","touchstart"],S_=["mouseup","mouseleave","touchend","touchcancel"],LD=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=N({type:n,selectors:[["ng-component"]],hostAttrs:["mat-ripple-style-loader",""],decls:0,vars:0,template:function(t,r){},styles:[`.mat-ripple {
  overflow: hidden;
  position: relative;
}
.mat-ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-ripple.mat-ripple-unbounded {
  overflow: visible;
}

.mat-ripple-element {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: scale3d(0, 0, 0);
  background-color: var(--mat-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface) 10%, transparent));
}
@media (forced-colors: active) {
  .mat-ripple-element {
    display: none;
  }
}
.cdk-drag-preview .mat-ripple-element, .cdk-drag-placeholder .mat-ripple-element {
  display: none;
}
`],encapsulation:2,changeDetection:0})}return n})(),As=class n{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new Dm;constructor(i,e,t,r,a){this._target=i,this._ngZone=e,this._platform=r,r.isBrowser&&(this._containerElement=cn(t)),a&&a.get(dt).load(LD)}fadeInRipple(i,e,t={}){let r=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),a=x(x({},Ms),t.animation);t.centered&&(i=r.left+r.width/2,e=r.top+r.height/2);let o=t.radius||VD(i,e,r),s=i-r.left,c=e-r.top,m=a.enterDuration,f=document.createElement("div");f.classList.add("mat-ripple-element"),f.style.left=`${s-o}px`,f.style.top=`${c-o}px`,f.style.height=`${o*2}px`,f.style.width=`${o*2}px`,t.color!=null&&(f.style.backgroundColor=t.color),f.style.transitionDuration=`${m}ms`,this._containerElement.appendChild(f);let g=window.getComputedStyle(f),E=g.transitionProperty,M=g.transitionDuration,W=E==="none"||M==="0s"||M==="0s, 0s"||r.width===0&&r.height===0,K=new Cm(this,f,t,W);f.style.transform="scale3d(1, 1, 1)",K.state=In.FADING_IN,t.persistent||(this._mostRecentTransientRipple=K);let z=null;return!W&&(m||a.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let $=()=>{z&&(z.fallbackTimer=null),clearTimeout(F),this._finishRippleTransition(K)},O=()=>this._destroyRipple(K),F=setTimeout(O,m+100);f.addEventListener("transitionend",$),f.addEventListener("transitioncancel",O),z={onTransitionEnd:$,onTransitionCancel:O,fallbackTimer:F}}),this._activeRipples.set(K,z),(W||!m)&&this._finishRippleTransition(K),K}fadeOutRipple(i){if(i.state===In.FADING_OUT||i.state===In.HIDDEN)return;let e=i.element,t=x(x({},Ms),i.config.animation);e.style.transitionDuration=`${t.exitDuration}ms`,e.style.opacity="0",i.state=In.FADING_OUT,(i._animationForciblyDisabledThroughCss||!t.exitDuration)&&this._finishRippleTransition(i)}fadeOutAll(){this._getActiveRipples().forEach(i=>i.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(i=>{i.config.persistent||i.fadeOut()})}setupTriggerEvents(i){let e=cn(i);!this._platform.isBrowser||!e||e===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=e,x_.forEach(t=>{n._eventManager.addHandler(this._ngZone,t,e,this)}))}handleEvent(i){i.type==="mousedown"?this._onMousedown(i):i.type==="touchstart"?this._onTouchStart(i):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{S_.forEach(e=>{this._triggerElement.addEventListener(e,this,E_)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(i){i.state===In.FADING_IN?this._startFadeOutTransition(i):i.state===In.FADING_OUT&&this._destroyRipple(i)}_startFadeOutTransition(i){let e=i===this._mostRecentTransientRipple,{persistent:t}=i.config;i.state=In.VISIBLE,!t&&(!e||!this._isPointerDown)&&i.fadeOut()}_destroyRipple(i){let e=this._activeRipples.get(i)??null;this._activeRipples.delete(i),this._activeRipples.size||(this._containerRect=null),i===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),i.state=In.HIDDEN,e!==null&&(i.element.removeEventListener("transitionend",e.onTransitionEnd),i.element.removeEventListener("transitioncancel",e.onTransitionCancel),e.fallbackTimer!==null&&clearTimeout(e.fallbackTimer)),i.element.remove()}_onMousedown(i){let e=gs(i),t=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+ND;!this._target.rippleDisabled&&!e&&!t&&(this._isPointerDown=!0,this.fadeInRipple(i.clientX,i.clientY,this._target.rippleConfig))}_onTouchStart(i){if(!this._target.rippleDisabled&&!_s(i)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let e=i.changedTouches;if(e)for(let t=0;t<e.length;t++)this.fadeInRipple(e[t].clientX,e[t].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(i=>{let e=i.state===In.VISIBLE||i.config.terminateOnPointerUp&&i.state===In.FADING_IN;!i.config.persistent&&e&&i.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let i=this._triggerElement;i&&(x_.forEach(e=>n._eventManager.removeHandler(e,i,this)),this._pointerUpEventsRegistered&&(S_.forEach(e=>i.removeEventListener(e,this,E_)),this._pointerUpEventsRegistered=!1))}};function VD(n,i,e){let t=Math.max(Math.abs(n-e.left),Math.abs(n-e.right)),r=Math.max(Math.abs(i-e.top),Math.abs(i-e.bottom));return Math.sqrt(t*t+r*r)}var wm=new S("mat-ripple-global-options"),Rc=(()=>{class n{_elementRef=l(U);_animationsDisabled=st();color;unbounded=!1;centered=!1;radius=0;animation;get disabled(){return this._disabled}set disabled(e){e&&this.fadeOutAllNonPersistent(),this._disabled=e,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(e){this._trigger=e,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let e=l(de),t=l(xe),r=l(wm,{optional:!0}),a=l(ce);this._globalOptions=r||{},this._rippleRenderer=new As(this,e,this._elementRef,t,a)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:x(x(x({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(e,t=0,r){return typeof e=="number"?this._rippleRenderer.fadeInRipple(e,t,x(x({},this.rippleConfig),r)):this._rippleRenderer.fadeInRipple(0,0,x(x({},this.rippleConfig),e))}static \u0275fac=function(t){return new(t||n)};static \u0275dir=A({type:n,selectors:[["","mat-ripple",""],["","matRipple",""]],hostAttrs:[1,"mat-ripple"],hostVars:2,hostBindings:function(t,r){t&2&&J("mat-ripple-unbounded",r.unbounded)},inputs:{color:[0,"matRippleColor","color"],unbounded:[0,"matRippleUnbounded","unbounded"],centered:[0,"matRippleCentered","centered"],radius:[0,"matRippleRadius","radius"],animation:[0,"matRippleAnimation","animation"],disabled:[0,"matRippleDisabled","disabled"],trigger:[0,"matRippleTrigger","trigger"]},exportAs:["matRipple"]})}return n})();var BD={capture:!0},jD=["focus","mousedown","mouseenter","touchstart"],Em="mat-ripple-loader-uninitialized",xm="mat-ripple-loader-class-name",M_="mat-ripple-loader-centered",kc="mat-ripple-loader-disabled",A_=(()=>{class n{_document=l(X);_animationsDisabled=st();_globalRippleOptions=l(wm,{optional:!0});_platform=l(xe);_ngZone=l(de);_injector=l(ce);_eventCleanups;_hosts=new Map;constructor(){let e=l(Nt).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>jD.map(t=>e.listen(this._document,t,this._onInteraction,BD)))}ngOnDestroy(){let e=this._hosts.keys();for(let t of e)this.destroyRipple(t);this._eventCleanups.forEach(t=>t())}configureRipple(e,t){e.setAttribute(Em,this._globalRippleOptions?.namespace??""),(t.className||!e.hasAttribute(xm))&&e.setAttribute(xm,t.className||""),t.centered&&e.setAttribute(M_,""),t.disabled&&e.setAttribute(kc,"")}setDisabled(e,t){let r=this._hosts.get(e);r?(r.target.rippleDisabled=t,!t&&!r.hasSetUpEvents&&(r.hasSetUpEvents=!0,r.renderer.setupTriggerEvents(e))):t?e.setAttribute(kc,""):e.removeAttribute(kc)}_onInteraction=e=>{let t=Lt(e);if(t instanceof HTMLElement){let r=t.closest(`[${Em}="${this._globalRippleOptions?.namespace??""}"]`);r&&this._createRipple(r)}};_createRipple(e){if(!this._document||this._hosts.has(e))return;e.querySelector(".mat-ripple")?.remove();let t=this._document.createElement("span");t.classList.add("mat-ripple",e.getAttribute(xm)),e.append(t);let r=this._globalRippleOptions,a=this._animationsDisabled?0:r?.animation?.enterDuration??Ms.enterDuration,o=this._animationsDisabled?0:r?.animation?.exitDuration??Ms.exitDuration,s={rippleDisabled:this._animationsDisabled||r?.disabled||e.hasAttribute(kc),rippleConfig:{centered:e.hasAttribute(M_),terminateOnPointerUp:r?.terminateOnPointerUp,animation:{enterDuration:a,exitDuration:o}}},c=new As(s,this._ngZone,t,this._platform,this._injector),m=!s.rippleDisabled;m&&c.setupTriggerEvents(e),this._hosts.set(e,{target:s,renderer:c,hasSetUpEvents:m}),e.removeAttribute(Em)}destroyRipple(e){let t=this._hosts.get(e);t&&(t.renderer._removeTriggerEvents(),this._hosts.delete(e))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=w({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var fr=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=N({type:n,selectors:[["structural-styles"]],decls:0,vars:0,template:function(t,r){},styles:[`.mat-focus-indicator {
  position: relative;
}
.mat-focus-indicator::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  box-sizing: border-box;
  pointer-events: none;
  display: var(--mat-focus-indicator-display, none);
  border-width: var(--mat-focus-indicator-border-width, 3px);
  border-style: var(--mat-focus-indicator-border-style, solid);
  border-color: var(--mat-focus-indicator-border-color, transparent);
  border-radius: var(--mat-focus-indicator-border-radius, 4px);
}
.mat-focus-indicator:focus-visible::before {
  content: "";
}

@media (forced-colors: active) {
  html {
    --mat-focus-indicator-display: block;
  }
}
`],encapsulation:2,changeDetection:0})}return n})();var zD=["mat-icon-button",""],UD=["*"],HD=new S("MAT_BUTTON_CONFIG");function R_(n){return n==null?void 0:vn(n)}var Sm=(()=>{class n{_elementRef=l(U);_ngZone=l(de);_animationsDisabled=st();_config=l(HD,{optional:!0});_focusMonitor=l(bi);_cleanupClick;_renderer=l(Je);_rippleLoader=l(A_);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=e,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(e){this.tabIndex=e}constructor(){l(dt).load(fr);let e=this._elementRef.nativeElement;this._isAnchor=e.tagName==="A",this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(e,{className:"mat-mdc-button-ripple"})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(e="program",t){e?this._focusMonitor.focusVia(this._elementRef.nativeElement,e,t):this._elementRef.nativeElement.focus(t)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"click",e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}))}static \u0275fac=function(t){return new(t||n)};static \u0275dir=A({type:n,hostAttrs:[1,"mat-mdc-button-base"],hostVars:13,hostBindings:function(t,r){t&2&&(pe("disabled",r._getDisabledAttribute())("aria-disabled",r._getAriaDisabled())("tabindex",r._getTabIndex()),It(r.color?"mat-"+r.color:""),J("mat-mdc-button-disabled",r.disabled)("mat-mdc-button-disabled-interactive",r.disabledInteractive)("mat-unthemed",!r.color)("_mat-animation-noopable",r._animationsDisabled))},inputs:{color:"color",disableRipple:[2,"disableRipple","disableRipple",Z],disabled:[2,"disabled","disabled",Z],ariaDisabled:[2,"aria-disabled","ariaDisabled",Z],disabledInteractive:[2,"disabledInteractive","disabledInteractive",Z],tabIndex:[2,"tabIndex","tabIndex",R_],_tabindex:[2,"tabindex","_tabindex",R_]}})}return n})(),Fn=(()=>{class n extends Sm{constructor(){super(),this._rippleLoader.configureRipple(this._elementRef.nativeElement,{centered:!0})}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=N({type:n,selectors:[["button","mat-icon-button",""],["a","mat-icon-button",""],["button","matIconButton",""],["a","matIconButton",""]],hostAttrs:[1,"mdc-icon-button","mat-mdc-icon-button"],exportAs:["matButton","matAnchor"],features:[_e],attrs:zD,ngContentSelectors:UD,decls:4,vars:0,consts:[[1,"mat-mdc-button-persistent-ripple","mdc-icon-button__ripple"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(t,r){t&1&&(Qe(),pn(0,"span",0),ve(1),pn(2,"span",1)(3,"span",2))},styles:[`.mat-mdc-icon-button {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  border: none;
  outline: none;
  background-color: transparent;
  fill: currentColor;
  text-decoration: none;
  cursor: pointer;
  z-index: 0;
  overflow: visible;
  border-radius: var(--mat-icon-button-container-shape, var(--mat-sys-corner-full, 50%));
  flex-shrink: 0;
  text-align: center;
  width: var(--mat-icon-button-state-layer-size, 40px);
  height: var(--mat-icon-button-state-layer-size, 40px);
  padding: calc(calc(var(--mat-icon-button-state-layer-size, 40px) - var(--mat-icon-button-icon-size, 24px)) / 2);
  font-size: var(--mat-icon-button-icon-size, 24px);
  color: var(--mat-icon-button-icon-color, var(--mat-sys-on-surface-variant));
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-icon-button .mat-mdc-button-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-icon-button .mdc-button__label,
.mat-mdc-icon-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-icon-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-icon-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-ripple-element {
  background-color: var(--mat-icon-button-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface-variant) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-icon-button-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-icon-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-icon-button-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-icon-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-icon-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-icon-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-icon-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-icon-button-touch-target-size, 48px);
  display: var(--mat-icon-button-touch-target-display, block);
  left: 50%;
  width: var(--mat-icon-button-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-icon-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-icon-button[disabled], .mat-mdc-icon-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-icon-button-disabled-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-icon-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-icon-button img,
.mat-mdc-icon-button svg {
  width: var(--mat-icon-button-icon-size, 24px);
  height: var(--mat-icon-button-icon-size, 24px);
  vertical-align: baseline;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple {
  border-radius: var(--mat-icon-button-container-shape, var(--mat-sys-corner-full, 50%));
}
.mat-mdc-icon-button[hidden] {
  display: none;
}
.mat-mdc-icon-button.mat-unthemed:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-primary:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-accent:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-warn:not(.mdc-ripple-upgraded):focus::before {
  background: transparent;
  opacity: 1;
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2,changeDetection:0})}return n})();var Tc=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=q({type:n});static \u0275inj=Y({imports:[Ve]})}return n})();var $D=["matButton",""],GD=[[["",8,"material-icons",3,"iconPositionEnd",""],["mat-icon",3,"iconPositionEnd",""],["","matButtonIcon","",3,"iconPositionEnd",""]],"*",[["","iconPositionEnd","",8,"material-icons"],["mat-icon","iconPositionEnd",""],["","matButtonIcon","","iconPositionEnd",""]]],WD=[".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])","*",".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]"];var k_=new Map([["text",["mat-mdc-button"]],["filled",["mdc-button--unelevated","mat-mdc-unelevated-button"]],["elevated",["mdc-button--raised","mat-mdc-raised-button"]],["outlined",["mdc-button--outlined","mat-mdc-outlined-button"]],["tonal",["mat-tonal-button"]]]),mt=(()=>{class n extends Sm{get appearance(){return this._appearance}set appearance(e){this.setAppearance(e||this._config?.defaultAppearance||"text")}_appearance=null;constructor(){super();let e=YD(this._elementRef.nativeElement);e&&this.setAppearance(e)}setAppearance(e){if(e===this._appearance)return;let t=this._elementRef.nativeElement.classList,r=this._appearance?k_.get(this._appearance):null,a=k_.get(e);r&&t.remove(...r),t.add(...a),this._appearance=e}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=N({type:n,selectors:[["button","matButton",""],["a","matButton",""],["button","mat-button",""],["button","mat-raised-button",""],["button","mat-flat-button",""],["button","mat-stroked-button",""],["a","mat-button",""],["a","mat-raised-button",""],["a","mat-flat-button",""],["a","mat-stroked-button",""]],hostAttrs:[1,"mdc-button"],inputs:{appearance:[0,"matButton","appearance"]},exportAs:["matButton","matAnchor"],features:[_e],attrs:$D,ngContentSelectors:WD,decls:7,vars:4,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(t,r){t&1&&(Qe(GD),pn(0,"span",0),ve(1),bt(2,"span",1),ve(3,1),Et(),ve(4,2),pn(5,"span",2)(6,"span",3)),t&2&&J("mdc-button__ripple",!r._isFab)("mdc-fab__ripple",r._isFab)},styles:[`.mat-mdc-button-base {
  text-decoration: none;
}
.mat-mdc-button-base .mat-icon {
  min-height: fit-content;
  flex-shrink: 0;
}
@media (hover: none) {
  .mat-mdc-button-base:hover > span.mat-mdc-button-persistent-ripple::before {
    opacity: 0;
  }
}

.mdc-button {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-width: 64px;
  border: none;
  outline: none;
  line-height: inherit;
  -webkit-appearance: none;
  overflow: visible;
  vertical-align: middle;
  background: transparent;
  padding: 0 8px;
}
.mdc-button::-moz-focus-inner {
  padding: 0;
  border: 0;
}
.mdc-button:active {
  outline: none;
}
.mdc-button:hover {
  cursor: pointer;
}
.mdc-button:disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-button[hidden] {
  display: none;
}
.mdc-button .mdc-button__label {
  position: relative;
}

.mat-mdc-button {
  padding: 0 var(--mat-button-text-horizontal-padding, 12px);
  height: var(--mat-button-text-container-height, 40px);
  font-family: var(--mat-button-text-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-text-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-text-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-text-label-text-transform);
  font-weight: var(--mat-button-text-label-text-weight, var(--mat-sys-label-large-weight));
}
.mat-mdc-button, .mat-mdc-button .mdc-button__ripple {
  border-radius: var(--mat-button-text-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-button:not(:disabled) {
  color: var(--mat-button-text-label-text-color, var(--mat-sys-primary));
}
.mat-mdc-button[disabled], .mat-mdc-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-text-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-button:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding: 0 var(--mat-button-text-with-icon-horizontal-padding, 16px);
}
.mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
[dir=rtl] .mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
.mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
.mat-mdc-button .mat-ripple-element {
  background-color: var(--mat-button-text-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-text-touch-target-size, 48px);
  display: var(--mat-button-text-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-unelevated-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-filled-container-height, 40px);
  font-family: var(--mat-button-filled-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-filled-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-filled-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-filled-label-text-transform);
  font-weight: var(--mat-button-filled-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-filled-horizontal-padding, 24px);
}
.mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
.mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
.mat-mdc-unelevated-button .mat-ripple-element {
  background-color: var(--mat-button-filled-ripple-color, color-mix(in srgb, var(--mat-sys-on-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-state-layer-color, var(--mat-sys-on-primary));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-unelevated-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-unelevated-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-unelevated-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-unelevated-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-filled-touch-target-size, 48px);
  display: var(--mat-button-filled-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-unelevated-button:not(:disabled) {
  color: var(--mat-button-filled-label-text-color, var(--mat-sys-on-primary));
  background-color: var(--mat-button-filled-container-color, var(--mat-sys-primary));
}
.mat-mdc-unelevated-button, .mat-mdc-unelevated-button .mdc-button__ripple {
  border-radius: var(--mat-button-filled-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-unelevated-button[disabled], .mat-mdc-unelevated-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-raised-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: var(--mat-button-protected-container-elevation-shadow, var(--mat-sys-level1));
  height: var(--mat-button-protected-container-height, 40px);
  font-family: var(--mat-button-protected-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-protected-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-protected-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-protected-label-text-transform);
  font-weight: var(--mat-button-protected-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-protected-horizontal-padding, 24px);
}
.mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
.mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
.mat-mdc-raised-button .mat-ripple-element {
  background-color: var(--mat-button-protected-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-raised-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-raised-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-raised-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-raised-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-raised-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-protected-touch-target-size, 48px);
  display: var(--mat-button-protected-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-raised-button:not(:disabled) {
  color: var(--mat-button-protected-label-text-color, var(--mat-sys-primary));
  background-color: var(--mat-button-protected-container-color, var(--mat-sys-surface));
}
.mat-mdc-raised-button, .mat-mdc-raised-button .mdc-button__ripple {
  border-radius: var(--mat-button-protected-container-shape, var(--mat-sys-corner-full));
}
@media (hover: hover) {
  .mat-mdc-raised-button:hover {
    box-shadow: var(--mat-button-protected-hover-container-elevation-shadow, var(--mat-sys-level2));
  }
}
.mat-mdc-raised-button:focus {
  box-shadow: var(--mat-button-protected-focus-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button:active, .mat-mdc-raised-button:focus:active {
  box-shadow: var(--mat-button-protected-pressed-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button[disabled], .mat-mdc-raised-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-protected-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-protected-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-raised-button[disabled].mat-mdc-button-disabled, .mat-mdc-raised-button.mat-mdc-button-disabled.mat-mdc-button-disabled {
  box-shadow: var(--mat-button-protected-disabled-container-elevation-shadow, var(--mat-sys-level0));
}
.mat-mdc-raised-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-outlined-button {
  border-style: solid;
  transition: border 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-outlined-container-height, 40px);
  font-family: var(--mat-button-outlined-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-outlined-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-outlined-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-outlined-label-text-transform);
  font-weight: var(--mat-button-outlined-label-text-weight, var(--mat-sys-label-large-weight));
  border-radius: var(--mat-button-outlined-container-shape, var(--mat-sys-corner-full));
  border-width: var(--mat-button-outlined-outline-width, 1px);
  padding: 0 var(--mat-button-outlined-horizontal-padding, 24px);
}
.mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
.mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
.mat-mdc-outlined-button .mat-ripple-element {
  background-color: var(--mat-button-outlined-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-outlined-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-outlined-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-outlined-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-outlined-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-outlined-touch-target-size, 48px);
  display: var(--mat-button-outlined-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-outlined-button:not(:disabled) {
  color: var(--mat-button-outlined-label-text-color, var(--mat-sys-primary));
  border-color: var(--mat-button-outlined-outline-color, var(--mat-sys-outline));
}
.mat-mdc-outlined-button[disabled], .mat-mdc-outlined-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  border-color: var(--mat-button-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-tonal-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-tonal-container-height, 40px);
  font-family: var(--mat-button-tonal-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-tonal-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-tonal-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-tonal-label-text-transform);
  font-weight: var(--mat-button-tonal-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-tonal-horizontal-padding, 24px);
}
.mat-tonal-button:not(:disabled) {
  color: var(--mat-button-tonal-label-text-color, var(--mat-sys-on-secondary-container));
  background-color: var(--mat-button-tonal-container-color, var(--mat-sys-secondary-container));
}
.mat-tonal-button, .mat-tonal-button .mdc-button__ripple {
  border-radius: var(--mat-button-tonal-container-shape, var(--mat-sys-corner-full));
}
.mat-tonal-button[disabled], .mat-tonal-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-tonal-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-tonal-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-tonal-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
[dir=rtl] .mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
.mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
[dir=rtl] .mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
.mat-tonal-button .mat-ripple-element {
  background-color: var(--mat-button-tonal-ripple-color, color-mix(in srgb, var(--mat-sys-on-secondary-container) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-state-layer-color, var(--mat-sys-on-secondary-container));
}
.mat-tonal-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-tonal-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-tonal-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-tonal-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-tonal-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-tonal-touch-target-size, 48px);
  display: var(--mat-button-tonal-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-button,
.mat-mdc-unelevated-button,
.mat-mdc-raised-button,
.mat-mdc-outlined-button,
.mat-tonal-button {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-button .mdc-button__label,
.mat-mdc-button .mat-icon,
.mat-mdc-unelevated-button .mdc-button__label,
.mat-mdc-unelevated-button .mat-icon,
.mat-mdc-raised-button .mdc-button__label,
.mat-mdc-raised-button .mat-icon,
.mat-mdc-outlined-button .mdc-button__label,
.mat-mdc-outlined-button .mat-icon,
.mat-tonal-button .mdc-button__label,
.mat-tonal-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-button .mat-focus-indicator,
.mat-mdc-unelevated-button .mat-focus-indicator,
.mat-mdc-raised-button .mat-focus-indicator,
.mat-mdc-outlined-button .mat-focus-indicator,
.mat-tonal-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-unelevated-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-raised-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-outlined-button:focus-visible > .mat-focus-indicator::before,
.mat-tonal-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-button._mat-animation-noopable,
.mat-mdc-unelevated-button._mat-animation-noopable,
.mat-mdc-raised-button._mat-animation-noopable,
.mat-mdc-outlined-button._mat-animation-noopable,
.mat-tonal-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-button > .mat-icon,
.mat-mdc-unelevated-button > .mat-icon,
.mat-mdc-raised-button > .mat-icon,
.mat-mdc-outlined-button > .mat-icon,
.mat-tonal-button > .mat-icon {
  display: inline-block;
  position: relative;
  vertical-align: top;
  font-size: 1.125rem;
  height: 1.125rem;
  width: 1.125rem;
}

.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mdc-button__ripple {
  top: -1px;
  left: -1px;
  bottom: -1px;
  right: -1px;
}

.mat-mdc-unelevated-button .mat-focus-indicator::before,
.mat-tonal-button .mat-focus-indicator::before,
.mat-mdc-raised-button .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-outlined-button .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 3px) * -1);
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2,changeDetection:0})}return n})();function YD(n){return n.hasAttribute("mat-raised-button")?"elevated":n.hasAttribute("mat-stroked-button")?"outlined":n.hasAttribute("mat-flat-button")?"filled":n.hasAttribute("mat-button")?"text":null}var ft=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=q({type:n});static \u0275inj=Y({imports:[Tc,Ve]})}return n})();function Ic(n){return n&&typeof n.connect=="function"&&!(n instanceof Ih)}var Kn=(function(n){return n[n.REPLACED=0]="REPLACED",n[n.INSERTED=1]="INSERTED",n[n.MOVED=2]="MOVED",n[n.REMOVED=3]="REMOVED",n})(Kn||{}),Fc=class{viewCacheSize=20;_viewCache=[];applyChanges(i,e,t,r,a){i.forEachOperation((o,s,c)=>{let m,f;if(o.previousIndex==null){let g=()=>t(o,s,c);m=this._insertView(g,c,e,r(o)),f=m?Kn.INSERTED:Kn.REPLACED}else c==null?(this._detachAndCacheView(s,e),f=Kn.REMOVED):(m=this._moveView(s,c,e,r(o)),f=Kn.MOVED);a&&a({context:m?.context,operation:f,record:o})})}detach(){for(let i of this._viewCache)i.destroy();this._viewCache=[]}_insertView(i,e,t,r){let a=this._insertViewFromCache(e,t);if(a){a.context.$implicit=r;return}let o=i();return t.createEmbeddedView(o.templateRef,o.context,o.index)}_detachAndCacheView(i,e){let t=e.detach(i);this._maybeCacheView(t,e)}_moveView(i,e,t,r){let a=t.get(i);return t.move(a,e),a.context.$implicit=r,a}_maybeCacheView(i,e){if(this._viewCache.length<this.viewCacheSize)this._viewCache.push(i);else{let t=e.indexOf(i);t===-1?i.destroy():e.remove(t)}}_insertViewFromCache(i,e){let t=this._viewCache.pop();return t&&e.insert(t,i),t||null}};var qD=20,va=(()=>{class n{_ngZone=l(de);_platform=l(xe);_renderer=l(Nt).createRenderer(null,null);_cleanupGlobalListener;constructor(){}_scrolled=new P;_scrolledCount=0;scrollContainers=new Map;register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){let t=this.scrollContainers.get(e);t&&(t.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=qD){return this._platform.isBrowser?new li(t=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen("document","scroll",()=>this._scrolled.next())));let r=e>0?this._scrolled.pipe(Mo(e)).subscribe(t):this._scrolled.subscribe(t);return this._scrolledCount++,()=>{r.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0)}}):Q()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((e,t)=>this.deregister(t)),this._scrolled.complete()}ancestorScrolled(e,t){let r=this.getAncestorScrollContainers(e);return this.scrolled(t).pipe(Ye(a=>!a||r.indexOf(a)>-1))}getAncestorScrollContainers(e){let t=[];return this.scrollContainers.forEach((r,a)=>{this._scrollableContainsElement(a,e)&&t.push(a)}),t}_scrollableContainsElement(e,t){let r=cn(t),a=e.getElementRef().nativeElement;do if(r==a)return!0;while(r=r.parentElement);return!1}static \u0275fac=function(t){return new(t||n)};static \u0275prov=w({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Mm=(()=>{class n{elementRef=l(U);scrollDispatcher=l(va);ngZone=l(de);dir=l(ht,{optional:!0});_scrollElement=this.elementRef.nativeElement;_destroyed=new P;_renderer=l(Je);_cleanupScroll;_elementScrolled=new P;constructor(){}ngOnInit(){this._cleanupScroll=this.ngZone.runOutsideAngular(()=>this._renderer.listen(this._scrollElement,"scroll",e=>this._elementScrolled.next(e))),this.scrollDispatcher.register(this)}ngOnDestroy(){this._cleanupScroll?.(),this._elementScrolled.complete(),this.scrollDispatcher.deregister(this),this._destroyed.next(),this._destroyed.complete()}elementScrolled(){return this._elementScrolled}getElementRef(){return this.elementRef}scrollTo(e){let t=this.elementRef.nativeElement,r=this.dir&&this.dir.value=="rtl";e.left==null&&(e.left=r?e.end:e.start),e.right==null&&(e.right=r?e.start:e.end),e.bottom!=null&&(e.top=t.scrollHeight-t.clientHeight-e.bottom),r&&ro()!=Zn.NORMAL?(e.left!=null&&(e.right=t.scrollWidth-t.clientWidth-e.left),ro()==Zn.INVERTED?e.left=e.right:ro()==Zn.NEGATED&&(e.left=e.right?-e.right:e.right)):e.right!=null&&(e.left=t.scrollWidth-t.clientWidth-e.right),this._applyScrollToOptions(e)}_applyScrollToOptions(e){let t=this.elementRef.nativeElement;xc()?t.scrollTo(e):(e.top!=null&&(t.scrollTop=e.top),e.left!=null&&(t.scrollLeft=e.left))}measureScrollOffset(e){let t="left",r="right",a=this.elementRef.nativeElement;if(e=="top")return a.scrollTop;if(e=="bottom")return a.scrollHeight-a.clientHeight-a.scrollTop;let o=this.dir&&this.dir.value=="rtl";return e=="start"?e=o?r:t:e=="end"&&(e=o?t:r),o&&ro()==Zn.INVERTED?e==t?a.scrollWidth-a.clientWidth-a.scrollLeft:a.scrollLeft:o&&ro()==Zn.NEGATED?e==t?a.scrollLeft+a.scrollWidth-a.clientWidth:-a.scrollLeft:e==t?a.scrollLeft:a.scrollWidth-a.clientWidth-a.scrollLeft}static \u0275fac=function(t){return new(t||n)};static \u0275dir=A({type:n,selectors:[["","cdk-scrollable",""],["","cdkScrollable",""]]})}return n})(),ZD=20,Ci=(()=>{class n{_platform=l(xe);_listeners;_viewportSize=null;_change=new P;_document=l(X);constructor(){let e=l(de),t=l(Nt).createRenderer(null,null);e.runOutsideAngular(()=>{if(this._platform.isBrowser){let r=a=>this._change.next(a);this._listeners=[t.listen("window","resize",r),t.listen("window","orientationchange",r)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(e=>e()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){let e=this.getViewportScrollPosition(),{width:t,height:r}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+r,right:e.left+t,height:r,width:t}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let e=this._document,t=this._getWindow(),r=e.documentElement,a=r.getBoundingClientRect(),o=-a.top||e.body?.scrollTop||t.scrollY||r.scrollTop||0,s=-a.left||e.body?.scrollLeft||t.scrollX||r.scrollLeft||0;return{top:o,left:s}}change(e=ZD){return e>0?this._change.pipe(Mo(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}static \u0275fac=function(t){return new(t||n)};static \u0275prov=w({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var T_=new S("CDK_VIRTUAL_SCROLL_VIEWPORT");var _a=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=q({type:n});static \u0275inj=Y({})}return n})(),Rs=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=q({type:n});static \u0275inj=Y({imports:[Ve,_a,Ve,_a]})}return n})();var ks=class{_attachedHost=null;attach(i){return this._attachedHost=i,i.attach(this)}detach(){let i=this._attachedHost;i!=null&&(this._attachedHost=null,i.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(i){this._attachedHost=i}},tn=class extends ks{component;viewContainerRef;injector;projectableNodes;bindings;constructor(i,e,t,r,a){super(),this.component=i,this.viewContainerRef=e,this.injector=t,this.projectableNodes=r,this.bindings=a||null}},Di=class extends ks{templateRef;viewContainerRef;context;injector;constructor(i,e,t,r){super(),this.templateRef=i,this.viewContainerRef=e,this.context=t,this.injector=r}get origin(){return this.templateRef.elementRef}attach(i,e=this.context){return this.context=e,super.attach(i)}detach(){return this.context=void 0,super.detach()}},Am=class extends ks{element;constructor(i){super(),this.element=i instanceof U?i.nativeElement:i}},pr=class{_attachedPortal=null;_disposeFn=null;_isDisposed=!1;hasAttached(){return!!this._attachedPortal}attach(i){if(i instanceof tn)return this._attachedPortal=i,this.attachComponentPortal(i);if(i instanceof Di)return this._attachedPortal=i,this.attachTemplatePortal(i);if(this.attachDomPortal&&i instanceof Am)return this._attachedPortal=i,this.attachDomPortal(i)}attachDomPortal=null;detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(i){this._disposeFn=i}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}},Oc=class extends pr{outletElement;_appRef;_defaultInjector;constructor(i,e,t){super(),this.outletElement=i,this._appRef=e,this._defaultInjector=t}attachComponentPortal(i){let e;if(i.viewContainerRef){let t=i.injector||i.viewContainerRef.injector,r=t.get(Qs,null,{optional:!0})||void 0;e=i.viewContainerRef.createComponent(i.component,{index:i.viewContainerRef.length,injector:t,ngModuleRef:r,projectableNodes:i.projectableNodes||void 0,bindings:i.bindings||void 0}),this.setDisposeFn(()=>e.destroy())}else{let t=this._appRef,r=i.injector||this._defaultInjector||ce.NULL,a=r.get(kt,t.injector);e=ol(i.component,{elementInjector:r,environmentInjector:a,projectableNodes:i.projectableNodes||void 0,bindings:i.bindings||void 0}),t.attachView(e.hostView),this.setDisposeFn(()=>{t.viewCount>0&&t.detachView(e.hostView),e.destroy()})}return this.outletElement.appendChild(this._getComponentRootNode(e)),this._attachedPortal=i,e}attachTemplatePortal(i){let e=i.viewContainerRef,t=e.createEmbeddedView(i.templateRef,i.context,{injector:i.injector});return t.rootNodes.forEach(r=>this.outletElement.appendChild(r)),t.detectChanges(),this.setDisposeFn(()=>{let r=e.indexOf(t);r!==-1&&e.remove(r)}),this._attachedPortal=i,t}attachDomPortal=i=>{let e=i.element;e.parentNode;let t=this.outletElement.ownerDocument.createComment("dom-portal");e.parentNode.insertBefore(t,e),this.outletElement.appendChild(e),this._attachedPortal=i,super.setDisposeFn(()=>{t.parentNode&&t.parentNode.replaceChild(e,t)})};dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(i){return i.hostView.rootNodes[0]}};var Xn=(()=>{class n extends pr{_moduleRef=l(Qs,{optional:!0});_document=l(X);_viewContainerRef=l(gt);_isInitialized=!1;_attachedRef=null;constructor(){super()}get portal(){return this._attachedPortal}set portal(e){this.hasAttached()&&!e&&!this._isInitialized||(this.hasAttached()&&super.detach(),e&&super.attach(e),this._attachedPortal=e||null)}attached=new j;get attachedRef(){return this._attachedRef}ngOnInit(){this._isInitialized=!0}ngOnDestroy(){super.dispose(),this._attachedRef=this._attachedPortal=null}attachComponentPortal(e){e.setAttachedHost(this);let t=e.viewContainerRef!=null?e.viewContainerRef:this._viewContainerRef,r=t.createComponent(e.component,{index:t.length,injector:e.injector||t.injector,projectableNodes:e.projectableNodes||void 0,ngModuleRef:this._moduleRef||void 0,bindings:e.bindings||void 0});return t!==this._viewContainerRef&&this._getRootNode().appendChild(r.hostView.rootNodes[0]),super.setDisposeFn(()=>r.destroy()),this._attachedPortal=e,this._attachedRef=r,this.attached.emit(r),r}attachTemplatePortal(e){e.setAttachedHost(this);let t=this._viewContainerRef.createEmbeddedView(e.templateRef,e.context,{injector:e.injector});return super.setDisposeFn(()=>this._viewContainerRef.clear()),this._attachedPortal=e,this._attachedRef=t,this.attached.emit(t),t}attachDomPortal=e=>{let t=e.element;t.parentNode;let r=this._document.createComment("dom-portal");e.setAttachedHost(this),t.parentNode.insertBefore(r,t),this._getRootNode().appendChild(t),this._attachedPortal=e,super.setDisposeFn(()=>{r.parentNode&&r.parentNode.replaceChild(t,r)})};_getRootNode(){let e=this._viewContainerRef.element.nativeElement;return e.nodeType===e.ELEMENT_NODE?e:e.parentNode}static \u0275fac=function(t){return new(t||n)};static \u0275dir=A({type:n,selectors:[["","cdkPortalOutlet",""]],inputs:{portal:[0,"cdkPortalOutlet","portal"]},outputs:{attached:"attached"},exportAs:["cdkPortalOutlet"],features:[_e]})}return n})(),Qn=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=q({type:n});static \u0275inj=Y({})}return n})();var I_=xc();function gr(n){return new Pc(n.get(Ci),n.get(X))}var Pc=class{_viewportRuler;_previousHTMLStyles={top:"",left:""};_previousScrollPosition;_isEnabled=!1;_document;constructor(i,e){this._viewportRuler=i,this._document=e}attach(){}enable(){if(this._canBeEnabled()){let i=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=i.style.left||"",this._previousHTMLStyles.top=i.style.top||"",i.style.left=_t(-this._previousScrollPosition.left),i.style.top=_t(-this._previousScrollPosition.top),i.classList.add("cdk-global-scrollblock"),this._isEnabled=!0}}disable(){if(this._isEnabled){let i=this._document.documentElement,e=this._document.body,t=i.style,r=e.style,a=t.scrollBehavior||"",o=r.scrollBehavior||"";this._isEnabled=!1,t.left=this._previousHTMLStyles.left,t.top=this._previousHTMLStyles.top,i.classList.remove("cdk-global-scrollblock"),I_&&(t.scrollBehavior=r.scrollBehavior="auto"),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),I_&&(t.scrollBehavior=a,r.scrollBehavior=o)}}_canBeEnabled(){if(this._document.documentElement.classList.contains("cdk-global-scrollblock")||this._isEnabled)return!1;let e=this._document.documentElement,t=this._viewportRuler.getViewportSize();return e.scrollHeight>t.height||e.scrollWidth>t.width}};function B_(n,i){return new Nc(n.get(va),n.get(de),n.get(Ci),i)}var Nc=class{_scrollDispatcher;_ngZone;_viewportRuler;_config;_scrollSubscription=null;_overlayRef;_initialScrollPosition;constructor(i,e,t,r){this._scrollDispatcher=i,this._ngZone=e,this._viewportRuler=t,this._config=r}attach(i){this._overlayRef,this._overlayRef=i}enable(){if(this._scrollSubscription)return;let i=this._scrollDispatcher.scrolled(0).pipe(Ye(e=>!e||!this._overlayRef.overlayElement.contains(e.getElementRef().nativeElement)));this._config&&this._config.threshold&&this._config.threshold>1?(this._initialScrollPosition=this._viewportRuler.getViewportScrollPosition().top,this._scrollSubscription=i.subscribe(()=>{let e=this._viewportRuler.getViewportScrollPosition().top;Math.abs(e-this._initialScrollPosition)>this._config.threshold?this._detach():this._overlayRef.updatePosition()})):this._scrollSubscription=i.subscribe(this._detach)}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}_detach=()=>{this.disable(),this._overlayRef.hasAttached()&&this._ngZone.run(()=>this._overlayRef.detach())}};var Ts=class{enable(){}disable(){}attach(){}};function Rm(n,i){return i.some(e=>{let t=n.bottom<e.top,r=n.top>e.bottom,a=n.right<e.left,o=n.left>e.right;return t||r||a||o})}function F_(n,i){return i.some(e=>{let t=n.top<e.top,r=n.bottom>e.bottom,a=n.left<e.left,o=n.right>e.right;return t||r||a||o})}function $i(n,i){return new Lc(n.get(va),n.get(Ci),n.get(de),i)}var Lc=class{_scrollDispatcher;_viewportRuler;_ngZone;_config;_scrollSubscription=null;_overlayRef;constructor(i,e,t,r){this._scrollDispatcher=i,this._viewportRuler=e,this._ngZone=t,this._config=r}attach(i){this._overlayRef,this._overlayRef=i}enable(){if(!this._scrollSubscription){let i=this._config?this._config.scrollThrottle:0;this._scrollSubscription=this._scrollDispatcher.scrolled(i).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){let e=this._overlayRef.overlayElement.getBoundingClientRect(),{width:t,height:r}=this._viewportRuler.getViewportSize();Rm(e,[{width:t,height:r,bottom:r,right:t,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}})}}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}},j_=(()=>{class n{_injector=l(ce);constructor(){}noop=()=>new Ts;close=e=>B_(this._injector,e);block=()=>gr(this._injector);reposition=e=>$i(this._injector,e);static \u0275fac=function(t){return new(t||n)};static \u0275prov=w({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Jn=class{positionStrategy;scrollStrategy=new Ts;panelClass="";hasBackdrop=!1;backdropClass="cdk-overlay-dark-backdrop";disableAnimations;width;height;minWidth;minHeight;maxWidth;maxHeight;direction;disposeOnNavigation=!1;usePopover;eventPredicate;constructor(i){if(i){let e=Object.keys(i);for(let t of e)i[t]!==void 0&&(this[t]=i[t])}}};var Vc=class{connectionPair;scrollableViewProperties;constructor(i,e){this.connectionPair=i,this.scrollableViewProperties=e}};var z_=(()=>{class n{_attachedOverlays=[];_document=l(X);_isAttached=!1;constructor(){}ngOnDestroy(){this.detach()}add(e){this.remove(e),this._attachedOverlays.push(e)}remove(e){let t=this._attachedOverlays.indexOf(e);t>-1&&this._attachedOverlays.splice(t,1),this._attachedOverlays.length===0&&this.detach()}canReceiveEvent(e,t,r){return r.observers.length<1?!1:e.eventPredicate?e.eventPredicate(t):!0}static \u0275fac=function(t){return new(t||n)};static \u0275prov=w({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),U_=(()=>{class n extends z_{_ngZone=l(de);_renderer=l(Nt).createRenderer(null,null);_cleanupKeydown;add(e){super.add(e),this._isAttached||(this._ngZone.runOutsideAngular(()=>{this._cleanupKeydown=this._renderer.listen("body","keydown",this._keydownListener)}),this._isAttached=!0)}detach(){this._isAttached&&(this._cleanupKeydown?.(),this._isAttached=!1)}_keydownListener=e=>{let t=this._attachedOverlays;for(let r=t.length-1;r>-1;r--){let a=t[r];if(this.canReceiveEvent(a,e,a._keydownEvents)){this._ngZone.run(()=>a._keydownEvents.next(e));break}}};static \u0275fac=(()=>{let e;return function(r){return(e||(e=Xe(n)))(r||n)}})();static \u0275prov=w({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),H_=(()=>{class n extends z_{_platform=l(xe);_ngZone=l(de);_renderer=l(Nt).createRenderer(null,null);_cursorOriginalValue;_cursorStyleIsSet=!1;_pointerDownEventTarget=null;_cleanups;add(e){if(super.add(e),!this._isAttached){let t=this._document.body,r={capture:!0},a=this._renderer;this._cleanups=this._ngZone.runOutsideAngular(()=>[a.listen(t,"pointerdown",this._pointerDownListener,r),a.listen(t,"click",this._clickListener,r),a.listen(t,"auxclick",this._clickListener,r),a.listen(t,"contextmenu",this._clickListener,r)]),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=t.style.cursor,t.style.cursor="pointer",this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){this._isAttached&&(this._cleanups?.forEach(e=>e()),this._cleanups=void 0,this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1)}_pointerDownListener=e=>{this._pointerDownEventTarget=Lt(e)};_clickListener=e=>{let t=Lt(e),r=e.type==="click"&&this._pointerDownEventTarget?this._pointerDownEventTarget:t;this._pointerDownEventTarget=null;let a=this._attachedOverlays.slice();for(let o=a.length-1;o>-1;o--){let s=a[o],c=s._outsidePointerEvents;if(!(!s.hasAttached()||!this.canReceiveEvent(s,e,c))){if(O_(s.overlayElement,t)||O_(s.overlayElement,r))break;this._ngZone?this._ngZone.run(()=>c.next(e)):c.next(e)}}};static \u0275fac=(()=>{let e;return function(r){return(e||(e=Xe(n)))(r||n)}})();static \u0275prov=w({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function O_(n,i){let e=typeof ShadowRoot<"u"&&ShadowRoot,t=i;for(;t;){if(t===n)return!0;t=e&&t instanceof ShadowRoot?t.host:t.parentNode}return!1}var $_=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=N({type:n,selectors:[["ng-component"]],hostAttrs:["cdk-overlay-style-loader",""],decls:0,vars:0,template:function(t,r){},styles:[`.cdk-overlay-container, .cdk-global-overlay-wrapper {
  pointer-events: none;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

.cdk-overlay-container {
  position: fixed;
}
@layer cdk-overlay {
  .cdk-overlay-container {
    z-index: 1000;
  }
}
.cdk-overlay-container:empty {
  display: none;
}

.cdk-global-overlay-wrapper {
  display: flex;
  position: absolute;
}
@layer cdk-overlay {
  .cdk-global-overlay-wrapper {
    z-index: 1000;
  }
}

.cdk-overlay-pane {
  position: absolute;
  pointer-events: auto;
  box-sizing: border-box;
  display: flex;
  max-width: 100%;
  max-height: 100%;
}
@layer cdk-overlay {
  .cdk-overlay-pane {
    z-index: 1000;
  }
}

.cdk-overlay-backdrop {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  pointer-events: auto;
  -webkit-tap-highlight-color: transparent;
  opacity: 0;
  touch-action: manipulation;
}
@layer cdk-overlay {
  .cdk-overlay-backdrop {
    z-index: 1000;
    transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
  }
}
@media (prefers-reduced-motion) {
  .cdk-overlay-backdrop {
    transition-duration: 1ms;
  }
}

.cdk-overlay-backdrop-showing {
  opacity: 1;
}
@media (forced-colors: active) {
  .cdk-overlay-backdrop-showing {
    opacity: 0.6;
  }
}

@layer cdk-overlay {
  .cdk-overlay-dark-backdrop {
    background: rgba(0, 0, 0, 0.32);
  }
}

.cdk-overlay-transparent-backdrop {
  transition: visibility 1ms linear, opacity 1ms linear;
  visibility: hidden;
  opacity: 1;
}
.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing, .cdk-high-contrast-active .cdk-overlay-transparent-backdrop {
  opacity: 0;
  visibility: visible;
}

.cdk-overlay-backdrop-noop-animation {
  transition: none;
}

.cdk-overlay-connected-position-bounding-box {
  position: absolute;
  display: flex;
  flex-direction: column;
  min-width: 1px;
  min-height: 1px;
}
@layer cdk-overlay {
  .cdk-overlay-connected-position-bounding-box {
    z-index: 1000;
  }
}

.cdk-global-scrollblock {
  position: fixed;
  width: 100%;
  overflow-y: scroll;
}

.cdk-overlay-popover {
  background: none;
  border: none;
  padding: 0;
  outline: 0;
  overflow: visible;
  position: fixed;
  pointer-events: none;
  white-space: normal;
  color: inherit;
  text-decoration: none;
  width: 100%;
  height: 100%;
  inset: auto;
  top: 0;
  left: 0;
}
.cdk-overlay-popover::backdrop {
  display: none;
}
.cdk-overlay-popover .cdk-overlay-backdrop {
  position: fixed;
  z-index: auto;
}
`],encapsulation:2,changeDetection:0})}return n})(),jc=(()=>{class n{_platform=l(xe);_containerElement;_document=l(X);_styleLoader=l(dt);constructor(){}ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._loadStyles(),this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let e="cdk-overlay-container";if(this._platform.isBrowser||gm()){let r=this._document.querySelectorAll(`.${e}[platform="server"], .${e}[platform="test"]`);for(let a=0;a<r.length;a++)r[a].remove()}let t=this._document.createElement("div");t.classList.add(e),gm()?t.setAttribute("platform","test"):this._platform.isBrowser||t.setAttribute("platform","server"),this._document.body.appendChild(t),this._containerElement=t}_loadStyles(){this._styleLoader.load($_)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=w({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),km=class{_renderer;_ngZone;element;_cleanupClick;_cleanupTransitionEnd;_fallbackTimeout;constructor(i,e,t,r){this._renderer=e,this._ngZone=t,this.element=i.createElement("div"),this.element.classList.add("cdk-overlay-backdrop"),this._cleanupClick=e.listen(this.element,"click",r)}detach(){this._ngZone.runOutsideAngular(()=>{let i=this.element;clearTimeout(this._fallbackTimeout),this._cleanupTransitionEnd?.(),this._cleanupTransitionEnd=this._renderer.listen(i,"transitionend",this.dispose),this._fallbackTimeout=setTimeout(this.dispose,500),i.style.pointerEvents="none",i.classList.remove("cdk-overlay-backdrop-showing")})}dispose=()=>{clearTimeout(this._fallbackTimeout),this._cleanupClick?.(),this._cleanupTransitionEnd?.(),this._cleanupClick=this._cleanupTransitionEnd=this._fallbackTimeout=void 0,this.element.remove()}};function Tm(n){return n&&n.nodeType===1}var lo=class{_portalOutlet;_host;_pane;_config;_ngZone;_keyboardDispatcher;_document;_location;_outsideClickDispatcher;_animationsDisabled;_injector;_renderer;_backdropClick=new P;_attachments=new P;_detachments=new P;_positionStrategy;_scrollStrategy;_locationChanges=rt.EMPTY;_backdropRef=null;_detachContentMutationObserver;_detachContentAfterRenderRef;_disposed=!1;_previousHostParent;_keydownEvents=new P;_outsidePointerEvents=new P;_afterNextRenderRef;constructor(i,e,t,r,a,o,s,c,m,f=!1,g,E){this._portalOutlet=i,this._host=e,this._pane=t,this._config=r,this._ngZone=a,this._keyboardDispatcher=o,this._document=s,this._location=c,this._outsideClickDispatcher=m,this._animationsDisabled=f,this._injector=g,this._renderer=E,r.scrollStrategy&&(this._scrollStrategy=r.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=r.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropRef?.element||null}get hostElement(){return this._host}get eventPredicate(){return this._config?.eventPredicate||null}attach(i){if(this._disposed)return null;this._attachHost();let e=this._portalOutlet.attach(i);return this._positionStrategy?.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=at(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._completeDetachContent(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation&&(this._locationChanges=this._location.subscribe(()=>this.dispose())),this._outsideClickDispatcher.add(this),typeof e?.onDestroy=="function"&&e.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),e}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let i=this._portalOutlet.detach();return this._detachments.next(),this._completeDetachContent(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges.unsubscribe(),this._outsideClickDispatcher.remove(this),i}dispose(){if(this._disposed)return;let i=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._backdropRef?.dispose(),this._locationChanges.unsubscribe(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=this._backdropRef=null,i&&this._detachments.next(),this._detachments.complete(),this._completeDetachContent(),this._disposed=!0}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(i){i!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=i,this.hasAttached()&&(i.attach(this),this.updatePosition()))}updateSize(i){this._config=x(x({},this._config),i),this._updateElementSize()}setDirection(i){this._config=He(x({},this._config),{direction:i}),this._updateElementDirection()}addPanelClass(i){this._pane&&this._toggleClasses(this._pane,i,!0)}removePanelClass(i){this._pane&&this._toggleClasses(this._pane,i,!1)}getDirection(){let i=this._config.direction;return i?typeof i=="string"?i:i.value:"ltr"}updateScrollStrategy(i){i!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=i,this.hasAttached()&&(i.attach(this),i.enable()))}_updateElementDirection(){this._host.setAttribute("dir",this.getDirection())}_updateElementSize(){if(!this._pane)return;let i=this._pane.style;i.width=_t(this._config.width),i.height=_t(this._config.height),i.minWidth=_t(this._config.minWidth),i.minHeight=_t(this._config.minHeight),i.maxWidth=_t(this._config.maxWidth),i.maxHeight=_t(this._config.maxHeight)}_togglePointerEvents(i){this._pane.style.pointerEvents=i?"":"none"}_attachHost(){if(!this._host.parentElement){let i=this._config.usePopover?this._positionStrategy?.getPopoverInsertionPoint?.():null;Tm(i)?i.after(this._host):i?.type==="parent"?i.element.appendChild(this._host):this._previousHostParent?.appendChild(this._host)}if(this._config.usePopover)try{this._host.showPopover()}catch{}}_attachBackdrop(){let i="cdk-overlay-backdrop-showing";this._backdropRef?.dispose(),this._backdropRef=new km(this._document,this._renderer,this._ngZone,e=>{this._backdropClick.next(e)}),this._animationsDisabled&&this._backdropRef.element.classList.add("cdk-overlay-backdrop-noop-animation"),this._config.backdropClass&&this._toggleClasses(this._backdropRef.element,this._config.backdropClass,!0),this._config.usePopover?this._host.prepend(this._backdropRef.element):this._host.parentElement.insertBefore(this._backdropRef.element,this._host),!this._animationsDisabled&&typeof requestAnimationFrame<"u"?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._backdropRef?.element.classList.add(i))}):this._backdropRef.element.classList.add(i)}_updateStackingOrder(){!this._config.usePopover&&this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){this._animationsDisabled?(this._backdropRef?.dispose(),this._backdropRef=null):this._backdropRef?.detach()}_toggleClasses(i,e,t){let r=no(e||[]).filter(a=>!!a);r.length&&(t?i.classList.add(...r):i.classList.remove(...r))}_detachContentWhenEmpty(){let i=!1;try{this._detachContentAfterRenderRef=at(()=>{i=!0,this._detachContent()},{injector:this._injector})}catch(e){if(i)throw e;this._detachContent()}globalThis.MutationObserver&&this._pane&&(this._detachContentMutationObserver||=new globalThis.MutationObserver(()=>{this._detachContent()}),this._detachContentMutationObserver.observe(this._pane,{childList:!0}))}_detachContent(){(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),this._completeDetachContent())}_completeDetachContent(){this._detachContentAfterRenderRef?.destroy(),this._detachContentAfterRenderRef=void 0,this._detachContentMutationObserver?.disconnect()}_disposeScrollStrategy(){let i=this._scrollStrategy;i?.disable(),i?.detach?.()}},P_="cdk-overlay-connected-position-bounding-box",XD=/([A-Za-z%]+)$/;function ya(n,i){return new co(i,n.get(Ci),n.get(X),n.get(xe),n.get(jc))}var co=class{_viewportRuler;_document;_platform;_overlayContainer;_overlayRef;_isInitialRender=!1;_lastBoundingBoxSize={width:0,height:0};_isPushed=!1;_canPush=!0;_growAfterOpen=!1;_hasFlexibleDimensions=!0;_positionLocked=!1;_originRect;_overlayRect;_viewportRect;_containerRect;_viewportMargin=0;_scrollables=[];_preferredPositions=[];_origin;_pane;_isDisposed=!1;_boundingBox=null;_lastPosition=null;_lastScrollVisibility=null;_positionChanges=new P;_resizeSubscription=rt.EMPTY;_offsetX=0;_offsetY=0;_transformOriginSelector;_appliedPanelClasses=[];_previousPushAmount=null;_popoverLocation="global";positionChanges=this._positionChanges;get positions(){return this._preferredPositions}constructor(i,e,t,r,a){this._viewportRuler=e,this._document=t,this._platform=r,this._overlayContainer=a,this.setOrigin(i)}attach(i){this._overlayRef&&this._overlayRef,this._validatePositions(),i.hostElement.classList.add(P_),this._overlayRef=i,this._boundingBox=i.hostElement,this._pane=i.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition){this.reapplyLastPosition();return}this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._getContainerRect();let i=this._originRect,e=this._overlayRect,t=this._viewportRect,r=this._containerRect,a=[],o;for(let s of this._preferredPositions){let c=this._getOriginPoint(i,r,s),m=this._getOverlayPoint(c,e,s),f=this._getOverlayFit(m,e,t,s);if(f.isCompletelyWithinViewport){this._isPushed=!1,this._applyPosition(s,c);return}if(this._canFitWithFlexibleDimensions(f,m,t)){a.push({position:s,origin:c,overlayRect:e,boundingBoxRect:this._calculateBoundingBoxRect(c,s)});continue}(!o||o.overlayFit.visibleArea<f.visibleArea)&&(o={overlayFit:f,overlayPoint:m,originPoint:c,position:s,overlayRect:e})}if(a.length){let s=null,c=-1;for(let m of a){let f=m.boundingBoxRect.width*m.boundingBoxRect.height*(m.position.weight||1);f>c&&(c=f,s=m)}this._isPushed=!1,this._applyPosition(s.position,s.origin);return}if(this._canPush){this._isPushed=!0,this._applyPosition(o.position,o.originPoint);return}this._applyPosition(o.position,o.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&ba(this._boundingBox.style,{top:"",left:"",right:"",bottom:"",height:"",width:"",alignItems:"",justifyContent:""}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(P_),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;let i=this._lastPosition;i?(this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._getContainerRect(),this._applyPosition(i,this._getOriginPoint(this._originRect,this._containerRect,i))):this.apply()}withScrollableContainers(i){return this._scrollables=i,this}withPositions(i){return this._preferredPositions=i,i.indexOf(this._lastPosition)===-1&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(i){return this._viewportMargin=i,this}withFlexibleDimensions(i=!0){return this._hasFlexibleDimensions=i,this}withGrowAfterOpen(i=!0){return this._growAfterOpen=i,this}withPush(i=!0){return this._canPush=i,this}withLockedPosition(i=!0){return this._positionLocked=i,this}setOrigin(i){return this._origin=i,this}withDefaultOffsetX(i){return this._offsetX=i,this}withDefaultOffsetY(i){return this._offsetY=i,this}withTransformOriginOn(i){return this._transformOriginSelector=i,this}withPopoverLocation(i){return this._popoverLocation=i,this}getPopoverInsertionPoint(){return this._popoverLocation==="global"?null:this._popoverLocation!=="inline"?this._popoverLocation:this._origin instanceof U?this._origin.nativeElement:Tm(this._origin)?this._origin:null}_getOriginPoint(i,e,t){let r;if(t.originX=="center")r=i.left+i.width/2;else{let o=this._isRtl()?i.right:i.left,s=this._isRtl()?i.left:i.right;r=t.originX=="start"?o:s}e.left<0&&(r-=e.left);let a;return t.originY=="center"?a=i.top+i.height/2:a=t.originY=="top"?i.top:i.bottom,e.top<0&&(a-=e.top),{x:r,y:a}}_getOverlayPoint(i,e,t){let r;t.overlayX=="center"?r=-e.width/2:t.overlayX==="start"?r=this._isRtl()?-e.width:0:r=this._isRtl()?0:-e.width;let a;return t.overlayY=="center"?a=-e.height/2:a=t.overlayY=="top"?0:-e.height,{x:i.x+r,y:i.y+a}}_getOverlayFit(i,e,t,r){let a=L_(e),{x:o,y:s}=i,c=this._getOffset(r,"x"),m=this._getOffset(r,"y");c&&(o+=c),m&&(s+=m);let f=0-o,g=o+a.width-t.width,E=0-s,M=s+a.height-t.height,W=this._subtractOverflows(a.width,f,g),K=this._subtractOverflows(a.height,E,M),z=W*K;return{visibleArea:z,isCompletelyWithinViewport:a.width*a.height===z,fitsInViewportVertically:K===a.height,fitsInViewportHorizontally:W==a.width}}_canFitWithFlexibleDimensions(i,e,t){if(this._hasFlexibleDimensions){let r=t.bottom-e.y,a=t.right-e.x,o=N_(this._overlayRef.getConfig().minHeight),s=N_(this._overlayRef.getConfig().minWidth),c=i.fitsInViewportVertically||o!=null&&o<=r,m=i.fitsInViewportHorizontally||s!=null&&s<=a;return c&&m}return!1}_pushOverlayOnScreen(i,e,t){if(this._previousPushAmount&&this._positionLocked)return{x:i.x+this._previousPushAmount.x,y:i.y+this._previousPushAmount.y};let r=L_(e),a=this._viewportRect,o=Math.max(i.x+r.width-a.width,0),s=Math.max(i.y+r.height-a.height,0),c=Math.max(a.top-t.top-i.y,0),m=Math.max(a.left-t.left-i.x,0),f=0,g=0;return r.width<=a.width?f=m||-o:f=i.x<this._getViewportMarginStart()?a.left-t.left-i.x:0,r.height<=a.height?g=c||-s:g=i.y<this._getViewportMarginTop()?a.top-t.top-i.y:0,this._previousPushAmount={x:f,y:g},{x:i.x+f,y:i.y+g}}_applyPosition(i,e){if(this._setTransformOrigin(i),this._setOverlayElementStyles(e,i),this._setBoundingBoxStyles(e,i),i.panelClass&&this._addPanelClasses(i.panelClass),this._positionChanges.observers.length){let t=this._getScrollVisibility();if(i!==this._lastPosition||!this._lastScrollVisibility||!QD(this._lastScrollVisibility,t)){let r=new Vc(i,t);this._positionChanges.next(r)}this._lastScrollVisibility=t}this._lastPosition=i,this._isInitialRender=!1}_setTransformOrigin(i){if(!this._transformOriginSelector)return;let e=this._boundingBox.querySelectorAll(this._transformOriginSelector),t,r=i.overlayY;i.overlayX==="center"?t="center":this._isRtl()?t=i.overlayX==="start"?"right":"left":t=i.overlayX==="start"?"left":"right";for(let a=0;a<e.length;a++)e[a].style.transformOrigin=`${t} ${r}`}_calculateBoundingBoxRect(i,e){let t=this._viewportRect,r=this._isRtl(),a,o,s;if(e.overlayY==="top")o=i.y,a=t.height-o+this._getViewportMarginBottom();else if(e.overlayY==="bottom")s=t.height-i.y+this._getViewportMarginTop()+this._getViewportMarginBottom(),a=t.height-s+this._getViewportMarginTop();else{let M=Math.min(t.bottom-i.y+t.top,i.y),W=this._lastBoundingBoxSize.height;a=M*2,o=i.y-M,a>W&&!this._isInitialRender&&!this._growAfterOpen&&(o=i.y-W/2)}let c=e.overlayX==="start"&&!r||e.overlayX==="end"&&r,m=e.overlayX==="end"&&!r||e.overlayX==="start"&&r,f,g,E;if(m)E=t.width-i.x+this._getViewportMarginStart()+this._getViewportMarginEnd(),f=i.x-this._getViewportMarginStart();else if(c)g=i.x,f=t.right-i.x-this._getViewportMarginEnd();else{let M=Math.min(t.right-i.x+t.left,i.x),W=this._lastBoundingBoxSize.width;f=M*2,g=i.x-M,f>W&&!this._isInitialRender&&!this._growAfterOpen&&(g=i.x-W/2)}return{top:o,left:g,bottom:s,right:E,width:f,height:a}}_setBoundingBoxStyles(i,e){let t=this._calculateBoundingBoxRect(i,e);!this._isInitialRender&&!this._growAfterOpen&&(t.height=Math.min(t.height,this._lastBoundingBoxSize.height),t.width=Math.min(t.width,this._lastBoundingBoxSize.width));let r={};if(this._hasExactPosition())r.top=r.left="0",r.bottom=r.right="auto",r.maxHeight=r.maxWidth="",r.width=r.height="100%";else{let a=this._overlayRef.getConfig().maxHeight,o=this._overlayRef.getConfig().maxWidth;r.width=_t(t.width),r.height=_t(t.height),r.top=_t(t.top)||"auto",r.bottom=_t(t.bottom)||"auto",r.left=_t(t.left)||"auto",r.right=_t(t.right)||"auto",e.overlayX==="center"?r.alignItems="center":r.alignItems=e.overlayX==="end"?"flex-end":"flex-start",e.overlayY==="center"?r.justifyContent="center":r.justifyContent=e.overlayY==="bottom"?"flex-end":"flex-start",a&&(r.maxHeight=_t(a)),o&&(r.maxWidth=_t(o))}this._lastBoundingBoxSize=t,ba(this._boundingBox.style,r)}_resetBoundingBoxStyles(){ba(this._boundingBox.style,{top:"0",left:"0",right:"0",bottom:"0",height:"",width:"",alignItems:"",justifyContent:""})}_resetOverlayElementStyles(){ba(this._pane.style,{top:"",left:"",bottom:"",right:"",position:"",transform:""})}_setOverlayElementStyles(i,e){let t={},r=this._hasExactPosition(),a=this._hasFlexibleDimensions,o=this._overlayRef.getConfig();if(r){let f=this._viewportRuler.getViewportScrollPosition();ba(t,this._getExactOverlayY(e,i,f)),ba(t,this._getExactOverlayX(e,i,f))}else t.position="static";let s="",c=this._getOffset(e,"x"),m=this._getOffset(e,"y");c&&(s+=`translateX(${c}px) `),m&&(s+=`translateY(${m}px)`),t.transform=s.trim(),o.maxHeight&&(r?t.maxHeight=_t(o.maxHeight):a&&(t.maxHeight="")),o.maxWidth&&(r?t.maxWidth=_t(o.maxWidth):a&&(t.maxWidth="")),ba(this._pane.style,t)}_getExactOverlayY(i,e,t){let r={top:"",bottom:""},a=this._getOverlayPoint(e,this._overlayRect,i);if(this._isPushed&&(a=this._pushOverlayOnScreen(a,this._overlayRect,t)),i.overlayY==="bottom"){let o=this._document.documentElement.clientHeight;r.bottom=`${o-(a.y+this._overlayRect.height)}px`}else r.top=_t(a.y);return r}_getExactOverlayX(i,e,t){let r={left:"",right:""},a=this._getOverlayPoint(e,this._overlayRect,i);this._isPushed&&(a=this._pushOverlayOnScreen(a,this._overlayRect,t));let o;if(this._isRtl()?o=i.overlayX==="end"?"left":"right":o=i.overlayX==="end"?"right":"left",o==="right"){let s=this._document.documentElement.clientWidth;r.right=`${s-(a.x+this._overlayRect.width)}px`}else r.left=_t(a.x);return r}_getScrollVisibility(){let i=this._getOriginRect(),e=this._pane.getBoundingClientRect(),t=this._scrollables.map(r=>r.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:F_(i,t),isOriginOutsideView:Rm(i,t),isOverlayClipped:F_(e,t),isOverlayOutsideView:Rm(e,t)}}_subtractOverflows(i,...e){return e.reduce((t,r)=>t-Math.max(r,0),i)}_getNarrowedViewportRect(){let i=this._document.documentElement.clientWidth,e=this._document.documentElement.clientHeight,t=this._viewportRuler.getViewportScrollPosition();return{top:t.top+this._getViewportMarginTop(),left:t.left+this._getViewportMarginStart(),right:t.left+i-this._getViewportMarginEnd(),bottom:t.top+e-this._getViewportMarginBottom(),width:i-this._getViewportMarginStart()-this._getViewportMarginEnd(),height:e-this._getViewportMarginTop()-this._getViewportMarginBottom()}}_isRtl(){return this._overlayRef.getDirection()==="rtl"}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(i,e){return e==="x"?i.offsetX==null?this._offsetX:i.offsetX:i.offsetY==null?this._offsetY:i.offsetY}_validatePositions(){}_addPanelClasses(i){this._pane&&no(i).forEach(e=>{e!==""&&this._appliedPanelClasses.indexOf(e)===-1&&(this._appliedPanelClasses.push(e),this._pane.classList.add(e))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(i=>{this._pane.classList.remove(i)}),this._appliedPanelClasses=[])}_getViewportMarginStart(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.start??0}_getViewportMarginEnd(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.end??0}_getViewportMarginTop(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.top??0}_getViewportMarginBottom(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.bottom??0}_getOriginRect(){let i=this._origin;if(i instanceof U)return i.nativeElement.getBoundingClientRect();if(i instanceof Element)return i.getBoundingClientRect();let e=i.width||0,t=i.height||0;return{top:i.y,bottom:i.y+t,left:i.x,right:i.x+e,height:t,width:e}}_getContainerRect(){let i=this._overlayRef.getConfig().usePopover&&this._popoverLocation!=="global",e=this._overlayContainer.getContainerElement();i&&(e.style.display="block");let t=e.getBoundingClientRect();return i&&(e.style.display=""),t}};function ba(n,i){for(let e in i)i.hasOwnProperty(e)&&(n[e]=i[e]);return n}function N_(n){if(typeof n!="number"&&n!=null){let[i,e]=n.split(XD);return!e||e==="px"?parseFloat(i):null}return n||null}function L_(n){return{top:Math.floor(n.top),right:Math.floor(n.right),bottom:Math.floor(n.bottom),left:Math.floor(n.left),width:Math.floor(n.width),height:Math.floor(n.height)}}function QD(n,i){return n===i?!0:n.isOriginClipped===i.isOriginClipped&&n.isOriginOutsideView===i.isOriginOutsideView&&n.isOverlayClipped===i.isOverlayClipped&&n.isOverlayOutsideView===i.isOverlayOutsideView}var V_="cdk-global-overlay-wrapper";function Ei(n){return new Bc}var Bc=class{_overlayRef;_cssPosition="static";_topOffset="";_bottomOffset="";_alignItems="";_xPosition="";_xOffset="";_width="";_height="";_isDisposed=!1;attach(i){let e=i.getConfig();this._overlayRef=i,this._width&&!e.width&&i.updateSize({width:this._width}),this._height&&!e.height&&i.updateSize({height:this._height}),i.hostElement.classList.add(V_),this._isDisposed=!1}top(i=""){return this._bottomOffset="",this._topOffset=i,this._alignItems="flex-start",this}left(i=""){return this._xOffset=i,this._xPosition="left",this}bottom(i=""){return this._topOffset="",this._bottomOffset=i,this._alignItems="flex-end",this}right(i=""){return this._xOffset=i,this._xPosition="right",this}start(i=""){return this._xOffset=i,this._xPosition="start",this}end(i=""){return this._xOffset=i,this._xPosition="end",this}width(i=""){return this._overlayRef?this._overlayRef.updateSize({width:i}):this._width=i,this}height(i=""){return this._overlayRef?this._overlayRef.updateSize({height:i}):this._height=i,this}centerHorizontally(i=""){return this.left(i),this._xPosition="center",this}centerVertically(i=""){return this.top(i),this._alignItems="center",this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;let i=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement.style,t=this._overlayRef.getConfig(),{width:r,height:a,maxWidth:o,maxHeight:s}=t,c=(r==="100%"||r==="100vw")&&(!o||o==="100%"||o==="100vw"),m=(a==="100%"||a==="100vh")&&(!s||s==="100%"||s==="100vh"),f=this._xPosition,g=this._xOffset,E=this._overlayRef.getConfig().direction==="rtl",M="",W="",K="";c?K="flex-start":f==="center"?(K="center",E?W=g:M=g):E?f==="left"||f==="end"?(K="flex-end",M=g):(f==="right"||f==="start")&&(K="flex-start",W=g):f==="left"||f==="start"?(K="flex-start",M=g):(f==="right"||f==="end")&&(K="flex-end",W=g),i.position=this._cssPosition,i.marginLeft=c?"0":M,i.marginTop=m?"0":this._topOffset,i.marginBottom=this._bottomOffset,i.marginRight=c?"0":W,e.justifyContent=K,e.alignItems=m?"flex-start":this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;let i=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement,t=e.style;e.classList.remove(V_),t.justifyContent=t.alignItems=i.marginTop=i.marginBottom=i.marginLeft=i.marginRight=i.position="",this._overlayRef=null,this._isDisposed=!0}},G_=(()=>{class n{_injector=l(ce);constructor(){}global(){return Ei()}flexibleConnectedTo(e){return ya(this._injector,e)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=w({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Is=new S("OVERLAY_DEFAULT_CONFIG");function ei(n,i){n.get(dt).load($_);let e=n.get(jc),t=n.get(X),r=n.get(et),a=n.get(Ii),o=n.get(ht),s=n.get(Je,null,{optional:!0})||n.get(Nt).createRenderer(null,null),c=new Jn(i),m=n.get(Is,null,{optional:!0})?.usePopover??!0;c.direction=c.direction||o.value,"showPopover"in t.body?c.usePopover=i?.usePopover??m:c.usePopover=!1;let f=t.createElement("div"),g=t.createElement("div");f.id=r.getId("cdk-overlay-"),f.classList.add("cdk-overlay-pane"),g.appendChild(f),c.usePopover&&(g.setAttribute("popover","manual"),g.classList.add("cdk-overlay-popover"));let E=c.usePopover?c.positionStrategy?.getPopoverInsertionPoint?.():null;return Tm(E)?E.after(g):E?.type==="parent"?E.element.appendChild(g):e.getContainerElement().appendChild(g),new lo(new Oc(f,a,n),g,f,c,n.get(de),n.get(U_),t,n.get(ui),n.get(H_),i?.disableAnimations??n.get(Ma,null,{optional:!0})==="NoopAnimations",n.get(kt),s)}var W_=(()=>{class n{scrollStrategies=l(j_);_positionBuilder=l(G_);_injector=l(ce);constructor(){}create(e){return ei(this._injector,e)}position(){return this._positionBuilder}static \u0275fac=function(t){return new(t||n)};static \u0275prov=w({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),JD=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"}],ew=new S("cdk-connected-overlay-scroll-strategy",{providedIn:"root",factory:()=>{let n=l(ce);return()=>$i(n)}}),uo=(()=>{class n{elementRef=l(U);constructor(){}static \u0275fac=function(t){return new(t||n)};static \u0275dir=A({type:n,selectors:[["","cdk-overlay-origin",""],["","overlay-origin",""],["","cdkOverlayOrigin",""]],exportAs:["cdkOverlayOrigin"]})}return n})(),Y_=new S("cdk-connected-overlay-default-config"),zc=(()=>{class n{_dir=l(ht,{optional:!0});_injector=l(ce);_overlayRef;_templatePortal;_backdropSubscription=rt.EMPTY;_attachSubscription=rt.EMPTY;_detachSubscription=rt.EMPTY;_positionSubscription=rt.EMPTY;_offsetX;_offsetY;_position;_scrollStrategyFactory=l(ew);_ngZone=l(de);origin;positions;positionStrategy;get offsetX(){return this._offsetX}set offsetX(e){this._offsetX=e,this._position&&this._updatePositionStrategy(this._position)}get offsetY(){return this._offsetY}set offsetY(e){this._offsetY=e,this._position&&this._updatePositionStrategy(this._position)}width;height;minWidth;minHeight;backdropClass;panelClass;viewportMargin=0;scrollStrategy;open=!1;disableClose=!1;transformOriginSelector;hasBackdrop=!1;lockPosition=!1;flexibleDimensions=!1;growAfterOpen=!1;push=!1;disposeOnNavigation=!1;usePopover;matchWidth=!1;set _config(e){typeof e!="string"&&this._assignConfig(e)}backdropClick=new j;positionChange=new j;attach=new j;detach=new j;overlayKeydown=new j;overlayOutsideClick=new j;constructor(){let e=l(pt),t=l(gt),r=l(Y_,{optional:!0}),a=l(Is,{optional:!0});this.usePopover=a?.usePopover===!1?null:"global",this._templatePortal=new Di(e,t),this.scrollStrategy=this._scrollStrategyFactory(),r&&this._assignConfig(r)}get overlayRef(){return this._overlayRef}get dir(){return this._dir?this._dir.value:"ltr"}ngOnDestroy(){this._attachSubscription.unsubscribe(),this._detachSubscription.unsubscribe(),this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this._overlayRef?.dispose()}ngOnChanges(e){this._position&&(this._updatePositionStrategy(this._position),this._overlayRef?.updateSize({width:this._getWidth(),minWidth:this.minWidth,height:this.height,minHeight:this.minHeight}),e.origin&&this.open&&this._position.apply()),e.open&&(this.open?this.attachOverlay():this.detachOverlay())}_createOverlay(){(!this.positions||!this.positions.length)&&(this.positions=JD);let e=this._overlayRef=ei(this._injector,this._buildConfig());this._attachSubscription=e.attachments().subscribe(()=>this.attach.emit()),this._detachSubscription=e.detachments().subscribe(()=>this.detach.emit()),e.keydownEvents().subscribe(t=>{this.overlayKeydown.next(t),t.keyCode===27&&!this.disableClose&&!ut(t)&&(t.preventDefault(),this.detachOverlay())}),this._overlayRef.outsidePointerEvents().subscribe(t=>{let r=this._getOriginElement(),a=Lt(t);(!r||r!==a&&!r.contains(a))&&this.overlayOutsideClick.next(t)})}_buildConfig(){let e=this._position=this.positionStrategy||this._createPositionStrategy(),t=new Jn({direction:this._dir||"ltr",positionStrategy:e,scrollStrategy:this.scrollStrategy,hasBackdrop:this.hasBackdrop,disposeOnNavigation:this.disposeOnNavigation,usePopover:!!this.usePopover});return(this.height||this.height===0)&&(t.height=this.height),(this.minWidth||this.minWidth===0)&&(t.minWidth=this.minWidth),(this.minHeight||this.minHeight===0)&&(t.minHeight=this.minHeight),this.backdropClass&&(t.backdropClass=this.backdropClass),this.panelClass&&(t.panelClass=this.panelClass),t}_updatePositionStrategy(e){let t=this.positions.map(r=>({originX:r.originX,originY:r.originY,overlayX:r.overlayX,overlayY:r.overlayY,offsetX:r.offsetX||this.offsetX,offsetY:r.offsetY||this.offsetY,panelClass:r.panelClass||void 0}));return e.setOrigin(this._getOrigin()).withPositions(t).withFlexibleDimensions(this.flexibleDimensions).withPush(this.push).withGrowAfterOpen(this.growAfterOpen).withViewportMargin(this.viewportMargin).withLockedPosition(this.lockPosition).withTransformOriginOn(this.transformOriginSelector).withPopoverLocation(this.usePopover===null?"global":this.usePopover)}_createPositionStrategy(){let e=ya(this._injector,this._getOrigin());return this._updatePositionStrategy(e),e}_getOrigin(){return this.origin instanceof uo?this.origin.elementRef:this.origin}_getOriginElement(){return this.origin instanceof uo?this.origin.elementRef.nativeElement:this.origin instanceof U?this.origin.nativeElement:typeof Element<"u"&&this.origin instanceof Element?this.origin:null}_getWidth(){return this.width?this.width:this.matchWidth?this._getOriginElement()?.getBoundingClientRect?.().width:void 0}attachOverlay(){this._overlayRef||this._createOverlay();let e=this._overlayRef;e.getConfig().hasBackdrop=this.hasBackdrop,e.updateSize({width:this._getWidth()}),e.hasAttached()||e.attach(this._templatePortal),this.hasBackdrop?this._backdropSubscription=e.backdropClick().subscribe(t=>this.backdropClick.emit(t)):this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this.positionChange.observers.length>0&&(this._positionSubscription=this._position.positionChanges.pipe(Ph(()=>this.positionChange.observers.length>0)).subscribe(t=>{this._ngZone.run(()=>this.positionChange.emit(t)),this.positionChange.observers.length===0&&this._positionSubscription.unsubscribe()})),this.open=!0}detachOverlay(){this._overlayRef?.detach(),this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this.open=!1}_assignConfig(e){this.origin=e.origin??this.origin,this.positions=e.positions??this.positions,this.positionStrategy=e.positionStrategy??this.positionStrategy,this.offsetX=e.offsetX??this.offsetX,this.offsetY=e.offsetY??this.offsetY,this.width=e.width??this.width,this.height=e.height??this.height,this.minWidth=e.minWidth??this.minWidth,this.minHeight=e.minHeight??this.minHeight,this.backdropClass=e.backdropClass??this.backdropClass,this.panelClass=e.panelClass??this.panelClass,this.viewportMargin=e.viewportMargin??this.viewportMargin,this.scrollStrategy=e.scrollStrategy??this.scrollStrategy,this.disableClose=e.disableClose??this.disableClose,this.transformOriginSelector=e.transformOriginSelector??this.transformOriginSelector,this.hasBackdrop=e.hasBackdrop??this.hasBackdrop,this.lockPosition=e.lockPosition??this.lockPosition,this.flexibleDimensions=e.flexibleDimensions??this.flexibleDimensions,this.growAfterOpen=e.growAfterOpen??this.growAfterOpen,this.push=e.push??this.push,this.disposeOnNavigation=e.disposeOnNavigation??this.disposeOnNavigation,this.usePopover=e.usePopover??this.usePopover,this.matchWidth=e.matchWidth??this.matchWidth}static \u0275fac=function(t){return new(t||n)};static \u0275dir=A({type:n,selectors:[["","cdk-connected-overlay",""],["","connected-overlay",""],["","cdkConnectedOverlay",""]],inputs:{origin:[0,"cdkConnectedOverlayOrigin","origin"],positions:[0,"cdkConnectedOverlayPositions","positions"],positionStrategy:[0,"cdkConnectedOverlayPositionStrategy","positionStrategy"],offsetX:[0,"cdkConnectedOverlayOffsetX","offsetX"],offsetY:[0,"cdkConnectedOverlayOffsetY","offsetY"],width:[0,"cdkConnectedOverlayWidth","width"],height:[0,"cdkConnectedOverlayHeight","height"],minWidth:[0,"cdkConnectedOverlayMinWidth","minWidth"],minHeight:[0,"cdkConnectedOverlayMinHeight","minHeight"],backdropClass:[0,"cdkConnectedOverlayBackdropClass","backdropClass"],panelClass:[0,"cdkConnectedOverlayPanelClass","panelClass"],viewportMargin:[0,"cdkConnectedOverlayViewportMargin","viewportMargin"],scrollStrategy:[0,"cdkConnectedOverlayScrollStrategy","scrollStrategy"],open:[0,"cdkConnectedOverlayOpen","open"],disableClose:[0,"cdkConnectedOverlayDisableClose","disableClose"],transformOriginSelector:[0,"cdkConnectedOverlayTransformOriginOn","transformOriginSelector"],hasBackdrop:[2,"cdkConnectedOverlayHasBackdrop","hasBackdrop",Z],lockPosition:[2,"cdkConnectedOverlayLockPosition","lockPosition",Z],flexibleDimensions:[2,"cdkConnectedOverlayFlexibleDimensions","flexibleDimensions",Z],growAfterOpen:[2,"cdkConnectedOverlayGrowAfterOpen","growAfterOpen",Z],push:[2,"cdkConnectedOverlayPush","push",Z],disposeOnNavigation:[2,"cdkConnectedOverlayDisposeOnNavigation","disposeOnNavigation",Z],usePopover:[0,"cdkConnectedOverlayUsePopover","usePopover"],matchWidth:[2,"cdkConnectedOverlayMatchWidth","matchWidth",Z],_config:[0,"cdkConnectedOverlay","_config"]},outputs:{backdropClick:"backdropClick",positionChange:"positionChange",attach:"attach",detach:"detach",overlayKeydown:"overlayKeydown",overlayOutsideClick:"overlayOutsideClick"},exportAs:["cdkConnectedOverlay"],features:[Ue]})}return n})(),ti=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=q({type:n});static \u0275inj=Y({providers:[W_],imports:[Ve,Qn,Rs,Rs]})}return n})();function tw(n,i){if(n&1){let e=De();d(0,"div",1)(1,"button",2),R("click",function(){ee(e);let r=D();return te(r.action())}),h(2),u()()}if(n&2){let e=D();p(2),oe(" ",e.data.action," ")}}var nw=["label"];function iw(n,i){}var rw=Math.pow(2,31)-1,Fs=class{_overlayRef;instance;containerInstance;_afterDismissed=new P;_afterOpened=new P;_onAction=new P;_durationTimeoutId;_dismissedByAction=!1;constructor(i,e){this._overlayRef=e,this.containerInstance=i,i._onExit.subscribe(()=>this._finishDismiss())}dismiss(){this._afterDismissed.closed||this.containerInstance.exit(),clearTimeout(this._durationTimeoutId)}dismissWithAction(){this._onAction.closed||(this._dismissedByAction=!0,this._onAction.next(),this._onAction.complete(),this.dismiss()),clearTimeout(this._durationTimeoutId)}closeWithAction(){this.dismissWithAction()}_dismissAfter(i){this._durationTimeoutId=setTimeout(()=>this.dismiss(),Math.min(i,rw))}_open(){this._afterOpened.closed||(this._afterOpened.next(),this._afterOpened.complete())}_finishDismiss(){this._overlayRef.dispose(),this._onAction.closed||this._onAction.complete(),this._afterDismissed.next({dismissedByAction:this._dismissedByAction}),this._afterDismissed.complete(),this._dismissedByAction=!1}afterDismissed(){return this._afterDismissed}afterOpened(){return this.containerInstance._onEnter}onAction(){return this._onAction}},q_=new S("MatSnackBarData"),mo=class{politeness="polite";announcementMessage="";viewContainerRef;duration=0;panelClass;direction;data=null;horizontalPosition="center";verticalPosition="bottom"},aw=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=A({type:n,selectors:[["","matSnackBarLabel",""]],hostAttrs:[1,"mat-mdc-snack-bar-label","mdc-snackbar__label"]})}return n})(),ow=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=A({type:n,selectors:[["","matSnackBarActions",""]],hostAttrs:[1,"mat-mdc-snack-bar-actions","mdc-snackbar__actions"]})}return n})(),sw=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=A({type:n,selectors:[["","matSnackBarAction",""]],hostAttrs:[1,"mat-mdc-snack-bar-action","mdc-snackbar__action"]})}return n})(),Z_=(()=>{class n{snackBarRef=l(Fs);data=l(q_);constructor(){}action(){this.snackBarRef.dismissWithAction()}get hasAction(){return!!this.data.action}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=N({type:n,selectors:[["simple-snack-bar"]],hostAttrs:[1,"mat-mdc-simple-snack-bar"],exportAs:["matSnackBar"],decls:3,vars:2,consts:[["matSnackBarLabel",""],["matSnackBarActions",""],["matButton","","matSnackBarAction","",3,"click"]],template:function(t,r){t&1&&(d(0,"div",0),h(1),u(),ke(2,tw,3,1,"div",1)),t&2&&(p(),oe(" ",r.data.message,`
`),p(),Te(r.hasAction?2:-1))},dependencies:[mt,aw,ow,sw],styles:[`.mat-mdc-simple-snack-bar {
  display: flex;
}
.mat-mdc-simple-snack-bar .mat-mdc-snack-bar-label {
  max-height: 50vh;
  overflow: auto;
}
`],encapsulation:2,changeDetection:0})}return n})(),Im="_mat-snack-bar-enter",Fm="_mat-snack-bar-exit",lw=(()=>{class n extends pr{_ngZone=l(de);_elementRef=l(U);_changeDetectorRef=l(Ee);_platform=l(xe);_animationsDisabled=st();snackBarConfig=l(mo);_document=l(X);_trackedModals=new Set;_enterFallback;_exitFallback;_injector=l(ce);_announceDelay=150;_announceTimeoutId;_destroyed=!1;_portalOutlet;_onAnnounce=new P;_onExit=new P;_onEnter=new P;_animationState="void";_live;_label;_role;_liveElementId=l(et).getId("mat-snack-bar-container-live-");constructor(){super();let e=this.snackBarConfig;e.politeness==="assertive"&&!e.announcementMessage?this._live="assertive":e.politeness==="off"?this._live="off":this._live="polite",this._platform.FIREFOX&&(this._live==="polite"&&(this._role="status"),this._live==="assertive"&&(this._role="alert"))}attachComponentPortal(e){this._assertNotAttached();let t=this._portalOutlet.attachComponentPortal(e);return this._afterPortalAttached(),t}attachTemplatePortal(e){this._assertNotAttached();let t=this._portalOutlet.attachTemplatePortal(e);return this._afterPortalAttached(),t}attachDomPortal=e=>{this._assertNotAttached();let t=this._portalOutlet.attachDomPortal(e);return this._afterPortalAttached(),t};onAnimationEnd(e){e===Fm?this._completeExit():e===Im&&(clearTimeout(this._enterFallback),this._ngZone.run(()=>{this._onEnter.next(),this._onEnter.complete()}))}enter(){this._destroyed||(this._animationState="visible",this._changeDetectorRef.markForCheck(),this._changeDetectorRef.detectChanges(),this._screenReaderAnnounce(),this._animationsDisabled?at(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(Im)))},{injector:this._injector}):(clearTimeout(this._enterFallback),this._enterFallback=setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-snack-bar-fallback-visible"),this.onAnimationEnd(Im)},200)))}exit(){return this._destroyed?Q(void 0):(this._ngZone.run(()=>{this._animationState="hidden",this._changeDetectorRef.markForCheck(),this._elementRef.nativeElement.setAttribute("mat-exit",""),clearTimeout(this._announceTimeoutId),this._animationsDisabled?at(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(Fm)))},{injector:this._injector}):(clearTimeout(this._exitFallback),this._exitFallback=setTimeout(()=>this.onAnimationEnd(Fm),200))}),this._onExit)}ngOnDestroy(){this._destroyed=!0,this._clearFromModals(),this._completeExit()}_completeExit(){clearTimeout(this._exitFallback),queueMicrotask(()=>{this._onExit.next(),this._onExit.complete()})}_afterPortalAttached(){let e=this._elementRef.nativeElement,t=this.snackBarConfig.panelClass;t&&(Array.isArray(t)?t.forEach(o=>e.classList.add(o)):e.classList.add(t)),this._exposeToModals();let r=this._label.nativeElement,a="mdc-snackbar__label";r.classList.toggle(a,!r.querySelector(`.${a}`))}_exposeToModals(){let e=this._liveElementId,t=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let r=0;r<t.length;r++){let a=t[r],o=a.getAttribute("aria-owns");this._trackedModals.add(a),o?o.indexOf(e)===-1&&a.setAttribute("aria-owns",o+" "+e):a.setAttribute("aria-owns",e)}}_clearFromModals(){this._trackedModals.forEach(e=>{let t=e.getAttribute("aria-owns");if(t){let r=t.replace(this._liveElementId,"").trim();r.length>0?e.setAttribute("aria-owns",r):e.removeAttribute("aria-owns")}}),this._trackedModals.clear()}_assertNotAttached(){this._portalOutlet.hasAttached()}_screenReaderAnnounce(){this._announceTimeoutId||this._ngZone.runOutsideAngular(()=>{this._announceTimeoutId=setTimeout(()=>{if(this._destroyed)return;let e=this._elementRef.nativeElement,t=e.querySelector("[aria-hidden]"),r=e.querySelector("[aria-live]");if(t&&r){let a=null;this._platform.isBrowser&&document.activeElement instanceof HTMLElement&&t.contains(document.activeElement)&&(a=document.activeElement),t.removeAttribute("aria-hidden"),r.appendChild(t),a?.focus(),this._onAnnounce.next(),this._onAnnounce.complete()}},this._announceDelay)})}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=N({type:n,selectors:[["mat-snack-bar-container"]],viewQuery:function(t,r){if(t&1&&ot(Xn,7)(nw,7),t&2){let a;re(a=ae())&&(r._portalOutlet=a.first),re(a=ae())&&(r._label=a.first)}},hostAttrs:[1,"mdc-snackbar","mat-mdc-snack-bar-container"],hostVars:6,hostBindings:function(t,r){t&1&&R("animationend",function(o){return r.onAnimationEnd(o.animationName)})("animationcancel",function(o){return r.onAnimationEnd(o.animationName)}),t&2&&J("mat-snack-bar-container-enter",r._animationState==="visible")("mat-snack-bar-container-exit",r._animationState==="hidden")("mat-snack-bar-container-animations-enabled",!r._animationsDisabled)},features:[_e],decls:6,vars:3,consts:[["label",""],[1,"mdc-snackbar__surface","mat-mdc-snackbar-surface"],[1,"mat-mdc-snack-bar-label"],["aria-hidden","true"],["cdkPortalOutlet",""]],template:function(t,r){t&1&&(d(0,"div",1)(1,"div",2,0)(3,"div",3),L(4,iw,0,0,"ng-template",4),u(),T(5,"div"),u()()),t&2&&(p(5),pe("aria-live",r._live)("role",r._role)("id",r._liveElementId))},dependencies:[Xn],styles:[`@keyframes _mat-snack-bar-enter {
  from {
    transform: scale(0.8);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
@keyframes _mat-snack-bar-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-snack-bar-container {
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  margin: 8px;
}
.mat-mdc-snack-bar-handset .mat-mdc-snack-bar-container {
  width: 100vw;
}

.mat-snack-bar-container-animations-enabled {
  opacity: 0;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-fallback-visible {
  opacity: 1;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-container-enter {
  animation: _mat-snack-bar-enter 150ms cubic-bezier(0, 0, 0.2, 1) forwards;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-container-exit {
  animation: _mat-snack-bar-exit 75ms cubic-bezier(0.4, 0, 1, 1) forwards;
}

.mat-mdc-snackbar-surface {
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
  padding-left: 0;
  padding-right: 8px;
}
[dir=rtl] .mat-mdc-snackbar-surface {
  padding-right: 0;
  padding-left: 8px;
}
.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface {
  min-width: 344px;
  max-width: 672px;
}
.mat-mdc-snack-bar-handset .mat-mdc-snackbar-surface {
  width: 100%;
  min-width: 0;
}
@media (forced-colors: active) {
  .mat-mdc-snackbar-surface {
    outline: solid 1px;
  }
}
.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface {
  color: var(--mat-snack-bar-supporting-text-color, var(--mat-sys-inverse-on-surface));
  border-radius: var(--mat-snack-bar-container-shape, var(--mat-sys-corner-extra-small));
  background-color: var(--mat-snack-bar-container-color, var(--mat-sys-inverse-surface));
}

.mdc-snackbar__label {
  width: 100%;
  flex-grow: 1;
  box-sizing: border-box;
  margin: 0;
  padding: 14px 8px 14px 16px;
}
[dir=rtl] .mdc-snackbar__label {
  padding-left: 8px;
  padding-right: 16px;
}
.mat-mdc-snack-bar-container .mdc-snackbar__label {
  font-family: var(--mat-snack-bar-supporting-text-font, var(--mat-sys-body-medium-font));
  font-size: var(--mat-snack-bar-supporting-text-size, var(--mat-sys-body-medium-size));
  font-weight: var(--mat-snack-bar-supporting-text-weight, var(--mat-sys-body-medium-weight));
  line-height: var(--mat-snack-bar-supporting-text-line-height, var(--mat-sys-body-medium-line-height));
}

.mat-mdc-snack-bar-actions {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  box-sizing: border-box;
}

.mat-mdc-snack-bar-handset,
.mat-mdc-snack-bar-container,
.mat-mdc-snack-bar-label {
  flex: 1 1 auto;
}

.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled).mat-unthemed {
  color: var(--mat-snack-bar-button-color, var(--mat-sys-inverse-primary));
}
.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) {
  --mat-button-text-state-layer-color: currentColor;
  --mat-button-text-ripple-color: currentColor;
}
.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) .mat-ripple-element {
  opacity: 0.1;
}
`],encapsulation:2})}return n})(),cw=new S("mat-snack-bar-default-options",{providedIn:"root",factory:()=>new mo}),un=(()=>{class n{_live=l(Cs);_injector=l(ce);_breakpointObserver=l(ys);_parentSnackBar=l(n,{optional:!0,skipSelf:!0});_defaultConfig=l(cw);_animationsDisabled=st();_snackBarRefAtThisLevel=null;simpleSnackBarComponent=Z_;snackBarContainerComponent=lw;handsetCssClass="mat-mdc-snack-bar-handset";get _openedSnackBarRef(){let e=this._parentSnackBar;return e?e._openedSnackBarRef:this._snackBarRefAtThisLevel}set _openedSnackBarRef(e){this._parentSnackBar?this._parentSnackBar._openedSnackBarRef=e:this._snackBarRefAtThisLevel=e}constructor(){}openFromComponent(e,t){return this._attach(e,t)}openFromTemplate(e,t){return this._attach(e,t)}open(e,t="",r){let a=x(x({},this._defaultConfig),r);return a.data={message:e,action:t},a.announcementMessage===e&&(a.announcementMessage=void 0),this.openFromComponent(this.simpleSnackBarComponent,a)}dismiss(){this._openedSnackBarRef&&this._openedSnackBarRef.dismiss()}ngOnDestroy(){this._snackBarRefAtThisLevel&&this._snackBarRefAtThisLevel.dismiss()}_attachSnackBarContainer(e,t){let r=t&&t.viewContainerRef&&t.viewContainerRef.injector,a=ce.create({parent:r||this._injector,providers:[{provide:mo,useValue:t}]}),o=new tn(this.snackBarContainerComponent,t.viewContainerRef,a),s=e.attach(o);return s.instance.snackBarConfig=t,s.instance}_attach(e,t){let r=x(x(x({},new mo),this._defaultConfig),t),a=this._createOverlay(r),o=this._attachSnackBarContainer(a,r),s=new Fs(o,a);if(e instanceof pt){let c=new Di(e,null,{$implicit:r.data,snackBarRef:s});s.instance=o.attachTemplatePortal(c)}else{let c=this._createInjector(r,s),m=new tn(e,void 0,c),f=o.attachComponentPortal(m);s.instance=f.instance}return this._breakpointObserver.observe(o_.HandsetPortrait).pipe(Be(a.detachments())).subscribe(c=>{a.overlayElement.classList.toggle(this.handsetCssClass,c.matches)}),r.announcementMessage&&o._onAnnounce.subscribe(()=>{this._live.announce(r.announcementMessage,r.politeness)}),this._animateSnackBar(s,r),this._openedSnackBarRef=s,this._openedSnackBarRef}_animateSnackBar(e,t){e.afterDismissed().subscribe(()=>{this._openedSnackBarRef==e&&(this._openedSnackBarRef=null),t.announcementMessage&&this._live.clear()}),t.duration&&t.duration>0&&e.afterOpened().subscribe(()=>e._dismissAfter(t.duration)),this._openedSnackBarRef?(this._openedSnackBarRef.afterDismissed().subscribe(()=>{e.containerInstance.enter()}),this._openedSnackBarRef.dismiss()):e.containerInstance.enter()}_createOverlay(e){let t=new Jn;t.direction=e.direction;let r=Ei(this._injector),a=e.direction==="rtl",o=e.horizontalPosition==="left"||e.horizontalPosition==="start"&&!a||e.horizontalPosition==="end"&&a,s=!o&&e.horizontalPosition!=="center";return o?r.left("0"):s?r.right("0"):r.centerHorizontally(),e.verticalPosition==="top"?r.top("0"):r.bottom("0"),t.positionStrategy=r,t.disableAnimations=this._animationsDisabled,ei(this._injector,t)}_createInjector(e,t){let r=e&&e.viewContainerRef&&e.viewContainerRef.injector;return ce.create({parent:r||this._injector,providers:[{provide:Fs,useValue:t},{provide:q_,useValue:e.data}]})}static \u0275fac=function(t){return new(t||n)};static \u0275prov=w({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var On=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=q({type:n});static \u0275inj=Y({providers:[un],imports:[ti,Qn,ft,Z_,Ve]})}return n})();var xi={production:!1,apiUrl:"http://localhost:8080/api"};var Dt=class n{constructor(i){this.http=i;console.log("\u{1F310} API URL:",this.apiUrl)}apiUrl=xi.apiUrl;tokenKey="auth_token";register(i){return this.http.post(`${this.apiUrl}/auth/register`,i)}login(i){return this.http.post(`${this.apiUrl}/auth/login`,i).pipe(wt(e=>{console.log("Login response:",e),e.token&&(this.setToken(e.token),console.log("Token guardado:",e.token))}))}logout(){localStorage.removeItem(this.tokenKey)}setToken(i){localStorage.setItem(this.tokenKey,i)}getToken(){return localStorage.getItem(this.tokenKey)}isAuthenticated(){return this.isTokenValid()}isTokenValid(){let i=this.getToken();if(!i)return!1;let e=i.split(".");if(e.length!==3)return!1;try{let r=JSON.parse(atob(e[1])).exp;if(r&&Date.now()>=r*1e3)return this.logout(),!1}catch{return this.logout(),!1}return!0}static \u0275fac=function(e){return new(e||n)(G(Xt))};static \u0275prov=w({token:n,factory:n.\u0275fac,providedIn:"root"})};function dw(n,i){n&1&&(d(0,"mat-error"),h(1,"Email es obligatorio"),u())}function uw(n,i){n&1&&(d(0,"mat-error"),h(1,"Email inv\xE1lido"),u())}var Uc=class n{constructor(i,e,t,r){this.fb=i;this.authService=e;this.router=t;this.snackBar=r;this.loginForm=this.fb.group({email:["",[Ie.required,Ie.email]],password:["",Ie.required]})}loginForm;loading=!1;onSubmit(){this.loginForm.invalid||(this.loading=!0,this.authService.login(this.loginForm.value).subscribe({next:()=>{this.router.navigate(["/clientes"]),this.snackBar.open("Login exitoso","Cerrar",{duration:3e3})},error:i=>{this.snackBar.open("Error: "+(i.error?.message||"Credenciales inv\xE1lidas"),"Cerrar",{duration:5e3}),this.loading=!1}}))}static \u0275fac=function(e){return new(e||n)(k(xn),k(Dt),k(Ct),k(un))};static \u0275cmp=N({type:n,selectors:[["app-login"]],decls:25,vars:5,consts:[[1,"login-container"],[3,"ngSubmit","formGroup"],["appearance","outline",1,"full-width"],["matInput","","type","email","formControlName","email"],[4,"ngIf"],["matInput","","type","password","formControlName","password"],["mat-raised-button","","color","primary","type","submit",1,"full-width",3,"disabled"],["routerLink","/register"]],template:function(e,t){if(e&1&&(d(0,"div",0)(1,"mat-card")(2,"mat-card-title"),h(3,"LexTiming"),u(),d(4,"mat-card-subtitle"),h(5,"Iniciar Sesi\xF3n"),u(),d(6,"mat-card-content")(7,"form",1),R("ngSubmit",function(){return t.onSubmit()}),d(8,"mat-form-field",2)(9,"mat-label"),h(10,"Email"),u(),T(11,"input",3),L(12,dw,2,0,"mat-error",4)(13,uw,2,0,"mat-error",4),u(),d(14,"mat-form-field",2)(15,"mat-label"),h(16,"Contrase\xF1a"),u(),T(17,"input",5),d(18,"mat-error"),h(19,"Contrase\xF1a es obligatoria"),u()(),d(20,"button",6),h(21),u()()(),d(22,"mat-card-actions")(23,"a",7),h(24,"\xBFNo ten\xE9s cuenta? Registrate"),u()()()()),e&2){let r,a;p(7),_("formGroup",t.loginForm),p(5),_("ngIf",(r=t.loginForm.get("email"))==null?null:r.hasError("required")),p(),_("ngIf",(a=t.loginForm.get("email"))==null?null:a.hasError("email")),p(7),_("disabled",t.loading||t.loginForm.invalid),p(),oe(" ",t.loading?"Cargando...":"Ingresar"," ")}},dependencies:[yt,Yt,qt,cr,Sn,En,zt,Qt,wn,Ft,ln,Tn,Mn,kn,Rn,mr,An,Mt,Ut,Vt,dn,en,Jt,ft,mt,On],styles:[".login-container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;height:100vh;background:linear-gradient(135deg,#1e3c72,#2a5298)}mat-card[_ngcontent-%COMP%]{width:100%;max-width:400px;padding:20px;border-radius:10px}mat-card-title[_ngcontent-%COMP%]{font-size:24px;text-align:center;margin-bottom:8px}mat-card-subtitle[_ngcontent-%COMP%]{text-align:center;margin-bottom:20px}.full-width[_ngcontent-%COMP%]{width:100%;margin-bottom:16px}mat-card-actions[_ngcontent-%COMP%]{text-align:center;padding:16px}a[_ngcontent-%COMP%]{text-decoration:none;color:#2a5298}a[_ngcontent-%COMP%]:hover{text-decoration:underline}"]})};function mw(n,i){n&1&&(d(0,"mat-error"),h(1,"Email es obligatorio"),u())}function hw(n,i){n&1&&(d(0,"mat-error"),h(1,"Email inv\xE1lido"),u())}function fw(n,i){n&1&&(d(0,"mat-error"),h(1,"Contrase\xF1a es obligatoria"),u())}function pw(n,i){n&1&&(d(0,"mat-error"),h(1,"M\xEDnimo 6 caracteres"),u())}var Hc=class n{constructor(i,e,t,r){this.fb=i;this.authService=e;this.router=t;this.snackBar=r;this.registerForm=this.fb.group({firstName:["",Ie.required],lastName:["",Ie.required],email:["",[Ie.required,Ie.email]],password:["",[Ie.required,Ie.minLength(6)]],barNumber:["",Ie.required],phone:[""],lawFirm:[""]})}registerForm;loading=!1;onSubmit(){this.registerForm.invalid||(this.loading=!0,this.authService.register(this.registerForm.value).subscribe({next:()=>{this.snackBar.open("Registro exitoso. Ya pod\xE9s iniciar sesi\xF3n","Cerrar",{duration:3e3}),this.router.navigate(["/login"])},error:i=>{this.snackBar.open("Error: "+(i.error?.message||"Error en el registro"),"Cerrar",{duration:5e3}),this.loading=!1}}))}static \u0275fac=function(e){return new(e||n)(k(xn),k(Dt),k(Ct),k(un))};static \u0275cmp=N({type:n,selectors:[["app-register"]],decls:52,vars:7,consts:[[1,"register-container"],[3,"ngSubmit","formGroup"],[1,"row"],["appearance","outline",1,"half-width"],["matInput","","formControlName","firstName"],["matInput","","formControlName","lastName"],["appearance","outline",1,"full-width"],["matInput","","type","email","formControlName","email"],[4,"ngIf"],["matInput","","type","password","formControlName","password"],["matInput","","formControlName","barNumber"],["matInput","","formControlName","phone"],["matInput","","formControlName","lawFirm"],["mat-raised-button","","color","primary","type","submit",1,"full-width",3,"disabled"],["routerLink","/login"]],template:function(e,t){if(e&1&&(d(0,"div",0)(1,"mat-card")(2,"mat-card-title"),h(3,"LexTiming"),u(),d(4,"mat-card-subtitle"),h(5,"Registro de Abogado"),u(),d(6,"mat-card-content")(7,"form",1),R("ngSubmit",function(){return t.onSubmit()}),d(8,"div",2)(9,"mat-form-field",3)(10,"mat-label"),h(11,"Nombre"),u(),T(12,"input",4),d(13,"mat-error"),h(14,"Nombre es obligatorio"),u()(),d(15,"mat-form-field",3)(16,"mat-label"),h(17,"Apellido"),u(),T(18,"input",5),d(19,"mat-error"),h(20,"Apellido es obligatorio"),u()()(),d(21,"mat-form-field",6)(22,"mat-label"),h(23,"Email"),u(),T(24,"input",7),L(25,mw,2,0,"mat-error",8)(26,hw,2,0,"mat-error",8),u(),d(27,"mat-form-field",6)(28,"mat-label"),h(29,"Contrase\xF1a"),u(),T(30,"input",9),L(31,fw,2,0,"mat-error",8)(32,pw,2,0,"mat-error",8),u(),d(33,"mat-form-field",6)(34,"mat-label"),h(35,"Matr\xEDcula"),u(),T(36,"input",10),d(37,"mat-error"),h(38,"Matr\xEDcula es obligatoria"),u()(),d(39,"mat-form-field",6)(40,"mat-label"),h(41,"Tel\xE9fono"),u(),T(42,"input",11),u(),d(43,"mat-form-field",6)(44,"mat-label"),h(45,"Estudio Jur\xEDdico"),u(),T(46,"input",12),u(),d(47,"button",13),h(48),u()()(),d(49,"mat-card-actions")(50,"a",14),h(51,"\xBFYa ten\xE9s cuenta? Inici\xE1 sesi\xF3n"),u()()()()),e&2){let r,a,o,s;p(7),_("formGroup",t.registerForm),p(18),_("ngIf",(r=t.registerForm.get("email"))==null?null:r.hasError("required")),p(),_("ngIf",(a=t.registerForm.get("email"))==null?null:a.hasError("email")),p(5),_("ngIf",(o=t.registerForm.get("password"))==null?null:o.hasError("required")),p(),_("ngIf",(s=t.registerForm.get("password"))==null?null:s.hasError("minlength")),p(15),_("disabled",t.loading||t.registerForm.invalid),p(),oe(" ",t.loading?"Cargando...":"Registrarse"," ")}},dependencies:[yt,Yt,qt,cr,Sn,En,zt,Qt,wn,Ft,ln,Tn,Mn,kn,Rn,mr,An,Mt,Ut,Vt,dn,en,Jt,ft,mt,On],styles:[".register-container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;min-height:100vh;background:linear-gradient(135deg,#1e3c72,#2a5298);padding:20px}mat-card[_ngcontent-%COMP%]{width:100%;max-width:600px;padding:20px;border-radius:10px}mat-card-title[_ngcontent-%COMP%]{font-size:24px;text-align:center;margin-bottom:8px}mat-card-subtitle[_ngcontent-%COMP%]{text-align:center;margin-bottom:20px}.full-width[_ngcontent-%COMP%]{width:100%;margin-bottom:16px}.half-width[_ngcontent-%COMP%]{width:calc(50% - 8px)}.row[_ngcontent-%COMP%]{display:flex;gap:16px;margin-bottom:8px}mat-card-actions[_ngcontent-%COMP%]{text-align:center;padding:16px}a[_ngcontent-%COMP%]{text-decoration:none;color:#2a5298}a[_ngcontent-%COMP%]:hover{text-decoration:underline}"]})};var $c=class{applyChanges(i,e,t,r,a){i.forEachOperation((o,s,c)=>{let m,f;if(o.previousIndex==null){let g=t(o,s,c);m=e.createEmbeddedView(g.templateRef,g.context,g.index),f=Kn.INSERTED}else c==null?(e.remove(s),f=Kn.REMOVED):(m=e.get(s),e.move(m,c),f=Kn.MOVED);a&&a({context:m?.context,operation:f,record:o})})}detach(){}};var gw=[[["caption"]],[["colgroup"],["col"]],"*"],_w=["caption","colgroup, col","*"];function vw(n,i){n&1&&ve(0,2)}function bw(n,i){n&1&&(d(0,"thead",0),Tt(1,1),u(),d(2,"tbody",0),Tt(3,2)(4,3),u(),d(5,"tfoot",0),Tt(6,4),u())}function yw(n,i){n&1&&Tt(0,1)(1,2)(2,3)(3,4)}var ni=new S("CDK_TABLE");var Yc=(()=>{class n{template=l(pt);constructor(){}static \u0275fac=function(t){return new(t||n)};static \u0275dir=A({type:n,selectors:[["","cdkCellDef",""]]})}return n})(),qc=(()=>{class n{template=l(pt);constructor(){}static \u0275fac=function(t){return new(t||n)};static \u0275dir=A({type:n,selectors:[["","cdkHeaderCellDef",""]]})}return n})(),Q_=(()=>{class n{template=l(pt);constructor(){}static \u0275fac=function(t){return new(t||n)};static \u0275dir=A({type:n,selectors:[["","cdkFooterCellDef",""]]})}return n})(),fo=(()=>{class n{_table=l(ni,{optional:!0});_hasStickyChanged=!1;get name(){return this._name}set name(e){this._setNameInput(e)}_name;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}_sticky=!1;get stickyEnd(){return this._stickyEnd}set stickyEnd(e){e!==this._stickyEnd&&(this._stickyEnd=e,this._hasStickyChanged=!0)}_stickyEnd=!1;cell;headerCell;footerCell;cssClassFriendlyName;_columnCssClassName;constructor(){}hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}_updateColumnCssClassName(){this._columnCssClassName=[`cdk-column-${this.cssClassFriendlyName}`]}_setNameInput(e){e&&(this._name=e,this.cssClassFriendlyName=e.replace(/[^a-z0-9_-]/gi,"-"),this._updateColumnCssClassName())}static \u0275fac=function(t){return new(t||n)};static \u0275dir=A({type:n,selectors:[["","cdkColumnDef",""]],contentQueries:function(t,r,a){if(t&1&&gn(a,Yc,5)(a,qc,5)(a,Q_,5),t&2){let o;re(o=ae())&&(r.cell=o.first),re(o=ae())&&(r.headerCell=o.first),re(o=ae())&&(r.footerCell=o.first)}},inputs:{name:[0,"cdkColumnDef","name"],sticky:[2,"sticky","sticky",Z],stickyEnd:[2,"stickyEnd","stickyEnd",Z]}})}return n})(),Wc=class{constructor(i,e){e.nativeElement.classList.add(...i._columnCssClassName)}},J_=(()=>{class n extends Wc{constructor(){super(l(fo),l(U))}static \u0275fac=function(t){return new(t||n)};static \u0275dir=A({type:n,selectors:[["cdk-header-cell"],["th","cdk-header-cell",""]],hostAttrs:["role","columnheader",1,"cdk-header-cell"],features:[_e]})}return n})();var ev=(()=>{class n extends Wc{constructor(){let e=l(fo),t=l(U);super(e,t);let r=e._table?._getCellRole();r&&t.nativeElement.setAttribute("role",r)}static \u0275fac=function(t){return new(t||n)};static \u0275dir=A({type:n,selectors:[["cdk-cell"],["td","cdk-cell",""]],hostAttrs:[1,"cdk-cell"],features:[_e]})}return n})();var Pm=(()=>{class n{template=l(pt);_differs=l(Fi);columns;_columnsDiffer;constructor(){}ngOnChanges(e){if(!this._columnsDiffer){let t=e.columns&&e.columns.currentValue||[];this._columnsDiffer=this._differs.find(t).create(),this._columnsDiffer.diff(t)}}getColumnsDiff(){return this._columnsDiffer.diff(this.columns)}extractCellTemplate(e){return this instanceof Ps?e.headerCell.template:this instanceof Nm?e.footerCell.template:e.cell.template}static \u0275fac=function(t){return new(t||n)};static \u0275dir=A({type:n,features:[Ue]})}return n})(),Ps=(()=>{class n extends Pm{_table=l(ni,{optional:!0});_hasStickyChanged=!1;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}_sticky=!1;constructor(){super(l(pt),l(Fi))}ngOnChanges(e){super.ngOnChanges(e)}hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}static \u0275fac=function(t){return new(t||n)};static \u0275dir=A({type:n,selectors:[["","cdkHeaderRowDef",""]],inputs:{columns:[0,"cdkHeaderRowDef","columns"],sticky:[2,"cdkHeaderRowDefSticky","sticky",Z]},features:[_e,Ue]})}return n})(),Nm=(()=>{class n extends Pm{_table=l(ni,{optional:!0});_hasStickyChanged=!1;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}_sticky=!1;constructor(){super(l(pt),l(Fi))}ngOnChanges(e){super.ngOnChanges(e)}hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}static \u0275fac=function(t){return new(t||n)};static \u0275dir=A({type:n,selectors:[["","cdkFooterRowDef",""]],inputs:{columns:[0,"cdkFooterRowDef","columns"],sticky:[2,"cdkFooterRowDefSticky","sticky",Z]},features:[_e,Ue]})}return n})(),Zc=(()=>{class n extends Pm{_table=l(ni,{optional:!0});when;constructor(){super(l(pt),l(Fi))}static \u0275fac=function(t){return new(t||n)};static \u0275dir=A({type:n,selectors:[["","cdkRowDef",""]],inputs:{columns:[0,"cdkRowDefColumns","columns"],when:[0,"cdkRowDefWhen","when"]},features:[_e]})}return n})(),Ca=(()=>{class n{_viewContainer=l(gt);cells;context;static mostRecentCellOutlet=null;constructor(){n.mostRecentCellOutlet=this}ngOnDestroy(){n.mostRecentCellOutlet===this&&(n.mostRecentCellOutlet=null)}static \u0275fac=function(t){return new(t||n)};static \u0275dir=A({type:n,selectors:[["","cdkCellOutlet",""]]})}return n})(),Lm=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=N({type:n,selectors:[["cdk-header-row"],["tr","cdk-header-row",""]],hostAttrs:["role","row",1,"cdk-header-row"],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(t,r){t&1&&Tt(0,0)},dependencies:[Ca],encapsulation:2})}return n})();var Vm=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=N({type:n,selectors:[["cdk-row"],["tr","cdk-row",""]],hostAttrs:["role","row",1,"cdk-row"],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(t,r){t&1&&Tt(0,0)},dependencies:[Ca],encapsulation:2})}return n})(),tv=(()=>{class n{templateRef=l(pt);_contentClassNames=["cdk-no-data-row","cdk-row"];_cellClassNames=["cdk-cell","cdk-no-data-cell"];_cellSelector="td, cdk-cell, [cdk-cell], .cdk-cell";constructor(){}static \u0275fac=function(t){return new(t||n)};static \u0275dir=A({type:n,selectors:[["ng-template","cdkNoDataRow",""]]})}return n})(),K_=["top","bottom","left","right"],Om=class{_isNativeHtmlTable;_stickCellCss;_isBrowser;_needsPositionStickyOnElement;direction;_positionListener;_tableInjector;_elemSizeCache=new WeakMap;_resizeObserver=globalThis?.ResizeObserver?new globalThis.ResizeObserver(i=>this._updateCachedSizes(i)):null;_updatedStickyColumnsParamsToReplay=[];_stickyColumnsReplayTimeout=null;_cachedCellWidths=[];_borderCellCss;_destroyed=!1;constructor(i,e,t=!0,r=!0,a,o,s){this._isNativeHtmlTable=i,this._stickCellCss=e,this._isBrowser=t,this._needsPositionStickyOnElement=r,this.direction=a,this._positionListener=o,this._tableInjector=s,this._borderCellCss={top:`${e}-border-elem-top`,bottom:`${e}-border-elem-bottom`,left:`${e}-border-elem-left`,right:`${e}-border-elem-right`}}clearStickyPositioning(i,e){(e.includes("left")||e.includes("right"))&&this._removeFromStickyColumnReplayQueue(i);let t=[];for(let r of i)r.nodeType===r.ELEMENT_NODE&&t.push(r,...Array.from(r.children));at({write:()=>{for(let r of t)this._removeStickyStyle(r,e)}},{injector:this._tableInjector})}updateStickyColumns(i,e,t,r=!0,a=!0){if(!i.length||!this._isBrowser||!(e.some(z=>z)||t.some(z=>z))){this._positionListener?.stickyColumnsUpdated({sizes:[]}),this._positionListener?.stickyEndColumnsUpdated({sizes:[]});return}let o=i[0],s=o.children.length,c=this.direction==="rtl",m=c?"right":"left",f=c?"left":"right",g=e.lastIndexOf(!0),E=t.indexOf(!0),M,W,K;a&&this._updateStickyColumnReplayQueue({rows:[...i],stickyStartStates:[...e],stickyEndStates:[...t]}),at({earlyRead:()=>{M=this._getCellWidths(o,r),W=this._getStickyStartColumnPositions(M,e),K=this._getStickyEndColumnPositions(M,t)},write:()=>{for(let z of i)for(let $=0;$<s;$++){let O=z.children[$];e[$]&&this._addStickyStyle(O,m,W[$],$===g),t[$]&&this._addStickyStyle(O,f,K[$],$===E)}this._positionListener&&M.some(z=>!!z)&&(this._positionListener.stickyColumnsUpdated({sizes:g===-1?[]:M.slice(0,g+1).map((z,$)=>e[$]?z:null)}),this._positionListener.stickyEndColumnsUpdated({sizes:E===-1?[]:M.slice(E).map((z,$)=>t[$+E]?z:null).reverse()}))}},{injector:this._tableInjector})}stickRows(i,e,t){if(!this._isBrowser)return;let r=t==="bottom"?i.slice().reverse():i,a=t==="bottom"?e.slice().reverse():e,o=[],s=[],c=[];at({earlyRead:()=>{for(let m=0,f=0;m<r.length;m++){if(!a[m])continue;o[m]=f;let g=r[m];c[m]=this._isNativeHtmlTable?Array.from(g.children):[g];let E=this._retrieveElementSize(g).height;f+=E,s[m]=E}},write:()=>{let m=a.lastIndexOf(!0);for(let f=0;f<r.length;f++){if(!a[f])continue;let g=o[f],E=f===m;for(let M of c[f])this._addStickyStyle(M,t,g,E)}t==="top"?this._positionListener?.stickyHeaderRowsUpdated({sizes:s,offsets:o,elements:c}):this._positionListener?.stickyFooterRowsUpdated({sizes:s,offsets:o,elements:c})}},{injector:this._tableInjector})}updateStickyFooterContainer(i,e){this._isNativeHtmlTable&&at({write:()=>{let t=i.querySelector("tfoot");t&&(e.some(r=>!r)?this._removeStickyStyle(t,["bottom"]):this._addStickyStyle(t,"bottom",0,!1))}},{injector:this._tableInjector})}destroy(){this._stickyColumnsReplayTimeout&&clearTimeout(this._stickyColumnsReplayTimeout),this._resizeObserver?.disconnect(),this._destroyed=!0}_removeStickyStyle(i,e){if(!i.classList.contains(this._stickCellCss))return;for(let r of e)i.style[r]="",i.classList.remove(this._borderCellCss[r]);K_.some(r=>e.indexOf(r)===-1&&i.style[r])?i.style.zIndex=this._getCalculatedZIndex(i):(i.style.zIndex="",this._needsPositionStickyOnElement&&(i.style.position=""),i.classList.remove(this._stickCellCss))}_addStickyStyle(i,e,t,r){i.classList.add(this._stickCellCss),r&&i.classList.add(this._borderCellCss[e]),i.style[e]=`${t}px`,i.style.zIndex=this._getCalculatedZIndex(i),this._needsPositionStickyOnElement&&(i.style.cssText+="position: -webkit-sticky; position: sticky; ")}_getCalculatedZIndex(i){let e={top:100,bottom:10,left:1,right:1},t=0;for(let r of K_)i.style[r]&&(t+=e[r]);return t?`${t}`:""}_getCellWidths(i,e=!0){if(!e&&this._cachedCellWidths.length)return this._cachedCellWidths;let t=[],r=i.children;for(let a=0;a<r.length;a++){let o=r[a];t.push(this._retrieveElementSize(o).width)}return this._cachedCellWidths=t,t}_getStickyStartColumnPositions(i,e){let t=[],r=0;for(let a=0;a<i.length;a++)e[a]&&(t[a]=r,r+=i[a]);return t}_getStickyEndColumnPositions(i,e){let t=[],r=0;for(let a=i.length;a>0;a--)e[a]&&(t[a]=r,r+=i[a]);return t}_retrieveElementSize(i){let e=this._elemSizeCache.get(i);if(e)return e;let t=i.getBoundingClientRect(),r={width:t.width,height:t.height};return this._resizeObserver&&(this._elemSizeCache.set(i,r),this._resizeObserver.observe(i,{box:"border-box"})),r}_updateStickyColumnReplayQueue(i){this._removeFromStickyColumnReplayQueue(i.rows),this._stickyColumnsReplayTimeout||this._updatedStickyColumnsParamsToReplay.push(i)}_removeFromStickyColumnReplayQueue(i){let e=new Set(i);for(let t of this._updatedStickyColumnsParamsToReplay)t.rows=t.rows.filter(r=>!e.has(r));this._updatedStickyColumnsParamsToReplay=this._updatedStickyColumnsParamsToReplay.filter(t=>!!t.rows.length)}_updateCachedSizes(i){let e=!1;for(let t of i){let r=t.borderBoxSize?.length?{width:t.borderBoxSize[0].inlineSize,height:t.borderBoxSize[0].blockSize}:{width:t.contentRect.width,height:t.contentRect.height};r.width!==this._elemSizeCache.get(t.target)?.width&&Cw(t.target)&&(e=!0),this._elemSizeCache.set(t.target,r)}e&&this._updatedStickyColumnsParamsToReplay.length&&(this._stickyColumnsReplayTimeout&&clearTimeout(this._stickyColumnsReplayTimeout),this._stickyColumnsReplayTimeout=setTimeout(()=>{if(!this._destroyed){for(let t of this._updatedStickyColumnsParamsToReplay)this.updateStickyColumns(t.rows,t.stickyStartStates,t.stickyEndStates,!0,!1);this._updatedStickyColumnsParamsToReplay=[],this._stickyColumnsReplayTimeout=null}},0))}};function Cw(n){return["cdk-cell","cdk-header-cell","cdk-footer-cell"].some(i=>n.classList.contains(i))}var Os=new S("STICKY_POSITIONING_LISTENER");var Bm=(()=>{class n{viewContainer=l(gt);elementRef=l(U);constructor(){let e=l(ni);e._rowOutlet=this,e._outletAssigned()}static \u0275fac=function(t){return new(t||n)};static \u0275dir=A({type:n,selectors:[["","rowOutlet",""]]})}return n})(),jm=(()=>{class n{viewContainer=l(gt);elementRef=l(U);constructor(){let e=l(ni);e._headerRowOutlet=this,e._outletAssigned()}static \u0275fac=function(t){return new(t||n)};static \u0275dir=A({type:n,selectors:[["","headerRowOutlet",""]]})}return n})(),zm=(()=>{class n{viewContainer=l(gt);elementRef=l(U);constructor(){let e=l(ni);e._footerRowOutlet=this,e._outletAssigned()}static \u0275fac=function(t){return new(t||n)};static \u0275dir=A({type:n,selectors:[["","footerRowOutlet",""]]})}return n})(),Um=(()=>{class n{viewContainer=l(gt);elementRef=l(U);constructor(){let e=l(ni);e._noDataRowOutlet=this,e._outletAssigned()}static \u0275fac=function(t){return new(t||n)};static \u0275dir=A({type:n,selectors:[["","noDataRowOutlet",""]]})}return n})(),Hm=(()=>{class n{_differs=l(Fi);_changeDetectorRef=l(Ee);_elementRef=l(U);_dir=l(ht,{optional:!0});_platform=l(xe);_viewRepeater;_viewportRuler=l(Ci);_injector=l(ce);_virtualScrollViewport=l(T_,{optional:!0,host:!0});_positionListener=l(Os,{optional:!0})||l(Os,{optional:!0,skipSelf:!0});_document=l(X);_data;_renderedRange;_onDestroy=new P;_renderRows;_renderChangeSubscription=null;_columnDefsByName=new Map;_rowDefs;_headerRowDefs;_footerRowDefs;_dataDiffer;_defaultRowDef=null;_customColumnDefs=new Set;_customRowDefs=new Set;_customHeaderRowDefs=new Set;_customFooterRowDefs=new Set;_customNoDataRow=null;_headerRowDefChanged=!0;_footerRowDefChanged=!0;_stickyColumnStylesNeedReset=!0;_forceRecalculateCellWidths=!0;_cachedRenderRowsMap=new Map;_isNativeHtmlTable;_stickyStyler;stickyCssClass="cdk-table-sticky";needsPositionStickyOnElement=!0;_isServer;_isShowingNoDataRow=!1;_hasAllOutlets=!1;_hasInitialized=!1;_headerRowStickyUpdates=new P;_footerRowStickyUpdates=new P;_disableVirtualScrolling=!1;_getCellRole(){if(this._cellRoleInternal===void 0){let e=this._elementRef.nativeElement.getAttribute("role");return e==="grid"||e==="treegrid"?"gridcell":"cell"}return this._cellRoleInternal}_cellRoleInternal=void 0;get trackBy(){return this._trackByFn}set trackBy(e){this._trackByFn=e}_trackByFn;get dataSource(){return this._dataSource}set dataSource(e){this._dataSource!==e&&(this._switchDataSource(e),this._changeDetectorRef.markForCheck())}_dataSource;_dataSourceChanges=new P;_dataStream=new P;get multiTemplateDataRows(){return this._multiTemplateDataRows}set multiTemplateDataRows(e){this._multiTemplateDataRows=e,this._rowOutlet&&this._rowOutlet.viewContainer.length&&(this._forceRenderDataRows(),this.updateStickyColumnStyles())}_multiTemplateDataRows=!1;get fixedLayout(){return this._virtualScrollEnabled()?!0:this._fixedLayout}set fixedLayout(e){this._fixedLayout=e,this._forceRecalculateCellWidths=!0,this._stickyColumnStylesNeedReset=!0}_fixedLayout=!1;recycleRows=!1;contentChanged=new j;viewChange=new Bt({start:0,end:Number.MAX_VALUE});_rowOutlet;_headerRowOutlet;_footerRowOutlet;_noDataRowOutlet;_contentColumnDefs;_contentRowDefs;_contentHeaderRowDefs;_contentFooterRowDefs;_noDataRow;constructor(){l(new _n("role"),{optional:!0})||this._elementRef.nativeElement.setAttribute("role","table"),this._isServer=!this._platform.isBrowser,this._isNativeHtmlTable=this._elementRef.nativeElement.nodeName==="TABLE",this._dataDiffer=this._differs.find([]).create((t,r)=>this.trackBy?this.trackBy(r.dataIndex,r.data):r)}ngOnInit(){this._setupStickyStyler(),this._viewportRuler.change().pipe(Be(this._onDestroy)).subscribe(()=>{this._forceRecalculateCellWidths=!0})}ngAfterContentInit(){this._viewRepeater=this.recycleRows||this._virtualScrollEnabled()?new Fc:new $c,this._virtualScrollEnabled()&&this._setupVirtualScrolling(this._virtualScrollViewport),this._hasInitialized=!0}ngAfterContentChecked(){this._canRender()&&this._render()}ngOnDestroy(){this._stickyStyler?.destroy(),[this._rowOutlet?.viewContainer,this._headerRowOutlet?.viewContainer,this._footerRowOutlet?.viewContainer,this._cachedRenderRowsMap,this._customColumnDefs,this._customRowDefs,this._customHeaderRowDefs,this._customFooterRowDefs,this._columnDefsByName].forEach(e=>{e?.clear()}),this._headerRowDefs=[],this._footerRowDefs=[],this._defaultRowDef=null,this._headerRowStickyUpdates.complete(),this._footerRowStickyUpdates.complete(),this._onDestroy.next(),this._onDestroy.complete(),Ic(this.dataSource)&&this.dataSource.disconnect(this)}renderRows(){this._renderRows=this._getAllRenderRows();let e=this._dataDiffer.diff(this._renderRows);if(!e){this._updateNoDataRow(),this.contentChanged.next();return}let t=this._rowOutlet.viewContainer;this._viewRepeater.applyChanges(e,t,(r,a,o)=>this._getEmbeddedViewArgs(r.item,o),r=>r.item.data,r=>{r.operation===Kn.INSERTED&&r.context&&this._renderCellTemplateForItem(r.record.item.rowDef,r.context)}),this._updateRowIndexContext(),e.forEachIdentityChange(r=>{let a=t.get(r.currentIndex);a.context.$implicit=r.item.data}),this._updateNoDataRow(),this.contentChanged.next(),this.updateStickyColumnStyles()}addColumnDef(e){this._customColumnDefs.add(e)}removeColumnDef(e){this._customColumnDefs.delete(e)}addRowDef(e){this._customRowDefs.add(e)}removeRowDef(e){this._customRowDefs.delete(e)}addHeaderRowDef(e){this._customHeaderRowDefs.add(e),this._headerRowDefChanged=!0}removeHeaderRowDef(e){this._customHeaderRowDefs.delete(e),this._headerRowDefChanged=!0}addFooterRowDef(e){this._customFooterRowDefs.add(e),this._footerRowDefChanged=!0}removeFooterRowDef(e){this._customFooterRowDefs.delete(e),this._footerRowDefChanged=!0}setNoDataRow(e){this._customNoDataRow=e}updateStickyHeaderRowStyles(){let e=this._getRenderedRows(this._headerRowOutlet);if(this._isNativeHtmlTable){let r=X_(this._headerRowOutlet,"thead");r&&(r.style.display=e.length?"":"none")}let t=this._headerRowDefs.map(r=>r.sticky);this._stickyStyler.clearStickyPositioning(e,["top"]),this._stickyStyler.stickRows(e,t,"top"),this._headerRowDefs.forEach(r=>r.resetStickyChanged())}updateStickyFooterRowStyles(){let e=this._getRenderedRows(this._footerRowOutlet);if(this._isNativeHtmlTable){let r=X_(this._footerRowOutlet,"tfoot");r&&(r.style.display=e.length?"":"none")}let t=this._footerRowDefs.map(r=>r.sticky);this._stickyStyler.clearStickyPositioning(e,["bottom"]),this._stickyStyler.stickRows(e,t,"bottom"),this._stickyStyler.updateStickyFooterContainer(this._elementRef.nativeElement,t),this._footerRowDefs.forEach(r=>r.resetStickyChanged())}updateStickyColumnStyles(){let e=this._getRenderedRows(this._headerRowOutlet),t=this._getRenderedRows(this._rowOutlet),r=this._getRenderedRows(this._footerRowOutlet);(this._isNativeHtmlTable&&!this.fixedLayout||this._stickyColumnStylesNeedReset)&&(this._stickyStyler.clearStickyPositioning([...e,...t,...r],["left","right"]),this._stickyColumnStylesNeedReset=!1),e.forEach((a,o)=>{this._addStickyColumnStyles([a],this._headerRowDefs[o])}),this._rowDefs.forEach(a=>{let o=[];for(let s=0;s<t.length;s++)this._renderRows[s].rowDef===a&&o.push(t[s]);this._addStickyColumnStyles(o,a)}),r.forEach((a,o)=>{this._addStickyColumnStyles([a],this._footerRowDefs[o])}),Array.from(this._columnDefsByName.values()).forEach(a=>a.resetStickyChanged())}stickyColumnsUpdated(e){this._positionListener?.stickyColumnsUpdated(e)}stickyEndColumnsUpdated(e){this._positionListener?.stickyEndColumnsUpdated(e)}stickyHeaderRowsUpdated(e){this._headerRowStickyUpdates.next(e),this._positionListener?.stickyHeaderRowsUpdated(e)}stickyFooterRowsUpdated(e){this._footerRowStickyUpdates.next(e),this._positionListener?.stickyFooterRowsUpdated(e)}_outletAssigned(){!this._hasAllOutlets&&this._rowOutlet&&this._headerRowOutlet&&this._footerRowOutlet&&this._noDataRowOutlet&&(this._hasAllOutlets=!0,this._canRender()&&this._render())}_canRender(){return this._hasAllOutlets&&this._hasInitialized}_render(){this._cacheRowDefs(),this._cacheColumnDefs(),!this._headerRowDefs.length&&!this._footerRowDefs.length&&this._rowDefs.length;let t=this._renderUpdatedColumns()||this._headerRowDefChanged||this._footerRowDefChanged;this._stickyColumnStylesNeedReset=this._stickyColumnStylesNeedReset||t,this._forceRecalculateCellWidths=t,this._headerRowDefChanged&&(this._forceRenderHeaderRows(),this._headerRowDefChanged=!1),this._footerRowDefChanged&&(this._forceRenderFooterRows(),this._footerRowDefChanged=!1),this.dataSource&&this._rowDefs.length>0&&!this._renderChangeSubscription?this._observeRenderChanges():this._stickyColumnStylesNeedReset&&this.updateStickyColumnStyles(),this._checkStickyStates()}_getAllRenderRows(){if(!Array.isArray(this._data)||!this._renderedRange)return[];let e=[],t=Math.min(this._data.length,this._renderedRange.end),r=this._cachedRenderRowsMap;this._cachedRenderRowsMap=new Map;for(let a=this._renderedRange.start;a<t;a++){let o=this._data[a],s=this._getRenderRowsForData(o,a,r.get(o));this._cachedRenderRowsMap.has(o)||this._cachedRenderRowsMap.set(o,new WeakMap);for(let c=0;c<s.length;c++){let m=s[c],f=this._cachedRenderRowsMap.get(m.data);f.has(m.rowDef)?f.get(m.rowDef).push(m):f.set(m.rowDef,[m]),e.push(m)}}return e}_getRenderRowsForData(e,t,r){return this._getRowDefs(e,t).map(o=>{let s=r&&r.has(o)?r.get(o):[];if(s.length){let c=s.shift();return c.dataIndex=t,c}else return{data:e,rowDef:o,dataIndex:t}})}_cacheColumnDefs(){this._columnDefsByName.clear(),Gc(this._getOwnDefs(this._contentColumnDefs),this._customColumnDefs).forEach(t=>{this._columnDefsByName.has(t.name),this._columnDefsByName.set(t.name,t)})}_cacheRowDefs(){this._headerRowDefs=Gc(this._getOwnDefs(this._contentHeaderRowDefs),this._customHeaderRowDefs),this._footerRowDefs=Gc(this._getOwnDefs(this._contentFooterRowDefs),this._customFooterRowDefs),this._rowDefs=Gc(this._getOwnDefs(this._contentRowDefs),this._customRowDefs);let e=this._rowDefs.filter(t=>!t.when);this._defaultRowDef=e[0]}_renderUpdatedColumns(){let e=(o,s)=>{let c=!!s.getColumnsDiff();return o||c},t=this._rowDefs.reduce(e,!1);t&&this._forceRenderDataRows();let r=this._headerRowDefs.reduce(e,!1);r&&this._forceRenderHeaderRows();let a=this._footerRowDefs.reduce(e,!1);return a&&this._forceRenderFooterRows(),t||r||a}_switchDataSource(e){this._data=[],Ic(this.dataSource)&&this.dataSource.disconnect(this),this._renderChangeSubscription&&(this._renderChangeSubscription.unsubscribe(),this._renderChangeSubscription=null),e||(this._dataDiffer&&this._dataDiffer.diff([]),this._rowOutlet&&this._rowOutlet.viewContainer.clear()),this._dataSource=e}_observeRenderChanges(){if(!this.dataSource)return;let e;Ic(this.dataSource)?e=this.dataSource.connect(this):Ea(this.dataSource)?e=this.dataSource:Array.isArray(this.dataSource)&&(e=Q(this.dataSource)),this._renderChangeSubscription=Ti([e,this.viewChange]).pipe(Be(this._onDestroy)).subscribe(([t,r])=>{this._data=t||[],this._renderedRange=r,this._dataStream.next(t),this.renderRows()})}_forceRenderHeaderRows(){this._headerRowOutlet.viewContainer.length>0&&this._headerRowOutlet.viewContainer.clear(),this._headerRowDefs.forEach((e,t)=>this._renderRow(this._headerRowOutlet,e,t)),this.updateStickyHeaderRowStyles()}_forceRenderFooterRows(){this._footerRowOutlet.viewContainer.length>0&&this._footerRowOutlet.viewContainer.clear(),this._footerRowDefs.forEach((e,t)=>this._renderRow(this._footerRowOutlet,e,t)),this.updateStickyFooterRowStyles()}_addStickyColumnStyles(e,t){let r=Array.from(t?.columns||[]).map(s=>{let c=this._columnDefsByName.get(s);return c}),a=r.map(s=>s.sticky),o=r.map(s=>s.stickyEnd);this._stickyStyler.updateStickyColumns(e,a,o,!this.fixedLayout||this._forceRecalculateCellWidths)}_getRenderedRows(e){let t=[];for(let r=0;r<e.viewContainer.length;r++){let a=e.viewContainer.get(r);t.push(a.rootNodes[0])}return t}_getRowDefs(e,t){if(this._rowDefs.length===1)return[this._rowDefs[0]];let r=[];if(this.multiTemplateDataRows)r=this._rowDefs.filter(a=>!a.when||a.when(t,e));else{let a=this._rowDefs.find(o=>o.when&&o.when(t,e))||this._defaultRowDef;a&&r.push(a)}return r.length,r}_getEmbeddedViewArgs(e,t){let r=e.rowDef,a={$implicit:e.data};return{templateRef:r.template,context:a,index:t}}_renderRow(e,t,r,a={}){let o=e.viewContainer.createEmbeddedView(t.template,a,r);return this._renderCellTemplateForItem(t,a),o}_renderCellTemplateForItem(e,t){for(let r of this._getCellTemplates(e))Ca.mostRecentCellOutlet&&Ca.mostRecentCellOutlet._viewContainer.createEmbeddedView(r,t);this._changeDetectorRef.markForCheck()}_updateRowIndexContext(){let e=this._rowOutlet.viewContainer;for(let t=0,r=e.length;t<r;t++){let o=e.get(t).context;o.count=r,o.first=t===0,o.last=t===r-1,o.even=t%2===0,o.odd=!o.even,this.multiTemplateDataRows?(o.dataIndex=this._renderRows[t].dataIndex,o.renderIndex=t):o.index=this._renderRows[t].dataIndex}}_getCellTemplates(e){return!e||!e.columns?[]:Array.from(e.columns,t=>{let r=this._columnDefsByName.get(t);return e.extractCellTemplate(r)})}_forceRenderDataRows(){this._dataDiffer.diff([]),this._rowOutlet.viewContainer.clear(),this.renderRows()}_checkStickyStates(){let e=(t,r)=>t||r.hasStickyChanged();this._headerRowDefs.reduce(e,!1)&&this.updateStickyHeaderRowStyles(),this._footerRowDefs.reduce(e,!1)&&this.updateStickyFooterRowStyles(),Array.from(this._columnDefsByName.values()).reduce(e,!1)&&(this._stickyColumnStylesNeedReset=!0,this.updateStickyColumnStyles())}_setupStickyStyler(){let e=this._dir?this._dir.value:"ltr",t=this._injector;this._stickyStyler=new Om(this._isNativeHtmlTable,this.stickyCssClass,this._platform.isBrowser,this.needsPositionStickyOnElement,e,this,t),(this._dir?this._dir.change:Q()).pipe(Be(this._onDestroy)).subscribe(r=>{this._stickyStyler.direction=r,this.updateStickyColumnStyles()})}_setupVirtualScrolling(e){let t=typeof requestAnimationFrame<"u"?Ed:wd;this.viewChange.next({start:0,end:0}),e.renderedRangeStream.pipe(Mo(0,t),Be(this._onDestroy)).subscribe(this.viewChange),e.attach({dataStream:this._dataStream,measureRangeSize:(r,a)=>this._measureRangeSize(r,a)}),Ti([e.renderedContentOffset,this._headerRowStickyUpdates]).pipe(Be(this._onDestroy)).subscribe(([r,a])=>{if(!(!a.sizes||!a.offsets||!a.elements))for(let o=0;o<a.elements.length;o++){let s=a.elements[o];if(s){let c=a.offsets[o],m=r!==0?Math.max(r-c,c):-c;for(let f of s)f.style.top=`${-m}px`}}}),Ti([e.renderedContentOffset,this._footerRowStickyUpdates]).pipe(Be(this._onDestroy)).subscribe(([r,a])=>{if(!(!a.sizes||!a.offsets||!a.elements))for(let o=0;o<a.elements.length;o++){let s=a.elements[o];if(s)for(let c of s)c.style.bottom=`${r+a.offsets[o]}px`}})}_getOwnDefs(e){return e.filter(t=>!t._table||t._table===this)}_updateNoDataRow(){let e=this._customNoDataRow||this._noDataRow;if(!e)return;let t=this._rowOutlet.viewContainer.length===0;if(t===this._isShowingNoDataRow)return;let r=this._noDataRowOutlet.viewContainer;if(t){let a=r.createEmbeddedView(e.templateRef),o=a.rootNodes[0];if(a.rootNodes.length===1&&o?.nodeType===this._document.ELEMENT_NODE){o.setAttribute("role","row"),o.classList.add(...e._contentClassNames);let s=o.querySelectorAll(e._cellSelector);for(let c=0;c<s.length;c++)s[c].classList.add(...e._cellClassNames)}}else r.clear();this._isShowingNoDataRow=t,this._changeDetectorRef.markForCheck()}_measureRangeSize(e,t){if(e.start>=e.end||t!=="vertical")return 0;let r=this.viewChange.value,a=this._rowOutlet.viewContainer;e.start<r.start||e.end>r.end;let o=e.start-r.start,s=e.end-e.start,c,m;for(let E=0;E<s;E++){let M=a.get(E+o);if(M&&M.rootNodes.length){c=m=M.rootNodes[0];break}}for(let E=s-1;E>-1;E--){let M=a.get(E+o);if(M&&M.rootNodes.length){m=M.rootNodes[M.rootNodes.length-1];break}}let f=c?.getBoundingClientRect?.(),g=m?.getBoundingClientRect?.();return f&&g?g.bottom-f.top:0}_virtualScrollEnabled(){return!this._disableVirtualScrolling&&this._virtualScrollViewport!=null}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=N({type:n,selectors:[["cdk-table"],["table","cdk-table",""]],contentQueries:function(t,r,a){if(t&1&&gn(a,tv,5)(a,fo,5)(a,Zc,5)(a,Ps,5)(a,Nm,5),t&2){let o;re(o=ae())&&(r._noDataRow=o.first),re(o=ae())&&(r._contentColumnDefs=o),re(o=ae())&&(r._contentRowDefs=o),re(o=ae())&&(r._contentHeaderRowDefs=o),re(o=ae())&&(r._contentFooterRowDefs=o)}},hostAttrs:[1,"cdk-table"],hostVars:2,hostBindings:function(t,r){t&2&&J("cdk-table-fixed-layout",r.fixedLayout)},inputs:{trackBy:"trackBy",dataSource:"dataSource",multiTemplateDataRows:[2,"multiTemplateDataRows","multiTemplateDataRows",Z],fixedLayout:[2,"fixedLayout","fixedLayout",Z],recycleRows:[2,"recycleRows","recycleRows",Z]},outputs:{contentChanged:"contentChanged"},exportAs:["cdkTable"],features:[je([{provide:ni,useExisting:n},{provide:Os,useValue:null}])],ngContentSelectors:_w,decls:5,vars:2,consts:[["role","rowgroup"],["headerRowOutlet",""],["rowOutlet",""],["noDataRowOutlet",""],["footerRowOutlet",""]],template:function(t,r){t&1&&(Qe(gw),ve(0),ve(1,1),ke(2,vw,1,0),ke(3,bw,7,0)(4,yw,4,0)),t&2&&(p(2),Te(r._isServer?2:-1),p(),Te(r._isNativeHtmlTable?3:4))},dependencies:[jm,Bm,Um,zm],styles:[`.cdk-table-fixed-layout {
  table-layout: fixed;
}
`],encapsulation:2})}return n})();function Gc(n,i){return n.concat(Array.from(i))}function X_(n,i){let e=i.toUpperCase(),t=n.viewContainer.element.nativeElement;for(;t;){let r=t.nodeType===1?t.nodeName:null;if(r===e)return t;if(r==="TABLE")break;t=t.parentNode}return null}var nv=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=q({type:n});static \u0275inj=Y({imports:[Rs]})}return n})();var Ns=class{_multiple;_emitChanges;compareWith;_selection=new Set;_deselectedToEmit=[];_selectedToEmit=[];_selected=null;get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}changed=new P;constructor(i=!1,e,t=!0,r){this._multiple=i,this._emitChanges=t,this.compareWith=r,e&&e.length&&(i?e.forEach(a=>this._markSelected(a)):this._markSelected(e[0]),this._selectedToEmit.length=0)}select(...i){this._verifyValueAssignment(i),i.forEach(t=>this._markSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}deselect(...i){this._verifyValueAssignment(i),i.forEach(t=>this._unmarkSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}setSelection(...i){this._verifyValueAssignment(i);let e=this.selected,t=new Set(i.map(a=>this._getConcreteValue(a)));i.forEach(a=>this._markSelected(a)),e.filter(a=>!t.has(this._getConcreteValue(a,t))).forEach(a=>this._unmarkSelected(a));let r=this._hasQueuedChanges();return this._emitChangeEvent(),r}toggle(i){return this.isSelected(i)?this.deselect(i):this.select(i)}clear(i=!0){this._unmarkAll();let e=this._hasQueuedChanges();return i&&this._emitChangeEvent(),e}isSelected(i){return this._selection.has(this._getConcreteValue(i))}isEmpty(){return this._selection.size===0}hasValue(){return!this.isEmpty()}sort(i){this._multiple&&this.selected&&this._selected.sort(i)}isMultipleSelection(){return this._multiple}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(i){i=this._getConcreteValue(i),this.isSelected(i)||(this._multiple||this._unmarkAll(),this.isSelected(i)||this._selection.add(i),this._emitChanges&&this._selectedToEmit.push(i))}_unmarkSelected(i){i=this._getConcreteValue(i),this.isSelected(i)&&(this._selection.delete(i),this._emitChanges&&this._deselectedToEmit.push(i))}_unmarkAll(){this.isEmpty()||this._selection.forEach(i=>this._unmarkSelected(i))}_verifyValueAssignment(i){i.length>1&&this._multiple}_hasQueuedChanges(){return!!(this._deselectedToEmit.length||this._selectedToEmit.length)}_getConcreteValue(i,e){if(this.compareWith){e=e??this._selection;for(let t of e)if(this.compareWith(i,t))return t;return i}else return i}};var Dw=[[["caption"]],[["colgroup"],["col"]],"*"],ww=["caption","colgroup, col","*"];function Ew(n,i){n&1&&ve(0,2)}function xw(n,i){n&1&&(d(0,"thead",0),Tt(1,1),u(),d(2,"tbody",2),Tt(3,3)(4,4),u(),d(5,"tfoot",0),Tt(6,5),u())}function Sw(n,i){n&1&&Tt(0,1)(1,3)(2,4)(3,5)}var br=(()=>{class n extends Hm{stickyCssClass="mat-mdc-table-sticky";needsPositionStickyOnElement=!1;static \u0275fac=(()=>{let e;return function(r){return(e||(e=Xe(n)))(r||n)}})();static \u0275cmp=N({type:n,selectors:[["mat-table"],["table","mat-table",""]],hostAttrs:[1,"mat-mdc-table","mdc-data-table__table"],hostVars:2,hostBindings:function(t,r){t&2&&J("mat-table-fixed-layout",r.fixedLayout)},exportAs:["matTable"],features:[je([{provide:Hm,useExisting:n},{provide:ni,useExisting:n},{provide:Os,useValue:null}]),_e],ngContentSelectors:ww,decls:5,vars:2,consts:[["role","rowgroup"],["headerRowOutlet",""],["role","rowgroup",1,"mdc-data-table__content"],["rowOutlet",""],["noDataRowOutlet",""],["footerRowOutlet",""]],template:function(t,r){t&1&&(Qe(Dw),ve(0),ve(1,1),ke(2,Ew,1,0),ke(3,xw,7,0)(4,Sw,4,0)),t&2&&(p(2),Te(r._isServer?2:-1),p(),Te(r._isNativeHtmlTable?3:4))},dependencies:[jm,Bm,Um,zm],styles:[`.mat-mdc-table-sticky {
  position: sticky !important;
}

mat-table {
  display: block;
}

mat-header-row {
  min-height: var(--mat-table-header-container-height, 56px);
}

mat-row {
  min-height: var(--mat-table-row-item-container-height, 52px);
}

mat-footer-row {
  min-height: var(--mat-table-footer-container-height, 52px);
}

mat-row, mat-header-row, mat-footer-row {
  display: flex;
  border-width: 0;
  border-bottom-width: 1px;
  border-style: solid;
  align-items: center;
  box-sizing: border-box;
}

mat-cell:first-of-type, mat-header-cell:first-of-type, mat-footer-cell:first-of-type {
  padding-left: 24px;
}
[dir=rtl] mat-cell:first-of-type:not(:only-of-type), [dir=rtl] mat-header-cell:first-of-type:not(:only-of-type), [dir=rtl] mat-footer-cell:first-of-type:not(:only-of-type) {
  padding-left: 0;
  padding-right: 24px;
}
mat-cell:last-of-type, mat-header-cell:last-of-type, mat-footer-cell:last-of-type {
  padding-right: 24px;
}
[dir=rtl] mat-cell:last-of-type:not(:only-of-type), [dir=rtl] mat-header-cell:last-of-type:not(:only-of-type), [dir=rtl] mat-footer-cell:last-of-type:not(:only-of-type) {
  padding-right: 0;
  padding-left: 24px;
}

mat-cell, mat-header-cell, mat-footer-cell {
  flex: 1;
  display: flex;
  align-items: center;
  overflow: hidden;
  word-wrap: break-word;
  min-height: inherit;
}

.mat-mdc-table {
  min-width: 100%;
  border: 0;
  border-spacing: 0;
  table-layout: auto;
  white-space: normal;
  background-color: var(--mat-table-background-color, var(--mat-sys-surface));
}

.mat-table-fixed-layout {
  table-layout: fixed;
}

.mdc-data-table__cell {
  box-sizing: border-box;
  overflow: hidden;
  text-align: start;
  text-overflow: ellipsis;
}

.mdc-data-table__cell,
.mdc-data-table__header-cell {
  padding: 0 16px;
}

.mat-mdc-header-row {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  height: var(--mat-table-header-container-height, 56px);
  color: var(--mat-table-header-headline-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--mat-table-header-headline-font, var(--mat-sys-title-small-font, Roboto, sans-serif));
  line-height: var(--mat-table-header-headline-line-height, var(--mat-sys-title-small-line-height));
  font-size: var(--mat-table-header-headline-size, var(--mat-sys-title-small-size, 14px));
  font-weight: var(--mat-table-header-headline-weight, var(--mat-sys-title-small-weight, 500));
}

.mat-mdc-row {
  height: var(--mat-table-row-item-container-height, 52px);
  color: var(--mat-table-row-item-label-text-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
}

.mat-mdc-row,
.mdc-data-table__content {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--mat-table-row-item-label-text-font, var(--mat-sys-body-medium-font, Roboto, sans-serif));
  line-height: var(--mat-table-row-item-label-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-table-row-item-label-text-size, var(--mat-sys-body-medium-size, 14px));
  font-weight: var(--mat-table-row-item-label-text-weight, var(--mat-sys-body-medium-weight));
}

.mat-mdc-footer-row {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  height: var(--mat-table-footer-container-height, 52px);
  color: var(--mat-table-row-item-label-text-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--mat-table-footer-supporting-text-font, var(--mat-sys-body-medium-font, Roboto, sans-serif));
  line-height: var(--mat-table-footer-supporting-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-table-footer-supporting-text-size, var(--mat-sys-body-medium-size, 14px));
  font-weight: var(--mat-table-footer-supporting-text-weight, var(--mat-sys-body-medium-weight));
  letter-spacing: var(--mat-table-footer-supporting-text-tracking, var(--mat-sys-body-medium-tracking));
}

.mat-mdc-header-cell {
  border-bottom-color: var(--mat-table-row-item-outline-color, var(--mat-sys-outline, rgba(0, 0, 0, 0.12)));
  border-bottom-width: var(--mat-table-row-item-outline-width, 1px);
  border-bottom-style: solid;
  letter-spacing: var(--mat-table-header-headline-tracking, var(--mat-sys-title-small-tracking));
  font-weight: inherit;
  line-height: inherit;
  box-sizing: border-box;
  text-overflow: ellipsis;
  overflow: hidden;
  outline: none;
  text-align: start;
}
.mdc-data-table__row:last-child > .mat-mdc-header-cell {
  border-bottom: none;
}

.mat-mdc-cell {
  border-bottom-color: var(--mat-table-row-item-outline-color, var(--mat-sys-outline, rgba(0, 0, 0, 0.12)));
  border-bottom-width: var(--mat-table-row-item-outline-width, 1px);
  border-bottom-style: solid;
  letter-spacing: var(--mat-table-row-item-label-text-tracking, var(--mat-sys-body-medium-tracking));
  line-height: inherit;
}
.mdc-data-table__row:last-child > .mat-mdc-cell {
  border-bottom: none;
}

.mat-mdc-footer-cell {
  letter-spacing: var(--mat-table-row-item-label-text-tracking, var(--mat-sys-body-medium-tracking));
}

mat-row.mat-mdc-row,
mat-header-row.mat-mdc-header-row,
mat-footer-row.mat-mdc-footer-row {
  border-bottom: none;
}

.mat-mdc-table tbody,
.mat-mdc-table tfoot,
.mat-mdc-table thead,
.mat-mdc-cell,
.mat-mdc-footer-cell,
.mat-mdc-header-row,
.mat-mdc-row,
.mat-mdc-footer-row,
.mat-mdc-table .mat-mdc-header-cell {
  background: inherit;
}

.mat-mdc-table mat-header-row.mat-mdc-header-row,
.mat-mdc-table mat-row.mat-mdc-row,
.mat-mdc-table mat-footer-row.mat-mdc-footer-cell {
  height: unset;
}

mat-header-cell.mat-mdc-header-cell,
mat-cell.mat-mdc-cell,
mat-footer-cell.mat-mdc-footer-cell {
  align-self: stretch;
}
`],encapsulation:2})}return n})(),yr=(()=>{class n extends Yc{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Xe(n)))(r||n)}})();static \u0275dir=A({type:n,selectors:[["","matCellDef",""]],features:[je([{provide:Yc,useExisting:n}]),_e]})}return n})(),Cr=(()=>{class n extends qc{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Xe(n)))(r||n)}})();static \u0275dir=A({type:n,selectors:[["","matHeaderCellDef",""]],features:[je([{provide:qc,useExisting:n}]),_e]})}return n})();var Dr=(()=>{class n extends fo{get name(){return this._name}set name(e){this._setNameInput(e)}_updateColumnCssClassName(){super._updateColumnCssClassName(),this._columnCssClassName.push(`mat-column-${this.cssClassFriendlyName}`)}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Xe(n)))(r||n)}})();static \u0275dir=A({type:n,selectors:[["","matColumnDef",""]],inputs:{name:[0,"matColumnDef","name"]},features:[je([{provide:fo,useExisting:n}]),_e]})}return n})(),wr=(()=>{class n extends J_{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Xe(n)))(r||n)}})();static \u0275dir=A({type:n,selectors:[["mat-header-cell"],["th","mat-header-cell",""]],hostAttrs:["role","columnheader",1,"mat-mdc-header-cell","mdc-data-table__header-cell"],features:[_e]})}return n})();var Er=(()=>{class n extends ev{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Xe(n)))(r||n)}})();static \u0275dir=A({type:n,selectors:[["mat-cell"],["td","mat-cell",""]],hostAttrs:[1,"mat-mdc-cell","mdc-data-table__cell"],features:[_e]})}return n})();var xr=(()=>{class n extends Ps{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Xe(n)))(r||n)}})();static \u0275dir=A({type:n,selectors:[["","matHeaderRowDef",""]],inputs:{columns:[0,"matHeaderRowDef","columns"],sticky:[2,"matHeaderRowDefSticky","sticky",Z]},features:[je([{provide:Ps,useExisting:n}]),_e]})}return n})();var Sr=(()=>{class n extends Zc{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Xe(n)))(r||n)}})();static \u0275dir=A({type:n,selectors:[["","matRowDef",""]],inputs:{columns:[0,"matRowDefColumns","columns"],when:[0,"matRowDefWhen","when"]},features:[je([{provide:Zc,useExisting:n}]),_e]})}return n})(),Mr=(()=>{class n extends Lm{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Xe(n)))(r||n)}})();static \u0275cmp=N({type:n,selectors:[["mat-header-row"],["tr","mat-header-row",""]],hostAttrs:["role","row",1,"mat-mdc-header-row","mdc-data-table__header-row"],exportAs:["matHeaderRow"],features:[je([{provide:Lm,useExisting:n}]),_e],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(t,r){t&1&&Tt(0,0)},dependencies:[Ca],encapsulation:2})}return n})();var Ar=(()=>{class n extends Vm{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Xe(n)))(r||n)}})();static \u0275cmp=N({type:n,selectors:[["mat-row"],["tr","mat-row",""]],hostAttrs:["role","row",1,"mat-mdc-row","mdc-data-table__row"],exportAs:["matRow"],features:[je([{provide:Vm,useExisting:n}]),_e],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(t,r){t&1&&Tt(0,0)},dependencies:[Ca],encapsulation:2})}return n})();var Rr=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=q({type:n});static \u0275inj=Y({imports:[nv,Ve]})}return n})();function iv(n){return Error(`Unable to find icon with the name "${n}"`)}function Mw(){return Error("Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers.")}function rv(n){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${n}".`)}function av(n){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${n}".`)}var Gi=class{url;svgText;options;svgElement=null;constructor(i,e,t){this.url=i,this.svgText=e,this.options=t}},sv=(()=>{class n{_httpClient;_sanitizer;_errorHandler;_document;_svgIconConfigs=new Map;_iconSetConfigs=new Map;_cachedIconsByUrl=new Map;_inProgressUrlFetches=new Map;_fontCssClassesByAlias=new Map;_resolvers=[];_defaultFontSetClass=["material-icons","mat-ligature-font"];constructor(e,t,r,a){this._httpClient=e,this._sanitizer=t,this._errorHandler=a,this._document=r}addSvgIcon(e,t,r){return this.addSvgIconInNamespace("",e,t,r)}addSvgIconLiteral(e,t,r){return this.addSvgIconLiteralInNamespace("",e,t,r)}addSvgIconInNamespace(e,t,r,a){return this._addSvgIconConfig(e,t,new Gi(r,null,a))}addSvgIconResolver(e){return this._resolvers.push(e),this}addSvgIconLiteralInNamespace(e,t,r,a){let o=this._sanitizer.sanitize(Wt.HTML,r);if(!o)throw av(r);let s=ca(o);return this._addSvgIconConfig(e,t,new Gi("",s,a))}addSvgIconSet(e,t){return this.addSvgIconSetInNamespace("",e,t)}addSvgIconSetLiteral(e,t){return this.addSvgIconSetLiteralInNamespace("",e,t)}addSvgIconSetInNamespace(e,t,r){return this._addSvgIconSetConfig(e,new Gi(t,null,r))}addSvgIconSetLiteralInNamespace(e,t,r){let a=this._sanitizer.sanitize(Wt.HTML,t);if(!a)throw av(t);let o=ca(a);return this._addSvgIconSetConfig(e,new Gi("",o,r))}registerFontClassAlias(e,t=e){return this._fontCssClassesByAlias.set(e,t),this}classNameForFontAlias(e){return this._fontCssClassesByAlias.get(e)||e}setDefaultFontSetClass(...e){return this._defaultFontSetClass=e,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(e){let t=this._sanitizer.sanitize(Wt.RESOURCE_URL,e);if(!t)throw rv(e);let r=this._cachedIconsByUrl.get(t);return r?Q(Xc(r)):this._loadSvgIconFromConfig(new Gi(e,null)).pipe(wt(a=>this._cachedIconsByUrl.set(t,a)),Oe(a=>Xc(a)))}getNamedSvgIcon(e,t=""){let r=ov(t,e),a=this._svgIconConfigs.get(r);if(a)return this._getSvgFromConfig(a);if(a=this._getIconConfigFromResolvers(t,e),a)return this._svgIconConfigs.set(r,a),this._getSvgFromConfig(a);let o=this._iconSetConfigs.get(t);return o?this._getSvgFromIconSetConfigs(e,o):ki(iv(r))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(e){return e.svgText?Q(Xc(this._svgElementFromConfig(e))):this._loadSvgIconFromConfig(e).pipe(Oe(t=>Xc(t)))}_getSvgFromIconSetConfigs(e,t){let r=this._extractIconWithNameFromAnySet(e,t);if(r)return Q(r);let a=t.filter(o=>!o.svgText).map(o=>this._loadSvgIconSetFromConfig(o).pipe(Qi(s=>{let m=`Loading icon set URL: ${this._sanitizer.sanitize(Wt.RESOURCE_URL,o.url)} failed: ${s.message}`;return this._errorHandler.handleError(new Error(m)),Q(null)})));return Ys(a).pipe(Oe(()=>{let o=this._extractIconWithNameFromAnySet(e,t);if(!o)throw iv(e);return o}))}_extractIconWithNameFromAnySet(e,t){for(let r=t.length-1;r>=0;r--){let a=t[r];if(a.svgText&&a.svgText.toString().indexOf(e)>-1){let o=this._svgElementFromConfig(a),s=this._extractSvgIconFromSet(o,e,a.options);if(s)return s}}return null}_loadSvgIconFromConfig(e){return this._fetchIcon(e).pipe(wt(t=>e.svgText=t),Oe(()=>this._svgElementFromConfig(e)))}_loadSvgIconSetFromConfig(e){return e.svgText?Q(null):this._fetchIcon(e).pipe(wt(t=>e.svgText=t))}_extractSvgIconFromSet(e,t,r){let a=e.querySelector(`[id="${t}"]`);if(!a)return null;let o=a.cloneNode(!0);if(o.removeAttribute("id"),o.nodeName.toLowerCase()==="svg")return this._setSvgAttributes(o,r);if(o.nodeName.toLowerCase()==="symbol")return this._setSvgAttributes(this._toSvgElement(o),r);let s=this._svgElementFromString(ca("<svg></svg>"));return s.appendChild(o),this._setSvgAttributes(s,r)}_svgElementFromString(e){let t=this._document.createElement("DIV");t.innerHTML=e;let r=t.querySelector("svg");if(!r)throw Error("<svg> tag not found");return r}_toSvgElement(e){let t=this._svgElementFromString(ca("<svg></svg>")),r=e.attributes;for(let a=0;a<r.length;a++){let{name:o,value:s}=r[a];o!=="id"&&t.setAttribute(o,s)}for(let a=0;a<e.childNodes.length;a++)e.childNodes[a].nodeType===this._document.ELEMENT_NODE&&t.appendChild(e.childNodes[a].cloneNode(!0));return t}_setSvgAttributes(e,t){return e.setAttribute("fit",""),e.setAttribute("height","100%"),e.setAttribute("width","100%"),e.setAttribute("preserveAspectRatio","xMidYMid meet"),e.setAttribute("focusable","false"),t&&t.viewBox&&e.setAttribute("viewBox",t.viewBox),e}_fetchIcon(e){let{url:t,options:r}=e,a=r?.withCredentials??!1;if(!this._httpClient)throw Mw();if(t==null)throw Error(`Cannot fetch icon from URL "${t}".`);let o=this._sanitizer.sanitize(Wt.RESOURCE_URL,t);if(!o)throw rv(t);let s=this._inProgressUrlFetches.get(o);if(s)return s;let c=this._httpClient.get(o,{responseType:"text",withCredentials:a}).pipe(Oe(m=>ca(m)),xa(()=>this._inProgressUrlFetches.delete(o)),Oh());return this._inProgressUrlFetches.set(o,c),c}_addSvgIconConfig(e,t,r){return this._svgIconConfigs.set(ov(e,t),r),this}_addSvgIconSetConfig(e,t){let r=this._iconSetConfigs.get(e);return r?r.push(t):this._iconSetConfigs.set(e,[t]),this}_svgElementFromConfig(e){if(!e.svgElement){let t=this._svgElementFromString(e.svgText);this._setSvgAttributes(t,e.options),e.svgElement=t}return e.svgElement}_getIconConfigFromResolvers(e,t){for(let r=0;r<this._resolvers.length;r++){let a=this._resolvers[r](t,e);if(a)return Aw(a)?new Gi(a.url,null,a.options):new Gi(a,null)}}static \u0275fac=function(t){return new(t||n)(G(Xt,8),G($o),G(X,8),G($r))};static \u0275prov=w({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function Xc(n){return n.cloneNode(!0)}function ov(n,i){return n+":"+i}function Aw(n){return!!(n.url&&n.options)}var Rw=["*"],kw=new S("MAT_ICON_DEFAULT_OPTIONS"),Tw=new S("mat-icon-location",{providedIn:"root",factory:()=>{let n=l(X),i=n?n.location:null;return{getPathname:()=>i?i.pathname+i.search:""}}}),lv=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],Iw=lv.map(n=>`[${n}]`).join(", "),Fw=/^url\(['"]?#(.*?)['"]?\)$/,kr=(()=>{class n{_elementRef=l(U);_iconRegistry=l(sv);_location=l(Tw);_errorHandler=l($r);_defaultColor;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;inline=!1;get svgIcon(){return this._svgIcon}set svgIcon(e){e!==this._svgIcon&&(e?this._updateSvgIcon(e):this._svgIcon&&this._clearSvgElement(),this._svgIcon=e)}_svgIcon;get fontSet(){return this._fontSet}set fontSet(e){let t=this._cleanupFontValue(e);t!==this._fontSet&&(this._fontSet=t,this._updateFontIconClasses())}_fontSet;get fontIcon(){return this._fontIcon}set fontIcon(e){let t=this._cleanupFontValue(e);t!==this._fontIcon&&(this._fontIcon=t,this._updateFontIconClasses())}_fontIcon;_previousFontSetClass=[];_previousFontIconClass;_svgName=null;_svgNamespace=null;_previousPath;_elementsWithExternalReferences;_currentIconFetch=rt.EMPTY;constructor(){let e=l(new _n("aria-hidden"),{optional:!0}),t=l(kw,{optional:!0});t&&(t.color&&(this.color=this._defaultColor=t.color),t.fontSet&&(this.fontSet=t.fontSet)),e||this._elementRef.nativeElement.setAttribute("aria-hidden","true")}_splitIconName(e){if(!e)return["",""];let t=e.split(":");switch(t.length){case 1:return["",t[0]];case 2:return t;default:throw Error(`Invalid icon name: "${e}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){let e=this._elementsWithExternalReferences;if(e&&e.size){let t=this._location.getPathname();t!==this._previousPath&&(this._previousPath=t,this._prependPathToReferences(t))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(e){this._clearSvgElement();let t=this._location.getPathname();this._previousPath=t,this._cacheChildrenWithExternalReferences(e),this._prependPathToReferences(t),this._elementRef.nativeElement.appendChild(e)}_clearSvgElement(){let e=this._elementRef.nativeElement,t=e.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();t--;){let r=e.childNodes[t];(r.nodeType!==1||r.nodeName.toLowerCase()==="svg")&&r.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let e=this._elementRef.nativeElement,t=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(r=>r.length>0);this._previousFontSetClass.forEach(r=>e.classList.remove(r)),t.forEach(r=>e.classList.add(r)),this._previousFontSetClass=t,this.fontIcon!==this._previousFontIconClass&&!t.includes("mat-ligature-font")&&(this._previousFontIconClass&&e.classList.remove(this._previousFontIconClass),this.fontIcon&&e.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(e){return typeof e=="string"?e.trim().split(" ")[0]:e}_prependPathToReferences(e){let t=this._elementsWithExternalReferences;t&&t.forEach((r,a)=>{r.forEach(o=>{a.setAttribute(o.name,`url('${e}#${o.value}')`)})})}_cacheChildrenWithExternalReferences(e){let t=e.querySelectorAll(Iw),r=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let a=0;a<t.length;a++)lv.forEach(o=>{let s=t[a],c=s.getAttribute(o),m=c?c.match(Fw):null;if(m){let f=r.get(s);f||(f=[],r.set(s,f)),f.push({name:o,value:m[1]})}})}_updateSvgIcon(e){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),e){let[t,r]=this._splitIconName(e);t&&(this._svgNamespace=t),r&&(this._svgName=r),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(r,t).pipe(vt(1)).subscribe(a=>this._setSvgElement(a),a=>{let o=`Error retrieving icon ${t}:${r}! ${a.message}`;this._errorHandler.handleError(new Error(o))})}}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=N({type:n,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:10,hostBindings:function(t,r){t&2&&(pe("data-mat-icon-type",r._usingFontIcon()?"font":"svg")("data-mat-icon-name",r._svgName||r.fontIcon)("data-mat-icon-namespace",r._svgNamespace||r.fontSet)("fontIcon",r._usingFontIcon()?r.fontIcon:null),It(r.color?"mat-"+r.color:""),J("mat-icon-inline",r.inline)("mat-icon-no-color",r.color!=="primary"&&r.color!=="accent"&&r.color!=="warn"))},inputs:{color:"color",inline:[2,"inline","inline",Z],svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],ngContentSelectors:Rw,decls:1,vars:0,template:function(t,r){t&1&&(Qe(),ve(0))},styles:[`mat-icon, mat-icon.mat-primary, mat-icon.mat-accent, mat-icon.mat-warn {
  color: var(--mat-icon-color, inherit);
}

.mat-icon {
  -webkit-user-select: none;
  user-select: none;
  background-repeat: no-repeat;
  display: inline-block;
  fill: currentColor;
  height: 24px;
  width: 24px;
  overflow: hidden;
}
.mat-icon.mat-icon-inline {
  font-size: inherit;
  height: inherit;
  line-height: inherit;
  width: inherit;
}
.mat-icon.mat-ligature-font[fontIcon]::before {
  content: attr(fontIcon);
}

[dir=rtl] .mat-icon-rtl-mirror {
  transform: scale(-1, 1);
}

.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon {
  display: block;
}
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon {
  margin: auto;
}
`],encapsulation:2,changeDetection:0})}return n})(),Tr=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=q({type:n});static \u0275inj=Y({imports:[Ve]})}return n})();var Ow=["determinateSpinner"];function Pw(n,i){if(n&1&&(fn(),d(0,"svg",11),T(1,"circle",12),u()),n&2){let e=D();pe("viewBox",e._viewBox()),p(),Gn("stroke-dasharray",e._strokeCircumference(),"px")("stroke-dashoffset",e._strokeCircumference()/2,"px")("stroke-width",e._circleStrokeWidth(),"%"),pe("r",e._circleRadius())}}var Nw=new S("mat-progress-spinner-default-options",{providedIn:"root",factory:()=>({diameter:cv})}),cv=100,Lw=10,Ir=(()=>{class n{_elementRef=l(U);_noopAnimations;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;_defaultColor="primary";_determinateCircle;constructor(){let e=l(Nw),t=bm(),r=this._elementRef.nativeElement;this._noopAnimations=t==="di-disabled"&&!!e&&!e._forceAnimations,this.mode=r.nodeName.toLowerCase()==="mat-spinner"?"indeterminate":"determinate",!this._noopAnimations&&t==="reduced-motion"&&r.classList.add("mat-progress-spinner-reduced-motion"),e&&(e.color&&(this.color=this._defaultColor=e.color),e.diameter&&(this.diameter=e.diameter),e.strokeWidth&&(this.strokeWidth=e.strokeWidth))}mode;get value(){return this.mode==="determinate"?this._value:0}set value(e){this._value=Math.max(0,Math.min(100,e||0))}_value=0;get diameter(){return this._diameter}set diameter(e){this._diameter=e||0}_diameter=cv;get strokeWidth(){return this._strokeWidth??this.diameter/10}set strokeWidth(e){this._strokeWidth=e||0}_strokeWidth;_circleRadius(){return(this.diameter-Lw)/2}_viewBox(){let e=this._circleRadius()*2+this.strokeWidth;return`0 0 ${e} ${e}`}_strokeCircumference(){return 2*Math.PI*this._circleRadius()}_strokeDashOffset(){return this.mode==="determinate"?this._strokeCircumference()*(100-this._value)/100:null}_circleStrokeWidth(){return this.strokeWidth/this.diameter*100}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=N({type:n,selectors:[["mat-progress-spinner"],["mat-spinner"]],viewQuery:function(t,r){if(t&1&&ot(Ow,5),t&2){let a;re(a=ae())&&(r._determinateCircle=a.first)}},hostAttrs:["role","progressbar","tabindex","-1",1,"mat-mdc-progress-spinner","mdc-circular-progress"],hostVars:18,hostBindings:function(t,r){t&2&&(pe("aria-valuemin",0)("aria-valuemax",100)("aria-valuenow",r.mode==="determinate"?r.value:null)("mode",r.mode),It("mat-"+r.color),Gn("width",r.diameter,"px")("height",r.diameter,"px")("--mat-progress-spinner-size",r.diameter+"px")("--mat-progress-spinner-active-indicator-width",r.diameter+"px"),J("_mat-animation-noopable",r._noopAnimations)("mdc-circular-progress--indeterminate",r.mode==="indeterminate"))},inputs:{color:"color",mode:"mode",value:[2,"value","value",vn],diameter:[2,"diameter","diameter",vn],strokeWidth:[2,"strokeWidth","strokeWidth",vn]},exportAs:["matProgressSpinner"],decls:14,vars:11,consts:[["circle",""],["determinateSpinner",""],["aria-hidden","true",1,"mdc-circular-progress__determinate-container"],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__determinate-circle-graphic"],["cx","50%","cy","50%",1,"mdc-circular-progress__determinate-circle"],["aria-hidden","true",1,"mdc-circular-progress__indeterminate-container"],[1,"mdc-circular-progress__spinner-layer"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-left"],[3,"ngTemplateOutlet"],[1,"mdc-circular-progress__gap-patch"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-right"],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__indeterminate-circle-graphic"],["cx","50%","cy","50%"]],template:function(t,r){if(t&1&&(L(0,Pw,2,8,"ng-template",null,0,rl),d(2,"div",2,1),fn(),d(4,"svg",3),T(5,"circle",4),u()(),Ao(),d(6,"div",5)(7,"div",6)(8,"div",7),Tt(9,8),u(),d(10,"div",9),Tt(11,8),u(),d(12,"div",10),Tt(13,8),u()()()),t&2){let a=$n(1);p(4),pe("viewBox",r._viewBox()),p(),Gn("stroke-dasharray",r._strokeCircumference(),"px")("stroke-dashoffset",r._strokeDashOffset(),"px")("stroke-width",r._circleStrokeWidth(),"%"),pe("r",r._circleRadius()),p(4),_("ngTemplateOutlet",a),p(2),_("ngTemplateOutlet",a),p(2),_("ngTemplateOutlet",a)}},dependencies:[No],styles:[`.mat-mdc-progress-spinner {
  --mat-progress-spinner-animation-multiplier: 1;
  display: block;
  overflow: hidden;
  line-height: 0;
  position: relative;
  direction: ltr;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.6, 1);
}
.mat-mdc-progress-spinner circle {
  stroke-width: var(--mat-progress-spinner-active-indicator-width, 4px);
}
.mat-mdc-progress-spinner._mat-animation-noopable, .mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__determinate-circle {
  transition: none !important;
}
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-circle-graphic,
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__spinner-layer,
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container {
  animation: none !important;
}
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container circle {
  stroke-dasharray: 0 !important;
}
@media (forced-colors: active) {
  .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic,
  .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle {
    stroke: currentColor;
    stroke: CanvasText;
  }
}

.mat-progress-spinner-reduced-motion {
  --mat-progress-spinner-animation-multiplier: 1.25;
}

.mdc-circular-progress__determinate-container,
.mdc-circular-progress__indeterminate-circle-graphic,
.mdc-circular-progress__indeterminate-container,
.mdc-circular-progress__spinner-layer {
  position: absolute;
  width: 100%;
  height: 100%;
}

.mdc-circular-progress__determinate-container {
  transform: rotate(-90deg);
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__determinate-container {
  opacity: 0;
}

.mdc-circular-progress__indeterminate-container {
  font-size: 0;
  letter-spacing: 0;
  white-space: nowrap;
  opacity: 0;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container {
  opacity: 1;
  animation: mdc-circular-progress-container-rotate calc(1568.2352941176ms * var(--mat-progress-spinner-animation-multiplier)) linear infinite;
}

.mdc-circular-progress__determinate-circle-graphic,
.mdc-circular-progress__indeterminate-circle-graphic {
  fill: transparent;
}

.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,
.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic {
  stroke: var(--mat-progress-spinner-active-indicator-color, var(--mat-sys-primary));
}
@media (forced-colors: active) {
  .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,
  .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic {
    stroke: CanvasText;
  }
}

.mdc-circular-progress__determinate-circle {
  transition: stroke-dashoffset 500ms cubic-bezier(0, 0, 0.2, 1);
}

.mdc-circular-progress__gap-patch {
  position: absolute;
  top: 0;
  left: 47.5%;
  box-sizing: border-box;
  width: 5%;
  height: 100%;
  overflow: hidden;
}

.mdc-circular-progress__gap-patch .mdc-circular-progress__indeterminate-circle-graphic {
  left: -900%;
  width: 2000%;
  transform: rotate(180deg);
}
.mdc-circular-progress__circle-clipper .mdc-circular-progress__indeterminate-circle-graphic {
  width: 200%;
}
.mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic {
  left: -100%;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-left .mdc-circular-progress__indeterminate-circle-graphic {
  animation: mdc-circular-progress-left-spin calc(1333ms * var(--mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic {
  animation: mdc-circular-progress-right-spin calc(1333ms * var(--mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}

.mdc-circular-progress__circle-clipper {
  display: inline-flex;
  position: relative;
  width: 50%;
  height: 100%;
  overflow: hidden;
}

.mdc-circular-progress--indeterminate .mdc-circular-progress__spinner-layer {
  animation: mdc-circular-progress-spinner-layer-rotate calc(5332ms * var(--mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}

@keyframes mdc-circular-progress-container-rotate {
  to {
    transform: rotate(360deg);
  }
}
@keyframes mdc-circular-progress-spinner-layer-rotate {
  12.5% {
    transform: rotate(135deg);
  }
  25% {
    transform: rotate(270deg);
  }
  37.5% {
    transform: rotate(405deg);
  }
  50% {
    transform: rotate(540deg);
  }
  62.5% {
    transform: rotate(675deg);
  }
  75% {
    transform: rotate(810deg);
  }
  87.5% {
    transform: rotate(945deg);
  }
  100% {
    transform: rotate(1080deg);
  }
}
@keyframes mdc-circular-progress-left-spin {
  from {
    transform: rotate(265deg);
  }
  50% {
    transform: rotate(130deg);
  }
  to {
    transform: rotate(265deg);
  }
}
@keyframes mdc-circular-progress-right-spin {
  from {
    transform: rotate(-265deg);
  }
  50% {
    transform: rotate(-130deg);
  }
  to {
    transform: rotate(-265deg);
  }
}
`],encapsulation:2,changeDetection:0})}return n})();var Fr=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=q({type:n});static \u0275inj=Y({imports:[Ve]})}return n})();function Vw(n,i){}var Or=class{viewContainerRef;injector;id;role="dialog";panelClass="";hasBackdrop=!0;backdropClass="";disableClose=!1;closePredicate;width="";height="";minWidth;minHeight;maxWidth;maxHeight;positionStrategy;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus="first-tabbable";restoreFocus=!0;scrollStrategy;closeOnNavigation=!0;closeOnDestroy=!0;closeOnOverlayDetachments=!0;disableAnimations=!1;providers;container;templateContext};var Gm=(()=>{class n extends pr{_elementRef=l(U);_focusTrapFactory=l(gc);_config;_interactivityChecker=l(dm);_ngZone=l(de);_focusMonitor=l(bi);_renderer=l(Je);_changeDetectorRef=l(Ee);_injector=l(ce);_platform=l(xe);_document=l(X);_portalOutlet;_focusTrapped=new P;_focusTrap=null;_elementFocusedBeforeDialogWasOpened=null;_closeInteractionType=null;_ariaLabelledByQueue=[];_isDestroyed=!1;constructor(){super(),this._config=l(Or,{optional:!0})||new Or,this._config.ariaLabelledBy&&this._ariaLabelledByQueue.push(this._config.ariaLabelledBy)}_addAriaLabelledBy(e){this._ariaLabelledByQueue.push(e),this._changeDetectorRef.markForCheck()}_removeAriaLabelledBy(e){let t=this._ariaLabelledByQueue.indexOf(e);t>-1&&(this._ariaLabelledByQueue.splice(t,1),this._changeDetectorRef.markForCheck())}_contentAttached(){this._initializeFocusTrap(),this._captureInitialFocus()}_captureInitialFocus(){this._trapFocus()}ngOnDestroy(){this._focusTrapped.complete(),this._isDestroyed=!0,this._restoreFocus()}attachComponentPortal(e){this._portalOutlet.hasAttached();let t=this._portalOutlet.attachComponentPortal(e);return this._contentAttached(),t}attachTemplatePortal(e){this._portalOutlet.hasAttached();let t=this._portalOutlet.attachTemplatePortal(e);return this._contentAttached(),t}attachDomPortal=e=>{this._portalOutlet.hasAttached();let t=this._portalOutlet.attachDomPortal(e);return this._contentAttached(),t};_recaptureFocus(){this._containsFocus()||this._trapFocus()}_forceFocus(e,t){this._interactivityChecker.isFocusable(e)||(e.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let r=()=>{a(),o(),e.removeAttribute("tabindex")},a=this._renderer.listen(e,"blur",r),o=this._renderer.listen(e,"mousedown",r)})),e.focus(t)}_focusByCssSelector(e,t){let r=this._elementRef.nativeElement.querySelector(e);r&&this._forceFocus(r,t)}_trapFocus(e){this._isDestroyed||at(()=>{let t=this._elementRef.nativeElement;switch(this._config.autoFocus){case!1:case"dialog":this._containsFocus()||t.focus(e);break;case!0:case"first-tabbable":this._focusTrap?.focusInitialElement(e)||this._focusDialogContainer(e);break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]',e);break;default:this._focusByCssSelector(this._config.autoFocus,e);break}this._focusTrapped.next()},{injector:this._injector})}_restoreFocus(){let e=this._config.restoreFocus,t=null;if(typeof e=="string"?t=this._document.querySelector(e):typeof e=="boolean"?t=e?this._elementFocusedBeforeDialogWasOpened:null:e&&(t=e),this._config.restoreFocus&&t&&typeof t.focus=="function"){let r=vi(),a=this._elementRef.nativeElement;(!r||r===this._document.body||r===a||a.contains(r))&&(this._focusMonitor?(this._focusMonitor.focusVia(t,this._closeInteractionType),this._closeInteractionType=null):t.focus())}this._focusTrap&&this._focusTrap.destroy()}_focusDialogContainer(e){this._elementRef.nativeElement.focus?.(e)}_containsFocus(){let e=this._elementRef.nativeElement,t=vi();return e===t||e.contains(t)}_initializeFocusTrap(){this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._document&&(this._elementFocusedBeforeDialogWasOpened=vi()))}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=N({type:n,selectors:[["cdk-dialog-container"]],viewQuery:function(t,r){if(t&1&&ot(Xn,7),t&2){let a;re(a=ae())&&(r._portalOutlet=a.first)}},hostAttrs:["tabindex","-1",1,"cdk-dialog-container"],hostVars:6,hostBindings:function(t,r){t&2&&pe("id",r._config.id||null)("role",r._config.role)("aria-modal",r._config.ariaModal)("aria-labelledby",r._config.ariaLabel?null:r._ariaLabelledByQueue[0])("aria-label",r._config.ariaLabel)("aria-describedby",r._config.ariaDescribedBy||null)},features:[_e],decls:1,vars:0,consts:[["cdkPortalOutlet",""]],template:function(t,r){t&1&&L(0,Vw,0,0,"ng-template",0)},dependencies:[Xn],styles:[`.cdk-dialog-container {
  display: block;
  width: 100%;
  height: 100%;
  min-height: inherit;
  max-height: inherit;
}
`],encapsulation:2})}return n})(),Ls=class{overlayRef;config;componentInstance=null;componentRef=null;containerInstance;disableClose;closed=new P;backdropClick;keydownEvents;outsidePointerEvents;id;_detachSubscription;constructor(i,e){this.overlayRef=i,this.config=e,this.disableClose=e.disableClose,this.backdropClick=i.backdropClick(),this.keydownEvents=i.keydownEvents(),this.outsidePointerEvents=i.outsidePointerEvents(),this.id=e.id,this.keydownEvents.subscribe(t=>{t.keyCode===27&&!this.disableClose&&!ut(t)&&(t.preventDefault(),this.close(void 0,{focusOrigin:"keyboard"}))}),this.backdropClick.subscribe(()=>{!this.disableClose&&this._canClose()?this.close(void 0,{focusOrigin:"mouse"}):this.containerInstance._recaptureFocus?.()}),this._detachSubscription=i.detachments().subscribe(()=>{e.closeOnOverlayDetachments!==!1&&this.close()})}close(i,e){if(this._canClose(i)){let t=this.closed;this.containerInstance._closeInteractionType=e?.focusOrigin||"program",this._detachSubscription.unsubscribe(),this.overlayRef.dispose(),t.next(i),t.complete(),this.componentInstance=this.containerInstance=null}}updatePosition(){return this.overlayRef.updatePosition(),this}updateSize(i="",e=""){return this.overlayRef.updateSize({width:i,height:e}),this}addPanelClass(i){return this.overlayRef.addPanelClass(i),this}removePanelClass(i){return this.overlayRef.removePanelClass(i),this}_canClose(i){let e=this.config;return!!this.containerInstance&&(!e.closePredicate||e.closePredicate(i,e,this.componentInstance))}},Bw=new S("DialogScrollStrategy",{providedIn:"root",factory:()=>{let n=l(ce);return()=>gr(n)}}),jw=new S("DialogData"),zw=new S("DefaultDialogConfig");function Uw(n){let i=ne(n),e=new j;return{valueSignal:i,get value(){return i()},change:e,ngOnDestroy(){e.complete()}}}var Wm=(()=>{class n{_injector=l(ce);_defaultOptions=l(zw,{optional:!0});_parentDialog=l(n,{optional:!0,skipSelf:!0});_overlayContainer=l(jc);_idGenerator=l(et);_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new P;_afterOpenedAtThisLevel=new P;_ariaHiddenElements=new Map;_scrollStrategy=l(Bw);get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}afterAllClosed=di(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(Rt(void 0)));constructor(){}open(e,t){let r=this._defaultOptions||new Or;t=x(x({},r),t),t.id=t.id||this._idGenerator.getId("cdk-dialog-"),t.id&&this.getDialogById(t.id);let a=this._getOverlayConfig(t),o=ei(this._injector,a),s=new Ls(o,t),c=this._attachContainer(o,s,t);if(s.containerInstance=c,!this.openDialogs.length){let m=this._overlayContainer.getContainerElement();c._focusTrapped?c._focusTrapped.pipe(vt(1)).subscribe(()=>{this._hideNonDialogContentFromAssistiveTechnology(m)}):this._hideNonDialogContentFromAssistiveTechnology(m)}return this._attachDialogContent(e,s,c,t),this.openDialogs.push(s),s.closed.subscribe(()=>this._removeOpenDialog(s,!0)),this.afterOpened.next(s),s}closeAll(){$m(this.openDialogs,e=>e.close())}getDialogById(e){return this.openDialogs.find(t=>t.id===e)}ngOnDestroy(){$m(this._openDialogsAtThisLevel,e=>{e.config.closeOnDestroy===!1&&this._removeOpenDialog(e,!1)}),$m(this._openDialogsAtThisLevel,e=>e.close()),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete(),this._openDialogsAtThisLevel=[]}_getOverlayConfig(e){let t=new Jn({positionStrategy:e.positionStrategy||Ei().centerHorizontally().centerVertically(),scrollStrategy:e.scrollStrategy||this._scrollStrategy(),panelClass:e.panelClass,hasBackdrop:e.hasBackdrop,direction:e.direction,minWidth:e.minWidth,minHeight:e.minHeight,maxWidth:e.maxWidth,maxHeight:e.maxHeight,width:e.width,height:e.height,disposeOnNavigation:e.closeOnNavigation,disableAnimations:e.disableAnimations});return e.backdropClass&&(t.backdropClass=e.backdropClass),t}_attachContainer(e,t,r){let a=r.injector||r.viewContainerRef?.injector,o=[{provide:Or,useValue:r},{provide:Ls,useValue:t},{provide:lo,useValue:e}],s;r.container?typeof r.container=="function"?s=r.container:(s=r.container.type,o.push(...r.container.providers(r))):s=Gm;let c=new tn(s,r.viewContainerRef,ce.create({parent:a||this._injector,providers:o}));return e.attach(c).instance}_attachDialogContent(e,t,r,a){if(e instanceof pt){let o=this._createInjector(a,t,r,void 0),s={$implicit:a.data,dialogRef:t};a.templateContext&&(s=x(x({},s),typeof a.templateContext=="function"?a.templateContext():a.templateContext)),r.attachTemplatePortal(new Di(e,null,s,o))}else{let o=this._createInjector(a,t,r,this._injector),s=r.attachComponentPortal(new tn(e,a.viewContainerRef,o));t.componentRef=s,t.componentInstance=s.instance}}_createInjector(e,t,r,a){let o=e.injector||e.viewContainerRef?.injector,s=[{provide:jw,useValue:e.data},{provide:Ls,useValue:t}];return e.providers&&(typeof e.providers=="function"?s.push(...e.providers(t,e,r)):s.push(...e.providers)),e.direction&&(!o||!o.get(ht,null,{optional:!0}))&&s.push({provide:ht,useValue:Uw(e.direction)}),ce.create({parent:o||a,providers:s})}_removeOpenDialog(e,t){let r=this.openDialogs.indexOf(e);r>-1&&(this.openDialogs.splice(r,1),this.openDialogs.length||(this._ariaHiddenElements.forEach((a,o)=>{a?o.setAttribute("aria-hidden",a):o.removeAttribute("aria-hidden")}),this._ariaHiddenElements.clear(),t&&this._getAfterAllClosed().next()))}_hideNonDialogContentFromAssistiveTechnology(e){if(e.parentElement){let t=e.parentElement.children;for(let r=t.length-1;r>-1;r--){let a=t[r];a!==e&&a.nodeName!=="SCRIPT"&&a.nodeName!=="STYLE"&&!a.hasAttribute("aria-live")&&!a.hasAttribute("popover")&&(this._ariaHiddenElements.set(a,a.getAttribute("aria-hidden")),a.setAttribute("aria-hidden","true"))}}}_getAfterAllClosed(){let e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}static \u0275fac=function(t){return new(t||n)};static \u0275prov=w({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function $m(n,i){let e=n.length;for(;e--;)i(n[e])}var dv=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=q({type:n});static \u0275inj=Y({providers:[Wm],imports:[ti,Qn,Ds,Qn]})}return n})();function Hw(n,i){}var td=class{viewContainerRef;injector;id;role="dialog";panelClass="";hasBackdrop=!0;backdropClass="";disableClose=!1;closePredicate;width="";height="";minWidth;minHeight;maxWidth;maxHeight;position;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus="first-tabbable";restoreFocus=!0;delayFocusTrap=!0;scrollStrategy;closeOnNavigation=!0;enterAnimationDuration;exitAnimationDuration},Ym="mdc-dialog--open",uv="mdc-dialog--opening",mv="mdc-dialog--closing",$w=150,Gw=75,Ww=(()=>{class n extends Gm{_animationStateChanged=new j;_animationsEnabled=!st();_actionSectionCount=0;_hostElement=this._elementRef.nativeElement;_enterAnimationDuration=this._animationsEnabled?fv(this._config.enterAnimationDuration)??$w:0;_exitAnimationDuration=this._animationsEnabled?fv(this._config.exitAnimationDuration)??Gw:0;_animationTimer=null;_contentAttached(){super._contentAttached(),this._startOpenAnimation()}_startOpenAnimation(){this._animationStateChanged.emit({state:"opening",totalTime:this._enterAnimationDuration}),this._animationsEnabled?(this._hostElement.style.setProperty(hv,`${this._enterAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(uv,Ym)),this._waitForAnimationToComplete(this._enterAnimationDuration,this._finishDialogOpen)):(this._hostElement.classList.add(Ym),Promise.resolve().then(()=>this._finishDialogOpen()))}_startExitAnimation(){this._animationStateChanged.emit({state:"closing",totalTime:this._exitAnimationDuration}),this._hostElement.classList.remove(Ym),this._animationsEnabled?(this._hostElement.style.setProperty(hv,`${this._exitAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(mv)),this._waitForAnimationToComplete(this._exitAnimationDuration,this._finishDialogClose)):Promise.resolve().then(()=>this._finishDialogClose())}_updateActionSectionCount(e){this._actionSectionCount+=e,this._changeDetectorRef.markForCheck()}_finishDialogOpen=()=>{this._clearAnimationClasses(),this._openAnimationDone(this._enterAnimationDuration)};_finishDialogClose=()=>{this._clearAnimationClasses(),this._animationStateChanged.emit({state:"closed",totalTime:this._exitAnimationDuration})};_clearAnimationClasses(){this._hostElement.classList.remove(uv,mv)}_waitForAnimationToComplete(e,t){this._animationTimer!==null&&clearTimeout(this._animationTimer),this._animationTimer=setTimeout(t,e)}_requestAnimationFrame(e){this._ngZone.runOutsideAngular(()=>{typeof requestAnimationFrame=="function"?requestAnimationFrame(e):e()})}_captureInitialFocus(){this._config.delayFocusTrap||this._trapFocus()}_openAnimationDone(e){this._config.delayFocusTrap&&this._trapFocus(),this._animationStateChanged.next({state:"opened",totalTime:e})}ngOnDestroy(){super.ngOnDestroy(),this._animationTimer!==null&&clearTimeout(this._animationTimer)}attachComponentPortal(e){let t=super.attachComponentPortal(e);return t.location.nativeElement.classList.add("mat-mdc-dialog-component-host"),t}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Xe(n)))(r||n)}})();static \u0275cmp=N({type:n,selectors:[["mat-dialog-container"]],hostAttrs:["tabindex","-1",1,"mat-mdc-dialog-container","mdc-dialog"],hostVars:10,hostBindings:function(t,r){t&2&&(xt("id",r._config.id),pe("aria-modal",r._config.ariaModal)("role",r._config.role)("aria-labelledby",r._config.ariaLabel?null:r._ariaLabelledByQueue[0])("aria-label",r._config.ariaLabel)("aria-describedby",r._config.ariaDescribedBy||null),J("_mat-animation-noopable",!r._animationsEnabled)("mat-mdc-dialog-container-with-actions",r._actionSectionCount>0))},features:[_e],decls:3,vars:0,consts:[[1,"mat-mdc-dialog-inner-container","mdc-dialog__container"],[1,"mat-mdc-dialog-surface","mdc-dialog__surface"],["cdkPortalOutlet",""]],template:function(t,r){t&1&&(d(0,"div",0)(1,"div",1),L(2,Hw,0,0,"ng-template",2),u()())},dependencies:[Xn],styles:[`.mat-mdc-dialog-container {
  width: 100%;
  height: 100%;
  display: block;
  box-sizing: border-box;
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
  outline: 0;
}

.cdk-overlay-pane.mat-mdc-dialog-panel {
  max-width: var(--mat-dialog-container-max-width, 560px);
  min-width: var(--mat-dialog-container-min-width, 280px);
}
@media (max-width: 599px) {
  .cdk-overlay-pane.mat-mdc-dialog-panel {
    max-width: var(--mat-dialog-container-small-max-width, calc(100vw - 32px));
  }
}

.mat-mdc-dialog-inner-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  box-sizing: border-box;
  height: 100%;
  opacity: 0;
  transition: opacity linear var(--mat-dialog-transition-duration, 0ms);
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
}
.mdc-dialog--closing .mat-mdc-dialog-inner-container {
  transition: opacity 75ms linear;
  transform: none;
}
.mdc-dialog--open .mat-mdc-dialog-inner-container {
  opacity: 1;
}
._mat-animation-noopable .mat-mdc-dialog-inner-container {
  transition: none;
}

.mat-mdc-dialog-surface {
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  flex-shrink: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  position: relative;
  overflow-y: auto;
  outline: 0;
  transform: scale(0.8);
  transition: transform var(--mat-dialog-transition-duration, 0ms) cubic-bezier(0, 0, 0.2, 1);
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
  box-shadow: var(--mat-dialog-container-elevation-shadow, none);
  border-radius: var(--mat-dialog-container-shape, var(--mat-sys-corner-extra-large, 4px));
  background-color: var(--mat-dialog-container-color, var(--mat-sys-surface, white));
}
[dir=rtl] .mat-mdc-dialog-surface {
  text-align: right;
}
.mdc-dialog--open .mat-mdc-dialog-surface, .mdc-dialog--closing .mat-mdc-dialog-surface {
  transform: none;
}
._mat-animation-noopable .mat-mdc-dialog-surface {
  transition: none;
}
.mat-mdc-dialog-surface::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 2px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}

.mat-mdc-dialog-title {
  display: block;
  position: relative;
  flex-shrink: 0;
  box-sizing: border-box;
  margin: 0 0 1px;
  padding: var(--mat-dialog-headline-padding, 6px 24px 13px);
}
.mat-mdc-dialog-title::before {
  display: inline-block;
  width: 0;
  height: 40px;
  content: "";
  vertical-align: 0;
}
[dir=rtl] .mat-mdc-dialog-title {
  text-align: right;
}
.mat-mdc-dialog-container .mat-mdc-dialog-title {
  color: var(--mat-dialog-subhead-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--mat-dialog-subhead-font, var(--mat-sys-headline-small-font, inherit));
  line-height: var(--mat-dialog-subhead-line-height, var(--mat-sys-headline-small-line-height, 1.5rem));
  font-size: var(--mat-dialog-subhead-size, var(--mat-sys-headline-small-size, 1rem));
  font-weight: var(--mat-dialog-subhead-weight, var(--mat-sys-headline-small-weight, 400));
  letter-spacing: var(--mat-dialog-subhead-tracking, var(--mat-sys-headline-small-tracking, 0.03125em));
}

.mat-mdc-dialog-content {
  display: block;
  flex-grow: 1;
  box-sizing: border-box;
  margin: 0;
  overflow: auto;
  max-height: 65vh;
}
.mat-mdc-dialog-content > :first-child {
  margin-top: 0;
}
.mat-mdc-dialog-content > :last-child {
  margin-bottom: 0;
}
.mat-mdc-dialog-container .mat-mdc-dialog-content {
  color: var(--mat-dialog-supporting-text-color, var(--mat-sys-on-surface-variant, rgba(0, 0, 0, 0.6)));
  font-family: var(--mat-dialog-supporting-text-font, var(--mat-sys-body-medium-font, inherit));
  line-height: var(--mat-dialog-supporting-text-line-height, var(--mat-sys-body-medium-line-height, 1.5rem));
  font-size: var(--mat-dialog-supporting-text-size, var(--mat-sys-body-medium-size, 1rem));
  font-weight: var(--mat-dialog-supporting-text-weight, var(--mat-sys-body-medium-weight, 400));
  letter-spacing: var(--mat-dialog-supporting-text-tracking, var(--mat-sys-body-medium-tracking, 0.03125em));
}
.mat-mdc-dialog-container .mat-mdc-dialog-content {
  padding: var(--mat-dialog-content-padding, 20px 24px);
}
.mat-mdc-dialog-container-with-actions .mat-mdc-dialog-content {
  padding: var(--mat-dialog-with-actions-content-padding, 20px 24px 0);
}
.mat-mdc-dialog-container .mat-mdc-dialog-title + .mat-mdc-dialog-content {
  padding-top: 0;
}

.mat-mdc-dialog-actions {
  display: flex;
  position: relative;
  flex-shrink: 0;
  flex-wrap: wrap;
  align-items: center;
  box-sizing: border-box;
  min-height: 52px;
  margin: 0;
  border-top: 1px solid transparent;
  padding: var(--mat-dialog-actions-padding, 16px 24px);
  justify-content: var(--mat-dialog-actions-alignment, flex-end);
}
@media (forced-colors: active) {
  .mat-mdc-dialog-actions {
    border-top-color: CanvasText;
  }
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-start, .mat-mdc-dialog-actions[align=start] {
  justify-content: start;
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-center, .mat-mdc-dialog-actions[align=center] {
  justify-content: center;
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-end, .mat-mdc-dialog-actions[align=end] {
  justify-content: flex-end;
}
.mat-mdc-dialog-actions .mat-button-base + .mat-button-base,
.mat-mdc-dialog-actions .mat-mdc-button-base + .mat-mdc-button-base {
  margin-left: 8px;
}
[dir=rtl] .mat-mdc-dialog-actions .mat-button-base + .mat-button-base,
[dir=rtl] .mat-mdc-dialog-actions .mat-mdc-button-base + .mat-mdc-button-base {
  margin-left: 0;
  margin-right: 8px;
}

.mat-mdc-dialog-component-host {
  display: contents;
}
`],encapsulation:2})}return n})(),hv="--mat-dialog-transition-duration";function fv(n){return n==null?null:typeof n=="number"?n:n.endsWith("ms")?Bi(n.substring(0,n.length-2)):n.endsWith("s")?Bi(n.substring(0,n.length-1))*1e3:n==="0"?0:null}var ed=(function(n){return n[n.OPEN=0]="OPEN",n[n.CLOSING=1]="CLOSING",n[n.CLOSED=2]="CLOSED",n})(ed||{}),Wi=class{_ref;_config;_containerInstance;componentInstance;componentRef=null;disableClose;id;_afterOpened=new Dd(1);_beforeClosed=new Dd(1);_result;_closeFallbackTimeout;_state=ed.OPEN;_closeInteractionType;constructor(i,e,t){this._ref=i,this._config=e,this._containerInstance=t,this.disableClose=e.disableClose,this.id=i.id,i.addPanelClass("mat-mdc-dialog-panel"),t._animationStateChanged.pipe(Ye(r=>r.state==="opened"),vt(1)).subscribe(()=>{this._afterOpened.next(),this._afterOpened.complete()}),t._animationStateChanged.pipe(Ye(r=>r.state==="closed"),vt(1)).subscribe(()=>{clearTimeout(this._closeFallbackTimeout),this._finishDialogClose()}),i.overlayRef.detachments().subscribe(()=>{this._beforeClosed.next(this._result),this._beforeClosed.complete(),this._finishDialogClose()}),hn(this.backdropClick(),this.keydownEvents().pipe(Ye(r=>r.keyCode===27&&!this.disableClose&&!ut(r)))).subscribe(r=>{this.disableClose||(r.preventDefault(),pv(this,r.type==="keydown"?"keyboard":"mouse"))})}close(i){let e=this._config.closePredicate;e&&!e(i,this._config,this.componentInstance)||(this._result=i,this._containerInstance._animationStateChanged.pipe(Ye(t=>t.state==="closing"),vt(1)).subscribe(t=>{this._beforeClosed.next(i),this._beforeClosed.complete(),this._ref.overlayRef.detachBackdrop(),this._closeFallbackTimeout=setTimeout(()=>this._finishDialogClose(),t.totalTime+100)}),this._state=ed.CLOSING,this._containerInstance._startExitAnimation())}afterOpened(){return this._afterOpened}afterClosed(){return this._ref.closed}beforeClosed(){return this._beforeClosed}backdropClick(){return this._ref.backdropClick}keydownEvents(){return this._ref.keydownEvents}updatePosition(i){let e=this._ref.config.positionStrategy;return i&&(i.left||i.right)?i.left?e.left(i.left):e.right(i.right):e.centerHorizontally(),i&&(i.top||i.bottom)?i.top?e.top(i.top):e.bottom(i.bottom):e.centerVertically(),this._ref.updatePosition(),this}updateSize(i="",e=""){return this._ref.updateSize(i,e),this}addPanelClass(i){return this._ref.addPanelClass(i),this}removePanelClass(i){return this._ref.removePanelClass(i),this}getState(){return this._state}_finishDialogClose(){this._state=ed.CLOSED,this._ref.close(this._result,{focusOrigin:this._closeInteractionType}),this.componentInstance=null}};function pv(n,i,e){return n._closeInteractionType=i,n.close(e)}var Vs=new S("MatMdcDialogData"),Yw=new S("mat-mdc-dialog-default-options"),qw=new S("mat-mdc-dialog-scroll-strategy",{providedIn:"root",factory:()=>{let n=l(ce);return()=>gr(n)}}),ii=(()=>{class n{_defaultOptions=l(Yw,{optional:!0});_scrollStrategy=l(qw);_parentDialog=l(n,{optional:!0,skipSelf:!0});_idGenerator=l(et);_injector=l(ce);_dialog=l(Wm);_animationsDisabled=st();_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new P;_afterOpenedAtThisLevel=new P;dialogConfigClass=td;_dialogRefConstructor;_dialogContainerType;_dialogDataToken;get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}_getAfterAllClosed(){let e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}afterAllClosed=di(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(Rt(void 0)));constructor(){this._dialogRefConstructor=Wi,this._dialogContainerType=Ww,this._dialogDataToken=Vs}open(e,t){let r;t=x(x({},this._defaultOptions||new td),t),t.id=t.id||this._idGenerator.getId("mat-mdc-dialog-"),t.scrollStrategy=t.scrollStrategy||this._scrollStrategy();let a=this._dialog.open(e,He(x({},t),{positionStrategy:Ei(this._injector).centerHorizontally().centerVertically(),disableClose:!0,closePredicate:void 0,closeOnDestroy:!1,closeOnOverlayDetachments:!1,disableAnimations:this._animationsDisabled||t.enterAnimationDuration?.toLocaleString()==="0"||t.exitAnimationDuration?.toString()==="0",container:{type:this._dialogContainerType,providers:()=>[{provide:this.dialogConfigClass,useValue:t},{provide:Or,useValue:t}]},templateContext:()=>({dialogRef:r}),providers:(o,s,c)=>(r=new this._dialogRefConstructor(o,t,c),r.updatePosition(t?.position),[{provide:this._dialogContainerType,useValue:c},{provide:this._dialogDataToken,useValue:s.data},{provide:this._dialogRefConstructor,useValue:r}])}));return r.componentRef=a.componentRef,r.componentInstance=a.componentInstance,this.openDialogs.push(r),this.afterOpened.next(r),r.afterClosed().subscribe(()=>{let o=this.openDialogs.indexOf(r);o>-1&&(this.openDialogs.splice(o,1),this.openDialogs.length||this._getAfterAllClosed().next())}),r}closeAll(){this._closeDialogs(this.openDialogs)}getDialogById(e){return this.openDialogs.find(t=>t.id===e)}ngOnDestroy(){this._closeDialogs(this._openDialogsAtThisLevel),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete()}_closeDialogs(e){let t=e.length;for(;t--;)e[t].close()}static \u0275fac=function(t){return new(t||n)};static \u0275prov=w({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),gv=(()=>{class n{dialogRef=l(Wi,{optional:!0});_elementRef=l(U);_dialog=l(ii);ariaLabel;type="button";dialogResult;_matDialogClose;constructor(){}ngOnInit(){this.dialogRef||(this.dialogRef=vv(this._elementRef,this._dialog.openDialogs))}ngOnChanges(e){let t=e._matDialogClose||e._matDialogCloseResult;t&&(this.dialogResult=t.currentValue)}_onButtonClick(e){pv(this.dialogRef,e.screenX===0&&e.screenY===0?"keyboard":"mouse",this.dialogResult)}static \u0275fac=function(t){return new(t||n)};static \u0275dir=A({type:n,selectors:[["","mat-dialog-close",""],["","matDialogClose",""]],hostVars:2,hostBindings:function(t,r){t&1&&R("click",function(o){return r._onButtonClick(o)}),t&2&&pe("aria-label",r.ariaLabel||null)("type",r.type)},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],type:"type",dialogResult:[0,"mat-dialog-close","dialogResult"],_matDialogClose:[0,"matDialogClose","_matDialogClose"]},exportAs:["matDialogClose"],features:[Ue]})}return n})(),_v=(()=>{class n{_dialogRef=l(Wi,{optional:!0});_elementRef=l(U);_dialog=l(ii);constructor(){}ngOnInit(){this._dialogRef||(this._dialogRef=vv(this._elementRef,this._dialog.openDialogs)),this._dialogRef&&Promise.resolve().then(()=>{this._onAdd()})}ngOnDestroy(){this._dialogRef?._containerInstance&&Promise.resolve().then(()=>{this._onRemove()})}static \u0275fac=function(t){return new(t||n)};static \u0275dir=A({type:n})}return n})(),nd=(()=>{class n extends _v{id=l(et).getId("mat-mdc-dialog-title-");_onAdd(){this._dialogRef._containerInstance?._addAriaLabelledBy?.(this.id)}_onRemove(){this._dialogRef?._containerInstance?._removeAriaLabelledBy?.(this.id)}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Xe(n)))(r||n)}})();static \u0275dir=A({type:n,selectors:[["","mat-dialog-title",""],["","matDialogTitle",""]],hostAttrs:[1,"mat-mdc-dialog-title","mdc-dialog__title"],hostVars:1,hostBindings:function(t,r){t&2&&xt("id",r.id)},inputs:{id:"id"},exportAs:["matDialogTitle"],features:[_e]})}return n})(),id=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=A({type:n,selectors:[["","mat-dialog-content",""],["mat-dialog-content"],["","matDialogContent",""]],hostAttrs:[1,"mat-mdc-dialog-content","mdc-dialog__content"],features:[ef([Mm])]})}return n})(),rd=(()=>{class n extends _v{align;_onAdd(){this._dialogRef._containerInstance?._updateActionSectionCount?.(1)}_onRemove(){this._dialogRef._containerInstance?._updateActionSectionCount?.(-1)}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Xe(n)))(r||n)}})();static \u0275dir=A({type:n,selectors:[["","mat-dialog-actions",""],["mat-dialog-actions"],["","matDialogActions",""]],hostAttrs:[1,"mat-mdc-dialog-actions","mdc-dialog__actions"],hostVars:6,hostBindings:function(t,r){t&2&&J("mat-mdc-dialog-actions-align-start",r.align==="start")("mat-mdc-dialog-actions-align-center",r.align==="center")("mat-mdc-dialog-actions-align-end",r.align==="end")},inputs:{align:"align"},features:[_e]})}return n})();function vv(n,i){let e=n.nativeElement.parentElement;for(;e&&!e.classList.contains("mat-mdc-dialog-container");)e=e.parentElement;return e?i.find(t=>t.id===e.id):null}var Pn=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=q({type:n});static \u0275inj=Y({providers:[ii],imports:[dv,ti,Qn,Ve]})}return n})();var Si=class n{constructor(i,e){this.dialogRef=i;this.data=e}static \u0275fac=function(e){return new(e||n)(k(Wi),k(Vs))};static \u0275cmp=N({type:n,selectors:[["app-confirm-dialog"]],decls:10,vars:6,consts:[["mat-dialog-title",""],["align","end"],["mat-button","",3,"mat-dialog-close"],["mat-raised-button","","color","warn",3,"mat-dialog-close"]],template:function(e,t){e&1&&(d(0,"h2",0),h(1),u(),d(2,"mat-dialog-content")(3,"p"),h(4),u()(),d(5,"mat-dialog-actions",1)(6,"button",2),h(7),u(),d(8,"button",3),h(9),u()()),e&2&&(p(),lt(t.data.title),p(3),lt(t.data.message),p(2),_("mat-dialog-close",!1),p(),lt(t.data.cancelText||"Cancelar"),p(),_("mat-dialog-close",!0),p(),lt(t.data.confirmText||"Eliminar"))},dependencies:[yt,Pn,gv,nd,rd,id,ft,mt],styles:["mat-dialog-actions[_ngcontent-%COMP%]{padding:16px}"]})};var go=class n{constructor(i){this.http=i}apiUrl=xi.apiUrl;getClientes(){return this.http.get(`${this.apiUrl}/clientes/todos`)}getCliente(i){return this.http.get(`${this.apiUrl}/clientes/${i}`)}createCliente(i){return this.http.post(`${this.apiUrl}/clientes`,i)}updateCliente(i,e){return this.http.put(`${this.apiUrl}/clientes/${i}`,e)}deleteCliente(i){return this.http.delete(`${this.apiUrl}/clientes/${i}`)}static \u0275fac=function(e){return new(e||n)(G(Xt))};static \u0275prov=w({token:n,factory:n.\u0275fac,providedIn:"root"})};function Zw(n,i){n&1&&(d(0,"div",6),T(1,"mat-spinner",7),u())}function Kw(n,i){n&1&&(d(0,"th",18),h(1," Nombre "),u())}function Xw(n,i){if(n&1&&(d(0,"td",19),h(1),u()),n&2){let e=i.$implicit;p(),oe(" ",e.nombre," ")}}function Qw(n,i){n&1&&(d(0,"th",18),h(1," Apellido "),u())}function Jw(n,i){if(n&1&&(d(0,"td",19),h(1),u()),n&2){let e=i.$implicit;p(),oe(" ",e.apellido," ")}}function eE(n,i){n&1&&(d(0,"th",18),h(1," Email "),u())}function tE(n,i){if(n&1&&(d(0,"td",19),h(1),u()),n&2){let e=i.$implicit;p(),oe(" ",e.email," ")}}function nE(n,i){n&1&&(d(0,"th",18),h(1," Tel\xE9fono "),u())}function iE(n,i){if(n&1&&(d(0,"td",19),h(1),u()),n&2){let e=i.$implicit;p(),oe(" ",e.telefono||"-"," ")}}function rE(n,i){n&1&&(d(0,"th",18),h(1," Acciones "),u())}function aE(n,i){if(n&1){let e=De();d(0,"td",19)(1,"button",20),R("click",function(){let r=ee(e).$implicit,a=D(2);return te(a.editCliente(r))}),d(2,"mat-icon"),h(3,"edit"),u()(),d(4,"button",21),R("click",function(){let r=ee(e).$implicit,a=D(2);return te(a.deleteCliente(r.id))}),d(5,"mat-icon"),h(6,"delete"),u()()()}}function oE(n,i){n&1&&T(0,"tr",22)}function sE(n,i){n&1&&T(0,"tr",23)}function lE(n,i){if(n&1&&(d(0,"table",8),Pe(1,9),L(2,Kw,2,0,"th",10)(3,Xw,2,1,"td",11),Ne(),Pe(4,12),L(5,Qw,2,0,"th",10)(6,Jw,2,1,"td",11),Ne(),Pe(7,13),L(8,eE,2,0,"th",10)(9,tE,2,1,"td",11),Ne(),Pe(10,14),L(11,nE,2,0,"th",10)(12,iE,2,1,"td",11),Ne(),Pe(13,15),L(14,rE,2,0,"th",10)(15,aE,7,0,"td",11),Ne(),L(16,oE,1,0,"tr",16)(17,sE,1,0,"tr",17),u()),n&2){let e=D();_("dataSource",e.clientes),p(16),_("matHeaderRowDef",e.displayedColumns),p(),_("matRowDefColumns",e.displayedColumns)}}function cE(n,i){if(n&1){let e=De();d(0,"div",24)(1,"p"),h(2,"No hay clientes registrados."),u(),d(3,"button",25),R("click",function(){ee(e);let r=D();return te(r.openForm())}),h(4,"Crear primer cliente"),u()()}}function dE(n,i){if(n&1){let e=De();d(0,"div",26)(1,"mat-card",27)(2,"mat-card-title"),h(3),u(),d(4,"mat-card-content")(5,"form",28)(6,"mat-form-field",29)(7,"mat-label"),h(8,"Nombre *"),u(),T(9,"input",30),d(10,"mat-error"),h(11,"Nombre es obligatorio"),u()(),d(12,"mat-form-field",29)(13,"mat-label"),h(14,"Apellido *"),u(),T(15,"input",31),d(16,"mat-error"),h(17,"Apellido es obligatorio"),u()(),d(18,"mat-form-field",29)(19,"mat-label"),h(20,"Email *"),u(),T(21,"input",32),d(22,"mat-error"),h(23,"Email v\xE1lido es obligatorio"),u()(),d(24,"mat-form-field",29)(25,"mat-label"),h(26,"Tel\xE9fono"),u(),T(27,"input",33),u(),d(28,"mat-form-field",29)(29,"mat-label"),h(30,"Documento"),u(),T(31,"input",34),u(),d(32,"mat-form-field",29)(33,"mat-label"),h(34,"Direcci\xF3n"),u(),T(35,"input",35),u(),d(36,"mat-form-field",29)(37,"mat-label"),h(38,"Notas"),u(),T(39,"textarea",36),u()()(),d(40,"mat-card-actions")(41,"button",37),R("click",function(){ee(e);let r=D();return te(r.closeForm())}),h(42,"Cancelar"),u(),d(43,"button",38),R("click",function(){ee(e);let r=D();return te(r.saveCliente())}),h(44),u()()()()}if(n&2){let e=D();p(3),lt(e.editMode?"Editar Cliente":"Nuevo Cliente"),p(2),_("formGroup",e.clienteForm),p(38),_("disabled",e.clienteForm.invalid),p(),oe(" ",e.editMode?"Actualizar":"Guardar"," ")}}var ad=class n{constructor(i,e,t,r,a,o){this.clienteService=i;this.authService=e;this.fb=t;this.snackBar=r;this.cdr=a;this.dialog=o;this.clienteForm=this.fb.group({nombre:["",Ie.required],apellido:["",Ie.required],email:["",[Ie.required,Ie.email]],telefono:[""],documento:[""],direccion:[""],notas:[""]})}clientes=[];displayedColumns=["nombre","apellido","email","telefono","acciones"];loading=!0;showForm=!1;editMode=!1;selectedClienteId=null;clienteForm;ngOnInit(){this.loadClientes()}loadClientes(){let i=this.authService.getToken();if(console.log("\u{1F535} Token en loadClientes:",i?"presente":"ausente"),!i){console.log("\u{1F534} No hay token, redirigiendo a login"),this.authService.logout(),window.location.href="/login";return}this.loading=!0,this.cdr.detectChanges(),this.clienteService.getClientes().subscribe({next:e=>{console.log("\u{1F4E6} Respuesta del backend:",e),Array.isArray(e)?this.clientes=e:e&&e.content?this.clientes=e.content:this.clientes=[],this.loading=!1,this.cdr.detectChanges()},error:e=>{console.error("\u274C Error:",e),this.snackBar.open("Error al cargar clientes","Cerrar",{duration:3e3}),this.loading=!1,this.cdr.detectChanges(),(e.status===401||e.status===403)&&(this.authService.logout(),window.location.href="/login")}})}openForm(){this.showForm=!0,this.editMode=!1,this.selectedClienteId=null,this.clienteForm.reset()}closeForm(){this.showForm=!1,this.clienteForm.reset()}editCliente(i){this.editMode=!0,this.selectedClienteId=i.id,this.clienteForm.patchValue({nombre:i.nombre,apellido:i.apellido,email:i.email,telefono:i.telefono,documento:i.documento,direccion:i.direccion,notas:i.notas}),this.showForm=!0}saveCliente(){if(this.clienteForm.invalid)return;this.loading=!0;let i=this.clienteForm.value;this.editMode&&this.selectedClienteId?this.clienteService.updateCliente(this.selectedClienteId,i).subscribe({next:()=>{this.snackBar.open("Cliente actualizado","Cerrar",{duration:3e3}),this.loadClientes(),this.closeForm()},error:e=>{this.snackBar.open("Error al actualizar cliente","Cerrar",{duration:3e3}),this.loading=!1}}):this.clienteService.createCliente(i).subscribe({next:()=>{this.snackBar.open("Cliente creado","Cerrar",{duration:3e3}),this.loadClientes(),this.closeForm()},error:e=>{this.snackBar.open("Error al crear cliente","Cerrar",{duration:3e3}),this.loading=!1}})}deleteCliente(i){console.log("\u{1F534} ELIMINAR CLIENTE - ID:",i),this.dialog.open(Si,{width:"400px",data:{title:"Confirmar eliminaci\xF3n",message:"\xBFEst\xE1s seguro de eliminar este cliente? Esta acci\xF3n no se puede deshacer.",confirmText:"Eliminar",cancelText:"Cancelar"}}).afterClosed().subscribe(t=>{console.log("\u{1F534} Resultado del di\xE1logo:",t),t&&(console.log("\u{1F534} Eliminando cliente..."),this.loading=!0,this.clienteService.deleteCliente(i).subscribe({next:()=>{this.snackBar.open("Cliente eliminado","Cerrar",{duration:3e3}),this.loadClientes(),this.loading=!1},error:r=>{let a=r.error?.message||r.message||"Error al eliminar cliente";this.snackBar.open(a,"Cerrar",{duration:5e3}),this.loading=!1}}))})}static \u0275fac=function(e){return new(e||n)(k(go),k(Dt),k(xn),k(un),k(Ee),k(ii))};static \u0275cmp=N({type:n,selectors:[["app-clientes"]],decls:13,vars:4,consts:[[1,"container"],["mat-raised-button","","color","primary",1,"add-button",3,"click"],["class","spinner-container",4,"ngIf"],["mat-table","",3,"dataSource",4,"ngIf"],["style","background: #fff3e0; padding: 20px; text-align: center; border-radius: 4px;",4,"ngIf"],["class","modal-overlay",4,"ngIf"],[1,"spinner-container"],["diameter","40"],["mat-table","",3,"dataSource"],["matColumnDef","nombre"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","apellido"],["matColumnDef","email"],["matColumnDef","telefono"],["matColumnDef","acciones"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-header-cell",""],["mat-cell",""],["mat-icon-button","","color","primary",3,"click"],["mat-icon-button","","color","warn",3,"click"],["mat-header-row",""],["mat-row",""],[2,"background","#fff3e0","padding","20px","text-align","center","border-radius","4px"],["mat-raised-button","","color","primary",3,"click"],[1,"modal-overlay"],[1,"form-card"],[3,"formGroup"],["appearance","outline",1,"full-width"],["matInput","","formControlName","nombre"],["matInput","","formControlName","apellido"],["matInput","","type","email","formControlName","email"],["matInput","","formControlName","telefono"],["matInput","","formControlName","documento"],["matInput","","formControlName","direccion"],["matInput","","rows","3","formControlName","notas"],["mat-button","",3,"click"],["mat-raised-button","","color","primary",3,"click","disabled"]],template:function(e,t){e&1&&(d(0,"div",0)(1,"mat-card")(2,"mat-card-title"),h(3," Clientes "),d(4,"button",1),R("click",function(){return t.openForm()}),d(5,"mat-icon"),h(6,"add"),u(),h(7," Nuevo Cliente "),u()(),d(8,"mat-card-content"),L(9,Zw,2,0,"div",2)(10,lE,18,3,"table",3)(11,cE,5,0,"div",4),u()(),L(12,dE,45,4,"div",5),u()),e&2&&(p(9),_("ngIf",t.loading),p(),_("ngIf",!t.loading&&t.clientes.length>0),p(),_("ngIf",!t.loading&&t.clientes.length===0),p(),_("ngIf",t.showForm))},dependencies:[yt,Yt,qt,_i,En,zt,Qt,wn,Sn,Ft,ln,Rr,br,Cr,xr,Dr,yr,Sr,wr,Er,Mr,Ar,ft,mt,Fn,Tr,kr,Tn,Mn,kn,Rn,An,On,Mt,Ut,Vt,dn,en,Jt,Fr,Ir,Pn],styles:[".container[_ngcontent-%COMP%]{padding:20px;max-width:1200px;margin:0 auto}mat-card-title[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;margin-bottom:20px}.add-button[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px}.spinner-container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;height:200px}.text-center[_ngcontent-%COMP%]{text-align:center;padding:40px;color:#666}.modal-overlay[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100%;height:100%;background-color:#00000080;display:flex;justify-content:center;align-items:center;z-index:1000}.form-card[_ngcontent-%COMP%]{width:100%;max-width:500px;max-height:90vh;overflow-y:auto}.full-width[_ngcontent-%COMP%]{width:100%;margin-bottom:16px}mat-card-actions[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;gap:8px;padding:16px}table[_ngcontent-%COMP%]{width:100%;display:table!important}.mat-mdc-table[_ngcontent-%COMP%]{display:table!important}.mat-column-acciones[_ngcontent-%COMP%]{width:100px;text-align:center}"]})};var yv=(()=>{class n{_animationsDisabled=st();state="unchecked";disabled=!1;appearance="full";constructor(){}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=N({type:n,selectors:[["mat-pseudo-checkbox"]],hostAttrs:[1,"mat-pseudo-checkbox"],hostVars:12,hostBindings:function(t,r){t&2&&J("mat-pseudo-checkbox-indeterminate",r.state==="indeterminate")("mat-pseudo-checkbox-checked",r.state==="checked")("mat-pseudo-checkbox-disabled",r.disabled)("mat-pseudo-checkbox-minimal",r.appearance==="minimal")("mat-pseudo-checkbox-full",r.appearance==="full")("_mat-animation-noopable",r._animationsDisabled)},inputs:{state:"state",disabled:"disabled",appearance:"appearance"},decls:0,vars:0,template:function(t,r){},styles:[`.mat-pseudo-checkbox {
  border-radius: 2px;
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
  box-sizing: border-box;
  position: relative;
  flex-shrink: 0;
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 0.1), background-color 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox::after {
  position: absolute;
  opacity: 0;
  content: "";
  border-bottom: 2px solid currentColor;
  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-pseudo-checkbox._mat-animation-noopable::after {
  transition: none;
}

.mat-pseudo-checkbox-disabled {
  cursor: default;
}

.mat-pseudo-checkbox-indeterminate::after {
  left: 1px;
  opacity: 1;
  border-radius: 2px;
}

.mat-pseudo-checkbox-checked::after {
  left: 1px;
  border-left: 2px solid currentColor;
  transform: rotate(-45deg);
  opacity: 1;
  box-sizing: content-box;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  color: var(--mat-pseudo-checkbox-minimal-selected-checkmark-color, var(--mat-sys-primary));
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-pseudo-checkbox-full {
  border-color: var(--mat-pseudo-checkbox-full-unselected-icon-color, var(--mat-sys-on-surface-variant));
  border-width: 2px;
  border-style: solid;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-disabled {
  border-color: var(--mat-pseudo-checkbox-full-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate {
  background-color: var(--mat-pseudo-checkbox-full-selected-icon-color, var(--mat-sys-primary));
  border-color: transparent;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  color: var(--mat-pseudo-checkbox-full-selected-checkmark-color, var(--mat-sys-on-primary));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled {
  background-color: var(--mat-pseudo-checkbox-full-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--mat-pseudo-checkbox-full-disabled-selected-checkmark-color, var(--mat-sys-surface));
}

.mat-pseudo-checkbox {
  width: 18px;
  height: 18px;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after {
  width: 14px;
  height: 6px;
  transform-origin: center;
  top: -4.2426406871px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  top: 8px;
  width: 16px;
}

.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after {
  width: 10px;
  height: 4px;
  transform-origin: center;
  top: -2.8284271247px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  top: 6px;
  width: 12px;
}
`],encapsulation:2,changeDetection:0})}return n})();var uE=["text"],mE=[[["mat-icon"]],"*"],hE=["mat-icon","*"];function fE(n,i){if(n&1&&T(0,"mat-pseudo-checkbox",1),n&2){let e=D();_("disabled",e.disabled)("state",e.selected?"checked":"unchecked")}}function pE(n,i){if(n&1&&T(0,"mat-pseudo-checkbox",3),n&2){let e=D();_("disabled",e.disabled)}}function gE(n,i){if(n&1&&(d(0,"span",4),h(1),u()),n&2){let e=D();p(),oe("(",e.group.label,")")}}var Zm=new S("MAT_OPTION_PARENT_COMPONENT"),Km=new S("MatOptgroup");var qm=class{source;isUserInput;constructor(i,e=!1){this.source=i,this.isUserInput=e}},Nn=(()=>{class n{_element=l(U);_changeDetectorRef=l(Ee);_parent=l(Zm,{optional:!0});group=l(Km,{optional:!0});_signalDisableRipple=!1;_selected=!1;_active=!1;_mostRecentViewValue="";get multiple(){return this._parent&&this._parent.multiple}get selected(){return this._selected}value;id=l(et).getId("mat-option-");get disabled(){return this.group&&this.group.disabled||this._disabled()}set disabled(e){this._disabled.set(e)}_disabled=ne(!1);get disableRipple(){return this._signalDisableRipple?this._parent.disableRipple():!!this._parent?.disableRipple}get hideSingleSelectionIndicator(){return!!(this._parent&&this._parent.hideSingleSelectionIndicator)}onSelectionChange=new j;_text;_stateChanges=new P;constructor(){let e=l(dt);e.load(fr),e.load(yi),this._signalDisableRipple=!!this._parent&&er(this._parent.disableRipple)}get active(){return this._active}get viewValue(){return(this._text?.nativeElement.textContent||"").trim()}select(e=!0){this._selected||(this._selected=!0,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}deselect(e=!0){this._selected&&(this._selected=!1,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}focus(e,t){let r=this._getHostElement();typeof r.focus=="function"&&r.focus(t)}setActiveStyles(){this._active||(this._active=!0,this._changeDetectorRef.markForCheck())}setInactiveStyles(){this._active&&(this._active=!1,this._changeDetectorRef.markForCheck())}getLabel(){return this.viewValue}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!ut(e)&&(this._selectViaInteraction(),e.preventDefault())}_selectViaInteraction(){this.disabled||(this._selected=this.multiple?!this._selected:!0,this._changeDetectorRef.markForCheck(),this._emitSelectionChangeEvent(!0))}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._element.nativeElement}ngAfterViewChecked(){if(this._selected){let e=this.viewValue;e!==this._mostRecentViewValue&&(this._mostRecentViewValue&&this._stateChanges.next(),this._mostRecentViewValue=e)}}ngOnDestroy(){this._stateChanges.complete()}_emitSelectionChangeEvent(e=!1){this.onSelectionChange.emit(new qm(this,e))}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=N({type:n,selectors:[["mat-option"]],viewQuery:function(t,r){if(t&1&&ot(uE,7),t&2){let a;re(a=ae())&&(r._text=a.first)}},hostAttrs:["role","option",1,"mat-mdc-option","mdc-list-item"],hostVars:11,hostBindings:function(t,r){t&1&&R("click",function(){return r._selectViaInteraction()})("keydown",function(o){return r._handleKeydown(o)}),t&2&&(xt("id",r.id),pe("aria-selected",r.selected)("aria-disabled",r.disabled.toString()),J("mdc-list-item--selected",r.selected)("mat-mdc-option-multiple",r.multiple)("mat-mdc-option-active",r.active)("mdc-list-item--disabled",r.disabled))},inputs:{value:"value",id:"id",disabled:[2,"disabled","disabled",Z]},outputs:{onSelectionChange:"onSelectionChange"},exportAs:["matOption"],ngContentSelectors:hE,decls:8,vars:5,consts:[["text",""],["aria-hidden","true",1,"mat-mdc-option-pseudo-checkbox",3,"disabled","state"],[1,"mdc-list-item__primary-text"],["state","checked","aria-hidden","true","appearance","minimal",1,"mat-mdc-option-pseudo-checkbox",3,"disabled"],[1,"cdk-visually-hidden"],["aria-hidden","true","mat-ripple","",1,"mat-mdc-option-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled"]],template:function(t,r){t&1&&(Qe(mE),ke(0,fE,1,2,"mat-pseudo-checkbox",1),ve(1),d(2,"span",2,0),ve(4,1),u(),ke(5,pE,1,1,"mat-pseudo-checkbox",3),ke(6,gE,2,1,"span",4),T(7,"div",5)),t&2&&(Te(r.multiple?0:-1),p(5),Te(!r.multiple&&r.selected&&!r.hideSingleSelectionIndicator?5:-1),p(),Te(r.group&&r.group._inert?6:-1),p(),_("matRippleTrigger",r._getHostElement())("matRippleDisabled",r.disabled||r.disableRipple))},dependencies:[yv,Rc],styles:[`.mat-mdc-option {
  -webkit-user-select: none;
  user-select: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  min-height: 48px;
  padding: 0 16px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  color: var(--mat-option-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-option-label-text-font, var(--mat-sys-label-large-font));
  line-height: var(--mat-option-label-text-line-height, var(--mat-sys-label-large-line-height));
  font-size: var(--mat-option-label-text-size, var(--mat-sys-body-large-size));
  letter-spacing: var(--mat-option-label-text-tracking, var(--mat-sys-label-large-tracking));
  font-weight: var(--mat-option-label-text-weight, var(--mat-sys-body-large-weight));
}
.mat-mdc-option:hover:not(.mdc-list-item--disabled) {
  background-color: var(--mat-option-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-option:focus.mdc-list-item, .mat-mdc-option.mat-mdc-option-active.mdc-list-item {
  background-color: var(--mat-option-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));
  outline: 0;
}
.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) {
  background-color: var(--mat-option-selected-state-layer-color, var(--mat-sys-secondary-container));
}
.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) .mdc-list-item__primary-text {
  color: var(--mat-option-selected-state-label-text-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-option .mat-pseudo-checkbox {
  --mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--mat-option-selected-state-label-text-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-option.mdc-list-item {
  align-items: center;
  background: transparent;
}
.mat-mdc-option.mdc-list-item--disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-option.mdc-list-item--disabled .mat-mdc-option-pseudo-checkbox, .mat-mdc-option.mdc-list-item--disabled .mdc-list-item__primary-text, .mat-mdc-option.mdc-list-item--disabled > mat-icon {
  opacity: 0.38;
}
.mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 32px;
}
[dir=rtl] .mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 16px;
  padding-right: 32px;
}
.mat-mdc-option .mat-icon,
.mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-icon,
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 0;
  margin-left: 16px;
}
.mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-left: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-right: 16px;
  margin-left: 0;
}
.mat-mdc-option .mat-mdc-option-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
.mat-mdc-option .mdc-list-item__primary-text {
  white-space: normal;
  font-size: inherit;
  font-weight: inherit;
  letter-spacing: inherit;
  line-height: inherit;
  font-family: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  margin-right: auto;
}
[dir=rtl] .mat-mdc-option .mdc-list-item__primary-text {
  margin-right: 0;
  margin-left: auto;
}
@media (forced-colors: active) {
  .mat-mdc-option.mdc-list-item--selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    width: 10px;
    height: 0;
    border-bottom: solid 10px;
    border-radius: 10px;
  }
  [dir=rtl] .mat-mdc-option.mdc-list-item--selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    right: auto;
    left: 16px;
  }
}

.mat-mdc-option-multiple {
  --mat-list-list-item-selected-container-color: var(--mat-list-list-item-container-color, transparent);
}

.mat-mdc-option-active .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2,changeDetection:0})}return n})();function Cv(n,i,e){if(e.length){let t=i.toArray(),r=e.toArray(),a=0;for(let o=0;o<n+1;o++)t[o].group&&t[o].group===r[a]&&a++;return a}return 0}function Dv(n,i,e,t){return n<e?n:n+i>e+t?Math.max(0,n-t+i):e}var wv=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=q({type:n});static \u0275inj=Y({imports:[Ve]})}return n})();var Xm=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=q({type:n});static \u0275inj=Y({imports:[Tc,wv,Nn,Ve]})}return n})();var _E=["trigger"],vE=["panel"],bE=[[["mat-select-trigger"]],"*"],yE=["mat-select-trigger","*"];function CE(n,i){if(n&1&&(d(0,"span",4),h(1),u()),n&2){let e=D();p(),lt(e.placeholder)}}function DE(n,i){n&1&&ve(0)}function wE(n,i){if(n&1&&(d(0,"span",11),h(1),u()),n&2){let e=D(2);p(),lt(e.triggerValue)}}function EE(n,i){if(n&1&&(d(0,"span",5),ke(1,DE,1,0)(2,wE,2,1,"span",11),u()),n&2){let e=D();p(),Te(e.customTrigger?1:2)}}function xE(n,i){if(n&1){let e=De();d(0,"div",12,1),R("keydown",function(r){ee(e);let a=D();return te(a._handleKeydown(r))}),ve(2,1),u()}if(n&2){let e=D();It(e.panelClass),J("mat-select-panel-animations-enabled",!e._animationsDisabled)("mat-primary",(e._parentFormField==null?null:e._parentFormField.color)==="primary")("mat-accent",(e._parentFormField==null?null:e._parentFormField.color)==="accent")("mat-warn",(e._parentFormField==null?null:e._parentFormField.color)==="warn")("mat-undefined",!(e._parentFormField!=null&&e._parentFormField.color)),pe("id",e.id+"-panel")("aria-multiselectable",e.multiple)("aria-label",e.ariaLabel||null)("aria-labelledby",e._getPanelAriaLabelledby())}}var SE=new S("mat-select-scroll-strategy",{providedIn:"root",factory:()=>{let n=l(ce);return()=>$i(n)}}),ME=new S("MAT_SELECT_CONFIG"),AE=new S("MatSelectTrigger"),Qm=class{source;value;constructor(i,e){this.source=i,this.value=e}},Pr=(()=>{class n{_viewportRuler=l(Ci);_changeDetectorRef=l(Ee);_elementRef=l(U);_dir=l(ht,{optional:!0});_idGenerator=l(et);_renderer=l(Je);_parentFormField=l(fa,{optional:!0});ngControl=l(Dn,{self:!0,optional:!0});_liveAnnouncer=l(Cs);_defaultOptions=l(ME,{optional:!0});_animationsDisabled=st();_popoverLocation;_initialized=new P;_cleanupDetach;options;optionGroups;customTrigger;_positions=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"}];_scrollOptionIntoView(e){let t=this.options.toArray()[e];if(t){let r=this.panel.nativeElement,a=Cv(e,this.options,this.optionGroups),o=t._getHostElement();e===0&&a===1?r.scrollTop=0:r.scrollTop=Dv(o.offsetTop,o.offsetHeight,r.scrollTop,r.offsetHeight)}}_positioningSettled(){this._scrollOptionIntoView(this._keyManager.activeItemIndex||0)}_getChangeEvent(e){return new Qm(this,e)}_scrollStrategyFactory=l(SE);_panelOpen=!1;_compareWith=(e,t)=>e===t;_uid=this._idGenerator.getId("mat-select-");_triggerAriaLabelledBy=null;_previousControl;_destroy=new P;_errorStateTracker;stateChanges=new P;disableAutomaticLabeling=!0;userAriaDescribedBy;_selectionModel;_keyManager;_preferredOverlayOrigin;_overlayWidth;_onChange=()=>{};_onTouched=()=>{};_valueId=this._idGenerator.getId("mat-select-value-");_scrollStrategy;_overlayPanelClass=this._defaultOptions?.overlayPanelClass||"";get focused(){return this._focused||this._panelOpen}_focused=!1;controlType="mat-select";trigger;panel;_overlayDir;panelClass;disabled=!1;get disableRipple(){return this._disableRipple()}set disableRipple(e){this._disableRipple.set(e)}_disableRipple=ne(!1);tabIndex=0;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}_hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1;get placeholder(){return this._placeholder}set placeholder(e){this._placeholder=e,this.stateChanges.next()}_placeholder;get required(){return this._required??this.ngControl?.control?.hasValidator(Ie.required)??!1}set required(e){this._required=e,this.stateChanges.next()}_required;get multiple(){return this._multiple}set multiple(e){this._selectionModel,this._multiple=e}_multiple=!1;disableOptionCentering=this._defaultOptions?.disableOptionCentering??!1;get compareWith(){return this._compareWith}set compareWith(e){this._compareWith=e,this._selectionModel&&this._initializeSelection()}get value(){return this._value}set value(e){this._assignValue(e)&&this._onChange(e)}_value;ariaLabel="";ariaLabelledby;get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}typeaheadDebounceInterval;sortComparator;get id(){return this._id}set id(e){this._id=e||this._uid,this.stateChanges.next()}_id;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}panelWidth=this._defaultOptions&&typeof this._defaultOptions.panelWidth<"u"?this._defaultOptions.panelWidth:"auto";canSelectNullableOptions=this._defaultOptions?.canSelectNullableOptions??!1;optionSelectionChanges=di(()=>{let e=this.options;return e?e.changes.pipe(Rt(e),Pt(()=>hn(...e.map(t=>t.onSelectionChange)))):this._initialized.pipe(Pt(()=>this.optionSelectionChanges))});openedChange=new j;_openedStream=this.openedChange.pipe(Ye(e=>e),Oe(()=>{}));_closedStream=this.openedChange.pipe(Ye(e=>!e),Oe(()=>{}));selectionChange=new j;valueChange=new j;constructor(){let e=l(Ac),t=l(Ja,{optional:!0}),r=l(Ft,{optional:!0}),a=l(new _n("tabindex"),{optional:!0}),o=l(Is,{optional:!0});this.ngControl&&(this.ngControl.valueAccessor=this),this._defaultOptions?.typeaheadDebounceInterval!=null&&(this.typeaheadDebounceInterval=this._defaultOptions.typeaheadDebounceInterval),this._errorStateTracker=new so(e,this.ngControl,r,t,this.stateChanges),this._scrollStrategy=this._scrollStrategyFactory(),this.tabIndex=a==null?0:parseInt(a)||0,this._popoverLocation=o?.usePopover===!1?null:"inline",this.id=this.id}ngOnInit(){this._selectionModel=new Ns(this.multiple),this.stateChanges.next(),this._viewportRuler.change().pipe(Be(this._destroy)).subscribe(()=>{this.panelOpen&&(this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._changeDetectorRef.detectChanges())})}ngAfterContentInit(){this._initialized.next(),this._initialized.complete(),this._initKeyManager(),this._selectionModel.changed.pipe(Be(this._destroy)).subscribe(e=>{e.added.forEach(t=>t.select()),e.removed.forEach(t=>t.deselect())}),this.options.changes.pipe(Rt(null),Be(this._destroy)).subscribe(()=>{this._resetOptions(),this._initializeSelection()})}ngDoCheck(){let e=this._getTriggerAriaLabelledby(),t=this.ngControl;if(e!==this._triggerAriaLabelledBy){let r=this._elementRef.nativeElement;this._triggerAriaLabelledBy=e,e?r.setAttribute("aria-labelledby",e):r.removeAttribute("aria-labelledby")}t&&(this._previousControl!==t.control&&(this._previousControl!==void 0&&t.disabled!==null&&t.disabled!==this.disabled&&(this.disabled=t.disabled),this._previousControl=t.control),this.updateErrorState())}ngOnChanges(e){(e.disabled||e.userAriaDescribedBy)&&this.stateChanges.next(),e.typeaheadDebounceInterval&&this._keyManager&&this._keyManager.withTypeAhead(this.typeaheadDebounceInterval),e.panelClass&&this.panelClass instanceof Set&&(this.panelClass=Array.from(this.panelClass))}ngOnDestroy(){this._cleanupDetach?.(),this._keyManager?.destroy(),this._destroy.next(),this._destroy.complete(),this.stateChanges.complete(),this._clearFromModal()}toggle(){this.panelOpen?this.close():this.open()}open(){this._canOpen()&&(this._parentFormField&&(this._preferredOverlayOrigin=this._parentFormField.getConnectedOverlayOrigin()),this._cleanupDetach?.(),this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._applyModalPanelOwnership(),this._panelOpen=!0,this._overlayDir.positionChange.pipe(vt(1)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this._positioningSettled()}),this._overlayDir.attachOverlay(),this._keyManager.withHorizontalOrientation(null),this._highlightCorrectOption(),this._changeDetectorRef.markForCheck(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!0)))}_trackedModal=null;_applyModalPanelOwnership(){let e=this._elementRef.nativeElement.closest('body > .cdk-overlay-container [aria-modal="true"]');if(!e)return;let t=`${this.id}-panel`;this._trackedModal&&wc(this._trackedModal,"aria-owns",t),pm(e,"aria-owns",t),this._trackedModal=e}_clearFromModal(){if(!this._trackedModal)return;let e=`${this.id}-panel`;wc(this._trackedModal,"aria-owns",e),this._trackedModal=null}close(){this._panelOpen&&(this._panelOpen=!1,this._exitAndDetach(),this._keyManager.withHorizontalOrientation(this._isRtl()?"rtl":"ltr"),this._changeDetectorRef.markForCheck(),this._onTouched(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!1)))}_exitAndDetach(){if(this._animationsDisabled||!this.panel){this._detachOverlay();return}this._cleanupDetach?.(),this._cleanupDetach=()=>{t(),clearTimeout(r),this._cleanupDetach=void 0};let e=this.panel.nativeElement,t=this._renderer.listen(e,"animationend",a=>{a.animationName==="_mat-select-exit"&&(this._cleanupDetach?.(),this._detachOverlay())}),r=setTimeout(()=>{this._cleanupDetach?.(),this._detachOverlay()},200);e.classList.add("mat-select-panel-exit")}_detachOverlay(){this._overlayDir.detachOverlay(),this._changeDetectorRef.markForCheck()}writeValue(e){this._assignValue(e)}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck(),this.stateChanges.next()}get panelOpen(){return this._panelOpen}get selected(){return this.multiple?this._selectionModel?.selected||[]:this._selectionModel?.selected[0]}get triggerValue(){if(this.empty)return"";if(this._multiple){let e=this._selectionModel.selected.map(t=>t.viewValue);return this._isRtl()&&e.reverse(),e.join(", ")}return this._selectionModel.selected[0].viewValue}updateErrorState(){this._errorStateTracker.updateErrorState()}_isRtl(){return this._dir?this._dir.value==="rtl":!1}_handleKeydown(e){this.disabled||(this.panelOpen?this._handleOpenKeydown(e):this._handleClosedKeydown(e))}_handleClosedKeydown(e){let t=e.keyCode,r=t===40||t===38||t===37||t===39,a=t===13||t===32,o=this._keyManager;if(!o.isTyping()&&a&&!ut(e)||(this.multiple||e.altKey)&&r)e.preventDefault(),this.open();else if(!this.multiple){let s=this.selected;o.onKeydown(e);let c=this.selected;c&&s!==c&&this._liveAnnouncer.announce(c.viewValue,1e4)}}_handleOpenKeydown(e){let t=this._keyManager,r=e.keyCode,a=r===40||r===38,o=t.isTyping();if(a&&e.altKey)e.preventDefault(),this.close();else if(!o&&(r===13||r===32)&&t.activeItem&&!ut(e))e.preventDefault(),t.activeItem._selectViaInteraction();else if(!o&&this._multiple&&r===65&&e.ctrlKey){e.preventDefault();let s=this.options.some(c=>!c.disabled&&!c.selected);this.options.forEach(c=>{c.disabled||(s?c.select():c.deselect())})}else{let s=t.activeItemIndex;t.onKeydown(e),this._multiple&&a&&e.shiftKey&&t.activeItem&&t.activeItemIndex!==s&&t.activeItem._selectViaInteraction()}}_handleOverlayKeydown(e){e.keyCode===27&&!ut(e)&&(e.preventDefault(),this.close())}_onFocus(){this.disabled||(this._focused=!0,this.stateChanges.next())}_onBlur(){this._focused=!1,this._keyManager?.cancelTypeahead(),!this.disabled&&!this.panelOpen&&(this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next())}get empty(){return!this._selectionModel||this._selectionModel.isEmpty()}_initializeSelection(){Promise.resolve().then(()=>{this.ngControl&&(this._value=this.ngControl.value),this._setSelectionByValue(this._value),this.stateChanges.next()})}_setSelectionByValue(e){if(this.options.forEach(t=>t.setInactiveStyles()),this._selectionModel.clear(),this.multiple&&e)Array.isArray(e),e.forEach(t=>this._selectOptionByValue(t)),this._sortValues();else{let t=this._selectOptionByValue(e);t?this._keyManager.updateActiveItem(t):this.panelOpen||this._keyManager.updateActiveItem(-1)}this._changeDetectorRef.markForCheck()}_selectOptionByValue(e){let t=this.options.find(r=>{if(this._selectionModel.isSelected(r))return!1;try{return(r.value!=null||this.canSelectNullableOptions)&&this._compareWith(r.value,e)}catch{return!1}});return t&&this._selectionModel.select(t),t}_assignValue(e){return e!==this._value||this._multiple&&Array.isArray(e)?(this.options&&this._setSelectionByValue(e),this._value=e,!0):!1}_skipPredicate=e=>this.panelOpen?!1:e.disabled;_getOverlayWidth(e){return this.panelWidth==="auto"?(e instanceof uo?e.elementRef:e||this._elementRef).nativeElement.getBoundingClientRect().width:this.panelWidth===null?"":this.panelWidth}_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}_initKeyManager(){this._keyManager=new xs(this.options).withTypeAhead(this.typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl()?"rtl":"ltr").withHomeAndEnd().withPageUpDown().withAllowedModifierKeys(["shiftKey"]).skipPredicate(this._skipPredicate),this._keyManager.tabOut.subscribe(()=>{this.panelOpen&&(!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction(),this.focus(),this.close())}),this._keyManager.change.subscribe(()=>{this._panelOpen&&this.panel?this._scrollOptionIntoView(this._keyManager.activeItemIndex||0):!this._panelOpen&&!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction()})}_resetOptions(){let e=hn(this.options.changes,this._destroy);this.optionSelectionChanges.pipe(Be(e)).subscribe(t=>{this._onSelect(t.source,t.isUserInput),t.isUserInput&&!this.multiple&&this._panelOpen&&(this.close(),this.focus())}),hn(...this.options.map(t=>t._stateChanges)).pipe(Be(e)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this.stateChanges.next()})}_onSelect(e,t){let r=this._selectionModel.isSelected(e);!this.canSelectNullableOptions&&e.value==null&&!this._multiple?(e.deselect(),this._selectionModel.clear(),this.value!=null&&this._propagateChanges(e.value)):(r!==e.selected&&(e.selected?this._selectionModel.select(e):this._selectionModel.deselect(e)),t&&this._keyManager.setActiveItem(e),this.multiple&&(this._sortValues(),t&&this.focus())),r!==this._selectionModel.isSelected(e)&&this._propagateChanges(),this.stateChanges.next()}_sortValues(){if(this.multiple){let e=this.options.toArray();this._selectionModel.sort((t,r)=>this.sortComparator?this.sortComparator(t,r,e):e.indexOf(t)-e.indexOf(r)),this.stateChanges.next()}}_propagateChanges(e){let t;this.multiple?t=this.selected.map(r=>r.value):t=this.selected?this.selected.value:e,this._value=t,this.valueChange.emit(t),this._onChange(t),this.selectionChange.emit(this._getChangeEvent(t)),this._changeDetectorRef.markForCheck()}_highlightCorrectOption(){if(this._keyManager)if(this.empty){let e=-1;for(let t=0;t<this.options.length;t++)if(!this.options.get(t).disabled){e=t;break}this._keyManager.setActiveItem(e)}else this._keyManager.setActiveItem(this._selectionModel.selected[0])}_canOpen(){return!this._panelOpen&&!this.disabled&&this.options?.length>0&&!!this._overlayDir}focus(e){this._elementRef.nativeElement.focus(e)}_getPanelAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||null,t=e?e+" ":"";return this.ariaLabelledby?t+this.ariaLabelledby:e}_getAriaActiveDescendant(){return this.panelOpen&&this._keyManager&&this._keyManager.activeItem?this._keyManager.activeItem.id:null}_getTriggerAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||"";return this.ariaLabelledby&&(e+=" "+this.ariaLabelledby),e||(e=this._valueId),e}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let t=this._elementRef.nativeElement;e.length?t.setAttribute("aria-describedby",e.join(" ")):t.removeAttribute("aria-describedby")}onContainerClick(e){let t=Lt(e);t&&(t.tagName==="MAT-OPTION"||t.classList.contains("cdk-overlay-backdrop")||t.closest(".mat-mdc-select-panel"))||(this.focus(),this.open())}get shouldLabelFloat(){return this.panelOpen||!this.empty||this.focused&&!!this.placeholder}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=N({type:n,selectors:[["mat-select"]],contentQueries:function(t,r,a){if(t&1&&gn(a,AE,5)(a,Nn,5)(a,Km,5),t&2){let o;re(o=ae())&&(r.customTrigger=o.first),re(o=ae())&&(r.options=o),re(o=ae())&&(r.optionGroups=o)}},viewQuery:function(t,r){if(t&1&&ot(_E,5)(vE,5)(zc,5),t&2){let a;re(a=ae())&&(r.trigger=a.first),re(a=ae())&&(r.panel=a.first),re(a=ae())&&(r._overlayDir=a.first)}},hostAttrs:["role","combobox","aria-haspopup","listbox",1,"mat-mdc-select"],hostVars:21,hostBindings:function(t,r){t&1&&R("keydown",function(o){return r._handleKeydown(o)})("focus",function(){return r._onFocus()})("blur",function(){return r._onBlur()}),t&2&&(pe("id",r.id)("tabindex",r.disabled?-1:r.tabIndex)("aria-controls",r.panelOpen?r.id+"-panel":null)("aria-expanded",r.panelOpen)("aria-label",r.ariaLabel||null)("aria-required",r.required.toString())("aria-disabled",r.disabled.toString())("aria-invalid",r.errorState)("aria-activedescendant",r._getAriaActiveDescendant()),J("mat-mdc-select-disabled",r.disabled)("mat-mdc-select-invalid",r.errorState)("mat-mdc-select-required",r.required)("mat-mdc-select-empty",r.empty)("mat-mdc-select-multiple",r.multiple)("mat-select-open",r.panelOpen))},inputs:{userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],panelClass:"panelClass",disabled:[2,"disabled","disabled",Z],disableRipple:[2,"disableRipple","disableRipple",Z],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:vn(e)],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",Z],placeholder:"placeholder",required:[2,"required","required",Z],multiple:[2,"multiple","multiple",Z],disableOptionCentering:[2,"disableOptionCentering","disableOptionCentering",Z],compareWith:"compareWith",value:"value",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],errorStateMatcher:"errorStateMatcher",typeaheadDebounceInterval:[2,"typeaheadDebounceInterval","typeaheadDebounceInterval",vn],sortComparator:"sortComparator",id:"id",panelWidth:"panelWidth",canSelectNullableOptions:[2,"canSelectNullableOptions","canSelectNullableOptions",Z]},outputs:{openedChange:"openedChange",_openedStream:"opened",_closedStream:"closed",selectionChange:"selectionChange",valueChange:"valueChange"},exportAs:["matSelect"],features:[je([{provide:oo,useExisting:n},{provide:Zm,useExisting:n}]),Ue],ngContentSelectors:yE,decls:11,vars:10,consts:[["fallbackOverlayOrigin","cdkOverlayOrigin","trigger",""],["panel",""],["cdk-overlay-origin","",1,"mat-mdc-select-trigger",3,"click"],[1,"mat-mdc-select-value"],[1,"mat-mdc-select-placeholder","mat-mdc-select-min-line"],[1,"mat-mdc-select-value-text"],[1,"mat-mdc-select-arrow-wrapper"],[1,"mat-mdc-select-arrow"],["viewBox","0 0 24 24","width","24px","height","24px","focusable","false","aria-hidden","true"],["d","M7 10l5 5 5-5z"],["cdk-connected-overlay","","cdkConnectedOverlayHasBackdrop","","cdkConnectedOverlayBackdropClass","cdk-overlay-transparent-backdrop",3,"detach","backdropClick","overlayKeydown","cdkConnectedOverlayDisableClose","cdkConnectedOverlayPanelClass","cdkConnectedOverlayScrollStrategy","cdkConnectedOverlayOrigin","cdkConnectedOverlayPositions","cdkConnectedOverlayWidth","cdkConnectedOverlayFlexibleDimensions","cdkConnectedOverlayUsePopover"],[1,"mat-mdc-select-min-line"],["role","listbox","tabindex","-1",1,"mat-mdc-select-panel","mdc-menu-surface","mdc-menu-surface--open",3,"keydown"]],template:function(t,r){if(t&1&&(Qe(bE),d(0,"div",2,0),R("click",function(){return r.open()}),d(3,"div",3),ke(4,CE,2,1,"span",4)(5,EE,3,1,"span",5),u(),d(6,"div",6)(7,"div",7),fn(),d(8,"svg",8),T(9,"path",9),u()()()(),L(10,xE,3,16,"ng-template",10),R("detach",function(){return r.close()})("backdropClick",function(){return r.close()})("overlayKeydown",function(o){return r._handleOverlayKeydown(o)})),t&2){let a=$n(1);p(3),pe("id",r._valueId),p(),Te(r.empty?4:5),p(6),_("cdkConnectedOverlayDisableClose",!0)("cdkConnectedOverlayPanelClass",r._overlayPanelClass)("cdkConnectedOverlayScrollStrategy",r._scrollStrategy)("cdkConnectedOverlayOrigin",r._preferredOverlayOrigin||a)("cdkConnectedOverlayPositions",r._positions)("cdkConnectedOverlayWidth",r._overlayWidth)("cdkConnectedOverlayFlexibleDimensions",!0)("cdkConnectedOverlayUsePopover",r._popoverLocation)}},dependencies:[uo,zc],styles:[`@keyframes _mat-select-enter {
  from {
    opacity: 0;
    transform: scaleY(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-select-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-select {
  display: inline-block;
  width: 100%;
  outline: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  color: var(--mat-select-enabled-trigger-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-select-trigger-text-font, var(--mat-sys-body-large-font));
  line-height: var(--mat-select-trigger-text-line-height, var(--mat-sys-body-large-line-height));
  font-size: var(--mat-select-trigger-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-select-trigger-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-select-trigger-text-tracking, var(--mat-sys-body-large-tracking));
}

div.mat-mdc-select-panel {
  box-shadow: var(--mat-select-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
}

.mat-mdc-select-disabled {
  color: var(--mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-select-disabled .mat-mdc-select-placeholder {
  color: var(--mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-select-trigger {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  box-sizing: border-box;
  width: 100%;
}
.mat-mdc-select-disabled .mat-mdc-select-trigger {
  -webkit-user-select: none;
  user-select: none;
  cursor: default;
}

.mat-mdc-select-value {
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.mat-mdc-select-value-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.mat-mdc-select-arrow-wrapper {
  height: 24px;
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
}
.mat-form-field-appearance-fill .mdc-text-field--no-label .mat-mdc-select-arrow-wrapper {
  transform: none;
}

.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-invalid .mat-mdc-select-arrow,
.mat-form-field-invalid:not(.mat-form-field-disabled) .mat-mdc-form-field-infix::after {
  color: var(--mat-select-invalid-arrow-color, var(--mat-sys-error));
}

.mat-mdc-select-arrow {
  width: 10px;
  height: 5px;
  position: relative;
  color: var(--mat-select-enabled-arrow-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-form-field.mat-focused .mat-mdc-select-arrow {
  color: var(--mat-select-focused-arrow-color, var(--mat-sys-primary));
}
.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-disabled .mat-mdc-select-arrow {
  color: var(--mat-select-disabled-arrow-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-select-open .mat-mdc-select-arrow {
  transform: rotate(180deg);
}
.mat-form-field-animations-enabled .mat-mdc-select-arrow {
  transition: transform 80ms linear;
}
.mat-mdc-select-arrow svg {
  fill: currentColor;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
@media (forced-colors: active) {
  .mat-mdc-select-arrow svg {
    fill: CanvasText;
  }
  .mat-mdc-select-disabled .mat-mdc-select-arrow svg {
    fill: GrayText;
  }
}

div.mat-mdc-select-panel {
  width: 100%;
  max-height: 275px;
  outline: 0;
  overflow: auto;
  padding: 8px 0;
  box-sizing: border-box;
  transform-origin: top center;
  border-radius: 0 0 4px 4px;
  position: relative;
  background-color: var(--mat-select-panel-background-color, var(--mat-sys-surface-container));
}
.mat-mdc-select-panel-above div.mat-mdc-select-panel {
  border-radius: 4px 4px 0 0;
  transform-origin: bottom center;
}
@media (forced-colors: active) {
  div.mat-mdc-select-panel {
    outline: solid 1px;
  }
}

.mat-select-panel-animations-enabled {
  animation: _mat-select-enter 120ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-select-panel-animations-enabled.mat-select-panel-exit {
  animation: _mat-select-exit 100ms linear;
}

.mat-mdc-select-placeholder {
  transition: color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1);
  color: var(--mat-select-placeholder-text-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-form-field:not(.mat-form-field-animations-enabled) .mat-mdc-select-placeholder, ._mat-animation-noopable .mat-mdc-select-placeholder {
  transition: none;
}
.mat-form-field-hide-placeholder .mat-mdc-select-placeholder {
  color: transparent;
  -webkit-text-fill-color: transparent;
  transition: none;
  display: block;
}

.mat-mdc-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper {
  cursor: pointer;
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mat-mdc-floating-label {
  max-width: calc(100% - 18px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mdc-floating-label--float-above {
  max-width: calc(100% / 0.75 - 24px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-notched-outline__notch {
  max-width: calc(100% - 60px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-text-field--label-floating .mdc-notched-outline__notch {
  max-width: calc(100% - 24px);
}

.mat-mdc-select-min-line:empty::before {
  content: " ";
  white-space: pre;
  width: 1px;
  display: inline-block;
  visibility: hidden;
}

.mat-form-field-appearance-fill .mat-mdc-select-arrow-wrapper {
  transform: var(--mat-select-arrow-transform, translateY(-8px));
}
`],encapsulation:2,changeDetection:0})}return n})();var Nr=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=q({type:n});static \u0275inj=Y({imports:[ti,Xm,Ve,_a,Mt,Xm]})}return n})();var Ev=["ACTIVO","CERRADO","SUSPENDIDO","ARCHIVADO"];var Lr=class n{constructor(i){this.http=i}apiUrl=xi.apiUrl;getCasos(){return this.http.get(`${this.apiUrl}/casos`)}getCasosPorCliente(i){return this.http.get(`${this.apiUrl}/casos/cliente/${i}`)}getCaso(i){return this.http.get(`${this.apiUrl}/casos/${i}`)}createCaso(i){return this.http.post(`${this.apiUrl}/casos`,i)}updateCaso(i,e){return this.http.put(`${this.apiUrl}/casos/${i}`,e)}deleteCaso(i){return console.log("\u{1F535} Service - Eliminando caso con ID:",i),this.http.delete(`${this.apiUrl}/casos/${i}`)}cambiarEstado(i,e){return this.http.patch(`${this.apiUrl}/casos/${i}/estado?estado=${e}`,{})}static \u0275fac=function(e){return new(e||n)(G(Xt))};static \u0275prov=w({token:n,factory:n.\u0275fac,providedIn:"root"})};var RE=(n,i,e)=>({"estado-activo":n,"estado-cerrado":i,"estado-otros":e});function kE(n,i){n&1&&(d(0,"div",6),T(1,"mat-spinner",7),u())}function TE(n,i){n&1&&(d(0,"th",18),h(1," T\xEDtulo "),u())}function IE(n,i){if(n&1&&(d(0,"td",19),h(1),u()),n&2){let e=i.$implicit;p(),oe(" ",e.titulo," ")}}function FE(n,i){n&1&&(d(0,"th",18),h(1," Cliente "),u())}function OE(n,i){if(n&1&&(d(0,"td",19),h(1),u()),n&2){let e=i.$implicit;p(),qr(" ",e.clienteNombre," ",e.clienteApellido," ")}}function PE(n,i){n&1&&(d(0,"th",18),h(1," N\xB0 Expediente "),u())}function NE(n,i){if(n&1&&(d(0,"td",19),h(1),u()),n&2){let e=i.$implicit;p(),oe(" ",e.numeroExpediente||"-"," ")}}function LE(n,i){n&1&&(d(0,"th",18),h(1," Estado "),u())}function VE(n,i){if(n&1&&(d(0,"td",19)(1,"span",20),h(2),u()()),n&2){let e=i.$implicit;p(),_("ngClass",of(2,RE,e.estado==="ACTIVO",e.estado==="CERRADO",e.estado!=="ACTIVO"&&e.estado!=="CERRADO")),p(),oe(" ",e.estado," ")}}function BE(n,i){n&1&&(d(0,"th",18),h(1," Acciones "),u())}function jE(n,i){if(n&1){let e=De();d(0,"td",19)(1,"button",21),R("click",function(){let r=ee(e).$implicit,a=D(2);return te(a.deleteCaso(r.id))}),d(2,"mat-icon"),h(3,"delete"),u()()()}}function zE(n,i){n&1&&T(0,"tr",22)}function UE(n,i){n&1&&T(0,"tr",23)}function HE(n,i){if(n&1&&(d(0,"table",8),Pe(1,9),L(2,TE,2,0,"th",10)(3,IE,2,1,"td",11),Ne(),Pe(4,12),L(5,FE,2,0,"th",10)(6,OE,2,2,"td",11),Ne(),Pe(7,13),L(8,PE,2,0,"th",10)(9,NE,2,1,"td",11),Ne(),Pe(10,14),L(11,LE,2,0,"th",10)(12,VE,3,6,"td",11),Ne(),Pe(13,15),L(14,BE,2,0,"th",10)(15,jE,4,0,"td",11),Ne(),L(16,zE,1,0,"tr",16)(17,UE,1,0,"tr",17),u()),n&2){let e=D();_("dataSource",e.casos),p(16),_("matHeaderRowDef",e.displayedColumns),p(),_("matRowDefColumns",e.displayedColumns)}}function $E(n,i){if(n&1){let e=De();d(0,"div",24)(1,"p"),h(2,"No hay casos registrados."),u(),d(3,"button",25),R("click",function(){ee(e);let r=D();return te(r.openForm())}),h(4,"Crear primer caso"),u()()}}function GE(n,i){if(n&1&&(d(0,"mat-option",37),h(1),u()),n&2){let e=i.$implicit;_("value",e.id),p(),Zr(" ",e.nombre," ",e.apellido," - ",e.email," ")}}function WE(n,i){if(n&1){let e=De();d(0,"div",26)(1,"mat-card",27)(2,"mat-card-title"),h(3,"Nuevo Caso"),u(),d(4,"mat-card-content")(5,"form",28)(6,"mat-form-field",29)(7,"mat-label"),h(8,"Cliente *"),u(),d(9,"mat-select",30),L(10,GE,2,4,"mat-option",31),u(),d(11,"mat-error"),h(12,"Cliente es obligatorio"),u()(),d(13,"mat-form-field",29)(14,"mat-label"),h(15,"T\xEDtulo *"),u(),T(16,"input",32),d(17,"mat-error"),h(18,"T\xEDtulo es obligatorio"),u()(),d(19,"mat-form-field",29)(20,"mat-label"),h(21,"Descripci\xF3n"),u(),T(22,"textarea",33),u(),d(23,"mat-form-field",29)(24,"mat-label"),h(25,"N\xFAmero de Expediente"),u(),T(26,"input",34),u()()(),d(27,"mat-card-actions")(28,"button",35),R("click",function(){ee(e);let r=D();return te(r.closeForm())}),h(29,"Cancelar"),u(),d(30,"button",36),R("click",function(){ee(e);let r=D();return te(r.saveCaso())}),h(31," Guardar "),u()()()()}if(n&2){let e=D();p(5),_("formGroup",e.casoForm),p(5),_("ngForOf",e.clientes),p(20),_("disabled",e.casoForm.invalid)}}var sd=class n{constructor(i,e,t,r,a,o,s){this.casoService=i;this.clienteService=e;this.authService=t;this.fb=r;this.snackBar=a;this.cdr=o;this.dialog=s;this.casoForm=this.fb.group({titulo:["",Ie.required],descripcion:[""],numeroExpediente:[""],clienteId:["",Ie.required]})}casos=[];clientes=[];displayedColumns=["titulo","cliente","numeroExpediente","estado","acciones"];loading=!0;showForm=!1;editMode=!1;selectedCasoId=null;casoForm;estados=Ev;ngOnInit(){this.loadClientes(),this.loadCasos()}loadClientes(){this.clienteService.getClientes().subscribe({next:i=>{this.clientes=Array.isArray(i)?i:i?.content||[],this.cdr.detectChanges()},error:i=>{console.error("Error al cargar clientes:",i)}})}loadCasos(){if(!this.authService.getToken()){this.authService.logout(),window.location.href="/login";return}this.loading=!0,this.cdr.detectChanges(),this.casoService.getCasos().subscribe({next:e=>{console.log("\u{1F4E6} Casos recibidos:",e),this.casos=Array.isArray(e)?e:e?.content||[],this.loading=!1,this.cdr.detectChanges()},error:e=>{console.error("\u274C Error al cargar casos:",e),this.snackBar.open("Error al cargar casos","Cerrar",{duration:3e3}),this.loading=!1,this.cdr.detectChanges(),(e.status===401||e.status===403)&&(this.authService.logout(),window.location.href="/login")}})}openForm(){this.showForm=!0,this.editMode=!1,this.selectedCasoId=null,this.casoForm.reset({estado:"ACTIVO"})}closeForm(){this.showForm=!1,this.casoForm.reset()}editCaso(i){this.editMode=!0,this.selectedCasoId=i.id,this.casoForm.patchValue({titulo:i.titulo,descripcion:i.descripcion,numeroExpediente:i.numeroExpediente,estado:i.estado,clienteId:i.clienteId}),this.showForm=!0}saveCaso(){if(this.casoForm.invalid)return;this.loading=!0;let i=this.casoForm.value;this.editMode&&this.selectedCasoId?this.casoService.updateCaso(this.selectedCasoId,i).subscribe({next:()=>{this.snackBar.open("Caso actualizado","Cerrar",{duration:3e3}),this.loadCasos(),this.closeForm()},error:e=>{this.snackBar.open("Error al actualizar caso","Cerrar",{duration:3e3}),this.loading=!1}}):this.casoService.createCaso(i).subscribe({next:()=>{this.snackBar.open("Caso creado","Cerrar",{duration:3e3}),this.loadCasos(),this.closeForm()},error:e=>{this.snackBar.open("Error al crear caso","Cerrar",{duration:3e3}),this.loading=!1}})}deleteCaso(i){console.log("\u{1F534} ELIMINAR - Entr\xF3 al m\xE9todo con ID:",i),this.dialog.open(Si,{width:"400px",data:{title:"Confirmar eliminaci\xF3n",message:"\xBFEst\xE1s seguro de eliminar este caso? Esta acci\xF3n no se puede deshacer.",confirmText:"Eliminar",cancelText:"Cancelar"}}).afterClosed().subscribe(t=>{console.log("\u{1F534} Resultado del di\xE1logo:",t),t?(console.log("\u{1F534} ELIMINAR - Confirmado, procediendo..."),this.loading=!0,this.casoService.deleteCaso(i).subscribe({next:()=>{console.log("\u2705 Eliminado correctamente"),this.snackBar.open("Caso eliminado","Cerrar",{duration:3e3}),this.loadCasos()},error:r=>{console.error("\u274C Error:",r),this.snackBar.open("Error al eliminar caso","Cerrar",{duration:3e3}),this.loading=!1}})):console.log("\u{1F534} ELIMINAR - Cancelado por el usuario")})}static \u0275fac=function(e){return new(e||n)(k(Lr),k(go),k(Dt),k(xn),k(un),k(Ee),k(ii))};static \u0275cmp=N({type:n,selectors:[["app-casos"]],decls:13,vars:4,consts:[[1,"container"],["mat-raised-button","","color","primary",1,"add-button",3,"click"],["class","spinner-container",4,"ngIf"],["mat-table","",3,"dataSource",4,"ngIf"],["class","empty-state",4,"ngIf"],["class","modal-overlay",4,"ngIf"],[1,"spinner-container"],["diameter","40"],["mat-table","",3,"dataSource"],["matColumnDef","titulo"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","cliente"],["matColumnDef","numeroExpediente"],["matColumnDef","estado"],["matColumnDef","acciones"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-header-cell",""],["mat-cell",""],[3,"ngClass"],["mat-icon-button","","color","warn",3,"click"],["mat-header-row",""],["mat-row",""],[1,"empty-state"],["mat-raised-button","","color","primary",3,"click"],[1,"modal-overlay"],[1,"form-card"],[3,"formGroup"],["appearance","outline",1,"full-width"],["formControlName","clienteId"],[3,"value",4,"ngFor","ngForOf"],["matInput","","formControlName","titulo"],["matInput","","rows","3","formControlName","descripcion"],["matInput","","formControlName","numeroExpediente"],["mat-button","",3,"click"],["mat-raised-button","","color","primary",3,"click","disabled"],[3,"value"]],template:function(e,t){e&1&&(d(0,"div",0)(1,"mat-card")(2,"mat-card-title"),h(3," Casos "),d(4,"button",1),R("click",function(){return t.openForm()}),d(5,"mat-icon"),h(6,"add"),u(),h(7," Nuevo Caso "),u()(),d(8,"mat-card-content"),L(9,kE,2,0,"div",2)(10,HE,18,3,"table",3)(11,$E,5,0,"div",4),u()(),L(12,WE,32,3,"div",5),u()),e&2&&(p(9),_("ngIf",t.loading),p(),_("ngIf",!t.loading&&t.casos.length>0),p(),_("ngIf",!t.loading&&t.casos.length===0),p(),_("ngIf",t.showForm))},dependencies:[yt,Jr,tr,Yt,qt,_i,En,zt,Qt,wn,Sn,Ft,ln,Rr,br,Cr,xr,Dr,yr,Sr,wr,Er,Mr,Ar,ft,mt,Fn,Tr,kr,Tn,Mn,kn,Rn,An,On,Mt,Ut,Vt,dn,en,Jt,Nr,Pr,Nn,Fr,Ir,Pn],styles:[".container[_ngcontent-%COMP%]{padding:20px;max-width:1200px;margin:0 auto}mat-card-title[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;margin-bottom:20px}.add-button[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px}.spinner-container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;height:200px}.empty-state[_ngcontent-%COMP%]{text-align:center;padding:40px;color:#666}.modal-overlay[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100%;height:100%;background-color:#00000080;display:flex;justify-content:center;align-items:center;z-index:1000}.form-card[_ngcontent-%COMP%]{width:100%;max-width:500px;max-height:90vh;overflow-y:auto}.full-width[_ngcontent-%COMP%]{width:100%;margin-bottom:16px}mat-card-actions[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;gap:8px;padding:16px}table[_ngcontent-%COMP%]{width:100%}.mat-column-acciones[_ngcontent-%COMP%]{width:100px;text-align:center}.mat-column-estado[_ngcontent-%COMP%]{width:150px}.estado-activo[_ngcontent-%COMP%]{color:#4caf50;font-weight:500}.estado-cerrado[_ngcontent-%COMP%]{color:#f44336;font-weight:500}.estado-otros[_ngcontent-%COMP%]{color:#ff9800;font-weight:500}"]})};var eh=new S("MAT_DATE_LOCALE",{providedIn:"root",factory:()=>l(al)}),_o="Method not implemented",Ht=class{locale;_localeChanges=new P;localeChanges=this._localeChanges;setTime(i,e,t,r){throw new Error(_o)}getHours(i){throw new Error(_o)}getMinutes(i){throw new Error(_o)}getSeconds(i){throw new Error(_o)}parseTime(i,e){throw new Error(_o)}addSeconds(i,e){throw new Error(_o)}getValidDateOrNull(i){return this.isDateInstance(i)&&this.isValid(i)?i:null}deserialize(i){return i==null||this.isDateInstance(i)&&this.isValid(i)?i:this.invalid()}setLocale(i){this.locale=i,this._localeChanges.next()}compareDate(i,e){return this.getYear(i)-this.getYear(e)||this.getMonth(i)-this.getMonth(e)||this.getDate(i)-this.getDate(e)}compareTime(i,e){return this.getHours(i)-this.getHours(e)||this.getMinutes(i)-this.getMinutes(e)||this.getSeconds(i)-this.getSeconds(e)}sameDate(i,e){if(i&&e){let t=this.isValid(i),r=this.isValid(e);return t&&r?!this.compareDate(i,e):t==r}return i==e}sameTime(i,e){if(i&&e){let t=this.isValid(i),r=this.isValid(e);return t&&r?!this.compareTime(i,e):t==r}return i==e}clampDate(i,e,t){return e&&this.compareDate(i,e)<0?e:t&&this.compareDate(i,t)>0?t:i}},Vr=new S("mat-date-formats");var YE=["tooltip"],qE=20;var ZE=new S("mat-tooltip-scroll-strategy",{providedIn:"root",factory:()=>{let n=l(ce);return()=>$i(n,{scrollThrottle:qE})}}),KE=new S("mat-tooltip-default-options",{providedIn:"root",factory:()=>({showDelay:0,hideDelay:0,touchendHideDelay:1500})});var xv="tooltip-panel",XE={passive:!0},QE=8,JE=8,ex=24,tx=200,Sv=(()=>{class n{_elementRef=l(U);_ngZone=l(de);_platform=l(xe);_ariaDescriber=l(n_);_focusMonitor=l(bi);_dir=l(ht);_injector=l(ce);_viewContainerRef=l(gt);_mediaMatcher=l(io);_document=l(X);_renderer=l(Je);_animationsDisabled=st();_defaultOptions=l(KE,{optional:!0});_overlayRef=null;_tooltipInstance=null;_overlayPanelClass;_portal;_position="below";_positionAtOrigin=!1;_disabled=!1;_tooltipClass;_viewInitialized=!1;_pointerExitEventsInitialized=!1;_tooltipComponent=nx;_viewportMargin=8;_currentPosition;_cssClassPrefix="mat-mdc";_ariaDescriptionPending=!1;_dirSubscribed=!1;get position(){return this._position}set position(e){e!==this._position&&(this._position=e,this._overlayRef&&(this._updatePosition(this._overlayRef),this._tooltipInstance?.show(0),this._overlayRef.updatePosition()))}get positionAtOrigin(){return this._positionAtOrigin}set positionAtOrigin(e){this._positionAtOrigin=Ui(e),this._detach(),this._overlayRef=null}get disabled(){return this._disabled}set disabled(e){let t=Ui(e);this._disabled!==t&&(this._disabled=t,t?this.hide(0):this._setupPointerEnterEventsIfNeeded(),this._syncAriaDescription(this.message))}get showDelay(){return this._showDelay}set showDelay(e){this._showDelay=Bi(e)}_showDelay;get hideDelay(){return this._hideDelay}set hideDelay(e){this._hideDelay=Bi(e),this._tooltipInstance&&(this._tooltipInstance._mouseLeaveHideDelay=this._hideDelay)}_hideDelay;touchGestures="auto";get message(){return this._message}set message(e){let t=this._message;this._message=e!=null?String(e).trim():"",!this._message&&this._isTooltipVisible()?this.hide(0):(this._setupPointerEnterEventsIfNeeded(),this._updateTooltipMessage()),this._syncAriaDescription(t)}_message="";get tooltipClass(){return this._tooltipClass}set tooltipClass(e){this._tooltipClass=e,this._tooltipInstance&&this._setTooltipClass(this._tooltipClass)}_eventCleanups=[];_touchstartTimeout=null;_destroyed=new P;_isDestroyed=!1;constructor(){let e=this._defaultOptions;e&&(this._showDelay=e.showDelay,this._hideDelay=e.hideDelay,e.position&&(this.position=e.position),e.positionAtOrigin&&(this.positionAtOrigin=e.positionAtOrigin),e.touchGestures&&(this.touchGestures=e.touchGestures),e.tooltipClass&&(this.tooltipClass=e.tooltipClass)),this._viewportMargin=QE}ngAfterViewInit(){this._viewInitialized=!0,this._setupPointerEnterEventsIfNeeded(),this._focusMonitor.monitor(this._elementRef).pipe(Be(this._destroyed)).subscribe(e=>{e?e==="keyboard"&&this._ngZone.run(()=>this.show()):this._ngZone.run(()=>this.hide(0))})}ngOnDestroy(){let e=this._elementRef.nativeElement;this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this._overlayRef&&(this._overlayRef.dispose(),this._tooltipInstance=null),this._eventCleanups.forEach(t=>t()),this._eventCleanups.length=0,this._destroyed.next(),this._destroyed.complete(),this._isDestroyed=!0,this._ariaDescriber.removeDescription(e,this.message,"tooltip"),this._focusMonitor.stopMonitoring(e)}show(e=this.showDelay,t){if(this.disabled||!this.message||this._isTooltipVisible()){this._tooltipInstance?._cancelPendingAnimations();return}let r=this._createOverlay(t);this._detach(),this._portal=this._portal||new tn(this._tooltipComponent,this._viewContainerRef);let a=this._tooltipInstance=r.attach(this._portal).instance;a._triggerElement=this._elementRef.nativeElement,a._mouseLeaveHideDelay=this._hideDelay,a.afterHidden().pipe(Be(this._destroyed)).subscribe(()=>this._detach()),this._setTooltipClass(this._tooltipClass),this._updateTooltipMessage(),a.show(e)}hide(e=this.hideDelay){let t=this._tooltipInstance;t&&(t.isVisible()?t.hide(e):(t._cancelPendingAnimations(),this._detach()))}toggle(e){this._isTooltipVisible()?this.hide():this.show(void 0,e)}_isTooltipVisible(){return!!this._tooltipInstance&&this._tooltipInstance.isVisible()}_createOverlay(e){if(this._overlayRef){let o=this._overlayRef.getConfig().positionStrategy;if((!this.positionAtOrigin||!e)&&o._origin instanceof U)return this._overlayRef;this._detach()}let t=this._injector.get(va).getAncestorScrollContainers(this._elementRef),r=`${this._cssClassPrefix}-${xv}`,a=ya(this._injector,this.positionAtOrigin?e||this._elementRef:this._elementRef).withTransformOriginOn(`.${this._cssClassPrefix}-tooltip`).withFlexibleDimensions(!1).withViewportMargin(this._viewportMargin).withScrollableContainers(t).withPopoverLocation("global");return a.positionChanges.pipe(Be(this._destroyed)).subscribe(o=>{this._updateCurrentPositionClass(o.connectionPair),this._tooltipInstance&&o.scrollableViewProperties.isOverlayClipped&&this._tooltipInstance.isVisible()&&this._ngZone.run(()=>this.hide(0))}),this._overlayRef=ei(this._injector,{direction:this._dir,positionStrategy:a,panelClass:this._overlayPanelClass?[...this._overlayPanelClass,r]:r,scrollStrategy:this._injector.get(ZE)(),disableAnimations:this._animationsDisabled,eventPredicate:this._overlayEventPredicate}),this._updatePosition(this._overlayRef),this._overlayRef.detachments().pipe(Be(this._destroyed)).subscribe(()=>this._detach()),this._overlayRef.outsidePointerEvents().pipe(Be(this._destroyed)).subscribe(()=>this._tooltipInstance?._handleBodyInteraction()),this._overlayRef.keydownEvents().pipe(Be(this._destroyed)).subscribe(o=>{o.preventDefault(),o.stopPropagation(),this._ngZone.run(()=>this.hide(0))}),this._defaultOptions?.disableTooltipInteractivity&&this._overlayRef.addPanelClass(`${this._cssClassPrefix}-tooltip-panel-non-interactive`),this._dirSubscribed||(this._dirSubscribed=!0,this._dir.change.pipe(Be(this._destroyed)).subscribe(()=>{this._overlayRef&&this._updatePosition(this._overlayRef)})),this._overlayRef}_detach(){this._overlayRef&&this._overlayRef.hasAttached()&&this._overlayRef.detach(),this._tooltipInstance=null}_updatePosition(e){let t=e.getConfig().positionStrategy,r=this._getOrigin(),a=this._getOverlayPosition();t.withPositions([this._addOffset(x(x({},r.main),a.main)),this._addOffset(x(x({},r.fallback),a.fallback))])}_addOffset(e){let t=JE,r=!this._dir||this._dir.value=="ltr";return e.originY==="top"?e.offsetY=-t:e.originY==="bottom"?e.offsetY=t:e.originX==="start"?e.offsetX=r?-t:t:e.originX==="end"&&(e.offsetX=r?t:-t),e}_getOrigin(){let e=!this._dir||this._dir.value=="ltr",t=this.position,r;t=="above"||t=="below"?r={originX:"center",originY:t=="above"?"top":"bottom"}:t=="before"||t=="left"&&e||t=="right"&&!e?r={originX:"start",originY:"center"}:(t=="after"||t=="right"&&e||t=="left"&&!e)&&(r={originX:"end",originY:"center"});let{x:a,y:o}=this._invertPosition(r.originX,r.originY);return{main:r,fallback:{originX:a,originY:o}}}_getOverlayPosition(){let e=!this._dir||this._dir.value=="ltr",t=this.position,r;t=="above"?r={overlayX:"center",overlayY:"bottom"}:t=="below"?r={overlayX:"center",overlayY:"top"}:t=="before"||t=="left"&&e||t=="right"&&!e?r={overlayX:"end",overlayY:"center"}:(t=="after"||t=="right"&&e||t=="left"&&!e)&&(r={overlayX:"start",overlayY:"center"});let{x:a,y:o}=this._invertPosition(r.overlayX,r.overlayY);return{main:r,fallback:{overlayX:a,overlayY:o}}}_updateTooltipMessage(){this._tooltipInstance&&(this._tooltipInstance.message=this.message,this._tooltipInstance._markForCheck(),at(()=>{this._tooltipInstance&&this._overlayRef.updatePosition()},{injector:this._injector}))}_setTooltipClass(e){this._tooltipInstance&&(this._tooltipInstance.tooltipClass=e instanceof Set?Array.from(e):e,this._tooltipInstance._markForCheck())}_invertPosition(e,t){return this.position==="above"||this.position==="below"?t==="top"?t="bottom":t==="bottom"&&(t="top"):e==="end"?e="start":e==="start"&&(e="end"),{x:e,y:t}}_updateCurrentPositionClass(e){let{overlayY:t,originX:r,originY:a}=e,o;if(t==="center"?this._dir&&this._dir.value==="rtl"?o=r==="end"?"left":"right":o=r==="start"?"left":"right":o=t==="bottom"&&a==="top"?"above":"below",o!==this._currentPosition){let s=this._overlayRef;if(s){let c=`${this._cssClassPrefix}-${xv}-`;s.removePanelClass(c+this._currentPosition),s.addPanelClass(c+o)}this._currentPosition=o}}_setupPointerEnterEventsIfNeeded(){this._disabled||!this.message||!this._viewInitialized||this._eventCleanups.length||(this._isTouchPlatform()?this.touchGestures!=="off"&&(this._disableNativeGesturesIfNecessary(),this._addListener("touchstart",e=>{let t=e.targetTouches?.[0],r=t?{x:t.clientX,y:t.clientY}:void 0;this._setupPointerExitEventsIfNeeded(),this._touchstartTimeout&&clearTimeout(this._touchstartTimeout);let a=500;this._touchstartTimeout=setTimeout(()=>{this._touchstartTimeout=null,this.show(void 0,r)},this._defaultOptions?.touchLongPressShowDelay??a)})):this._addListener("mouseenter",e=>{this._setupPointerExitEventsIfNeeded();let t;e.x!==void 0&&e.y!==void 0&&(t=e),this.show(void 0,t)}))}_setupPointerExitEventsIfNeeded(){if(!this._pointerExitEventsInitialized){if(this._pointerExitEventsInitialized=!0,!this._isTouchPlatform())this._addListener("mouseleave",e=>{let t=e.relatedTarget;(!t||!this._overlayRef?.overlayElement.contains(t))&&this.hide()}),this._addListener("wheel",e=>{if(this._isTooltipVisible()){let t=this._document.elementFromPoint(e.clientX,e.clientY),r=this._elementRef.nativeElement;t!==r&&!r.contains(t)&&this.hide()}});else if(this.touchGestures!=="off"){this._disableNativeGesturesIfNecessary();let e=()=>{this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this.hide(this._defaultOptions?.touchendHideDelay)};this._addListener("touchend",e),this._addListener("touchcancel",e)}}}_addListener(e,t){this._eventCleanups.push(this._renderer.listen(this._elementRef.nativeElement,e,t,XE))}_isTouchPlatform(){let e=this._defaultOptions?.detectHoverCapability;return typeof e=="function"?!e():this._platform.IOS||this._platform.ANDROID?!0:this._platform.isBrowser?!!e&&this._mediaMatcher.matchMedia("(any-hover: none)").matches:!1}_disableNativeGesturesIfNecessary(){let e=this.touchGestures;if(e!=="off"){let t=this._elementRef.nativeElement,r=t.style;(e==="on"||t.nodeName!=="INPUT"&&t.nodeName!=="TEXTAREA")&&(r.userSelect=r.msUserSelect=r.webkitUserSelect=r.MozUserSelect="none"),(e==="on"||!t.draggable)&&(r.webkitUserDrag="none"),r.touchAction="none",r.webkitTapHighlightColor="transparent"}}_syncAriaDescription(e){this._ariaDescriptionPending||(this._ariaDescriptionPending=!0,this._ariaDescriber.removeDescription(this._elementRef.nativeElement,e,"tooltip"),this._isDestroyed||at({write:()=>{this._ariaDescriptionPending=!1,this.message&&!this.disabled&&this._ariaDescriber.describe(this._elementRef.nativeElement,this.message,"tooltip")}},{injector:this._injector}))}_overlayEventPredicate=e=>e.type==="keydown"?this._isTooltipVisible()&&e.keyCode===27&&!ut(e):!0;static \u0275fac=function(t){return new(t||n)};static \u0275dir=A({type:n,selectors:[["","matTooltip",""]],hostAttrs:[1,"mat-mdc-tooltip-trigger"],hostVars:2,hostBindings:function(t,r){t&2&&J("mat-mdc-tooltip-disabled",r.disabled)},inputs:{position:[0,"matTooltipPosition","position"],positionAtOrigin:[0,"matTooltipPositionAtOrigin","positionAtOrigin"],disabled:[0,"matTooltipDisabled","disabled"],showDelay:[0,"matTooltipShowDelay","showDelay"],hideDelay:[0,"matTooltipHideDelay","hideDelay"],touchGestures:[0,"matTooltipTouchGestures","touchGestures"],message:[0,"matTooltip","message"],tooltipClass:[0,"matTooltipClass","tooltipClass"]},exportAs:["matTooltip"]})}return n})(),nx=(()=>{class n{_changeDetectorRef=l(Ee);_elementRef=l(U);_isMultiline=!1;message;tooltipClass;_showTimeoutId;_hideTimeoutId;_triggerElement;_mouseLeaveHideDelay;_animationsDisabled=st();_tooltip;_closeOnInteraction=!1;_isVisible=!1;_onHide=new P;_showAnimation="mat-mdc-tooltip-show";_hideAnimation="mat-mdc-tooltip-hide";constructor(){}show(e){this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=setTimeout(()=>{this._toggleVisibility(!0),this._showTimeoutId=void 0},e)}hide(e){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId=setTimeout(()=>{this._toggleVisibility(!1),this._hideTimeoutId=void 0},e)}afterHidden(){return this._onHide}isVisible(){return this._isVisible}ngOnDestroy(){this._cancelPendingAnimations(),this._onHide.complete(),this._triggerElement=null}_handleBodyInteraction(){this._closeOnInteraction&&this.hide(0)}_markForCheck(){this._changeDetectorRef.markForCheck()}_handleMouseLeave({relatedTarget:e}){(!e||!this._triggerElement.contains(e))&&(this.isVisible()?this.hide(this._mouseLeaveHideDelay):this._finalizeAnimation(!1))}_onShow(){this._isMultiline=this._isTooltipMultiline(),this._markForCheck()}_isTooltipMultiline(){let e=this._elementRef.nativeElement.getBoundingClientRect();return e.height>ex&&e.width>=tx}_handleAnimationEnd({animationName:e}){(e===this._showAnimation||e===this._hideAnimation)&&this._finalizeAnimation(e===this._showAnimation)}_cancelPendingAnimations(){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=this._hideTimeoutId=void 0}_finalizeAnimation(e){e?this._closeOnInteraction=!0:this.isVisible()||this._onHide.next()}_toggleVisibility(e){let t=this._tooltip.nativeElement,r=this._showAnimation,a=this._hideAnimation;if(t.classList.remove(e?a:r),t.classList.add(e?r:a),this._isVisible!==e&&(this._isVisible=e,this._changeDetectorRef.markForCheck()),e&&!this._animationsDisabled&&typeof getComputedStyle=="function"){let o=getComputedStyle(t);(o.getPropertyValue("animation-duration")==="0s"||o.getPropertyValue("animation-name")==="none")&&(this._animationsDisabled=!0)}e&&this._onShow(),this._animationsDisabled&&(t.classList.add("_mat-animation-noopable"),this._finalizeAnimation(e))}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=N({type:n,selectors:[["mat-tooltip-component"]],viewQuery:function(t,r){if(t&1&&ot(YE,7),t&2){let a;re(a=ae())&&(r._tooltip=a.first)}},hostAttrs:["aria-hidden","true"],hostBindings:function(t,r){t&1&&R("mouseleave",function(o){return r._handleMouseLeave(o)})},decls:4,vars:5,consts:[["tooltip",""],[1,"mdc-tooltip","mat-mdc-tooltip",3,"animationend"],[1,"mat-mdc-tooltip-surface","mdc-tooltip__surface"]],template:function(t,r){t&1&&(bt(0,"div",1,0),il("animationend",function(o){return r._handleAnimationEnd(o)}),bt(2,"div",2),h(3),Et()()),t&2&&(It(r.tooltipClass),J("mdc-tooltip--multiline",r._isMultiline),p(3),lt(r.message))},styles:[`.mat-mdc-tooltip {
  position: relative;
  transform: scale(0);
  display: inline-flex;
}
.mat-mdc-tooltip::before {
  content: "";
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  position: absolute;
}
.mat-mdc-tooltip-panel-below .mat-mdc-tooltip::before {
  top: -8px;
}
.mat-mdc-tooltip-panel-above .mat-mdc-tooltip::before {
  bottom: -8px;
}
.mat-mdc-tooltip-panel-right .mat-mdc-tooltip::before {
  left: -8px;
}
.mat-mdc-tooltip-panel-left .mat-mdc-tooltip::before {
  right: -8px;
}
.mat-mdc-tooltip._mat-animation-noopable {
  animation: none;
  transform: scale(1);
}

.mat-mdc-tooltip-surface {
  word-break: normal;
  overflow-wrap: anywhere;
  padding: 4px 8px;
  min-width: 40px;
  max-width: 200px;
  min-height: 24px;
  max-height: 40vh;
  box-sizing: border-box;
  overflow: hidden;
  text-align: center;
  will-change: transform, opacity;
  background-color: var(--mat-tooltip-container-color, var(--mat-sys-inverse-surface));
  color: var(--mat-tooltip-supporting-text-color, var(--mat-sys-inverse-on-surface));
  border-radius: var(--mat-tooltip-container-shape, var(--mat-sys-corner-extra-small));
  font-family: var(--mat-tooltip-supporting-text-font, var(--mat-sys-body-small-font));
  font-size: var(--mat-tooltip-supporting-text-size, var(--mat-sys-body-small-size));
  font-weight: var(--mat-tooltip-supporting-text-weight, var(--mat-sys-body-small-weight));
  line-height: var(--mat-tooltip-supporting-text-line-height, var(--mat-sys-body-small-line-height));
  letter-spacing: var(--mat-tooltip-supporting-text-tracking, var(--mat-sys-body-small-tracking));
}
.mat-mdc-tooltip-surface::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 1px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}
.mdc-tooltip--multiline .mat-mdc-tooltip-surface {
  text-align: left;
}
[dir=rtl] .mdc-tooltip--multiline .mat-mdc-tooltip-surface {
  text-align: right;
}

.mat-mdc-tooltip-panel {
  line-height: normal;
}
.mat-mdc-tooltip-panel.mat-mdc-tooltip-panel-non-interactive {
  pointer-events: none;
}

@keyframes mat-mdc-tooltip-show {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes mat-mdc-tooltip-hide {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(0.8);
  }
}
.mat-mdc-tooltip-show {
  animation: mat-mdc-tooltip-show 150ms cubic-bezier(0, 0, 0.2, 1) forwards;
}

.mat-mdc-tooltip-hide {
  animation: mat-mdc-tooltip-hide 75ms cubic-bezier(0.4, 0, 1, 1) forwards;
}
`],encapsulation:2,changeDetection:0})}return n})();var ix=["mat-calendar-body",""];function rx(n,i){return this._trackRow(i)}var Fv=(n,i)=>i.id;function ax(n,i){if(n&1&&(bt(0,"tr",0)(1,"td",3),h(2),Et()()),n&2){let e=D();p(),Gn("padding-top",e._cellPadding)("padding-bottom",e._cellPadding),pe("colspan",e.numCols),p(),oe(" ",e.label," ")}}function ox(n,i){if(n&1&&(bt(0,"td",3),h(1),Et()),n&2){let e=D(2);Gn("padding-top",e._cellPadding)("padding-bottom",e._cellPadding),pe("colspan",e._firstRowOffset),p(),oe(" ",e._firstRowOffset>=e.labelMinRequiredCells?e.label:""," ")}}function sx(n,i){if(n&1){let e=De();bt(0,"td",6)(1,"button",7),il("click",function(r){let a=ee(e).$implicit,o=D(2);return te(o._cellClicked(a,r))})("focus",function(r){let a=ee(e).$implicit,o=D(2);return te(o._emitActiveDateChange(a,r))}),bt(2,"span",8),h(3),Et(),pn(4,"span",9),Et()()}if(n&2){let e=i.$implicit,t=i.$index,r=D().$index,a=D();Gn("width",a._cellWidth)("padding-top",a._cellPadding)("padding-bottom",a._cellPadding),pe("data-mat-row",r)("data-mat-col",t),p(),It(e.cssClasses),J("mat-calendar-body-disabled",!e.enabled)("mat-calendar-body-active",a._isActiveCell(r,t))("mat-calendar-body-range-start",a._isRangeStart(e.compareValue))("mat-calendar-body-range-end",a._isRangeEnd(e.compareValue))("mat-calendar-body-in-range",a._isInRange(e.compareValue))("mat-calendar-body-comparison-bridge-start",a._isComparisonBridgeStart(e.compareValue,r,t))("mat-calendar-body-comparison-bridge-end",a._isComparisonBridgeEnd(e.compareValue,r,t))("mat-calendar-body-comparison-start",a._isComparisonStart(e.compareValue))("mat-calendar-body-comparison-end",a._isComparisonEnd(e.compareValue))("mat-calendar-body-in-comparison-range",a._isInComparisonRange(e.compareValue))("mat-calendar-body-preview-start",a._isPreviewStart(e.compareValue))("mat-calendar-body-preview-end",a._isPreviewEnd(e.compareValue))("mat-calendar-body-in-preview",a._isInPreview(e.compareValue)),xt("tabIndex",a._isActiveCell(r,t)?0:-1),pe("aria-label",e.ariaLabel)("aria-disabled",!e.enabled||null)("aria-pressed",a._isSelected(e.compareValue))("aria-current",a.todayValue===e.compareValue?"date":null)("aria-describedby",a._getDescribedby(e.compareValue)),p(),J("mat-calendar-body-selected",a._isSelected(e.compareValue))("mat-calendar-body-comparison-identical",a._isComparisonIdentical(e.compareValue))("mat-calendar-body-today",a.todayValue===e.compareValue),p(),oe(" ",e.displayValue," ")}}function lx(n,i){if(n&1&&(bt(0,"tr",1),ke(1,ox,2,6,"td",4),el(2,sx,5,49,"td",5,Fv),Et()),n&2){let e=i.$implicit,t=i.$index,r=D();p(),Te(t===0&&r._firstRowOffset?1:-1),p(),tl(e)}}function cx(n,i){if(n&1&&(d(0,"th",2)(1,"span",6),h(2),u(),d(3,"span",3),h(4),u()()),n&2){let e=i.$implicit;p(2),lt(e.long),p(2),lt(e.narrow)}}var dx=["*"];function ux(n,i){}function mx(n,i){if(n&1){let e=De();d(0,"mat-month-view",4),Qr("activeDateChange",function(r){ee(e);let a=D();return Xr(a.activeDate,r)||(a.activeDate=r),te(r)}),R("_userSelection",function(r){ee(e);let a=D();return te(a._dateSelected(r))})("dragStarted",function(r){ee(e);let a=D();return te(a._dragStarted(r))})("dragEnded",function(r){ee(e);let a=D();return te(a._dragEnded(r))}),u()}if(n&2){let e=D();Kr("activeDate",e.activeDate),_("selected",e.selected)("dateFilter",e.dateFilter)("maxDate",e.maxDate)("minDate",e.minDate)("dateClass",e.dateClass)("comparisonStart",e.comparisonStart)("comparisonEnd",e.comparisonEnd)("startDateAccessibleName",e.startDateAccessibleName)("endDateAccessibleName",e.endDateAccessibleName)("activeDrag",e._activeDrag)}}function hx(n,i){if(n&1){let e=De();d(0,"mat-year-view",5),Qr("activeDateChange",function(r){ee(e);let a=D();return Xr(a.activeDate,r)||(a.activeDate=r),te(r)}),R("monthSelected",function(r){ee(e);let a=D();return te(a._monthSelectedInYearView(r))})("selectedChange",function(r){ee(e);let a=D();return te(a._goToDateInView(r,"month"))}),u()}if(n&2){let e=D();Kr("activeDate",e.activeDate),_("selected",e.selected)("dateFilter",e.dateFilter)("maxDate",e.maxDate)("minDate",e.minDate)("dateClass",e.dateClass)}}function fx(n,i){if(n&1){let e=De();d(0,"mat-multi-year-view",6),Qr("activeDateChange",function(r){ee(e);let a=D();return Xr(a.activeDate,r)||(a.activeDate=r),te(r)}),R("yearSelected",function(r){ee(e);let a=D();return te(a._yearSelectedInMultiYearView(r))})("selectedChange",function(r){ee(e);let a=D();return te(a._goToDateInView(r,"year"))}),u()}if(n&2){let e=D();Kr("activeDate",e.activeDate),_("selected",e.selected)("dateFilter",e.dateFilter)("maxDate",e.maxDate)("minDate",e.minDate)("dateClass",e.dateClass)}}function px(n,i){}var gx=["button"],_x=[[["","matDatepickerToggleIcon",""]]],vx=["[matDatepickerToggleIcon]"];function bx(n,i){n&1&&(fn(),d(0,"svg",2),T(1,"path",3),u())}var yo=(()=>{class n{changes=new P;calendarLabel="Calendar";openCalendarLabel="Open calendar";closeCalendarLabel="Close calendar";prevMonthLabel="Previous month";nextMonthLabel="Next month";prevYearLabel="Previous year";nextYearLabel="Next year";prevMultiYearLabel="Previous 24 years";nextMultiYearLabel="Next 24 years";switchToMonthViewLabel="Choose date";switchToMultiYearViewLabel="Choose month and year";startDateLabel="Start date";endDateLabel="End date";comparisonDateLabel="Comparison range";formatYearRange(e,t){return`${e} \u2013 ${t}`}formatYearRangeLabel(e,t){return`${e} to ${t}`}static \u0275fac=function(t){return new(t||n)};static \u0275prov=w({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),yx=0,js=class{value;displayValue;ariaLabel;enabled;compareValue;rawValue;id=yx++;cssClasses;constructor(i,e,t,r,a,o=i,s){this.value=i,this.displayValue=e,this.ariaLabel=t,this.enabled=r,this.compareValue=o,this.rawValue=s,this.cssClasses=a instanceof Set?Array.from(a):a}},Cx={passive:!1,capture:!0},ld={passive:!0,capture:!0},Mv={passive:!0},bo=(()=>{class n{_elementRef=l(U);_ngZone=l(de);_platform=l(xe);_intl=l(yo);_eventCleanups;_skipNextFocus=!1;_focusActiveCellAfterViewChecked=!1;label;rows;todayValue;startValue;endValue;labelMinRequiredCells;numCols=7;activeCell=0;ngAfterViewChecked(){this._focusActiveCellAfterViewChecked&&(this._focusActiveCell(),this._focusActiveCellAfterViewChecked=!1)}isRange=!1;cellAspectRatio=1;comparisonStart=null;comparisonEnd=null;previewStart=null;previewEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;selectedValueChange=new j;previewChange=new j;activeDateChange=new j;dragStarted=new j;dragEnded=new j;_firstRowOffset;_cellPadding;_cellWidth;_startDateLabelId;_endDateLabelId;_comparisonStartDateLabelId;_comparisonEndDateLabelId;_didDragSinceMouseDown=!1;_injector=l(ce);comparisonDateAccessibleName=this._intl.comparisonDateLabel;_trackRow=e=>e;constructor(){let e=l(Je),t=l(et);this._startDateLabelId=t.getId("mat-calendar-body-start-"),this._endDateLabelId=t.getId("mat-calendar-body-end-"),this._comparisonStartDateLabelId=t.getId("mat-calendar-body-comparison-start-"),this._comparisonEndDateLabelId=t.getId("mat-calendar-body-comparison-end-"),l(dt).load(fr),this._ngZone.runOutsideAngular(()=>{let r=this._elementRef.nativeElement,a=[e.listen(r,"touchmove",this._touchmoveHandler,Cx),e.listen(r,"mouseenter",this._enterHandler,ld),e.listen(r,"focus",this._enterHandler,ld),e.listen(r,"mouseleave",this._leaveHandler,ld),e.listen(r,"blur",this._leaveHandler,ld),e.listen(r,"mousedown",this._mousedownHandler,Mv),e.listen(r,"touchstart",this._mousedownHandler,Mv)];this._platform.isBrowser&&a.push(e.listen("window","mouseup",this._mouseupHandler),e.listen("window","touchend",this._touchendHandler)),this._eventCleanups=a})}_cellClicked(e,t){this._didDragSinceMouseDown||e.enabled&&this.selectedValueChange.emit({value:e.value,event:t})}_emitActiveDateChange(e,t){e.enabled&&this.activeDateChange.emit({value:e.value,event:t})}_isSelected(e){return this.startValue===e||this.endValue===e}ngOnChanges(e){let t=e.numCols,{rows:r,numCols:a}=this;(e.rows||t)&&(this._firstRowOffset=r&&r.length&&r[0].length?a-r[0].length:0),(e.cellAspectRatio||t||!this._cellPadding)&&(this._cellPadding=`${50*this.cellAspectRatio/a}%`),(t||!this._cellWidth)&&(this._cellWidth=`${100/a}%`)}ngOnDestroy(){this._eventCleanups.forEach(e=>e())}_isActiveCell(e,t){let r=e*this.numCols+t;return e&&(r-=this._firstRowOffset),r==this.activeCell}_focusActiveCell(e=!0){at(()=>{setTimeout(()=>{let t=this._elementRef.nativeElement.querySelector(".mat-calendar-body-active");t&&(e||(this._skipNextFocus=!0),t.focus())})},{injector:this._injector})}_scheduleFocusActiveCellAfterViewChecked(){this._focusActiveCellAfterViewChecked=!0}_isRangeStart(e){return ih(e,this.startValue,this.endValue)}_isRangeEnd(e){return rh(e,this.startValue,this.endValue)}_isInRange(e){return ah(e,this.startValue,this.endValue,this.isRange)}_isComparisonStart(e){return ih(e,this.comparisonStart,this.comparisonEnd)}_isComparisonBridgeStart(e,t,r){if(!this._isComparisonStart(e)||this._isRangeStart(e)||!this._isInRange(e))return!1;let a=this.rows[t][r-1];if(!a){let o=this.rows[t-1];a=o&&o[o.length-1]}return a&&!this._isRangeEnd(a.compareValue)}_isComparisonBridgeEnd(e,t,r){if(!this._isComparisonEnd(e)||this._isRangeEnd(e)||!this._isInRange(e))return!1;let a=this.rows[t][r+1];if(!a){let o=this.rows[t+1];a=o&&o[0]}return a&&!this._isRangeStart(a.compareValue)}_isComparisonEnd(e){return rh(e,this.comparisonStart,this.comparisonEnd)}_isInComparisonRange(e){return ah(e,this.comparisonStart,this.comparisonEnd,this.isRange)}_isComparisonIdentical(e){return this.comparisonStart===this.comparisonEnd&&e===this.comparisonStart}_isPreviewStart(e){return ih(e,this.previewStart,this.previewEnd)}_isPreviewEnd(e){return rh(e,this.previewStart,this.previewEnd)}_isInPreview(e){return ah(e,this.previewStart,this.previewEnd,this.isRange)}_getDescribedby(e){if(!this.isRange)return null;if(this.startValue===e&&this.endValue===e)return`${this._startDateLabelId} ${this._endDateLabelId}`;if(this.startValue===e)return this._startDateLabelId;if(this.endValue===e)return this._endDateLabelId;if(this.comparisonStart!==null&&this.comparisonEnd!==null){if(e===this.comparisonStart&&e===this.comparisonEnd)return`${this._comparisonStartDateLabelId} ${this._comparisonEndDateLabelId}`;if(e===this.comparisonStart)return this._comparisonStartDateLabelId;if(e===this.comparisonEnd)return this._comparisonEndDateLabelId}return null}_enterHandler=e=>{if(this._skipNextFocus&&e.type==="focus"){this._skipNextFocus=!1;return}if(e.target&&this.isRange){let t=this._getCellFromElement(e.target);t&&this._ngZone.run(()=>this.previewChange.emit({value:t.enabled?t:null,event:e}))}};_touchmoveHandler=e=>{if(!this.isRange)return;let t=Av(e),r=t?this._getCellFromElement(t):null;t!==e.target&&(this._didDragSinceMouseDown=!0),nh(e.target)&&e.preventDefault(),this._ngZone.run(()=>this.previewChange.emit({value:r?.enabled?r:null,event:e}))};_leaveHandler=e=>{this.previewEnd!==null&&this.isRange&&(e.type!=="blur"&&(this._didDragSinceMouseDown=!0),e.target&&this._getCellFromElement(e.target)&&!(e.relatedTarget&&this._getCellFromElement(e.relatedTarget))&&this._ngZone.run(()=>this.previewChange.emit({value:null,event:e})))};_mousedownHandler=e=>{if(!this.isRange)return;this._didDragSinceMouseDown=!1;let t=e.target&&this._getCellFromElement(e.target);!t||!this._isInRange(t.compareValue)||this._ngZone.run(()=>{this.dragStarted.emit({value:t.rawValue,event:e})})};_mouseupHandler=e=>{if(!this.isRange)return;let t=nh(e.target);if(!t){this._ngZone.run(()=>{this.dragEnded.emit({value:null,event:e})});return}t.closest(".mat-calendar-body")===this._elementRef.nativeElement&&this._ngZone.run(()=>{let r=this._getCellFromElement(t);this.dragEnded.emit({value:r?.rawValue??null,event:e})})};_touchendHandler=e=>{let t=Av(e);t&&this._mouseupHandler({target:t})};_getCellFromElement(e){let t=nh(e);if(t){let r=t.getAttribute("data-mat-row"),a=t.getAttribute("data-mat-col");if(r&&a)return this.rows[parseInt(r)]?.[parseInt(a)]||null}return null}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=N({type:n,selectors:[["","mat-calendar-body",""]],hostAttrs:[1,"mat-calendar-body"],inputs:{label:"label",rows:"rows",todayValue:"todayValue",startValue:"startValue",endValue:"endValue",labelMinRequiredCells:"labelMinRequiredCells",numCols:"numCols",activeCell:"activeCell",isRange:"isRange",cellAspectRatio:"cellAspectRatio",comparisonStart:"comparisonStart",comparisonEnd:"comparisonEnd",previewStart:"previewStart",previewEnd:"previewEnd",startDateAccessibleName:"startDateAccessibleName",endDateAccessibleName:"endDateAccessibleName"},outputs:{selectedValueChange:"selectedValueChange",previewChange:"previewChange",activeDateChange:"activeDateChange",dragStarted:"dragStarted",dragEnded:"dragEnded"},exportAs:["matCalendarBody"],features:[Ue],attrs:ix,decls:11,vars:11,consts:[["aria-hidden","true"],["role","row"],[1,"mat-calendar-body-hidden-label",3,"id"],[1,"mat-calendar-body-label"],[1,"mat-calendar-body-label",3,"paddingTop","paddingBottom"],["role","gridcell",1,"mat-calendar-body-cell-container",3,"width","paddingTop","paddingBottom"],["role","gridcell",1,"mat-calendar-body-cell-container"],["type","button",1,"mat-calendar-body-cell",3,"click","focus","tabindex"],[1,"mat-calendar-body-cell-content","mat-focus-indicator"],["aria-hidden","true",1,"mat-calendar-body-cell-preview"]],template:function(t,r){t&1&&(ke(0,ax,3,6,"tr",0),el(1,lx,4,1,"tr",1,rx,!0),bt(3,"span",2),h(4),Et(),bt(5,"span",2),h(6),Et(),bt(7,"span",2),h(8),Et(),bt(9,"span",2),h(10),Et()),t&2&&(Te(r._firstRowOffset<r.labelMinRequiredCells?0:-1),p(),tl(r.rows),p(2),xt("id",r._startDateLabelId),p(),oe(" ",r.startDateAccessibleName,`
`),p(),xt("id",r._endDateLabelId),p(),oe(" ",r.endDateAccessibleName,`
`),p(),xt("id",r._comparisonStartDateLabelId),p(),qr(" ",r.comparisonDateAccessibleName," ",r.startDateAccessibleName,`
`),p(),xt("id",r._comparisonEndDateLabelId),p(),qr(" ",r.comparisonDateAccessibleName," ",r.endDateAccessibleName,`
`))},styles:[`.mat-calendar-body {
  min-width: 224px;
}

.mat-calendar-body-today:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
  border-color: var(--mat-datepicker-calendar-date-today-outline-color, var(--mat-sys-primary));
}

.mat-calendar-body-label {
  height: 0;
  line-height: 0;
  text-align: start;
  padding-left: 4.7142857143%;
  padding-right: 4.7142857143%;
  font-size: var(--mat-datepicker-calendar-body-label-text-size, var(--mat-sys-title-small-size));
  font-weight: var(--mat-datepicker-calendar-body-label-text-weight, var(--mat-sys-title-small-weight));
  color: var(--mat-datepicker-calendar-body-label-text-color, var(--mat-sys-on-surface));
}

.mat-calendar-body-hidden-label {
  display: none;
}

.mat-calendar-body-cell-container {
  position: relative;
  height: 0;
  line-height: 0;
}

.mat-calendar-body-cell {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: none;
  text-align: center;
  outline: none;
  margin: 0;
  font-family: var(--mat-datepicker-calendar-text-font, var(--mat-sys-body-medium-font));
  font-size: var(--mat-datepicker-calendar-text-size, var(--mat-sys-body-medium-size));
  -webkit-user-select: none;
  user-select: none;
  cursor: pointer;
  outline: none;
  border: none;
  -webkit-tap-highlight-color: transparent;
}
.mat-calendar-body-cell::-moz-focus-inner {
  border: 0;
}

.mat-calendar-body-cell::before,
.mat-calendar-body-cell::after,
.mat-calendar-body-cell-preview {
  content: "";
  position: absolute;
  top: 5%;
  left: 0;
  z-index: 0;
  box-sizing: border-box;
  display: block;
  height: 90%;
  width: 100%;
}

.mat-calendar-body-range-start:not(.mat-calendar-body-in-comparison-range)::before,
.mat-calendar-body-range-start::after,
.mat-calendar-body-comparison-start:not(.mat-calendar-body-comparison-bridge-start)::before,
.mat-calendar-body-comparison-start::after,
.mat-calendar-body-preview-start .mat-calendar-body-cell-preview {
  left: 5%;
  width: 95%;
  border-top-left-radius: 999px;
  border-bottom-left-radius: 999px;
}
[dir=rtl] .mat-calendar-body-range-start:not(.mat-calendar-body-in-comparison-range)::before,
[dir=rtl] .mat-calendar-body-range-start::after,
[dir=rtl] .mat-calendar-body-comparison-start:not(.mat-calendar-body-comparison-bridge-start)::before,
[dir=rtl] .mat-calendar-body-comparison-start::after,
[dir=rtl] .mat-calendar-body-preview-start .mat-calendar-body-cell-preview {
  left: 0;
  border-radius: 0;
  border-top-right-radius: 999px;
  border-bottom-right-radius: 999px;
}

.mat-calendar-body-range-end:not(.mat-calendar-body-in-comparison-range)::before,
.mat-calendar-body-range-end::after,
.mat-calendar-body-comparison-end:not(.mat-calendar-body-comparison-bridge-end)::before,
.mat-calendar-body-comparison-end::after,
.mat-calendar-body-preview-end .mat-calendar-body-cell-preview {
  width: 95%;
  border-top-right-radius: 999px;
  border-bottom-right-radius: 999px;
}
[dir=rtl] .mat-calendar-body-range-end:not(.mat-calendar-body-in-comparison-range)::before,
[dir=rtl] .mat-calendar-body-range-end::after,
[dir=rtl] .mat-calendar-body-comparison-end:not(.mat-calendar-body-comparison-bridge-end)::before,
[dir=rtl] .mat-calendar-body-comparison-end::after,
[dir=rtl] .mat-calendar-body-preview-end .mat-calendar-body-cell-preview {
  left: 5%;
  border-radius: 0;
  border-top-left-radius: 999px;
  border-bottom-left-radius: 999px;
}

[dir=rtl] .mat-calendar-body-comparison-bridge-start.mat-calendar-body-range-end::after,
[dir=rtl] .mat-calendar-body-comparison-bridge-end.mat-calendar-body-range-start::after {
  width: 95%;
  border-top-right-radius: 999px;
  border-bottom-right-radius: 999px;
}

.mat-calendar-body-comparison-start.mat-calendar-body-range-end::after, [dir=rtl] .mat-calendar-body-comparison-start.mat-calendar-body-range-end::after,
.mat-calendar-body-comparison-end.mat-calendar-body-range-start::after,
[dir=rtl] .mat-calendar-body-comparison-end.mat-calendar-body-range-start::after {
  width: 90%;
}

.mat-calendar-body-in-preview {
  color: var(--mat-datepicker-calendar-date-preview-state-outline-color, var(--mat-sys-primary));
}
.mat-calendar-body-in-preview .mat-calendar-body-cell-preview {
  border-top: dashed 1px;
  border-bottom: dashed 1px;
}

.mat-calendar-body-preview-start .mat-calendar-body-cell-preview {
  border-left: dashed 1px;
}
[dir=rtl] .mat-calendar-body-preview-start .mat-calendar-body-cell-preview {
  border-left: 0;
  border-right: dashed 1px;
}

.mat-calendar-body-preview-end .mat-calendar-body-cell-preview {
  border-right: dashed 1px;
}
[dir=rtl] .mat-calendar-body-preview-end .mat-calendar-body-cell-preview {
  border-right: 0;
  border-left: dashed 1px;
}

.mat-calendar-body-disabled {
  cursor: default;
}
.mat-calendar-body-disabled > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
  color: var(--mat-datepicker-calendar-date-disabled-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-calendar-body-disabled > .mat-calendar-body-today:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
  border-color: var(--mat-datepicker-calendar-date-today-disabled-state-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mat-calendar-body-disabled {
    opacity: 0.5;
  }
}

.mat-calendar-body-cell-content {
  top: 5%;
  left: 5%;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 90%;
  height: 90%;
  line-height: 1;
  border-width: 1px;
  border-style: solid;
  border-radius: 999px;
  color: var(--mat-datepicker-calendar-date-text-color, var(--mat-sys-on-surface));
  border-color: var(--mat-datepicker-calendar-date-outline-color, transparent);
}
.mat-calendar-body-cell-content.mat-focus-indicator {
  position: absolute;
}
@media (forced-colors: active) {
  .mat-calendar-body-cell-content {
    border: none;
  }
}

.cdk-keyboard-focused .mat-calendar-body-active > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical), .cdk-program-focused .mat-calendar-body-active > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
  background-color: var(--mat-datepicker-calendar-date-focus-state-background-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));
}

@media (hover: hover) {
  .mat-calendar-body-cell:not(.mat-calendar-body-disabled):hover > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
    background-color: var(--mat-datepicker-calendar-date-hover-state-background-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));
  }
}
.mat-calendar-body-selected {
  background-color: var(--mat-datepicker-calendar-date-selected-state-background-color, var(--mat-sys-primary));
  color: var(--mat-datepicker-calendar-date-selected-state-text-color, var(--mat-sys-on-primary));
}
.mat-calendar-body-disabled > .mat-calendar-body-selected {
  background-color: var(--mat-datepicker-calendar-date-selected-disabled-state-background-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-calendar-body-selected.mat-calendar-body-today {
  box-shadow: inset 0 0 0 1px var(--mat-datepicker-calendar-date-today-selected-state-outline-color, var(--mat-sys-primary));
}

.mat-calendar-body-in-range::before {
  background: var(--mat-datepicker-calendar-date-in-range-state-background-color, var(--mat-sys-primary-container));
}

.mat-calendar-body-comparison-identical,
.mat-calendar-body-in-comparison-range::before {
  background: var(--mat-datepicker-calendar-date-in-comparison-range-state-background-color, var(--mat-sys-tertiary-container));
}

.mat-calendar-body-comparison-identical,
.mat-calendar-body-in-comparison-range::before {
  background: var(--mat-datepicker-calendar-date-in-comparison-range-state-background-color, var(--mat-sys-tertiary-container));
}

.mat-calendar-body-comparison-bridge-start::before,
[dir=rtl] .mat-calendar-body-comparison-bridge-end::before {
  background: linear-gradient(to right, var(--mat-datepicker-calendar-date-in-range-state-background-color, var(--mat-sys-primary-container)) 50%, var(--mat-datepicker-calendar-date-in-comparison-range-state-background-color, var(--mat-sys-tertiary-container)) 50%);
}

.mat-calendar-body-comparison-bridge-end::before,
[dir=rtl] .mat-calendar-body-comparison-bridge-start::before {
  background: linear-gradient(to left, var(--mat-datepicker-calendar-date-in-range-state-background-color, var(--mat-sys-primary-container)) 50%, var(--mat-datepicker-calendar-date-in-comparison-range-state-background-color, var(--mat-sys-tertiary-container)) 50%);
}

.mat-calendar-body-in-range > .mat-calendar-body-comparison-identical,
.mat-calendar-body-in-comparison-range.mat-calendar-body-in-range::after {
  background: var(--mat-datepicker-calendar-date-in-overlap-range-state-background-color, var(--mat-sys-secondary-container));
}

.mat-calendar-body-comparison-identical.mat-calendar-body-selected,
.mat-calendar-body-in-comparison-range > .mat-calendar-body-selected {
  background: var(--mat-datepicker-calendar-date-in-overlap-range-selected-state-background-color, var(--mat-sys-secondary));
}

@media (forced-colors: active) {
  .mat-datepicker-popup:not(:empty),
  .mat-calendar-body-cell:not(.mat-calendar-body-in-range) .mat-calendar-body-selected {
    outline: solid 1px;
  }
  .mat-calendar-body-today {
    outline: dotted 1px;
  }
  .mat-calendar-body-cell::before,
  .mat-calendar-body-cell::after,
  .mat-calendar-body-selected {
    background: none;
  }
  .mat-calendar-body-in-range::before,
  .mat-calendar-body-comparison-bridge-start::before,
  .mat-calendar-body-comparison-bridge-end::before {
    border-top: solid 1px;
    border-bottom: solid 1px;
  }
  .mat-calendar-body-range-start::before {
    border-left: solid 1px;
  }
  [dir=rtl] .mat-calendar-body-range-start::before {
    border-left: 0;
    border-right: solid 1px;
  }
  .mat-calendar-body-range-end::before {
    border-right: solid 1px;
  }
  [dir=rtl] .mat-calendar-body-range-end::before {
    border-right: 0;
    border-left: solid 1px;
  }
  .mat-calendar-body-in-comparison-range::before {
    border-top: dashed 1px;
    border-bottom: dashed 1px;
  }
  .mat-calendar-body-comparison-start::before {
    border-left: dashed 1px;
  }
  [dir=rtl] .mat-calendar-body-comparison-start::before {
    border-left: 0;
    border-right: dashed 1px;
  }
  .mat-calendar-body-comparison-end::before {
    border-right: dashed 1px;
  }
  [dir=rtl] .mat-calendar-body-comparison-end::before {
    border-right: 0;
    border-left: dashed 1px;
  }
}
`],encapsulation:2,changeDetection:0})}return n})();function th(n){return n?.nodeName==="TD"}function nh(n){let i;return th(n)?i=n:th(n.parentNode)?i=n.parentNode:th(n.parentNode?.parentNode)&&(i=n.parentNode.parentNode),i?.getAttribute("data-mat-row")!=null?i:null}function ih(n,i,e){return e!==null&&i!==e&&n<e&&n===i}function rh(n,i,e){return i!==null&&i!==e&&n>=i&&n===e}function ah(n,i,e,t){return t&&i!==null&&e!==null&&i!==e&&n>=i&&n<=e}function Av(n){let i=n.changedTouches[0];return document.elementFromPoint(i.clientX,i.clientY)}var Ln=class{start;end;_disableStructuralEquivalency;constructor(i,e){this.start=i,this.end=e}},zs=(()=>{class n{selection;_adapter;_selectionChanged=new P;selectionChanged=this._selectionChanged;constructor(e,t){this.selection=e,this._adapter=t,this.selection=e}updateSelection(e,t){let r=this.selection;this.selection=e,this._selectionChanged.next({selection:e,source:t,oldValue:r})}ngOnDestroy(){this._selectionChanged.complete()}_isValidDateInstance(e){return this._adapter.isDateInstance(e)&&this._adapter.isValid(e)}static \u0275fac=function(t){ka()};static \u0275prov=w({token:n,factory:n.\u0275fac})}return n})(),Dx=(()=>{class n extends zs{constructor(e){super(null,e)}add(e){super.updateSelection(e,this)}isValid(){return this.selection!=null&&this._isValidDateInstance(this.selection)}isComplete(){return this.selection!=null}clone(){let e=new n(this._adapter);return e.updateSelection(this.selection,this),e}static \u0275fac=function(t){return new(t||n)(G(Ht))};static \u0275prov=w({token:n,factory:n.\u0275fac})}return n})();var Ov={provide:zs,useFactory:()=>l(zs,{optional:!0,skipSelf:!0})||new Dx(l(Ht))};var Pv=new S("MAT_DATE_RANGE_SELECTION_STRATEGY");var oh=7,wx=0,Rv=(()=>{class n{_changeDetectorRef=l(Ee);_dateFormats=l(Vr,{optional:!0});_dateAdapter=l(Ht,{optional:!0});_dir=l(ht,{optional:!0});_rangeStrategy=l(Pv,{optional:!0});_rerenderSubscription=rt.EMPTY;_selectionKeyPressed=!1;get activeDate(){return this._activeDate}set activeDate(e){let t=this._activeDate,r=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))||this._dateAdapter.today();this._activeDate=this._dateAdapter.clampDate(r,this.minDate,this.maxDate),this._hasSameMonthAndYear(t,this._activeDate)||this._init()}_activeDate;get selected(){return this._selected}set selected(e){e instanceof Ln?this._selected=e:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e)),this._setRanges(this._selected)}_selected=null;get minDate(){return this._minDate}set minDate(e){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_minDate=null;get maxDate(){return this._maxDate}set maxDate(e){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_maxDate=null;dateFilter;dateClass;comparisonStart=null;comparisonEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;activeDrag=null;selectedChange=new j;_userSelection=new j;dragStarted=new j;dragEnded=new j;activeDateChange=new j;_matCalendarBody;_monthLabel=ne("");_weeks=ne([]);_firstWeekOffset=ne(0);_rangeStart=ne(null);_rangeEnd=ne(null);_comparisonRangeStart=ne(null);_comparisonRangeEnd=ne(null);_previewStart=ne(null);_previewEnd=ne(null);_isRange=ne(!1);_todayDate=ne(null);_weekdays=ne([]);constructor(){l(dt).load(yi),this._activeDate=this._dateAdapter.today()}ngAfterContentInit(){this._rerenderSubscription=this._dateAdapter.localeChanges.pipe(Rt(null)).subscribe(()=>this._init())}ngOnChanges(e){let t=e.comparisonStart||e.comparisonEnd;t&&!t.firstChange&&this._setRanges(this.selected),e.activeDrag&&!this.activeDrag&&this._clearPreview()}ngOnDestroy(){this._rerenderSubscription.unsubscribe()}_dateSelected(e){let t=e.value,r=this._getDateFromDayOfMonth(t),a,o;this._selected instanceof Ln?(a=this._getDateInCurrentMonth(this._selected.start),o=this._getDateInCurrentMonth(this._selected.end)):a=o=this._getDateInCurrentMonth(this._selected),(a!==t||o!==t)&&this.selectedChange.emit(r),this._userSelection.emit({value:r,event:e.event}),this._clearPreview(),this._changeDetectorRef.markForCheck()}_updateActiveDate(e){let t=e.value,r=this._activeDate;this.activeDate=this._getDateFromDayOfMonth(t),this._dateAdapter.compareDate(r,this.activeDate)&&this.activeDateChange.emit(this._activeDate)}_handleCalendarBodyKeydown(e){let t=this._activeDate,r=this._isRtl();switch(e.keyCode){case 37:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,r?1:-1);break;case 39:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,r?-1:1);break;case 38:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,-7);break;case 40:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,7);break;case 36:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,1-this._dateAdapter.getDate(this._activeDate));break;case 35:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,this._dateAdapter.getNumDaysInMonth(this._activeDate)-this._dateAdapter.getDate(this._activeDate));break;case 33:this.activeDate=e.altKey?this._dateAdapter.addCalendarYears(this._activeDate,-1):this._dateAdapter.addCalendarMonths(this._activeDate,-1);break;case 34:this.activeDate=e.altKey?this._dateAdapter.addCalendarYears(this._activeDate,1):this._dateAdapter.addCalendarMonths(this._activeDate,1);break;case 13:case 32:this._selectionKeyPressed=!0,this._canSelect(this._activeDate)&&e.preventDefault();return;case 27:this._previewEnd()!=null&&!ut(e)&&(this._clearPreview(),this.activeDrag?this.dragEnded.emit({value:null,event:e}):(this.selectedChange.emit(null),this._userSelection.emit({value:null,event:e})),e.preventDefault(),e.stopPropagation());return;default:return}this._dateAdapter.compareDate(t,this.activeDate)&&(this.activeDateChange.emit(this.activeDate),this._focusActiveCellAfterViewChecked()),e.preventDefault()}_handleCalendarBodyKeyup(e){(e.keyCode===32||e.keyCode===13)&&(this._selectionKeyPressed&&this._canSelect(this._activeDate)&&this._dateSelected({value:this._dateAdapter.getDate(this._activeDate),event:e}),this._selectionKeyPressed=!1)}_init(){this._setRanges(this.selected),this._todayDate.set(this._getCellCompareValue(this._dateAdapter.today())),this._monthLabel.set(this._dateFormats.display.monthLabel?this._dateAdapter.format(this.activeDate,this._dateFormats.display.monthLabel):this._dateAdapter.getMonthNames("short")[this._dateAdapter.getMonth(this.activeDate)].toLocaleUpperCase());let e=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),this._dateAdapter.getMonth(this.activeDate),1);this._firstWeekOffset.set((oh+this._dateAdapter.getDayOfWeek(e)-this._dateAdapter.getFirstDayOfWeek())%oh),this._initWeekdays(),this._createWeekCells(),this._changeDetectorRef.markForCheck()}_focusActiveCell(e){this._matCalendarBody._focusActiveCell(e)}_focusActiveCellAfterViewChecked(){this._matCalendarBody._scheduleFocusActiveCellAfterViewChecked()}_previewChanged({event:e,value:t}){if(this._rangeStrategy){let r=t?t.rawValue:null,a=this._rangeStrategy.createPreview(r,this.selected,e);if(this._previewStart.set(this._getCellCompareValue(a.start)),this._previewEnd.set(this._getCellCompareValue(a.end)),this.activeDrag&&r){let o=this._rangeStrategy.createDrag?.(this.activeDrag.value,this.selected,r,e);o&&(this._previewStart.set(this._getCellCompareValue(o.start)),this._previewEnd.set(this._getCellCompareValue(o.end)))}}}_dragEnded(e){if(this.activeDrag)if(e.value){let t=this._rangeStrategy?.createDrag?.(this.activeDrag.value,this.selected,e.value,e.event);this.dragEnded.emit({value:t??null,event:e.event})}else this.dragEnded.emit({value:null,event:e.event})}_getDateFromDayOfMonth(e){return this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),this._dateAdapter.getMonth(this.activeDate),e)}_initWeekdays(){let e=this._dateAdapter.getFirstDayOfWeek(),t=this._dateAdapter.getDayOfWeekNames("narrow"),a=this._dateAdapter.getDayOfWeekNames("long").map((o,s)=>({long:o,narrow:t[s],id:wx++}));this._weekdays.set(a.slice(e).concat(a.slice(0,e)))}_createWeekCells(){let e=this._dateAdapter.getNumDaysInMonth(this.activeDate),t=this._dateAdapter.getDateNames(),r=[[]];for(let a=0,o=this._firstWeekOffset();a<e;a++,o++){o==oh&&(r.push([]),o=0);let s=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),this._dateAdapter.getMonth(this.activeDate),a+1),c=this._shouldEnableDate(s),m=this._dateAdapter.format(s,this._dateFormats.display.dateA11yLabel),f=this.dateClass?this.dateClass(s,"month"):void 0;r[r.length-1].push(new js(a+1,t[a],m,c,f,this._getCellCompareValue(s),s))}this._weeks.set(r)}_shouldEnableDate(e){return!!e&&(!this.minDate||this._dateAdapter.compareDate(e,this.minDate)>=0)&&(!this.maxDate||this._dateAdapter.compareDate(e,this.maxDate)<=0)&&(!this.dateFilter||this.dateFilter(e))}_getDateInCurrentMonth(e){return e&&this._hasSameMonthAndYear(e,this.activeDate)?this._dateAdapter.getDate(e):null}_hasSameMonthAndYear(e,t){return!!(e&&t&&this._dateAdapter.getMonth(e)==this._dateAdapter.getMonth(t)&&this._dateAdapter.getYear(e)==this._dateAdapter.getYear(t))}_getCellCompareValue(e){if(e){let t=this._dateAdapter.getYear(e),r=this._dateAdapter.getMonth(e),a=this._dateAdapter.getDate(e);return new Date(t,r,a).getTime()}return null}_isRtl(){return this._dir&&this._dir.value==="rtl"}_setRanges(e){e instanceof Ln?(this._rangeStart.set(this._getCellCompareValue(e.start)),this._rangeEnd.set(this._getCellCompareValue(e.end)),this._isRange.set(!0)):(this._rangeStart.set(this._getCellCompareValue(e)),this._rangeEnd.set(this._rangeStart()),this._isRange.set(!1)),this._comparisonRangeStart.set(this._getCellCompareValue(this.comparisonStart)),this._comparisonRangeEnd.set(this._getCellCompareValue(this.comparisonEnd))}_canSelect(e){return!this.dateFilter||this.dateFilter(e)}_clearPreview(){this._previewStart.set(null),this._previewEnd.set(null)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=N({type:n,selectors:[["mat-month-view"]],viewQuery:function(t,r){if(t&1&&ot(bo,5),t&2){let a;re(a=ae())&&(r._matCalendarBody=a.first)}},inputs:{activeDate:"activeDate",selected:"selected",minDate:"minDate",maxDate:"maxDate",dateFilter:"dateFilter",dateClass:"dateClass",comparisonStart:"comparisonStart",comparisonEnd:"comparisonEnd",startDateAccessibleName:"startDateAccessibleName",endDateAccessibleName:"endDateAccessibleName",activeDrag:"activeDrag"},outputs:{selectedChange:"selectedChange",_userSelection:"_userSelection",dragStarted:"dragStarted",dragEnded:"dragEnded",activeDateChange:"activeDateChange"},exportAs:["matMonthView"],features:[Ue],decls:8,vars:14,consts:[["role","grid",1,"mat-calendar-table"],[1,"mat-calendar-table-header"],["scope","col"],["aria-hidden","true"],["colspan","7",1,"mat-calendar-table-header-divider"],["mat-calendar-body","",3,"selectedValueChange","activeDateChange","previewChange","dragStarted","dragEnded","keyup","keydown","label","rows","todayValue","startValue","endValue","comparisonStart","comparisonEnd","previewStart","previewEnd","isRange","labelMinRequiredCells","activeCell","startDateAccessibleName","endDateAccessibleName"],[1,"cdk-visually-hidden"]],template:function(t,r){t&1&&(d(0,"table",0)(1,"thead",1)(2,"tr"),el(3,cx,5,2,"th",2,Fv),u(),d(5,"tr",3),T(6,"th",4),u()(),d(7,"tbody",5),R("selectedValueChange",function(o){return r._dateSelected(o)})("activeDateChange",function(o){return r._updateActiveDate(o)})("previewChange",function(o){return r._previewChanged(o)})("dragStarted",function(o){return r.dragStarted.emit(o)})("dragEnded",function(o){return r._dragEnded(o)})("keyup",function(o){return r._handleCalendarBodyKeyup(o)})("keydown",function(o){return r._handleCalendarBodyKeydown(o)}),u()()),t&2&&(p(3),tl(r._weekdays()),p(4),_("label",r._monthLabel())("rows",r._weeks())("todayValue",r._todayDate())("startValue",r._rangeStart())("endValue",r._rangeEnd())("comparisonStart",r._comparisonRangeStart())("comparisonEnd",r._comparisonRangeEnd())("previewStart",r._previewStart())("previewEnd",r._previewEnd())("isRange",r._isRange())("labelMinRequiredCells",3)("activeCell",r._dateAdapter.getDate(r.activeDate)-1)("startDateAccessibleName",r.startDateAccessibleName)("endDateAccessibleName",r.endDateAccessibleName))},dependencies:[bo],encapsulation:2,changeDetection:0})}return n})(),mn=24,sh=4,kv=(()=>{class n{_changeDetectorRef=l(Ee);_dateAdapter=l(Ht,{optional:!0});_dir=l(ht,{optional:!0});_rerenderSubscription=rt.EMPTY;_selectionKeyPressed=!1;get activeDate(){return this._activeDate}set activeDate(e){let t=this._activeDate,r=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))||this._dateAdapter.today();this._activeDate=this._dateAdapter.clampDate(r,this.minDate,this.maxDate),Nv(this._dateAdapter,t,this._activeDate,this.minDate,this.maxDate)||this._init()}_activeDate;get selected(){return this._selected}set selected(e){e instanceof Ln?this._selected=e:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e)),this._setSelectedYear(e)}_selected=null;get minDate(){return this._minDate}set minDate(e){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_minDate=null;get maxDate(){return this._maxDate}set maxDate(e){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_maxDate=null;dateFilter;dateClass;selectedChange=new j;yearSelected=new j;activeDateChange=new j;_matCalendarBody;_years=ne([]);_todayYear=ne(0);_selectedYear=ne(null);constructor(){this._dateAdapter,this._activeDate=this._dateAdapter.today()}ngAfterContentInit(){this._rerenderSubscription=this._dateAdapter.localeChanges.pipe(Rt(null)).subscribe(()=>this._init())}ngOnDestroy(){this._rerenderSubscription.unsubscribe()}_init(){this._todayYear.set(this._dateAdapter.getYear(this._dateAdapter.today()));let t=this._dateAdapter.getYear(this._activeDate)-Bs(this._dateAdapter,this.activeDate,this.minDate,this.maxDate),r=[];for(let a=0,o=[];a<mn;a++)o.push(t+a),o.length==sh&&(r.push(o.map(s=>this._createCellForYear(s))),o=[]);this._years.set(r),this._changeDetectorRef.markForCheck()}_yearSelected(e){let t=e.value,r=this._dateAdapter.createDate(t,0,1),a=this._getDateFromYear(t);this.yearSelected.emit(r),this.selectedChange.emit(a)}_updateActiveDate(e){let t=e.value,r=this._activeDate;this.activeDate=this._getDateFromYear(t),this._dateAdapter.compareDate(r,this.activeDate)&&this.activeDateChange.emit(this.activeDate)}_handleCalendarBodyKeydown(e){let t=this._activeDate,r=this._isRtl();switch(e.keyCode){case 37:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,r?1:-1);break;case 39:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,r?-1:1);break;case 38:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,-sh);break;case 40:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,sh);break;case 36:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,-Bs(this._dateAdapter,this.activeDate,this.minDate,this.maxDate));break;case 35:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,mn-Bs(this._dateAdapter,this.activeDate,this.minDate,this.maxDate)-1);break;case 33:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,e.altKey?-mn*10:-mn);break;case 34:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,e.altKey?mn*10:mn);break;case 13:case 32:this._selectionKeyPressed=!0;break;default:return}this._dateAdapter.compareDate(t,this.activeDate)&&this.activeDateChange.emit(this.activeDate),this._focusActiveCellAfterViewChecked(),e.preventDefault()}_handleCalendarBodyKeyup(e){(e.keyCode===32||e.keyCode===13)&&(this._selectionKeyPressed&&this._yearSelected({value:this._dateAdapter.getYear(this._activeDate),event:e}),this._selectionKeyPressed=!1)}_getActiveCell(){return Bs(this._dateAdapter,this.activeDate,this.minDate,this.maxDate)}_focusActiveCell(){this._matCalendarBody._focusActiveCell()}_focusActiveCellAfterViewChecked(){this._matCalendarBody._scheduleFocusActiveCellAfterViewChecked()}_getDateFromYear(e){let t=this._dateAdapter.getMonth(this.activeDate),r=this._dateAdapter.getNumDaysInMonth(this._dateAdapter.createDate(e,t,1));return this._dateAdapter.createDate(e,t,Math.min(this._dateAdapter.getDate(this.activeDate),r))}_createCellForYear(e){let t=this._dateAdapter.createDate(e,0,1),r=this._dateAdapter.getYearName(t),a=this.dateClass?this.dateClass(t,"multi-year"):void 0;return new js(e,r,r,this._shouldEnableYear(e),a)}_shouldEnableYear(e){if(e==null||this.maxDate&&e>this._dateAdapter.getYear(this.maxDate)||this.minDate&&e<this._dateAdapter.getYear(this.minDate))return!1;if(!this.dateFilter)return!0;let t=this._dateAdapter.createDate(e,0,1);for(let r=t;this._dateAdapter.getYear(r)==e;r=this._dateAdapter.addCalendarDays(r,1))if(this.dateFilter(r))return!0;return!1}_isRtl(){return this._dir&&this._dir.value==="rtl"}_setSelectedYear(e){if(this._selectedYear.set(null),e instanceof Ln){let t=e.start||e.end;t&&this._selectedYear.set(this._dateAdapter.getYear(t))}else e&&this._selectedYear.set(this._dateAdapter.getYear(e))}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=N({type:n,selectors:[["mat-multi-year-view"]],viewQuery:function(t,r){if(t&1&&ot(bo,5),t&2){let a;re(a=ae())&&(r._matCalendarBody=a.first)}},inputs:{activeDate:"activeDate",selected:"selected",minDate:"minDate",maxDate:"maxDate",dateFilter:"dateFilter",dateClass:"dateClass"},outputs:{selectedChange:"selectedChange",yearSelected:"yearSelected",activeDateChange:"activeDateChange"},exportAs:["matMultiYearView"],decls:5,vars:7,consts:[["role","grid",1,"mat-calendar-table"],["aria-hidden","true",1,"mat-calendar-table-header"],["colspan","4",1,"mat-calendar-table-header-divider"],["mat-calendar-body","",3,"selectedValueChange","activeDateChange","keyup","keydown","rows","todayValue","startValue","endValue","numCols","cellAspectRatio","activeCell"]],template:function(t,r){t&1&&(d(0,"table",0)(1,"thead",1)(2,"tr"),T(3,"th",2),u()(),d(4,"tbody",3),R("selectedValueChange",function(o){return r._yearSelected(o)})("activeDateChange",function(o){return r._updateActiveDate(o)})("keyup",function(o){return r._handleCalendarBodyKeyup(o)})("keydown",function(o){return r._handleCalendarBodyKeydown(o)}),u()()),t&2&&(p(4),_("rows",r._years())("todayValue",r._todayYear())("startValue",r._selectedYear())("endValue",r._selectedYear())("numCols",4)("cellAspectRatio",4/7)("activeCell",r._getActiveCell()))},dependencies:[bo],encapsulation:2,changeDetection:0})}return n})();function Nv(n,i,e,t,r){let a=n.getYear(i),o=n.getYear(e),s=Lv(n,t,r);return Math.floor((a-s)/mn)===Math.floor((o-s)/mn)}function Bs(n,i,e,t){let r=n.getYear(i);return Ex(r-Lv(n,e,t),mn)}function Lv(n,i,e){let t=0;return e?t=n.getYear(e)-mn+1:i&&(t=n.getYear(i)),t}function Ex(n,i){return(n%i+i)%i}var Tv=(()=>{class n{_changeDetectorRef=l(Ee);_dateFormats=l(Vr,{optional:!0});_dateAdapter=l(Ht,{optional:!0});_dir=l(ht,{optional:!0});_rerenderSubscription=rt.EMPTY;_selectionKeyPressed=!1;get activeDate(){return this._activeDate}set activeDate(e){let t=this._activeDate,r=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))||this._dateAdapter.today();this._activeDate=this._dateAdapter.clampDate(r,this.minDate,this.maxDate),this._dateAdapter.getYear(t)!==this._dateAdapter.getYear(this._activeDate)&&this._init()}_activeDate;get selected(){return this._selected}set selected(e){e instanceof Ln?this._selected=e:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e)),this._setSelectedMonth(e)}_selected=null;get minDate(){return this._minDate}set minDate(e){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_minDate=null;get maxDate(){return this._maxDate}set maxDate(e){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_maxDate=null;dateFilter;dateClass;selectedChange=new j;monthSelected=new j;activeDateChange=new j;_matCalendarBody;_months=ne([]);_yearLabel=ne("");_todayMonth=ne(null);_selectedMonth=ne(null);constructor(){this._activeDate=this._dateAdapter.today()}ngAfterContentInit(){this._rerenderSubscription=this._dateAdapter.localeChanges.pipe(Rt(null)).subscribe(()=>this._init())}ngOnDestroy(){this._rerenderSubscription.unsubscribe()}_monthSelected(e){let t=e.value,r=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),t,1);this.monthSelected.emit(r);let a=this._getDateFromMonth(t);this.selectedChange.emit(a)}_updateActiveDate(e){let t=e.value,r=this._activeDate;this.activeDate=this._getDateFromMonth(t),this._dateAdapter.compareDate(r,this.activeDate)&&this.activeDateChange.emit(this.activeDate)}_handleCalendarBodyKeydown(e){let t=this._activeDate,r=this._isRtl();switch(e.keyCode){case 37:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,r?1:-1);break;case 39:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,r?-1:1);break;case 38:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,-4);break;case 40:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,4);break;case 36:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,-this._dateAdapter.getMonth(this._activeDate));break;case 35:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,11-this._dateAdapter.getMonth(this._activeDate));break;case 33:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,e.altKey?-10:-1);break;case 34:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,e.altKey?10:1);break;case 13:case 32:this._selectionKeyPressed=!0;break;default:return}this._dateAdapter.compareDate(t,this.activeDate)&&(this.activeDateChange.emit(this.activeDate),this._focusActiveCellAfterViewChecked()),e.preventDefault()}_handleCalendarBodyKeyup(e){(e.keyCode===32||e.keyCode===13)&&(this._selectionKeyPressed&&this._monthSelected({value:this._dateAdapter.getMonth(this._activeDate),event:e}),this._selectionKeyPressed=!1)}_init(){this._setSelectedMonth(this.selected),this._todayMonth.set(this._getMonthInCurrentYear(this._dateAdapter.today())),this._yearLabel.set(this._dateAdapter.getYearName(this.activeDate));let e=this._dateAdapter.getMonthNames("short");this._months.set([[0,1,2,3],[4,5,6,7],[8,9,10,11]].map(t=>t.map(r=>this._createCellForMonth(r,e[r])))),this._changeDetectorRef.markForCheck()}_focusActiveCell(){this._matCalendarBody._focusActiveCell()}_focusActiveCellAfterViewChecked(){this._matCalendarBody._scheduleFocusActiveCellAfterViewChecked()}_getMonthInCurrentYear(e){return e&&this._dateAdapter.getYear(e)==this._dateAdapter.getYear(this.activeDate)?this._dateAdapter.getMonth(e):null}_getDateFromMonth(e){let t=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),e,1),r=this._dateAdapter.getNumDaysInMonth(t);return this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),e,Math.min(this._dateAdapter.getDate(this.activeDate),r))}_createCellForMonth(e,t){let r=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),e,1),a=this._dateAdapter.format(r,this._dateFormats.display.monthYearA11yLabel),o=this.dateClass?this.dateClass(r,"year"):void 0;return new js(e,t.toLocaleUpperCase(),a,this._shouldEnableMonth(e),o)}_shouldEnableMonth(e){let t=this._dateAdapter.getYear(this.activeDate);if(e==null||this._isYearAndMonthAfterMaxDate(t,e)||this._isYearAndMonthBeforeMinDate(t,e))return!1;if(!this.dateFilter)return!0;let r=this._dateAdapter.createDate(t,e,1);for(let a=r;this._dateAdapter.getMonth(a)==e;a=this._dateAdapter.addCalendarDays(a,1))if(this.dateFilter(a))return!0;return!1}_isYearAndMonthAfterMaxDate(e,t){if(this.maxDate){let r=this._dateAdapter.getYear(this.maxDate),a=this._dateAdapter.getMonth(this.maxDate);return e>r||e===r&&t>a}return!1}_isYearAndMonthBeforeMinDate(e,t){if(this.minDate){let r=this._dateAdapter.getYear(this.minDate),a=this._dateAdapter.getMonth(this.minDate);return e<r||e===r&&t<a}return!1}_isRtl(){return this._dir&&this._dir.value==="rtl"}_setSelectedMonth(e){e instanceof Ln?this._selectedMonth.set(this._getMonthInCurrentYear(e.start)||this._getMonthInCurrentYear(e.end)):this._selectedMonth.set(this._getMonthInCurrentYear(e))}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=N({type:n,selectors:[["mat-year-view"]],viewQuery:function(t,r){if(t&1&&ot(bo,5),t&2){let a;re(a=ae())&&(r._matCalendarBody=a.first)}},inputs:{activeDate:"activeDate",selected:"selected",minDate:"minDate",maxDate:"maxDate",dateFilter:"dateFilter",dateClass:"dateClass"},outputs:{selectedChange:"selectedChange",monthSelected:"monthSelected",activeDateChange:"activeDateChange"},exportAs:["matYearView"],decls:5,vars:9,consts:[["role","grid",1,"mat-calendar-table"],["aria-hidden","true",1,"mat-calendar-table-header"],["colspan","4",1,"mat-calendar-table-header-divider"],["mat-calendar-body","",3,"selectedValueChange","activeDateChange","keyup","keydown","label","rows","todayValue","startValue","endValue","labelMinRequiredCells","numCols","cellAspectRatio","activeCell"]],template:function(t,r){t&1&&(d(0,"table",0)(1,"thead",1)(2,"tr"),T(3,"th",2),u()(),d(4,"tbody",3),R("selectedValueChange",function(o){return r._monthSelected(o)})("activeDateChange",function(o){return r._updateActiveDate(o)})("keyup",function(o){return r._handleCalendarBodyKeyup(o)})("keydown",function(o){return r._handleCalendarBodyKeydown(o)}),u()()),t&2&&(p(4),_("label",r._yearLabel())("rows",r._months())("todayValue",r._todayMonth())("startValue",r._selectedMonth())("endValue",r._selectedMonth())("labelMinRequiredCells",2)("numCols",4)("cellAspectRatio",4/7)("activeCell",r._dateAdapter.getMonth(r.activeDate)))},dependencies:[bo],encapsulation:2,changeDetection:0})}return n})(),Vv=(()=>{class n{_intl=l(yo);calendar=l(lh);_dateAdapter=l(Ht,{optional:!0});_dateFormats=l(Vr,{optional:!0});_periodButtonText;_periodButtonDescription;_periodButtonLabel;_prevButtonLabel;_nextButtonLabel;constructor(){l(dt).load(yi);let e=l(Ee);this._updateLabels(),this.calendar.stateChanges.subscribe(()=>{this._updateLabels(),e.markForCheck()})}get periodButtonText(){return this._periodButtonText}get periodButtonDescription(){return this._periodButtonDescription}get periodButtonLabel(){return this._periodButtonLabel}get prevButtonLabel(){return this._prevButtonLabel}get nextButtonLabel(){return this._nextButtonLabel}currentPeriodClicked(){this.calendar.currentView=this.calendar.currentView=="month"?"multi-year":"month"}previousClicked(){this.previousEnabled()&&(this.calendar.activeDate=this.calendar.currentView=="month"?this._dateAdapter.addCalendarMonths(this.calendar.activeDate,-1):this._dateAdapter.addCalendarYears(this.calendar.activeDate,this.calendar.currentView=="year"?-1:-mn))}nextClicked(){this.nextEnabled()&&(this.calendar.activeDate=this.calendar.currentView=="month"?this._dateAdapter.addCalendarMonths(this.calendar.activeDate,1):this._dateAdapter.addCalendarYears(this.calendar.activeDate,this.calendar.currentView=="year"?1:mn))}previousEnabled(){return this.calendar.minDate?!this.calendar.minDate||!this._isSameView(this.calendar.activeDate,this.calendar.minDate):!0}nextEnabled(){return!this.calendar.maxDate||!this._isSameView(this.calendar.activeDate,this.calendar.maxDate)}_updateLabels(){let e=this.calendar,t=this._intl,r=this._dateAdapter;e.currentView==="month"?(this._periodButtonText=r.format(e.activeDate,this._dateFormats.display.monthYearLabel).toLocaleUpperCase(),this._periodButtonDescription=r.format(e.activeDate,this._dateFormats.display.monthYearLabel).toLocaleUpperCase(),this._periodButtonLabel=t.switchToMultiYearViewLabel,this._prevButtonLabel=t.prevMonthLabel,this._nextButtonLabel=t.nextMonthLabel):e.currentView==="year"?(this._periodButtonText=r.getYearName(e.activeDate),this._periodButtonDescription=r.getYearName(e.activeDate),this._periodButtonLabel=t.switchToMonthViewLabel,this._prevButtonLabel=t.prevYearLabel,this._nextButtonLabel=t.nextYearLabel):(this._periodButtonText=t.formatYearRange(...this._formatMinAndMaxYearLabels()),this._periodButtonDescription=t.formatYearRangeLabel(...this._formatMinAndMaxYearLabels()),this._periodButtonLabel=t.switchToMonthViewLabel,this._prevButtonLabel=t.prevMultiYearLabel,this._nextButtonLabel=t.nextMultiYearLabel)}_isSameView(e,t){return this.calendar.currentView=="month"?this._dateAdapter.getYear(e)==this._dateAdapter.getYear(t)&&this._dateAdapter.getMonth(e)==this._dateAdapter.getMonth(t):this.calendar.currentView=="year"?this._dateAdapter.getYear(e)==this._dateAdapter.getYear(t):Nv(this._dateAdapter,e,t,this.calendar.minDate,this.calendar.maxDate)}_formatMinAndMaxYearLabels(){let t=this._dateAdapter.getYear(this.calendar.activeDate)-Bs(this._dateAdapter,this.calendar.activeDate,this.calendar.minDate,this.calendar.maxDate),r=t+mn-1,a=this._dateAdapter.getYearName(this._dateAdapter.createDate(t,0,1)),o=this._dateAdapter.getYearName(this._dateAdapter.createDate(r,0,1));return[a,o]}_periodButtonLabelId=l(et).getId("mat-calendar-period-label-");static \u0275fac=function(t){return new(t||n)};static \u0275cmp=N({type:n,selectors:[["mat-calendar-header"]],exportAs:["matCalendarHeader"],ngContentSelectors:dx,decls:17,vars:13,consts:[[1,"mat-calendar-header"],[1,"mat-calendar-controls"],["aria-live","polite",1,"cdk-visually-hidden",3,"id"],["matButton","","type","button",1,"mat-calendar-period-button",3,"click"],["aria-hidden","true"],["viewBox","0 0 10 5","focusable","false","aria-hidden","true",1,"mat-calendar-arrow"],["points","0,0 5,5 10,0"],[1,"mat-calendar-spacer"],["matIconButton","","type","button","disabledInteractive","",1,"mat-calendar-previous-button",3,"click","disabled","matTooltip"],["viewBox","0 0 24 24","focusable","false","aria-hidden","true"],["d","M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"],["matIconButton","","type","button","disabledInteractive","",1,"mat-calendar-next-button",3,"click","disabled","matTooltip"],["d","M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"]],template:function(t,r){t&1&&(Qe(),d(0,"div",0)(1,"div",1)(2,"span",2),h(3),u(),d(4,"button",3),R("click",function(){return r.currentPeriodClicked()}),d(5,"span",4),h(6),u(),fn(),d(7,"svg",5),T(8,"polygon",6),u()(),Ao(),T(9,"div",7),ve(10),d(11,"button",8),R("click",function(){return r.previousClicked()}),fn(),d(12,"svg",9),T(13,"path",10),u()(),Ao(),d(14,"button",11),R("click",function(){return r.nextClicked()}),fn(),d(15,"svg",9),T(16,"path",12),u()()()()),t&2&&(p(2),_("id",r._periodButtonLabelId),p(),lt(r.periodButtonDescription),p(),pe("aria-label",r.periodButtonLabel)("aria-describedby",r._periodButtonLabelId),p(2),lt(r.periodButtonText),p(),J("mat-calendar-invert",r.calendar.currentView!=="month"),p(4),_("disabled",!r.previousEnabled())("matTooltip",r.prevButtonLabel),pe("aria-label",r.prevButtonLabel),p(3),_("disabled",!r.nextEnabled())("matTooltip",r.nextButtonLabel),pe("aria-label",r.nextButtonLabel))},dependencies:[mt,Fn,Sv],encapsulation:2,changeDetection:0})}return n})(),lh=(()=>{class n{_dateAdapter=l(Ht,{optional:!0});_dateFormats=l(Vr,{optional:!0});_changeDetectorRef=l(Ee);_elementRef=l(U);headerComponent;_calendarHeaderPortal;_intlChanges;_moveFocusOnNextTick=!1;get startAt(){return this._startAt}set startAt(e){this._startAt=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_startAt=null;startView="month";get selected(){return this._selected}set selected(e){e instanceof Ln?this._selected=e:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_selected=null;get minDate(){return this._minDate}set minDate(e){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_minDate=null;get maxDate(){return this._maxDate}set maxDate(e){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_maxDate=null;dateFilter;dateClass;comparisonStart=null;comparisonEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;selectedChange=new j;yearSelected=new j;monthSelected=new j;viewChanged=new j(!0);_userSelection=new j;_userDragDrop=new j;monthView;yearView;multiYearView;get activeDate(){return this._clampedActiveDate}set activeDate(e){this._clampedActiveDate=this._dateAdapter.clampDate(e,this.minDate,this.maxDate),this.stateChanges.next(),this._changeDetectorRef.markForCheck()}_clampedActiveDate;get currentView(){return this._currentView}set currentView(e){let t=this._currentView!==e?e:null;this._currentView=e,this._moveFocusOnNextTick=!0,this._changeDetectorRef.markForCheck(),t&&(this.stateChanges.next(),this.viewChanged.emit(t))}_currentView;_activeDrag=null;stateChanges=new P;constructor(){this._intlChanges=l(yo).changes.subscribe(()=>{this._changeDetectorRef.markForCheck(),this.stateChanges.next()})}ngAfterContentInit(){this._calendarHeaderPortal=new tn(this.headerComponent||Vv),this.activeDate=this.startAt||this._dateAdapter.today(),this._currentView=this.startView}ngAfterViewChecked(){this._moveFocusOnNextTick&&(this._moveFocusOnNextTick=!1,this.focusActiveCell())}ngOnDestroy(){this._intlChanges.unsubscribe(),this.stateChanges.complete()}ngOnChanges(e){let t=e.minDate&&!this._dateAdapter.sameDate(e.minDate.previousValue,e.minDate.currentValue)?e.minDate:void 0,r=e.maxDate&&!this._dateAdapter.sameDate(e.maxDate.previousValue,e.maxDate.currentValue)?e.maxDate:void 0,a=t||r||e.dateFilter;if(a&&!a.firstChange){let o=this._getCurrentViewComponent();o&&(this._elementRef.nativeElement.contains(vi())&&(this._moveFocusOnNextTick=!0),this._changeDetectorRef.detectChanges(),o._init())}this.stateChanges.next()}focusActiveCell(){this._getCurrentViewComponent()?._focusActiveCell(!1)}updateTodaysDate(){this._getCurrentViewComponent()?._init()}_dateSelected(e){let t=e.value;(this.selected instanceof Ln||t&&!this._dateAdapter.sameDate(t,this.selected))&&this.selectedChange.emit(t),this._userSelection.emit(e)}_yearSelectedInMultiYearView(e){this.yearSelected.emit(e)}_monthSelectedInYearView(e){this.monthSelected.emit(e)}_goToDateInView(e,t){this.activeDate=e,this.currentView=t}_dragStarted(e){this._activeDrag=e}_dragEnded(e){this._activeDrag&&(e.value&&this._userDragDrop.emit(e),this._activeDrag=null)}_getCurrentViewComponent(){return this.monthView||this.yearView||this.multiYearView}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=N({type:n,selectors:[["mat-calendar"]],viewQuery:function(t,r){if(t&1&&ot(Rv,5)(Tv,5)(kv,5),t&2){let a;re(a=ae())&&(r.monthView=a.first),re(a=ae())&&(r.yearView=a.first),re(a=ae())&&(r.multiYearView=a.first)}},hostAttrs:[1,"mat-calendar"],inputs:{headerComponent:"headerComponent",startAt:"startAt",startView:"startView",selected:"selected",minDate:"minDate",maxDate:"maxDate",dateFilter:"dateFilter",dateClass:"dateClass",comparisonStart:"comparisonStart",comparisonEnd:"comparisonEnd",startDateAccessibleName:"startDateAccessibleName",endDateAccessibleName:"endDateAccessibleName"},outputs:{selectedChange:"selectedChange",yearSelected:"yearSelected",monthSelected:"monthSelected",viewChanged:"viewChanged",_userSelection:"_userSelection",_userDragDrop:"_userDragDrop"},exportAs:["matCalendar"],features:[je([Ov]),Ue],decls:5,vars:2,consts:[[3,"cdkPortalOutlet"],["cdkMonitorSubtreeFocus","","tabindex","-1",1,"mat-calendar-content"],[3,"activeDate","selected","dateFilter","maxDate","minDate","dateClass","comparisonStart","comparisonEnd","startDateAccessibleName","endDateAccessibleName","activeDrag"],[3,"activeDate","selected","dateFilter","maxDate","minDate","dateClass"],[3,"activeDateChange","_userSelection","dragStarted","dragEnded","activeDate","selected","dateFilter","maxDate","minDate","dateClass","comparisonStart","comparisonEnd","startDateAccessibleName","endDateAccessibleName","activeDrag"],[3,"activeDateChange","monthSelected","selectedChange","activeDate","selected","dateFilter","maxDate","minDate","dateClass"],[3,"activeDateChange","yearSelected","selectedChange","activeDate","selected","dateFilter","maxDate","minDate","dateClass"]],template:function(t,r){if(t&1&&(L(0,ux,0,0,"ng-template",0),d(1,"div",1),ke(2,mx,1,11,"mat-month-view",2)(3,hx,1,6,"mat-year-view",3)(4,fx,1,6,"mat-multi-year-view",3),u()),t&2){let a;_("cdkPortalOutlet",r._calendarHeaderPortal),p(2),Te((a=r.currentView)==="month"?2:a==="year"?3:a==="multi-year"?4:-1)}},dependencies:[Xn,sm,Rv,Tv,kv],styles:[`.mat-calendar {
  display: block;
  line-height: normal;
  font-family: var(--mat-datepicker-calendar-text-font, var(--mat-sys-body-medium-font));
  font-size: var(--mat-datepicker-calendar-text-size, var(--mat-sys-body-medium-size));
}

.mat-calendar-header {
  padding: 8px 8px 0 8px;
}

.mat-calendar-content {
  padding: 0 8px 8px 8px;
  outline: none;
}

.mat-calendar-controls {
  display: flex;
  align-items: center;
  margin: 5% calc(4.7142857143% - 16px);
}

.mat-calendar-spacer {
  flex: 1 1 auto;
}

.mat-calendar-period-button {
  min-width: 0;
  margin: 0 8px;
  font-size: var(--mat-datepicker-calendar-period-button-text-size, var(--mat-sys-title-small-size));
  font-weight: var(--mat-datepicker-calendar-period-button-text-weight, var(--mat-sys-title-small-weight));
  --mat-button-text-label-text-color: var(--mat-datepicker-calendar-period-button-text-color, var(--mat-sys-on-surface-variant));
}

.mat-calendar-arrow {
  display: inline-block;
  width: 10px;
  height: 5px;
  margin: 0 0 0 5px;
  vertical-align: middle;
  fill: var(--mat-datepicker-calendar-period-button-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-calendar-arrow.mat-calendar-invert {
  transform: rotate(180deg);
}
[dir=rtl] .mat-calendar-arrow {
  margin: 0 5px 0 0;
}
@media (forced-colors: active) {
  .mat-calendar-arrow {
    fill: CanvasText;
  }
}

.mat-datepicker-content .mat-calendar-previous-button:not(.mat-mdc-button-disabled),
.mat-datepicker-content .mat-calendar-next-button:not(.mat-mdc-button-disabled) {
  color: var(--mat-datepicker-calendar-navigation-button-icon-color, var(--mat-sys-on-surface-variant));
}
[dir=rtl] .mat-calendar-previous-button,
[dir=rtl] .mat-calendar-next-button {
  transform: rotate(180deg);
}

.mat-calendar-table {
  border-spacing: 0;
  border-collapse: collapse;
  width: 100%;
}

.mat-calendar-table-header th {
  text-align: center;
  padding: 0 0 8px 0;
  color: var(--mat-datepicker-calendar-header-text-color, var(--mat-sys-on-surface-variant));
  font-size: var(--mat-datepicker-calendar-header-text-size, var(--mat-sys-title-small-size));
  font-weight: var(--mat-datepicker-calendar-header-text-weight, var(--mat-sys-title-small-weight));
}

.mat-calendar-table-header-divider {
  position: relative;
  height: 1px;
}
.mat-calendar-table-header-divider::after {
  content: "";
  position: absolute;
  top: 0;
  left: -8px;
  right: -8px;
  height: 1px;
  background: var(--mat-datepicker-calendar-header-divider-color, transparent);
}

.mat-calendar-body-cell-content::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 3px) * -1);
}

.mat-calendar-body-cell:focus-visible .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2,changeDetection:0})}return n})(),xx=new S("mat-datepicker-scroll-strategy",{providedIn:"root",factory:()=>{let n=l(ce);return()=>$i(n)}}),Bv=(()=>{class n{_elementRef=l(U);_animationsDisabled=st();_changeDetectorRef=l(Ee);_globalModel=l(zs);_dateAdapter=l(Ht);_ngZone=l(de);_rangeSelectionStrategy=l(Pv,{optional:!0});_stateChanges;_model;_eventCleanups;_animationFallback;_calendar;color;datepicker;comparisonStart=null;comparisonEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;_isAbove=!1;_animationDone=new P;_isAnimating=!1;_closeButtonText;_closeButtonFocused=!1;_actionsPortal=null;_dialogLabelId=null;constructor(){if(l(dt).load(yi),this._closeButtonText=l(yo).closeCalendarLabel,!this._animationsDisabled){let e=this._elementRef.nativeElement,t=l(Je);this._eventCleanups=this._ngZone.runOutsideAngular(()=>[t.listen(e,"animationstart",this._handleAnimationEvent),t.listen(e,"animationend",this._handleAnimationEvent),t.listen(e,"animationcancel",this._handleAnimationEvent)])}}ngAfterViewInit(){this._stateChanges=this.datepicker.stateChanges.subscribe(()=>{this._changeDetectorRef.markForCheck()}),this._calendar.focusActiveCell()}ngOnDestroy(){clearTimeout(this._animationFallback),this._eventCleanups?.forEach(e=>e()),this._stateChanges?.unsubscribe(),this._animationDone.complete()}_handleUserSelection(e){let t=this._model.selection,r=e.value,a=t instanceof Ln;if(a&&this._rangeSelectionStrategy){let o=this._rangeSelectionStrategy.selectionFinished(r,t,e.event);this._model.updateSelection(o,this)}else r&&(a||!this._dateAdapter.sameDate(r,t))&&this._model.add(r);(!this._model||this._model.isComplete())&&!this._actionsPortal&&this.datepicker.close()}_handleUserDragDrop(e){this._model.updateSelection(e.value,this)}_startExitAnimation(){this._elementRef.nativeElement.classList.add("mat-datepicker-content-exit"),this._animationsDisabled?this._animationDone.next():(clearTimeout(this._animationFallback),this._animationFallback=setTimeout(()=>{this._isAnimating||this._animationDone.next()},200))}_handleAnimationEvent=e=>{let t=this._elementRef.nativeElement;e.target!==t||!e.animationName.startsWith("_mat-datepicker-content")||(clearTimeout(this._animationFallback),this._isAnimating=e.type==="animationstart",t.classList.toggle("mat-datepicker-content-animating",this._isAnimating),this._isAnimating||this._animationDone.next())};_getSelected(){return this._model.selection}_applyPendingSelection(){this._model!==this._globalModel&&this._globalModel.updateSelection(this._model.selection,this)}_assignActions(e,t){this._model=e?this._globalModel.clone():this._globalModel,this._actionsPortal=e,t&&this._changeDetectorRef.detectChanges()}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=N({type:n,selectors:[["mat-datepicker-content"]],viewQuery:function(t,r){if(t&1&&ot(lh,5),t&2){let a;re(a=ae())&&(r._calendar=a.first)}},hostAttrs:[1,"mat-datepicker-content"],hostVars:6,hostBindings:function(t,r){t&2&&(It(r.color?"mat-"+r.color:""),J("mat-datepicker-content-touch",r.datepicker.touchUi)("mat-datepicker-content-animations-enabled",!r._animationsDisabled))},inputs:{color:"color"},exportAs:["matDatepickerContent"],decls:5,vars:26,consts:[["cdkTrapFocus","","role","dialog",1,"mat-datepicker-content-container"],[3,"yearSelected","monthSelected","viewChanged","_userSelection","_userDragDrop","id","startAt","startView","minDate","maxDate","dateFilter","headerComponent","selected","dateClass","comparisonStart","comparisonEnd","startDateAccessibleName","endDateAccessibleName"],[3,"cdkPortalOutlet"],["type","button","matButton","elevated",1,"mat-datepicker-close-button",3,"focus","blur","click","color"]],template:function(t,r){t&1&&(d(0,"div",0)(1,"mat-calendar",1),R("yearSelected",function(o){return r.datepicker._selectYear(o)})("monthSelected",function(o){return r.datepicker._selectMonth(o)})("viewChanged",function(o){return r.datepicker._viewChanged(o)})("_userSelection",function(o){return r._handleUserSelection(o)})("_userDragDrop",function(o){return r._handleUserDragDrop(o)}),u(),L(2,px,0,0,"ng-template",2),d(3,"button",3),R("focus",function(){return r._closeButtonFocused=!0})("blur",function(){return r._closeButtonFocused=!1})("click",function(){return r.datepicker.close()}),h(4),u()()),t&2&&(J("mat-datepicker-content-container-with-custom-header",r.datepicker.calendarHeaderComponent)("mat-datepicker-content-container-with-actions",r._actionsPortal),pe("aria-modal",!0)("aria-labelledby",r._dialogLabelId??void 0),p(),It(r.datepicker.panelClass),_("id",r.datepicker.id)("startAt",r.datepicker.startAt)("startView",r.datepicker.startView)("minDate",r.datepicker._getMinDate())("maxDate",r.datepicker._getMaxDate())("dateFilter",r.datepicker._getDateFilter())("headerComponent",r.datepicker.calendarHeaderComponent)("selected",r._getSelected())("dateClass",r.datepicker.dateClass)("comparisonStart",r.comparisonStart)("comparisonEnd",r.comparisonEnd)("startDateAccessibleName",r.startDateAccessibleName)("endDateAccessibleName",r.endDateAccessibleName),p(),_("cdkPortalOutlet",r._actionsPortal),p(),J("cdk-visually-hidden",!r._closeButtonFocused),_("color",r.color||"primary"),p(),lt(r._closeButtonText))},dependencies:[um,lh,Xn,mt],styles:[`@keyframes _mat-datepicker-content-dropdown-enter {
  from {
    opacity: 0;
    transform: scaleY(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-datepicker-content-dialog-enter {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-datepicker-content-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-datepicker-content {
  display: block;
  background-color: var(--mat-datepicker-calendar-container-background-color, var(--mat-sys-surface-container-high));
  color: var(--mat-datepicker-calendar-container-text-color, var(--mat-sys-on-surface));
  box-shadow: var(--mat-datepicker-calendar-container-elevation-shadow, 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12));
  border-radius: var(--mat-datepicker-calendar-container-shape, var(--mat-sys-corner-large));
}
.mat-datepicker-content.mat-datepicker-content-animations-enabled {
  animation: _mat-datepicker-content-dropdown-enter 120ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-datepicker-content .mat-calendar {
  width: 296px;
  height: 354px;
}
.mat-datepicker-content .mat-datepicker-content-container-with-custom-header .mat-calendar {
  height: auto;
}
.mat-datepicker-content .mat-datepicker-close-button {
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: 8px;
}
.mat-datepicker-content-animating .mat-datepicker-content .mat-datepicker-close-button {
  display: none;
}

.mat-datepicker-content-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.mat-datepicker-content-touch {
  display: block;
  max-height: 80vh;
  box-shadow: var(--mat-datepicker-calendar-container-touch-elevation-shadow, 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12));
  border-radius: var(--mat-datepicker-calendar-container-touch-shape, var(--mat-sys-corner-extra-large));
  position: relative;
  overflow: visible;
}
.mat-datepicker-content-touch.mat-datepicker-content-animations-enabled {
  animation: _mat-datepicker-content-dialog-enter 150ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-datepicker-content-touch .mat-datepicker-content-container {
  min-height: 312px;
  max-height: 788px;
  min-width: 250px;
  max-width: 750px;
}
.mat-datepicker-content-touch .mat-calendar {
  width: 100%;
  height: auto;
}

.mat-datepicker-content-exit.mat-datepicker-content-animations-enabled {
  animation: _mat-datepicker-content-exit 100ms linear;
}

@media all and (orientation: landscape) {
  .mat-datepicker-content-touch .mat-datepicker-content-container {
    width: 64vh;
    height: 80vh;
  }
}
@media all and (orientation: portrait) {
  .mat-datepicker-content-touch .mat-datepicker-content-container {
    width: 80vw;
    height: 100vw;
  }
  .mat-datepicker-content-touch .mat-datepicker-content-container-with-actions {
    height: 115vw;
  }
}
`],encapsulation:2,changeDetection:0})}return n})(),Iv=(()=>{class n{_injector=l(ce);_viewContainerRef=l(gt);_dateAdapter=l(Ht,{optional:!0});_dir=l(ht,{optional:!0});_model=l(zs);_animationsDisabled=st();_scrollStrategy=l(xx);_inputStateChanges=rt.EMPTY;_document=l(X);calendarHeaderComponent;get startAt(){return this._startAt||(this.datepickerInput?this.datepickerInput.getStartValue():null)}set startAt(e){this._startAt=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_startAt=null;startView="month";get color(){return this._color||(this.datepickerInput?this.datepickerInput.getThemePalette():void 0)}set color(e){this._color=e}_color;touchUi=!1;get disabled(){return this._disabled===void 0&&this.datepickerInput?this.datepickerInput.disabled:!!this._disabled}set disabled(e){e!==this._disabled&&(this._disabled=e,this.stateChanges.next(void 0))}_disabled;xPosition="start";yPosition="below";restoreFocus=!0;yearSelected=new j;monthSelected=new j;viewChanged=new j(!0);dateClass;openedStream=new j;closedStream=new j;get panelClass(){return this._panelClass}set panelClass(e){this._panelClass=i_(e)}_panelClass;get opened(){return this._opened}set opened(e){e?this.open():this.close()}_opened=!1;id=l(et).getId("mat-datepicker-");_getMinDate(){return this.datepickerInput&&this.datepickerInput.min}_getMaxDate(){return this.datepickerInput&&this.datepickerInput.max}_getDateFilter(){return this.datepickerInput&&this.datepickerInput.dateFilter}_overlayRef=null;_componentRef=null;_focusedElementBeforeOpen=null;_backdropHarnessClass=`${this.id}-backdrop`;_actionsPortal=null;datepickerInput;stateChanges=new P;_changeDetectorRef=l(Ee);constructor(){this._dateAdapter,this._model.selectionChanged.subscribe(()=>{this._changeDetectorRef.markForCheck()})}ngOnChanges(e){let t=e.xPosition||e.yPosition;if(t&&!t.firstChange&&this._overlayRef){let r=this._overlayRef.getConfig().positionStrategy;r instanceof co&&(this._setConnectedPositions(r),this.opened&&this._overlayRef.updatePosition())}this.stateChanges.next(void 0)}ngOnDestroy(){this._destroyOverlay(),this.close(),this._inputStateChanges.unsubscribe(),this.stateChanges.complete()}select(e){this._model.add(e)}_selectYear(e){this.yearSelected.emit(e)}_selectMonth(e){this.monthSelected.emit(e)}_viewChanged(e){this.viewChanged.emit(e)}registerInput(e){return this.datepickerInput,this._inputStateChanges.unsubscribe(),this.datepickerInput=e,this._inputStateChanges=e.stateChanges.subscribe(()=>this.stateChanges.next(void 0)),this._model}registerActions(e){this._actionsPortal,this._actionsPortal=e,this._componentRef?.instance._assignActions(e,!0)}removeActions(e){e===this._actionsPortal&&(this._actionsPortal=null,this._componentRef?.instance._assignActions(null,!0))}open(){this._opened||this.disabled||this._componentRef?.instance._isAnimating||(this.datepickerInput,this._focusedElementBeforeOpen=vi(),this._openOverlay(),this._opened=!0,this.openedStream.emit())}close(){if(!this._opened||this._componentRef?.instance._isAnimating)return;let e=this.restoreFocus&&this._focusedElementBeforeOpen&&typeof this._focusedElementBeforeOpen.focus=="function",t=()=>{this._opened&&(this._opened=!1,this.closedStream.emit())};if(this._componentRef){let{instance:r,location:a}=this._componentRef;r._animationDone.pipe(vt(1)).subscribe(()=>{let o=this._document.activeElement;e&&(!o||o===this._document.activeElement||a.nativeElement.contains(o))&&this._focusedElementBeforeOpen.focus(),this._focusedElementBeforeOpen=null,this._destroyOverlay()}),r._startExitAnimation()}e?setTimeout(t):t()}_applyPendingSelection(){this._componentRef?.instance?._applyPendingSelection()}_forwardContentValues(e){e.datepicker=this,e.color=this.color,e._dialogLabelId=this.datepickerInput.getOverlayLabelId(),e._assignActions(this._actionsPortal,!1)}_openOverlay(){this._destroyOverlay();let e=this.touchUi,t=new tn(Bv,this._viewContainerRef),r=this._overlayRef=ei(this._injector,new Jn({positionStrategy:e?this._getDialogStrategy():this._getDropdownStrategy(),hasBackdrop:!0,backdropClass:[e?"cdk-overlay-dark-backdrop":"mat-overlay-transparent-backdrop",this._backdropHarnessClass],direction:this._dir||"ltr",scrollStrategy:e?gr(this._injector):this._scrollStrategy(),panelClass:`mat-datepicker-${e?"dialog":"popup"}`,disableAnimations:this._animationsDisabled}));this._getCloseStream(r).subscribe(a=>{a&&a.preventDefault(),this.close()}),r.keydownEvents().subscribe(a=>{let o=a.keyCode;(o===38||o===40||o===37||o===39||o===33||o===34)&&a.preventDefault()}),this._componentRef=r.attach(t),this._forwardContentValues(this._componentRef.instance),e||at(()=>{r.updatePosition()},{injector:this._injector})}_destroyOverlay(){this._overlayRef&&(this._overlayRef.dispose(),this._overlayRef=this._componentRef=null)}_getDialogStrategy(){return Ei(this._injector).centerHorizontally().centerVertically()}_getDropdownStrategy(){let e=ya(this._injector,this.datepickerInput.getConnectedOverlayOrigin()).withTransformOriginOn(".mat-datepicker-content").withFlexibleDimensions(!1).withViewportMargin(8).withLockedPosition();return this._setConnectedPositions(e)}_setConnectedPositions(e){let t=this.xPosition==="end"?"end":"start",r=t==="start"?"end":"start",a=this.yPosition==="above"?"bottom":"top",o=a==="top"?"bottom":"top";return e.withPositions([{originX:t,originY:o,overlayX:t,overlayY:a},{originX:t,originY:a,overlayX:t,overlayY:o},{originX:r,originY:o,overlayX:r,overlayY:a},{originX:r,originY:a,overlayX:r,overlayY:o}])}_getCloseStream(e){let t=["ctrlKey","shiftKey","metaKey"];return hn(e.backdropClick(),e.detachments(),e.keydownEvents().pipe(Ye(r=>r.keyCode===27&&!ut(r)||this.datepickerInput&&ut(r,"altKey")&&r.keyCode===38&&t.every(a=>!ut(r,a)))))}static \u0275fac=function(t){return new(t||n)};static \u0275dir=A({type:n,inputs:{calendarHeaderComponent:"calendarHeaderComponent",startAt:"startAt",startView:"startView",color:"color",touchUi:[2,"touchUi","touchUi",Z],disabled:[2,"disabled","disabled",Z],xPosition:"xPosition",yPosition:"yPosition",restoreFocus:[2,"restoreFocus","restoreFocus",Z],dateClass:"dateClass",panelClass:"panelClass",opened:[2,"opened","opened",Z]},outputs:{yearSelected:"yearSelected",monthSelected:"monthSelected",viewChanged:"viewChanged",openedStream:"opened",closedStream:"closed"},features:[Ue]})}return n})(),jv=(()=>{class n extends Iv{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Xe(n)))(r||n)}})();static \u0275cmp=N({type:n,selectors:[["mat-datepicker"]],exportAs:["matDatepicker"],features:[je([Ov,{provide:Iv,useExisting:n}]),_e],decls:0,vars:0,template:function(t,r){},encapsulation:2,changeDetection:0})}return n})(),vo=class{target;targetElement;value=null;constructor(i,e){this.target=i,this.targetElement=e,this.value=this.target.value}},Sx=(()=>{class n{_elementRef=l(U);_dateAdapter=l(Ht,{optional:!0});_dateFormats=l(Vr,{optional:!0});_isInitialized=!1;get value(){return this._model?this._getValueFromModel(this._model.selection):this._pendingValue}set value(e){this._assignValueProgrammatically(e,!0)}_model;get disabled(){return!!this._disabled||this._parentDisabled()}set disabled(e){let t=e,r=this._elementRef.nativeElement;this._disabled!==t&&(this._disabled=t,this.stateChanges.next(void 0)),t&&this._isInitialized&&r.blur&&r.blur()}_disabled;dateChange=new j;dateInput=new j;stateChanges=new P;_onTouched=()=>{};_validatorOnChange=()=>{};_cvaOnChange=()=>{};_valueChangesSubscription=rt.EMPTY;_localeSubscription=rt.EMPTY;_pendingValue=null;_parseValidator=()=>this._lastValueValid?null:{matDatepickerParse:{text:this._elementRef.nativeElement.value}};_filterValidator=e=>{let t=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e.value));return!t||this._matchesFilter(t)?null:{matDatepickerFilter:!0}};_minValidator=e=>{let t=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e.value)),r=this._getMinDate();return!r||!t||this._dateAdapter.compareDate(r,t)<=0?null:{matDatepickerMin:{min:r,actual:t}}};_maxValidator=e=>{let t=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e.value)),r=this._getMaxDate();return!r||!t||this._dateAdapter.compareDate(r,t)>=0?null:{matDatepickerMax:{max:r,actual:t}}};_getValidators(){return[this._parseValidator,this._minValidator,this._maxValidator,this._filterValidator]}_registerModel(e){this._model=e,this._valueChangesSubscription.unsubscribe(),this._pendingValue&&this._assignValue(this._pendingValue),this._valueChangesSubscription=this._model.selectionChanged.subscribe(t=>{if(this._shouldHandleChangeEvent(t)){let r=this._getValueFromModel(t.selection);this._lastValueValid=this._isValidValue(r),this._cvaOnChange(r),this._onTouched(),this._formatValue(r),this.dateInput.emit(new vo(this,this._elementRef.nativeElement)),this.dateChange.emit(new vo(this,this._elementRef.nativeElement))}})}_lastValueValid=!1;constructor(){this._localeSubscription=this._dateAdapter.localeChanges.subscribe(()=>{this._assignValueProgrammatically(this.value,!0)})}ngAfterViewInit(){this._isInitialized=!0}ngOnChanges(e){Mx(e,this._dateAdapter)&&this.stateChanges.next(void 0)}ngOnDestroy(){this._valueChangesSubscription.unsubscribe(),this._localeSubscription.unsubscribe(),this.stateChanges.complete()}registerOnValidatorChange(e){this._validatorOnChange=e}validate(e){return this._validator?this._validator(e):null}writeValue(e){this._assignValueProgrammatically(e,e!==this.value)}registerOnChange(e){this._cvaOnChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e}_onKeydown(e){let t=["ctrlKey","shiftKey","metaKey"];ut(e,"altKey")&&e.keyCode===40&&t.every(a=>!ut(e,a))&&!this._elementRef.nativeElement.readOnly&&(this._openPopup(),e.preventDefault())}_onInput(e){let t=e.target.value,r=this._lastValueValid,a=this._dateAdapter.parse(t,this._dateFormats.parse.dateInput);this._lastValueValid=this._isValidValue(a),a=this._dateAdapter.getValidDateOrNull(a);let o=!this._dateAdapter.sameDate(a,this.value);!a||o?this._cvaOnChange(a):(t&&!this.value&&this._cvaOnChange(a),r!==this._lastValueValid&&this._validatorOnChange()),o&&(this._assignValue(a),this.dateInput.emit(new vo(this,this._elementRef.nativeElement)))}_onChange(){this.dateChange.emit(new vo(this,this._elementRef.nativeElement))}_onBlur(){this.value&&this._formatValue(this.value),this._onTouched()}_formatValue(e){this._elementRef.nativeElement.value=e!=null?this._dateAdapter.format(e,this._dateFormats.display.dateInput):""}_assignValue(e){this._model?(this._assignValueToModel(e),this._pendingValue=null):this._pendingValue=e}_isValidValue(e){return!e||this._dateAdapter.isValid(e)}_parentDisabled(){return!1}_assignValueProgrammatically(e,t){e=this._dateAdapter.deserialize(e),this._lastValueValid=this._isValidValue(e),e=this._dateAdapter.getValidDateOrNull(e),this._assignValue(e),t&&this._formatValue(e)}_matchesFilter(e){let t=this._getDateFilter();return!t||t(e)}static \u0275fac=function(t){return new(t||n)};static \u0275dir=A({type:n,inputs:{value:"value",disabled:[2,"disabled","disabled",Z]},outputs:{dateChange:"dateChange",dateInput:"dateInput"},features:[Ue]})}return n})();function Mx(n,i){let e=Object.keys(n);for(let t of e){let{previousValue:r,currentValue:a}=n[t];if(i.isDateInstance(r)&&i.isDateInstance(a)){if(!i.sameDate(r,a))return!0}else return!0}return!1}var Ax={provide:ur,useExisting:Kt(()=>cd),multi:!0},Rx={provide:Vi,useExisting:Kt(()=>cd),multi:!0},cd=(()=>{class n extends Sx{_formField=l(fa,{optional:!0});_closedSubscription=rt.EMPTY;_openedSubscription=rt.EMPTY;set matDatepicker(e){e&&(this._datepicker=e,this._ariaOwns.set(e.opened?e.id:null),this._closedSubscription=e.closedStream.subscribe(()=>{this._onTouched(),this._ariaOwns.set(null)}),this._openedSubscription=e.openedStream.subscribe(()=>{this._ariaOwns.set(e.id)}),this._registerModel(e.registerInput(this)))}_datepicker;_ariaOwns=ne(null);get min(){return this._min}set min(e){let t=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e));this._dateAdapter.sameDate(t,this._min)||(this._min=t,this._validatorOnChange())}_min=null;get max(){return this._max}set max(e){let t=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e));this._dateAdapter.sameDate(t,this._max)||(this._max=t,this._validatorOnChange())}_max=null;get dateFilter(){return this._dateFilter}set dateFilter(e){let t=this._matchesFilter(this.value);this._dateFilter=e,this._matchesFilter(this.value)!==t&&this._validatorOnChange()}_dateFilter;_validator=null;constructor(){super(),this._validator=Ie.compose(super._getValidators())}getConnectedOverlayOrigin(){return this._formField?this._formField.getConnectedOverlayOrigin():this._elementRef}getOverlayLabelId(){return this._formField?this._formField.getLabelId():this._elementRef.nativeElement.getAttribute("aria-labelledby")}getThemePalette(){return this._formField?this._formField.color:void 0}getStartValue(){return this.value}ngOnDestroy(){super.ngOnDestroy(),this._closedSubscription.unsubscribe(),this._openedSubscription.unsubscribe()}_openPopup(){this._datepicker&&this._datepicker.open()}_getValueFromModel(e){return e}_assignValueToModel(e){this._model&&this._model.updateSelection(e,this)}_getMinDate(){return this._min}_getMaxDate(){return this._max}_getDateFilter(){return this._dateFilter}_shouldHandleChangeEvent(e){return e.source!==this}static \u0275fac=function(t){return new(t||n)};static \u0275dir=A({type:n,selectors:[["input","matDatepicker",""]],hostAttrs:[1,"mat-datepicker-input"],hostVars:6,hostBindings:function(t,r){t&1&&R("input",function(o){return r._onInput(o)})("change",function(){return r._onChange()})("blur",function(){return r._onBlur()})("keydown",function(o){return r._onKeydown(o)}),t&2&&(xt("disabled",r.disabled),pe("aria-haspopup",r._datepicker?"dialog":null)("aria-owns",r._ariaOwns())("min",r.min?r._dateAdapter.toIso8601(r.min):null)("max",r.max?r._dateAdapter.toIso8601(r.max):null)("data-mat-calendar",r._datepicker?r._datepicker.id:null))},inputs:{matDatepicker:"matDatepicker",min:"min",max:"max",dateFilter:[0,"matDatepickerFilter","dateFilter"]},exportAs:["matDatepickerInput"],features:[je([Ax,Rx,{provide:Mc,useExisting:n}]),_e]})}return n})(),kx=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=A({type:n,selectors:[["","matDatepickerToggleIcon",""]]})}return n})(),ch=(()=>{class n{_intl=l(yo);_changeDetectorRef=l(Ee);_stateChanges=rt.EMPTY;datepicker;tabIndex=null;ariaLabel;get disabled(){return this._disabled===void 0&&this.datepicker?this.datepicker.disabled:!!this._disabled}set disabled(e){this._disabled=e}_disabled;disableRipple=!1;_customIcon;_button;constructor(){let e=l(new _n("tabindex"),{optional:!0}),t=Number(e);this.tabIndex=t||t===0?t:null}ngOnChanges(e){e.datepicker&&this._watchStateChanges()}ngOnDestroy(){this._stateChanges.unsubscribe()}ngAfterContentInit(){this._watchStateChanges()}_open(e){this.datepicker&&!this.disabled&&(this.datepicker.open(),e.stopPropagation())}_watchStateChanges(){let e=this.datepicker?this.datepicker.stateChanges:Q(),t=this.datepicker&&this.datepicker.datepickerInput?this.datepicker.datepickerInput.stateChanges:Q(),r=this.datepicker?hn(this.datepicker.openedStream,this.datepicker.closedStream):Q();this._stateChanges.unsubscribe(),this._stateChanges=hn(this._intl.changes,e,t,r).subscribe(()=>this._changeDetectorRef.markForCheck())}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=N({type:n,selectors:[["mat-datepicker-toggle"]],contentQueries:function(t,r,a){if(t&1&&gn(a,kx,5),t&2){let o;re(o=ae())&&(r._customIcon=o.first)}},viewQuery:function(t,r){if(t&1&&ot(gx,5),t&2){let a;re(a=ae())&&(r._button=a.first)}},hostAttrs:[1,"mat-datepicker-toggle"],hostVars:8,hostBindings:function(t,r){t&1&&R("click",function(o){return r._open(o)}),t&2&&(pe("tabindex",null)("data-mat-calendar",r.datepicker?r.datepicker.id:null),J("mat-datepicker-toggle-active",r.datepicker&&r.datepicker.opened)("mat-accent",r.datepicker&&r.datepicker.color==="accent")("mat-warn",r.datepicker&&r.datepicker.color==="warn"))},inputs:{datepicker:[0,"for","datepicker"],tabIndex:"tabIndex",ariaLabel:[0,"aria-label","ariaLabel"],disabled:[2,"disabled","disabled",Z],disableRipple:"disableRipple"},exportAs:["matDatepickerToggle"],features:[Ue],ngContentSelectors:vx,decls:4,vars:7,consts:[["button",""],["matIconButton","","type","button",3,"tabIndex","disabled","disableRipple"],["viewBox","0 0 24 24","width","24px","height","24px","fill","currentColor","focusable","false","aria-hidden","true",1,"mat-datepicker-toggle-default-icon"],["d","M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"]],template:function(t,r){t&1&&(Qe(_x),d(0,"button",1,0),ke(2,bx,2,0,":svg:svg",2),ve(3),u()),t&2&&(_("tabIndex",r.disabled?-1:r.tabIndex)("disabled",r.disabled)("disableRipple",r.disableRipple),pe("aria-haspopup",r.datepicker?"dialog":null)("aria-label",r.ariaLabel||r._intl.openCalendarLabel)("aria-expanded",r.datepicker?r.datepicker.opened:null),p(2),Te(r._customIcon?-1:2))},dependencies:[Fn],styles:[`.mat-datepicker-toggle {
  pointer-events: auto;
  color: var(--mat-datepicker-toggle-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-datepicker-toggle button {
  color: inherit;
}

.mat-datepicker-toggle-active {
  color: var(--mat-datepicker-toggle-active-state-icon-color, var(--mat-sys-primary));
}

@media (forced-colors: active) {
  .mat-datepicker-toggle-default-icon {
    color: CanvasText;
  }
}
`],encapsulation:2,changeDetection:0})}return n})();var Co=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=q({type:n});static \u0275inj=Y({providers:[yo],imports:[ft,ti,Ds,Qn,Bv,ch,Vv,Ve,_a]})}return n})();var Ix=["mat-internal-form-field",""],Fx=["*"],zv=(()=>{class n{labelPosition="after";static \u0275fac=function(t){return new(t||n)};static \u0275cmp=N({type:n,selectors:[["div","mat-internal-form-field",""]],hostAttrs:[1,"mdc-form-field","mat-internal-form-field"],hostVars:2,hostBindings:function(t,r){t&2&&J("mdc-form-field--align-end",r.labelPosition==="before")},inputs:{labelPosition:"labelPosition"},attrs:Ix,ngContentSelectors:Fx,decls:1,vars:0,template:function(t,r){t&1&&(Qe(),ve(0))},styles:[`.mat-internal-form-field {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
}
.mat-internal-form-field > label {
  margin-left: 0;
  margin-right: auto;
  padding-left: 4px;
  padding-right: 0;
  order: 0;
}
[dir=rtl] .mat-internal-form-field > label {
  margin-left: auto;
  margin-right: 0;
  padding-left: 0;
  padding-right: 4px;
}

.mdc-form-field--align-end > label {
  margin-left: auto;
  margin-right: 0;
  padding-left: 0;
  padding-right: 4px;
  order: -1;
}
[dir=rtl] .mdc-form-field--align-end .mdc-form-field--align-end label {
  margin-left: 0;
  margin-right: auto;
  padding-left: 4px;
  padding-right: 0;
}
`],encapsulation:2,changeDetection:0})}return n})();var Ox=/^\d{4}-\d{2}-\d{2}(?:T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|(?:(?:\+|-)\d{2}:\d{2}))?)?$/,Px=/^(\d?\d)[:.](\d?\d)(?:[:.](\d?\d))?\s*(AM|PM)?$/i;function dh(n,i){let e=Array(n);for(let t=0;t<n;t++)e[t]=i(t);return e}var Nx=(()=>{class n extends Ht{_matDateLocale=l(eh,{optional:!0});constructor(){super();let e=l(eh,{optional:!0});e!==void 0&&(this._matDateLocale=e),super.setLocale(this._matDateLocale)}getYear(e){return e.getFullYear()}getMonth(e){return e.getMonth()}getDate(e){return e.getDate()}getDayOfWeek(e){return e.getDay()}getMonthNames(e){let t=new Intl.DateTimeFormat(this.locale,{month:e,timeZone:"utc"});return dh(12,r=>this._format(t,new Date(2017,r,1)))}getDateNames(){let e=new Intl.DateTimeFormat(this.locale,{day:"numeric",timeZone:"utc"});return dh(31,t=>this._format(e,new Date(2017,0,t+1)))}getDayOfWeekNames(e){let t=new Intl.DateTimeFormat(this.locale,{weekday:e,timeZone:"utc"});return dh(7,r=>this._format(t,new Date(2017,0,r+1)))}getYearName(e){let t=new Intl.DateTimeFormat(this.locale,{year:"numeric",timeZone:"utc"});return this._format(t,e)}getFirstDayOfWeek(){if(typeof Intl<"u"&&Intl.Locale){let e=new Intl.Locale(this.locale),t=(e.getWeekInfo?.()||e.weekInfo)?.firstDay??0;return t===7?0:t}return 0}getNumDaysInMonth(e){return this.getDate(this._createDateWithOverflow(this.getYear(e),this.getMonth(e)+1,0))}clone(e){return new Date(e.getTime())}createDate(e,t,r){let a=this._createDateWithOverflow(e,t,r);return a.getMonth()!=t,a}today(){return new Date}parse(e,t){return typeof e=="number"?new Date(e):e?new Date(Date.parse(e)):null}format(e,t){if(!this.isValid(e))throw Error("NativeDateAdapter: Cannot format invalid date.");let r=new Intl.DateTimeFormat(this.locale,He(x({},t),{timeZone:"utc"}));return this._format(r,e)}addCalendarYears(e,t){return this.addCalendarMonths(e,t*12)}addCalendarMonths(e,t){let r=this._createDateWithOverflow(this.getYear(e),this.getMonth(e)+t,this.getDate(e));return this.getMonth(r)!=((this.getMonth(e)+t)%12+12)%12&&(r=this._createDateWithOverflow(this.getYear(r),this.getMonth(r),0)),r}addCalendarDays(e,t){return this._createDateWithOverflow(this.getYear(e),this.getMonth(e),this.getDate(e)+t)}toIso8601(e){return[e.getUTCFullYear(),this._2digit(e.getUTCMonth()+1),this._2digit(e.getUTCDate())].join("-")}deserialize(e){if(typeof e=="string"){if(!e)return null;if(Ox.test(e)){let t=new Date(e);if(this.isValid(t))return t}}return super.deserialize(e)}isDateInstance(e){return e instanceof Date}isValid(e){return!isNaN(e.getTime())}invalid(){return new Date(NaN)}setTime(e,t,r,a){let o=this.clone(e);return o.setHours(t,r,a,0),o}getHours(e){return e.getHours()}getMinutes(e){return e.getMinutes()}getSeconds(e){return e.getSeconds()}parseTime(e,t){if(typeof e!="string")return e instanceof Date?new Date(e.getTime()):null;let r=e.trim();if(r.length===0)return null;let a=this._parseTimeString(r);if(a===null){let o=r.replace(/[^0-9:(AM|PM)]/gi,"").trim();o.length>0&&(a=this._parseTimeString(o))}return a||this.invalid()}addSeconds(e,t){return new Date(e.getTime()+t*1e3)}_createDateWithOverflow(e,t,r){let a=new Date;return a.setFullYear(e,t,r),a.setHours(0,0,0,0),a}_2digit(e){return("00"+e).slice(-2)}_format(e,t){let r=new Date;return r.setUTCFullYear(t.getFullYear(),t.getMonth(),t.getDate()),r.setUTCHours(t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()),e.format(r)}_parseTimeString(e){let t=e.toUpperCase().match(Px);if(t){let r=parseInt(t[1]),a=parseInt(t[2]),o=t[3]==null?void 0:parseInt(t[3]),s=t[4];if(r===12?r=s==="AM"?0:r:s==="PM"&&(r+=12),uh(r,0,23)&&uh(a,0,59)&&(o==null||uh(o,0,59)))return this.setTime(this.today(),r,a,o||0)}return null}static \u0275fac=function(t){return new(t||n)};static \u0275prov=w({token:n,factory:n.\u0275fac})}return n})();function uh(n,i,e){return!isNaN(n)&&n>=i&&n<=e}var Lx={parse:{dateInput:null,timeInput:null},display:{dateInput:{year:"numeric",month:"numeric",day:"numeric"},timeInput:{hour:"numeric",minute:"numeric"},monthYearLabel:{year:"numeric",month:"short"},dateA11yLabel:{year:"numeric",month:"long",day:"numeric"},monthYearA11yLabel:{year:"numeric",month:"long"},timeOptionLabel:{hour:"numeric",minute:"numeric"}}};var Do=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=q({type:n});static \u0275inj=Y({providers:[Vx()]})}return n})();function Vx(n=Lx){return[{provide:Ht,useClass:Nx},{provide:Vr,useValue:n}]}var Bx=["switch"],jx=["*"];function zx(n,i){n&1&&(d(0,"span",11),fn(),d(1,"svg",13),T(2,"path",14),u(),d(3,"svg",15),T(4,"path",16),u()())}var Ux=new S("mat-slide-toggle-default-options",{providedIn:"root",factory:()=>({disableToggleValue:!1,hideIcon:!1,disabledInteractive:!1})}),dd=class{source;checked;constructor(i,e){this.source=i,this.checked=e}},mh=(()=>{class n{_elementRef=l(U);_focusMonitor=l(bi);_changeDetectorRef=l(Ee);defaults=l(Ux);_onChange=e=>{};_onTouched=()=>{};_validatorOnChange=()=>{};_uniqueId;_checked=!1;_createChangeEvent(e){return new dd(this,e)}_labelId;get buttonId(){return`${this.id||this._uniqueId}-button`}_switchElement;focus(){this._switchElement.nativeElement.focus()}_noopAnimations=st();_focused=!1;name=null;id;labelPosition="after";ariaLabel=null;ariaLabelledby=null;ariaDescribedby;required=!1;color;disabled=!1;disableRipple=!1;tabIndex=0;get checked(){return this._checked}set checked(e){this._checked=e,this._changeDetectorRef.markForCheck()}hideIcon;disabledInteractive;change=new j;toggleChange=new j;get inputId(){return`${this.id||this._uniqueId}-input`}constructor(){l(dt).load(fr);let e=l(new _n("tabindex"),{optional:!0}),t=this.defaults;this.tabIndex=e==null?0:parseInt(e)||0,this.color=t.color||"accent",this.id=this._uniqueId=l(et).getId("mat-mdc-slide-toggle-"),this.hideIcon=t.hideIcon??!1,this.disabledInteractive=t.disabledInteractive??!1,this._labelId=this._uniqueId+"-label"}ngAfterContentInit(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{e==="keyboard"||e==="program"?(this._focused=!0,this._changeDetectorRef.markForCheck()):e||Promise.resolve().then(()=>{this._focused=!1,this._onTouched(),this._changeDetectorRef.markForCheck()})})}ngOnChanges(e){e.required&&this._validatorOnChange()}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef)}writeValue(e){this.checked=!!e}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}validate(e){return this.required&&e.value!==!0?{required:!0}:null}registerOnValidatorChange(e){this._validatorOnChange=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck()}toggle(){this.checked=!this.checked,this._onChange(this.checked)}_emitChangeEvent(){this._onChange(this.checked),this.change.emit(this._createChangeEvent(this.checked))}_handleClick(){this.disabled||(this.toggleChange.emit(),this.defaults.disableToggleValue||(this.checked=!this.checked,this._onChange(this.checked),this.change.emit(new dd(this,this.checked))))}_getAriaLabelledBy(){return this.ariaLabelledby?this.ariaLabelledby:this.ariaLabel?null:this._labelId}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=N({type:n,selectors:[["mat-slide-toggle"]],viewQuery:function(t,r){if(t&1&&ot(Bx,5),t&2){let a;re(a=ae())&&(r._switchElement=a.first)}},hostAttrs:[1,"mat-mdc-slide-toggle"],hostVars:13,hostBindings:function(t,r){t&2&&(xt("id",r.id),pe("tabindex",null)("aria-label",null)("name",null)("aria-labelledby",null),It(r.color?"mat-"+r.color:""),J("mat-mdc-slide-toggle-focused",r._focused)("mat-mdc-slide-toggle-checked",r.checked)("_mat-animation-noopable",r._noopAnimations))},inputs:{name:"name",id:"id",labelPosition:"labelPosition",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],required:[2,"required","required",Z],color:"color",disabled:[2,"disabled","disabled",Z],disableRipple:[2,"disableRipple","disableRipple",Z],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:vn(e)],checked:[2,"checked","checked",Z],hideIcon:[2,"hideIcon","hideIcon",Z],disabledInteractive:[2,"disabledInteractive","disabledInteractive",Z]},outputs:{change:"change",toggleChange:"toggleChange"},exportAs:["matSlideToggle"],features:[je([{provide:ur,useExisting:Kt(()=>n),multi:!0},{provide:Vi,useExisting:n,multi:!0}]),Ue],ngContentSelectors:jx,decls:14,vars:27,consts:[["switch",""],["mat-internal-form-field","",3,"labelPosition"],["role","switch","type","button",1,"mdc-switch",3,"click","tabIndex","disabled"],[1,"mat-mdc-slide-toggle-touch-target"],[1,"mdc-switch__track"],[1,"mdc-switch__handle-track"],[1,"mdc-switch__handle"],[1,"mdc-switch__shadow"],[1,"mdc-elevation-overlay"],[1,"mdc-switch__ripple"],["mat-ripple","",1,"mat-mdc-slide-toggle-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mdc-switch__icons"],[1,"mdc-label",3,"click","for"],["viewBox","0 0 24 24","aria-hidden","true",1,"mdc-switch__icon","mdc-switch__icon--on"],["d","M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z"],["viewBox","0 0 24 24","aria-hidden","true",1,"mdc-switch__icon","mdc-switch__icon--off"],["d","M20 13H4v-2h16v2z"]],template:function(t,r){if(t&1&&(Qe(),d(0,"div",1)(1,"button",2,0),R("click",function(){return r._handleClick()}),T(3,"div",3)(4,"span",4),d(5,"span",5)(6,"span",6)(7,"span",7),T(8,"span",8),u(),d(9,"span",9),T(10,"span",10),u(),ke(11,zx,5,0,"span",11),u()()(),d(12,"label",12),R("click",function(o){return o.stopPropagation()}),ve(13),u()()),t&2){let a=$n(2);_("labelPosition",r.labelPosition),p(),J("mdc-switch--selected",r.checked)("mdc-switch--unselected",!r.checked)("mdc-switch--checked",r.checked)("mdc-switch--disabled",r.disabled)("mat-mdc-slide-toggle-disabled-interactive",r.disabledInteractive),_("tabIndex",r.disabled&&!r.disabledInteractive?-1:r.tabIndex)("disabled",r.disabled&&!r.disabledInteractive),pe("id",r.buttonId)("name",r.name)("aria-label",r.ariaLabel)("aria-labelledby",r._getAriaLabelledBy())("aria-describedby",r.ariaDescribedby)("aria-required",r.required||null)("aria-checked",r.checked)("aria-disabled",r.disabled&&r.disabledInteractive?"true":null),p(9),_("matRippleTrigger",a)("matRippleDisabled",r.disableRipple||r.disabled)("matRippleCentered",!0),p(),Te(r.hideIcon?-1:11),p(),_("for",r.buttonId),pe("id",r._labelId)}},dependencies:[Rc,zv],styles:[`.mdc-switch {
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
  display: inline-flex;
  flex-shrink: 0;
  margin: 0;
  outline: none;
  overflow: visible;
  padding: 0;
  position: relative;
  width: var(--mat-slide-toggle-track-width, 52px);
}
.mdc-switch.mdc-switch--disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-switch.mat-mdc-slide-toggle-disabled-interactive {
  pointer-events: auto;
}

.mdc-switch__track {
  overflow: hidden;
  position: relative;
  width: 100%;
  height: var(--mat-slide-toggle-track-height, 32px);
  border-radius: var(--mat-slide-toggle-track-shape, var(--mat-sys-corner-full));
}
.mdc-switch--disabled.mdc-switch .mdc-switch__track {
  opacity: var(--mat-slide-toggle-disabled-track-opacity, 0.12);
}
.mdc-switch__track::before, .mdc-switch__track::after {
  border: 1px solid transparent;
  border-radius: inherit;
  box-sizing: border-box;
  content: "";
  height: 100%;
  left: 0;
  position: absolute;
  width: 100%;
  border-width: var(--mat-slide-toggle-track-outline-width, 2px);
  border-color: var(--mat-slide-toggle-track-outline-color, var(--mat-sys-outline));
}
.mdc-switch--selected .mdc-switch__track::before, .mdc-switch--selected .mdc-switch__track::after {
  border-width: var(--mat-slide-toggle-selected-track-outline-width, 2px);
  border-color: var(--mat-slide-toggle-selected-track-outline-color, transparent);
}
.mdc-switch--disabled .mdc-switch__track::before, .mdc-switch--disabled .mdc-switch__track::after {
  border-width: var(--mat-slide-toggle-disabled-unselected-track-outline-width, 2px);
  border-color: var(--mat-slide-toggle-disabled-unselected-track-outline-color, var(--mat-sys-on-surface));
}
@media (forced-colors: active) {
  .mdc-switch__track {
    border-color: currentColor;
  }
}
.mdc-switch__track::before {
  transition: transform 75ms 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: translateX(0);
  background: var(--mat-slide-toggle-unselected-track-color, var(--mat-sys-surface-variant));
}
.mdc-switch--selected .mdc-switch__track::before {
  transition: transform 75ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  transform: translateX(100%);
}
[dir=rtl] .mdc-switch--selected .mdc-switch--selected .mdc-switch__track::before {
  transform: translateX(-100%);
}
.mdc-switch--selected .mdc-switch__track::before {
  opacity: var(--mat-slide-toggle-hidden-track-opacity, 0);
  transition: var(--mat-slide-toggle-hidden-track-transition, opacity 75ms);
}
.mdc-switch--unselected .mdc-switch__track::before {
  opacity: var(--mat-slide-toggle-visible-track-opacity, 1);
  transition: var(--mat-slide-toggle-visible-track-transition, opacity 75ms);
}
.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::before {
  background: var(--mat-slide-toggle-unselected-hover-track-color, var(--mat-sys-surface-variant));
}
.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::before {
  background: var(--mat-slide-toggle-unselected-focus-track-color, var(--mat-sys-surface-variant));
}
.mdc-switch:enabled:active .mdc-switch__track::before {
  background: var(--mat-slide-toggle-unselected-pressed-track-color, var(--mat-sys-surface-variant));
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__track::before, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__track::before, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__track::before, .mdc-switch.mdc-switch--disabled .mdc-switch__track::before {
  background: var(--mat-slide-toggle-disabled-unselected-track-color, var(--mat-sys-surface-variant));
}
.mdc-switch__track::after {
  transform: translateX(-100%);
  background: var(--mat-slide-toggle-selected-track-color, var(--mat-sys-primary));
}
[dir=rtl] .mdc-switch__track::after {
  transform: translateX(100%);
}
.mdc-switch--selected .mdc-switch__track::after {
  transform: translateX(0);
}
.mdc-switch--selected .mdc-switch__track::after {
  opacity: var(--mat-slide-toggle-visible-track-opacity, 1);
  transition: var(--mat-slide-toggle-visible-track-transition, opacity 75ms);
}
.mdc-switch--unselected .mdc-switch__track::after {
  opacity: var(--mat-slide-toggle-hidden-track-opacity, 0);
  transition: var(--mat-slide-toggle-hidden-track-transition, opacity 75ms);
}
.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::after {
  background: var(--mat-slide-toggle-selected-hover-track-color, var(--mat-sys-primary));
}
.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::after {
  background: var(--mat-slide-toggle-selected-focus-track-color, var(--mat-sys-primary));
}
.mdc-switch:enabled:active .mdc-switch__track::after {
  background: var(--mat-slide-toggle-selected-pressed-track-color, var(--mat-sys-primary));
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__track::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__track::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__track::after, .mdc-switch.mdc-switch--disabled .mdc-switch__track::after {
  background: var(--mat-slide-toggle-disabled-selected-track-color, var(--mat-sys-on-surface));
}

.mdc-switch__handle-track {
  height: 100%;
  pointer-events: none;
  position: absolute;
  top: 0;
  transition: transform 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  left: 0;
  right: auto;
  transform: translateX(0);
  width: calc(100% - var(--mat-slide-toggle-handle-width));
}
[dir=rtl] .mdc-switch__handle-track {
  left: auto;
  right: 0;
}
.mdc-switch--selected .mdc-switch__handle-track {
  transform: translateX(100%);
}
[dir=rtl] .mdc-switch--selected .mdc-switch__handle-track {
  transform: translateX(-100%);
}

.mdc-switch__handle {
  display: flex;
  pointer-events: auto;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  right: auto;
  transition: width 75ms cubic-bezier(0.4, 0, 0.2, 1), height 75ms cubic-bezier(0.4, 0, 0.2, 1), margin 75ms cubic-bezier(0.4, 0, 0.2, 1);
  width: var(--mat-slide-toggle-handle-width);
  height: var(--mat-slide-toggle-handle-height);
  border-radius: var(--mat-slide-toggle-handle-shape, var(--mat-sys-corner-full));
}
[dir=rtl] .mdc-switch__handle {
  left: auto;
  right: 0;
}
.mat-mdc-slide-toggle .mdc-switch--unselected .mdc-switch__handle {
  width: var(--mat-slide-toggle-unselected-handle-size, 16px);
  height: var(--mat-slide-toggle-unselected-handle-size, 16px);
  margin: var(--mat-slide-toggle-unselected-handle-horizontal-margin, 0 8px);
}
.mat-mdc-slide-toggle .mdc-switch--unselected .mdc-switch__handle:has(.mdc-switch__icons) {
  margin: var(--mat-slide-toggle-unselected-with-icon-handle-horizontal-margin, 0 4px);
}
.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__handle {
  width: var(--mat-slide-toggle-selected-handle-size, 24px);
  height: var(--mat-slide-toggle-selected-handle-size, 24px);
  margin: var(--mat-slide-toggle-selected-handle-horizontal-margin, 0 24px);
}
.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__handle:has(.mdc-switch__icons) {
  margin: var(--mat-slide-toggle-selected-with-icon-handle-horizontal-margin, 0 24px);
}
.mat-mdc-slide-toggle .mdc-switch__handle:has(.mdc-switch__icons) {
  width: var(--mat-slide-toggle-with-icon-handle-size, 24px);
  height: var(--mat-slide-toggle-with-icon-handle-size, 24px);
}
.mat-mdc-slide-toggle .mdc-switch:active:not(.mdc-switch--disabled) .mdc-switch__handle {
  width: var(--mat-slide-toggle-pressed-handle-size, 28px);
  height: var(--mat-slide-toggle-pressed-handle-size, 28px);
}
.mat-mdc-slide-toggle .mdc-switch--selected:active:not(.mdc-switch--disabled) .mdc-switch__handle {
  margin: var(--mat-slide-toggle-selected-pressed-handle-horizontal-margin, 0 22px);
}
.mat-mdc-slide-toggle .mdc-switch--unselected:active:not(.mdc-switch--disabled) .mdc-switch__handle {
  margin: var(--mat-slide-toggle-unselected-pressed-handle-horizontal-margin, 0 2px);
}
.mdc-switch--disabled.mdc-switch--selected .mdc-switch__handle::after {
  opacity: var(--mat-slide-toggle-disabled-selected-handle-opacity, 1);
}
.mdc-switch--disabled.mdc-switch--unselected .mdc-switch__handle::after {
  opacity: var(--mat-slide-toggle-disabled-unselected-handle-opacity, 0.38);
}
.mdc-switch__handle::before, .mdc-switch__handle::after {
  border: 1px solid transparent;
  border-radius: inherit;
  box-sizing: border-box;
  content: "";
  width: 100%;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  transition: background-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1), border-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  z-index: -1;
}
@media (forced-colors: active) {
  .mdc-switch__handle::before, .mdc-switch__handle::after {
    border-color: currentColor;
  }
}
.mdc-switch--selected:enabled .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-selected-handle-color, var(--mat-sys-on-primary));
}
.mdc-switch--selected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-selected-hover-handle-color, var(--mat-sys-primary-container));
}
.mdc-switch--selected:enabled:focus:not(:active) .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-selected-focus-handle-color, var(--mat-sys-primary-container));
}
.mdc-switch--selected:enabled:active .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-selected-pressed-handle-color, var(--mat-sys-primary-container));
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:hover:not(:focus):not(:active) .mdc-switch__handle::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:focus:not(:active) .mdc-switch__handle::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:active .mdc-switch__handle::after, .mdc-switch--selected.mdc-switch--disabled .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-disabled-selected-handle-color, var(--mat-sys-surface));
}
.mdc-switch--unselected:enabled .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-unselected-handle-color, var(--mat-sys-outline));
}
.mdc-switch--unselected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-unselected-hover-handle-color, var(--mat-sys-on-surface-variant));
}
.mdc-switch--unselected:enabled:focus:not(:active) .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-unselected-focus-handle-color, var(--mat-sys-on-surface-variant));
}
.mdc-switch--unselected:enabled:active .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-unselected-pressed-handle-color, var(--mat-sys-on-surface-variant));
}
.mdc-switch--unselected.mdc-switch--disabled .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-disabled-unselected-handle-color, var(--mat-sys-on-surface));
}
.mdc-switch__handle::before {
  background: var(--mat-slide-toggle-handle-surface-color);
}

.mdc-switch__shadow {
  border-radius: inherit;
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
}
.mdc-switch:enabled .mdc-switch__shadow {
  box-shadow: var(--mat-slide-toggle-handle-elevation-shadow);
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__shadow, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__shadow, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__shadow, .mdc-switch.mdc-switch--disabled .mdc-switch__shadow {
  box-shadow: var(--mat-slide-toggle-disabled-handle-elevation-shadow);
}

.mdc-switch__ripple {
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
  width: var(--mat-slide-toggle-state-layer-size, 40px);
  height: var(--mat-slide-toggle-state-layer-size, 40px);
}
.mdc-switch__ripple::after {
  content: "";
  opacity: 0;
}
.mdc-switch--disabled .mdc-switch__ripple::after {
  display: none;
}
.mat-mdc-slide-toggle-disabled-interactive .mdc-switch__ripple::after {
  display: block;
}
.mdc-switch:hover .mdc-switch__ripple::after {
  transition: 75ms opacity cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:focus .mdc-switch__ripple::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:active .mdc-switch__ripple::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:hover:not(:focus) .mdc-switch__ripple::after, .mdc-switch--unselected:enabled:hover:not(:focus) .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-unselected-hover-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-slide-toggle-unselected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mdc-switch--unselected:enabled:focus .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-unselected-focus-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-slide-toggle-unselected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mdc-switch--unselected:enabled:active .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-unselected-pressed-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-slide-toggle-unselected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
  transition: opacity 75ms linear;
}
.mdc-switch--selected:enabled:hover:not(:focus) .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-selected-hover-state-layer-color, var(--mat-sys-primary));
  opacity: var(--mat-slide-toggle-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mdc-switch--selected:enabled:focus .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-selected-focus-state-layer-color, var(--mat-sys-primary));
  opacity: var(--mat-slide-toggle-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mdc-switch--selected:enabled:active .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-selected-pressed-state-layer-color, var(--mat-sys-primary));
  opacity: var(--mat-slide-toggle-selected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
  transition: opacity 75ms linear;
}

.mdc-switch__icons {
  position: relative;
  height: 100%;
  width: 100%;
  z-index: 1;
  transform: translateZ(0);
}
.mdc-switch--disabled.mdc-switch--unselected .mdc-switch__icons {
  opacity: var(--mat-slide-toggle-disabled-unselected-icon-opacity, 0.38);
}
.mdc-switch--disabled.mdc-switch--selected .mdc-switch__icons {
  opacity: var(--mat-slide-toggle-disabled-selected-icon-opacity, 0.38);
}

.mdc-switch__icon {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  opacity: 0;
  transition: opacity 30ms 0ms cubic-bezier(0.4, 0, 1, 1);
}
.mdc-switch--unselected .mdc-switch__icon {
  width: var(--mat-slide-toggle-unselected-icon-size, 16px);
  height: var(--mat-slide-toggle-unselected-icon-size, 16px);
  fill: var(--mat-slide-toggle-unselected-icon-color, var(--mat-sys-surface-variant));
}
.mdc-switch--unselected.mdc-switch--disabled .mdc-switch__icon {
  fill: var(--mat-slide-toggle-disabled-unselected-icon-color, var(--mat-sys-surface-variant));
}
.mdc-switch--selected .mdc-switch__icon {
  width: var(--mat-slide-toggle-selected-icon-size, 16px);
  height: var(--mat-slide-toggle-selected-icon-size, 16px);
  fill: var(--mat-slide-toggle-selected-icon-color, var(--mat-sys-on-primary-container));
}
.mdc-switch--selected.mdc-switch--disabled .mdc-switch__icon {
  fill: var(--mat-slide-toggle-disabled-selected-icon-color, var(--mat-sys-on-surface));
}

.mdc-switch--selected .mdc-switch__icon--on,
.mdc-switch--unselected .mdc-switch__icon--off {
  opacity: 1;
  transition: opacity 45ms 30ms cubic-bezier(0, 0, 0.2, 1);
}

.mat-mdc-slide-toggle {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  -webkit-tap-highlight-color: transparent;
  outline: 0;
}
.mat-mdc-slide-toggle .mat-mdc-slide-toggle-ripple,
.mat-mdc-slide-toggle .mdc-switch__ripple::after {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
}
.mat-mdc-slide-toggle .mat-mdc-slide-toggle-ripple:not(:empty),
.mat-mdc-slide-toggle .mdc-switch__ripple::after:not(:empty) {
  transform: translateZ(0);
}
.mat-mdc-slide-toggle.mat-mdc-slide-toggle-focused .mat-focus-indicator::before {
  content: "";
}
.mat-mdc-slide-toggle .mat-internal-form-field {
  color: var(--mat-slide-toggle-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-slide-toggle-label-text-font, var(--mat-sys-body-medium-font));
  line-height: var(--mat-slide-toggle-label-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-slide-toggle-label-text-size, var(--mat-sys-body-medium-size));
  letter-spacing: var(--mat-slide-toggle-label-text-tracking, var(--mat-sys-body-medium-tracking));
  font-weight: var(--mat-slide-toggle-label-text-weight, var(--mat-sys-body-medium-weight));
}
.mat-mdc-slide-toggle .mat-ripple-element {
  opacity: 0.12;
}
.mat-mdc-slide-toggle .mat-focus-indicator::before {
  border-radius: 50%;
}
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle-track,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__icon,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle::before,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle::after,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__track::before,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__track::after {
  transition: none;
}
.mat-mdc-slide-toggle .mdc-switch:enabled + .mdc-label {
  cursor: pointer;
}
.mat-mdc-slide-toggle .mdc-switch--disabled + label {
  color: var(--mat-slide-toggle-disabled-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-slide-toggle label:empty {
  display: none;
}

.mat-mdc-slide-toggle-touch-target {
  position: absolute;
  top: 50%;
  left: 50%;
  height: var(--mat-slide-toggle-touch-target-size, 48px);
  width: 100%;
  transform: translate(-50%, -50%);
  display: var(--mat-slide-toggle-touch-target-display, block);
}
[dir=rtl] .mat-mdc-slide-toggle-touch-target {
  left: auto;
  right: 50%;
  transform: translate(50%, -50%);
}
`],encapsulation:2,changeDetection:0})}return n})(),Uv=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=q({type:n});static \u0275inj=Y({imports:[mh,Ve]})}return n})();var Hv=["AUDIENCIA","REDACCI\xD3N","INVESTIGACI\xD3N","CONSULTA_CLIENTE","TRASLADO","ADMINISTRATIVO","OTRO"];var wo=class n{constructor(i){this.http=i}apiUrl=xi.apiUrl;getRegistros(){return this.http.get(`${this.apiUrl}/registros-tiempo`)}getRegistrosPorCaso(i){return this.http.get(`${this.apiUrl}/registros-tiempo/caso/${i}`)}getRegistroActivo(){return this.http.get(`${this.apiUrl}/registros-tiempo/activo`)}iniciarRegistro(i){return this.http.post(`${this.apiUrl}/registros-tiempo/iniciar`,i)}pausarRegistro(i){return this.http.patch(`${this.apiUrl}/registros-tiempo/${i}/pausar`,{})}reanudarRegistro(i){return this.http.patch(`${this.apiUrl}/registros-tiempo/${i}/reanudar`,{})}finalizarRegistro(i){return this.http.patch(`${this.apiUrl}/registros-tiempo/${i}/finalizar`,{})}crearRegistroCompleto(i){return this.http.post(`${this.apiUrl}/registros-tiempo`,i)}deleteRegistro(i){return this.http.delete(`${this.apiUrl}/registros-tiempo/${i}`)}getTotalHorasPorCaso(i){return this.http.get(`${this.apiUrl}/registros-tiempo/caso/${i}/total-horas`)}crearTimerPausado(i){return this.http.post(`${this.apiUrl}/registros-tiempo/pausado`,i)}listarTimersPausados(){return this.http.get(`${this.apiUrl}/registros-tiempo/pausados`)}obtenerTimerCorriendo(){return this.http.get(`${this.apiUrl}/registros-tiempo/corriendo`)}pausarTimerActual(){return this.http.post(`${this.apiUrl}/registros-tiempo/pausar-actual`,{})}reanudarTimerEspecifico(i){return this.http.post(`${this.apiUrl}/registros-tiempo/${i}/reanudar-especifico`,{})}casoHasTimerActivo(i){return this.http.get(`${this.apiUrl}/registros-tiempo/caso/${i}/tiene-activo`)}casoEstaFinalizado(i){return this.http.get(`${this.apiUrl}/registros-tiempo/caso/${i}/finalizado`)}getCasosConTimerActivo(){return this.http.get(`${this.apiUrl}/registros-tiempo/casos-activos`)}static \u0275fac=function(e){return new(e||n)(G(Xt))};static \u0275prov=w({token:n,factory:n.\u0275fac,providedIn:"root"})};var $x=n=>({"paused-card":n}),Gx=(n,i)=>({running:n,paused:i});function Wx(n,i){if(n&1){let e=De();d(0,"button",8),R("click",function(){ee(e);let r=D();return te(r.iniciarTimer())}),d(1,"mat-icon"),h(2,"play_arrow"),u(),h(3," Iniciar Timer "),u()}}function Yx(n,i){if(n&1){let e=De();d(0,"button",3),R("click",function(){ee(e);let r=D(2);return te(r.pausarTimerActual())}),d(1,"mat-icon"),h(2,"pause"),u(),h(3," Pausar "),u()}}function qx(n,i){if(n&1){let e=De();d(0,"button",8),R("click",function(){ee(e);let r=D(2);return te(r.reanudarTimerActivo())}),d(1,"mat-icon"),h(2,"play_arrow"),u(),h(3," Reanudar "),u()}}function Zx(n,i){if(n&1){let e=De();Pe(0),L(1,Yx,4,0,"button",9)(2,qx,4,0,"button",1),d(3,"button",10),R("click",function(){ee(e);let r=D();return te(r.finalizarTimer())}),d(4,"mat-icon"),h(5,"stop"),u(),h(6," Finalizar "),u(),Ne()}if(n&2){let e=D();p(),_("ngIf",e.registroActivo.estadoTimer==="CORRIENDO"),p(),_("ngIf",e.registroActivo.estadoTimer==="PAUSADO")}}function Kx(n,i){if(n&1&&(d(0,"span"),h(1," | "),d(2,"strong"),h(3,"Transcurrido:"),u(),h(4),u()),n&2){let e=D(2);p(4),oe(" ",e.tiempoTranscurrido," ")}}function Xx(n,i){if(n&1&&(d(0,"span"),h(1," | "),d(2,"strong"),h(3,"Acumulado:"),u(),h(4),u()),n&2){let e=D(2);p(4),oe(" ",e.formatHoras(e.registroActivo.horasAcumuladas)," ")}}function Qx(n,i){if(n&1&&(d(0,"div",11)(1,"mat-card",12)(2,"mat-card-content")(3,"div",13)(4,"div",14)(5,"mat-icon",12),h(6),u(),d(7,"span",15),h(8),u()(),d(9,"div",16)(10,"strong"),h(11,"Caso:"),u(),h(12),d(13,"strong"),h(14,"Categor\xEDa:"),u(),h(15),d(16,"strong"),h(17,"Inicio:"),u(),h(18),L(19,Kx,5,1,"span",2)(20,Xx,5,1,"span",2),u()()()()()),n&2){let e=D();p(),_("ngClass",rf(9,$x,e.registroActivo.estadoTimer==="PAUSADO")),p(4),_("ngClass",af(11,Gx,e.registroActivo.estadoTimer==="CORRIENDO",e.registroActivo.estadoTimer==="PAUSADO")),p(),oe(" ",e.registroActivo.estadoTimer==="CORRIENDO"?"play_circle":"pause_circle"," "),p(2),oe(" ",e.registroActivo.estadoTimer==="CORRIENDO"?"Timer corriendo":"Timer pausado"," "),p(4),oe(" ",e.getNombreCaso(e.registroActivo.casoId)," | "),p(3),oe(" ",e.registroActivo.categoria," | "),p(3),oe(" ",e.formatFecha(e.registroActivo.fechaHoraInicioOriginal||e.registroActivo.fechaHoraInicio)," "),p(),_("ngIf",e.registroActivo.estadoTimer==="CORRIENDO"),p(),_("ngIf",e.registroActivo.estadoTimer==="PAUSADO"&&e.registroActivo.horasAcumuladas&&e.registroActivo.horasAcumuladas>0)}}function Jx(n,i){n&1&&(d(0,"div",17),T(1,"mat-spinner",18),u())}function eS(n,i){n&1&&(d(0,"th",31),h(1," Caso "),u())}function tS(n,i){if(n&1&&(d(0,"td",32),h(1),T(2,"tr"),u()),n&2){let e=i.$implicit,t=D(2);p(),oe(" ",t.getNombreCaso(e.casoId)," ")}}function nS(n,i){n&1&&(d(0,"th",31),h(1," Inicio "),u())}function iS(n,i){if(n&1&&(d(0,"td",32),h(1),u()),n&2){let e=i.$implicit,t=D(2);p(),oe(" ",t.formatFecha(e.fechaHoraInicioOriginal||e.fechaHoraInicio)," ")}}function rS(n,i){n&1&&(d(0,"th",31),h(1," Fin "),u())}function aS(n,i){if(n&1&&(d(0,"td",32),h(1),u()),n&2){let e=i.$implicit,t=D(2);p(),oe(" ",t.formatFecha(e.fechaHoraFin)," ")}}function oS(n,i){n&1&&(d(0,"th",31),h(1," Horas "),u())}function sS(n,i){if(n&1&&(Pe(0),h(1),Ne()),n&2){let e=D().$implicit,t=D(2);p(),oe(" ",t.formatHoras(e.horasTotales)," ")}}function lS(n,i){n&1&&(d(0,"span"),h(1,"\u23F3 En curso"),u())}function cS(n,i){n&1&&(d(0,"span"),h(1,"\u23F8\uFE0F Pausado"),u())}function dS(n,i){if(n&1&&(d(0,"span"),h(1),u()),n&2){let e=D(2).$implicit,t=D(2);p(),oe(" ",t.formatHoras(e.horasTotales)," ")}}function uS(n,i){if(n&1&&(Pe(0),L(1,lS,2,0,"span",2)(2,cS,2,0,"span",2)(3,dS,2,1,"span",2),Ne()),n&2){let e=D().$implicit;p(),_("ngIf",e.estadoTimer==="CORRIENDO"),p(),_("ngIf",e.estadoTimer==="PAUSADO"),p(),_("ngIf",!e.estadoTimer||e.estadoTimer==="FINALIZADO")}}function mS(n,i){if(n&1&&(d(0,"td",32),L(1,sS,2,1,"ng-container",2)(2,uS,4,3,"ng-container",2),u()),n&2){let e=i.$implicit;p(),_("ngIf",e.fechaHoraFin),p(),_("ngIf",!e.fechaHoraFin)}}function hS(n,i){n&1&&(d(0,"th",31),h(1," Categor\xEDa "),u())}function fS(n,i){if(n&1&&(d(0,"td",32),h(1),u()),n&2){let e=i.$implicit;p(),oe(" ",e.categoria," ")}}function pS(n,i){n&1&&(d(0,"th",31),h(1," Facturable "),u())}function gS(n,i){if(n&1&&(d(0,"td",32),h(1),u()),n&2){let e=i.$implicit;p(),oe(" ",e.facturable?"S\xED":"No"," ")}}function _S(n,i){n&1&&(d(0,"th",31),h(1," Acciones "),u())}function vS(n,i){if(n&1){let e=De();d(0,"button",38),R("click",function(){ee(e);let r=D(2).$implicit,a=D(2);return te(a.pausarRegistroDesdeTabla(r))}),d(1,"mat-icon"),h(2,"pause"),u()()}}function bS(n,i){if(n&1){let e=De();d(0,"button",39),R("click",function(){ee(e);let r=D(2).$implicit,a=D(2);return te(a.reanudarRegistroDesdeTabla(r))}),d(1,"mat-icon"),h(2,"play_arrow"),u()()}}function yS(n,i){if(n&1){let e=De();d(0,"button",40),R("click",function(){ee(e);let r=D(2).$implicit,a=D(2);return te(a.finalizarRegistroDesdeTabla(r))}),d(1,"mat-icon"),h(2,"stop"),u()()}}function CS(n,i){if(n&1&&(Pe(0),L(1,vS,3,0,"button",35)(2,bS,3,0,"button",36)(3,yS,3,0,"button",37),Ne()),n&2){let e=D().$implicit;p(),_("ngIf",e.estadoTimer==="CORRIENDO"),p(),_("ngIf",e.estadoTimer==="PAUSADO"),p(),_("ngIf",e.estadoTimer!=="FINALIZADO")}}function DS(n,i){if(n&1){let e=De();d(0,"button",41),R("click",function(){ee(e);let r=D().$implicit,a=D(2);return te(a.editRegistro(r))}),d(1,"mat-icon"),h(2,"edit"),u()()}}function wS(n,i){if(n&1){let e=De();d(0,"button",42),R("click",function(){ee(e);let r=D().$implicit,a=D(2);return te(a.deleteRegistro(r.id))}),d(1,"mat-icon"),h(2,"delete"),u()()}}function ES(n,i){if(n&1&&(d(0,"td",32),L(1,CS,4,3,"ng-container",2),ke(2,DS,3,0,"button",33),ke(3,wS,3,0,"button",34),u()),n&2){let e=i.$implicit;p(),_("ngIf",!e.fechaHoraFin),p(),Te(!e.fechaHoraFin&&e.estadoTimer!=="CORRIENDO"?2:-1),p(),Te(e.estadoTimer!=="CORRIENDO"?3:-1)}}function xS(n,i){n&1&&T(0,"tr",43)}function SS(n,i){n&1&&T(0,"tr",44)}function MS(n,i){if(n&1&&(d(0,"div")(1,"table",19),Pe(2,20),L(3,eS,2,0,"th",21)(4,tS,3,1,"td",22),Ne(),Pe(5,23),L(6,nS,2,0,"th",21)(7,iS,2,1,"td",22),Ne(),Pe(8,24),L(9,rS,2,0,"th",21)(10,aS,2,1,"td",22),Ne(),Pe(11,25),L(12,oS,2,0,"th",21)(13,mS,3,2,"td",22),Ne(),Pe(14,26),L(15,hS,2,0,"th",21)(16,fS,2,1,"td",22),Ne(),Pe(17,27),L(18,pS,2,0,"th",21)(19,gS,2,1,"td",22),Ne(),Pe(20,28),L(21,_S,2,0,"th",21)(22,ES,4,3,"td",22),Ne(),L(23,xS,1,0,"tr",29)(24,SS,1,0,"tr",30),u()()),n&2){let e=D();p(),_("dataSource",e.registros),p(22),_("matHeaderRowDef",e.displayedColumns),p(),_("matRowDefColumns",e.displayedColumns)}}function AS(n,i){if(n&1){let e=De();d(0,"div",45)(1,"p"),h(2,"No hay registros de tiempo."),u(),d(3,"button",46),R("click",function(){ee(e);let r=D();return te(r.iniciarTimer())}),h(4,"Iniciar Timer"),u(),d(5,"button",46),R("click",function(){ee(e);let r=D();return te(r.openForm())}),h(6,"Crear registro manual"),u()()}}function RS(n,i){if(n&1){let e=De();d(0,"div",45)(1,"p"),h(2,"No hay timers pausados."),u(),d(3,"button",46),R("click",function(){ee(e);let r=D(2);return te(r.crearNuevoTimer())}),h(4,"Crear nuevo timer"),u()()}}function kS(n,i){if(n&1){let e=De();d(0,"div",51)(1,"div",52)(2,"strong"),h(3,"Caso:"),u(),h(4),T(5,"br"),d(6,"strong"),h(7,"Categor\xEDa:"),u(),h(8),T(9,"br"),d(10,"strong"),h(11,"Inicio:"),u(),h(12),T(13,"br"),d(14,"strong"),h(15,"Acumulado:"),u(),h(16),u(),d(17,"button",53),R("click",function(){let r=ee(e).$implicit,a=D(2);return te(a.reanudarTimerPausado(r))}),d(18,"mat-icon"),h(19,"play_arrow"),u(),h(20," Reanudar "),u()()}if(n&2){let e=i.$implicit,t=D(2);p(4),oe(" ",t.getNombreCaso(e.casoId)),p(4),oe(" ",e.categoria),p(4),oe(" ",t.formatFecha(e.fechaHoraInicioOriginal||e.fechaHoraInicio)),p(4),oe(" ",t.formatHoras(e.horasAcumuladas||0)," ")}}function TS(n,i){if(n&1){let e=De();d(0,"div",47)(1,"mat-card",48)(2,"mat-card-title"),h(3,"Seleccionar Timer para Reanudar"),u(),d(4,"mat-card-subtitle"),h(5,"Timers pausados disponibles:"),u(),d(6,"mat-card-content"),L(7,RS,5,0,"div",6)(8,kS,21,4,"div",49),u(),d(9,"mat-card-actions")(10,"button",50),R("click",function(){ee(e);let r=D();return te(r.crearNuevoTimer())}),h(11,"Crear nuevo timer"),u(),d(12,"button",50),R("click",function(){ee(e);let r=D();return te(r.cerrarDialogoPausados())}),h(13,"Cancelar"),u()()()()}if(n&2){let e=D();p(7),_("ngIf",e.timersPausados.length===0),p(),_("ngForOf",e.timersPausados)}}function IS(n,i){if(n&1&&(d(0,"mat-option",64),h(1),u()),n&2){let e=i.$implicit;_("value",e.id),p(),Zr(" ",e.titulo," - ",e.clienteNombre," ",e.clienteApellido," ")}}function FS(n,i){n&1&&(d(0,"mat-option",65),h(1," No hay casos disponibles "),u())}function OS(n,i){n&1&&(d(0,"mat-form-field",55)(1,"mat-label"),h(2,"Fecha/Hora Fin"),u(),T(3,"input",66),u())}function PS(n,i){if(n&1&&(d(0,"mat-option",64),h(1),u()),n&2){let e=i.$implicit;_("value",e),p(),oe(" ",e," ")}}function NS(n,i){if(n&1){let e=De();d(0,"div",47)(1,"mat-card",48)(2,"mat-card-title"),h(3),u(),d(4,"mat-card-content")(5,"form",54)(6,"mat-form-field",55)(7,"mat-label"),h(8,"Caso *"),u(),d(9,"mat-select",56),L(10,IS,2,4,"mat-option",57)(11,FS,2,0,"mat-option",58),u(),d(12,"mat-error"),h(13,"Caso es obligatorio"),u()(),L(14,OS,4,0,"mat-form-field",59),d(15,"mat-form-field",55)(16,"mat-label"),h(17,"Categor\xEDa *"),u(),d(18,"mat-select",60),L(19,PS,2,2,"mat-option",57),u(),d(20,"mat-error"),h(21,"Categor\xEDa es obligatoria"),u()(),d(22,"mat-form-field",55)(23,"mat-label"),h(24,"Descripci\xF3n"),u(),T(25,"textarea",61),u(),d(26,"mat-slide-toggle",62),h(27," Facturable "),u()()(),d(28,"mat-card-actions")(29,"button",50),R("click",function(){ee(e);let r=D();return te(r.closeForm())}),h(30,"Cancelar"),u(),d(31,"button",63),R("click",function(){ee(e);let r=D();return te(r.saveRegistro())}),h(32),u()()()()}if(n&2){let e=D();p(3),lt(e.editMode?"Editar Registro":e.nuevoTimerDirecto?"Nuevo Timer":"Nuevo Registro"),p(2),_("formGroup",e.registroForm),p(5),_("ngForOf",e.casosFiltradosManual),p(),_("ngIf",e.casosFiltradosManual.length===0),p(3),_("ngIf",!e.nuevoTimerDirecto),p(5),_("ngForOf",e.categorias),p(12),_("disabled",e.registroForm.invalid),p(),oe(" ",e.editMode?"Actualizar":e.nuevoTimerDirecto?"Iniciar Timer":"Guardar"," ")}}var ud=class n{constructor(i,e,t,r,a,o,s){this.registroService=i;this.casoService=e;this.authService=t;this.fb=r;this.snackBar=a;this.cdr=o;this.dialog=s;this.registroForm=this.fb.group({casoId:["",Ie.required],fechaHoraInicio:[""],fechaHoraFin:[""],categoria:["",Ie.required],descripcion:[""],facturable:[!0]})}registros=[];casos=[];casosFiltradosManual=[];registroActivo=null;timersPausados=[];mostrarTimersPausados=!1;displayedColumns=["caso","fechaInicio","fechaFin","horas","categoria","facturable","acciones"];loading=!0;showForm=!1;editMode=!1;selectedRegistroId=null;registroForm;categorias=Hv;tiempoTranscurrido="00:00:00";intervalo;nuevoTimerDirecto=!1;casosConTimerActivoIds=new Set;ngOnInit(){this.loadCasos(),this.loadRegistros(),this.cargarRegistroActivo()}loadCasos(){this.casoService.getCasos().subscribe({next:i=>{this.casos=Array.isArray(i)?i:i?.content||[],this.actualizarCasosFiltradosManual(),this.cdr.detectChanges()},error:i=>{console.error("Error al cargar casos:",i)}})}loadRegistros(){if(!this.authService.getToken()){this.authService.logout(),window.location.href="/login";return}this.loading=!0,this.cdr.detectChanges(),this.registroService.getRegistros().subscribe({next:e=>{console.log("\u{1F4E6} Registros recibidos:",e),this.registros=Array.isArray(e)?e:e?.content||[],this.actualizarCasosConTimerActivo(),this.loading=!1,this.cdr.detectChanges()},error:e=>{console.error("\u274C Error al cargar registros:",e),this.snackBar.open("Error al cargar registros","Cerrar",{duration:3e3}),this.loading=!1,this.cdr.detectChanges(),(e.status===401||e.status===403)&&(this.authService.logout(),window.location.href="/login")}})}cargarRegistroActivo(){this.registroService.getRegistroActivo().subscribe({next:i=>{this.registroActivo=i,i&&i.estadoTimer==="CORRIENDO"?this.iniciarContador():(this.detenerContador(),i&&i.horasAcumuladas&&(this.tiempoTranscurrido=this.formatearTiempo(i.horasAcumuladas*3600))),this.cdr.detectChanges()},error:i=>{i.status===403?(console.debug("No se pudo obtener timer activo (403). Se ignora."),this.registroActivo=null):i.status!==404?console.error("Error al cargar registro activo:",i):this.registroActivo=null,this.detenerContador(),this.cdr.detectChanges()}})}cargarTimersPausados(){this.registroService.listarTimersPausados().subscribe({next:i=>{this.timersPausados=i,this.cdr.detectChanges()},error:i=>{console.error("Error al cargar timers pausados:",i)}})}actualizarCasosConTimerActivo(){this.casosConTimerActivoIds=new Set(this.registros.filter(i=>i.estadoTimer==="CORRIENDO"||i.estadoTimer==="PAUSADO").map(i=>i.casoId)),this.actualizarCasosFiltradosManual()}actualizarCasosFiltradosManual(){this.editMode||(this.casosFiltradosManual=this.casos.filter(i=>i.estado!=="CERRADO"&&!this.casosConTimerActivoIds.has(i.id)),this.cdr.detectChanges())}pausarTimerActual(){this.registroActivo&&this.registroActivo.estadoTimer==="CORRIENDO"&&(this.detenerContador(),this.loading=!0,this.registroService.pausarTimerActual().subscribe({next:()=>{this.snackBar.open("Timer pausado","Cerrar",{duration:3e3}),this.cargarRegistroActivo(),this.cargarTimersPausados(),this.loadRegistros(),this.loading=!1,this.cdr.detectChanges()},error:i=>{let e=i.error?.message||i.message||"Error desconocido";this.snackBar.open("Error al pausar: "+e,"Cerrar",{duration:5e3}),this.loading=!1,this.cdr.detectChanges()}}))}reanudarTimerActivo(){this.registroActivo&&this.registroActivo.estadoTimer==="PAUSADO"&&(this.loading=!0,this.registroService.reanudarTimerEspecifico(this.registroActivo.id).subscribe({next:()=>{this.snackBar.open("Timer reanudado","Cerrar",{duration:3e3}),this.cargarRegistroActivo(),this.loadRegistros(),this.cargarTimersPausados(),this.loading=!1,this.cdr.detectChanges()},error:i=>{let e=i.error?.message||i.message||"Error desconocido";this.snackBar.open("Error al reanudar: "+e,"Cerrar",{duration:5e3}),this.loading=!1,this.cdr.detectChanges()}}))}iniciarTimer(){this.cargarTimersPausados(),this.mostrarTimersPausados=!0}crearNuevoTimerDirecto(){this.nuevoTimerDirecto=!0,this.showForm=!0,this.editMode=!1,this.selectedRegistroId=null,this.mostrarTimersPausados=!1,this.registroForm.reset({facturable:!0,casoId:"",categoria:"",descripcion:""})}crearNuevoTimer(){this.crearNuevoTimerDirecto()}openForm(){this.nuevoTimerDirecto=!1,this.showForm=!0,this.editMode=!1,this.selectedRegistroId=null,this.registroForm.reset({facturable:!0,fechaHoraInicio:"",fechaHoraFin:"",casoId:"",categoria:"",descripcion:""}),this.actualizarCasosFiltradosManual(),this.cdr.detectChanges()}closeForm(){this.showForm=!1,this.registroForm.reset(),this.nuevoTimerDirecto=!1}editRegistro(i){this.editMode=!0,this.selectedRegistroId=i.id,this.showForm=!0;let e=this.casos.filter(a=>a.estado!=="CERRADO"&&!this.casosConTimerActivoIds.has(a.id)),t=this.casos.find(a=>a.id===i.casoId);t&&!e.some(a=>a.id===t.id)?this.casosFiltradosManual=[t,...e]:this.casosFiltradosManual=[...e];let r="";if(i.fechaHoraFin){let a=new Date(i.fechaHoraFin);r=`${a.getFullYear()}-${String(a.getMonth()+1).padStart(2,"0")}-${String(a.getDate()).padStart(2,"0")}T${String(a.getHours()).padStart(2,"0")}:${String(a.getMinutes()).padStart(2,"0")}`}this.registroForm.patchValue({casoId:i.casoId,fechaHoraInicio:new Date(i.fechaHoraInicio),fechaHoraFin:r,categoria:i.categoria,descripcion:i.descripcion,facturable:i.facturable}),this.cdr.detectChanges()}saveRegistro(){if(this.registroForm.invalid)return;this.loading=!0,this.cdr.detectChanges();let i=this.registroForm.value;if(this.nuevoTimerDirecto){if(this.registroActivo&&this.registroActivo.estadoTimer==="CORRIENDO"){this.snackBar.open("\u26A0\uFE0F Ya hay un timer corriendo. Debes pausarlo o finalizarlo antes de iniciar otro.","Cerrar",{duration:5e3}),this.loading=!1,this.cdr.detectChanges(),this.closeForm();return}if(!i.fechaHoraInicio){let t=new Date;t.setSeconds(0);let r=t.getFullYear(),a=String(t.getMonth()+1).padStart(2,"0"),o=String(t.getDate()).padStart(2,"0"),s=String(t.getHours()).padStart(2,"0"),c=String(t.getMinutes()).padStart(2,"0");i.fechaHoraInicio=`${r}-${a}-${o}T${s}:${c}`}this.registroService.iniciarRegistro(i).subscribe({next:()=>{this.snackBar.open("Timer iniciado","Cerrar",{duration:3e3}),this.cargarRegistroActivo(),this.loadRegistros(),this.closeForm(),this.loading=!1,this.cdr.detectChanges()},error:t=>{let r=t.error?.message||t.message||"Error desconocido";r.includes("Ya tiene un registro de tiempo activo")?this.snackBar.open("\u26A0\uFE0F Ya tienes un timer activo.","Cerrar",{duration:5e3}):this.snackBar.open("Error al iniciar timer: "+r,"Cerrar",{duration:5e3}),this.loading=!1,this.cdr.detectChanges()}})}else{if(!i.fechaHoraInicio){let r=new Date;r.setSeconds(0);let a=r.getFullYear(),o=String(r.getMonth()+1).padStart(2,"0"),s=String(r.getDate()).padStart(2,"0"),c=String(r.getHours()).padStart(2,"0"),m=String(r.getMinutes()).padStart(2,"0");i.fechaHoraInicio=`${a}-${o}-${s}T${c}:${m}`}if(!i.fechaHoraFin){this.snackBar.open("Debe ingresar una fecha/hora de fin","Cerrar",{duration:3e3}),this.loading=!1,this.cdr.detectChanges();return}let e=new Date(i.fechaHoraInicio);if(new Date(i.fechaHoraFin)<=e){this.snackBar.open("La fecha/hora de fin debe ser posterior a la fecha/hora de inicio","Cerrar",{duration:5e3}),this.loading=!1,this.cdr.detectChanges();return}if(this.editMode&&this.selectedRegistroId){this.snackBar.open("Edici\xF3n no disponible para registros completos","Cerrar",{duration:3e3}),this.loading=!1,this.cdr.detectChanges(),this.closeForm();return}this.registroService.crearRegistroCompleto(i).subscribe({next:()=>{this.snackBar.open("Registro creado","Cerrar",{duration:3e3}),this.loadRegistros(),this.closeForm(),this.loading=!1,this.cdr.detectChanges()},error:r=>{let a=r.error?.message||r.message||"Error desconocido";this.snackBar.open("Error al crear registro: "+a,"Cerrar",{duration:3e3}),this.loading=!1,this.cdr.detectChanges()}})}}pausarRegistroDesdeTabla(i){if(i.estadoTimer!=="CORRIENDO"){this.snackBar.open("Solo se puede pausar un timer que est\xE9 corriendo","Cerrar",{duration:3e3});return}this.detenerContador(),this.loading=!0,this.cdr.detectChanges(),this.registroService.pausarRegistro(i.id).subscribe({next:()=>{this.snackBar.open("Timer pausado","Cerrar",{duration:3e3}),this.cargarRegistroActivo(),this.loadRegistros(),this.cargarTimersPausados(),this.loading=!1,this.cdr.detectChanges()},error:e=>{this.snackBar.open("Error al pausar: "+(e.error?.message||e.message),"Cerrar",{duration:5e3}),this.loading=!1,this.cdr.detectChanges()}})}reanudarRegistroDesdeTabla(i){if(i.estadoTimer!=="PAUSADO"){this.snackBar.open("Solo se puede reanudar un timer que est\xE9 pausado","Cerrar",{duration:3e3});return}this.loading=!0,this.cdr.detectChanges(),this.registroService.reanudarTimerEspecifico(i.id).subscribe({next:()=>{this.snackBar.open(`Timer reanudado para caso: ${this.getNombreCaso(i.casoId)}`,"Cerrar",{duration:3e3}),this.cargarRegistroActivo(),this.loadRegistros(),this.cargarTimersPausados(),this.loading=!1,this.cdr.detectChanges()},error:e=>{this.snackBar.open("Error al reanudar: "+(e.error?.message||e.message),"Cerrar",{duration:5e3}),this.loading=!1,this.cdr.detectChanges()}})}finalizarRegistroDesdeTabla(i){if(i.estadoTimer==="FINALIZADO"){this.snackBar.open("Este registro ya est\xE1 finalizado","Cerrar",{duration:3e3});return}this.detenerContador(),this.loading=!0,this.cdr.detectChanges(),this.registroService.finalizarRegistro(i.id).subscribe({next:()=>{this.snackBar.open("Timer finalizado","Cerrar",{duration:3e3}),this.cargarRegistroActivo(),this.loadRegistros(),this.cargarTimersPausados(),this.loading=!1,this.cdr.detectChanges()},error:e=>{this.snackBar.open("Error al finalizar: "+(e.error?.message||e.message),"Cerrar",{duration:3e3}),this.loading=!1,this.cdr.detectChanges()}})}reanudarTimerPausado(i){this.loading=!0,this.registroService.reanudarTimerEspecifico(i.id).subscribe({next:()=>{this.snackBar.open(`Timer reanudado para caso: ${this.getNombreCaso(i.casoId)}`,"Cerrar",{duration:3e3}),this.cargarRegistroActivo(),this.loadRegistros(),this.cargarTimersPausados(),this.mostrarTimersPausados=!1,this.loading=!1,this.cdr.detectChanges()},error:e=>{let t=e.error?.message||e.message||"Error desconocido";this.snackBar.open("Error al reanudar: "+t,"Cerrar",{duration:5e3}),this.loading=!1,this.cdr.detectChanges()}})}finalizarTimer(){this.registroActivo&&(this.loading=!0,this.registroService.finalizarRegistro(this.registroActivo.id).subscribe({next:()=>{this.snackBar.open("Timer finalizado","Cerrar",{duration:3e3}),this.cargarRegistroActivo(),this.loadRegistros(),this.loading=!1,this.cdr.detectChanges()},error:i=>{let e=i.error?.message||i.message||"Error desconocido";this.snackBar.open("Error al finalizar timer: "+e,"Cerrar",{duration:3e3}),this.loading=!1,this.cdr.detectChanges()}}))}deleteRegistro(i){this.dialog.open(Si,{width:"400px",data:{title:"Confirmar eliminaci\xF3n",message:"\xBFEst\xE1s seguro de eliminar este registro de tiempo? Esta acci\xF3n no se puede deshacer.",confirmText:"Eliminar",cancelText:"Cancelar"}}).afterClosed().subscribe(t=>{t&&(this.loading=!0,this.cdr.detectChanges(),this.registroService.deleteRegistro(i).subscribe({next:()=>{this.snackBar.open("Registro eliminado","Cerrar",{duration:3e3}),this.cargarRegistroActivo(),this.loadRegistros(),this.loading=!1,this.cdr.detectChanges()},error:r=>{let a=r.error?.message||r.message||"Error desconocido";this.snackBar.open("Error al eliminar registro: "+a,"Cerrar",{duration:3e3}),this.loading=!1,this.cdr.detectChanges()}}))})}cerrarDialogoPausados(){this.mostrarTimersPausados=!1}formatFecha(i){return i?new Date(i).toLocaleString():"-"}getNombreCaso(i){let e=this.casos.find(t=>t.id===i);return e?e.titulo:"Cargando..."}formatHoras(i){if(!i&&i!==0)return"-";let e=i*60,t=Math.floor(e),r=Math.round((e-t)*60);return t>0&&r>0?`${t}m ${r}s`:t>0?`${t}m`:r>0?`${r}s`:"0s"}formatearTiempo(i){let e=Math.floor(i/3600),t=Math.floor(i%3600/60),r=i%60;return`${e.toString().padStart(2,"0")}:${t.toString().padStart(2,"0")}:${r.toString().padStart(2,"0")}`}iniciarContador(){this.intervalo&&clearInterval(this.intervalo),this.registroActivo&&this.registroActivo.estadoTimer==="CORRIENDO"&&(this.intervalo=setInterval(()=>{if(!this.registroActivo)return;let i=new Date(this.registroActivo.fechaHoraInicio),t=Math.floor((new Date().getTime()-i.getTime())/1e3);this.registroActivo.horasAcumuladas&&(t+=this.registroActivo.horasAcumuladas*3600),this.tiempoTranscurrido=this.formatearTiempo(t),this.cdr.detectChanges()},1e3))}detenerContador(){this.intervalo&&(clearInterval(this.intervalo),this.intervalo=null)}ngOnDestroy(){this.detenerContador()}static \u0275fac=function(e){return new(e||n)(k(wo),k(Lr),k(Dt),k(xn),k(un),k(Ee),k(ii))};static \u0275cmp=N({type:n,selectors:[["app-registros-tiempo"]],decls:22,vars:8,consts:[[1,"container"],["mat-raised-button","","color","accent","class","add-button",3,"click",4,"ngIf"],[4,"ngIf"],["mat-raised-button","","color","primary",1,"add-button",3,"click"],["class","active-timer",4,"ngIf"],["class","spinner-container",4,"ngIf"],["class","empty-state",4,"ngIf"],["class","modal-overlay",4,"ngIf"],["mat-raised-button","","color","accent",1,"add-button",3,"click"],["mat-raised-button","","color","primary","class","add-button",3,"click",4,"ngIf"],["mat-raised-button","","color","warn",1,"add-button",3,"click"],[1,"active-timer"],[3,"ngClass"],[1,"timer-info"],[1,"timer-status"],[1,"status-text"],[1,"timer-details"],[1,"spinner-container"],["diameter","40"],["mat-table","",3,"dataSource"],["matColumnDef","caso"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","fechaInicio"],["matColumnDef","fechaFin"],["matColumnDef","horas"],["matColumnDef","categoria"],["matColumnDef","facturable"],["matColumnDef","acciones"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-header-cell",""],["mat-cell",""],["mat-icon-button","","color","primary","matTooltip","Editar"],["mat-icon-button","","color","warn","matTooltip","Eliminar"],["mat-icon-button","","color","primary","matTooltip","Pausar",3,"click",4,"ngIf"],["mat-icon-button","","color","accent","matTooltip","Reanudar",3,"click",4,"ngIf"],["mat-icon-button","","color","warn","matTooltip","Finalizar",3,"click",4,"ngIf"],["mat-icon-button","","color","primary","matTooltip","Pausar",3,"click"],["mat-icon-button","","color","accent","matTooltip","Reanudar",3,"click"],["mat-icon-button","","color","warn","matTooltip","Finalizar",3,"click"],["mat-icon-button","","color","primary","matTooltip","Editar",3,"click"],["mat-icon-button","","color","warn","matTooltip","Eliminar",3,"click"],["mat-header-row",""],["mat-row",""],[1,"empty-state"],["mat-raised-button","","color","primary",3,"click"],[1,"modal-overlay"],[1,"form-card"],["class","timer-pausado-item",4,"ngFor","ngForOf"],["mat-button","",3,"click"],[1,"timer-pausado-item"],[1,"timer-pausado-info"],["mat-raised-button","","color","accent",3,"click"],[3,"formGroup"],["appearance","outline",1,"full-width"],["formControlName","casoId"],[3,"value",4,"ngFor","ngForOf"],["disabled","",4,"ngIf"],["appearance","outline","class","full-width",4,"ngIf"],["formControlName","categoria"],["matInput","","rows","3","formControlName","descripcion"],["formControlName","facturable",1,"full-width"],["mat-raised-button","","color","primary",3,"click","disabled"],[3,"value"],["disabled",""],["matInput","","type","datetime-local","formControlName","fechaHoraFin"]],template:function(e,t){e&1&&(d(0,"div",0)(1,"mat-card")(2,"mat-card-title"),h(3," Registros de Tiempo "),d(4,"div"),L(5,Wx,4,0,"button",1)(6,Zx,7,2,"ng-container",2),d(7,"button",3),R("click",function(){return t.crearNuevoTimerDirecto()}),d(8,"mat-icon"),h(9,"timer"),u(),h(10," Nuevo Timer "),u(),d(11,"button",3),R("click",function(){return t.openForm()}),d(12,"mat-icon"),h(13,"add"),u(),h(14," Nuevo Registro "),u()()(),L(15,Qx,21,14,"div",4),d(16,"mat-card-content"),L(17,Jx,2,0,"div",5)(18,MS,25,3,"div",2)(19,AS,7,0,"div",6),u()(),L(20,TS,14,2,"div",7)(21,NS,33,8,"div",7),u()),e&2&&(p(5),_("ngIf",!t.registroActivo),p(),_("ngIf",t.registroActivo&&!t.registroActivo.fechaHoraFin),p(9),_("ngIf",t.registroActivo&&!t.registroActivo.fechaHoraFin),p(2),_("ngIf",t.loading),p(),_("ngIf",!t.loading&&t.registros.length>0),p(),_("ngIf",!t.loading&&t.registros.length===0),p(),_("ngIf",t.mostrarTimersPausados),p(),_("ngIf",t.showForm))},dependencies:[yt,Jr,tr,Yt,qt,_i,En,zt,Qt,wn,Sn,Ft,ln,Rr,br,Cr,xr,Dr,yr,Sr,wr,Er,Mr,Ar,ft,mt,Fn,Tr,kr,Tn,Mn,kn,Rn,mr,An,On,Mt,Ut,Vt,dn,en,Jt,Nr,Pr,Nn,Co,Do,Fr,Ir,Uv,mh,Pn],styles:[".container[_ngcontent-%COMP%]{padding:20px;max-width:1400px;margin:0 auto}mat-card-title[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;margin-bottom:20px;flex-wrap:wrap;gap:10px}.add-button[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;margin-left:8px}.active-timer[_ngcontent-%COMP%]{margin-bottom:20px}.active-timer[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]{background-color:#e8f5e9;border-left:4px solid #4caf50}.spinner-container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;height:200px}.empty-state[_ngcontent-%COMP%]{text-align:center;padding:40px;color:#666}.empty-state[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin:0 8px}.modal-overlay[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100%;height:100%;background-color:#00000080;display:flex;justify-content:center;align-items:center;z-index:1000}.form-card[_ngcontent-%COMP%]{width:100%;max-width:500px;max-height:90vh;overflow-y:auto}.full-width[_ngcontent-%COMP%]{width:100%;margin-bottom:16px}mat-card-actions[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;gap:8px;padding:16px}table[_ngcontent-%COMP%]{width:100%}.mat-column-acciones[_ngcontent-%COMP%]{width:80px;text-align:center}.mat-column-horas[_ngcontent-%COMP%], .mat-column-facturable[_ngcontent-%COMP%]{width:100px}.active-timer[_ngcontent-%COMP%]   .paused-card[_ngcontent-%COMP%]{background-color:#fff3e0;border-left:4px solid #ff9800}.timer-status[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;margin-bottom:8px}.timer-status[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:24px;width:24px;height:24px}.timer-status[_ngcontent-%COMP%]   mat-icon.running[_ngcontent-%COMP%]{color:#4caf50}.timer-status[_ngcontent-%COMP%]   mat-icon.paused[_ngcontent-%COMP%]{color:#ff9800}.status-text[_ngcontent-%COMP%]{font-weight:500}.timer-details[_ngcontent-%COMP%]{font-size:14px;color:#555}.timer-pausado-item[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;padding:12px;margin-bottom:12px;background-color:#f5f5f5;border-radius:8px;border-left:4px solid #ff9800}.timer-pausado-info[_ngcontent-%COMP%]{flex:1}.timer-pausado-info[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#333}.timer-pausado-item[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-left:16px;white-space:nowrap}"]})};var Gv=["PENDIENTE","PAGADA","VENCIDA","CANCELADA"];var Eo=class n{constructor(i){this.http=i}apiUrl=xi.apiUrl;getFacturas(){return this.http.get(`${this.apiUrl}/facturas`)}getFacturasPorCaso(i){return this.http.get(`${this.apiUrl}/facturas/caso/${i}`)}getFactura(i){return this.http.get(`${this.apiUrl}/facturas/${i}`)}createFactura(i){return this.http.post(`${this.apiUrl}/facturas`,i)}createFacturaAutomatica(i,e,t,r){let a=`${this.apiUrl}/facturas/auto/${i}?numeroFactura=${e}&tarifaPorHora=${t}`;return r&&(a+=`&diasVencimiento=${r}`),this.http.post(a,{})}actualizarEstado(i,e){return this.http.patch(`${this.apiUrl}/facturas/${i}/estado?estado=${e}`,{})}updateFactura(i,e){return this.http.put(`${this.apiUrl}/facturas/${i}`,e)}deleteFactura(i){return this.http.delete(`${this.apiUrl}/facturas/${i}`)}getTotalFacturadoPorCaso(i){return this.http.get(`${this.apiUrl}/facturas/caso/${i}/total-facturado`)}registrarPago(i,e,t){let r={medioPago:e,fechaPago:t};return this.http.patch(`${this.apiUrl}/facturas/${i}/pagar`,r)}getCasosConTimerActivo(){return this.http.get(`${this.apiUrl}/registros-tiempo/casos-activos`)}cancelarFactura(i){return this.http.patch(`${this.apiUrl}/facturas/${i}/cancelar`,{})}static \u0275fac=function(e){return new(e||n)(G(Xt))};static \u0275prov=w({token:n,factory:n.\u0275fac,providedIn:"root"})};var md=class n{constructor(i,e,t){this.facturaService=i;this.dialogRef=e;this.data=t}medioPago="";fechaPago=new Date;confirmar(){this.facturaService.registrarPago(this.data.facturaId,this.medioPago,this.fechaPago).subscribe({next:()=>{this.dialogRef.close(!0)},error:i=>{console.error(i)}})}cancelar(){this.dialogRef.close(!1)}static \u0275fac=function(e){return new(e||n)(k(Eo),k(Wi),k(Vs))};static \u0275cmp=N({type:n,selectors:[["app-pago-dialog"]],decls:29,vars:5,consts:[["picker",""],["mat-dialog-title",""],["appearance","outline",1,"full-width"],["required","",3,"ngModelChange","ngModel"],["value","TRANSFERENCIA"],["value","TARJETA_CREDITO"],["value","TARJETA_DEBITO"],["value","CONTADO"],["value","CHEQUE"],["matInput","",3,"ngModelChange","matDatepicker","ngModel"],["matSuffix","",3,"for"],["align","end"],["mat-button","",3,"click"],["mat-raised-button","","color","primary",3,"click","disabled"]],template:function(e,t){if(e&1){let r=De();d(0,"h2",1),h(1,"Registrar Pago"),u(),d(2,"mat-dialog-content")(3,"mat-form-field",2)(4,"mat-label"),h(5,"Medio de pago"),u(),d(6,"mat-select",3),Qr("ngModelChange",function(o){return ee(r),Xr(t.medioPago,o)||(t.medioPago=o),te(o)}),d(7,"mat-option",4),h(8,"Transferencia bancaria"),u(),d(9,"mat-option",5),h(10,"Tarjeta de cr\xE9dito"),u(),d(11,"mat-option",6),h(12,"Tarjeta de d\xE9bito"),u(),d(13,"mat-option",7),h(14,"Contado (efectivo)"),u(),d(15,"mat-option",8),h(16,"Cheque"),u()()(),d(17,"mat-form-field",2)(18,"mat-label"),h(19,"Fecha de pago"),u(),d(20,"input",9),Qr("ngModelChange",function(o){return ee(r),Xr(t.fechaPago,o)||(t.fechaPago=o),te(o)}),u(),T(21,"mat-datepicker-toggle",10)(22,"mat-datepicker",null,0),u()(),d(24,"mat-dialog-actions",11)(25,"button",12),R("click",function(){return t.cancelar()}),h(26,"Cancelar"),u(),d(27,"button",13),R("click",function(){return t.confirmar()}),h(28,"Confirmar pago"),u()()}if(e&2){let r=$n(23);p(6),Kr("ngModel",t.medioPago),p(14),_("matDatepicker",r),Kr("ngModel",t.fechaPago),p(),_("for",r),p(6),_("disabled",!t.medioPago)}},dependencies:[yt,_i,zt,Qt,nm,em,Pn,nd,rd,id,Mt,Ut,Vt,ym,en,Jt,Nr,Pr,Nn,Co,jv,cd,ch,Do,ft,mt],styles:[".full-width[_ngcontent-%COMP%]{width:100%;margin-bottom:16px}"]})};var LS=(n,i,e,t)=>({"estado-pendiente":n,"estado-pagada":i,"estado-vencida":e,"estado-cancelada":t});function VS(n,i){n&1&&(d(0,"div",8),T(1,"mat-spinner",9),u())}function BS(n,i){if(n&1&&(d(0,"div",10)(1,"strong"),h(2,"Total facturado:"),u(),h(3),Ld(4,"currency"),u()),n&2){let e=D();p(3),oe(" ",Vd(4,1,e.getMontoTotal(),"ARS","symbol-narrow","1.2-2")," ")}}function jS(n,i){n&1&&(d(0,"th",24),h(1," N\xB0 Factura "),u())}function zS(n,i){if(n&1&&(d(0,"td",25),h(1),u()),n&2){let e=i.$implicit;p(),oe(" ",e.numeroFactura," ")}}function US(n,i){n&1&&(d(0,"th",24),h(1," Cliente "),u())}function HS(n,i){if(n&1&&(d(0,"td",25),h(1),u()),n&2){let e=i.$implicit;p(),qr(" ",e.clienteNombre," ",e.clienteApellido," ")}}function $S(n,i){n&1&&(d(0,"th",24),h(1," Caso "),u())}function GS(n,i){if(n&1&&(d(0,"td",25),h(1),u()),n&2){let e=i.$implicit,t=D(2);p(),oe(" ",t.getNombreCaso(e.casoId)," ")}}function WS(n,i){n&1&&(d(0,"th",24),h(1," Monto "),u())}function YS(n,i){if(n&1&&(d(0,"td",25),h(1),Ld(2,"currency"),u()),n&2){let e=i.$implicit;p(),oe(" ",Vd(2,1,e.monto,"ARS","symbol-narrow","1.2-2")," ")}}function qS(n,i){n&1&&(d(0,"th",24),h(1," Fecha Emisi\xF3n "),u())}function ZS(n,i){if(n&1&&(d(0,"td",25),h(1),u()),n&2){let e=i.$implicit,t=D(2);p(),oe(" ",t.formatFecha(e.fechaEmision)," ")}}function KS(n,i){n&1&&(d(0,"th",24),h(1," Fecha Venc. "),u())}function XS(n,i){if(n&1&&(d(0,"td",25),h(1),u()),n&2){let e=i.$implicit,t=D(2);p(),oe(" ",t.formatFecha(e.fechaVencimiento)," ")}}function QS(n,i){n&1&&(d(0,"th",24),h(1," Estado "),u())}function JS(n,i){if(n&1&&(d(0,"td",25)(1,"span",26),h(2),u()()),n&2){let e=i.$implicit,t=D(2);p(),_("ngClass",sf(2,LS,e.estado==="PENDIENTE",e.estado==="PAGADA",t.estaVencida(e),e.estado==="CANCELADA")),p(),oe(" ",t.estaVencida(e)?"VENCIDA":e.estado," ")}}function eM(n,i){n&1&&(d(0,"th",24),h(1," Acciones "),u())}function tM(n,i){if(n&1){let e=De();d(0,"button",30),R("click",function(){ee(e);let r=D().$implicit,a=D(2);return te(a.pagarFactura(r))}),d(1,"mat-icon"),h(2,"paid"),u()()}}function nM(n,i){if(n&1){let e=De();d(0,"button",31),R("click",function(){ee(e);let r=D().$implicit,a=D(2);return te(a.deleteFactura(r.id))}),d(1,"mat-icon"),h(2,"delete"),u()()}}function iM(n,i){if(n&1){let e=De();d(0,"button",32),R("click",function(){ee(e);let r=D().$implicit,a=D(2);return te(a.cancelarFactura(r.id))}),d(1,"mat-icon"),h(2,"cancel"),u()()}}function rM(n,i){if(n&1&&(d(0,"td",25),L(1,tM,3,0,"button",27)(2,nM,3,0,"button",28)(3,iM,3,0,"button",29),u()),n&2){let e=i.$implicit;p(),_("ngIf",e.estado==="PENDIENTE"),p(),_("ngIf",e.estado!=="PAGADA"&&e.estado!=="CANCELADA"),p(),_("ngIf",e.estado!=="PAGADA"&&e.estado!=="CANCELADA")}}function aM(n,i){n&1&&T(0,"tr",33)}function oM(n,i){if(n&1&&T(0,"tr",34),n&2){let e=i.$implicit,t=D(2);J("fila-pendiente",!t.estaVencida(e)&&e.estado==="PENDIENTE")("fila-pagada",e.estado==="PAGADA")("fila-vencida",t.estaVencida(e))("fila-cancelada",e.estado==="CANCELADA")}}function sM(n,i){if(n&1&&(d(0,"table",11),Pe(1,12),L(2,jS,2,0,"th",13)(3,zS,2,1,"td",14),Ne(),Pe(4,15),L(5,US,2,0,"th",13)(6,HS,2,2,"td",14),Ne(),Pe(7,16),L(8,$S,2,0,"th",13)(9,GS,2,1,"td",14),Ne(),Pe(10,17),L(11,WS,2,0,"th",13)(12,YS,3,6,"td",14),Ne(),Pe(13,18),L(14,qS,2,0,"th",13)(15,ZS,2,1,"td",14),Ne(),Pe(16,19),L(17,KS,2,0,"th",13)(18,XS,2,1,"td",14),Ne(),Pe(19,20),L(20,QS,2,0,"th",13)(21,JS,3,7,"td",14),Ne(),Pe(22,21),L(23,eM,2,0,"th",13)(24,rM,4,3,"td",14),Ne(),L(25,aM,1,0,"tr",22)(26,oM,1,8,"tr",23),u()),n&2){let e=D();_("dataSource",e.facturas),p(25),_("matHeaderRowDef",e.displayedColumns),p(),_("matRowDefColumns",e.displayedColumns)}}function lM(n,i){if(n&1){let e=De();d(0,"div",35)(1,"p"),h(2,"No hay facturas registradas."),u(),d(3,"button",36),R("click",function(){ee(e);let r=D();return te(r.openForm())}),h(4,"Crear primera factura"),u()()}}function cM(n,i){if(n&1&&(d(0,"mat-option",52),h(1),u()),n&2){let e=i.$implicit;_("value",e.id),p(),Zr(" ",e.titulo," - ",e.clienteNombre," ",e.clienteApellido," ")}}function dM(n,i){n&1&&(d(0,"mat-option",53),h(1," No hay casos disponibles "),u())}function uM(n,i){if(n&1){let e=De();d(0,"div",37)(1,"mat-card",38)(2,"mat-card-title"),h(3),u(),d(4,"mat-card-content")(5,"form",39)(6,"mat-form-field",40)(7,"mat-label"),h(8,"Caso *"),u(),d(9,"mat-select",41),L(10,cM,2,4,"mat-option",42)(11,dM,2,0,"mat-option",43),u(),d(12,"mat-error"),h(13,"Caso es obligatorio"),u()(),d(14,"mat-form-field",40)(15,"mat-label"),h(16,"N\xFAmero de Factura *"),u(),T(17,"input",44),d(18,"mat-error"),h(19,"N\xFAmero de factura es obligatorio"),u()(),d(20,"mat-form-field",40)(21,"mat-label"),h(22,"Monto *"),u(),T(23,"input",45),d(24,"mat-error"),h(25,"Monto es obligatorio y debe ser mayor a 0"),u()(),d(26,"mat-form-field",40)(27,"mat-label"),h(28,"Horas Trabajadas"),u(),T(29,"input",46),u(),d(30,"mat-form-field",40)(31,"mat-label"),h(32,"Tarifa por Hora"),u(),T(33,"input",47),u(),d(34,"mat-form-field",40)(35,"mat-label"),h(36,"Fecha Vencimiento"),u(),T(37,"input",48),d(38,"mat-hint"),h(39,"Formato: DD/MM/YYYY HH:MM"),u()(),d(40,"mat-form-field",40)(41,"mat-label"),h(42,"Descripci\xF3n"),u(),T(43,"textarea",49),u()()(),d(44,"mat-card-actions")(45,"button",50),R("click",function(){ee(e);let r=D();return te(r.closeForm())}),h(46,"Cancelar"),u(),d(47,"button",51),R("click",function(){ee(e);let r=D();return te(r.saveFactura())}),h(48),u()()()()}if(n&2){let e=D();p(3),lt(e.editMode?"Editar Factura":"Nueva Factura"),p(2),_("formGroup",e.facturaForm),p(5),_("ngForOf",e.casosFiltradosManual),p(),_("ngIf",e.casosFiltradosManual.length===0),p(36),_("disabled",e.facturaForm.invalid),p(),oe(" ",e.editMode?"Actualizar":"Guardar"," ")}}function mM(n,i){if(n&1&&(d(0,"mat-option",52),h(1),u()),n&2){let e=i.$implicit;_("value",e.id),p(),Zr(" ",e.titulo," - ",e.clienteNombre," ",e.clienteApellido," ")}}function hM(n,i){n&1&&(d(0,"mat-option",53),h(1," No hay casos sin factura pendiente o pagada "),u())}function fM(n,i){if(n&1){let e=De();d(0,"div",37)(1,"mat-card",38)(2,"mat-card-title"),h(3,"Factura Autom\xE1tica"),u(),d(4,"mat-card-subtitle"),h(5,"Calcula el monto seg\xFAn las horas registradas"),u(),d(6,"mat-card-content")(7,"form",39)(8,"mat-form-field",40)(9,"mat-label"),h(10,"Caso *"),u(),d(11,"mat-select",41),L(12,mM,2,4,"mat-option",42)(13,hM,2,0,"mat-option",43),u(),d(14,"mat-error"),h(15,"Caso es obligatorio"),u()(),d(16,"mat-form-field",40)(17,"mat-label"),h(18,"N\xFAmero de Factura"),u(),T(19,"input",44),d(20,"mat-hint"),h(21,"Dejar vac\xEDo para generar autom\xE1ticamente"),u()(),d(22,"mat-form-field",40)(23,"mat-label"),h(24,"Tarifa por Hora *"),u(),T(25,"input",47),d(26,"mat-hint"),h(27,"Se multiplicar\xE1 por las horas registradas del caso"),u(),d(28,"mat-error"),h(29,"Tarifa por hora es obligatoria"),u()(),d(30,"mat-form-field",40)(31,"mat-label"),h(32,"D\xEDas para vencimiento"),u(),T(33,"input",54),d(34,"mat-hint"),h(35,"D\xEDas hasta el vencimiento (opcional)"),u()()()(),d(36,"mat-card-actions")(37,"button",50),R("click",function(){ee(e);let r=D();return te(r.closeForm())}),h(38,"Cancelar"),u(),d(39,"button",51),R("click",function(){ee(e);let r=D();return te(r.crearFacturaAutomatica())}),h(40," Generar Factura "),u()()()()}if(n&2){let e=D();p(7),_("formGroup",e.autoFacturaForm),p(5),_("ngForOf",e.casosDisponibles),p(),_("ngIf",e.casosDisponibles.length===0),p(26),_("disabled",e.autoFacturaForm.invalid)}}var hd=class n{constructor(i,e,t,r,a,o,s,c){this.facturaService=i;this.casoService=e;this.authService=t;this.registroService=r;this.fb=a;this.snackBar=o;this.cdr=s;this.dialog=c;this.facturaForm=this.fb.group({casoId:["",Ie.required],numeroFactura:["",Ie.required],monto:["",[Ie.required,Ie.min(.01)]],horasTrabajadas:[""],tarifaPorHora:[""],fechaVencimiento:[""],descripcion:[""]}),this.autoFacturaForm=this.fb.group({casoId:["",Ie.required],numeroFactura:[""],tarifaPorHora:["",[Ie.required,Ie.min(.01)]],diasVencimiento:[30]})}facturas=[];casos=[];casosDisponibles=[];casosFiltradosManual=[];displayedColumns=["numeroFactura","cliente","caso","monto","fechaEmision","fechaVencimiento","estado","acciones"];loading=!0;showForm=!1;showAutoForm=!1;editMode=!1;selectedFacturaId=null;facturaForm;autoFacturaForm;estados=Gv.filter(i=>i!=="VENCIDA");casosConTimerActivoIds=new Set;casosConRegistrosDisponibles=new Set;ngOnInit(){this.loadCasos(),this.loadFacturas(),this.cargarCasosConTimerActivo(),this.cargarCasosConRegistrosDisponibles()}cargarCasosConRegistrosDisponibles(){this.registroService.getRegistros().subscribe({next:i=>{console.log("\u{1F4CB} Registros obtenidos:",i);let e=i.filter(t=>t.estadoTimer==="FINALIZADO"&&!t.facturaId);console.log("\u2705 Registros disponibles (FINALIZADO y sin factura):",e),this.casosConRegistrosDisponibles=new Set(e.map(t=>t.casoId)),console.log("\u{1F511} IDs de casos con registros disponibles:",this.casosConRegistrosDisponibles),this.actualizarCasosDisponibles()},error:i=>{console.error("\u274C Error al cargar registros:",i),this.casosConRegistrosDisponibles=new Set,this.actualizarCasosDisponibles()}})}actualizarCasosDisponibles(){let e=this.casos.filter(t=>t.estado!=="CERRADO").filter(t=>this.casosConRegistrosDisponibles.has(t.id));this.facturas.length===0?this.casosDisponibles=e.filter(t=>!this.casosConTimerActivoIds.has(t.id)):this.casosDisponibles=e.filter(t=>!this.facturas.some(a=>a.casoId===t.id&&(a.estado==="PENDIENTE"||a.estado==="PAGADA"))&&!this.casosConTimerActivoIds.has(t.id)),console.log("\u{1F4CB} Casos disponibles para facturar:",this.casosDisponibles.map(t=>t.titulo)),this.editMode||(this.casosFiltradosManual=[...this.casosDisponibles]),this.cdr.detectChanges()}cargarCasosConTimerActivo(){this.facturaService.getCasosConTimerActivo().subscribe({next:i=>{this.casosConTimerActivoIds=new Set(i),this.actualizarCasosDisponibles()},error:i=>console.error("Error al cargar casos con timer activo:",i)})}loadCasos(){this.casoService.getCasos().subscribe({next:i=>{this.casos=Array.isArray(i)?i:i?.content||[],this.actualizarCasosDisponibles(),this.cdr.detectChanges()},error:i=>{console.error("Error al cargar casos:",i)}})}loadFacturas(i){if(!this.authService.getToken()){this.authService.logout(),window.location.href="/login";return}this.loading=!0,this.cdr.detectChanges(),this.facturaService.getFacturas().subscribe({next:t=>{console.log("\u{1F4E6} Facturas recibidas:",t),this.facturas=Array.isArray(t)?t:t?.content||[],this.actualizarCasosDisponibles(),this.loading=!1,this.cdr.detectChanges(),i&&i()},error:t=>{console.error("\u274C Error al cargar facturas:",t),this.snackBar.open("Error al cargar facturas","Cerrar",{duration:3e3}),this.loading=!1,this.cdr.detectChanges(),(t.status===401||t.status===403)&&(this.authService.logout(),window.location.href="/login"),i&&i()}})}openForm(){this.editMode=!1,this.showForm=!0,this.showAutoForm=!1,this.selectedFacturaId=null,this.facturaForm.reset({casoId:"",numeroFactura:"",monto:"",horasTrabajadas:"",tarifaPorHora:"",fechaVencimiento:"",descripcion:""}),this.casosFiltradosManual=[...this.casosDisponibles],this.cdr.detectChanges()}openAutoForm(){this.showAutoForm=!0,this.showForm=!1,this.cargarCasosConRegistrosDisponibles(),this.autoFacturaForm.reset({casoId:"",numeroFactura:"",tarifaPorHora:"",diasVencimiento:30})}closeForm(){this.showForm=!1,this.showAutoForm=!1,this.facturaForm.reset(),this.autoFacturaForm.reset(),this.casosFiltradosManual=[]}editFactura(i){this.editMode=!0,this.selectedFacturaId=i.id,this.showForm=!0,this.showAutoForm=!1;let e=this.casos.find(a=>a.id===i.casoId),t=[...this.casosDisponibles];e&&!t.some(a=>a.id===e.id)?this.casosFiltradosManual=[e,...t]:this.casosFiltradosManual=[...t];let r="";if(i.fechaVencimiento){let a=new Date(i.fechaVencimiento);r=`${a.getFullYear()}-${String(a.getMonth()+1).padStart(2,"0")}-${String(a.getDate()).padStart(2,"0")}T${String(a.getHours()).padStart(2,"0")}:${String(a.getMinutes()).padStart(2,"0")}`}this.facturaForm.patchValue({casoId:i.casoId,numeroFactura:i.numeroFactura,monto:i.monto,horasTrabajadas:i.horasTrabajadas,tarifaPorHora:i.tarifaPorHora,fechaVencimiento:r,descripcion:i.descripcion}),this.cdr.detectChanges()}saveFactura(){if(this.facturaForm.invalid)return;this.loading=!0;let i=this.facturaForm.value,e=i.casoId;this.editMode&&this.selectedFacturaId?this.facturaService.updateFactura(this.selectedFacturaId,i).subscribe({next:()=>{this.snackBar.open("Factura actualizada","Cerrar",{duration:3e3}),this.loadFacturas(()=>{this.actualizarEstadoCasoPorFacturas(e),this.loadCasos()}),this.closeForm()},error:t=>{let r=t.error?.message||"Error al actualizar factura";this.snackBar.open(r,"Cerrar",{duration:3e3}),this.loading=!1}}):this.facturaService.createFactura(i).subscribe({next:()=>{this.snackBar.open("Factura creada","Cerrar",{duration:3e3}),this.loadFacturas(()=>{this.actualizarEstadoCasoPorFacturas(e),this.loadCasos()}),this.closeForm(),this.loading=!1},error:t=>{let r=t.error?.message||"Error al crear factura";this.snackBar.open(r,"Cerrar",{duration:3e3}),this.loading=!1}})}crearFacturaAutomatica(){if(this.autoFacturaForm.invalid)return;this.loading=!0,this.cdr.detectChanges();let{casoId:i,numeroFactura:e,tarifaPorHora:t,diasVencimiento:r}=this.autoFacturaForm.value;this.facturaService.createFacturaAutomatica(i,e,t,r).subscribe({next:()=>{this.snackBar.open("Factura autom\xE1tica creada","Cerrar",{duration:3e3}),this.loadFacturas(()=>{this.actualizarEstadoCasoPorFacturas(i),this.loadCasos()}),this.closeForm(),this.loading=!1,this.cdr.detectChanges()},error:a=>{let o=a.error?.message||"Error al crear factura autom\xE1tica";o.includes("No hay registros de tiempo no facturados")?this.snackBar.open("El caso seleccionado no tiene horas registradas sin facturar. Inicie el timer o genere una factura manual.","Cerrar",{duration:6e3}):this.snackBar.open(o,"Cerrar",{duration:3e3}),this.loading=!1,this.cdr.detectChanges()}})}estaVencida(i){if(!i.fechaVencimiento||i.estado==="PAGADA"||i.estado==="CANCELADA")return!1;let e=new Date;return new Date(i.fechaVencimiento)<e}getEstadoMostrar(i){return this.estaVencida(i)?"VENCIDA":i.estado}cancelarFactura(i){let e=this.facturas.find(t=>t.id===i);e&&this.facturaService.cancelarFactura(i).subscribe({next:()=>{this.snackBar.open("Factura cancelada correctamente","Cerrar",{duration:3e3}),this.loadFacturas(()=>{this.actualizarEstadoCasoPorFacturas(e.casoId),this.loadCasos()})},error:t=>{let r=t.error?.message||"Error al cancelar la factura";this.snackBar.open(r,"Cerrar",{duration:5e3})}})}deleteFactura(i){let e=this.facturas.find(r=>r.id===i);if(e?.estado==="PAGADA"){this.snackBar.open('No se puede eliminar una factura pagada. Use la opci\xF3n "Cancelar" si es necesario.',"Cerrar",{duration:4e3});return}this.dialog.open(Si,{width:"400px",data:{title:"Confirmar eliminaci\xF3n",message:"\xBFEst\xE1s seguro de eliminar esta factura? Esta acci\xF3n no se puede deshacer.",confirmText:"Eliminar",cancelText:"Cancelar"}}).afterClosed().subscribe(r=>{r&&(this.loading=!0,this.facturaService.deleteFactura(i).subscribe({next:()=>{this.snackBar.open("Factura eliminada","Cerrar",{duration:3e3}),this.loadFacturas(()=>{e&&this.actualizarEstadoCasoPorFacturas(e.casoId),this.loadCasos()}),this.loading=!1},error:a=>{let o=a.error?.message||"Error al eliminar factura";this.snackBar.open(o,"Cerrar",{duration:3e3}),this.loading=!1}}))})}formatFecha(i){return i?new Date(i).toLocaleString():"-"}getNombreCaso(i){let e=this.casos.find(t=>t.id===i);return e?e.titulo:"Cargando..."}getMontoTotal(){return this.facturas.reduce((i,e)=>i+(e.monto||0),0)}pagarFactura(i){this.dialog.open(md,{width:"400px",data:{facturaId:i.id}}).afterClosed().subscribe(t=>{t&&this.loadFacturas(()=>{this.actualizarEstadoCasoPorFacturas(i.casoId),this.loadCasos()})})}actualizarEstadoCasoPorFacturas(i){let t=this.facturas.filter(a=>a.casoId===i&&a.estado!=="CANCELADA").length>0?"CERRADO":"ACTIVO",r=this.casos.find(a=>a.id===i);r&&r.estado!==t&&(this.casoService.cambiarEstado(i,t).subscribe({next:()=>console.log(`\u2705 Caso ${i} ahora en estado ${t}`),error:a=>console.error(`\u274C Error al actualizar caso ${i}:`,a)}),this.actualizarCasosDisponibles(),this.cdr.detectChanges())}static \u0275fac=function(e){return new(e||n)(k(Eo),k(Lr),k(Dt),k(wo),k(xn),k(un),k(Ee),k(ii))};static \u0275cmp=N({type:n,selectors:[["app-facturas"]],decls:20,vars:6,consts:[[1,"container"],["mat-raised-button","","color","accent",1,"add-button",3,"click"],["mat-raised-button","","color","primary",1,"add-button",3,"click"],["class","spinner-container",4,"ngIf"],["class","summary",4,"ngIf"],["mat-table","",3,"dataSource",4,"ngIf"],["class","empty-state",4,"ngIf"],["class","modal-overlay",4,"ngIf"],[1,"spinner-container"],["diameter","40"],[1,"summary"],["mat-table","",3,"dataSource"],["matColumnDef","numeroFactura"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","cliente"],["matColumnDef","caso"],["matColumnDef","monto"],["matColumnDef","fechaEmision"],["matColumnDef","fechaVencimiento"],["matColumnDef","estado"],["matColumnDef","acciones"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",3,"fila-pendiente","fila-pagada","fila-vencida","fila-cancelada",4,"matRowDef","matRowDefColumns"],["mat-header-cell",""],["mat-cell",""],[3,"ngClass"],["mat-icon-button","","color","primary","matTooltip","Registrar pago",3,"click",4,"ngIf"],["mat-icon-button","","color","warn",3,"click",4,"ngIf"],["mat-icon-button","","color","accent","matTooltip","Cancelar factura (libera los registros de tiempo)",3,"click",4,"ngIf"],["mat-icon-button","","color","primary","matTooltip","Registrar pago",3,"click"],["mat-icon-button","","color","warn",3,"click"],["mat-icon-button","","color","accent","matTooltip","Cancelar factura (libera los registros de tiempo)",3,"click"],["mat-header-row",""],["mat-row",""],[1,"empty-state"],["mat-raised-button","","color","primary",3,"click"],[1,"modal-overlay"],[1,"form-card"],[3,"formGroup"],["appearance","outline",1,"full-width"],["formControlName","casoId"],[3,"value",4,"ngFor","ngForOf"],["disabled","",4,"ngIf"],["matInput","","formControlName","numeroFactura"],["matInput","","type","number","step","0.01","formControlName","monto"],["matInput","","type","number","step","0.5","formControlName","horasTrabajadas"],["matInput","","type","number","step","0.01","formControlName","tarifaPorHora"],["matInput","","type","datetime-local","formControlName","fechaVencimiento"],["matInput","","rows","3","formControlName","descripcion"],["mat-button","",3,"click"],["mat-raised-button","","color","primary",3,"click","disabled"],[3,"value"],["disabled",""],["matInput","","type","number","formControlName","diasVencimiento"]],template:function(e,t){e&1&&(d(0,"div",0)(1,"mat-card")(2,"mat-card-title"),h(3," Facturas "),d(4,"div")(5,"button",1),R("click",function(){return t.openAutoForm()}),d(6,"mat-icon"),h(7,"auto_awesome"),u(),h(8," Factura Autom\xE1tica "),u(),d(9,"button",2),R("click",function(){return t.openForm()}),d(10,"mat-icon"),h(11,"add"),u(),h(12," Nueva Factura "),u()()(),d(13,"mat-card-content"),L(14,VS,2,0,"div",3)(15,BS,5,6,"div",4)(16,sM,27,3,"table",5)(17,lM,5,0,"div",6),u()(),L(18,uM,49,6,"div",7)(19,fM,41,4,"div",7),u()),e&2&&(p(14),_("ngIf",t.loading),p(),_("ngIf",!t.loading&&t.facturas.length>0),p(),_("ngIf",!t.loading&&t.facturas.length>0),p(),_("ngIf",!t.loading&&t.facturas.length===0),p(),_("ngIf",t.showForm),p(),_("ngIf",t.showAutoForm))},dependencies:[yt,Jr,tr,Yt,qt,_i,En,zt,tm,Qt,wn,Sn,Ft,ln,Rr,br,Cr,xr,Dr,yr,Sr,wr,Er,Mr,Ar,ft,mt,Fn,Tr,kr,Tn,Mn,kn,Rn,mr,An,On,Mt,Ut,Vt,Ss,dn,en,Jt,Nr,Pr,Nn,Co,Do,Fr,Ir,Pn,Wd],styles:[".container[_ngcontent-%COMP%]{padding:20px;max-width:1400px;margin:0 auto}mat-card-title[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;margin-bottom:20px;flex-wrap:wrap;gap:10px}.add-button[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;margin-left:8px}.summary[_ngcontent-%COMP%]{background:#e3f2fd;padding:12px 16px;margin-bottom:20px;border-radius:8px;font-size:16px}.spinner-container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;height:200px}.empty-state[_ngcontent-%COMP%]{text-align:center;padding:40px;color:#666}.empty-state[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin:0 8px}.modal-overlay[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100%;height:100%;background-color:#00000080;display:flex;justify-content:center;align-items:center;z-index:1000}.form-card[_ngcontent-%COMP%]{width:100%;max-width:500px;max-height:90vh;overflow-y:auto}.full-width[_ngcontent-%COMP%]{width:100%;margin-bottom:16px}mat-card-actions[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;gap:8px;padding:16px}table[_ngcontent-%COMP%]{width:100%}.mat-column-numeroFactura[_ngcontent-%COMP%]{width:120px}.mat-column-cliente[_ngcontent-%COMP%]{width:180px}.mat-column-caso[_ngcontent-%COMP%]{width:200px}.mat-column-monto[_ngcontent-%COMP%]{width:110px;text-align:right}.mat-column-fechaEmision[_ngcontent-%COMP%], .mat-column-fechaVencimiento[_ngcontent-%COMP%]{width:160px}.mat-column-estado[_ngcontent-%COMP%]{width:130px}.mat-column-acciones[_ngcontent-%COMP%]{width:80px;text-align:center}mat-card-subtitle[_ngcontent-%COMP%]{margin-bottom:16px;color:#666}.estado-pendiente[_ngcontent-%COMP%]{color:#ff9800;font-weight:700}.estado-pagada[_ngcontent-%COMP%]{color:#4caf50;font-weight:700}.estado-vencida[_ngcontent-%COMP%]{color:#f44336;font-weight:700}.estado-cancelada[_ngcontent-%COMP%]{color:#9e9e9e;font-weight:700}.fila-pendiente[_ngcontent-%COMP%]{background-color:#fff3e0}.fila-pagada[_ngcontent-%COMP%]{background-color:#e8f5e9}.fila-vencida[_ngcontent-%COMP%]{background-color:#ffebee}.fila-cancelada[_ngcontent-%COMP%]{background-color:#f5f5f5}"]})};var Da=class n{constructor(i,e){this.authService=i;this.router=e}canActivate(){return this.authService.isAuthenticated()?!0:(this.router.navigate(["/login"]),!1)}static \u0275fac=function(e){return new(e||n)(G(Dt),G(Ct))};static \u0275prov=w({token:n,factory:n.\u0275fac,providedIn:"root"})};var Yv=[{path:"login",component:Uc},{path:"register",component:Hc},{path:"clientes",component:ad,canActivate:[Da]},{path:"casos",component:sd,canActivate:[Da]},{path:"registros-tiempo",component:ud,canActivate:[Da]},{path:"facturas",component:hd,canActivate:[Da]},{path:"",redirectTo:"/login",pathMatch:"full"},{path:"**",redirectTo:"/login"}];var qv=(n,i)=>{console.log("\u{1F535} INTERCEPTOR EJECUTADO - URL:",n.url);let e=l(Dt),t=l(Ct);if(["/auth/login","/auth/register"].some(s=>n.url.includes(s)))return i(n);let o=e.getToken();if(o){if(!o.startsWith("eyJ"))return console.warn("Token con formato inv\xE1lido, limpiando..."),e.logout(),t.navigate(["/login"]),i(n);let c=n.clone({headers:n.headers.set("Authorization",`Bearer ${o}`)});return i(c).pipe(Qi(m=>{let f=m.error?.message||m.message||"";return f.includes("timer activo")||f.includes("Ya tiene un registro de tiempo activo")?(console.warn("\u26A0\uFE0F Error de negocio (timer activo):",f),ki(()=>m)):f.includes("Ya tiene un registro de tiempo activo")?(console.warn("\u26A0\uFE0F Error de negocio:",f),ki(()=>m)):m.status===403&&f.includes("acceso")?(console.warn("\u26A0\uFE0F Error de acceso:",f),ki(()=>m)):(m.status===401&&(console.warn("Token inv\xE1lido o expirado, redirigiendo a login..."),e.logout(),t.navigate(["/login"])),ki(()=>m))}))}return i(n)};var Zv={providers:[zu(Yv),du(uu([qv])),ng()]};var pM=["*",[["mat-toolbar-row"]]],gM=["*","mat-toolbar-row"],_M=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=A({type:n,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"]})}return n})(),Kv=(()=>{class n{_elementRef=l(U);_platform=l(xe);_document=l(X);color;_toolbarRows;constructor(){}ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){this._toolbarRows.length}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=N({type:n,selectors:[["mat-toolbar"]],contentQueries:function(t,r,a){if(t&1&&gn(a,_M,5),t&2){let o;re(o=ae())&&(r._toolbarRows=o)}},hostAttrs:[1,"mat-toolbar"],hostVars:6,hostBindings:function(t,r){t&2&&(It(r.color?"mat-"+r.color:""),J("mat-toolbar-multiple-rows",r._toolbarRows.length>0)("mat-toolbar-single-row",r._toolbarRows.length===0))},inputs:{color:"color"},exportAs:["matToolbar"],ngContentSelectors:gM,decls:2,vars:0,template:function(t,r){t&1&&(Qe(pM),ve(0),ve(1,1))},styles:[`.mat-toolbar {
  background: var(--mat-toolbar-container-background-color, var(--mat-sys-surface));
  color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
}
.mat-toolbar, .mat-toolbar h1, .mat-toolbar h2, .mat-toolbar h3, .mat-toolbar h4, .mat-toolbar h5, .mat-toolbar h6 {
  font-family: var(--mat-toolbar-title-text-font, var(--mat-sys-title-large-font));
  font-size: var(--mat-toolbar-title-text-size, var(--mat-sys-title-large-size));
  line-height: var(--mat-toolbar-title-text-line-height, var(--mat-sys-title-large-line-height));
  font-weight: var(--mat-toolbar-title-text-weight, var(--mat-sys-title-large-weight));
  letter-spacing: var(--mat-toolbar-title-text-tracking, var(--mat-sys-title-large-tracking));
  margin: 0;
}
@media (forced-colors: active) {
  .mat-toolbar {
    outline: solid 1px;
  }
}
.mat-toolbar .mat-form-field-underline,
.mat-toolbar .mat-form-field-ripple,
.mat-toolbar .mat-focused .mat-form-field-ripple {
  background-color: currentColor;
}
.mat-toolbar .mat-form-field-label,
.mat-toolbar .mat-focused .mat-form-field-label,
.mat-toolbar .mat-select-value,
.mat-toolbar .mat-select-arrow,
.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow {
  color: inherit;
}
.mat-toolbar .mat-input-element {
  caret-color: currentColor;
}
.mat-toolbar .mat-mdc-button-base.mat-mdc-button-base.mat-unthemed {
  --mat-button-text-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
  --mat-button-outlined-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
}

.mat-toolbar-row, .mat-toolbar-single-row {
  display: flex;
  box-sizing: border-box;
  padding: 0 16px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  white-space: nowrap;
  height: var(--mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-row, .mat-toolbar-single-row {
    height: var(--mat-toolbar-mobile-height, 56px);
  }
}

.mat-toolbar-multiple-rows {
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  width: 100%;
  min-height: var(--mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-multiple-rows {
    min-height: var(--mat-toolbar-mobile-height, 56px);
  }
}
`],encapsulation:2,changeDetection:0})}return n})();var Xv=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=q({type:n});static \u0275inj=Y({imports:[Ve]})}return n})();function bM(n,i){if(n&1){let e=De();Pe(0),d(1,"button",3),h(2,"Clientes"),u(),d(3,"button",4),h(4,"Casos"),u(),d(5,"button",5),h(6,"Tiempo"),u(),d(7,"button",6),h(8,"Facturas"),u(),d(9,"button",7),R("click",function(){ee(e);let r=D();return te(r.logout())}),h(10,"Salir"),u(),Ne()}}function yM(n,i){n&1&&(Pe(0),d(1,"button",8),h(2,"Login"),u(),d(3,"button",9),h(4,"Registro"),u(),Ne())}var fd=class n{constructor(i,e){this.authService=i;this.router=e}title="lextiming-frontend";logout(){this.authService.logout(),this.router.navigate(["/login"])}ngOnInit(){this.authService.isAuthenticated()||this.router.navigate(["/login"])}static \u0275fac=function(e){return new(e||n)(k(Dt),k(Ct))};static \u0275cmp=N({type:n,selectors:[["app-root"]],decls:7,vars:2,consts:[["color","primary"],[1,"spacer"],[4,"ngIf"],["mat-button","","routerLink","/clientes"],["mat-button","","routerLink","/casos"],["mat-button","","routerLink","/registros-tiempo"],["mat-button","","routerLink","/facturas"],["mat-button","",3,"click"],["mat-button","","routerLink","/login"],["mat-button","","routerLink","/register"]],template:function(e,t){e&1&&(d(0,"mat-toolbar",0)(1,"span"),h(2,"LexTiming"),u(),T(3,"span",1),L(4,bM,11,0,"ng-container",2)(5,yM,5,0,"ng-container",2),u(),T(6,"router-outlet")),e&2&&(p(4),_("ngIf",t.authService.isAuthenticated()),p(),_("ngIf",!t.authService.isAuthenticated()))},dependencies:[yt,Yt,qt,is,cr,Xv,Kv,ft,mt],styles:[".spacer[_ngcontent-%COMP%]{flex:1 1 auto}"]})};var CM=Object.defineProperty,DM=Object.defineProperties,wM=Object.getOwnPropertyDescriptors,Qv=Object.getOwnPropertySymbols,EM=Object.prototype.hasOwnProperty,xM=Object.prototype.propertyIsEnumerable,ph=(n,i,e)=>i in n?CM(n,i,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[i]=e,Jv=(n,i)=>{for(var e in i||(i={}))EM.call(i,e)&&ph(n,e,i[e]);if(Qv)for(var e of Qv(i))xM.call(i,e)&&ph(n,e,i[e]);return n},SM=(n,i)=>DM(n,wM(i)),Ce=(n,i,e)=>(ph(n,typeof i!="symbol"?i+"":i,e),e),Mi=globalThis;function Vn(n){return(Mi.__Zone_symbol_prefix||"__zone_symbol__")+n}function MM(){let n=Mi.performance;function i(Ze){n&&n.mark&&n.mark(Ze)}function e(Ze,y){n&&n.measure&&n.measure(Ze,y)}i("Zone");let t=class gh{constructor(y,b){Ce(this,"_parent"),Ce(this,"_name"),Ce(this,"_properties"),Ce(this,"_zoneDelegate"),this._parent=y,this._name=b?b.name||"unnamed":"<root>",this._properties=b&&b.properties||{},this._zoneDelegate=new o(this,this._parent&&this._parent._zoneDelegate,b)}static assertZonePatched(){if(Mi.Promise!==be.ZoneAwarePromise)throw new Error("Zone.js has detected that ZoneAwarePromise `(window|global).Promise` has been overwritten.\nMost likely cause is that a Promise polyfill has been loaded after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. If you must load one, do so before loading zone.js.)")}static get root(){let y=gh.current;for(;y.parent;)y=y.parent;return y}static get current(){return me.zone}static get currentTask(){return $t}static __load_patch(y,b,v=!1){if(be.hasOwnProperty(y)){let ue=Mi[Vn("forceDuplicateZoneCheck")]===!0;if(!v&&ue)throw Error("Already loaded patch: "+y)}else if(!Mi["__Zone_disable_"+y]){let ue="Zone:"+y;i(ue),be[y]=b(Mi,gh,Fe),e(ue,ue)}}get parent(){return this._parent}get name(){return this._name}get(y){let b=this.getZoneWith(y);if(b)return b._properties[y]}getZoneWith(y){let b=this;for(;b;){if(b._properties.hasOwnProperty(y))return b;b=b._parent}return null}fork(y){if(!y)throw new Error("ZoneSpec required!");return this._zoneDelegate.fork(this,y)}wrap(y,b){if(typeof y!="function")throw new Error("Expecting function got: "+y);let v=this._zoneDelegate.intercept(this,y,b),ue=this;return function(){return ue.runGuarded(v,this,arguments,b)}}run(y,b,v,ue){me={parent:me,zone:this};try{return this._zoneDelegate.invoke(this,y,b,v,ue)}finally{me=me.parent}}runGuarded(y,b=null,v,ue){me={parent:me,zone:this};try{try{return this._zoneDelegate.invoke(this,y,b,v,ue)}catch(Ke){if(this._zoneDelegate.handleError(this,Ke))throw Ke}}finally{me=me.parent}}runTask(y,b,v){if(y.zone!=this)throw new Error("A task can only be run in the zone of creation! (Creation: "+(y.zone||$).name+"; Execution: "+this.name+")");let ue=y,{type:Ke,data:{isPeriodic:Le=!1,isRefreshable:jn=!1}={}}=y;if(y.state===O&&(Ke===we||Ke===ct))return;let Ai=y.state!=Me;Ai&&ue._transitionTo(Me,he);let Ri=$t;$t=ue,me={parent:me,zone:this};try{Ke==ct&&y.data&&!Le&&!jn&&(y.cancelFn=void 0);try{return this._zoneDelegate.invokeTask(this,ue,b,v)}catch(zn){if(this._zoneDelegate.handleError(this,zn))throw zn}}finally{let zn=y.state;if(zn!==O&&zn!==ze)if(Ke==we||Le||jn&&zn===F)Ai&&ue._transitionTo(he,Me,F);else{let V=ue._zoneDelegates;this._updateTaskCount(ue,-1),Ai&&ue._transitionTo(O,Me,O),jn&&(ue._zoneDelegates=V)}me=me.parent,$t=Ri}}scheduleTask(y){if(y.zone&&y.zone!==this){let v=this;for(;v;){if(v===y.zone)throw Error(`can not reschedule task to ${this.name} which is descendants of the original zone ${y.zone.name}`);v=v.parent}}y._transitionTo(F,O);let b=[];y._zoneDelegates=b,y._zone=this;try{y=this._zoneDelegate.scheduleTask(this,y)}catch(v){throw y._transitionTo(ze,F,O),this._zoneDelegate.handleError(this,v),v}return y._zoneDelegates===b&&this._updateTaskCount(y,1),y.state==F&&y._transitionTo(he,F),y}scheduleMicroTask(y,b,v,ue){return this.scheduleTask(new s(se,y,b,v,ue,void 0))}scheduleMacroTask(y,b,v,ue,Ke){return this.scheduleTask(new s(ct,y,b,v,ue,Ke))}scheduleEventTask(y,b,v,ue,Ke){return this.scheduleTask(new s(we,y,b,v,ue,Ke))}cancelTask(y){if(y.zone!=this)throw new Error("A task can only be cancelled in the zone of creation! (Creation: "+(y.zone||$).name+"; Execution: "+this.name+")");if(!(y.state!==he&&y.state!==Me)){y._transitionTo($e,he,Me);try{this._zoneDelegate.cancelTask(this,y)}catch(b){throw y._transitionTo(ze,$e),this._zoneDelegate.handleError(this,b),b}return this._updateTaskCount(y,-1),y._transitionTo(O,$e),y.runCount=-1,y}}_updateTaskCount(y,b){let v=y._zoneDelegates;b==-1&&(y._zoneDelegates=null);for(let ue=0;ue<v.length;ue++)v[ue]._updateTaskCount(y.type,b)}};Ce(t,"__symbol__",Vn);let r=t,a={name:"",onHasTask:(Ze,y,b,v)=>Ze.hasTask(b,v),onScheduleTask:(Ze,y,b,v)=>Ze.scheduleTask(b,v),onInvokeTask:(Ze,y,b,v,ue,Ke)=>Ze.invokeTask(b,v,ue,Ke),onCancelTask:(Ze,y,b,v)=>Ze.cancelTask(b,v)};class o{constructor(y,b,v){Ce(this,"_zone"),Ce(this,"_taskCounts",{microTask:0,macroTask:0,eventTask:0}),Ce(this,"_parentDelegate"),Ce(this,"_forkDlgt"),Ce(this,"_forkZS"),Ce(this,"_forkCurrZone"),Ce(this,"_interceptDlgt"),Ce(this,"_interceptZS"),Ce(this,"_interceptCurrZone"),Ce(this,"_invokeDlgt"),Ce(this,"_invokeZS"),Ce(this,"_invokeCurrZone"),Ce(this,"_handleErrorDlgt"),Ce(this,"_handleErrorZS"),Ce(this,"_handleErrorCurrZone"),Ce(this,"_scheduleTaskDlgt"),Ce(this,"_scheduleTaskZS"),Ce(this,"_scheduleTaskCurrZone"),Ce(this,"_invokeTaskDlgt"),Ce(this,"_invokeTaskZS"),Ce(this,"_invokeTaskCurrZone"),Ce(this,"_cancelTaskDlgt"),Ce(this,"_cancelTaskZS"),Ce(this,"_cancelTaskCurrZone"),Ce(this,"_hasTaskDlgt"),Ce(this,"_hasTaskDlgtOwner"),Ce(this,"_hasTaskZS"),Ce(this,"_hasTaskCurrZone"),this._zone=y,this._parentDelegate=b,this._forkZS=v&&(v&&v.onFork?v:b._forkZS),this._forkDlgt=v&&(v.onFork?b:b._forkDlgt),this._forkCurrZone=v&&(v.onFork?this._zone:b._forkCurrZone),this._interceptZS=v&&(v.onIntercept?v:b._interceptZS),this._interceptDlgt=v&&(v.onIntercept?b:b._interceptDlgt),this._interceptCurrZone=v&&(v.onIntercept?this._zone:b._interceptCurrZone),this._invokeZS=v&&(v.onInvoke?v:b._invokeZS),this._invokeDlgt=v&&(v.onInvoke?b:b._invokeDlgt),this._invokeCurrZone=v&&(v.onInvoke?this._zone:b._invokeCurrZone),this._handleErrorZS=v&&(v.onHandleError?v:b._handleErrorZS),this._handleErrorDlgt=v&&(v.onHandleError?b:b._handleErrorDlgt),this._handleErrorCurrZone=v&&(v.onHandleError?this._zone:b._handleErrorCurrZone),this._scheduleTaskZS=v&&(v.onScheduleTask?v:b._scheduleTaskZS),this._scheduleTaskDlgt=v&&(v.onScheduleTask?b:b._scheduleTaskDlgt),this._scheduleTaskCurrZone=v&&(v.onScheduleTask?this._zone:b._scheduleTaskCurrZone),this._invokeTaskZS=v&&(v.onInvokeTask?v:b._invokeTaskZS),this._invokeTaskDlgt=v&&(v.onInvokeTask?b:b._invokeTaskDlgt),this._invokeTaskCurrZone=v&&(v.onInvokeTask?this._zone:b._invokeTaskCurrZone),this._cancelTaskZS=v&&(v.onCancelTask?v:b._cancelTaskZS),this._cancelTaskDlgt=v&&(v.onCancelTask?b:b._cancelTaskDlgt),this._cancelTaskCurrZone=v&&(v.onCancelTask?this._zone:b._cancelTaskCurrZone),this._hasTaskZS=null,this._hasTaskDlgt=null,this._hasTaskDlgtOwner=null,this._hasTaskCurrZone=null;let ue=v&&v.onHasTask,Ke=b&&b._hasTaskZS;(ue||Ke)&&(this._hasTaskZS=ue?v:a,this._hasTaskDlgt=b,this._hasTaskDlgtOwner=this,this._hasTaskCurrZone=this._zone,v.onScheduleTask||(this._scheduleTaskZS=a,this._scheduleTaskDlgt=b,this._scheduleTaskCurrZone=this._zone),v.onInvokeTask||(this._invokeTaskZS=a,this._invokeTaskDlgt=b,this._invokeTaskCurrZone=this._zone),v.onCancelTask||(this._cancelTaskZS=a,this._cancelTaskDlgt=b,this._cancelTaskCurrZone=this._zone))}get zone(){return this._zone}fork(y,b){return this._forkZS?this._forkZS.onFork(this._forkDlgt,this.zone,y,b):new r(y,b)}intercept(y,b,v){return this._interceptZS?this._interceptZS.onIntercept(this._interceptDlgt,this._interceptCurrZone,y,b,v):b}invoke(y,b,v,ue,Ke){return this._invokeZS?this._invokeZS.onInvoke(this._invokeDlgt,this._invokeCurrZone,y,b,v,ue,Ke):b.apply(v,ue)}handleError(y,b){return this._handleErrorZS?this._handleErrorZS.onHandleError(this._handleErrorDlgt,this._handleErrorCurrZone,y,b):!0}scheduleTask(y,b){let v=b;if(this._scheduleTaskZS)this._hasTaskZS&&v._zoneDelegates.push(this._hasTaskDlgtOwner),v=this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt,this._scheduleTaskCurrZone,y,b),v||(v=b);else if(b.scheduleFn)b.scheduleFn(b);else if(b.type==se)K(b);else throw new Error("Task is missing scheduleFn.");return v}invokeTask(y,b,v,ue){return this._invokeTaskZS?this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt,this._invokeTaskCurrZone,y,b,v,ue):b.callback.apply(v,ue)}cancelTask(y,b){let v;if(this._cancelTaskZS)v=this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt,this._cancelTaskCurrZone,y,b);else{if(!b.cancelFn)throw Error("Task is not cancelable");v=b.cancelFn(b)}return v}hasTask(y,b){try{this._hasTaskZS&&this._hasTaskZS.onHasTask(this._hasTaskDlgt,this._hasTaskCurrZone,y,b)}catch(v){this.handleError(y,v)}}_updateTaskCount(y,b){let v=this._taskCounts,ue=v[y],Ke=v[y]=ue+b;if(Ke<0)throw new Error("More tasks executed then were scheduled.");if(ue==0||Ke==0){let Le={microTask:v.microTask>0,macroTask:v.macroTask>0,eventTask:v.eventTask>0,change:y};this.hasTask(this._zone,Le)}}}class s{constructor(y,b,v,ue,Ke,Le){if(Ce(this,"type"),Ce(this,"source"),Ce(this,"invoke"),Ce(this,"callback"),Ce(this,"data"),Ce(this,"scheduleFn"),Ce(this,"cancelFn"),Ce(this,"_zone",null),Ce(this,"runCount",0),Ce(this,"_zoneDelegates",null),Ce(this,"_state","notScheduled"),this.type=y,this.source=b,this.data=ue,this.scheduleFn=Ke,this.cancelFn=Le,!v)throw new Error("callback is not defined");this.callback=v;let jn=this;y===we&&ue&&ue.useG?this.invoke=s.invokeTask:this.invoke=function(){return s.invokeTask.call(Mi,jn,this,arguments)}}static invokeTask(y,b,v){y||(y=this),nn++;try{return y.runCount++,y.zone.runTask(y,b,v)}finally{nn==1&&z(),nn--}}get zone(){return this._zone}get state(){return this._state}cancelScheduleRequest(){this._transitionTo(O,F)}_transitionTo(y,b,v){if(this._state===b||this._state===v)this._state=y,y==O&&(this._zoneDelegates=null);else throw new Error(`${this.type} '${this.source}': can not transition to '${y}', expecting state '${b}'${v?" or '"+v+"'":""}, was '${this._state}'.`)}toString(){return this.data&&typeof this.data.handleId<"u"?this.data.handleId.toString():Object.prototype.toString.call(this)}toJSON(){return{type:this.type,state:this.state,source:this.source,zone:this.zone.name,runCount:this.runCount}}}let c=Vn("setTimeout"),m=Vn("Promise"),f=Vn("then"),g=[],E=!1,M;function W(Ze){if(M||Mi[m]&&(M=Mi[m].resolve(0)),M){let y=M[f];y||(y=M.then),y.call(M,Ze)}else Mi[c](Ze,0)}function K(Ze){nn===0&&g.length===0&&W(z),Ze&&g.push(Ze)}function z(){if(!E){for(E=!0;g.length;){let Ze=g;g=[];for(let y=0;y<Ze.length;y++){let b=Ze[y];try{b.zone.runTask(b,null,null)}catch(v){Fe.onUnhandledError(v)}}}Fe.microtaskDrainDone(),E=!1}}let $={name:"NO ZONE"},O="notScheduled",F="scheduling",he="scheduled",Me="running",$e="canceling",ze="unknown",se="microTask",ct="macroTask",we="eventTask",be={},Fe={symbol:Vn,currentZoneFrame:()=>me,onUnhandledError:tt,microtaskDrainDone:tt,scheduleMicroTask:K,showUncaughtError:()=>!r[Vn("ignoreConsoleErrorUncaughtError")],patchEventTarget:()=>[],patchOnProperties:tt,patchMethod:()=>tt,bindArguments:()=>[],patchThen:()=>tt,patchMacroTask:()=>tt,patchEventPrototype:()=>tt,getGlobalObjects:()=>{},ObjectDefineProperty:()=>tt,ObjectGetOwnPropertyDescriptor:()=>{},ObjectCreate:()=>{},ArraySlice:()=>[],patchClass:()=>tt,wrapWithCurrentZone:()=>tt,filterProperties:()=>[],attachOriginToPatched:()=>tt,_redefineProperty:()=>tt,patchCallbacks:()=>tt,nativeScheduleMicroTask:W},me={parent:null,zone:new r(null,null)},$t=null,nn=0;function tt(){}return e("Zone","Zone"),r}function AM(){var n;let i=globalThis,e=i[Vn("forceDuplicateZoneCheck")]===!0;if(i.Zone&&(e||typeof i.Zone.__symbol__!="function"))throw new Error("Zone already loaded.");return(n=i.Zone)!=null||(i.Zone=MM()),i.Zone}var Hs=Object.getOwnPropertyDescriptor,vh=Object.defineProperty,bh=Object.getPrototypeOf,RM=Object.create,kM=Array.prototype.slice,yh="addEventListener",Ch="removeEventListener",hh=Vn(yh),fh=Vn(Ch),Yi="true",qi="false",$s=Vn("");function Dh(n,i){return Zone.current.wrap(n,i)}function wh(n,i,e,t,r){return Zone.current.scheduleMacroTask(n,i,e,t,r)}var qe=Vn,_d=typeof window<"u",vd=_d?window:void 0,At=_d&&vd||globalThis,TM="removeAttribute";function Eh(n,i){for(let e=n.length-1;e>=0;e--)typeof n[e]=="function"&&(n[e]=Dh(n[e],i+"_"+e));return n}function IM(n,i){let e=n.constructor.name;for(let t=0;t<i.length;t++){let r=i[t],a=n[r];if(a){let o=Hs(n,r);if(!ab(o))continue;n[r]=(s=>{let c=function(){return s.apply(this,Eh(arguments,e+"."+r))};return Ki(c,s),c})(a)}}}function ab(n){return n?n.writable===!1?!1:!(typeof n.get=="function"&&typeof n.set>"u"):!0}var ob=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope,bd=!("nw"in At)&&typeof At.process<"u"&&At.process.toString()==="[object process]",xh=!bd&&!ob&&!!(_d&&vd.HTMLElement),sb=typeof At.process<"u"&&At.process.toString()==="[object process]"&&!ob&&!!(_d&&vd.HTMLElement),gd={},FM=qe("enable_beforeunload"),eb=function(n){if(n=n||At.event,!n)return;let i=gd[n.type];i||(i=gd[n.type]=qe("ON_PROPERTY"+n.type));let e=this||n.target||At,t=e[i],r;if(xh&&e===vd&&n.type==="error"){let a=n;r=t&&t.call(this,a.message,a.filename,a.lineno,a.colno,a.error),r===!0&&n.preventDefault()}else r=t&&t.apply(this,arguments),n.type==="beforeunload"&&At[FM]&&typeof r=="string"?n.returnValue=r:r!=null&&!r&&n.preventDefault();return r};function tb(n,i,e){let t=Hs(n,i);if(!t&&e&&Hs(e,i)&&(t={enumerable:!0,configurable:!0}),!t||!t.configurable)return;let r=qe("on"+i+"patched");if(n.hasOwnProperty(r)&&n[r])return;delete t.writable,delete t.value;let a=t.get,o=t.set,s=i.slice(2),c=gd[s];c||(c=gd[s]=qe("ON_PROPERTY"+s)),t.set=function(m){let f=this;if(!f&&n===At&&(f=At),!f)return;typeof f[c]=="function"&&f.removeEventListener(s,eb),o?.call(f,null),f[c]=m,typeof m=="function"&&f.addEventListener(s,eb,!1)},t.get=function(){let m=this;if(!m&&n===At&&(m=At),!m)return null;let f=m[c];if(f)return f;if(a){let g=a.call(this);if(g)return t.set.call(this,g),typeof m[TM]=="function"&&m.removeAttribute(i),g}return null},vh(n,i,t),n[r]=!0}function lb(n,i,e){if(i)for(let t=0;t<i.length;t++)tb(n,"on"+i[t],e);else{let t=[];for(let r in n)r.slice(0,2)=="on"&&t.push(r);for(let r=0;r<t.length;r++)tb(n,t[r],e)}}var oi=qe("originalInstance");function Us(n){let i=At[n];if(!i)return;At[qe(n)]=i,At[n]=function(){let r=Eh(arguments,n);switch(r.length){case 0:this[oi]=new i;break;case 1:this[oi]=new i(r[0]);break;case 2:this[oi]=new i(r[0],r[1]);break;case 3:this[oi]=new i(r[0],r[1],r[2]);break;case 4:this[oi]=new i(r[0],r[1],r[2],r[3]);break;default:throw new Error("Arg list too long.")}},Ki(At[n],i);let e=new i(function(){}),t;for(t in e)n==="XMLHttpRequest"&&t==="responseBlob"||(function(r){typeof e[r]=="function"?At[n].prototype[r]=function(){return this[oi][r].apply(this[oi],arguments)}:vh(At[n].prototype,r,{set:function(a){typeof a=="function"?(this[oi][r]=Dh(a,n+"."+r),Ki(this[oi][r],a)):this[oi][r]=a},get:function(){return this[oi][r]}})})(t);for(t in i)t!=="prototype"&&i.hasOwnProperty(t)&&(At[n][t]=i[t])}function OM(n,i){if(typeof Object.getOwnPropertySymbols!="function")return;Object.getOwnPropertySymbols(n).forEach(t=>{let r=Object.getOwnPropertyDescriptor(n,t);Object.defineProperty(i,t,{get:function(){return n[t]},set:function(a){r&&(!r.writable||typeof r.set!="function")||(n[t]=a)},enumerable:r?r.enumerable:!0,configurable:r?r.configurable:!0})})}var PM=!1;function Zi(n,i,e){let t=n;for(;t&&!t.hasOwnProperty(i);)t=bh(t);!t&&n[i]&&(t=n);let r=qe(i),a=null;if(t&&(!(a=t[r])||!t.hasOwnProperty(r))){a=t[r]=t[i];let o=t&&Hs(t,i);if(ab(o)){let s=e(a,r,i);t[i]=function(){return s(this,arguments)},Ki(t[i],a),PM&&OM(a,t[i])}}return a}function NM(n,i,e){let t=null;function r(a){let o=a.data;return o.args[o.cbIdx]=function(){a.invoke.apply(this,arguments)},t.apply(o.target,o.args),a}t=Zi(n,i,a=>function(o,s){let c=e(o,s);return c.cbIdx>=0&&typeof s[c.cbIdx]=="function"?wh(c.name,s[c.cbIdx],c,r):a.apply(o,s)})}function Ki(n,i){n[qe("OriginalDelegate")]=i}function nb(n){return typeof n=="function"}function ib(n){return typeof n=="number"}var LM={useG:!0},Bn={},cb={},db=new RegExp("^"+$s+"(\\w+)(true|false)$"),ub=qe("propagationStopped");function mb(n,i){let e=(i?i(n):n)+qi,t=(i?i(n):n)+Yi,r=$s+e,a=$s+t;Bn[n]={},Bn[n][qi]=r,Bn[n][Yi]=a}function VM(n,i,e,t){let r=t&&t.add||yh,a=t&&t.rm||Ch,o=t&&t.listeners||"eventListeners",s=t&&t.rmAll||"removeAllListeners",c=qe(r),m="."+r+":",f="prependListener",g="."+f+":",E=function(O,F,he){if(O.isRemoved)return;let Me=O.callback;typeof Me=="object"&&Me.handleEvent&&(O.callback=se=>Me.handleEvent(se),O.originalDelegate=Me);let $e;try{O.invoke(O,F,[he])}catch(se){$e=se}let ze=O.options;if(ze&&typeof ze=="object"&&ze.once){let se=O.originalDelegate?O.originalDelegate:O.callback;F[a].call(F,he.type,se,ze)}return $e};function M(O,F,he){if(F=F||n.event,!F)return;let Me=O||F.target||n,$e=Me[Bn[F.type][he?Yi:qi]];if($e){let ze=[];if($e.length===1){let se=E($e[0],Me,F);se&&ze.push(se)}else{let se=$e.slice();for(let ct=0;ct<se.length&&!(F&&F[ub]===!0);ct++){let we=E(se[ct],Me,F);we&&ze.push(we)}}if(ze.length===1)throw ze[0];for(let se=0;se<ze.length;se++){let ct=ze[se];i.nativeScheduleMicroTask(()=>{throw ct})}}}let W=function(O){return M(this,O,!1)},K=function(O){return M(this,O,!0)};function z(O,F){if(!O)return!1;let he=!0;F&&F.useG!==void 0&&(he=F.useG);let Me=F&&F.vh,$e=!0;F&&F.chkDup!==void 0&&($e=F.chkDup);let ze=!1;F&&F.rt!==void 0&&(ze=F.rt);let se=O;for(;se&&!se.hasOwnProperty(r);)se=bh(se);if(!se&&O[r]&&(se=O),!se||se[c])return!1;let ct=F&&F.eventNameToString,we={},be=se[c]=se[r],Fe=se[qe(a)]=se[a],me=se[qe(o)]=se[o],$t=se[qe(s)]=se[s],nn;F&&F.prepend&&(nn=se[qe(F.prepend)]=se[F.prepend]);function tt(C,B){return B?typeof C=="boolean"?{capture:C,passive:!0}:C?typeof C=="object"&&C.passive!==!1?SM(Jv({},C),{passive:!0}):C:{passive:!0}:C}let Ze=function(C){if(!we.isExisting)return be.call(we.target,we.eventName,we.capture?K:W,we.options)},y=function(C){if(!C.isRemoved){let B=Bn[C.eventName],le;B&&(le=B[C.capture?Yi:qi]);let fe=le&&C.target[le];if(fe){for(let ie=0;ie<fe.length;ie++)if(fe[ie]===C){fe.splice(ie,1),C.isRemoved=!0,C.removeAbortListener&&(C.removeAbortListener(),C.removeAbortListener=null),fe.length===0&&(C.allRemoved=!0,C.target[le]=null);break}}}if(C.allRemoved)return Fe.call(C.target,C.eventName,C.capture?K:W,C.options)},b=function(C){return be.call(we.target,we.eventName,C.invoke,we.options)},v=function(C){return nn.call(we.target,we.eventName,C.invoke,we.options)},ue=function(C){return Fe.call(C.target,C.eventName,C.invoke,C.options)},Ke=he?Ze:b,Le=he?y:ue,jn=function(C,B){let le=typeof B;return le==="function"&&C.callback===B||le==="object"&&C.originalDelegate===B},Ai=F?.diff||jn,Ri=Zone[qe("UNPATCHED_EVENTS")],zn=n[qe("PASSIVE_EVENTS")];function V(C){if(typeof C=="object"&&C!==null){let B=Jv({},C);return C.signal&&(B.signal=C.signal),B}return C}let I=function(C,B,le,fe,ie=!1,Se=!1){return function(){let Ae=this||n,Re=arguments[0];F&&F.transferEventName&&(Re=F.transferEventName(Re));let nt=arguments[1];if(!nt)return C.apply(this,arguments);if(bd&&Re==="uncaughtException")return C.apply(this,arguments);let it=!1;if(typeof nt!="function"){if(!nt.handleEvent)return C.apply(this,arguments);it=!0}if(Me&&!Me(C,nt,Ae,arguments))return;let Xi=!!zn&&zn.indexOf(Re)!==-1,Un=V(tt(arguments[2],Xi)),Br=Un?.signal;if(Br?.aborted)return;if(Ri){for(let si=0;si<Ri.length;si++)if(Re===Ri[si])return Xi?C.call(Ae,Re,nt,Un):C.apply(this,arguments)}let yd=Un?typeof Un=="boolean"?!0:Un.capture:!1,Sh=Un&&typeof Un=="object"?Un.once:!1,gb=Zone.current,Cd=Bn[Re];Cd||(mb(Re,ct),Cd=Bn[Re]);let Mh=Cd[yd?Yi:qi],wa=Ae[Mh],Ah=!1;if(wa){if(Ah=!0,$e){for(let si=0;si<wa.length;si++)if(Ai(wa[si],nt))return}}else wa=Ae[Mh]=[];let Gs,Rh=Ae.constructor.name,kh=cb[Rh];kh&&(Gs=kh[Re]),Gs||(Gs=Rh+B+(ct?ct(Re):Re)),we.options=Un,Sh&&(we.options.once=!1),we.target=Ae,we.capture=yd,we.eventName=Re,we.isExisting=Ah;let So=he?LM:void 0;So&&(So.taskData=we),Br&&(we.options.signal=void 0);let Hn=gb.scheduleEventTask(Gs,nt,So,le,fe);if(Br){we.options.signal=Br;let si=()=>Hn.zone.cancelTask(Hn);C.call(Br,"abort",si,{once:!0}),Hn.removeAbortListener=()=>Br.removeEventListener("abort",si)}if(we.target=null,So&&(So.taskData=null),Sh&&(we.options.once=!0),typeof Hn.options!="boolean"&&(Hn.options=Un),Hn.target=Ae,Hn.capture=yd,Hn.eventName=Re,it&&(Hn.originalDelegate=nt),Se?wa.unshift(Hn):wa.push(Hn),ie)return Ae}};return se[r]=I(be,m,Ke,Le,ze),nn&&(se[f]=I(nn,g,v,Le,ze,!0)),se[a]=function(){let C=this||n,B=arguments[0];F&&F.transferEventName&&(B=F.transferEventName(B));let le=arguments[2],fe=le?typeof le=="boolean"?!0:le.capture:!1,ie=arguments[1];if(!ie)return Fe.apply(this,arguments);if(Me&&!Me(Fe,ie,C,arguments))return;let Se=Bn[B],Ae;Se&&(Ae=Se[fe?Yi:qi]);let Re=Ae&&C[Ae];if(Re)for(let nt=0;nt<Re.length;nt++){let it=Re[nt];if(Ai(it,ie)){if(Re.splice(nt,1),it.isRemoved=!0,Re.length===0&&(it.allRemoved=!0,C[Ae]=null,!fe&&typeof B=="string")){let Xi=$s+"ON_PROPERTY"+B;C[Xi]=null}return it.zone.cancelTask(it),ze?C:void 0}}return Fe.apply(this,arguments)},se[o]=function(){let C=this||n,B=arguments[0];F&&F.transferEventName&&(B=F.transferEventName(B));let le=[],fe=hb(C,ct?ct(B):B);for(let ie=0;ie<fe.length;ie++){let Se=fe[ie],Ae=Se.originalDelegate?Se.originalDelegate:Se.callback;le.push(Ae)}return le},se[s]=function(){let C=this||n,B=arguments[0];if(B){F&&F.transferEventName&&(B=F.transferEventName(B));let le=Bn[B];if(le){let fe=le[qi],ie=le[Yi],Se=C[fe],Ae=C[ie];if(Se){let Re=Se.slice();for(let nt=0;nt<Re.length;nt++){let it=Re[nt],Xi=it.originalDelegate?it.originalDelegate:it.callback;this[a].call(this,B,Xi,it.options)}}if(Ae){let Re=Ae.slice();for(let nt=0;nt<Re.length;nt++){let it=Re[nt],Xi=it.originalDelegate?it.originalDelegate:it.callback;this[a].call(this,B,Xi,it.options)}}}}else{let le=Object.keys(C);for(let fe=0;fe<le.length;fe++){let ie=le[fe],Se=db.exec(ie),Ae=Se&&Se[1];Ae&&Ae!=="removeListener"&&this[s].call(this,Ae)}this[s].call(this,"removeListener")}if(ze)return this},Ki(se[r],be),Ki(se[a],Fe),$t&&Ki(se[s],$t),me&&Ki(se[o],me),!0}let $=[];for(let O=0;O<e.length;O++)$[O]=z(e[O],t);return $}function hb(n,i){if(!i){let a=[];for(let o in n){let s=db.exec(o),c=s&&s[1];if(c&&(!i||c===i)){let m=n[o];if(m)for(let f=0;f<m.length;f++)a.push(m[f])}}return a}let e=Bn[i];e||(mb(i),e=Bn[i]);let t=n[e[qi]],r=n[e[Yi]];return t?r?t.concat(r):t.slice():r?r.slice():[]}function BM(n,i){let e=n.Event;e&&e.prototype&&i.patchMethod(e.prototype,"stopImmediatePropagation",t=>function(r,a){r[ub]=!0,t&&t.apply(r,a)})}function jM(n,i){i.patchMethod(n,"queueMicrotask",e=>function(t,r){Zone.current.scheduleMicroTask("queueMicrotask",r[0])})}var pd=qe("zoneTask");function xo(n,i,e,t){let r=null,a=null;i+=t,e+=t;let o={};function s(m){let f=m.data;f.args[0]=function(){return m.invoke.apply(this,arguments)};let g=r.apply(n,f.args);return ib(g)?f.handleId=g:(f.handle=g,f.isRefreshable=nb(g.refresh)),m}function c(m){let{handle:f,handleId:g}=m.data;return a.call(n,f??g)}r=Zi(n,i,m=>function(f,g){var E;if(nb(g[0])){let M={isRefreshable:!1,isPeriodic:t==="Interval",delay:t==="Timeout"||t==="Interval"?g[1]||0:void 0,args:g},W=g[0];g[0]=function(){try{return W.apply(this,arguments)}finally{let{handle:Me,handleId:$e,isPeriodic:ze,isRefreshable:se}=M;!ze&&!se&&($e?delete o[$e]:Me&&(Me[pd]=null))}};let K=wh(i,g[0],M,s,c);if(!K)return K;let{handleId:z,handle:$,isRefreshable:O,isPeriodic:F}=K.data;if(z)o[z]=K;else if($&&($[pd]=K,O&&!F)){let he=$.refresh;$.refresh=function(){let{zone:Me,state:$e}=K;return $e==="notScheduled"?(K._state="scheduled",Me._updateTaskCount(K,1)):$e==="running"&&(K._state="scheduling"),he.call(this)}}return(E=$??z)!=null?E:K}else return m.apply(n,g)}),a=Zi(n,e,m=>function(f,g){let E=g[0],M;ib(E)?(M=o[E],delete o[E]):(M=E?.[pd],M?E[pd]=null:M=E),M?.type?M.cancelFn&&M.zone.cancelTask(M):m.apply(n,g)})}function zM(n,i){let{isBrowser:e,isMix:t}=i.getGlobalObjects();if(!e&&!t||!n.customElements||!("customElements"in n))return;let r=["connectedCallback","disconnectedCallback","adoptedCallback","attributeChangedCallback","formAssociatedCallback","formDisabledCallback","formResetCallback","formStateRestoreCallback"];i.patchCallbacks(i,n.customElements,"customElements","define",r)}function UM(n,i){if(Zone[i.symbol("patchEventTarget")])return;let{eventNames:e,zoneSymbolEventNames:t,TRUE_STR:r,FALSE_STR:a,ZONE_SYMBOL_PREFIX:o}=i.getGlobalObjects();for(let c=0;c<e.length;c++){let m=e[c],f=m+a,g=m+r,E=o+f,M=o+g;t[m]={},t[m][a]=E,t[m][r]=M}let s=n.EventTarget;if(!(!s||!s.prototype))return i.patchEventTarget(n,i,[s&&s.prototype]),!0}function HM(n,i){i.patchEventPrototype(n,i)}function fb(n,i,e){if(!e||e.length===0)return i;let t=e.filter(a=>a.target===n);if(t.length===0)return i;let r=t[0].ignoreProperties;return i.filter(a=>r.indexOf(a)===-1)}function rb(n,i,e,t){if(!n)return;let r=fb(n,i,e);lb(n,r,t)}function _h(n){return Object.getOwnPropertyNames(n).filter(i=>i.startsWith("on")&&i.length>2).map(i=>i.substring(2))}function $M(n,i){if(bd&&!sb||Zone[n.symbol("patchEvents")])return;let e=i.__Zone_ignore_on_properties,t=[];if(xh){let r=window;t=t.concat(["Document","SVGElement","Element","HTMLElement","HTMLBodyElement","HTMLMediaElement","HTMLFrameSetElement","HTMLFrameElement","HTMLIFrameElement","HTMLMarqueeElement","Worker"]),rb(r,_h(r),e,bh(r))}t=t.concat(["XMLHttpRequest","XMLHttpRequestEventTarget","IDBIndex","IDBRequest","IDBOpenDBRequest","IDBDatabase","IDBTransaction","IDBCursor","WebSocket"]);for(let r=0;r<t.length;r++){let a=i[t[r]];a?.prototype&&rb(a.prototype,_h(a.prototype),e)}}function GM(n){n.__load_patch("timers",i=>{let t="clear";xo(i,"set",t,"Timeout"),xo(i,"set",t,"Interval"),xo(i,"set",t,"Immediate")}),n.__load_patch("requestAnimationFrame",i=>{xo(i,"request","cancel","AnimationFrame"),xo(i,"mozRequest","mozCancel","AnimationFrame"),xo(i,"webkitRequest","webkitCancel","AnimationFrame")}),n.__load_patch("blocking",(i,e)=>{let t=["alert","prompt","confirm"];for(let r=0;r<t.length;r++){let a=t[r];Zi(i,a,(o,s,c)=>function(m,f){return e.current.run(o,i,f,c)})}}),n.__load_patch("EventTarget",(i,e,t)=>{HM(i,t),UM(i,t);let r=i.XMLHttpRequestEventTarget;r&&r.prototype&&t.patchEventTarget(i,t,[r.prototype])}),n.__load_patch("MutationObserver",(i,e,t)=>{Us("MutationObserver"),Us("WebKitMutationObserver")}),n.__load_patch("IntersectionObserver",(i,e,t)=>{Us("IntersectionObserver")}),n.__load_patch("FileReader",(i,e,t)=>{Us("FileReader")}),n.__load_patch("on_property",(i,e,t)=>{$M(t,i)}),n.__load_patch("customElements",(i,e,t)=>{zM(i,t)}),n.__load_patch("XHR",(i,e)=>{m(i);let t=qe("xhrTask"),r=qe("xhrSync"),a=qe("xhrListener"),o=qe("xhrScheduled"),s=qe("xhrURL"),c=qe("xhrErrorBeforeScheduled");function m(f){let g=f.XMLHttpRequest;if(!g)return;let E=g.prototype;function M(be){return be[t]}let W=E[hh],K=E[fh];if(!W){let be=f.XMLHttpRequestEventTarget;if(be){let Fe=be.prototype;W=Fe[hh],K=Fe[fh]}}let z="readystatechange",$="scheduled";function O(be){let Fe=be.data,me=Fe.target;me[o]=!1,me[c]=!1;let $t=me[a];W||(W=me[hh],K=me[fh]),$t&&K.call(me,z,$t);let nn=me[a]=()=>{if(me.readyState===me.DONE)if(!Fe.aborted&&me[o]&&be.state===$){let Ze=me[e.__symbol__("loadfalse")];if(me.status!==0&&Ze&&Ze.length>0){let y=be.invoke;be.invoke=function(){let b=me[e.__symbol__("loadfalse")];for(let v=0;v<b.length;v++)b[v]===be&&b.splice(v,1);!Fe.aborted&&be.state===$&&y.call(be)},Ze.push(be)}else be.invoke()}else!Fe.aborted&&me[o]===!1&&(me[c]=!0)};return W.call(me,z,nn),me[t]||(me[t]=be),ct.apply(me,Fe.args),me[o]=!0,be}function F(){}function he(be){let Fe=be.data;return Fe.aborted=!0,we.apply(Fe.target,Fe.args)}let Me=Zi(E,"open",()=>function(be,Fe){return be[r]=Fe[2]==!1,be[s]=Fe[1],Me.apply(be,Fe)}),$e="XMLHttpRequest.send",ze=qe("fetchTaskAborting"),se=qe("fetchTaskScheduling"),ct=Zi(E,"send",()=>function(be,Fe){if(e.current[se]===!0||be[r])return ct.apply(be,Fe);{let me={target:be,url:be[s],isPeriodic:!1,args:Fe,aborted:!1},$t=wh($e,F,me,O,he);be&&be[c]===!0&&!me.aborted&&$t.state===$&&$t.invoke()}}),we=Zi(E,"abort",()=>function(be,Fe){let me=M(be);if(me&&typeof me.type=="string"){if(me.cancelFn==null||me.data&&me.data.aborted)return;me.zone.cancelTask(me)}else if(e.current[ze]===!0)return we.apply(be,Fe)})}}),n.__load_patch("geolocation",i=>{i.navigator&&i.navigator.geolocation&&IM(i.navigator.geolocation,["getCurrentPosition","watchPosition"])}),n.__load_patch("PromiseRejectionEvent",(i,e)=>{function t(r){return function(a){hb(i,r).forEach(s=>{let c=i.PromiseRejectionEvent;if(c){let m=new c(r,{promise:a.promise,reason:a.rejection});s.invoke(m)}})}}i.PromiseRejectionEvent&&(e[qe("unhandledPromiseRejectionHandler")]=t("unhandledrejection"),e[qe("rejectionHandledHandler")]=t("rejectionhandled"))}),n.__load_patch("queueMicrotask",(i,e,t)=>{jM(i,t)})}function WM(n){n.__load_patch("ZoneAwarePromise",(i,e,t)=>{let r=Object.getOwnPropertyDescriptor,a=Object.defineProperty;function o(V){if(V&&V.toString===Object.prototype.toString){let I=V.constructor&&V.constructor.name;return(I||"")+": "+JSON.stringify(V)}return V?V.toString():Object.prototype.toString.call(V)}let s=t.symbol,c=[],m=i[s("DISABLE_WRAPPING_UNCAUGHT_PROMISE_REJECTION")]!==!1,f=s("Promise"),g=s("then"),E="__creationTrace__";t.onUnhandledError=V=>{if(t.showUncaughtError()){let I=V&&V.rejection;I?console.error("Unhandled Promise rejection:",I instanceof Error?I.message:I,"; Zone:",V.zone.name,"; Task:",V.task&&V.task.source,"; Value:",I,I instanceof Error?I.stack:void 0):console.error(V)}},t.microtaskDrainDone=()=>{for(;c.length;){let V=c.shift();try{V.zone.runGuarded(()=>{throw V.throwOriginal?V.rejection:V})}catch(I){W(I)}}};let M=s("unhandledPromiseRejectionHandler");function W(V){t.onUnhandledError(V);try{let I=e[M];typeof I=="function"&&I.call(this,V)}catch{}}function K(V){return V&&typeof V.then=="function"}function z(V){return V}function $(V){return Le.reject(V)}let O=s("state"),F=s("value"),he=s("finally"),Me=s("parentPromiseValue"),$e=s("parentPromiseState"),ze="Promise.then",se=null,ct=!0,we=!1,be=0;function Fe(V,I){return C=>{try{tt(V,I,C)}catch(B){tt(V,!1,B)}}}let me=function(){let V=!1;return function(C){return function(){V||(V=!0,C.apply(null,arguments))}}},$t="Promise resolved with itself",nn=s("currentTaskTrace");function tt(V,I,C){let B=me();if(V===C)throw new TypeError($t);if(V[O]===se){let le=null;try{(typeof C=="object"||typeof C=="function")&&(le=C&&C.then)}catch(fe){return B(()=>{tt(V,!1,fe)})(),V}if(I!==we&&C instanceof Le&&C.hasOwnProperty(O)&&C.hasOwnProperty(F)&&C[O]!==se)y(C),tt(V,C[O],C[F]);else if(I!==we&&typeof le=="function")try{le.call(C,B(Fe(V,I)),B(Fe(V,!1)))}catch(fe){B(()=>{tt(V,!1,fe)})()}else{V[O]=I;let fe=V[F];if(V[F]=C,V[he]===he&&I===ct&&(V[O]=V[$e],V[F]=V[Me]),I===we&&C instanceof Error){let ie=e.currentTask&&e.currentTask.data&&e.currentTask.data[E];ie&&a(C,nn,{configurable:!0,enumerable:!1,writable:!0,value:ie})}for(let ie=0;ie<fe.length;)b(V,fe[ie++],fe[ie++],fe[ie++],fe[ie++]);if(fe.length==0&&I==we){V[O]=be;let ie=C;try{throw new Error("Uncaught (in promise): "+o(C)+(C&&C.stack?`
`+C.stack:""))}catch(Se){ie=Se}m&&(ie.throwOriginal=!0),ie.rejection=C,ie.promise=V,ie.zone=e.current,ie.task=e.currentTask,c.push(ie),t.scheduleMicroTask()}}}return V}let Ze=s("rejectionHandledHandler");function y(V){if(V[O]===be){try{let I=e[Ze];I&&typeof I=="function"&&I.call(this,{rejection:V[F],promise:V})}catch{}V[O]=we;for(let I=0;I<c.length;I++)V===c[I].promise&&c.splice(I,1)}}function b(V,I,C,B,le){y(V);let fe=V[O],ie=fe?typeof B=="function"?B:z:typeof le=="function"?le:$;I.scheduleMicroTask(ze,()=>{try{let Se=V[F],Ae=!!C&&he===C[he];Ae&&(C[Me]=Se,C[$e]=fe);let Re=I.run(ie,void 0,Ae&&ie!==$&&ie!==z?[]:[Se]);tt(C,!0,Re)}catch(Se){tt(C,!1,Se)}},C)}let v="function ZoneAwarePromise() { [native code] }",ue=function(){},Ke=i.AggregateError;class Le{static toString(){return v}static resolve(I){return I instanceof Le?I:tt(new this(null),ct,I)}static reject(I){return tt(new this(null),we,I)}static withResolvers(){let I={};return I.promise=new Le((C,B)=>{I.resolve=C,I.reject=B}),I}static any(I){if(!I||typeof I[Symbol.iterator]!="function")return Promise.reject(new Ke([],"All promises were rejected"));let C=[],B=0;try{for(let ie of I)B++,C.push(Le.resolve(ie))}catch{return Promise.reject(new Ke([],"All promises were rejected"))}if(B===0)return Promise.reject(new Ke([],"All promises were rejected"));let le=!1,fe=[];return new Le((ie,Se)=>{for(let Ae=0;Ae<C.length;Ae++)C[Ae].then(Re=>{le||(le=!0,ie(Re))},Re=>{fe.push(Re),B--,B===0&&(le=!0,Se(new Ke(fe,"All promises were rejected")))})})}static race(I){let C,B,le=new this((Se,Ae)=>{C=Se,B=Ae});function fe(Se){C(Se)}function ie(Se){B(Se)}for(let Se of I)K(Se)||(Se=this.resolve(Se)),Se.then(fe,ie);return le}static all(I){return Le.allWithCallback(I)}static allSettled(I){return(this&&this.prototype instanceof Le?this:Le).allWithCallback(I,{thenCallback:B=>({status:"fulfilled",value:B}),errorCallback:B=>({status:"rejected",reason:B})})}static allWithCallback(I,C){let B,le,fe=new this((Re,nt)=>{B=Re,le=nt}),ie=2,Se=0,Ae=[];for(let Re of I){K(Re)||(Re=this.resolve(Re));let nt=Se;try{Re.then(it=>{Ae[nt]=C?C.thenCallback(it):it,ie--,ie===0&&B(Ae)},it=>{C?(Ae[nt]=C.errorCallback(it),ie--,ie===0&&B(Ae)):le(it)})}catch(it){le(it)}ie++,Se++}return ie-=2,ie===0&&B(Ae),fe}constructor(I){let C=this;if(!(C instanceof Le))throw new Error("Must be an instanceof Promise.");C[O]=se,C[F]=[];try{let B=me();I&&I(B(Fe(C,ct)),B(Fe(C,we)))}catch(B){tt(C,!1,B)}}get[Symbol.toStringTag](){return"Promise"}get[Symbol.species](){return Le}then(I,C){var B;let le=(B=this.constructor)==null?void 0:B[Symbol.species];(!le||typeof le!="function")&&(le=this.constructor||Le);let fe=new le(ue),ie=e.current;return this[O]==se?this[F].push(ie,fe,I,C):b(this,ie,fe,I,C),fe}catch(I){return this.then(null,I)}finally(I){var C;let B=(C=this.constructor)==null?void 0:C[Symbol.species];(!B||typeof B!="function")&&(B=Le);let le=new B(ue);le[he]=he;let fe=e.current;return this[O]==se?this[F].push(fe,le,I,I):b(this,fe,le,I,I),le}}Le.resolve=Le.resolve,Le.reject=Le.reject,Le.race=Le.race,Le.all=Le.all;let jn=i[f]=i.Promise;i.Promise=Le;let Ai=s("thenPatched");function Ri(V){let I=V.prototype,C=r(I,"then");if(C&&(C.writable===!1||!C.configurable))return;let B=I.then;I[g]=B,V.prototype.then=function(le,fe){return new Le((Se,Ae)=>{B.call(this,Se,Ae)}).then(le,fe)},V[Ai]=!0}t.patchThen=Ri;function zn(V){return function(I,C){let B=V.apply(I,C);if(B instanceof Le)return B;let le=B.constructor;return le[Ai]||Ri(le),B}}if(jn){Ri(jn);let V=jn.try;V&&typeof V=="function"&&(Le.try=V),Zi(i,"fetch",I=>zn(I))}return Promise[e.__symbol__("uncaughtPromiseErrors")]=c,Le})}function YM(n){n.__load_patch("toString",i=>{let e=Function.prototype.toString,t=qe("OriginalDelegate"),r=qe("Promise"),a=qe("Error"),o=function(){if(typeof this=="function"){let f=this[t];if(f)return typeof f=="function"?e.call(f):Object.prototype.toString.call(f);if(this===Promise){let g=i[r];if(g)return e.call(g)}if(this===Error){let g=i[a];if(g)return e.call(g)}}return e.call(this)};o[t]=e,Function.prototype.toString=o;let s=Object.prototype.toString,c="[object Promise]";Object.prototype.toString=function(){return typeof Promise=="function"&&this instanceof Promise?c:s.call(this)}})}function qM(n,i,e,t,r){let a=Zone.__symbol__(t);if(i[a])return;let o=i[a]=i[t];i[t]=function(s,c,m){return c&&c.prototype&&r.forEach(function(f){let g=`${e}.${t}::`+f,E=c.prototype;try{if(E.hasOwnProperty(f)){let M=n.ObjectGetOwnPropertyDescriptor(E,f);M&&M.value?(M.value=n.wrapWithCurrentZone(M.value,g),n._redefineProperty(c.prototype,f,M)):E[f]&&(E[f]=n.wrapWithCurrentZone(E[f],g))}else E[f]&&(E[f]=n.wrapWithCurrentZone(E[f],g))}catch{}}),o.call(i,s,c,m)},n.attachOriginToPatched(i[t],o)}function ZM(n){n.__load_patch("util",(i,e,t)=>{let r=_h(i);t.patchOnProperties=lb,t.patchMethod=Zi,t.bindArguments=Eh,t.patchMacroTask=NM;let a=e.__symbol__("BLACK_LISTED_EVENTS"),o=e.__symbol__("UNPATCHED_EVENTS");i[o]&&(i[a]=i[o]),i[a]&&(e[a]=e[o]=i[a]),t.patchEventPrototype=BM,t.patchEventTarget=VM,t.ObjectDefineProperty=vh,t.ObjectGetOwnPropertyDescriptor=Hs,t.ObjectCreate=RM,t.ArraySlice=kM,t.patchClass=Us,t.wrapWithCurrentZone=Dh,t.filterProperties=fb,t.attachOriginToPatched=Ki,t._redefineProperty=Object.defineProperty,t.patchCallbacks=qM,t.getGlobalObjects=()=>({globalSources:cb,zoneSymbolEventNames:Bn,eventNames:r,isBrowser:xh,isMix:sb,isNode:bd,TRUE_STR:Yi,FALSE_STR:qi,ZONE_SYMBOL_PREFIX:$s,ADD_EVENT_LISTENER_STR:yh,REMOVE_EVENT_LISTENER_STR:Ch})})}function KM(n){WM(n),YM(n),ZM(n)}var pb=AM();KM(pb);GM(pb);iu(fd,Zv).catch(n=>console.error(n));
