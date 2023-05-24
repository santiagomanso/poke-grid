import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Container from "~/components/Container";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { api } from "~/utils/api";
import { faBolt } from "@fortawesome/free-solid-svg-icons";

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>PoKeGrid</title>
        <meta
          name="description"
          content="Green energy provided by Electric-Type PoKeMoNs"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <section className="flex h-full justify-between overflow-auto p-5">
          <div className="flex h-full flex-col justify-center gap-5 py-20">
            <h1 className="text-3xl font-medium text-gray-700">
              Welcome to the PoKeGrid
            </h1>
            <div className="flex flex-col gap-2 text-center">
              <h2 className="text-xl text-gray-700">
                Green Energy by pokemons!
              </h2>
              <FontAwesomeIcon
                icon={faBolt}
                className="text-6xl text-yellow-500"
              />
            </div>
          </div>
          <div className="flex h-full w-2/3 flex-col items-center justify-center ">
            <div className="relative h-2/3 bg-red-500">
              <img
                src="https://i.ibb.co/1QwmTvL/pikachu.png"
                alt=""
                className="absolute -top-4 left-1 z-10 h-[35%] bg-white"
              />
              <img
                src="https://www.crystalpower.in/Images/motion.gif"
                alt=""
                className="h-full"
              />
            </div>
            <p className="text-gray-700">
              PoKeGrid empowers you to transform your power grid into a dynamic
              network fueled by the incredible skills of electric-type Pokémon.
              Picture Pikachu unleashing its signature Thunderbolt attack,
              channeling a surge of sustainable energy directly into your
              home&apos;s electrical system. Meanwhile, Electabuzz utilizes its
              electrifying Thunder Punch to supercharge your electric vehicle,
              providing a thrilling and eco-conscious mode of transportation.
            </p>
            <Link
              href="/grid"
              className="mt-5 rounded-md border-2 border-violet-500 bg-gradient-to-br from-indigo-500 to-rose-300 px-6 py-2 transition-all duration-150 ease-in-out active:translate-y-2"
            >
              <span className="font-medium uppercase text-gray-100">
                To the Grid
              </span>
            </Link>
          </div>
        </section>
      </Container>
    </>
  );
};

export default Home;
