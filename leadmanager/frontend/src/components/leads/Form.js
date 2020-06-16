import React from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import { useSelector, useDispatch } from "react-redux";
import { Card, Form, Input, TextArea, Button } from "semantic-ui-react";

import { addLeadRequest } from "../../redux/leads/actions";

const FormView = () => {
  const FormSchema = Yup.object().shape({
    name: Yup.string().required("Full name is Required!"),
    email: Yup.string()
      .email("Please enter a valid email address")
      .required("Email is Required!"),
    message: Yup.string().required("Message is Required!"),
  });

  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();

  return (
    <Card fluid>
      <Card.Content>
        <Card.Header>Add Lead</Card.Header>
      </Card.Content>
      <Card.Content>
        <Formik
          enableReinitialize
          initialValues={{ name: "", email: "", message: "" }}
          validationSchema={FormSchema}
          onSubmit={(values, { setSubmitting, resetForm, setStatus }) => {
            setSubmitting(true);
            dispatch(addLeadRequest(values, token));
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
            <Form onSubmit={handleSubmit}>
              <Form.Field
                fluid
                name="name"
                control={Input}
                label="Full name"
                placeholder="Full name"
                error={
                  errors.name &&
                  touched.name && {
                    content: errors.name,
                    pointing: "above",
                  }
                }
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <Form.Field
                fluid
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
                control={TextArea}
                label="Message"
                placeholder="Message"
                name="message"
                error={
                  errors.message &&
                  touched.message && {
                    content: errors.message,
                    pointing: "above",
                  }
                }
                value={values.message}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <Button
                type="submit"
                primary
                loading={isSubmitting}
                disabled={isSubmitting || !dirty || !isValid}
              >
                Submit
              </Button>
            </Form>
          )}
        </Formik>
      </Card.Content>
    </Card>
  );
};

export default FormView;
