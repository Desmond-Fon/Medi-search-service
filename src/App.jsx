import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/landing'
import Login from "./pages/login";

function App() {

  return (
    <>
      <div>
        <BrowserRouter>
          {/* <Header /> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
