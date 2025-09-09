import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Homepage from "./pages/Homepage";
import Category from "./pages/Category";
import ReviewDetails from "./pages/ReviewDetails";
import SiteHeader from "./components/SiteHeader";

function App() {
  return (
    <Router>
      <div className="App">
        <SiteHeader />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/details/:id" element={<ReviewDetails />} />
          <Route path="/category/:id" element={<Category />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
