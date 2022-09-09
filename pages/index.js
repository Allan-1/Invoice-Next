import Head from 'next/head';
import Layout from '../components/Layout/Layout';
import { InvoiceProvider } from '../context/InvoiceContext';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Invoice</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <InvoiceProvider>
        <div>
          <Layout />
        </div>
      </InvoiceProvider>
    </div>
  );
}