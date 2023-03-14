import "../src/style/template.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/common/Header";
import Firstplate from "./components/common/Firstplate";
import Footer from "./components/common/Footer";


//fisrtPage
import Page1 from "./components/firstPage/Page1";
import Page2 from "./components/firstPage/Page2";

//games
import GamesMainPage from "./components/games/GamesMainPage";
import GamesFilters from "./components/games/GamesFilters";


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Firstplate>
      <Page1/>
      <Page2/>
        <Routes>
          <Route path="/gamesMainPage" element={<GamesMainPage />} />
          <Route path="/gamesFilters" element={<GamesFilters />} />
        </Routes>
      </Firstplate>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
