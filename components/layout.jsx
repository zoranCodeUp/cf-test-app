import Head from "next/head";
import Link from "next/link";

const Layout = ({ children, title = "just add love" }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="bg-yellow-200 min-h-screen flex flex-col justify-between items-center">
        <header>
          <Link href="/">
            <h1 className="text-3xl uppercase flex items-center flex-col">
              Just add
              <br /> <span className="  font-extrabold">love</span>
              <span className="text-xl"> spread the joy</span>
            </h1>
          </Link>
        </header>

        <div className="">{children}</div>
        <footer className="bg-gray-900 text-gray-100 p-4 w-full justify-center flex">
          <p>Copyright 2023 Just Add Marmite</p>
        </footer>
      </div>
    </>
  );
};

export default Layout;
