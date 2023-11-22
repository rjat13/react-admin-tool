import { CFormFeedback } from "@coreui/react";
import { Field, ErrorMessage, useFormikContext } from "formik";
import PropTypes from "prop-types";

const WrapLabel = ({ name, label, children }) => {
  return (
    <div className="mb-2 mt-2">
      <label htmlFor={name}>{label}</label>
      {children}
    </div>
  );
};
WrapLabel.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.node.isRequired,
  children: PropTypes.element,
};

const TextInput = ({ name, label, type, ...props }) => {
  const { values, errors, touched, isSubmitting, handleChange, handleBlur } =
    useFormikContext();
  if (label) {
    return (
      <WrapLabel>
        <Field
          className={`form-control form-control-sm ${
            touched[name] && errors[name] ? "is-invalid" : null
          }`}
          id={name}
          name={name}
          value={values[name]}
          error={touched[name] && errors[name]}
          type={type}
          {...props}
          invalid={errors[name]}
        />
        {touched[name] && errors[name] && (
          <CFormFeedback invalid={errors[name]}>
            <ErrorMessage name={name} component="div" className="error" />
          </CFormFeedback>
        )}
      </WrapLabel>
    );
  }
  return (
    <>
      <Field
        className={`form-control form-control-sm ${
          touched[name] && errors[name] ? "is-invalid" : null
        }`}
        id={name}
        name={name}
        value={values[name]}
        error={touched[name] && errors[name]}
        type={type}
        {...props}
        invalid={errors[name] ? true : false}
      />
      {touched[name] && errors[name] && (
        <CFormFeedback invalid={errors[name]}>
          <ErrorMessage name={name} component="div" className="error" />
        </CFormFeedback>
      )}
    </>
  );
};

export default TextInput;

TextInput.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.oneOf(["text", "email", "password"]),
};
