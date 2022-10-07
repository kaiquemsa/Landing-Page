import React, { useEffect, useState } from "react";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { BoxInter, BoxNew, Container, ContainerImage } from "./styles";

import Sobrenos from "../../assets/Sobrenos.png";

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
