import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function About() {
  return (
    <main>
      <Container>
        <div className="backgroundSection">
          <Row>
            <Col lg={6}>
              <h2>Bienvenidos a nuestra comunidad de profesionales</h2>
            </Col>
            <Col lg={6}>
              <p>
                En EspacioBox buscamos ser más que un espacio donde atender a
                sus pacientes con comodidad sino también construir una comunidad
                de profesionales que puedan apoyarse entre sí.
              </p>
              <p>
                Sabemos que el trabajo independiente puede ser solitario y
                contar con redes de apoyo es fundamental para brindar un buen
                servicio centrado en la ética para todos nuestros consultantes,
                dónde también consideremos a la persona del terapeuta o
                especialista como parte central de nuestro trabajo.
              </p>
              <p>
                Invitamos a todos quienes trabajan con nosotros a formar parte
                de esta comunidad como una red de apoyo, autocuidado y
                derivación.
              </p>
            </Col>
          </Row>
        </div>
      </Container>
    </main>
  );
}
