import { prisma } from "~/server/db";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const pokemonsRouter = createTRPCRouter({
  getAll: publicProcedure.query(() => {
    return prisma.pokemons.findMany();
  }),
});
