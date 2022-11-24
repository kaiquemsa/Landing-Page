import { Menu, MenuPage } from "../Menu";
import { Button } from "../../components/Button";

import { Box } from "./styles";

import LogoHero from "../../assets/LOGO-SAMEDU-A-02.png";

interface IHeaderProps {
  action: boolean;
  page: MenuPage;
}

const Header: React.FC<IHeaderProps> = ({ action, page }) => {
  return (
    <Box className={action ? "activyColor" : ""}>
      <img src={LogoHero} alt="Logo Hero Header" width={100} height={60} />
      <Menu page={page} />
      <Button />
    </Box>
  );
};

export { Header };
