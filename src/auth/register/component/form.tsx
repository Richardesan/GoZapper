import React from "react";
import { useFormik, FormikHelpers } from "formik";
import { Link } from "react-router-dom";
import { userSchema } from "../../userSchema";
import axios, { AxiosResponse, AxiosError } from "axios";

interface RegisterFormValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  termsAccepted: boolean;
}

interface SignupResponse {
  message: string;
}

const onSubmit = async (
  values: RegisterFormValues,
  actions: FormikHelpers<RegisterFormValues>
): Promise<void> => {
  try {
    actions.setSubmitting(true);
    const response: AxiosResponse<SignupResponse> = await axios.post(
      "http://localhost:5173/api/v1/authentication/signup", // Updated API endpoint
      {
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        password: values.password,
      }
    );
    console.log("User signed up successfully:", response.data);
    actions.resetForm();
  } catch (error: unknown) {
    const axiosError = error as AxiosError;
    console.error(
      "Signup failed:",
      axiosError.response?.data || axiosError.message
    );
    actions.setErrors({ email: "Signup failed. Try again." });
  } finally {
    actions.setSubmitting(false);
  }
};

const inputClass =
  "text-darkText mt-1 w-full outline-none border border-borderCol rounded-md p-2";
const inputDanger = "border-danger shadow-sm shadow-danger";
const buttonStyle =
  "w-full my-6 bg-custom-gradient font-bold rounded-md text-white shadow-custom-light p-3";

const RegisterForm: React.FC = () => {
  const {
    values,
    handleBlur,
    errors,
    handleChange,
    touched,
    isSubmitting,
    handleSubmit,
  } = useFormik<RegisterFormValues>({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      termsAccepted: false,
    },
    validationSchema: userSchema,
    onSubmit,
  });

  return (
    <form autoComplete="off" onSubmit={handleSubmit} className="space-y-4">
      <div className="flex gap-3">
        <div className="w-full">
          <label className="block text-sm font-bold">
            <span
              className={
                errors.firstName && touched.firstName ? "text-danger" : ""
              }
            >
              First Name
            </span>
            <input
              type="text"
              name="firstName"
              placeholder="Enter First Name"
              value={values.firstName}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`${inputClass} ${
                errors.firstName && touched.firstName ? inputDanger : ""
              }`}
            />
            {errors.firstName && touched.firstName && (
              <p className="text-danger text-xs">{errors.firstName}</p>
            )}
          </label>
        </div>
        <div className="w-full">
          <label className="block text-sm font-bold">
            <span
              className={
                errors.lastName && touched.lastName ? "text-danger" : ""
              }
            >
              Last Name
            </span>
            <input
              type="text"
              name="lastName"
              placeholder="Enter Last Name"
              value={values.lastName}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`${inputClass} ${
                errors.lastName && touched.lastName ? inputDanger : ""
              }`}
            />
            {errors.lastName && touched.lastName && (
              <p className="text-danger text-xs">{errors.lastName}</p>
            )}
          </label>
        </div>
      </div>

      <label className="block text-sm font-bold">
        <span className={errors.email && touched.email ? "text-danger" : ""}>
          Email Address
        </span>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`${inputClass} ${
            errors.email && touched.email ? inputDanger : ""
          }`}
        />
        {errors.email && touched.email && (
          <p className="text-danger text-xs">{errors.email}</p>
        )}
      </label>

      <label className="block text-sm font-bold">
        <span
          className={errors.password && touched.password ? "text-danger" : ""}
        >
          Password
        </span>
        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`${inputClass} ${
            errors.password && touched.password ? inputDanger : ""
          }`}
        />
        {errors.password && touched.password && (
          <p className="text-danger text-xs">{errors.password}</p>
        )}
      </label>

      <label className="block text-sm font-bold">
        <span
          className={
            errors.confirmPassword && touched.confirmPassword
              ? "text-danger"
              : ""
          }
        >
          Confirm Password
        </span>
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={values.confirmPassword}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`${inputClass} ${
            errors.confirmPassword && touched.confirmPassword
              ? inputDanger
              : ""
          }`}
        />
        {errors.confirmPassword && touched.confirmPassword && (
          <p className="text-danger text-xs">{errors.confirmPassword}</p>
        )}
      </label>

      <label className="flex items-center gap-2 text-sm">
        <input
          type="checkbox"
          name="termsAccepted"
          checked={values.termsAccepted}
          onChange={handleChange}
          onBlur={handleBlur}
          className="cursor-pointer accent-primaryCol"
        />
        <span>
          You agree to our{" "}
          <span className="text-primaryCol font-bold underline cursor-pointer">
            Terms of Service
          </span>{" "}
          and{" "}
          <span className="text-primaryCol underline cursor-pointer font-bold">
            Privacy Policy
          </span>
        </span>
      </label>
      {errors.termsAccepted && touched.termsAccepted && (
        <p className="text-danger text-sm font-bold">{errors.termsAccepted}</p>
      )}

      <button
        className={`${buttonStyle} ${
          isSubmitting || Object.keys(errors).length
            ? "opacity-50 cursor-not-allowed"
            : ""
        }`}
        type="submit"
        disabled={isSubmitting || Object.keys(errors).length > 0}
      >
        {isSubmitting ? "Joining..." : "Join"}
      </button>

      <p className="text-sm font-bold text-center">
        Already have an account?{" "}
        <Link to="/login">
          <span className="underline text-primaryCol cursor-pointer">
            Log in
          </span>
        </Link>
      </p>
    </form>
  );
};

export default RegisterForm;
