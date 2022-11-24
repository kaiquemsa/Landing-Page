import { Header } from "../../components/Header";
import { useEffect, useState } from "react";
import { BoxInter, Container, ContainerImage } from "./styles";
import Building from "../../assets/Building.png";
import { Footer } from "../../components/Footer";

const Inclusao: React.FC = () => {
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
      <Header action={activyColor} page="inclusao" />
      <Container>
        <ContainerImage>
          <BoxInter>
            <h1>Em construção...</h1>
            <h6>
              Nosso site está em construção, mas estamos prontos para começar!
              <br />
              Estamos preparando algo incrivel e emocionante para você. Surpresa
              especial para nossos visitantes.
            </h6>
          </BoxInter>
          <img src={Building} />
        </ContainerImage>
      </Container>
      <Footer />
    </>
  );
};

export { Inclusao };
