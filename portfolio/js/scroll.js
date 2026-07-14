// Smooth scroll behavior for anchor links & simple scroll reveal for sections
document.addEventListener('click',e=>{
  if(e.target.matches('a[href^="#"]')){
    const href=e.target.getAttribute('href');
    if(href.length>1){
      const target=document.querySelector(href);
      if(target){e.preventDefault();target.scrollIntoView({behavior:'smooth',block:'start'})}
    }
  }
});

// Simple particles background (lightweight)
(function(){
  const canvas=document.getElementById('particles'); if(!canvas) return; const ctx=canvas.getContext('2d'); let w, h, particles=[];
  function resize(){w=canvas.width=window.innerWidth;h=canvas.height=document.querySelector('.hero').offsetHeight}
  window.addEventListener('resize',resize); resize();
  function init(){particles=[];for(let i=0;i<60;i++){particles.push({x:Math.random()*w,y:Math.random()*h,r:Math.random()*1.8+0.4,dx:(Math.random()-0.5)*0.3,dy:(Math.random()-0.5)*0.3})}}
  function draw(){ctx.clearRect(0,0,w,h);for(const p of particles){ctx.beginPath();const g=ctx.createRadialGradient(p.x,p.y,0,p.x,p.y,p.r*6);g.addColorStop(0,'rgba(37,117,252,0.18)');g.addColorStop(1,'rgba(106,17,203,0.02)');ctx.fillStyle=g;ctx.arc(p.x,p.y,p.r,0,Math.PI*2);ctx.fill();p.x+=p.dx;p.y+=p.dy;if(p.x<0) p.x=w; if(p.x>w) p.x=0; if(p.y<0) p.y=h; if(p.y>h) p.y=0}}
  function loop(){draw();requestAnimationFrame(loop)}
  init(); loop();
})();
