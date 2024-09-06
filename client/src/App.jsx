import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ExplorePage from "./pages/ExplorePage";
import DetailsPage from "./pages/DetailsPage";
import SearchPage from "./pages/SearchPage";
import ErrorPage from "./pages/ErrorPage";
import Header from "./components/Header"
import Footer from "./components/Footer"
import MobileNav from "./components/MobileNav";
import Signup from "./components/User/Signup";
import Login from "./components/User/Login";
import { AuthProvider } from "./contexts/AuthProvider";

function App() {
  return (
    <>
    <AuthProvider>
          <Header />
              <div className="pt-16">
              <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/explore" exact element={<ExplorePage />} />
              <Route path="/explore:id" exact element={<DetailsPage />} />
              <Route path="/signup" exact element={<Signup />} />
              <Route path="/login" exact element={<Login />} />
              <Route path="/search" exact element={<SearchPage />} />
              <Route path="*" exact element={<ErrorPage />} />
              </Routes>
              </div>
          <Footer />
          <MobileNav/>
      </AuthProvider>
    </>
  )
}

export default App
