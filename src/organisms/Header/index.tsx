import * as K from "./styles";

import Logo from "../../molecules/Logo";
import { Home } from "../Menu";
import Button from "../../atoms/Button";

const Header = () => {
  return (
    <K.Box>
      <Logo />
      <Home />
      <Button />
    </K.Box>
  );
};

export default Header;
