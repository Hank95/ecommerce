import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import product from "../data/products";
import NavBar from "../components/navBar";

const Products: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Product Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />

      <main className="flex flex-col items-center justify-center">
        <div className="grid grid-cols-2">
          {product.map((product) => (
            <div className="max-w-sm" key={product.id}>
              <Image
                src={product.image}
                alt={product.name}
                width={200}
                height={200}
              />
              <h1 className="text-center text-3xl font-bold mt-6">
                {product.name}
              </h1>
              <p className="text-center text-lg font-serif">
                {product.description}
              </p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Products;
