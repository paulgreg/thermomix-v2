import Common from "./Components/Common";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Preferences from "./Components/Preferences";
import { Pages } from "./Pages/Pages";

const App = () => {
  return (
    <BrowserRouter basename={import.meta.env.PROD ? "/thermomix-v2" : ""}>
      <Routes>
        <Route path={Pages.HOME} element={<Common />}>
          <Route index element={<Home />} />
          <Route path={Pages.PREFERENCES} element={<Preferences />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
