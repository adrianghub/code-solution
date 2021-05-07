import Link from "next/link";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="mx-auto my-8 w-6/12">
      <header>
        <h1 className="text-6xl font-bold text-center">100 code inspirations</h1>
        <nav className="my-4">
          <ul className="flex flex-row justify-center space-x-4">
            <li>
              <Link href="/">
                <a className="">home</a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a>contact</a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
