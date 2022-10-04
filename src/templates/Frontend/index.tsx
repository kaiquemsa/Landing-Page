import * as K from "./styles";
import Header from "../../organisms/Header";

type FrontendProps = {
  children: React.ReactNode;
};

const Frontend = ({ children }: FrontendProps) => {
  return (
    <K.Container>
      <Header></Header>

      <main>{children}</main>
    </K.Container>
  );
};

export default Frontend;
