import React, { useContext, useEffect } from "react";
import "./Service.css";


const Service = () => {


  useEffect(() => {
    var swiper = new Swiper(".swiper", {
      effect: "cube",
      grabCursor: true,
      loop: true,
      speed: 1000,
      cubeEffect: {
        shadow: false,
        slideShadows: true,
        shadowOffset: 10,
        shadowScale: 0.94,
      },
      autoplay: {
        delay: 2600,
        pauseOnMouseEnter: true,
      },
    });




  }, []);
  return (
    <div>
      {/* <div id="tsparticles"></div> */}
      <section2>
        <div className="content2">
          <h1>Bienvenue ! <img id="steve3" src="/happy2.svg" alt="Steve" />
          </h1>
          <p>
          Notre expertise couvre un large éventail de services digitaux conçus pour répondre aux besoins des entreprises modernes. De la création d’applications performantes à des designs 3D immersifs, en passant par des interfaces utilisateur captivantes , nous mettons notre créativité et nos compétences techniques au service de vos projets.          </p>

        </div>

        <div className="swiper">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <img src="./Designer (9).png" />
              <div className="cost">Devouch</div>
              <div className="overlay">
                <h1>Développement Web</h1>
                <p>
                Nous proposons des solutions sur mesure pour Android, iOS, et web, garantissant une navigation fluide et des fonctionnalités modernes.</p>                <div className="ratings">
                  <div className="stars">
                    <ion-icon className="star" name="star"></ion-icon>
                    <ion-icon className="star" name="star"></ion-icon>
                    <ion-icon className="star" name="star"></ion-icon>
                    <ion-icon className="star" name="star"></ion-icon>
                    <ion-icon className="star" name="star-half-outline"></ion-icon>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <img src="./Designer (10).png" />
              <div className="cost">Devouch</div>
              <div className="overlay">
                <h1>Design 3D</h1>
                <p>
                Nos créations couvrent des animations, maquettes, et modèles personnalisés pour sublimer vos projets, qu'ils soient industriels ou artistiques.                </p>
                <div className="ratings">
                  <div className="stars">
                    <ion-icon className="star" name="star"></ion-icon>
                    <ion-icon className="star" name="star"></ion-icon>
                    <ion-icon className="star" name="star"></ion-icon>
                    <ion-icon className="star" name="star"></ion-icon>
                    <ion-icon className="star" name="star"></ion-icon>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <img src="./Designer (11).png" />
              <div className="cost dark-text">Devouch</div>
              <div className="overlay">
                <h1>UX/UI Design</h1>
                <p>
                Transformez vos idées en rendus 3D. Nous concevons des designs modernes et intuitifs, parfaitement adaptés à vos objectifs.                </p>
                <div className="ratings">
                  <div className="stars">
                    <ion-icon className="star" name="star"></ion-icon>
                    <ion-icon className="star" name="star"></ion-icon>
                    <ion-icon className="star" name="star"></ion-icon>
                    <ion-icon className="star" name="star"></ion-icon>
                    <ion-icon className="star" name="star-half-outline"></ion-icon>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <img src="./Designer (12).png" />
              <div className="cost dark-text">Devouch</div>
              <div className="overlay">
                <h1>Automatisation et Intégration</h1>
                <p>
                Intégrez vos systèmes existants à des outils modernes pour simplifier la gestion de vos processus et réduire les tâches répétitives.                </p>
                <div className="ratings">
                  <div className="stars">
                    <ion-icon className="star" name="star"></ion-icon>
                    <ion-icon className="star" name="star"></ion-icon>
                    <ion-icon className="star" name="star"></ion-icon>
                    <ion-icon className="star" name="star"></ion-icon>
                    <ion-icon className="star" name="star-outline"></ion-icon>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section2>
    </div>
  );
};

export default Service;
