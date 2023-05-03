import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../../components/Layout';
import { BsGithub } from 'react-icons/bs';
import { Head } from '../../components/Layout/Head';
import { Heading } from '../../components/Heading';

type Card = {
  url: string;
  title: string;
  ogImage: string;
  implementationDetailUrl?: string;
};

const cards: Card[] = [
  {
    url: 'https://zenn.dev/moneyforward/articles/20230329-query',
    title: 'testing libraryでのgetBy, queryBy, findByの違いについて',
    ogImage:
      'https://res.cloudinary.com/zenn/image/upload/s--zaTkeXip--/c_fit%2Cg_north_west%2Cl_text:notosansjp-medium.otf_55:testing%2520library%25E3%2581%25A7%25E3%2581%25AEgetBy%252C%2520queryBy%252C%2520findBy%25E3%2581%25AE%25E9%2581%2595%25E3%2581%2584%25E3%2581%25AB%25E3%2581%25A4%25E3%2581%2584%25E3%2581%25A6%2Cw_1010%2Cx_90%2Cy_100/co_rgb:6e7b85%2Cg_south_west%2Cl_text:notosansjp-medium.otf_30:Money%2520Forward%2520Developers%2Cx_220%2Cy_135/g_south_west%2Cl_text:notosansjp-medium.otf_34:wozitto%2Cx_220%2Cy_84/bo_3px_solid_rgb:d6e3ed%2Cg_south_west%2Ch_90%2Cl_fetch:aHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL3plbm4tdXNlci11cGxvYWQvYXZhdGFyLzUwOTQ4MTI2ZjguanBlZw==%2Cr_20%2Cw_90%2Cx_92%2Cy_82/bo_4px_solid_white%2Cg_south_west%2Ch_50%2Cl_fetch:aHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL3plbm4tdXNlci11cGxvYWQvYXZhdGFyL2M2OGZmZDcxNmIuanBlZw==%2Cr_max%2Cw_50%2Cx_139%2Cy_64/og-base.png',
  },
  {
    url: 'https://zenn.dev/moneyforward/articles/7b579adb6967df',
    title: 'EnzymeよりReact Testing Libraryでしょ〜',
    ogImage:
      'https://res.cloudinary.com/zenn/image/upload/s--eh87ZEW1--/c_fit%2Cg_north_west%2Cl_text:notosansjp-medium.otf_55:Enzyme%25E3%2582%2588%25E3%2582%258AReact%2520Testing%2520Library%25E3%2581%25A7%25E3%2581%2597%25E3%2582%2587%25E3%2580%259C%2Cw_1010%2Cx_90%2Cy_100/co_rgb:6e7b85%2Cg_south_west%2Cl_text:notosansjp-medium.otf_30:Money%2520Forward%2520Developers%2Cx_220%2Cy_135/g_south_west%2Cl_text:notosansjp-medium.otf_34:wozitto%2Cx_220%2Cy_84/bo_3px_solid_rgb:d6e3ed%2Cg_south_west%2Ch_90%2Cl_fetch:aHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL3plbm4tdXNlci11cGxvYWQvYXZhdGFyLzUwOTQ4MTI2ZjguanBlZw==%2Cr_20%2Cw_90%2Cx_92%2Cy_82/bo_4px_solid_white%2Cg_south_west%2Ch_50%2Cl_fetch:aHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL3plbm4tdXNlci11cGxvYWQvYXZhdGFyL2M2OGZmZDcxNmIuanBlZw==%2Cr_max%2Cw_50%2Cx_139%2Cy_64/og-base.png',
  },
  {
    url: 'https://note.com/wozitto/n/nb612c6a9898b',
    title: '高卒新卒でマネーフォワードに入社してみて',
    ogImage:
      'https://assets.st-note.com/production/uploads/images/93838994/rectangle_large_type_2_4daff75b6a2ae7b3bf015f51cc109c1f.jpeg?fit=bounds&quality=85&width=1280',
  },
  {
    url: 'https://zenn.dev/wozitto/articles/26dc080e161edd',
    title: 'packageの複数のバージョンを管理する方法',
    ogImage:
      'https://res.cloudinary.com/zenn/image/upload/s--4yRHKHo---/c_fit%2Cg_north_west%2Cl_text:notosansjp-medium.otf_55:package%25E3%2581%25AE%25E8%25A4%2587%25E6%2595%25B0%25E3%2581%25AE%25E3%2583%2590%25E3%2583%25BC%25E3%2582%25B8%25E3%2583%25A7%25E3%2583%25B3%25E3%2582%2592%25E7%25AE%25A1%25E7%2590%2586%25E3%2581%2599%25E3%2582%258B%25E6%2596%25B9%25E6%25B3%2595%2Cw_1010%2Cx_90%2Cy_100/g_south_west%2Cl_text:notosansjp-medium.otf_37:wozitto%2Cx_203%2Cy_98/g_south_west%2Ch_90%2Cl_fetch:aHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL3plbm4tdXNlci11cGxvYWQvYXZhdGFyL2M2OGZmZDcxNmIuanBlZw==%2Cr_max%2Cw_90%2Cx_87%2Cy_72/og-base.png',
  },
  {
    url: 'https://qiita.com/wozitto/items/f353f463f8ec695bb620',
    title: '高校生が１ヶ月で基本情報技術者試験に合格してみた',
    ogImage:
      'https://qiita-user-contents.imgix.net/https%3A%2F%2Fcdn.qiita.com%2Fassets%2Fpublic%2Farticle-ogp-background-9f5428127621718a910c8b63951390ad.png?ixlib=rb-4.0.0&w=1200&mark64=aHR0cHM6Ly9xaWl0YS11c2VyLWNvbnRlbnRzLmltZ2l4Lm5ldC9-dGV4dD9peGxpYj1yYi00LjAuMCZ3PTkxNiZ0eHQ9JUU5JUFCJTk4JUU2JUEwJUExJUU3JTk0JTlGJUUzJTgxJThDJUVGJUJDJTkxJUUzJTgzJUI2JUU2JTlDJTg4JUUzJTgxJUE3JUU1JTlGJUJBJUU2JTlDJUFDJUU2JTgzJTg1JUU1JUEwJUIxJUU2JThBJTgwJUU4JUExJTkzJUU4JTgwJTg1JUU4JUE5JUE2JUU5JUE4JTkzJUUzJTgxJUFCJUU1JTkwJTg4JUU2JUEwJUJDJUUzJTgxJTk3JUUzJTgxJUE2JUUzJTgxJUJGJUUzJTgxJTlGJnR4dC1jb2xvcj0lMjMyMTIxMjEmdHh0LWZvbnQ9SGlyYWdpbm8lMjBTYW5zJTIwVzYmdHh0LXNpemU9NTYmdHh0LWNsaXA9ZWxsaXBzaXMmdHh0LWFsaWduPWxlZnQlMkN0b3Amcz1kZDYwZGQ1Y2UzMTUzYWI4YjQ4ZmIxMmIzYTUxYTAzZQ&mark-x=142&mark-y=112&blend64=aHR0cHM6Ly9xaWl0YS11c2VyLWNvbnRlbnRzLmltZ2l4Lm5ldC9-dGV4dD9peGxpYj1yYi00LjAuMCZ3PTYxNiZ0eHQ9JTQwd296aXR0byZ0eHQtY29sb3I9JTIzMjEyMTIxJnR4dC1mb250PUhpcmFnaW5vJTIwU2FucyUyMFc2JnR4dC1zaXplPTM2JnR4dC1hbGlnbj1sZWZ0JTJDdG9wJnM9ZmE0MzJlNjU0MmNlODU0NDVjYjlhOWNiYzdhN2MzMDI&blend-x=142&blend-y=491&blend-mode=normal&s=e5c4d7ac71d345db625aa54f1b0f1a82',
  },
  {
    url: 'https://react-carousel-banner-ui.web.app/',
    title: 'Carousel Banner UI',
    ogImage: '/carousel-banner-ui.jpg',
    implementationDetailUrl:
      'https://github.com/wozitto/react-carousel-banner-ui',
  },
  {
    url: 'https://population-transition-gr-2ec26.web.app/',
    title: 'Population Transition Graph',
    ogImage: '/population-transition-graph.png',
    implementationDetailUrl:
      'https://github.com/wozitto/react-population-transition-graph',
  },
];

