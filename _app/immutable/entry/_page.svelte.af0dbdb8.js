import{S as re,i as le,s as se,k as A,a as v,q as I,y as ne,J as oe,l as _,h as n,c as g,m as f,r as C,z as ie,n as p,K as Se,G as l,b,L as X,A as ce,M as Y,g as de,d as Ae,N as _e,B as he,O as pe,H as fe,P as ue}from"../chunks/index.fc46900e.js";import{S as Te,T as Z,s as Pe,g as Ie}from"../chunks/ScoringRule.469c5461.js";const ee=[{Pid:"P1",Order:["STU","DIA","ACS"],ACS:[2,3,1,4],DIA:[2,1,3,4],STU:[3,1,2,4]},{Pid:"P2",Order:["DIA","STU","ACS"],ACS:[3,4,1,2],DIA:[4,3,1,2],STU:[3,4,1,2]},{Pid:"P3",Order:["STU","ACS","DIA"],ACS:[3,1,2,4],DIA:[2,1,3,4],STU:[3,2,4,1]},{Pid:"P4",Order:["ACS","STU","DIA"],ACS:[2,4,1,3],DIA:[1,2,4,3],STU:[1,2,4,3]},{Pid:"P5",Order:["DIA","ACS","STU"],ACS:[1,2,4,3],DIA:[4,1,2,3],STU:[1,2,3,4]},{Pid:"P6",Order:["ACS","DIA","STU"],ACS:[1,3,4,2],DIA:[2,3,4,1],STU:[2,4,3,1]},{Pid:"P7",Order:["STU","DIA","ACS"],ACS:[2,1,4,3],DIA:[3,1,4,2],STU:[2,4,3,1]},{Pid:"P8",Order:["DIA","STU","ACS"],ACS:[3,4,1,2],DIA:[1,3,4,2],STU:[1,2,4,3]},{Pid:"P9",Order:["ACS","DIA","STU"],ACS:[4,2,1,3],DIA:[3,2,1,4],STU:[3,1,2,4]},{Pid:"P11",Order:["STU","DIA","ACS"],ACS:[4,2,3,1],DIA:[2,3,4,1],STU:[3,4,2,1]},{Pid:"P12",Order:["ACS","STU","DIA"],ACS:[2,4,3,1],DIA:[1,3,2,3],STU:[4,3,1,2]},{Pid:"P13",Order:["DIA","ACS","STU"],ACS:[1,3,2,4],DIA:[1,2,4,3],STU:[2,1,3,4]},{Pid:"P14",Order:["STU","ACS","DIA"],ACS:[3,1,2,4],DIA:[3,4,2,1],STU:[4,2,3,1]},{Pid:"P15",Order:["DIA","STU","ACS"],ACS:[4,1,3,2],DIA:[4,3,1,2],STU:[1,3,4,2]},{Pid:"P16",Order:["ACS","DIA","STU"],ACS:[1,2,3,4],DIA:[4,3,1,2],STU:[1,3,4,2]},{Pid:"P17",Order:["STU","DIA","ACS"],ACS:[4,3,1,2],DIA:[4,2,3,1],STU:[2,1,4,3]},{Pid:"P18",Order:["ACS","STU","DIA"],ACS:[1,2,3,4],DIA:[3,4,2,1],STU:[4,1,3,2]},{Pid:"P19",Order:["DIA","ACS","STU"],ACS:[1,3,4,2],DIA:[3,4,2,1],STU:[2,3,1,4]},{Pid:"P20",Order:["STU","ACS","DIA"],ACS:[3,2,1,4],DIA:[2,3,4,1],STU:[4,2,1,3]},{Pid:"P21",Order:["DIA","STU","ACS"],ACS:[3,4,2,1],DIA:[3,4,1,2],STU:[2,3,4,1]}];function te(i,r,c){const a=i.slice();return a[3]=r[c],a}function ae(i){let r,c=i[3].Pid+"",a;return{c(){r=A("option"),a=I(c),this.h()},l(o){r=_(o,"OPTION",{});var h=f(r);a=C(h,c),h.forEach(n),this.h()},h(){r.__value=i[3],r.value=r.__value},m(o,h){b(o,r,h),l(r,a)},p:fe,d(o){o&&n(r)}}}function Ce(i){let r,c,a,o,h,L,S,u,k,w,O,H,N,D,q,M,U,T,R,J=Ie(Z[0])+"",j,$,P,y,x,K,m=ee,s=[];for(let e=0;e<m.length;e+=1)s[e]=ae(te(i,m,e));return P=new Te({}),{c(){r=A("meta"),c=v(),a=A("div"),o=A("h1"),h=I("Select a participant id"),L=v(),S=A("select"),u=A("option"),k=I("-");for(let e=0;e<s.length;e+=1)s[e].c();w=v(),O=A("p"),H=I("This select option was not provided to the participants."),N=v(),D=A("a"),q=I("See study protocol"),M=v(),U=A("p"),T=A("a"),R=I("Start from "),j=I(J),$=v(),ne(P.$$.fragment),this.h()},l(e){const d=oe("svelte-19ty0cv",document.head);r=_(d,"META",{name:!0,content:!0}),d.forEach(n),c=g(e),a=_(e,"DIV",{class:!0});var t=f(a);o=_(t,"H1",{class:!0});var E=f(o);h=C(E,"Select a participant id"),E.forEach(n),L=g(t),S=_(t,"SELECT",{class:!0});var z=f(S);u=_(z,"OPTION",{});var V=f(u);k=C(V,"-"),V.forEach(n);for(let G=0;G<s.length;G+=1)s[G].l(z);z.forEach(n),w=g(t),O=_(t,"P",{});var F=f(O);H=C(F,"This select option was not provided to the participants."),F.forEach(n),N=g(t),D=_(t,"A",{href:!0});var Q=f(D);q=C(Q,"See study protocol"),Q.forEach(n),M=g(t),U=_(t,"P",{class:!0});var W=f(U);T=_(W,"A",{class:!0,href:!0});var B=f(T);R=C(B,"Start from "),j=C(B,J),B.forEach(n),W.forEach(n),t.forEach(n),$=g(e),ie(P.$$.fragment,e),this.h()},h(){document.title="Landing page",p(r,"name","description"),p(r,"content","Landing page"),p(o,"class","mb-3"),u.__value=void 0,u.value=u.__value,p(S,"class","form-select"),i[0]===void 0&&Se(()=>i[1].call(S)),p(D,"href","/protocol"),p(T,"class","btn btn-warning"),p(T,"href",Z[0]),p(U,"class","mt-3"),p(a,"class","landing svelte-1jhvpxh")},m(e,d){l(document.head,r),b(e,c,d),b(e,a,d),l(a,o),l(o,h),l(a,L),l(a,S),l(S,u),l(u,k);for(let t=0;t<s.length;t+=1)s[t]&&s[t].m(S,null);X(S,i[0]),l(a,w),l(a,O),l(O,H),l(a,N),l(a,D),l(D,q),l(a,M),l(a,U),l(U,T),l(T,R),l(T,j),b(e,$,d),ce(P,e,d),y=!0,x||(K=[Y(S,"change",i[1]),Y(S,"change",i[2])],x=!0)},p(e,[d]){if(d&0){m=ee;let t;for(t=0;t<m.length;t+=1){const E=te(e,m,t);s[t]?s[t].p(E,d):(s[t]=ae(E),s[t].c(),s[t].m(S,null))}for(;t<s.length;t+=1)s[t].d(1);s.length=m.length}d&1&&X(S,e[0])},i(e){y||(de(P.$$.fragment,e),y=!0)},o(e){Ae(P.$$.fragment,e),y=!1},d(e){n(r),e&&n(c),e&&n(a),_e(s,e),e&&n($),he(P,e),x=!1,pe(K)}}}function De(i,r,c){let a;function o(){a=ue(this),c(0,a)}return[a,o,()=>{Pe(a)}]}class ve extends re{constructor(r){super(),le(this,r,De,Ce,se,{})}}export{ve as default};
