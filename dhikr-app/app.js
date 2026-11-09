const $=s=>document.querySelector(s);
let S={};try{S=JSON.parse(localStorage.dk)||{}}catch(e){}
S.cur=S.cur||"sub";S.k=S.k||{};S.cu=S.cu||[];S.d=S.d||{};S.az=S.az||{};
const save=()=>{try{localStorage.dk=JSON.stringify(S)}catch(e){}};
const day=(o=0)=>new Date(Date.now()-o*864e5).toLocaleDateString("sv");
const all=()=>[...DHIKR,...S.cu],find=id=>all().find(x=>x.id==id)||DHIKR[0];
const vib=n=>navigator.vibrate&&navigator.vibrate(n);
let tab="c",m=new Date().getHours()<14?0:1;
function vC(){const d=find(S.cur),n=S.k[d.id]||0,C=2*Math.PI*110,p=Math.min(n/d.g,1);
return `<span class="tag">${d.c||"Personnel"}</span><h2>${d.n}</h2><div class="ar">${d.a||""}</div>
<button class="ring" data-a="tap" aria-label="Ajouter 1"><svg viewBox="0 0 260 260"><circle class="bg" cx="130" cy="130" r="110"/><circle class="fg" cx="130" cy="130" r="110" stroke-dasharray="${C}" stroke-dashoffset="${C*(1-p)}" transform="rotate(-90 130 130)"/></svg><span class="num">${n}</span><span class="of">sur ${d.g}${n>=d.g?" · objectif atteint, qu’Allah l’accepte":""}</span></button>
<p class="tx">${d.t||""}</p><div class="row"><button data-a="undo">−1</button><button data-a="reset">↻ Remettre à zéro</button></div>`}
const card=x=>{const n=S.k[x.id]||0;return `<div class="card" data-a="pick" data-id="${x.id}">${x.c?"":`<u data-a="del" data-id="${x.id}" aria-label="Supprimer">✕</u>`}<div class="ar">${x.a||""}</div><b>${x.n}</b><small>${n} sur ${x.g}</small><i style="width:${Math.min(100,n/x.g*100)}%"></i></div>`};
function vL(){const g=(c,t)=>{const l=all().filter(x=>(x.c||"Perso")==c);return l.length?`<h3>${t}</h3>`+l.map(card).join(""):""};
return g("Sunna","Rapportés du Prophète ﷺ")+g("Wird","Grands wirds (tradition)")+g("Perso","Mes dhikrs")+
`<h3>Ajouter un dhikr</h3><input id="fn" placeholder="Nom (ex. Hasbunallah)"><input id="fa" dir="rtl" placeholder="Texte arabe (facultatif)"><input id="fg" type="number" min="1" inputmode="numeric" placeholder="Objectif (ex. 100)"><div class="row" style="margin-top:8px"><button data-a="add">Enregistrer</button></div>`}
function vA(){const k=i=>day()+m+i,dn=AZ.filter((z,i)=>(S.az[k(i)]||0)>=z.n).length;
return `<div class="seg"><button data-m="0" class="${m?"":"on"}">Azkar du matin</button><button data-m="1" class="${m?"on":""}">Azkar du soir</button></div><div class="bar"><i style="width:${dn/AZ.length*100}%"></i></div><p class="mut">${dn} sur ${AZ.length} terminés aujourd’hui</p>`+
AZ.map((z,i)=>{const n=S.az[k(i)]||0,ok=n>=z.n;return `<div class="card az ${ok?"done":""}" data-a="az" data-i="${i}"><div class="ar">${z.a.replace("§",P[m])}</div><p>${z.f}</p><b>${ok?"✓ ":""}${Math.min(n,z.n)} sur ${z.n}</b></div>`}).join("")}
function vS(){const D=[...Array(7)].map((_,i)=>[day(6-i),S.d[day(6-i)]||0]),mx=Math.max(1,...D.map(x=>x[1]));
let st=0,o=S.d[day()]?0:1;while(S.d[day(o)]>0){st++;o++}
const tot=Object.values(S.d).reduce((a,b)=>a+b,0);
return `<h3>Aujourd’hui</h3><div class="big">${S.d[day()]||0}</div><p class="mut">dhikrs comptés</p><div class="wk">${D.map(x=>`<div><i style="height:${x[1]/mx*90}px"></i>${x[0].slice(8)}</div>`).join("")}</div><div class="card"><b>${st} jour${st>1?"s":""} de suite</b><small>${tot} dhikrs depuis le début</small></div>`}
function render(){$("#v").innerHTML={c:vC,l:vL,a:vA,s:vS}[tab]();document.querySelectorAll("#nav button").forEach(b=>b.classList.toggle("on",b.dataset.t==tab))}
document.addEventListener("click",e=>{const t=e.target.closest("[data-a],[data-t],[data-m]");if(!t)return;const D=t.dataset;
if(D.t){tab=D.t;scrollTo(0,0)}else if(D.m!=null)m=+D.m;
else if(D.a=="tap"){const d=find(S.cur);S.k[d.id]=(S.k[d.id]||0)+1;S.d[day()]=(S.d[day()]||0)+1;vib(S.k[d.id]==d.g?[90,60,90]:12)}
else if(D.a=="undo"){const d=S.cur;if(S.k[d]>0){S.k[d]--;if(S.d[day()]>0)S.d[day()]--}}
else if(D.a=="reset"){if(!confirm("Remettre ce compteur à zéro ?"))return;S.k[S.cur]=0}
else if(D.a=="pick"){S.cur=D.id;tab="c";scrollTo(0,0)}
else if(D.a=="del"){if(!confirm("Supprimer ce dhikr ?"))return;S.cu=S.cu.filter(x=>x.id!=D.id);if(S.cur==D.id)S.cur="sub"}
else if(D.a=="add"){const n=$("#fn").value.trim(),g=+$("#fg").value;if(!n||!(g>0)){alert("Indiquez un nom et un objectif.");return}
const id="u"+Date.now();S.cu.push({id,n,a:$("#fa").value.trim(),g});S.cur=id;tab="c"}
else if(D.a=="az"){const z=AZ[D.i],k=day()+m+D.i;S.az[k]=Math.min((S.az[k]||0)+1,z.n);vib(S.az[k]>=z.n?[60,40,60]:10)}
save();render()});
render();
if("serviceWorker"in navigator)addEventListener("load",()=>navigator.serviceWorker.register("sw.js").catch(()=>{}));
