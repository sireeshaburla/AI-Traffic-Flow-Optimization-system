const $ = (id) => document.getElementById(id);
let timer = null;
let counts = [12,17,8,14];
const names = ["North","East","South","West"];

function render(){
  const total = counts.reduce((a,b)=>a+b,0);
  const max = Math.max(...counts);
  const lead = counts.indexOf(max);
  const density = total < 35 ? "Low" : total < 55 ? "Medium" : "High";
  $("vehicles").textContent = total;
  $("density").textContent = density;
  $("densityHint").textContent = density === "High" ? "Congestion detected" : density === "Low" ? "Light vehicle flow" : "Steady vehicle flow";
  $("timing").textContent = (25 + max) + " sec";
  $("wait").textContent = Math.max(12, Math.round(total * 1.25)) + " sec";
  $("recommendTitle").textContent = "Prioritize " + names[lead] + " lane";
  $("recommendText").textContent = names[lead] + " lane has the highest vehicle count. Allocate a longer green phase to help clear the queue.";
  $("suggested").textContent = (30 + max) + " seconds";
  ["N","E","S","W"].forEach((key,i)=>{
    $("count"+key).textContent = counts[i];
    $("bar"+key).style.width = Math.min(100,counts[i]*3.5) + "%";
  });
}
function tick(){
  counts = counts.map(n=>Math.max(2,Math.min(32,n + Math.floor(Math.random()*9)-4)));
  render();
  const isRed = Math.random() > .65;
  $("signalLight").parentElement.classList.toggle("red",isRed);
  $("signalText").textContent = isRed ? "RED" : "GREEN";
}
$("startBtn").addEventListener("click",()=>{
  if(timer){clearInterval(timer);timer=null;$("startBtn").textContent="▶ Resume simulation";}
  else{tick();timer=setInterval(tick,1800);$("startBtn").textContent="Ⅱ Pause simulation";}
});
$("resetBtn").addEventListener("click",()=>{
  if(timer) clearInterval(timer);
  timer=null;counts=[12,17,8,14];$("startBtn").textContent="▶ Start simulation";
  $("signalLight").parentElement.classList.remove("red");$("signalText").textContent="GREEN";render();
});
render();
