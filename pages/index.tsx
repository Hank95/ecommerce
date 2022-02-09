import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import NavBar from "../components/navBar";

// This is the home page for my ecommerce site called A-Frame. It sells cabin tools. I want a woodsy design.
const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="h-screen flex flex-col items-center justify-center relative">
          <Image src="/logos/logo.svg" alt="logo" width={200} height={200} />
          <div className="max-w-sm">
            <h1 className="text-center text-3xl font-bold mt-6">A-Frame</h1>
            <p className="text-center text-lg font-serif">Cabin Tools</p>
          </div>
          <Image
            src="/images/forest.gif"
            alt="fire"
            // layout="responsive"
            height={1000}
            width={1000}
            className="absolute top-0 left-0"
          />
        </div>

        <NavBar />

        <body className="bg-gray-100 h-96">
          <div className=" mx-auto px-4">
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-center text-3xl font-bold mt-6">A-Frame</h1>
              <p className="text-center text-lg font-serif">Cabin Tools</p>
              {/* a paragraph of lorem ipsum */}
              <p className="text-center text-lg font-serif">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque euismod, nisi vel consectetur interdum, nisl urna
                consectetur nunc, eget consectetur nisl nunc eget consectetur
                nisl.
              </p>
              <p className="text-center text-lg font-serif">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque euismod, nisi vel consectetur interdum, nisl urna
                consectetur nunc, eget consectetur nisl nunc eget consectetur
                nisl.
              </p>
              <p className="text-center text-lg font-serif">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque euismod, nisi vel consectetur interdum, nisl urna
                consectetur nunc, eget consectetur nisl nunc eget consectetur
                nisl.
              </p>
              <p className="text-center text-lg font-serif">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque euismod, nisi vel consectetur interdum, nisl urna
                consectetur nunc, eget consectetur nisl nunc eget consectetur
                nisl.
              </p>
              <p className="text-center text-lg font-serif">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque euismod, nisi vel consectetur interdum, nisl urna
                consectetur nunc, eget consectetur nisl nunc eget consectetur
                nisl.
              </p>
              <p className="text-center text-lg font-serif">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque euismod, nisi vel consectetur interdum, nisl urna
                consectetur nunc, eget consectetur nisl nunc eget consectetur
                nisl.
              </p>
              <p className="text-center text-lg font-serif">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque euismod, nisi vel consectetur interdum, nisl urna
                consectetur nunc, eget consectetur nisl nunc eget consectetur
                nisl.
              </p>
              <p className="text-center text-lg font-serif">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque euismod, nisi vel consectetur interdum, nisl urna
                consectetur nunc, eget consectetur nisl nunc eget consectetur
                nisl.
              </p>
              <p className="text-center text-lg font-serif">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque euismod, nisi vel consectetur interdum, nisl urna
                consectetur nunc, eget consectetur nisl nunc eget consectetur
                nisl.
              </p>
              <p className="text-center text-lg font-serif">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque euismod, nisi vel consectetur interdum, nisl urna
                consectetur nunc, eget consectetur nisl nunc eget consectetur
                nisl.
              </p>
              <p className="text-center text-lg font-serif">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque euismod, nisi vel consectetur interdum, nisl urna
                consectetur nunc, eget consectetur nisl nunc eget consectetur
                nisl.
              </p>
              <p className="text-center text-lg font-serif">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque euismod, nisi vel consectetur interdum, nisl urna
                consectetur nunc, eget consectetur nisl nunc eget consectetur
                nisl.
              </p>

              <div className="flex flex-row justify-center mt-6">
                <a
                  href="
                  https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Watch Video
                </a>
              </div>
            </div>
          </div>
        </body>
      </main>
    </div>
  );
};

export default Home;
