import Layout from '../components/Layout';
import { Head } from '../components/Layout/Head';
import { Header } from '../components/Header/Header';

const IndexPage = () => (
  <Layout title="Home">
    <Head title="wozitto" description="Portfolio site of woitto" />

    <Header />
  </Layout>
);

export default IndexPage;
