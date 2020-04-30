import React from "react";
import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export const Image = styled.img`
  flex: 1 0 auto;
  width: 100%;
  height: 29vw;
  object-fit: cover;
  margin: auto;
  
`;


export default function CarouselComponent() {
    const recomenda = [
        {
          name: "Auditório São Paulo",
          image: require("../Img/CircuitoReligioso/auditório sao paulo_circuito-religioso.jpg"),
          link: "https://www.tripadvisor.com.br/Restaurant_Review-g2348787-d5329084-Reviews-La_Spezia-Cachoeira_Paulista_State_of_Sao_Paulo.html"
        },
        {
          name: "Basilica Velha",
          image: require("../Img/CircuitoReligioso/BasilicaVelha_circuito-religioso.jpg"),
          link: "https://www.facebook.com/pages/Pepizza/641020522619053"
        },
        {
          name: "Caminho do Rosario",
          image: require("../Img/CircuitoReligioso/caminho do rosário_circuito-religioso.jpg"),
          link: "https://supernovataxi.com/"
        },
        {
          name: "Casa de Betania",
          image: require("../Img/CircuitoReligioso/casa de betania_circuito-religioso.jpg"),
          link: "https://www.tripadvisor.com.br/Restaurant_Review-g2348787-d7125763-Reviews-Restaurante_Vignettos-Cachoeira_Paulista_State_of_Sao_Paulo.html",          
        },
        {
          name: "Mirante da Santa",
          image: require("../Img/CircuitoReligioso/mirante da santa_circuito-religioso.jpg"),
          link: "https://www.tripadvisor.com.br/Restaurant_Review-g2348787-d12323027-Reviews-Pizza_Puccini-Cachoeira_Paulista_State_of_Sao_Paulo.html"
        }
      ];
    return (
        <div class="carousel-wrapper">
            <Carousel infiniteLoop useKeyboardArrows autoPlay>
                {recomenda.map((recomendas) => (
                <a>
                    <Image key={recomendas.name} src={recomendas.image} />
                    <button><p className="legend">{recomendas.name}</p></button>
                </a>
                ))}
            </Carousel>
        </div>
    );
}