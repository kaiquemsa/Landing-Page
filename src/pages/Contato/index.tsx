import { Header } from "../../components/Header";
import { BoxInter, BoxNew, Container, ContainerImage } from "./styles";
import { useEffect, useState } from "react";
import Building from "../../assets/Building.png";
import { Footer2 } from "../../components/Footer2";
import { useForm } from "react-hook-form";

const Contato: React.FC = () => {
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

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <>
      <Header action={activyColor} page="contato" />
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
        {/* <h1>Fale conosco</h1>
        <form onSubmit={() => {}}>
          <input
            type="text"
            placeholder="Digite seu nome"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />

          <input
            type="text"
            placeholder="Digite seu email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />

          <textarea
            placeholder="Digite sua mensagem..."
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />

          <button type="submit">Cadastrar-se</button>
        </form> */}
      </Container>
      <Footer2 />
    </>
  );
};

export { Contato };
