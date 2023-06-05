import { faBolt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { type NextPage } from "next";
import Container from "~/components/Container";
import GridHud from "~/components/GridHud";
import PokemonPicker from "~/components/PokemonPicker";

const Grid: NextPage = () => {
  return (
    <Container flex row coins>
      <section className="relative w-3/4">
        <GridHud />
      </section>
      <section className="flex w-1/2 flex-col justify-center gap-10">
        <div className="text-center">
          <h1 className="text-3xl font-medium uppercase text-gray-700 dark:text-gray-100">
            The Grid
          </h1>
          <p className="text-gray-700 dark:text-gray-100">
            place the pokemons to satisfy the electrical need for the sections
            of the grid accordingly and gain points to unblock more
            electric-type pokemons for a better electricy distribution
          </p>
        </div>
        <PokemonPicker />
      </section>
    </Container>
  );
};

export default Grid;
