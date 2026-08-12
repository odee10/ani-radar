import Header from "../components/Header";
import AnimeSection from "../components/AnimeSection";
import Footer from "../components/Footer";
import { useEffect } from "react";

function Home() {
  useEffect(() => {
    document.title = "AniRadar";
  }, []);

  return (
    <>
      <Header />
      <AnimeSection />
      <Footer />
    </>
  );
}

export default Home;
