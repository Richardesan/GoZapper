import Button from "../../../components/button";
import { Link } from "react-router-dom";

const LoginForm = () => {
  return (
    <form>
        <label>
        <span className="block text-sm font-bold">Email Address</span>
        <input
          type="email"
          placeholder="Enter your email"
          className={`text-darkText mb-3 mt-1 w-full outline-none border border-borderCol rounded-md p-2`}
        />
      </label>
      <label>
        <span className="block text-sm font-bold">Password</span>
        <input
          type="password"
          placeholder="........"
          className={`text-darkText mb-3 mt-1 w-full outline-none border border-borderCol rounded-md p-2`}
        />
      </label>
      <Link to="/forgot-password">
      <p className="font-bold text-sm text-end underline cursor-pointer">Forgot Password?</p>
      </Link>

      <Button
        name="Log in"
        marginButton="my-6"
        backgroundColor="bg-custom-gradient"
        weight="font-bold"
        rounded="rounded-md"
        textColor="text-white"
        shadow="shadow-custom-light"
      />
      <p className="text-sm font-bold text-center">
        Don't have an account?{" "}
        <Link to="/register">
          <span className="underline text-primaryCol cursor-pointer">
            Join
          </span>
        </Link>
      </p>
    </form>
  );
};

export default LoginForm;
