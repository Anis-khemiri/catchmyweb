
import Layout from '../components/Layout';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.css'

import { useEffect } from 'react';
import Background from '../components/Background';

function MyApp({ Component, pageProps}) {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap');
    
  },
 []);
  return (
    <>
      <Layout>
        <Background />
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;