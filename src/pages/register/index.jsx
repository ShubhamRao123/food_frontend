import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { register } from "../../services";
import styles from "./register.module.css"; // Import the CSS module
import Footer from "../../component/footer";

function Register() {
  const navigate = useNavigate();

  const [formdata, setFormdata] = useState({
    email: "",
    name: "",
    phone: "",
    password: "",
  });

  const [formError, setFormError] = useState({
    email: null,
    name: null,
    phone: null,
    password: null,
  });

  const [loading, setLoading] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    let errors = false;
    setFormError({
      email: null,
      name: null,
      phone: null,
      password: null,
    });

    if (!formdata.email || !formdata.email.includes("@")) {
      setFormError((prev) => ({ ...prev, email: "Invalid email address" }));
      errors = true;
    }
    if (!formdata.name) {
      setFormError((prev) => ({ ...prev, name: "Name is required" }));
      errors = true;
    }
    if (!formdata.phone || formdata.phone.length < 10) {
      setFormError((prev) => ({ ...prev, phone: "Invalid phone number" }));
      errors = true;
    }
    if (!formdata.password || formdata.password.length < 8) {
      setFormError((prev) => ({ ...prev, password: "Password is required" }));
      errors = true;
    }
    if (errors) return;

    try {
      setLoading(true);
      const response = await register(formdata);
      toast.success(response.message);
      navigate("/login");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.formContainer}>
          <div className={styles.innerContainer}>
            <header>
              <img
                src="https://res.cloudinary.com/dfrujgo0i/image/upload/v1732379275/oyghaafcpxsawrjqhnqf.png"
                alt="Register"
              />
              <h2>Welcome Back 👋</h2>
              <p>
                Today is a new day. It's your day. You shape it. Sign in to
                start ordering.
              </p>
            </header>
            <form onSubmit={handleRegister}>
              <div>
                <label>Name</label>
                <input
                  type="text"
                  value={formdata.name}
                  placeholder="Enter your name"
                  onChange={(e) =>
                    setFormdata({ ...formdata, name: e.target.value })
                  }
                />
                {formError.name && (
                  <p className={styles.error}>{formError.name}</p>
                )}
              </div>
              <div>
                <label>Email</label>
                <input
                  type="email"
                  value={formdata.email}
                  placeholder="Example@email.com"
                  onChange={(e) =>
                    setFormdata({ ...formdata, email: e.target.value })
                  }
                />
                {formError.email && (
                  <p className={styles.error}>{formError.email}</p>
                )}
              </div>
              <div>
                <label>Phone</label>
                <input
                  type="text"
                  value={formdata.phone}
                  placeholder="Enter your phone number"
                  onChange={(e) =>
                    setFormdata({ ...formdata, phone: e.target.value })
                  }
                />
                {formError.phone && (
                  <p className={styles.error}>{formError.phone}</p>
                )}
              </div>
              <div>
                <label>Password</label>
                <input
                  type="password"
                  value={formdata.password}
                  placeholder="At least 8 characters"
                  onChange={(e) =>
                    setFormdata({ ...formdata, password: e.target.value })
                  }
                />
                {formError.password && (
                  <p className={styles.error}>{formError.password}</p>
                )}
              </div>
              <button disabled={loading}>
                {loading ? "Creating Account..." : "Continue"}
              </button>
              <p>
                Already have an account?{" "}
                <span
                  className={styles.signupLink}
                  onClick={() => navigate("/login")}
                >
                  Sign in
                </span>
              </p>
            </form>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <img
            src="https://res.cloudinary.com/dfrujgo0i/image/upload/v1732459979/Art_epddge.png"
            alt="Delicious Food"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Register;
