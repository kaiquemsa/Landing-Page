import React, { useEffect, useState } from "react";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import {
  BoxInter,
  BoxNew,
  Container,
  ContainerImage,
  ContainerImage2,
} from "./styles";

import Sobrenos from "../../assets/Sobrenos.png";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import image1 from "../../assets/GIBI .png";
import image2 from "../../assets/APRESENTAÇÃO PERSONAGENS 1 .pdf (1).png";
import image3 from "../../assets/APRESENTAÇÃO PERSONAGENS 2.png";
import image4 from "../../assets/APRESENTAÇÃO PERSONAGENS 3.png";

const Sobre: React.FC = () => {
  const [activyColor, setActivyColor] = useState(false);

  useEffect(function () {
    function posicionScroll() {
      if (window.scrollY > 10) {
        setActivyColor(true);
      } else {
        setActivyColor(false);
      }
    }
    window.addEventListener("scroll", posicionScroll);
  }, []);

  return (
    <>
      <Header action={activyColor} />
      <Container>
        <BoxNew>
          <ContainerImage>
            <img
              src={Sobrenos}
              style={{
                width: 600,
                height: 400,
                margin: "20px",
                borderRadius: "20px",
              }}
            />
            <BoxInter>
              <h1>Nossa historia!</h1>
              <h6>
                Olá! Nós somos o SamEdu. <br />
                Somos uma EdTech criada em 2021 por jovens entusiastas em
                tecnologia de diversas partes do Brasil. <br />
                Nosso objetivo é democratizar o acesso à educação de qualidade
                através da robótica nas escolas, tendo como base o 4° ODS.{" "}
                <br />
                As nossas bases são a valorização da pessoa, sua integridade,
                credi- bilidade e protagonismo, a democratização da educação, e
                o respeito ao meio ambiente.
              </h6>
            </BoxInter>
          </ContainerImage>
        </BoxNew>
        <h1>Um pouco sobre nosso Gibi </h1>
        <ContainerImage2>
          <AliceCarousel autoPlay autoPlayInterval={1500} infinite>
            <img src={image1} style={{ width: 700 }} className="sliderimg" />
            <img src={image2} style={{ width: 700 }} className="sliderimg" />
            <img src={image3} style={{ width: 700 }} className="sliderimg" />
            <img src={image4} style={{ width: 700 }} className="sliderimg" />
          </AliceCarousel>
        </ContainerImage2>
        <h1>Objetivo e Meta</h1>
        <li>
          <b>Objetivo:</b> Capacitar o corpo docente e adaptá-los as tendências
          da educação do Séc. XXI através da inserção da Robótica, com o apoio
          de tecnologias Disruptivas.
        </li>
        <li>
          <b>Meta:</b> Dominar o mercado nacional e inter- nacional através da
          tecnologia e educação.
        </li>
        <br />
        <Footer />
      </Container>
    </>
  );
};

export { Sobre };
function remToPix(itemMaxWidthRem: any) {
  throw new Error("Function not implemented.");
}
function i(value: number, index: number, array: number[]): unknown {
  throw new Error("Function not implemented.");
}
