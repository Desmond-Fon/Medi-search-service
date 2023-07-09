import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/landing'
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import Overview from "./pages/dashboard/overview";
import Tracking from "./pages/dashboard/tracking";
import 'mapbox-gl/dist/mapbox-gl.css';


function App() {

  return (
    <>
      <div>
        <BrowserRouter>
          {/* <Header /> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />

            <Route path="/dashboard" element={<Dashboard />}>
              <Route path="/dashboard/overview" element={<Overview />} />
              <Route path="/dashboard/tracking" element={<Tracking />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
