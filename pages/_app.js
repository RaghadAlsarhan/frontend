import Leyout from "../Components/Leyout";
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
// import "../public/css/bootstrap.css";


function MyApp({ Component, pageProps }) {
  return (
    <Leyout>
      <Component {...pageProps} />
    </Leyout>
  );
}

export default MyApp;
