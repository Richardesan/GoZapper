import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Terms from "./pages/policies/terms/terms";
import Privacy from "./pages/policies/privacy/privacy";
import Login from "./auth/login/login";
import Header from "./components/header";
import Pricing from "./pages/pricing/pricing";
import Register from "./auth/register/register";
import FPassword from "./auth/fPassword/fPassword";
import { AppRoutes } from "../utils/routes";
import Home from "./pages/home/home";
import { Provider } from "react-redux";
import store from "./redux/store";
import Portal from "./pages/portal/portal";
import Credentials from "./pages/credetials/credentials";
import Webhook from "./pages/webhook/webhook";
import Delivery from "./pages/deliverly/delivery";
import TodoList from "./pages/learningTodo/TodoList";

function shouldShowHeader(pathname: string): boolean{
  const headerRoutes = [AppRoutes.login, AppRoutes.register, AppRoutes.pricing];
  return headerRoutes.includes(pathname);
}

function showSecondHeader(pathname: string): boolean {
  const myroute =  [AppRoutes.home ] 
  return myroute.includes(pathname)
}

function Layout() {
  const location = useLocation();

  return (
    <>
      {shouldShowHeader(location.pathname) && <Header />}
 

      <Routes>
        <Route path={AppRoutes.home} element={<Home />} />
        <Route path={AppRoutes.pricing} element={<Pricing />} />
        <Route path={AppRoutes.terms} element={<Terms />} />
        <Route path={AppRoutes.privacy} element={<Privacy />} />
        <Route path={AppRoutes.portal} element={<Portal />} />
        <Route path={AppRoutes.forgotPassowrd} element={<FPassword />} />
        <Route path={AppRoutes.login} element={<Login />} />
        <Route path={AppRoutes.register} element={<Register />} />
        <Route path={AppRoutes.credentials} element={<Credentials />} />
        <Route path={AppRoutes.webHook} element={<Webhook />} />
        <Route path={AppRoutes.delivery} element={<Delivery />} />
        <Route path='/todolist' element={<TodoList />} />
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </Provider>
  );
}
