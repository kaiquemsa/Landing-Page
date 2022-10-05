import * as K from "./styles";

import { useNavigate } from "react-router-dom";

const Menu: React.FC = () => {
  const navigation = useNavigate();

  return (
    <K.MenuList>
      <K.ItemList>
        <a onClick={() => navigation("/home")}>Início</a>
      </K.ItemList>
      <K.ItemList>
        <a onClick={() => navigation("/solucoes")}>Soluções</a>
      </K.ItemList>
      <K.ItemList>
        <a onClick={() => navigation("/inclusao")}>Inclusão</a>
      </K.ItemList>
      <K.ItemList>
        <a onClick={() => navigation("/sobrenos")}>Sobre nós</a>
      </K.ItemList>
      <K.ItemList>
        <a onClick={() => navigation("/contato")}>Contato</a>
      </K.ItemList>
    </K.MenuList>
  );
};

export { Menu };
