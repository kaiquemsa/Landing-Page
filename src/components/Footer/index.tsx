import { Adress, Footage } from "./styles";
import Logo from "../../assets/LOGO-SAMEDU-A-02.png";
import { Menu } from "../Menu";
import { FaInstagram } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <Footage>
      <Adress>
        <img src={Logo} style={{ width: 80, height: 60 }} />
      </Adress>
      <Adress></Adress>
      <a>© 2022 SamEdu | Feito com ❤ </a>
      <a href="https://www.instagram.com/samedu.br/" target="_blank">
        {" "}
      </a>
    </Footage>
  );
};

export { Footer };
