import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Container from "~/components/Container";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//import { api } from "~/utils/api";
import { faBolt } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { LanguageContext } from "~/context/LanguageContext";
import { useUser } from "@clerk/nextjs";

const Home: NextPage = () => {
  //const hello = api.example.hello.useQuery({ text: "from tRPC" });
  const { text } = useContext(LanguageContext);

  const user = useUser();
  console.log("user", user);

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
            <h1 className="text-3xl font-medium text-gray-700 dark:text-gray-100">
              {text.welcome}
            </h1>
            <div className="flex flex-col gap-2 text-center">
              <h2 className="text-xl text-gray-700 dark:text-gray-100">
                {text.greenEnergy}
              </h2>
              <FontAwesomeIcon
                icon={faBolt}
                className="text-6xl text-yellow-500"
              />
            </div>
          </div>
          <div className="flex h-full w-2/3 flex-col items-center justify-center ">
            <div className="relative h-2/3">
              <img
                src="https://i.ibb.co/C9BKSvj/grid.png"
                alt=""
                className="h-full"
              />
            </div>
            <p className="text-gray-700 dark:text-gray-100">
              {text.description}
            </p>
            <Link
              href="/grid"
              className="mt-5 rounded-md border-2 border-violet-500 bg-gradient-to-br from-indigo-500 to-rose-300 px-6 py-2 transition-all duration-150 ease-in-out active:translate-y-2 dark:border-neutral-400 dark:from-gray-100 dark:to-gray-200"
            >
              <span className="font-medium uppercase text-gray-100 dark:text-gray-600">
                {text.toTheGrid}
              </span>
            </Link>
          </div>
        </section>
      </Container>
    </>
  );
};

export default Home;
