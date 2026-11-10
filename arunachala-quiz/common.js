import {initializeApp} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import * as A from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import * as F from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import {firebaseConfig} from "./firebase-config.js";
const app=initializeApp(firebaseConfig);
export const auth=A.getAuth(app), db=F.getFirestore(app); export {A,F};
export const $=s=>document.querySelector(s);
export const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export const toast=m=>{const t=$('#toast');t.textContent=m;t.className='show';setTimeout(()=>t.className='',3500)};
export function beep(f=660,d=.15){if(localStorage.mute==='1')return;try{const c=new(window.AudioContext||webkitAudioContext)(),o=c.createOscillator();o.frequency.value=f;o.connect(c.destination);o.start();o.stop(c.currentTime+d)}catch{}}
export function head(sub){
 $('#hd').innerHTML=`<img src="logo.png" alt="Arunachala World School logo"><div class="ttl"><b>ARUNACHALA WORLD SCHOOL</b><small>${sub}</small></div><span id="net" class="pill">Online</span><button class="ghost" id="mute"></button><button class="ghost" id="fs">⛶</button>`;
 const m=()=>$('#mute').textContent=localStorage.mute==='1'?'🔇':'🔊';m();
 $('#mute').onclick=()=>{localStorage.mute=localStorage.mute==='1'?'0':'1';m()};
 $('#fs').onclick=()=>document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen();
 const n=()=>{$('#net').textContent=navigator.onLine?'Online':'Offline';$('#net').className='pill '+(navigator.onLine?'published':'ended')};
 addEventListener('online',n);addEventListener('offline',n);n();
}
export const rank=ps=>[...ps].sort((a,b)=>b.score-a.score||a.time-b.time);
export function board(ps){const r=rank(ps),m=['gold','silver','bronze'];
 return `<div class="podium">${r.slice(0,3).map((p,i)=>`<div class="card ${m[i]}"><b>${['🥇','🥈','🥉'][i]} #${i+1}</b><h3>${esc(p.name)}</h3><p>${esc(p.cls)}</p><h2>${p.score}</h2></div>`).join('')}</div>
 <div class="tw"><table><tr><th>Rank<th>Student<th>Class<th>Score<th>Correct<th>Wrong<th>Time</tr>${r.map((p,i)=>`<tr class="${m[i]||''}"><td>${i+1}<td>${esc(p.name)}<td>${esc(p.cls)}<td>${p.score}<td>${p.correct}<td>${p.wrong}<td>${p.time.toFixed(1)}s</tr>`).join('')}</table></div>`}
