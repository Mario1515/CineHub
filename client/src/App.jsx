import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ExplorePage from "./pages/ExplorePage";
import DetailsPage from "./pages/DetailsPage";
import SearchPage from "./pages/SearchPage";
import ErrorPage from "./pages/ErrorPage";
import Header from "./components/Header"
import Footer from "./components/Footer"


function App() {
  return (
    <>
      <Header />
      <div className="pt-16">
      <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/explore" exact element={<ExplorePage />} />
      <Route path="/explore:id" exact element={<DetailsPage />} />
      <Route path="/search" exact element={<SearchPage />} />
      <Route path="*" exact element={<ErrorPage />} />
      </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
