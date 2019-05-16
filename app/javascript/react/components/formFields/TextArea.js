import React from 'react'

const TextArea = ({
  field: { name, value, onChange, onBlur },
  form: { errors, touched },
  id,
  label,
  ...props
}) => (
  <div className='grid-x grid-margin-x'>
    <div className='cell'>
      <fieldset>
        <label htmlFor={name}>
          {label}
        </label>
        <textarea
          name={name}
          id={id}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        />
      </fieldset>
    </div>
  </div>
)

export default TextArea
