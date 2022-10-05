import { Header } from "../../components/Header";
import { ButtonContact } from "../../components/ButtonContact";

import { Container, Main, ColumnImage } from "./styles";

import HeaderImage from "../../assets/header-image.png";

const Home: React.FC = () => {
  return (
    <>
      <Container>
        <Header />
        <Main>
          <div>
            <h1>Olá! Bem-vindo a SamEdu.</h1>
            <h6>
              Somos uma startup jovem e nos propomos a democratizar a educação
              no Brasil através da robótica
            </h6>
            <ButtonContact />
          </div>
          <ColumnImage>
            <img src={HeaderImage} alt="Woman make searching" />
          </ColumnImage>
        </Main>
      </Container>
    </>
  );
};

export { Home };
