import React, { useEffect } from "react";
import Lenis from "lenis";
import ScrollMagic from "scrollmagic";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
window.ScrollMagic = ScrollMagic;

// import { initAnimations } from "./GardePage.js";
function initAnimations() {
  // Smooth Scroll
  // Smooth Scroll
  console.log(ScrollMagic.version);
  const lenis = new Lenis();
  lenis.on("scroll", (e) => {
    console.log(e);
  });
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  // Scroll Down - Button<
  document.addEventListener("DOMContentLoaded", function () {
    const scrollBtn = document.getElementById("scrollBtn");
    window.addEventListener("scroll", function () {
      const box = document.querySelector(".scrollBtn");
      if (window.scrollY > 0) {
        box.classList.add("move");
      } else {
        box.classList.remove("move");
      }
    });
  });

  // Preloader Text
  window.addEventListener("load", function () {
    const preloader = document.getElementById("preloader");
    const firstText = document.getElementById("first-text");
    const secondText = document.getElementById("second-text");
    // Show the first text
    firstText.style.opacity = "1";
    // loading animation
    setTimeout(function () {
      firstText.style.opacity = "0";
      secondText.style.opacity = "1";
    }, 1000);
    setTimeout(function () {
      preloader.style.display = "none";
    }, 4000);
  });

  window.addEventListener("load", function () {
    document.body.classList.add("overflow-hidden"); // body - overflow hidden
    document.documentElement.classList.add("overflow-hidden"); // html - overflow hidden
    setTimeout(function () {
      const loaderVideo = document.getElementById("loaderVideo");
      loaderVideo.style.width = "90%";
      loaderVideo.style.height = "90%";
      loaderVideo.style.transform = "translate(-50%,-36%)";
      loaderVideo.style.top = "60%";
      loaderVideo.style.left = "50%";
      loaderVideo.style.position = "fixed";
      loaderVideo.style.borderRadius = "12px";
    }, 2000);
    setTimeout(() => {
    
      if (window.matchMedia("(max-width: 1199px)").matches) {
        loaderVideo.style.width = "400px";
        loaderVideo.style.height = "400px";
        loaderVideo.style.left = "auto";
        loaderVideo.style.right = "60px";
        loaderVideo.style.transform = "translate(0%, -50%)";
      } else if (window.matchMedia("(max-width: 1399px)").matches) {
        loaderVideo.style.width = "450px";
        loaderVideo.style.height = "450px";
        loaderVideo.style.left = "auto";
        loaderVideo.style.right = "80px";
        loaderVideo.style.transform = "translate(0%, -50%)";
      } else {
        loaderVideo.style.width = "500px";
        loaderVideo.style.height = "500px";
        loaderVideo.style.top = "50%";
        loaderVideo.style.left = "auto";
        loaderVideo.style.right = "100px";
        loaderVideo.style.transform = "translate(0%, -50%)";
        loaderVideo.style.position = "absolute";
      }
      document.body.classList.remove("overflow-hidden"); // body - overflow visible
      document.documentElement.classList.remove("overflow-hidden"); // html - overflow visible
    }, 3000); // Adjust the time as needed
  });

  // ScrollMagic
  var controller = new ScrollMagic.Controller({ loglevel: 3 });
  new ScrollMagic.Scene({
    triggerElement: "#section2",
    triggerHook: "onEnter",
    duration: "1%",
  })
    .setPin("#section1 .pinWrapper", {
      pushFollowers: false,
    })
    .addTo(controller);
  new ScrollMagic.Scene({
    triggerElement: "#section2",
    triggerHook: 0.5,
    duration: "100%",
  })
    .setPin("#section2 .pinWrapper", {
      pushFollowers: false,
    })
    .addTo(controller);
  new ScrollMagic.Scene({
    triggerElement: "#section3",
    triggerHook: 0.5,
    duration: "50%",
  })
    .setPin("#section3 .pinWrapper", {
      pushFollowers: false,
    })
    .addTo(controller);
  // new ScrollMagic.Scene({
  //   triggerElement: "#section4",
  //   triggerHook: 0,
  //   duration: "100%",
  // })
  //   .setPin("#section4 .pinWrapper", {
  //     pushFollowers: false,
  //   })
  //   .addTo(controller);
}

const GardPage = () => {
  useEffect(() => {
    initAnimations();
  }, []);

  return (
    <div className="body">
      <div className="events-page">
        <section id="section1" className="event">
          <div className="pinWrapper">
            <div className="text">
              <h2>Unique</h2>
              <p>
                Explorez nos collections uniques de hoodies, où chaque pièce est
                conçue avec un mélange parfait de style et de confort.
              </p>
            </div>
            <div className="image" id="loaderVideo">
              <video autoPlay loop muted playsInline>
                <source
                  src="https://raw.githubusercontent.com/mobalti/open-props-interfaces/f06d7301a0e51d1ada45994de485c8872270c4c6/marketing-hero-section/assets/video-1.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
          <div className="scrollBtn" id="scrollBtn">
            <h6>scroll</h6>
            <span></span>
          </div>
        </section>
        <section id="section2" className="event">
          <div className="pinWrapper">
            <div className="text">
              <h2>Mondiale</h2>
              <p>
                Inspirées des tendances mondiales, nos créations reflètent les
                dernières modes et innovations en matière de vêtements
                décontracté.
              </p>
            </div>
            <div className="image"></div>
          </div>
        </section>
        <section id="section3" className="event">
          <div className="pinWrapper">
            <div className="text">
              <h2>Perfectionniste</h2>
              <p>
                Veillant à ce que chaque couture, chaque bouton et chaque
                finition soient parfaits, nous accordons une attention
                minutieuse aux détails.
              </p>
            </div>
            <div className="image"></div>
          </div>
        </section>
        {/* <section id="section4" className="event">
          <div className="pinWrapper">
            <div className="text">
              <h2>Office</h2>
              <p>
                Find the perfect office furniture to make your workspace
                comfortable and productive.
              </p>
            </div>
            <div className="image"></div>
          </div>
        </section> */}
      </div>

      <div id="preloader">
        <div className="text-wrapper">
          <h1 id="first-text">Welcome to</h1>
          <h3 id="second-text">the fantasy </h3>
        </div>
      </div>
    </div>
  );
};

export default GardPage;
