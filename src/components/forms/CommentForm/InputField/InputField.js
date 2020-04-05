import React, {forwardRef, createElement} from 'react';
import classnames from 'classnames';
import {StyledInputField} from "./styled";

export const InputField = forwardRef((props, ref) => {
  const {name, type, component, label, className} = props;

  const FieldElement = createElement(component, {
    ref,
    name,
    type,
    className: classnames('field', className)
  });

  return <StyledInputField>
    <div className="label">{label}</div>
    {FieldElement}
  </StyledInputField>
});