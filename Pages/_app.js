/* Se importan los CSS, en si son las partes fuera del padding */
// import App from 'next/app'
import "bootswatch/dist/cosmo/bootstrap.min.css";
import "../global.css";
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
