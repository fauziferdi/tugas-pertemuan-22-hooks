import React from "react";

export default function LoginModal({
  isLogin,
  handleSubmit,
  toggleLogin,
  handleChange,
  error,
  loading,
  form,
}) {
  return (
    <div className="modal show d-block" tabindex="-1">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header bg-primary text-white">
            <h5 className="modal-title">{isLogin ? "Login" : "Register"}</h5>
          </div>
          <div className="modal-body">
            {error && (
              <div className="alert alert-danger">
                <i class="bi bi-exclamation-triangle me-2"></i>
                {error}
              </div>
            )}
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="username" className="form-label">
                  Username
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  name="username"
                  value={form.username}
                  onChange={handleChange}
                  required
                  minLength="6"
                  maxLength={30}
                  disabled={loading}
                  autoComplete="username"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  id="password"
                  required
                  disabled={loading}
                  autoComplete="current-password"
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary w-100 mt-2 fw-bold"
                disabled={loading}
              >
                <i className="bi bi-shield-lock"></i>{" "}
                {isLogin ? "Login" : "Register"}
              </button>
              <button
                onClick={toggleLogin}
                className="btn btn-link w-100 mt-3 text-decoration-none"
                disabled={loading}
              >
                {isLogin ? "Register" : "Login"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
