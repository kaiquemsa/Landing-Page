import { Adress, Footage } from "./styles";
import Logo from "../../assets/LOGO-SAMEDU-A-02.png";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { AiOutlinePhone } from "react-icons/ai";

const Footer2: React.FC = () => {
  return (
    <Footage>
      <Adress>
        <img src={Logo} style={{ width: 80, height: 60 }} />
      </Adress>
      <Adress>
        <a href="https://www.instagram.com/samedu.br/" target="_blank">
          {" "}
          <FaInstagram style={{ width: 30, height: 30, color: "#D32639" }} />
        </a>
        <a href="contato@samedu.com.br">
          <MdEmail style={{ width: 30, height: 30, color: "D32639" }} />
        </a>
        <a href="+55 15 98177-4493">
          <AiOutlinePhone style={{ width: 30, height: 30, color: "D32639" }} />
        </a>
        <a href="https://www.linkedin.com/">
          <FaLinkedin style={{ width: 30, height: 30, color: "D32639" }} />
        </a>
      </Adress>
      <Adress>
        <a>© 2022 SamEdu | Feito com ❤ </a>
      </Adress>
    </Footage>
  );
};

export { Footer2 };
