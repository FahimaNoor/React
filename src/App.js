import { Route, Routes } from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupsPage from "./pages/NewMeetup";
import FavouritePage from "./pages/Favourite";
import MainNavigation from "./components/layout/MainNavigation"

function App() {
  return (
    <div>
      <MainNavigation/>
      <Routes>
        <Route path="/" element={<AllMeetupsPage />} />
        <Route path="/new-meetup" element={<NewMeetupsPage />} />
        <Route path="/favourites" element={<FavouritePage />} />
      </Routes>
    </div>
  );
}

export default App;
