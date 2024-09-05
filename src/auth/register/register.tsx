
import RegisterForm from "./component/form";
import Header from "../component/header";
import Divider from "../component/divider";
import SocialLogin from "../component/socialLogin";
const Register = () => {
  return (
    <div className="shadow-custom-combined mt-5 max-xl:w-8/12 max-md:w-11/12 w-5/12 mx-auto px-10 rounded-2xl py-4">
      <Header />
      <RegisterForm />
      <Divider />
      <SocialLogin />
    </div>
  );
};

export default Register;
