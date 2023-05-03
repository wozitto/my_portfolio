import React, { useEffect, ReactNode } from 'react';
import Link from 'next/link';
import { BsGithub, BsTwitter } from 'react-icons/bs';
import { SiQiita, SiZenn } from 'react-icons/si';
import 'animate.css';

import { useRecoilLoading } from '../store/loading';
import { timer } from '../../lib/utils';
import Logo from '../../public/logo.png';

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children }: Props) => {
  const [isLoaded, setIsLoaded] = useRecoilLoading();
  useEffect(() => {
    const lazySetIsLoaded = async () => {
      await timer(1500);
      setIsLoaded(true);
    };
    lazySetIsLoaded();
  }, [setIsLoaded]);

  if (!isLoaded) {
    return (
      <div className="w-full h-screen flex justify-center items-center bg-back z-50">
        <img
          className="animate__animated animate__bounceInLeft"
          src={Logo.src}
          alt="icon"
        />
      </div>
    );
  }
  return (
    <div>
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
            <Link href="https://twitter.com/_wozitto_">
              <a
                target="_blank"
                className="px-4 text-xl text-white no-underline hover:underline"
              >
                <BsTwitter />
              </a>
            </Link>
            |
            <Link href="https://github.com/wozitto">
              <a
                target="_blank"
                className="px-4 text-xl text-white no-underline hover:underline"
              >
                <BsGithub />
              </a>
            </Link>
            |
            <Link href="https://zenn.dev/wozitto">
              <a
                target="_blank"
                className="px-4 text-xl text-white no-underline hover:underline"
              >
                <SiZenn />
              </a>
            </Link>
            |
            <Link href="https://qiita.com/wozitto">
              <a
                target="_blank"
                className="px-4 text-xl text-white no-underline hover:underline"
              >
                <SiQiita />
              </a>
            </Link>
          </nav>
        </div>
      </header>
      <div className="m-auto">{children}</div>
      <footer className="text-center mt-16">
        <div className="py-6 border-t border-primary">&#064; 2022 Wozitto</div>
      </footer>
    </div>
  );
};

export default Layout;
