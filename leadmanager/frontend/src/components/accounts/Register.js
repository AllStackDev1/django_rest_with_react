import React from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import pick from "lodash/pick";
import { Formik } from "formik";
import { useSelector, useDispatch } from "react-redux";
import {
  Button,
  Form,
  Input,
  Divider,
  Grid,
  Header,
  Message,
  Segment,
} from "semantic-ui-react";

import { registerRequest } from "../../redux/actions";

const Register = () => {
  const FormSchema = Yup.object().shape({
    username: Yup.string().required("Username is Required!"),
    email: Yup.string()
      .email("Please enter a valid email address")
      .required("Email is Required!"),
    password: Yup.string()
      .required("Password is Required!")
      .min(3, "Password should at least be 8 characters long!"),
    password2: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords do not match")
      .required("Password Confirm is Required!"),
  });

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  if (isAuthenticated) return <Redirect to="/home" />;

  return (
    <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="green" textAlign="center">
          Register
        </Header>
        <Formik
          enableReinitialize
          initialValues={{
            username: "",
            email: "",
            password: "",
            password2: "",
          }}
          validationSchema={FormSchema}
          onSubmit={(values, { setSubmitting, resetForm, setStatus }) => {
            setSubmitting(true);
            const newUser = pick(values, ["username", "email", "password"]);
            dispatch(registerRequest(newUser));
            setSubmitting(false);
            resetForm({});
            setStatus({ success: true });
          }}
        >
          {({
            values,
            handleSubmit,
            handleBlur,
            handleChange,
            isSubmitting,
            isValid,
            dirty,
            errors,
            touched,
          }) => (
            <Form onSubmit={handleSubmit} size="large">
              <Segment
                stacked
                style={{ textAlign: "left" }}
                className="segment_remove_after"
              >
                <Form.Field
                  fluid
                  name="username"
                  control={Input}
                  label="Username"
                  placeholder="Username"
                  error={
                    errors.username &&
                    touched.username && {
                      content: errors.username,
                      pointing: "above",
                    }
                  }
                  value={values.username}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <Form.Field
                  fluid
                  type="email"
                  control={Input}
                  label="Email"
                  placeholder="joe@schmoe.com"
                  name="email"
                  error={
                    errors.email &&
                    touched.email && {
                      content: errors.email,
                      pointing: "above",
                    }
                  }
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <Form.Field
                  fluid
                  control={Input}
                  type="password"
                  label="Password"
                  placeholder=""
                  name="password"
                  error={
                    errors.password &&
                    touched.password && {
                      content: errors.password,
                      pointing: "above",
                    }
                  }
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <Form.Field
                  fluid
                  control={Input}
                  type="password"
                  label="Confirm Password"
                  placeholder=""
                  name="password2"
                  error={
                    errors.password2 &&
                    touched.password2 && {
                      content: errors.password2,
                      pointing: "above",
                    }
                  }
                  value={values.password2}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <Button
                  fluid
                  type="submit"
                  color="green"
                  size="large"
                  loading={isSubmitting}
                  disabled={isSubmitting || !dirty || !isValid}
                >
                  Submit
                </Button>
              </Segment>
            </Form>
          )}
        </Formik>
        <Divider />
        <Message>
          Already have an account? <Link to="/login">Login</Link>
        </Message>
      </Grid.Column>
    </Grid>
  );
};

export default Register;
