import { faBolt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { type NextPage } from "next";
import Container from "~/components/Container";

const Grid: NextPage = () => {
  return (
    <Container flex row>
      <section className="relative w-3/4">
        <img
          src="https://i.ibb.co/tP4V6DT/gridPlay.png"
          alt=""
          className="h-full"
        />
        <span className="absolute left-[10%] top-[60%] rounded-full border-2 bg-orange-500 px-3 py-2 text-2xl text-white">
          300kw
        </span>
        <span className="absolute left-[30%] top-[75%] rounded-full border-2 bg-green-600 px-3 py-2 text-2xl text-white">
          200kw
        </span>
        <span className="absolute left-[70%] top-[75%] rounded-full border-2 bg-orange-500 px-3 py-2 text-2xl text-white">
          100kw
        </span>
        <span className="absolute left-[73%] top-[25%] rounded-full border-2 bg-red-600 px-3 py-2 text-2xl text-white">
          70kw
        </span>
        <button className="absolute left-[12%] top-[25%] flex items-center gap-1 rounded-md border-2 border-violet-500 bg-gradient-to-br from-indigo-500 to-rose-300 px-6 py-2 transition-all duration-150 ease-in-out active:translate-y-2 dark:border-neutral-400 dark:from-gray-100 dark:to-gray-200">
          <span className="font-medium uppercase text-gray-100 dark:text-gray-600">
            impact trueno
          </span>
          <FontAwesomeIcon icon={faBolt} className="text-xl text-yellow-600" />
        </button>
      </section>
      <section className="w-1/2">
        <h1>The Grid</h1>
        <p>
          place the pokemons to satisfy the electrical need for the sections of
          the grid accordingly and gain points to unblock more electric-type
          pokemons for a better electricy distribution
        </p>
      </section>
    </Container>
  );
};

export default Grid;
