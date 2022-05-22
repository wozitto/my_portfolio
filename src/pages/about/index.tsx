import { useState } from 'react';
import { RiMoneyCnyCircleFill } from 'react-icons/ri';
import { BsTsunami } from 'react-icons/bs';
import { FaSchool, FaGraduationCap } from 'react-icons/fa';
import { MdOutlineSportsSoccer } from 'react-icons/md';

import Layout from '../../components/Layout';
import { Head } from '../../components/Layout/Head';
import { PageTransition } from '../../components/Layout/PageTransition';
import { Heading } from '../../components/Heading';
import { ExternalLink } from '../../components/Link';
import { Tag, Tags } from '../../components/Tag';

const AboutPage = () => {
  const [isTimeSeries, setIsTimeSeries] = useState(false);
  const toggleClass = ' transform translate-x-5';

  const TimeSeriesSwitch = () => (
    <div
      className={`mt-8 md:w-14 md:h-7 w-12 h-6 flex items-center rounded-full p-1 cursor-pointer ${
        isTimeSeries ? 'bg-primary' : 'bg-gray-300'
      }`}
      onClick={() => {
        setIsTimeSeries(!isTimeSeries);
      }}
    >
      <div
        className={
          'bg-white md:w-6 md:h-6 h-5 w-5 rounded-full shadow-md transform' +
          (isTimeSeries ? toggleClass : null)
        }
      ></div>
    </div>
  );

  return (
    <>
      <Head title="wozitto" description="About woitto" />

      <Layout title="About">
        <PageTransition>
          <main className="container z-0 px-4 mx-auto">
            <Heading level={2}>About me</Heading>

            <div className="leading-8">
              <p>こんにちは👋</p>
              <p>廣岡利斗と申します。</p>
              <p>
                福岡でソフトウェアエンジニアをしている、ランニング好きです。
              </p>
              <p className="mt-6">
                現在、株式会社マネーフォワードで社会人インターンとして
                <ExternalLink
                  underline
                  href="https://biz.moneyforward.com/expense/"
                >
                  クラウド経費
                </ExternalLink>
                ・
                <ExternalLink
                  underline
                  href="https://biz.moneyforward.com/payable/"
                >
                  クラウド債務支払
                </ExternalLink>
                を開発している開発部でフロントエンドエンジニアとして働いています。
              </p>
            </div>

            <Heading level={3}>好きなもの・こと</Heading>

            <Tags>
              <Tag>サッカー</Tag>
              <Tag>ランニング</Tag>
              <Tag>
                音楽（カネコアヤノ、Mr.Children、andymori、THE BLUE HEARTS）
              </Tag>
            </Tags>

            <Border />

            <div className="flex justify-between items-center">
              <Heading level={2}>Works</Heading>
              <TimeSeriesSwitch />
            </div>

            <Timeline>
              {isTimeSeries ? (
                <>
                  <Event>
                    <EventIconWrapper>
                      <MdOutlineSportsSoccer size={26} />
                    </EventIconWrapper>
                    <Month>2019/04</Month>
                    <EventTitle>東福岡高等学校 入学</EventTitle>
                    <EventDescription>
                      プロサッカー選手を目指し寮生活でサッカーに励んでいました。
                    </EventDescription>
                  </Event>

                  <Event>
                    <EventIconWrapper>
                      <FaSchool size={20} />
                    </EventIconWrapper>
                    <Month>2020/06</Month>
                    <EventTitle>N高等学校 転入学</EventTitle>
                    <EventDescription>
                      サッカー選手からエンジニアに目標を変更し、学習時間の確保のためN高等学校に転入学
                    </EventDescription>
                  </Event>

                  <Event>
                    <EventIconWrapper>
                      <BsTsunami size={20} />
                    </EventIconWrapper>
                    <Month>2021/03</Month>
                    <EventTitle>株式会社UKIYOcreate</EventTitle>
                    <ExternalLink href="https://www.ukiyo-create.co.jp/">
                      https://www.ukiyo-create.co.jp/
                    </ExternalLink>
                    <EventDescription>インターン</EventDescription>
                    <EventDescription>フルスタックエンジニア</EventDescription>
                    <EventNote>
                      React, Redux, Redux-Toolkit, Recoil, TypeScript, GraphQL,
                      Rails-Apimode
                    </EventNote>
                  </Event>

                  <Event>
                    <EventIconWrapper>
                      <BsTsunami size={20} />
                    </EventIconWrapper>
                    <EventTitle>LP マークアップ</EventTitle>
                    <EventNote>HTML, Sass, jQuery</EventNote>
                  </Event>

                  <Event>
                    <EventIconWrapper>
                      <BsTsunami size={20} />
                    </EventIconWrapper>
                    <EventTitle>離脱防止サービス Popee</EventTitle>
                    <ExternalLink href="https://popee.info/lp">
                      https://popee.info/lp
                    </ExternalLink>
                    <EventDescription>フロントエンド</EventDescription>
                    <EventNote>
                      React, Redux, Typescript, styled-components
                    </EventNote>
                  </Event>

                  <Event>
                    <EventIconWrapper>
                      <BsTsunami size={20} />
                    </EventIconWrapper>
                    <EventTitle>商標管理システム</EventTitle>
                    <EventDescription>
                      フロントエンド / バックエンド
                    </EventDescription>
                    <EventNote>
                      Next.js, Redux-Toolkit, Typescript, TailwindCSS,
                      Rails-apimode
                    </EventNote>
                  </Event>

                  <Event>
                    <EventIconWrapper>
                      <BsTsunami size={20} />
                    </EventIconWrapper>
                    <EventTitle>Amazon商品管理システム</EventTitle>
                    <EventDescription>
                      フロントエンド / バックエンド
                    </EventDescription>
                    <EventNote>
                      Next.js, Recoil, Typescript, GraphQL, TailwindCSS,
                      Rails-apimode
                    </EventNote>
                  </Event>

                  <Event>
                    <EventIconWrapper>
                      <FaGraduationCap size={22} />
                    </EventIconWrapper>
                    <Month>2022/03</Month>
                    <EventTitle>N高等学校 卒業</EventTitle>
                  </Event>

                  <Event>
                    <EventIconWrapper>
                      <RiMoneyCnyCircleFill size={28} />
                    </EventIconWrapper>
                    <Month>2022/04</Month>
                    <EventTitle>Money Forward Inc.</EventTitle>
                    <ExternalLink href="https://corp.moneyforward.com/">
                      https://corp.moneyforward.com/
                    </ExternalLink>
                    <EventDescription>
                      マネーフォワードビジネスカンパニー クラウド経費本部 開発部
                      フロントエンドグループ インターン
                    </EventDescription>
                    <EventDescription>
                      フロントエンドエンジニア
                    </EventDescription>
                    <EventNote>React, Redux, TypeScript, Rails</EventNote>
                  </Event>
                </>
              ) : (
                <>
                  <Event>
                    <EventIconWrapper>
                      <RiMoneyCnyCircleFill size={28} />
                    </EventIconWrapper>
                    <Month>2022/04</Month>
                    <EventTitle>Money Forward Inc.</EventTitle>
                    <ExternalLink href="https://corp.moneyforward.com/">
                      https://corp.moneyforward.com/
                    </ExternalLink>
                    <EventDescription>
                      マネーフォワードビジネスカンパニー クラウド経費本部 開発部
                      フロントエンドグループ インターン
                    </EventDescription>
                    <EventDescription>
                      フロントエンドエンジニア
                    </EventDescription>
                    <EventNote>React, Redux, TypeScript, Rails</EventNote>
                  </Event>

                  <Event>
                    <EventIconWrapper>
                      <FaGraduationCap size={22} />
                    </EventIconWrapper>
                    <Month>2022/03</Month>
                    <EventTitle>N高等学校 卒業</EventTitle>
                  </Event>

                  <Event>
                    <EventIconWrapper>
                      <BsTsunami size={20} />
                    </EventIconWrapper>
                    <EventTitle>Amazon商品管理システム</EventTitle>
                    <EventDescription>
                      フロントエンド / バックエンド
                    </EventDescription>
                    <EventNote>
                      Next.js, Recoil, Typescript, GraphQL, TailwindCSS,
                      Rails-apimode
                    </EventNote>
                  </Event>

                  <Event>
                    <EventIconWrapper>
                      <BsTsunami size={20} />
                    </EventIconWrapper>
                    <EventTitle>商標管理システム</EventTitle>
                    <EventDescription>
                      フロントエンド / バックエンド
                    </EventDescription>
                    <EventNote>
                      Next.js, Redux-Toolkit, Typescript, TailwindCSS,
                      Rails-apimode
                    </EventNote>
                  </Event>

                  <Event>
                    <EventIconWrapper>
                      <BsTsunami size={20} />
                    </EventIconWrapper>
                    <EventTitle>離脱防止サービス Popee</EventTitle>
                    <ExternalLink href="https://popee.info/lp">
                      https://popee.info/lp
                    </ExternalLink>
                    <EventDescription>フロントエンド</EventDescription>
                    <EventNote>
                      React, Redux, Typescript, styled-components
                    </EventNote>
                  </Event>

                  <Event>
                    <EventIconWrapper>
                      <BsTsunami size={20} />
                    </EventIconWrapper>
                    <EventTitle>LP マークアップ</EventTitle>
                    <EventNote>HTML, Sass, jQuery</EventNote>
                  </Event>

                  <Event>
                    <EventIconWrapper>
                      <BsTsunami size={20} />
                    </EventIconWrapper>
                    <Month>2021/03</Month>
                    <EventTitle>株式会社UKIYOcreate</EventTitle>
                    <ExternalLink href="https://www.ukiyo-create.co.jp/">
                      https://www.ukiyo-create.co.jp/
                    </ExternalLink>
                    <EventDescription>インターン</EventDescription>
                    <EventDescription>フルスタックエンジニア</EventDescription>
                    <EventNote>
                      React, Redux, Redux-Toolkit, Recoil, TypeScript, GraphQL,
                      Rails-Apimode
                    </EventNote>
                  </Event>

                  <Event>
                    <EventIconWrapper>
                      <FaSchool size={20} />
                    </EventIconWrapper>
                    <Month>2020/06</Month>
                    <EventTitle>N高等学校 転入学</EventTitle>
                    <EventDescription>
                      サッカー選手からエンジニアに目標を変更し、学習時間の確保のためN高等学校に転入学
                    </EventDescription>
                  </Event>

                  <Event>
                    <EventIconWrapper>
                      <MdOutlineSportsSoccer size={26} />
                    </EventIconWrapper>
                    <Month>2019/04</Month>
                    <EventTitle>東福岡高等学校 入学</EventTitle>
                    <EventDescription>
                      プロサッカー選手を目指し寮生活でサッカーに励んでいました。
                    </EventDescription>
                  </Event>
                </>
              )}
            </Timeline>
          </main>
        </PageTransition>
      </Layout>
    </>
  );
};

const Timeline = (props: { children: React.ReactNode }) => (
  <section
    className="relative before:absolute before:top-0 before:-bottom-6 mt-6 ml-2 before:w-[2px] before:content-[''] before:bg-secondary"
    {...props}
  />
);
const Event = ({ children }: { children: React.ReactNode }) => (
  <div className="relative pl-7 mt-8">{children}</div>
);
const EventIconWrapper = (props: { children: React.ReactNode }) => (
  <div
    className="flex absolute top-1 left-[-15px] justify-center items-center w-8 h-8 bg-background rounded-full border-2 border-secondary bg-white"
    {...props}
  />
);
const Month = (props: { children: string }) => (
  <p className="pt-[10px] text-sm text-secondary" {...props} />
);
const EventTitle = (props: { children: React.ReactNode }) => (
  <p className="text-lg font-bold" {...props} />
);
const EventDescription = (props: { children: React.ReactNode }) => (
  <p className="mt-1 text-sm" {...props} />
);
const EventNote = (props: { children: React.ReactNode }) => (
  <p className="mt-1 text-sm text-secondary" {...props} />
);
const Border = () => <div className="mt-12 border-t border-secondary" />;

export default AboutPage;
