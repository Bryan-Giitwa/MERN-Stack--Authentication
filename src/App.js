import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Layout from "./components/layout/Layout";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Forgot from "./pages/auth/Forgot";
import Reset from "./pages/auth/Reset";
import LoginWithCode from "./pages/auth/LoginWithCode";
import Profile from "./pages/profile/Profile";
import Verify from "./pages/auth/Verify";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />
          <Route path="/resetpassword/:resetToken" element={<Reset />} />
          <Route path="/loginwithcode/:email" element={<LoginWithCode />} />
          <Route
            path="/"
            element={
              <Layout>
                <Profile />
              </Layout>
            }
          />
          <Route
            path="/"
            element={
              <Layout>
                <Verify />
              </Layout>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
