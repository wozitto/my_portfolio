import React, { ReactNode } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { BsGithub, BsTwitter } from 'react-icons/Bs';

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header className="bg-primary">
      <div className="navbar">
        <nav className="navbar-center bg-primary m-auto">
          <Link href="/">
            <a className="px-4 text-xl text-white no-underline hover:underline">
              Home
            </a>
          </Link>
          |
          <Link href="/about">
            <a className="px-4 text-xl text-white no-underline hover:underline">
              About
            </a>
          </Link>
          |
          <Link href="/works">
            <a className="px-4 text-xl text-white no-underline hover:underline">
              Works
            </a>
          </Link>
          |
          <Link href="https://github.com/wozitto">
            <a className="px-4 text-xl text-white no-underline hover:underline">
              <BsGithub />
            </a>
          </Link>
          |
          <Link href="https://twitter.com/_wozitto_">
            <a className="px-4 text-xl text-white no-underline hover:underline">
              <BsTwitter />
            </a>
          </Link>
        </nav>
      </div>
    </header>
    {children}
    <footer>
      <hr />
      <span>Im here to stay (Footer)</span>
    </footer>
  </div>
);

export default Layout;
