import Navbar from '@/components/Navbar';
import '@/styles/globals.css';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Souilah Abderahim</title>
        <meta
          name="portfolio"
          content="I’m Full Stack, React Developer, JavaScript, Web Development, Portfolio"
        />
        <link rel="icon" href="/assets/img.png" />
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}
