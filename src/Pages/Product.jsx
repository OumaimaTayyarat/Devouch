import React, { useContext, useEffect } from "react";
import "./Product.css";

const Product = () => {
 

  useEffect(() => {
    document.querySelectorAll(".anatomy-hover").forEach((item) => {
      item.addEventListener("click", function (e) {
        e.preventDefault();
        const hoverData = this.getAttribute("data-hover");
        document.querySelectorAll(".anatomy-info").forEach((info) => {
          if (info.getAttribute("data-hover") === hoverData) {
            info.style.display = "block";
          } else {
            info.style.display = "none";
          }
        });
      });
    });

    document.querySelectorAll(".js-close-anatomy").forEach((item) => {
      item.addEventListener("click", function (e) {
        e.preventDefault();
        this.closest(".anatomy-info").style.display = "none";
      });
    });
    document.addEventListener("DOMContentLoaded", function () {
      const anatomyHoverElements = document.querySelectorAll(".anatomy-hover");

      anatomyHoverElements.forEach((element) => {
        element.addEventListener("click", function (event) {
          event.preventDefault(); // Empêche le comportement par défaut du lien
          this.classList.toggle("active");
        });
      });
    });
  }, []);
  return (
    <div>
            

      <div className="shop-category">
        <script src="//cdn.shopify.com/s/files/1/0028/6132/t/4/assets/jquery-min.js?15684938142982497657"></script>
        <script src="//cdn.shopify.com/s/files/1/0028/6132/t/4/assets/breakpoints-min.js?15684938142982497657?v=1.2"></script>
        <script src="//cdn.shopify.com/s/files/1/0028/6132/t/4/assets/plugins-min.js?15684938142982497657?v=1.2"></script>
        <script src="//cdn.shopify.com/s/files/1/0028/6132/t/4/assets/scripts-min.js?15684938142982497657?v=1.2"></script>
        <div className="divider"></div>
        <div id="anatomy">
          <div className="anatomy-inner">
            <div className="anatomy-contain">
              <a
                className="anatomy-hover no-ajax"
                data-hover="patch"
                href="#"
                title="Patch"
              >
                <span className="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 371.2 371.2"
                    enableBackground="new 0 0 371.2 371.2"
                  >
                    <path d="M371.2 160.2H211V0h-50.8v160.2H0V211h160.2v160.2H211V211h160.2z" />
                  </svg>
                </span>
              </a>

              <a
                className="anatomy-hover no-ajax"
                data-hover="waistband"
                href="#"
                title="Waistband"
              >
                <span className="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 371.2 371.2"
                    enableBackground="new 0 0 371.2 371.2"
                  >
                    <path d="M371.2 160.2H211V0h-50.8v160.2H0V211h160.2v160.2H211V211h160.2z" />
                  </svg>
                </span>
              </a>
              <a
                className="anatomy-hover no-ajax"
                data-hover="pocketbags"
                href="#"
                title="Pocketbags"
              >
                <span className="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 371.2 371.2"
                    enableBackground="new 0 0 371.2 371.2"
                  >
                    <path d="M371.2 160.2H211V0h-50.8v160.2H0V211h160.2v160.2H211V211h160.2z" />
                  </svg>
                </span>
              </a>
              <a
                className="anatomy-hover no-ajax"
                data-hover="pocketbags1"
                href="#"
                title="Pocketbags1"
              >
                <span className="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 371.2 371.2"
                    enableBackground="new 0 0 371.2 371.2"
                  >
                    <path d="M371.2 160.2H211V0h-50.8v160.2H0V211h160.2v160.2H211V211h160.2z" />
                  </svg>
                </span>
              </a>
              <a
                className="anatomy-hover no-ajax"
                data-hover="details"
                href="#"
                title="Details"
              >
                <span className="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 371.2 371.2"
                    enableBackground="new 0 0 371.2 371.2"
                  >
                    <path d="M371.2 160.2H211V0h-50.8v160.2H0V211h160.2v160.2H211V211h160.2z" />
                  </svg>
                </span>
              </a>
              <div className="anatomy-info-contain left">
                <div className="anatomy-info" data-hover="waistband">
                  <h6>Hydraulique</h6>
                  <div className="p-small">
                  Vérins et outils de levage, filtres complets et éléments filtrants, raccords et bagues, adaptateurs, compteurs, tuyaux et flexibles haute pression, ainsi que pièces de rechange et accessoires.
                  </div>
                  <a
                    className="close-anatomy js-close-anatomy text-link text-link-small"
                    href="#"
                  >
                    Close
                  </a>
                  <a className="x-close js-close-anatomy" href="#">
                    X
                  </a>
                </div>
                <div className="anatomy-info" data-hover="details">
                  <h6>Roulements</h6>
                  <div className="p-small">
                  Roulements à billes et à aiguilles, paliers en fonte, butées, galets, rotules et embouts de rotule, ainsi que bagues et coussinets.
                  </div>
                  <a
                    className="close-anatomy js-close-anatomy text-link text-link-small"
                    href="#"
                  >
                    Close
                  </a>
                  <a className="x-close js-close-anatomy" href="#">
                    X
                  </a>
                </div>
              </div>
              <div className="anatomy-info-contain right">
                <div className="anatomy-info" data-hover="patch">
                  <h6>Pneumatique</h6>
                  <div className="p-small">
                  Vérins à tige et rotatifs, bus de terrain, ventouses, logique pneumatique, instrumentation, tous types de raccords, tubes et tuyaux techniques, joints d'étanchéité, traitements de l'air, filtration des réseaux et sécheurs, équipements performants pour les centrales d'air comprimé.
                  </div>
                  <a
                    className="close-anatomy js-close-anatomy text-link text-link-small"
                    href="#"
                  >
                    Close
                  </a>
                  <a className="x-close js-close-anatomy" href="#">
                    X
                  </a>
                </div>
                <div className="anatomy-info" data-hover="pocketbags">
                  <h6>Electrique</h6>
                  <div className="p-small">
                  Contrôles et automatismes, systèmes de détection, interrupteurs de position, auxiliaires de commande, signalisation, coffrets industriels, câbles et fils.
                  </div>
                  <a
                    className="close-anatomy js-close-anatomy text-link text-link-small"
                    href="#"
                  >
                    Close
                  </a>
                  <a className="x-close js-close-anatomy" href="#">
                    X
                  </a>
                </div>
                <div className="anatomy-info" data-hover="pocketbags1">
                  <h6>Mécanique</h6>
                  <div className="p-small">
                  Chaînes à rouleaux, courroies trapézoïdales et synchrones, pignons, poulies et moyeux.</div>
                  <a
                    className="close-anatomy js-close-anatomy text-link text-link-small"
                    href="#"
                  >
                    Close
                  </a>
                  <a className="x-close js-close-anatomy" href="#">
                    X
                  </a>
                </div>
              </div>
              <div className="anatomy-img">
                <img
                  alt="3sixteen Jean Anatomy"
                  src="./pieces2.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
 
    </div>
  );
};

export default Product;
