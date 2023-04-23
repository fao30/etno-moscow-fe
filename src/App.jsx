import React, { Suspense } from "react";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import Main from "./pages/Dashboard/Main/Main";
import Users from "./pages/Dashboard/Users/Users";
import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar/Navbar";
import Survey from "./pages/Dashboard/Main/components/Survey";
import PasswordChange from "./auth/ChangePassword";
import LogoutModal from "./auth/Logout";

const RequireAuthHelper = ({ children }) => {
  if (!localStorage.access_token) {
    return <Navigate to="/" />;
  }
  return <>{children}</>;
};

const RequireAuth = React.memo(RequireAuthHelper);

const App = () => {
  return (
    <BrowserRouter>
      <HelmetProvider>
        <Toaster
          toastOptions={{
            duration: 2000,
          }}
        />
        <Navbar />
        <LogoutModal />
        <Suspense fallback={<></>}>
          <Routes>
            <Route path="/" element={<Home title="Войти" />} />
            <Route path="*" element={<Navigate to="/" />} />
            <Route path="/dashboard">
              <Route index element={<Main title="Админка" />} />
              <Route
                path="users"
                element={<Users title="Админка: пользователи" />}
              />
              <Route
                path="survey/:id"
                element={<Survey title="Админка: пользователи" />}
              />
              <Route
                path="password-change"
                element={<PasswordChange title="Админка: сменить пароль" />}
              />
            </Route>
          </Routes>
        </Suspense>
      </HelmetProvider>
    </BrowserRouter>
  );
};

export default App;
