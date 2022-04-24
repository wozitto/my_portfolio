import React, { ReactNode } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { BsGithub, BsTwitter } from 'react-icons/bs';
import { SiQiita } from 'react-icons/si';

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
    <header className="mb-8 bg-primary">
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
            <a target="_blank" className="px-4 text-xl text-white no-underline hover:underline">
              <BsGithub />
            </a>
          </Link>
          |
          <Link href="https://twitter.com/_wozitto_">
            <a target="_blank" className="px-4 text-xl text-white no-underline hover:underline">
              <BsTwitter />
            </a>
          </Link>
          |
          <Link href="https://qiita.com/wozitto">
            <a target="_blank" className="px-4 text-5xl text-white no-underline hover:underline">
              <SiQiita />
            </a>
          </Link>
        </nav>
      </div>
    </header>
    <div className="m-auto">{children}</div>
    <footer className="text-center mt-8">
      <div className="py-6 border-t border-primary">
        &#064; 2022 Toshito Hirooka
      </div>
    </footer>
  </div>
);

export default Layout;
