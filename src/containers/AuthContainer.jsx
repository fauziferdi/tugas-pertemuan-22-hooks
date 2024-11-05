import React, { useEffect, useState } from "react";
import LoginModal from "../components/LoginModal";
import { login, register } from "../utils/api";

const AuthContainer = (props) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      props.setToken(token);
    }
  }, [props.setToken]);

  const toggleLogin = () => {
    setIsLogin((prevIsLogin) => !prevIsLogin);
    setError(null);
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSumbit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    if (isLogin) {
      login(form)
        .then((res) => {
          localStorage.setItem("token", res.accessToken);
          props.setToken(res.accessToken);
          setForm({ username: "", password: "" });
        })
        .catch((err) => {
          setError(err.response.data.error);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      register(form)
        .then(() => {
          alert("register success");
          setIsLogin(true);
          setError(null);
          setForm({ username: "", password: "" });
        })
        .catch((err) => {
          setError(err.response.data.error);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  return (
    <div>
      <LoginModal
        form={form}
        loading={loading}
        error={error}
        handleChange={handleChange}
        isLogin={isLogin}
        toggleLogin={toggleLogin}
        handleSubmit={handleSumbit}
      />
    </div>
  );
};
export default AuthContainer;