const getMaxTitleWidth = () => {
  let maxWidth = 0;
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  context.font = 'bold 16px Arial';

  cards.forEach((card) => {
    const { width } = context.measureText(card.title);
    if (width > maxWidth) maxWidth = width;
  });

  return maxWidth;
};

const WorksPage = () => {
  const [maxWidth, setMaxWidth] = useState(0);

  useEffect(() => {
    setMaxWidth(getMaxTitleWidth());
  }, []);

  return (
    <>
      <Head title="Works" description="woitto Works " />
      <Layout title="Works">
        <main>
          <div className="text-center">
            <Heading level={2}>Personal Works</Heading>
          </div>
          <div className="mx-auto px-24">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 justify-items-center">
              {cards.map((card) => (
                <div
                  key={card.url}
                  className="rounded-lg shadow-lg bg-white max-w-md p-4"
                  style={{ width: maxWidth }}
                >
                  <div className="h-52">
                    <Link href={card.url}>
                      <a
                        target="_blank"
                        data-mdb-ripple="true"
                        data-mdb-ripple-color="light"
                      >
                        <Image
                          src={card.ogImage}
                          alt={card.title}
                          width={384}
                          height={201}
                          layout="responsive"
                          className="rounded-t-lg"
                        />
                      </a>
                    </Link>
                  </div>
                  <div className="p-4 pb-0">
                    <h3 className="font-bold text-lg mb-2 h-14">
                      {card.title}
                    </h3>
                    <div className="flex items-end">
                      {' '}
                      {card.url.includes('qiita') ||
                      card.url.includes('zenn') ||
                      card.url.includes('note') ? (
                        <Link href={card.url}>
                          <a
                            target="_blank"
                            className="text-primary font-semibold"
                          >
                            Read More
                          </a>
                        </Link>
                      ) : (
                        <Link href={card.implementationDetailUrl || card.url}>
                          <button
                            type="button"
                            className="inline-block px-6 py-2 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                          >
                            <div className="text-xl">
                              <BsGithub />
                            </div>
                          </button>
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
};

export default WorksPage;
