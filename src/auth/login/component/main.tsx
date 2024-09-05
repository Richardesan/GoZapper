import LoginForm from "./form";
import Header from "../../component/header";
import SocialLogin from "../../component/socialLogin";
import Divider from "../../component/divider";

const Main = () => {
    return <main className="shadow-custom-combined mt-10 max-xl:w-8/12 max-md:w-11/12 w-5/12 mx-auto px-10 rounded-2xl py-4 ">
    <Header />
    <LoginForm />
    <Divider />
    <SocialLogin />
  </main>
}

export default Main