import Container from 'react-bootstrap/Container';
import InfoCards from './InfoCards';
import FeatureSection from './FeatureSection';
import "./home.css";

const Home = () => {
  return (
    <>
      <main>
        <section className="hero">
          <Container>
          <div className="hero-text">
            <h1>EspacioBox</h1>
            <h2>solución en arriendo de espacios</h2>
            <p>
              En EspacioBox buscamos ser más que un espacio donde atender a sus
              pacientes con comodidad sino también construir una comunidad de
              profesionales que puedan apoyarse entre sí.{" "}
            </p>
          </div>
          </Container>
        </section>
        <section>
          <Container>
            <InfoCards />
          </Container>
        </section>
        <section>
          <Container>
            <FeatureSection />
          </Container>
        </section>
      </main>
    </>
  );
};

export default Home;
