import * as K from "./styles";

import Logo from "../../molecules/Logo";
import Menu from "../Menu";
import Button from "../../atoms/Button";

const Header = () => {
  return (
    <K.Box>
      <Logo />
      <Menu />
      <Button />
    </K.Box>
  );
};

export default Header;
