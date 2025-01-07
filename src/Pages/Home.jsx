import React, { useRef, useEffect, useState } from "react";
// import { gsap } from "gsap";
// import { MotionPathPlugin } from "gsap/MotionPathPlugin";
// import { MorphSVGPlugin } from "./js";
import ShopCategory from "./GardePage";
import "./Home.css";
import About from "./About";
import Contact from "./Contact";
import Service from "./Service";
import Product from "./Product";
import Product1 from "./Product1";






function Home() {


  useEffect(() => {

    (function ($) {
      "use strict";



      document.getElementsByTagName("body")[0].addEventListener("mousemove", function (n) {
        t.style.left = n.clientX + "px",
          t.style.top = n.clientY + "px",
          e.style.left = n.clientX + "px",
          e.style.top = n.clientY + "px",
          i.style.left = n.clientX + "px",
          i.style.top = n.clientY + "px"
      });
      var t = document.getElementById("cursor"),
        e = document.getElementById("cursor2"),
        i = document.getElementById("cursor3");
      function n(t) {
        e.classList.add("hover"), i.classList.add("hover")
      }
      function s(t) {
        e.classList.remove("hover"), i.classList.remove("hover")
      }
      s();
      for (var r = document.querySelectorAll(".hover-target"), a = r.length - 1; a >= 0; a--) {
        o(r[a])
      }
      function o(t) {
        t.addEventListener("mouseover", n), t.addEventListener("mouseout", s)
      }




      $(".about-text").on('click', function () {
        $("body").addClass("about-on");
      });
      $(".about-close").on('click', function () {
        $("body").removeClass("about-on");
      });




      $(".contact-text").on('click', function () {
        $("body").addClass("contact-on");
      });
      $(".contact-close").on('click', function () {
        $("body").removeClass("contact-on");
      });



      $(".travel").on('click', function () {
        $("body").addClass("travel-on");
      });
      $(".travel-close").on('click', function () {
        $("body").removeClass("travel-on");
      });



      $(".wildlife").on('click', function () {
        $("body").addClass("wildlife-on");
      });
      $(".wildlife-close").on('click', function () {
        $("body").removeClass("wildlife-on");
      });



      $(".nature").on('click', function () {
        $("body").addClass("nature-on");
      });
      $(".nature-close").on('click', function () {
        $("body").removeClass("nature-on");
      });

    })(jQuery);



    // Exemple de fonction pour jouer un son, tenant compte de l'état.


  }, []);

  return (
    <div>

      <div className="hero-section">
        {/* <div className="about-text hover-target">À propos</div>
        <div className="contact-text hover-target">Contact</div> */}
        <div className="section-center">

          <ShopCategory />

          <div className="container-fluid">
            <div className="row1 justify-content-center">
              <img src="/Devouch (1).png" alt="Logo" className="logo-container" />

              <div className="col-12 text-center">
                <p>
                
                  <span className="wildlife hover-target">À propos</span>
                  <span className="travel hover-target">Services</span>
                  <span className="nature hover-target">Contact</span>
                </p>
              </div>
            </div>
          </div>
        </div>



      </div>


      <div className="about-section">


      </div>

      <div className="contact-section">

        <div className="contact-close hover-target"></div>
        <Contact />

      </div>

      <div className="travel-section">
        <div class="content">
          <h2>Quels sont Nos Services ?</h2>
          <h2>Quels sont Nos Services ?</h2>
        </div>
        <div className="travel-close hover-target"></div>
        <Service />
      </div>

      <div className="wildlife-section">
        {/* <div className="wildlife-close hover-target"></div>
        <div class="content">
          <h2>Quels sont Nos Produits ?</h2>
          <h2>Quels sont Nos Produits ?</h2>
        </div>
        <Product />
    
        <Product1 /> */}
          <div class="content9">
          <h2>Qui Sommes-Nous ?</h2>
          <h2>Qui Sommes-Nous ?</h2>
        </div>
        <div className="wildlife-close hover-target"></div>


        <About />

      </div>

      <div className="nature-section">
        <div className="nature-close hover-target"></div>
        <Contact />
      
      </div>

      <div className='cursor' id="cursor"></div>
      <div className='cursor2' id="cursor2"></div>
      <div className='cursor3' id="cursor3"></div>


    </div>


  );
}

export default Home;


