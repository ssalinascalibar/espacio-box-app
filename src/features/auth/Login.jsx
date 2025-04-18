import { useState, useEffect, useContext } from "react";
import AuthContext from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { fetchAdmin } from "../../services/api";
import { FaUserCog } from "../../assets/icons/icons";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";
import { Link } from "react-router-dom";
import "./login.css";

export default function Login() {
  const { setIsAuth } = useContext(AuthContext);
  const [registeredUser, setRegisteredUser] = useState({});
  const [adminUsers, setAdminUsers] = useState([]);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const getAdminUsers = async () => {
      const data = await fetchAdmin();
      setAdminUsers(data);
    };
    getAdminUsers();
  }, []);

  const handleChange = async (e) => {
    setRegisteredUser({
      ...registeredUser,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const enabledUser = adminUsers.find(
      (user) =>
        user.email === registeredUser.email &&
        user.password === registeredUser.password
    );

    const validateCorreo = !adminUsers.email === !registeredUser.email;

    if (enabledUser) {
      setIsAuth(true);
      setSuccessMessage("Bienvenido/a al panel de control");
      setTimeout(() => {
        navigate(`/admin`);
      }, 2000);
      setRegisteredUser("");
    } else if (validateCorreo) {
      setError("Debes ingresar un correo válido");
    } else {
      setError("* Correo o contraseña incorrectos");
    }
  };

  return (
    <div className="login-background">
      <Container className="login-container">
        <Row>
          <Col md={2} lg={3}></Col>
          <Col xs={12} md={8} lg={6}>
            <div className="login-form">
              <FaUserCog />
              <Form onSubmit={handleSubmit}>
                <h2>EspacioBox</h2>
                <h4>Ingresar como administrador</h4>
                {successMessage && (
                  <Alert variant="success" className="mb-4">
                    {successMessage}
                  </Alert>
                )}
                {error && (
                  <Alert variant="danger" className="mb-4">
                    {error}
                  </Alert>
                )}
                <Form.Group controlId="email" className="mb-4">
                  {/* <Form.Label>Correo Electrónico</Form.Label> */}
                  <Form.Control
                    type="email"
                    name="email"
                    value={registeredUser.email || ""}
                    onChange={handleChange}
                    placeholder="@email"
                    autoComplete="new-email"
                  />
                </Form.Group>
                <Form.Group controlId="passsword" className="mb-4">
                  {/* <Form.Label>Contraseña</Form.Label> */}
                  <Form.Control
                    type="password"
                    name="password"
                    value={registeredUser.password || ""}
                    onChange={handleChange}
                    placeholder="Contraseña"
                    autoComplete="new-password"
                  />
                </Form.Group>
                {error && <p style={{ color: "#fff" }}>{error}</p>}
                <Button variant="primary" type="submit" size="lg">
                  Acceso Panel
                </Button>
                <Link to="/">Ir al Home</Link>
              </Form>
            </div>
          </Col>
          <Col md={2} lg={3}></Col>
        </Row>
      </Container>
    </div>
  );
}
