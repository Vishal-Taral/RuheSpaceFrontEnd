// import '@/styles/globals.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Layout from '@/Components/Common/Layout';

// export default function App({ Component, pageProps }) {
//   return (
//     <Layout>
//       <div style={{ marginTop: "90px" }}>
//         <Component {...pageProps} />
//       </div>
//     </Layout>
//   )
// }

import '@/styles/globals.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppProps from "next/app";
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Layout from '@/Components/Common/Layout';


export default function App({ Component, pageProps }, AppProps) {
  const router = useRouter();
  // console.log(navigation);
  useEffect(() => {
    typeof document !== undefined
      ? require("bootstrap/dist/js/bootstrap")
      : null;
  }, [router.events]);

  return (
    <div>
      {/* <Layout navigation={navigation}> */}
      <Layout>
        <div style={{ marginTop: "90px" }}>
          <Component {...pageProps} />
        </div>
      </Layout>
    </div>

  )
}