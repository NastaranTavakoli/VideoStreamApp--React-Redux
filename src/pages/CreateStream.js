import React from "react";
import { Field, reduxForm } from "redux-form";

export let CreateStream = props => {
  const renderError = ({ error, touched }) => {
    if (error && touched) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  };

  const renderInput = ({ input, meta, label }) => {
    console.log(meta.error);
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} />
        <div>{renderError(meta)}</div>
      </div>
    );
  };

  const onSubmit = formValues => {
    console.log(formValues);
  };

  return (
    <div>
      <form className="ui form error" onSubmit={props.handleSubmit(onSubmit)}>
        <Field name="title" component={renderInput} label="Enter Title" />
        <Field
          name="description"
          component={renderInput}
          label="Enter Description"
        />
        <button className="ui button primary">Submit</button>
      </form>
    </div>
  );
};

const validate = formValues => {
  const error = {};
  if (!formValues.title) {
    error.title = "Please enter a title";
  }
  if (!formValues.description) {
    error.description = "Please enter a description";
  }
  return error;
};

CreateStream = reduxForm({ form: "createStream", validate })(CreateStream);
