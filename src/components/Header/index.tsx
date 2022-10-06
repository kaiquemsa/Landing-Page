import { Menu } from "../Menu";
import { Button } from "../../components/Button";

import { Box } from "./styles";

import LogoHero from "../../assets/LOGO-SAMEDU-A-02.png";

interface IHeaderProps {
  action: boolean;
}

const Header: React.FC<IHeaderProps> = ({ action }) => {
  return (
    <Box className={action ? "activyColor" : ""}>
      <img src={LogoHero} alt="Logo Hero Header" width={123.83} height={80} />
      <Menu />
      <Button />
    </Box>
  );
};

export { Header };
