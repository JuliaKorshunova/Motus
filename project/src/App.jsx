import { useState } from "react";
import Release from "./components/Release/Release";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import HomeNoAuthorized from "./components/Home/HomeNoAuthorized";
import Library from "./components/Library/Library";
import Header from "./components/Header/Header";
import PodcasterProfile from "./components/Podcaster/PodcasterProfile/PodcasterProfile";
import TabsSection from "./components/TabsSection/TabsSectionForUser/TabsSectionForUser";
import LentaSection from "./components/LentaSection/LentaSection";
import SubscribesSection from "./components/SubscribesSection/SubscribesSection";
import PlayListSection from "./components/PlayListSection/PlayListSection";
import { Registration } from "./components/Forms/Registration";
import { Auth } from "./components/Forms/Aurh";
import Main from "./components/Main/Main";
import UserProfile from "./components/Podcaster/UserProfile/UserProfile";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MySubscriptions from "./components/MySubscriptions/MySubscriptions";
import OtherPodcaster from "./components/Podcaster/OtherPodcaster/OtherPodcaster";
import ThePageOfPodcast from "./components/ThePageOfPodcast/ThePageOfPodcast";
import PodcastEmpty from "./components/PodcastEmpty/PodcastEmpty";
import Register from "./components/Register/Register";
import PageRegister from "./components/Register/PageRegister";
import PodcasterCheck from "./components/Podcaster/PodcasterCheck/PodcasterCheck";
import HomeAuthorized from "./components/Home/HomeAuthorized";
import ThePageOfPodborka from "./components/ThePageofPodborka/ThePageOfPodborka";
import Login from "./components/Login/Login";
import PasswordRecovery from "./components/PasswordRecovery/PasswordRecovery";
import PasswordRecoveryTransition from "./components/PasswordRecovery/PasswordRecoveryTransition";
import PasswordRecoveryForEmail from "./components/PasswordRecovery/PasswordRecoveryForEmail";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="o">
      <Router>
        <Routes>
          {/* Указание маршрута по умолчанию с path="/" */}
          <Route path="/" element={<HomeAuthorized />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/register" element={<PageRegister />} />
          <Route path="/podcastEmpty" element={<Release />} />
          <Route path="/release" element={<ThePageOfPodcast />} />
          <Route path="/podcaster" element={<PodcasterCheck />} />
          {/* <Route path="/podcaster" element={<OtherPodcaster />} /> */}
          {/* <Route path="/podcaster" element={<UserProfile />} /> */}
          {/* <Route path="/podcaster" element={<PodcasterCheck />} />  */}
          <Route path="/subscr" element={<MySubscriptions />} />
          <Route path="/library" element={<Library />} />
          <Route path="/main" element={<HomeAuthorized />} />
          {/* <Route path="/podcastEmpty" element={<PodcastEmpty />} /> */}
          <Route path="/podborka" element={<ThePageOfPodborka />} />
          <Route path="/login" element={<Login />} />{" "}
          {/* Добавляем маршрут для входа */}
          <Route path="/reset-password" element={<PasswordRecovery />} />
          <Route
            path="/reset-password-transition"
            element={<PasswordRecoveryTransition />}
          />
          <Route
            path="/reset-password-for-email"
            element={<PasswordRecoveryForEmail />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
