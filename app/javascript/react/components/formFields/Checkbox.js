import React from 'react'

const Checkbox = ({
  field: { name, value, onChange, onBlur },
  form: { errors, touched },
  id,
  label,
  ...props
}) => (
  <div className='grid-x grid-margin-x'>
    <div className='cell shrink'>
      <div className='switch'>
        <fieldset>
          <input
            className='switch-input'
            name={name}
            id={id}
            type='checkbox'
            value={value}
            checked={value}
            onChange={onChange}
            onBlur={onBlur}
          />
          <label className='switch-paddle' htmlFor={id}>
            <span className='show-for-sr'>{label}</span>
          </label>
        </fieldset>
      </div>
    </div>
    <div className='cell auto'>
      {label}
    </div>
  </div>
)


export default Checkbox
