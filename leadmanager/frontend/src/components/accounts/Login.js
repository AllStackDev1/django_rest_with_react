import React from "react";
import { Link, Redirect } from "react-router-dom";
import * as Yup from "yup";
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

import { loginRequest } from "../../redux/auth/actions";

const Login = () => {
  const FormSchema = Yup.object().shape({
    username: Yup.string().required("Username is Required!"),
    password: Yup.string().required("Password is Required!"),
  });

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  if (isAuthenticated) return <Redirect to="/home" />;

  return (
    <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="green" textAlign="center">
          Log-in to your account
        </Header>
        <Formik
          enableReinitialize
          initialValues={{
            username: "",
            password: "",
          }}
          validationSchema={FormSchema}
          onSubmit={(values, { setSubmitting, resetForm, setStatus }) => {
            setSubmitting(true);
            dispatch(loginRequest(values));
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
                  icon="user"
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
                  icon="lock"
                  name="password"
                  control={Input}
                  type="password"
                  label="Password"
                  placeholder="Password"
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
          Don't have an account? <Link to="/register">Regiser</Link>
        </Message>
      </Grid.Column>
    </Grid>
  );
};

export default Login;
