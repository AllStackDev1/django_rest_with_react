import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { withAlert } from "react-alert";
import { useSelector } from "react-redux";

const Alert = ({ alert }) => {
  const { errors, message } = useSelector((state) => state.alert);

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      if (errors) {
        if (errors.name) {
          alert.error(`Name: ${errors.name.join()}`);
        }
        if (errors.email) {
          alert.error(`Email: ${errors.email.join()}`);
        }
        if (errors.message) {
          alert.error(`Message: ${errors.message.join()}`);
        }
        if (errors.detail) {
          alert.error(`Detail: ${errors.detail}`);
        }
        if (errors.non_field_errors) {
          alert.error(errors.non_field_errors.join());
        }
        if (errors.username) {
          alert.error(errors.username.join());
        }
      }
      if (message) alert.success(message);
    }
    return () => (mounted = false);
  }, [errors, message]);

  return <></>;
};

Alert.prototype = {
  errors: PropTypes.object.isRequired,
  message: PropTypes.string.isRequired,
};

export default withAlert()(Alert);
