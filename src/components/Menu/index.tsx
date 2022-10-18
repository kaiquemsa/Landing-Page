import { MenuList } from "./styles";
import { MenuOptions } from "../MenuOptions";

export type MenuPage =
  | "inicio"
  | "solucoes"
  | "inclusao"
  | "sobrenos"
  | "contato";

interface MenuProps {
  page: MenuPage;
}

const Menu: React.FC<MenuProps> = ({ page }) => {
  return (
    <MenuList>
      <MenuOptions label="Início" path="/" selected={page === "inicio"} />
      <MenuOptions
        label="Soluções"
        path="/solucoes"
        selected={page === "solucoes"}
      />
      <MenuOptions
        label="Inclusão"
        path="/inclusao"
        selected={page === "inclusao"}
      />
      <MenuOptions
        label="Sobre nós"
        path="/sobrenos"
        selected={page === "sobrenos"}
      />
      <MenuOptions
        label="Contato"
        path="/contato"
        selected={page === "contato"}
      />
    </MenuList>
  );
};

export { Menu };
