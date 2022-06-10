import Link from 'next/link';
import Image from 'next/image';
import Layout from '../../components/Layout';
import { BsGithub } from 'react-icons/bs';
import { Head } from '../../components/Layout/Head';
import { Heading } from '../../components/Heading';

const AboutPage = () => (
  <>
    <Head title="Works wozitto" description="Works woitto" />

    <Layout title="Works">
      <main>
        <div className="text-center">
          <Heading level={2}>Personal Project</Heading>
        </div>
        <div className="m-auto w-9/12 flex justify-around">
          <div className="rounded-lg shadow-lg bg-white max-w-sm">
            <div className="h-52">
              <Link href="https://react-carousel-banner-ui.web.app/">
                <a
                  target="_blank"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  <Image
                    src="/carousel-banner-ui.png"
                    alt="Picture of the author"
                    width={384}
                    height={201}
                  />
                </a>
              </Link>
            </div>
            <div className="p-6 border-t-2 border-secondary">
              <h5 className="text-gray-900 text-xl font-medium mb-2">
                Carousel Banner UI
              </h5>
              <p className="text-gray-700 text-base mb-4">
                <div className="text-accent font-semibold">Description:</div>
                <div>カルーセルバナーUI</div>
                <div className="text-secondary font-semibold">TechStack:</div>
                <div>React + Typescript + styled-components</div>
                <div className="h-6"></div>
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
            <div className="h-52">
              <div className="h-6"></div>
              <Link href="https://population-transition-gr-2ec26.web.app/">
                <a
                  target="_blank"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  <Image
                    src="/population-transition-graph.png"
                    alt="Picture of the author"
                    width={384}
                    height={165}
                  />
                </a>
              </Link>
            </div>
            <div className="p-6 border-t-2 border-secondary">
              <h5 className="text-gray-900 text-xl font-medium mb-2">
                Population Transition Graph
              </h5>
              <p className="text-gray-700 text-base mb-4">
                <div className="text-accent font-semibold">Description:</div>
                <div>都道府県別人口推移グラフ作成アプリ</div>
                <div className="text-secondary font-semibold">TechStack:</div>
                <div>React + Typescript + styled-components</div>
                <div>
                  API:{' '}
                  <Link href="https://opendata.resas-portal.go.jp/">
                    <a target="_blank" className="link link-primary">
                      RESAS-API
                    </a>
                  </Link>
                </div>
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
      </main>
    </Layout>
  </>
);

export default AboutPage;
