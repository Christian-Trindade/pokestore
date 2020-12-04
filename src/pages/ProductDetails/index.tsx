import * as React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getPokemonById } from "../../services/api";
import history from "../../services/History";

import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";

import TemplateDefault from "../../components/TemplateDefault";
import ProductContainer from "./components/ProductContainer";

interface Objectdefault {
  [key: string]: any;
}

const ProductDetails: React.FC = () => {
  const { productId } = useParams<Objectdefault>();
  const [pokemonData, setPokemonData] = useState<Objectdefault>();

  const getPokemonData = async () => {
    const pokemonDataResponse = await getPokemonById(productId);
    setPokemonData(pokemonDataResponse.data);
  };

  const breadCrumbHomeClick = () => history.push("/");

  useEffect(() => {
    getPokemonData();
  }, []);

  return (
    <TemplateDefault>
      <Breadcrumbs aria-label="breadcrumb">
        <Link color="inherit" onClick={breadCrumbHomeClick}>
          Home
        </Link>
        <Link color="inherit">{pokemonData?.name}</Link>
      </Breadcrumbs>
      {pokemonData && <ProductContainer data={pokemonData} />}
    </TemplateDefault>
  );
};

export default ProductDetails;
