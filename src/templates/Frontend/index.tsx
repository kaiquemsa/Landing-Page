import * as K from "./styles";

type FrontendProps = {
  children: React.ReactNode;
};

const Frontend = ({ children }: FrontendProps) => {
  return <K.Container>Teste Frontend {children}</K.Container>;
};

export default Frontend;
