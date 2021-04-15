import React from "react";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import "./slider-animations.css";
import "./styles.css";

const content = [
  {
    title: "BE ALIVE",
    description: "Potencia tu experiencia",
    button: "Conoce más",
    image:
      "https://res.cloudinary.com/phector27/image/upload/v1608028953/cv-webuild/Slide2_pg5ae0.jpg",
    user: "Héctor Carramiñana",
    userProfile:
      "https://res.cloudinary.com/phector27/image/upload/v1615538761/cv-webuild/photo1058558092862662570_n1afri.jpg",
    linkedIn: "https://www.linkedin.com/in/hector-carraminana/",
  },
  {
    title: "UN MAR LLENO DE TALENTO",
    description:
      "La plataforma perfecta para acceder al mejor talento tecnologico nacional",
    button: "Conoce más",
    image:
      "https://res.cloudinary.com/phector27/image/upload/v1608028910/cv-webuild/Slide1_sukcf2.jpg",
    user: "Héctor Carramiñana",
    userProfile:
      "https://res.cloudinary.com/phector27/image/upload/v1615538751/cv-webuild/photo1058558092862662570_n1afri.jpg",
    linkedIn: "https://www.linkedin.com/in/jose-dorado/",
  },
  {
    title: "DESARROLLAMOS PARA TI",
    description: "Sin límites. Tú marcas el ritmo.",
    button: "Conoce más",
    image:
      "https://res.cloudinary.com/phector27/image/upload/v1608028984/cv-webuild/Slide3_fiqhgk.jpg",
    user: "José Dorado",
    userProfile:
      "https://res.cloudinary.com/phector27/image/upload/v1615538751/cv-webuild/josedorado_oc7v0g.jpg",
    linkedIn: "https://github.com/Phector27/IronJob",
  },
];

const Slider1 = () => (
  <div id="slider">
    <Slider className="slider-wrapper">
      {content.map((item, index) => (
        <div
          key={index}
          className="slider-content"
          style={{ background: `url('${item.image}') no-repeat center center` }}
        >
          <div className="inner">
            <h1 style={{ fontWeight: "400", fontFamily: "Montserrat" }}>
              {item.title}
            </h1>
            <p style={{ fontSize: "1.3rem" }}>{item.description}</p>
            <button>
              <a
                href="#conocenos"
                style={{
                  textDecoration: "none",
                  color: "black",
                  textTransform: "none",
                }}
              >
                {item.button}
              </a>
            </button>
          </div>
        </div>
      ))}
    </Slider>
  </div>
);

export default Slider1;
