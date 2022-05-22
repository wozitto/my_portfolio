import NextHead from 'next/head';
import { useRouter } from 'next/router';

type Props = {
  title: string;
  description: string;
  og?: {
    title?: string;
    type?: 'website' | 'blog' | 'article';
    url?: string;
  };
};

export const Head: React.VFC<Props> = ({ title, description, og = {} }) => {
  const { asPath } = useRouter();
  const canonical = `https://toshito-hirooka.vercel.app/${asPath}`;

  return (
    <NextHead>
      <meta name="robots" content="all" />
      <link rel="canonical" href={canonical} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" type="image/png" sizes="32x32" href="/logo.png" />

      <meta property="og:title" content={og.title || title} />
      <meta property="og:type" content={og.type || 'website'} />
      <meta property="og:site_name" content="wozitto" />
      <meta property="og:url" content={og.url || canonical} />
      {/* <meta property="og:image" content="/logo.jpg" /> */}
      <meta property="og:description" content={description} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@_wozitto_" />
    </NextHead>
  );
};
