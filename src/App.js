import { Route, Routes } from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupsPage from "./pages/NewMeetup";
import FavouritePage from "./pages/Favourite";
import Layout from "./components/layout/Layout";
/*focuses on rendering the routing configuration */
function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<AllMeetupsPage />} />
        <Route path="/new-meetup" element={<NewMeetupsPage />} />
        <Route path="/favourite" element={<FavouritePage />} />
      </Routes>
    </Layout>
  );
}

export default App;
