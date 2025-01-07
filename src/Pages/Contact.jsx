import { useEffect, useState } from "react";
import "./Contact.css"
import Spline from '@splinetool/react-spline';

function Contact() {
useEffect(()=>{
  const canvas = document.getElementById('particleCanvas');
const ctx = canvas.getContext('2d');

// Initial canvas size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight+100;

let particles = [];
let particleCount = calculateParticleCount();

class Particle {
  constructor() {
      this.reset();
      this.y = Math.random() * canvas.height;
      this.fadeDelay = Math.random() * 600 + 100;
      this.fadeStart = Date.now() + this.fadeDelay;
      this.fadingOut = false;

      // Définir une couleur fixe : #d9d9d9
      this.colorValue = { r: 37, g: 76, b: 138 }; // RGB de #d9d9d9
  }

  reset() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.speed = Math.random() / 5 + 0.1;
      this.opacity = 1;
      this.fadeDelay = Math.random() * 600 + 100;
      this.fadeStart = Date.now() + this.fadeDelay;
      this.fadingOut = false;

      // La couleur reste fixe, pas de réinitialisation aléatoire ici
  }

  update() {
      this.y -= this.speed;
      if (this.y < 0) {
          this.reset();
      }

      if (!this.fadingOut && Date.now() > this.fadeStart) {
          this.fadingOut = true;
      }
      
      if (this.fadingOut) {
          this.opacity -= 0.008;
          if (this.opacity <= 0) {
              this.reset();
          }
      }
  }

  draw() {
      ctx.fillStyle = `rgba(${this.colorValue.r}, ${this.colorValue.g}, ${this.colorValue.b}, ${this.opacity})`;
      const width = 1; // Largeur augmentée
      const height = Math.random() * 3 + 2; // Hauteur augmentée
  
      ctx.fillRect(this.x, this.y, width, height);  }
}


function initParticles() {
    particles = [];
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(particle => {
        particle.update();
        particle.draw();
    });
    requestAnimationFrame(animate);
}

function calculateParticleCount() {
    return Math.floor((canvas.width * canvas.height) / 6000);
}

function onResize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    particleCount = calculateParticleCount();
    initParticles();
}

window.addEventListener('resize', onResize);

initParticles();
animate();

},[])
  return (
<div className="body1">
    <div class="header">
      <h2><a href="https://codepen.io/RAFA3L" target="_blank" rel="noopener noreferrer"></a></h2>
      <div class="mid-spot" ></div>

    

      <div class="spotlight">
        <div></div>

        <div></div>
        <div></div>
      </div>
    </div>
    
    <canvas id="particleCanvas"></canvas>

    <div class="accent-lines">
      <div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
 
    <Spline scene="https://prod.spline.design/rCDuR87DDCKoIrXK/scene.splinecode" />


    <div class="heroSubP">
      <p>Contactez Nous</p>
    </div>
    <div class="hero">
      <div class="heroT">
        <h2>Devouch</h2>
        <h2>Devouch</h2>
      </div>
    </div>
    <p class="heroP">
    <i class="fa fa-phone"></i> 
    Mobile: <a >+33 7 45 95 73 17</a> <br />
  
    <i class="fa fa-phone"></i> 
    Linkedin: <a >Devouch</a><br />

    <i class="fa fa-envelope"></i> 
    Email: <a >Devouch.Inc@gmail.com</a><br />


  </p>

  <img id="avatar" src="/Capture d'écran 2025-01-07 205222.png" width="150" height="150" alt="Craig's Avatar"/>
    
  
    </div>

  );
}

export default Contact;
