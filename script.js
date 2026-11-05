const pages=[...document.querySelectorAll(".page")];
const navs=[...document.querySelectorAll("[data-page]")];
function goTo(index){
  pages.forEach((p,i)=>p.classList.toggle("active",i===index));
  document.querySelectorAll(".nav-link").forEach((n,i)=>n.classList.toggle("active",i===index));
  document.getElementById("mobileMenu").classList.remove("show");
  window.scrollTo({top:0,behavior:"smooth"});
}
navs.forEach(n=>n.addEventListener("click",()=>goTo(Number(n.dataset.page))));
document.getElementById("menuButton").addEventListener("click",()=>document.getElementById("mobileMenu").classList.toggle("show"));
document.getElementById("envelope").addEventListener("click",function(){
  this.classList.add("open");
  document.getElementById("tapHint").textContent="A LITTLE NOTE, JUST FOR YOU";
  setTimeout(()=>document.getElementById("finalLetter").classList.add("show"),550);
});
const sparkleLayer=document.getElementById("sparkles");
for(let i=0;i<48;i++){
  const s=document.createElement("span");s.className="sparkle";
  s.style.left=Math.random()*100+"%";s.style.top=Math.random()*100+"%";
  s.style.animationDelay=(Math.random()*3)+"s";s.style.opacity=Math.random()*.7;
  sparkleLayer.appendChild(s);
}
