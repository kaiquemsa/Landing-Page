import Frontend from "../templates/Frontend";
import ButtonContact from "../atoms/ButtonContact";
import * as K from "./styles";

import HeaderImage from "../assets/header-image.png";

function Main() {
  return (
    <Frontend>
      <K.Container>
        <div>
          <h1>Olá! Bem-vindo a SamEdu.</h1>
          <h6>
            Somos uma startup jovem e nos propomos a democratizar a educação no
            Brasil através da robótica
          </h6>
          <ButtonContact />
        </div>
        <K.ColumnImage>
          <img src={HeaderImage} alt="Woman make searching" />
        </K.ColumnImage>
      </K.Container>
    </Frontend>
  );
}

export default Main;
