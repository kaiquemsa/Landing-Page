import { Menu } from "../Menu";
import { Button } from "../../components/Button";

import { Box } from "./styles";

import LogoHero from "../../assets/LOGO-SAMEDU-A-02.png";

const Header: React.FC = () => {
  return (
    <Box>
      <img src={LogoHero} alt="Logo Hero Header" width={123.83} height={80} />
      <Menu />
      <Button />
    </Box>
  );
};

export { Header };
