import Leyout from "../Components/Leyout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Leyout>
      <Component {...pageProps} />
    </Leyout>
  );
}

export default MyApp;
