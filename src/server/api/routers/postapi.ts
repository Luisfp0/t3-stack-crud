import { z } from "zod";
import { firestore } from "src/firebaseConfig";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { addDoc, collection } from "firebase/firestore";

let sampleCollection = collection(firestore, "sample");

export const postApiRouter = createTRPCRouter({
  postSample: publicProcedure
    .input(z.object({ email: z.string(), name: z.string(), age: z.string() }))
    .mutation(({ input }) => {
      let user = {
        email: input.email,
        password: input.name,
        age: input.age,
      };

      addDoc(sampleCollection, user);
      return { user };
    }),
});
