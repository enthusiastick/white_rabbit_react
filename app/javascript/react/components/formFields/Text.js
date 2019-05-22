import React from 'react'

const Text = ({
  field: { name, value, onChange, onBlur },
  form: { errors, touched },
  id,
  label,
  ...props
}) => (
  <fieldset>
    <label htmlFor={name}>
      {label}
    </label>
    <input
      name={name}
      id={id}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      type='text'
    />
  </fieldset>
)

export default Text
