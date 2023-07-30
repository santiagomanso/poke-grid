import React from "react";
import Container from "~/components/Container";
import { api } from "~/utils/api";

export default function pokemons() {
  //extract pokemons from api

  const { data } = api.pokemons.getAll.useQuery();
  return (
    <Container>
      <h1>pokemones</h1>
    </Container>
  );
}
