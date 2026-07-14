// Simple typing effect for role or intro
class Typer{
  constructor(el,words,delay=2000){this.el=el;this.words=words;this.txt='';this.wordIndex=0;this.delay=delay;this.isDeleting=false;this.type()}
  type(){const current=this.wordIndex%this.words.length;const full=this.words[current];if(this.isDeleting){this.txt=full.substring(0,this.txt.length-1)}else{this.txt=full.substring(0,this.txt.length+1)}this.el.innerHTML=`<span class="typing">${this.txt}</span>`;let typeSpeed=120; if(this.isDeleting) typeSpeed/=2; if(!this.isDeleting && this.txt===full){typeSpeed=this.delay; this.isDeleting=true}else if(this.isDeleting && this.txt===''){this.isDeleting=false;this.wordIndex++;typeSpeed=300}
    setTimeout(()=>this.type(),typeSpeed);
  }
}

document.addEventListener('DOMContentLoaded',()=>{
  const el=document.querySelector('.role');
  if(el){new Typer(el,['Software Engineer','Full Stack Developer','Problem Solver'],1800)}
});
