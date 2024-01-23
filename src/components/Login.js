export const Login = ({ style }) => {

  return (
    <div className="col-6 col-lg-4 card">
      <form
        id="my-form-login"
        className="d-flex justify-content-center align-items-center flex-column p-2"
        style={style}
        // onsubmit="event.preventDefault()"
        action="#"
      >
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            required
          />
        </div>
        <div className="mb-3 flex-grow-0">
          <button type="submit" className="btn btn-primary" id="my-button-login">
            Login
          </button>
        </div>
      </form>
    </div>
  )
}

{/* export default Login; */ }