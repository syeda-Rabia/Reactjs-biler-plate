import { useFormik } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Container, Row } from "reactstrap";
import * as Yup from "yup";

import { loginUser } from "../../../Store/Auth/actions";
import LoginForm from "./LoginForm";
import styles from "./style.module.scss";

export default function Login(props) {
  const dispatch = useDispatch();

  const tenantId = useSelector((state) => state.Auth.tenantId);
 
  
  const loginUserSchema = Yup.object().shape({
    email: Yup.string()
      .email("Please enter valid email address")
      .required("Please enter email address"),
    password: Yup.string().required("Please enter password"),
  });
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    enableReinitialize: true,
    validationSchema: loginUserSchema,
    onSubmit: async (values) => {
      dispatch(
        loginUser({
          email: "ajmal@mail.com",
          password: "1234",
          resetForm: formik.resetForm,
          //   history: history,
        })
      );
    },
  });

  return (
    <Container fluid>
      <Row style={{ minHeight: "100vh" }}>
       
        <Col xl="5" className={styles.authRightSide}>
          <LoginForm formik={formik} />
        </Col>
      </Row>
     
    </Container>
  );
}
