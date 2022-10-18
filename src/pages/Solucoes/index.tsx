import { Header } from "../../components/Header";
import { useEffect, useState } from "react";
import { BoxInter, BoxNew, Container, ContainerImage } from "./styles";
import Building from "../../assets/Building.png";
import { Footer2 } from "../../components/Footer2";
import { Box } from "../../components/Header/styles";

const Solucoes: React.FC = () => {
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
      <Header action={activyColor} page="solucoes" />
      <Container>
        <BoxNew>
          <ContainerImage>
            <BoxInter>
              <h1>Em construção...</h1>
              <h6>
                Nosso site está em construção, mas estamos prontos para começar!
                <br />
                Estamos preparando algo incrivel e emocionante para você.
                Surpresa especial para nossos visitantes.
              </h6>
            </BoxInter>
            <img
              src={Building}
              style={{
                width: 400,
                height: 400,
                margin: "20px",
                marginTop: "120px",
                borderRadius: "20px",
              }}
            />
          </ContainerImage>
        </BoxNew>
      </Container>
      <Footer2 />
    </>
  );
};

export { Solucoes };
