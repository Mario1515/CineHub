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
import Logout from "./components/User/Logout";
import axios from "axios";
import "./App.css";
import { useDispatch } from 'react-redux';
import { useEffect } from "react";
import { setBannerData, setImageURL } from "./store/cineSlice";

function App() {
  const dispatch = useDispatch();

  const fetchTrendingData = async()=> {  
    try {
    const response = await axios.get('/trending/all/week')
    dispatch(setBannerData(response.data.results))
    } catch (err) {
      console.error("error", err)
    }
  }

  const fetchConfiguration = async()=>{
    try {
        const response = await axios.get("/configuration")
        dispatch(setImageURL(response.data.images.secure_base_url+"original"))
    } catch (error) {
      
    }
  }
  useEffect(()=>{
    fetchTrendingData()
    fetchConfiguration()
  },[])

  return (
    <>
    <AuthProvider>
          <Header />
              <div className="pt-16">
              <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/:explore" element={<ExplorePage />} />
              <Route path="/explore:id" exact element={<DetailsPage />} />
              <Route path="/signup" exact element={<Signup />} />
              <Route path="/login" exact element={<Login />} />
              {/* <Route path="/logout" exact element={<Logout />} /> */}
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
