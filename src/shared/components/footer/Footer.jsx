import Container from "react-bootstrap/Container";
import { FaInstagram } from "../../../assets/icons/icons";
import "./footer.css";

export default function Footer() {
  // variable contiene el año en curso,
  const year = new Date().getFullYear();

  return (
    <footer>
      <Container>
        <div className="footer-content">
          <div className="footer-info">
            <h3>Servicios</h3>
            <ul>
              <li>Psicología Clínica Adultos</li>
              <li>Psicoterapia Psicoanalítica</li>
              <li>Evaluaciones Psicológicas y Neuropsicológicas</li>
              <li>Nutrición Clínica Integral</li>
              <li>Nutrición Deportiva y Alimentación Vegetariana/Vegana</li>
              <li>Atención en Trastornos del Ánimo y Ansiedad</li>
            </ul>
          </div>
          <div className="footer-info">
            <h3>Ubicación</h3>
            <p>Guardia Vieja 255, Of.1803 Providencia - Metro los Leones</p>
          </div>
          <div className="footer-info">
            <h3>Contacto</h3>
            <a href="mailto:contacto.espaciobox@gmail.com">
            <p>contacto.espaciobox@gmail.com</p>
            </a>
          </div>
        </div>
        <hr />
        <div className="footer-copyright">
          <a href="https://www.instagram.com/espaciobox_/#"
          target="_blank"
          rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <p>
            &copy; {year} <b>EspacioBox</b>. Todos los derechos reservados.
          </p>
        </div>
      </Container>
    </footer>
  );
};
