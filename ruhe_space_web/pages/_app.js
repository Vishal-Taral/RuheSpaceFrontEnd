import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '@/Components/Common/Layout';

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <div style={{ marginTop: "90px" }}>
        <Component {...pageProps} />
      </div>
    </Layout>
  )
}
