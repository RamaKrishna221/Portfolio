// Core JS for interactions: loader, navigation toggle, counters, back-to-top
document.addEventListener('DOMContentLoaded',()=>{
  // loader
  const loader=document.getElementById('loader');
  setTimeout(()=>{loader.style.display='none'},800);

  // nav toggle
  const toggle=document.querySelector('.nav-toggle');
  const links=document.querySelector('.nav-links');
  toggle?.addEventListener('click',()=>{links.classList.toggle('open'); if(links.classList.contains('open')) links.style.display='flex'; else links.style.display='none'});

  // back to top
  const back=document.getElementById('backToTop');
  back.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));

  // counters
  const counters=document.querySelectorAll('.counter span');
  const options={threshold:0.5};
  const counterObserver=new IntersectionObserver((entries,obs)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        const el=entry.target;
        const target=parseFloat(el.getAttribute('data-target'))||0;
        const isFloat=String(target).includes('.');
        let current=0;
        const increment= target/100;
        const interval=setInterval(()=>{
          current+=increment;
          if(current>=target){
            el.textContent=isFloat?target.toFixed(1):String(Math.round(target));
            clearInterval(interval);
          }else{
            el.textContent=isFloat?current.toFixed(1):String(Math.round(current));
          }
        },20);
        obs.unobserve(el);
      }
    });
  },options);
  counters.forEach(c=>counterObserver.observe(c));

  // reveal on scroll
  const sr=document.querySelectorAll('.reveal');
  const ro=new IntersectionObserver((entries)=>{
    entries.forEach(e=>{if(e.isIntersecting) e.target.classList.add('active')});
  },{threshold:0.15});
  sr.forEach(s=>ro.observe(s));

  // animate skill progress bars when visible
  const progressBars=document.querySelectorAll('.progress-bar');
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(progressBars.length && !prefersReduced){
    const pbObserver=new IntersectionObserver((entries,obs)=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting){
          const el=entry.target; const value=parseInt(el.getAttribute('data-value'))||0;
          el.style.width = value + '%';
          const parent = el.closest('.progress');
          if(parent) parent.setAttribute('aria-valuenow', value);
          obs.unobserve(el);
        }
      });
    },{threshold:0.3});
    progressBars.forEach(p=>pbObserver.observe(p));
  } else if(progressBars.length){
    // if reduced motion, set to final widths immediately
    progressBars.forEach(p=>{p.style.width = (p.getAttribute('data-value')||0) + '%';});
  }

  // contact form basic validation
  const form=document.getElementById('contactForm');
  form.addEventListener('submit',e=>{
    e.preventDefault();
    alert('Thank you! Message sent (demo).');
    form.reset();
  });

  // resume download support
  document.querySelectorAll('a.download-resume').forEach(link=>{
    link.addEventListener('click',async e=>{
      const href=link.getAttribute('href');
      if(!href) return;
      e.preventDefault();
      try{
        const response=await fetch(href);
        if(!response.ok) throw new Error('Unable to download resume');
        const blob=await response.blob();
        const url=URL.createObjectURL(blob);
        const temp=document.createElement('a');
        temp.href=url;
        temp.download=link.getAttribute('download')||'resume.pdf';
        document.body.appendChild(temp);
        temp.click();
        temp.remove();
        URL.revokeObjectURL(url);
      }catch(err){
        console.error(err);
        window.location.href=href;
      }
    });
  });

  // custom cursor
  const cursor=document.createElement('div');cursor.style.cssText='width:14px;height:14px;border-radius:50%;position:fixed;pointer-events:none;z-index:9999;border:2px solid rgba(255,255,255,0.6);transform:translate(-50%,-50%);transition:transform .12s ease,background .12s ease';document.body.appendChild(cursor);
  document.addEventListener('mousemove',e=>{cursor.style.left=e.clientX+'px';cursor.style.top=e.clientY+'px'});
});
