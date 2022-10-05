import Frontend from "../templates/Frontend";
import ButtonContact from "../atoms/ButtonContact";
import * as K from "./styles";

import HeaderImage from "../assets/header-image.png";

function Main() {
  return (
    <Frontend>
      <K.Container>
        <div>
          <h1>Design driven development of your web product</h1>
          <h6>
            We are a full service digital agency that builds imensive user
            experience.
          </h6>
          <ButtonContact />
        </div>
        <K.ColumnImage>
          <img src={HeaderImage} alt="Woman make searching"/>
        </K.ColumnImage>
      </K.Container>
    </Frontend>
  );
}

export default Main;
