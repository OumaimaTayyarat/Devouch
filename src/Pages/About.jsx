import { useEffect, useState } from "react";
import "./About.css"

function About() {

  return (
 <div>

<ul className="chat-thread">


<ul>
  <li>Bonjour, pouvez-vous m’en dire plus sur Devouch ?</li>
  <li>Bonjour ! Devouch est une entreprise innovante spécialisée dans le développement digital. Nous créons des solutions sur mesure pour répondre aux besoins des entreprises et startups modernes.</li>
  
  <li>Quels services proposez-vous ?</li>
  <li>Nous offrons une gamme complète de services, incluant le développement de sites web, d’applications mobiles (iOS et Android), la conception de designs 3D immersifs, et l’automatisation des processus pour booster votre productivité.</li>
  
  <li>Comment collaborer avec votre entreprise ?</li>
  <li>C’est simple ! Contactez-nous avec vos idées ou vos besoins, et notre équipe vous accompagnera dans chaque étape de votre projet. Nous sommes disponibles pour répondre à vos questions.</li>
</ul>



  
</ul>

{/* <form className="chat-window">
	<input className="chat-window-message" name="chat-window-message" type="text" autocomplete="off" autofocus />
</form> */}

  </div>);
}

export default About;
