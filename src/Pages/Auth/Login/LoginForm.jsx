import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Button from "../../../Shared/Button";
import Text from "../../../Shared/Text";
import InputField from "../../../Shared/InputField";
import styles from "./style.module.scss";
import { Form, FormikProvider } from "formik";
import { Link } from "react-router-dom";
import Images from "../../../Constants/ImgConstants";

export default function LoginForm({ formik }) {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.Auth.error);

  return (
    <div className={styles.authRightSideInner}>
      <img
        className={` mx-auto ${styles.RightSideLogoImg}`}
        src={
          localStorage.getItem("dark") === "true" ||
          localStorage.getItem("dark") === null
            ? Images.ACADIFY_LIGHT_LOGO_WITH_TEXT
            : Images.ACADIFY_DARK_LOGO_WITH_TEXT
        }
        alt={""}
      />
      <Text mediumLight className="text-right ">
        Not a member ?
        <Link to="/signup" className={styles.pageHeadingLinks}>
          <b className="ml-1 ">Sign up</b>
        </Link>
      </Text>
      <div className={styles.rightSideBody}>
        <Text className={`mb-3 ${styles.pageHeading}`}>
          Log in to your Acadify account
        </Text>
        <Text className={`mb-3 text-danger error-message mt-negative-10`}>
          {error && error.message}
        </Text>
        <FormikProvider value={formik}>
          <Form noValidate onSubmit={formik.handleSubmit}>
            <Text className={`mb-2 ${styles.inputHeading}`}>Email</Text>
            <InputField
              type="text"
              placeholder="Enter your email address"
              name="email"
              value={formik.values && formik.values.email}
              onHandleChange={formik.handleChange}
              error={Boolean(formik.touched.email && formik.errors.email)}
              helpertext={formik.errors.email}
            />
            <Text className={`mb-2 ${styles.inputHeading}`}>Password</Text>
            <InputField
              type="password"
              placeholder="********"
              name="password"
              className="m-0"
              value={formik.values && formik.values.password}
              onHandleChange={formik.handleChange}
              error={Boolean(formik.touched.password && formik.errors.password)}
              helpertext={formik.errors.password}
            />
            <div className={`mt-5 ${styles.signInBtnDiv}`}>
              <button
                type="submit"
                className={styles.signInBtn}
                onHandleClick={formik.handleSubmit}
              >
                <b>Log in</b>
              </button>
              <Link
                to="/resetPassword"
                className="mt-2"
                style={{ marginLeft: "0px" }}
              >
                {" "}
                or <b className={styles.pageHeadingLinks}> Forgot Password?</b>
              </Link>
            </div>
          </Form>
        </FormikProvider>
      </div>
    </div>
  );
}
