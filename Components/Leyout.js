import Header from "./Header";
import Footer from "./Footer";

export default function Leyout({ Children }) {
  return (
    <div>
      <Header />
      <div>{Children}</div>
      <Footer />
    </div>
  );
}