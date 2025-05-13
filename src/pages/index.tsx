import Head from "next/head";
import { CatForm } from "@/components/cat-form";

export default function Home() {
  return (
    <>
      <Head>
        <title>Cats</title>
        <meta name="description" content="For getting many cats" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <main style={{ paddingTop: '5rem' }}>
          <CatForm />
        </main>
      </div>
    </>
  );
}
