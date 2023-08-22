import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/landing'
import Dashboard from "./pages/dashboard";
import Tracking from "./pages/dashboard/tracking";
import { DataProvider } from "./contexts/Data";


function App() {

  return (
    <>
      <DataProvider>
        <div>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />}>
                <Route path="/dashboard/tracking" element={<Tracking />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </div>
      </DataProvider>
    </>
  )
}

export default App
