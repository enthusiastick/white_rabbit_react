import wretch from 'wretch'

const Rails = wretch()
  .url("http://localhost:3000")
  .options({
    credentials: 'include'
  })

export default Rails
