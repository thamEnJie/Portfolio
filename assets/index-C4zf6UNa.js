var qe=Object.defineProperty;var ze=(t,e,n)=>e in t?qe(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var ae=(t,e,n)=>ze(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))l(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&l(r)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function l(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function S(){}function A(t,e){for(const n in e)t[n]=e[n];return t}function je(t){return t()}function be(){return Object.create(null)}function le(t){t.forEach(je)}function Ae(t){return typeof t=="function"}function O(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let ie;function Le(t,e){return t===e?!0:(ie||(ie=document.createElement("a")),ie.href=e,t===ie.href)}function Ue(t){return Object.keys(t).length===0}function X(t,e,n,l){if(t){const s=Ne(t,e,n,l);return t[0](s)}}function Ne(t,e,n,l){return t[1]&&l?A(n.ctx.slice(),t[1](l(e))):n.ctx}function Z(t,e,n,l){if(t[2]&&l){const s=t[2](l(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const i=[],r=Math.max(e.dirty.length,s.length);for(let o=0;o<r;o+=1)i[o]=e.dirty[o]|s[o];return i}return e.dirty|s}return e.dirty}function ee(t,e,n,l,s,i){if(s){const r=Ne(e,n,l,i);t.p(r,s)}}function te(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let l=0;l<n;l++)e[l]=-1;return e}return-1}function me(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function V(t,e){const n={};e=new Set(e);for(const l in t)!e.has(l)&&l[0]!=="$"&&(n[l]=t[l]);return n}function h(t,e){t.appendChild(e)}function p(t,e,n){t.insertBefore(e,n||null)}function _(t){t.parentNode&&t.parentNode.removeChild(t)}function Y(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function f(t){return document.createElement(t)}function se(t){return document.createTextNode(t)}function k(){return se(" ")}function ge(){return se("")}function We(t,e,n,l){return t.addEventListener(e,n,l),()=>t.removeEventListener(e,n,l)}function m(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}const Je=["width","height"];function K(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const l in e)e[l]==null?t.removeAttribute(l):l==="style"?t.style.cssText=e[l]:l==="__value"?t.value=t[l]=e[l]:n[l]&&n[l].set&&Je.indexOf(l)===-1?t[l]=e[l]:m(t,l,e[l])}function Re(t){return Array.from(t.childNodes)}function Ve(t,e){e=""+e,t.data!==e&&(t.data=e)}function Ke(t,e,{bubbles:n=!1,cancelable:l=!1}={}){return new CustomEvent(t,{detail:e,bubbles:n,cancelable:l})}function $e(t,e){return new t(e)}let ne;function Q(t){ne=t}function Ye(){if(!ne)throw new Error("Function called outside component initialization");return ne}function Ge(){const t=Ye();return(e,n,{cancelable:l=!1}={})=>{const s=t.$$.callbacks[e];if(s){const i=Ke(e,n,{cancelable:l});return s.slice().forEach(r=>{r.call(t,i)}),!i.defaultPrevented}return!0}}const J=[],ye=[];let R=[];const ve=[],Qe=Promise.resolve();let fe=!1;function Xe(){fe||(fe=!0,Qe.then(Be))}function de(t){R.push(t)}const ue=new Set;let z=0;function Be(){if(z!==0)return;const t=ne;do{try{for(;z<J.length;){const e=J[z];z++,Q(e),Ze(e.$$)}}catch(e){throw J.length=0,z=0,e}for(Q(null),J.length=0,z=0;ye.length;)ye.pop()();for(let e=0;e<R.length;e+=1){const n=R[e];ue.has(n)||(ue.add(n),n())}R.length=0}while(J.length);for(;ve.length;)ve.pop()();fe=!1,ue.clear(),Q(t)}function Ze(t){if(t.fragment!==null){t.update(),le(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(de)}}function et(t){const e=[],n=[];R.forEach(l=>t.indexOf(l)===-1?e.push(l):n.push(l)),n.forEach(l=>l()),R=e}const ce=new Set;let q;function oe(){q={r:0,c:[],p:q}}function re(){q.r||le(q.c),q=q.p}function v(t,e){t&&t.i&&(ce.delete(t),t.i(e))}function x(t,e,n,l){if(t&&t.o){if(ce.has(t))return;ce.add(t),q.c.push(()=>{ce.delete(t),l&&(n&&t.d(1),l())}),t.o(e)}else l&&l()}function L(t){return(t==null?void 0:t.length)!==void 0?t:Array.from(t)}function _e(t,e){const n={},l={},s={$$scope:1};let i=t.length;for(;i--;){const r=t[i],o=e[i];if(o){for(const c in r)c in o||(l[c]=1);for(const c in o)s[c]||(n[c]=o[c],s[c]=1);t[i]=o}else for(const c in r)s[c]=1}for(const r in l)r in n||(n[r]=void 0);return n}function F(t){t&&t.c()}function D(t,e,n){const{fragment:l,after_update:s}=t.$$;l&&l.m(e,n),de(()=>{const i=t.$$.on_mount.map(je).filter(Ae);t.$$.on_destroy?t.$$.on_destroy.push(...i):le(i),t.$$.on_mount=[]}),s.forEach(de)}function H(t,e){const n=t.$$;n.fragment!==null&&(et(n.after_update),le(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function tt(t,e){t.$$.dirty[0]===-1&&(J.push(t),Xe(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function N(t,e,n,l,s,i,r=null,o=[-1]){const c=ne;Q(t);const a=t.$$={fragment:null,ctx:[],props:i,update:S,not_equal:s,bound:be(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:be(),dirty:o,skip_bound:!1,root:e.target||c.$$.root};r&&r(a.root);let u=!1;if(a.ctx=n?n(t,e.props||{},(d,E,...T)=>{const I=T.length?T[0]:E;return a.ctx&&s(a.ctx[d],a.ctx[d]=I)&&(!a.skip_bound&&a.bound[d]&&a.bound[d](I),u&&tt(t,d)),E}):[],a.update(),u=!0,le(a.before_update),a.fragment=l?l(a.ctx):!1,e.target){if(e.hydrate){const d=Re(e.target);a.fragment&&a.fragment.l(d),d.forEach(_)}else a.fragment&&a.fragment.c();e.intro&&v(t.$$.fragment),D(t,e.target,e.anchor),Be()}Q(c)}class B{constructor(){ae(this,"$$");ae(this,"$$set")}$destroy(){H(this,1),this.$destroy=S}$on(e,n){if(!Ae(n))return S;const l=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return l.push(n),()=>{const s=l.indexOf(n);s!==-1&&l.splice(s,1)}}$set(e){this.$$set&&!Ue(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const nt="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(nt);function lt(t){let e,n,l,s,i,r,o,c,a;return{c(){e=f("div"),n=f("div"),l=f("div"),s=f("img"),r=k(),o=f("div"),o.innerHTML=`<h1>Hi! I&#39;m En Jie :)</h1> <p><strong>Deep Learner • Enthusiastic Maker • Ecological Lover</strong></p> <p class="text-wrap">I value <u>deep learning</u> for more <b>accurate</b> and <b>complete</b> understanding.<br/>
                I enjoy <u>designing</u> and <u>making</u> products with <b>CAD Modelling</b> and <b>3D Printing</b>.<br/>
                I aim to create <u>solutions</u> and <u>findings</u> that <b>productively</b> impacts ecology.</p>`,c=k(),a=f("span"),a.textContent="↓",Le(s.src,i=st)||m(s,"src",i),m(s,"class","object-contain row-span-1 rounded-10 h-45 mx-auto"),m(s,"alt","Tham En Jie"),m(o,"class","row-span-1 lg:text-left"),m(l,"class","flex flex-col lg:flex-row gap-5"),m(n,"class","heightMod flex justify-center items-center pb-25 z-1 svelte-1eiuxwk"),m(a,"class","text-9xl text-slate-100 z-0 -mt-50"),m(e,"class","flex flex-col")},m(u,d){p(u,e,d),h(e,n),h(n,l),h(l,s),h(l,r),h(l,o),h(e,c),h(e,a)},p:S,i:S,o:S,d(u){u&&_(e)}}}const st="assets/ultiphoto.png";class ot extends B{constructor(e){super(),N(this,e,null,lt,O,{})}}const U=[];function rt(t,e=S){let n;const l=new Set;function s(o){if(O(t,o)&&(t=o,n)){const c=!U.length;for(const a of l)a[1](),U.push(a,t);if(c){for(let a=0;a<U.length;a+=2)U[a][0](U[a+1]);U.length=0}}}function i(o){s(o(t))}function r(o,c=S){const a=[o,c];return l.add(a),l.size===1&&(n=e(s,i)||S),o(t),()=>{l.delete(a),l.size===0&&n&&(n(),n=null)}}return{set:s,update:i,subscribe:r}}function De(t){let e="";if(typeof t=="string"||typeof t=="number")e+=t;else if(typeof t=="object")if(Array.isArray(t))e=t.map(De).filter(Boolean).join(" ");else for(let n in t)t[n]&&(e&&(e+=" "),e+=n);return e}const pe=(...t)=>t.map(De).filter(Boolean).join(" ");function it(t){let e,n;const l=t[4].default,s=X(l,t,t[3],null);let i=[t[1],{class:t[0]}],r={};for(let o=0;o<i.length;o+=1)r=A(r,i[o]);return{c(){e=f("div"),s&&s.c(),K(e,r)},m(o,c){p(o,e,c),s&&s.m(e,null),n=!0},p(o,[c]){s&&s.p&&(!n||c&8)&&ee(s,l,o,o[3],n?Z(l,o[3],c,null):te(o[3]),null),K(e,r=_e(i,[c&2&&o[1],(!n||c&1)&&{class:o[0]}]))},i(o){n||(v(s,o),n=!0)},o(o){x(s,o),n=!1},d(o){o&&_(e),s&&s.d(o)}}}function ct(t,e,n){let l;const s=["class"];let i=V(e,s),{$$slots:r={},$$scope:o}=e,{class:c=""}=e;return t.$$set=a=>{e=A(A({},e),me(a)),n(1,i=V(e,s)),"class"in a&&n(2,c=a.class),"$$scope"in a&&n(3,o=a.$$scope)},t.$$.update=()=>{t.$$.dirty&4&&n(0,l=pe(c,"card-body"))},[l,i,c,o,r]}class at extends B{constructor(e){super(),N(this,e,ct,it,O,{class:2})}}function ut(t){let e,n;const l=t[4].default,s=X(l,t,t[3],null);let i=[t[1],{class:t[0]}],r={};for(let o=0;o<i.length;o+=1)r=A(r,i[o]);return{c(){e=f("h6"),s&&s.c(),K(e,r)},m(o,c){p(o,e,c),s&&s.m(e,null),n=!0},p(o,[c]){s&&s.p&&(!n||c&8)&&ee(s,l,o,o[3],n?Z(l,o[3],c,null):te(o[3]),null),K(e,r=_e(i,[c&2&&o[1],(!n||c&1)&&{class:o[0]}]))},i(o){n||(v(s,o),n=!0)},o(o){x(s,o),n=!1},d(o){o&&_(e),s&&s.d(o)}}}function ft(t,e,n){let l;const s=["class"];let i=V(e,s),{$$slots:r={},$$scope:o}=e,{class:c=""}=e;return t.$$set=a=>{e=A(A({},e),me(a)),n(1,i=V(e,s)),"class"in a&&n(2,c=a.class),"$$scope"in a&&n(3,o=a.$$scope)},t.$$.update=()=>{t.$$.dirty&4&&n(0,l=pe(c,"card-subtitle"))},[l,i,c,o,r]}class dt extends B{constructor(e){super(),N(this,e,ft,ut,O,{class:2})}}function ht(t){let e,n;const l=t[4].default,s=X(l,t,t[3],null);let i=[t[1],{class:t[0]}],r={};for(let o=0;o<i.length;o+=1)r=A(r,i[o]);return{c(){e=f("h5"),s&&s.c(),K(e,r)},m(o,c){p(o,e,c),s&&s.m(e,null),n=!0},p(o,[c]){s&&s.p&&(!n||c&8)&&ee(s,l,o,o[3],n?Z(l,o[3],c,null):te(o[3]),null),K(e,r=_e(i,[c&2&&o[1],(!n||c&1)&&{class:o[0]}]))},i(o){n||(v(s,o),n=!0)},o(o){x(s,o),n=!1},d(o){o&&_(e),s&&s.d(o)}}}function mt(t,e,n){let l;const s=["class"];let i=V(e,s),{$$slots:r={},$$scope:o}=e,{class:c=""}=e;return t.$$set=a=>{e=A(A({},e),me(a)),n(1,i=V(e,s)),"class"in a&&n(2,c=a.class),"$$scope"in a&&n(3,o=a.$$scope)},t.$$.update=()=>{t.$$.dirty&4&&n(0,l=pe(c,"card-title"))},[l,i,c,o,r]}class gt extends B{constructor(e){super(),N(this,e,mt,ht,O,{class:2})}}const He=rt(_t());He.subscribe(t=>pt(t));function _t(){var n,l,s;const t=((n=globalThis.document)==null?void 0:n.documentElement.getAttribute("data-bs-theme"))||"light",e=typeof((l=globalThis.window)==null?void 0:l.matchMedia)=="function"?(s=globalThis.window)==null?void 0:s.matchMedia("(prefers-color-scheme: dark)").matches:!1;return t==="dark"||t==="auto"&&e?"dark":"light"}function pt(t,e){var l;let n=t;if(arguments.length===1){if(n=(l=globalThis.document)==null?void 0:l.documentElement,!n)return;e=t,He.update(()=>e)}n.setAttribute("data-bs-theme",e)}const he=[{title:"Sciences",subtitle:"How Things Work",em1:"🔬⚛️",em2:"⚛️🧪",items:[{heading:"Mathematics, Chemistry & Other Sciences",itemList:[{name:"Abstract to Concrete",desc:"They bring such abstractness of our world into simpler, manipulatable, concrete understanding."},{name:"Derivation & Extensiveness",desc:"They allow me to derive many other things in and out of the subject just by knowing key and core concepts."}]},{heading:"Psychology and Sociology",itemList:[{name:"Understanding People",desc:"Understanding Pyschology allows me to better work with people by being able to understand why people do certain things."},{name:"MindField",desc:"The reason I got into Psychology is from MindField, a Youtube Series by VSauce. It opened me to new ideas on how people can have such diverse minds."}]}]},{title:"Engineering",subtitle:"How To Make Things Work",em1:"👨‍💻⚙️",em2:"⚙️👨‍💻",items:[{heading:"Product Creation",itemList:[{name:"Creation through Projects",desc:"I love to generate solutions in my mind, but I also love the process of bringing these ideas to reality. Which is why I have multiple personal projects!"},{name:"Problem Solving",desc:"When I watch videos and view resources on making products, I am amazed by the smart and efficient ways they reach a solution, and is something I find satisfying."}]},{heading:"Computing & Electronics",itemList:[{name:"Self-Learning Computing",desc:"The accesible and quick nature of computing is very conducive for self-learning! I've taught myself python for various applications, and svelte here just to learn web-development and make this website!"},{name:"Electronics",desc:"The hardware part of technology, it's very fun to be able to link it to my chemistry knowledge! I have taken Electronics in SST as an Applied Subject."}]}]}],bt=[{title:"Python",text:"Programming"},{title:"SwiftUI",text:"with Swift"},{title:"Svelte",text:"with Typescript"},{title:"OnShape",text:"CAD Modelling"},{title:"Blender",text:"Mesh Modelling"},{title:"Figma",text:"Interface Design"}],$t=t=>({}),we=t=>({}),yt=t=>({}),ke=t=>({});function xe(t){let e;return{c(){e=f("hr"),m(e,"class","mx-0 mt-0")},m(n,l){p(n,e,l)},d(n){n&&_(e)}}}function vt(t){let e,n,l,s,i,r,o,c,a,u,d,E,T,I,C,P,w;const G=t[3].header,g=X(G,t,t[2],ke);let b=t[0]&&xe();const M=t[3].body,y=X(M,t,t[2],we);return{c(){e=f("div"),n=f("button"),l=f("span"),g&&g.c(),s=k(),i=f("span"),r=se(">"),a=k(),b&&b.c(),u=k(),d=f("div"),E=f("div"),y&&y.c(),m(l,"class","mx-auto pl-3"),m(i,"class",o="my-auto "+W+" "+(t[0]?"-rotate-90":"rotate-90")+" text-md font-bold"),m(n,"class",c="reset-btn w-full h-full "+(t[0]?"rounded-b-none":"rounded-b-1")+" rounded-t-1 flex pr-6 py-3"),m(E,"class",T="overflow-hidden "+W+" "+(t[0]?"max-h-screen":"max-h-0")),m(d,"class",I=W+" "+(t[0]?"px-10 my-4":"")),m(e,"class","border rounded shadow-sm m-3")},m($,j){p($,e,j),h(e,n),h(n,l),g&&g.m(l,null),h(n,s),h(n,i),h(i,r),h(e,a),b&&b.m(e,null),h(e,u),h(e,d),h(d,E),y&&y.m(E,null),C=!0,P||(w=We(n,"click",t[1]),P=!0)},p($,[j]){g&&g.p&&(!C||j&4)&&ee(g,G,$,$[2],C?Z(G,$[2],j,yt):te($[2]),ke),(!C||j&1&&o!==(o="my-auto "+W+" "+($[0]?"-rotate-90":"rotate-90")+" text-md font-bold"))&&m(i,"class",o),(!C||j&1&&c!==(c="reset-btn w-full h-full "+($[0]?"rounded-b-none":"rounded-b-1")+" rounded-t-1 flex pr-6 py-3"))&&m(n,"class",c),$[0]?b||(b=xe(),b.c(),b.m(e,u)):b&&(b.d(1),b=null),y&&y.p&&(!C||j&4)&&ee(y,M,$,$[2],C?Z(M,$[2],j,$t):te($[2]),we),(!C||j&1&&T!==(T="overflow-hidden "+W+" "+($[0]?"max-h-screen":"max-h-0")))&&m(E,"class",T),(!C||j&1&&I!==(I=W+" "+($[0]?"px-10 my-4":"")))&&m(d,"class",I)},i($){C||(v(g,$),v(y,$),C=!0)},o($){x(g,$),x(y,$),C=!1},d($){$&&_(e),g&&g.d($),b&&b.d(),y&&y.d($),P=!1,w()}}}const W="transition-all duration-500";function wt(t,e,n){let{$$slots:l={},$$scope:s}=e,{isOpen:i=!1}=e;const r=Ge();function o(){n(0,i=!i),r("toggle",{state:i})}return t.$$set=c=>{"isOpen"in c&&n(0,i=c.isOpen),"$$scope"in c&&n(2,s=c.$$scope)},[i,o,s,l]}class Fe extends B{constructor(e){super(),N(this,e,wt,vt,O,{isOpen:0})}}function Ce(t,e,n){const l=t.slice();return l[3]=e[n],l[5]=n,l}function Se(t,e,n){const l=t.slice();return l[6]=e[n],l[8]=n,l}function kt(t,e,n){const l=t.slice();return l[5]=e[n],l}function xt(t){let e,n;return{c(){e=f("u"),n=f("b"),n.textContent=`${t[3].title}`},m(l,s){p(l,e,s),h(e,n)},p:S,d(l){l&&_(e)}}}function Ct(t){let e;return{c(){e=f("u"),e.textContent=`${t[6].heading}`},m(n,l){p(n,e,l)},p:S,d(n){n&&_(e)}}}function St(t){let e,n,l;return n=new dt({props:{$$slots:{default:[Ct]},$$scope:{ctx:t}}}),{c(){e=f("span"),F(n.$$.fragment),m(e,"slot","header")},m(s,i){p(s,e,i),D(n,e,null),l=!0},p(s,i){const r={};i&2048&&(r.$$scope={dirty:i,ctx:s}),n.$set(r)},i(s){l||(v(n.$$.fragment,s),l=!0)},o(s){x(n.$$.fragment,s),l=!1},d(s){s&&_(e),H(n)}}}function Et(t){let e,n,l;return{c(){e=f("b"),e.textContent=`${t[5].name}`,n=k(),l=f("p"),l.textContent=`${t[5].desc}`},m(s,i){p(s,e,i),p(s,n,i),p(s,l,i)},p:S,d(s){s&&(_(e),_(n),_(l))}}}function It(t){let e,n=L(t[6].itemList),l=[];for(let s=0;s<n.length;s+=1)l[s]=Et(kt(t,n,s));return{c(){for(let s=0;s<l.length;s+=1)l[s].c();e=ge()},m(s,i){for(let r=0;r<l.length;r+=1)l[r]&&l[r].m(s,i);p(s,e,i)},p:S,d(s){s&&_(e),Y(l,s)}}}function Tt(t){let e,n,l;return n=new at({props:{$$slots:{default:[It]},$$scope:{ctx:t}}}),{c(){e=f("span"),F(n.$$.fragment),m(e,"slot","body")},m(s,i){p(s,e,i),D(n,e,null),l=!0},p(s,i){const r={};i&2048&&(r.$$scope={dirty:i,ctx:s}),n.$set(r)},i(s){l||(v(n.$$.fragment,s),l=!0)},o(s){x(n.$$.fragment,s),l=!1},d(s){s&&_(e),H(n)}}}function Ee(t){let e,n;return e=new Fe({props:{isOpen:t[8]==t[0][t[5]],$$slots:{body:[Tt],header:[St]},$$scope:{ctx:t}}}),e.$on("toggle",t[1](t[5],t[8])),{c(){F(e.$$.fragment)},m(l,s){D(e,l,s),n=!0},p(l,s){const i={};s&1&&(i.isOpen=l[8]==l[0][l[5]]),s&2048&&(i.$$scope={dirty:s,ctx:l}),e.$set(i)},i(l){n||(v(e.$$.fragment,l),n=!0)},o(l){x(e.$$.fragment,l),n=!1},d(l){H(e,l)}}}function Ie(t){let e,n,l,s,i,r,o,c,a,u,d,E,T,I,C;r=new gt({props:{$$slots:{default:[xt]},$$scope:{ctx:t}}});let P=L(t[3].items),w=[];for(let g=0;g<P.length;g+=1)w[g]=Ee(Se(t,P,g));const G=g=>x(w[g],1,1,()=>{w[g]=null});return{c(){e=f("div"),n=f("div"),l=f("span"),l.textContent=`${t[3].em1}`,s=k(),i=f("span"),F(r.$$.fragment),o=k(),c=f("small"),c.textContent=`${t[3].subtitle}`,a=k(),u=f("span"),u.textContent=`${t[3].em2}`,d=k(),E=f("hr"),T=k();for(let g=0;g<w.length;g+=1)w[g].c();I=k(),m(l,"class","text-2xl"),m(u,"class","text-2xl"),m(n,"class","flex flex-row justify-center items-center gap-4"),m(e,"class","border p-3")},m(g,b){p(g,e,b),h(e,n),h(n,l),h(n,s),h(n,i),D(r,i,null),h(i,o),h(i,c),h(n,a),h(n,u),h(e,d),h(e,E),h(e,T);for(let M=0;M<w.length;M+=1)w[M]&&w[M].m(e,null);h(e,I),C=!0},p(g,b){const M={};if(b&2048&&(M.$$scope={dirty:b,ctx:g}),r.$set(M),b&3){P=L(g[3].items);let y;for(y=0;y<P.length;y+=1){const $=Se(g,P,y);w[y]?(w[y].p($,b),v(w[y],1)):(w[y]=Ee($),w[y].c(),v(w[y],1),w[y].m(e,I))}for(oe(),y=P.length;y<w.length;y+=1)G(y);re()}},i(g){if(!C){v(r.$$.fragment,g);for(let b=0;b<P.length;b+=1)v(w[b]);C=!0}},o(g){x(r.$$.fragment,g),w=w.filter(Boolean);for(let b=0;b<w.length;b+=1)x(w[b]);C=!1},d(g){g&&_(e),H(r),Y(w,g)}}}function Pt(t){let e,n,l,s,i,r=L(he),o=[];for(let a=0;a<r.length;a+=1)o[a]=Ie(Ce(t,r,a));const c=a=>x(o[a],1,1,()=>{o[a]=null});return{c(){e=f("section"),n=f("h2"),n.textContent="Learning Interests",l=k(),s=f("div");for(let a=0;a<o.length;a+=1)o[a].c();m(n,"class","mb-3"),m(s,"class","grid gap-4 md:grid-cols-1 lg:grid-cols-2")},m(a,u){p(a,e,u),h(e,n),h(e,l),h(e,s);for(let d=0;d<o.length;d+=1)o[d]&&o[d].m(s,null);i=!0},p(a,[u]){if(u&3){r=L(he);let d;for(d=0;d<r.length;d+=1){const E=Ce(a,r,d);o[d]?(o[d].p(E,u),v(o[d],1)):(o[d]=Ie(E),o[d].c(),v(o[d],1),o[d].m(s,null))}for(oe(),d=r.length;d<o.length;d+=1)c(d);re()}},i(a){if(!i){for(let u=0;u<r.length;u+=1)v(o[u]);i=!0}},o(a){o=o.filter(Boolean);for(let u=0;u<o.length;u+=1)x(o[u]);i=!1},d(a){a&&_(e),Y(o,a)}}}function Mt(t,e,n){let l=[...Array(he.length)].fill(0);function s(r,o,c){r.detail.state?n(0,l[o]=c,l):n(0,l[o]=-1,l)}function i(r,o){return c=>s(c,r,o)}return[l,i]}class Ot extends B{constructor(e){super(),N(this,e,Mt,Pt,O,{})}}function jt(t,e,n){const l=t.slice();return l[0]=e[n],l}function At(t){let e,n,l,s,i,r,o,c,a,u,d=t[0].text+"",E,T;return{c(){e=f("div"),n=f("img"),s=k(),i=f("p"),r=f("b"),o=f("u"),o.textContent=`${t[0].title}`,c=k(),a=f("br"),u=k(),E=se(d),T=k(),Le(n.src,l="assets/hardskills/"+t[0].title+".png")||m(n,"src",l),m(n,"class","object-contain h-24 w-24 mb-4"),m(n,"alt",t[0].title+" app icon"),m(i,"class","my-0"),m(e,"class","border rounded shadow py-4")},m(I,C){p(I,e,C),h(e,n),h(e,s),h(e,i),h(i,r),h(r,o),h(i,c),h(i,a),h(i,u),h(i,E),h(e,T)},p:S,d(I){I&&_(e)}}}function Lt(t){let e,n,l,s=L(bt),i=[];for(let r=0;r<s.length;r+=1)i[r]=At(jt(t,s,r));return{c(){e=f("h2"),e.textContent="My Programming & Design Toolkit",n=k(),l=f("div");for(let r=0;r<i.length;r+=1)i[r].c();m(e,"class","mb-3"),m(l,"class","grid gap-3 grid-cols-2 md:grid-cols-3 lg:grid-cols-6")},m(r,o){p(r,e,o),p(r,n,o),p(r,l,o);for(let c=0;c<i.length;c+=1)i[c]&&i[c].m(l,null)},p:S,i:S,o:S,d(r){r&&(_(e),_(n),_(l)),Y(i,r)}}}class Nt extends B{constructor(e){super(),N(this,e,null,Lt,O,{})}}function Te(t,e,n){const l=t.slice();return l[1]=e[n],l}function Bt(t){let e;return{c(){e=f("span"),e.textContent=`${t[1]}`,m(e,"slot","header")},m(n,l){p(n,e,l)},p:S,d(n){n&&_(e)}}}function Dt(t){let e;return{c(){e=f("span"),m(e,"slot","body")},m(n,l){p(n,e,l)},p:S,d(n){n&&_(e)}}}function Pe(t){let e,n;return e=new Fe({props:{$$slots:{body:[Dt],header:[Bt]},$$scope:{ctx:t}}}),{c(){F(e.$$.fragment)},m(l,s){D(e,l,s),n=!0},p(l,s){const i={};s&16&&(i.$$scope={dirty:s,ctx:l}),e.$set(i)},i(l){n||(v(e.$$.fragment,l),n=!0)},o(l){x(e.$$.fragment,l),n=!1},d(l){H(e,l)}}}function Ht(t){let e,n,l,s,i=L(t[0]),r=[];for(let c=0;c<i.length;c+=1)r[c]=Pe(Te(t,i,c));const o=c=>x(r[c],1,1,()=>{r[c]=null});return{c(){e=f("h2"),e.textContent="Spotlight Showcase",n=k();for(let c=0;c<r.length;c+=1)r[c].c();l=ge(),m(e,"class","mb-3")},m(c,a){p(c,e,a),p(c,n,a);for(let u=0;u<r.length;u+=1)r[u]&&r[u].m(c,a);p(c,l,a),s=!0},p(c,[a]){if(a&1){i=L(c[0]);let u;for(u=0;u<i.length;u+=1){const d=Te(c,i,u);r[u]?(r[u].p(d,a),v(r[u],1)):(r[u]=Pe(d),r[u].c(),v(r[u],1),r[u].m(l.parentNode,l))}for(oe(),u=i.length;u<r.length;u+=1)o(u);re()}},i(c){if(!s){for(let a=0;a<i.length;a+=1)v(r[a]);s=!0}},o(c){r=r.filter(Boolean);for(let a=0;a<r.length;a+=1)x(r[a]);s=!1},d(c){c&&(_(e),_(n),_(l)),Y(r,c)}}}function Ft(t){return[["suSSTaina-Ng's: Floating Farm for Eutrophication","Science Centre Research and Development Programme","Accessible In-House Paper Recycling Machine"]]}class qt extends B{constructor(e){super(),N(this,e,Ft,Ht,O,{})}}function Me(t,e,n){const l=t.slice();return l[1]=e[n],l}function Oe(t){let e,n,l,s;var i=t[1];function r(o,c){return{}}return i&&(n=$e(i,r())),{c(){e=f("div"),n&&F(n.$$.fragment),l=k(),m(e,"class","mb-5")},m(o,c){p(o,e,c),n&&D(n,e,null),h(e,l),s=!0},p(o,c){if(i!==(i=o[1])){if(n){oe();const a=n;x(a.$$.fragment,1,0,()=>{H(a,1)}),re()}i?(n=$e(i,r()),F(n.$$.fragment),v(n.$$.fragment,1),D(n,e,l)):n=null}},i(o){s||(n&&v(n.$$.fragment,o),s=!0)},o(o){n&&x(n.$$.fragment,o),s=!1},d(o){o&&_(e),n&&H(n)}}}function zt(t){let e,n,l=L(t[0]),s=[];for(let r=0;r<l.length;r+=1)s[r]=Oe(Me(t,l,r));const i=r=>x(s[r],1,1,()=>{s[r]=null});return{c(){for(let r=0;r<s.length;r+=1)s[r].c();e=ge()},m(r,o){for(let c=0;c<s.length;c+=1)s[c]&&s[c].m(r,o);p(r,e,o),n=!0},p(r,[o]){if(o&1){l=L(r[0]);let c;for(c=0;c<l.length;c+=1){const a=Me(r,l,c);s[c]?(s[c].p(a,o),v(s[c],1)):(s[c]=Oe(a),s[c].c(),v(s[c],1),s[c].m(e.parentNode,e))}for(oe(),c=l.length;c<s.length;c+=1)i(c);re()}},i(r){if(!n){for(let o=0;o<l.length;o+=1)v(s[o]);n=!0}},o(r){s=s.filter(Boolean);for(let o=0;o<s.length;o+=1)x(s[o]);n=!1},d(r){r&&_(e),Y(s,r)}}}function Ut(t){return[[ot,Ot,Nt,qt]]}class Wt extends B{constructor(e){super(),N(this,e,Ut,zt,O,{})}}function Jt(t){let e,n,l,s,i,r,o;return r=new Wt({}),{c(){e=f("head"),n=f("title"),l=se(t[0]),s=k(),i=f("main"),F(r.$$.fragment),m(i,"class","px-10")},m(c,a){p(c,e,a),h(e,n),h(n,l),p(c,s,a),p(c,i,a),D(r,i,null),o=!0},p(c,[a]){(!o||a&1)&&Ve(l,c[0])},i(c){o||(v(r.$$.fragment,c),o=!0)},o(c){x(r.$$.fragment,c),o=!1},d(c){c&&(_(e),_(s),_(i)),H(r)}}}function Rt(t,e,n){let{title:l="En Jie's Portfolio"}=e;return t.$$set=s=>{"title"in s&&n(0,l=s.title)},[l]}class Vt extends B{constructor(e){super(),N(this,e,Rt,Jt,O,{title:0})}}new Vt({target:document.getElementById("app")});
