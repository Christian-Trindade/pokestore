import * as React from "react";

import TemplateDefault from "../../components/TemplateDefault";
import ItemsContainer from "./components/itemsContainer";

const Home: React.FC = () => {
  return (
    <TemplateDefault>
      <h2>Os mais Vendidos!</h2>
      <ItemsContainer />
    </TemplateDefault>
  );
};

export default Home;
