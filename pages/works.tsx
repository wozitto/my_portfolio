import Link from 'next/link';
import Image from 'next/image';
import Layout from '../components/Layout';
import { BsGithub } from 'react-icons/Bs';

const AboutPage = () => (
  <Layout title="About | Next.js + TypeScript Example">
    {/* <h1 className="text-center text-5xl font-bold mb-6">Works</h1>
    <div className="flex justify-around">
    </div> */}

    <h1 className="text-center text-5xl font-bold mb-6">Personal Project</h1>
    <div className="m-auto w-9/12 flex justify-around">
      <div className="rounded-lg shadow-lg bg-white max-w-sm">
        <Link href="https://react-carousel-banner-ui.web.app/">
          <a target="_blank" data-mdb-ripple="true" data-mdb-ripple-color="light">
            <Image
              src={`/carousel-banner-ui.png`}
              alt="Picture of the author"
              width={600}
              height={350}
            />
          </a>
        </Link>
        <div className="p-6 border-t-2 border-secondary">
          <h5 className="text-gray-900 text-xl font-medium mb-2">
            Carousel Banner UI
          </h5>
          <p className="text-gray-700 text-base mb-4">
            <div>TechStack:</div>
            <div>React + Typescript + styled-components</div>
          </p>
          <div className="text-right">
            <Link href="https://github.com/wozitto/react-carousel-banner-ui">
              <a target="_blank">
                <button
                  type="button"
                  className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  <div className="text-xl">
                    <BsGithub />
                  </div>
                </button>
              </a>
            </Link>
          </div>
        </div>
      </div>

      <div className="rounded-lg shadow-lg bg-white max-w-sm">
        <Link href="https://population-transition-gr-2ec26.web.app/">
          <a target="_blank" data-mdb-ripple="true" data-mdb-ripple-color="light">
            <Image
              src={`/population-transition-graph.png`}
              alt="Picture of the author"
              width={600}
              height={350}
            />
          </a>
        </Link>
        <div className="p-6 border-t-2 border-secondary">
          <h5 className="text-gray-900 text-xl font-medium mb-2">
            Carousel Banner UI
          </h5>
          <p className="text-gray-700 text-base mb-4">
            <div>TechStack:</div>
            <div>React + Typescript + styled-components</div>
          </p>
          <div className="text-right">
            <Link href="https://github.com/wozitto/react-population-transition-graph">
              <a target="_blank">
                <button
                  type="button"
                  className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  <div className="text-xl">
                    <BsGithub />
                  </div>
                </button>
              </a>
            </Link>
          </div>
        </div>
      </div>

      <div className="rounded-lg shadow-lg bg-white max-w-sm">
        {/* <Link href="https://population-transition-gr-2ec26.web.app/">
          <a target="_blank" data-mdb-ripple="true" data-mdb-ripple-color="light">
            <Image
              src={`/population-transition-graph.png`}
              alt="Picture of the author"
              width={600}
              height={350}
            />
          </a>
        </Link> */}
        <div className="p-6 border-secondary w-96">
          <h5 className="text-gray-900 text-xl font-medium mb-2">
            coding...
          </h5>
          {/* <p className="text-gray-700 text-base mb-4">
            <div>TechStack:</div>
            <div>React + Typescript + styled-components</div>
          </p>
          <div className="text-right">
            <Link href="https://github.com/wozitto/react-population-transition-graph">
              <a target="_blank">
                <button
                  type="button"
                  className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  <div className="text-xl">
                    <BsGithub />
                  </div>
                </button>
              </a>
            </Link>
          </div> */}
        </div>
      </div>
    </div>
  </Layout>
);

export default AboutPage;
