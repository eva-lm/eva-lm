import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { BsBoxArrowUpRight } from "react-icons/bs";

import imgHeaderMoveon from "../../img/ux-projects/moveon/header-moveon.png";
import imgAnalisis from "../../img/ux-projects/moveon/analisis.svg";
import imgAnalisisMobile from "../../img/ux-projects/moveon/analisis-mobile.svg";
import imgUser1 from "../../img/ux-projects/moveon/user-1.svg";
import imgUser2 from "../../img/ux-projects/moveon/user-2.svg";

import "../../Styles/Layout/Ux.scss";

const MoveOn = () => {
  return (
    <section className="mt-4 moveon">
      <Row>
        <Col>
          <div>
            <article id="presentacion-moveon">
              <Row className="d-md-flex align-items-center">
                <Col
                  sm={12}
                  md={6}
                  className="mt-2 bg-decoration position-relative"
                >
                  <p className="fs-6 font-mono position-absolute">
                    Case Study nº.1
                  </p>
                  <div className="h-100 d-flex align-items-center justify-content-center">
                    <img
                      className="img-header-moveon"
                      src={imgHeaderMoveon}
                      alt="mockups de iphone mostrando la pantalla de inicio de la app"
                      width="1500"
                    />
                  </div>
                </Col>

                <Col sm={12} md={6} className="mt-4 mt-md-2 px-4">
                  <h1 className="fs-3">MOVE ON</h1>
                  <p className="fs-4 fw-light">“Move your way”</p>
                  <p>
                    <b>Desafío: </b>Diseñar una web-app que permita a los
                    usuarios comprar ropa deportiva en línea
                  </p>

                  <p>
                    <b>Estado inicial: </b>El proyecto se encuentra en una fase
                    inicial (idea). Marca, colores corporativos y diseño, sin
                    definir. Su mercado se desarrolla en la Península Ibérica.
                  </p>
                  <p>
                    <b>Tipo de proyecto: </b>
                  </p>
                  <ul>
                    <li>UX/UI, Branding</li>
                    <li>Individual</li>
                    <li>Reto de diseño</li>
                  </ul>
                  <p>
                    <b>Duración:</b> 5 semanas
                  </p>
                  <p>
                    <b>Rol: </b>Diseñadora de producto{" "}
                  </p>
                  <p>
                    <b>Herramientas: </b>Investigación, bocetos, Figma
                  </p>
                </Col>
              </Row>
            </article>

            <article id="enlaces-rapidos">
              <Row className="bg-moveon-color-light mt-5">
                <Col className="d-md-flex flex-column align-items-center justify-content-center py-3">
                  <h2 className="fs-4 text-center">ENLACES RÁPIDOS</h2>
                  <div className="mt-3 enlaces-rapidos text-center">
                    <a
                      href="https://ejemplo.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="outline-moveon-color-dark"
                      className="d-inline-flex align-items-center gap-2 fs-6 fw-bold text-moveon-color-dark"
                    >
                      <BsBoxArrowUpRight size={16} aria-hidden="true" /> FLUJOS
                      DE NAV.
                    </a>
                    <a
                      href="https://ejemplo.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="outline-moveon-color-dark"
                      className="d-inline-flex align-items-center gap-2 fs-6 fw-bold text-moveon-color-dark mx-4"
                    >
                      <BsBoxArrowUpRight size={16} aria-hidden="true" />
                      WIREFRAMES
                    </a>
                    <a
                      href="https://ejemplo.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="outline-moveon-color-dark"
                      className="d-inline-flex align-items-center gap-2 fs-6 fw-bold text-moveon-color-dark"
                    >
                      <BsBoxArrowUpRight size={16} aria-hidden="true" />
                      PROTIPO FINAL
                    </a>
                  </div>
                </Col>
              </Row>
            </article>

            <article id="design-thingking-steps">
              <Row className="mt-5 design-thinking-container">
                <Col className="d-md-flex flex-column align-items-center justify-content-center py-3">
                  <h2 className="fs-4 text-uppercase text-center">
                    design thinking process
                  </h2>
                  <div className="mt-3">
                    <ul className="d-flex flex-wrap justify-content-center gap-3">
                      <li className="d-flex flex-column align-items-center p-3">
                        <a
                          href="#"
                          className="text-moveon-color-dark text-uppercase px-3 py-1 fs-5 text-white text-decoration-none"
                        >
                          1- Empatizar
                        </a>
                        <ul className="text-center mt-2">
                          <li>
                            <a href="#">1.1 Análisis Competitivo</a>
                          </li>
                          <li>
                            <a href="#">1.2 Cuestionarios de Usuario</a>
                          </li>
                          <li>
                            <a href="#">1.3 User Persona</a>
                          </li>
                        </ul>
                      </li>
                      <li className="d-flex flex-column align-items-center p-3">
                        <a
                          href="#"
                          className="text-moveon-color-dark text-uppercase px-3 py-1 fs-5 text-white text-decoration-none"
                        >
                          2- Definir
                        </a>
                        <ul className="text-center mt-2">
                          <li>
                            <a href="#">2.1 Definición del problema</a>
                          </li>
                          <li>
                            <a href="#">2.2 ¿Cómo podríamos...?</a>
                          </li>
                          <li>
                            <a href="#">2.3 Objetivos del proyecto</a>
                          </li>
                          <li>
                            <a href="#">2.4 Hoja de ruta de características</a>
                          </li>
                        </ul>
                      </li>
                      <li className="d-flex flex-column align-items-center p-3">
                        <a
                          href="#"
                          className="text-moveon-color-dark text-uppercase px-3 py-1 fs-5 text-white text-decoration-none"
                        >
                          3- Idear
                        </a>
                        <ul className="text-center mt-2">
                          <li>
                            <a href="#">3.1 Card sorting</a>
                          </li>
                          <li>
                            <a href="#">3.2 Sitemap</a>
                          </li>
                          <li>
                            <a href="#">3.3 Diagrama de flujo</a>
                          </li>
                          <li>
                            <a href="#">3.4 Wireframes de baja fidelidad</a>
                          </li>
                        </ul>
                      </li>
                      <div class="w-100"></div>
                      <li className="d-flex flex-column align-items-center p-3">
                        <a
                          href="#"
                          className="text-moveon-color-dark text-uppercase px-3 py-1 fs-5 text-white text-decoration-none"
                        >
                          4- Diseñar
                        </a>
                        <ul className="text-center mt-2">
                          <li>
                            <a href="#">4.1 Branding</a>
                          </li>
                          <li>
                            <a href="#">4.2 Wireframes de alta fidelidad</a>
                          </li>
                          <li>
                            <a href="#">4.3 Flujo interactivo</a>
                          </li>
                        </ul>
                      </li>

                      <li className="d-flex flex-column align-items-center p-3">
                        <a
                          href="#"
                          className="text-moveon-color-dark text-uppercase px-3 py-1 fs-5 text-white text-decoration-none"
                        >
                          5- Test
                        </a>
                        <ul className="text-center mt-2">
                          <li>
                            <a href="#">5.1 Definición de la muestra</a>
                          </li>
                          <li>
                            <a href="#">5.2 Tareas del test</a>
                          </li>
                          <li>
                            <a href="#">5.3 Resultados obtenidos</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </article>

            <article id="vision-general">
              <Row className="mt-5">
                <Col className="py-3">
                  <h2 className="fs-4 text-uppercase text-center mb-4">
                    Visión general del proyecto
                  </h2>
                  <div className="mt-3 vision-general-container p-4">
                    <h3 className="fs-5">PROBLEMA</h3>
                    <p>
                      Un cliente del sector retail especializado en ropa y
                      equipamiento deportivo, que tras analizar las tendencias
                      actuales de consumo digital y el crecimiento del eCommerce
                      en el sector deportivo considera que existe una clara
                      oportunidad de mercado para el desarrollo de una
                      aplicación que permita a los usuarios comprar ropa
                      deportiva online de forma ágil, intuitiva y personalizada.
                    </p>
                  </div>
                  <div className="mt-3 vision-general-container p-4">
                    <h3 className="fs-5">OBJETIVO</h3>
                    <p>
                      El objetivo es diseñar una Progressive Web App (una web
                      que, al ser visualizada desde un móvil o tablet, se verá
                      de forma similar a una app nativa), que ofrezca una
                      experiencia de compra intuitiva y optimizada para
                      dispositivos móviles, manteniendo la coherencia y
                      escalabilidad en otros dispositivo.
                    </p>
                  </div>
                  <div className="mt-3 vision-general-container p-4">
                    <h3 className="fs-5">SOLUCIÓN</h3>
                    <p>
                      Para lograr esto, se llevará a cabo un análisis de la
                      competencia, se harán entrevistas a entrevistas con los
                      usuarios para obtener información sobre el comportamiento
                      y las preferencias de los usuarios. Esta retroalimentación
                      informará a nuestra investigación de mercado, en la que
                      analizaremos las tendencias y las estrategias de la
                      competencia para identificar oportunidades de
                      diferenciación.
                    </p>
                  </div>
                </Col>
              </Row>
            </article>

            <article id="empatizar">
              <Row className="mt-5">
                <Col className="py-3">
                  <div className="d-flex flex-column align-items-center justify-content-center">
                    <div className="position-relative my-3">
                      <h2 className="fs-1 fw-light text-uppercase text-center">
                        01. EMPATIZAR
                      </h2>
                      <div className="text-title-decoration position-absolute"></div>
                    </div>

                    <p className="fs-6 fw-light mt-3 w-75 text-center">
                      <em>
                        “Sin entender, no puedo ver más allá del problema al
                        otro lado que potencialmente contiene la solución.
                        Busque la comprensión haciendo preguntas.”
                      </em>
                    </p>
                    <div className="d-flex align-items-center gap-5 mt-3">
                      <p className="text-uppercase fs-5 fw-semibold">
                        En esta sección
                      </p>
                      <ul className="">
                        <li>
                          <a href="#">1.1 Análisis Competitivo</a>
                        </li>
                        <li>
                          <a href="#">1.2 Cuestionarios de Usuario</a>
                        </li>
                        <li>
                          <a href="#">1.3 User Persona</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="border-bottom-moveon-color my-3"></div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <h3 className="fs-4 mb-3">1.1- Análisis Competitivo</h3>
                  <p>
                    Para comenzar, se elabora un estudio previo de otras marcas
                    y se llevan a cabo técnicas de investigación para conocer
                    bien a nuestro público objetivo.
                  </p>
                  <p>
                    Para evaluar cómo son los productos de las marcas
                    competidoras, desde un punto de vista de usuario final, se
                    elabora un análisis donde se explora cómo son sus
                    características, fortalezas y debilidades, diseño y flujo de
                    navegación. El objetivo es identificar patrones de
                    comportamiento, detectar oportunidades de mejora y extraer
                    insights que nos ayuden a diferenciarnos para poder ofrecer
                    una experiencia más eficiente y centrada en el usuario.
                  </p>
                  <p>
                    Tras analizar las diferentes aplicaciones y webs de la
                    competencia, se han identificado una serie de patrones
                    comunes y oportunidades de mejora relevantes para el
                    desarrollo de nuestra aplicación.
                  </p>
                  <p className="fw-bold mb-1">Insights clave:</p>
                  <ul>
                    <li>
                      Los usuarios están familiarizados con este tipo de apps
                    </li>
                    <li>
                      La competencia es alta, por lo que la diferenciación es
                      clave
                    </li>
                    <li>
                      La simplicidad y claridad serán factores determinantes
                    </li>
                    <li>
                      La elección de talla es uno de los mayores problemas del
                      sector
                    </li>
                    <li>
                      La personalización puede ser un elemento diferenciador
                    </li>
                  </ul>
                </Col>
              </Row>
              <Row>
                <Col className="bg-moveon-color p-4 mt-3">
                  <div className="h-100 d-flex align-items-center justify-content-center">
                    <img
                      className="d-md-none"
                      src={imgAnalisisMobile}
                      alt="esquema analisis competitivo de otras marcas"
                      height="1500"
                    />
                    <img
                      className="d-none d-md-block"
                      src={imgAnalisis}
                      alt="esquema analisis competitivo de otras marcas"
                      height="600"
                    />
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className="mt-3">
                    <h3 className="fs-4 my-3">1.2- Cuestionarios de usuario</h3>
                    <p>
                      Para comprender las necesidades de nuestros futuros
                      usuarios, sus motivaciones, frustraciones y hábitos,
                      elaboramos un estudio de investigación donde
                      distribuiremos una encuesta online a 30 personas para
                      obtener datos que nos permitan conocer más nuestro público
                      objetivo.
                    </p>
                    <p>
                      <b>¿Cuál es el objetivo de la investigación?</b>
                    </p>
                    <p>
                      Comprender las necesidades y estilo de vida de los futuros
                      usuarios, como piensan y sienten respecto al proceso de
                      compra de ropa deportiva.
                    </p>
                    <p>
                      <b>
                        ¿Cuál es la información necesaria para comprobar la
                        hipótesis?
                      </b>
                    </p>
                    <p>
                      Conocer sus hábitos, rutinas, deportes que practican, su
                      manejo con la tecnología y sus frustraciones.
                    </p>
                    <p>
                      <b>
                        ¿Cuáles son los datos más relevantes que necesitamos
                        obtener?
                      </b>
                    </p>
                    <p>
                      Qué es lo que más valoran de la ropa deportiva, que les
                      motiva para hacer la compra, como sería para ellos un
                      proceso de compra fácil, intuitivo y seguro, que elementos
                      hacen que quieran usar una app y no otra, qué información
                      desean obtener, etc.
                    </p>
                    <p>
                      <b>
                        ¿Cuáles son los datos complementarios que necesitamos o
                        podemos obtener?
                      </b>
                    </p>
                    <p>
                      Dispositivos desde donde compran, experiencias anteriores
                      con otras apps parecidas y si echan en falta algo o tienen
                      alguna dificultad.
                    </p>
                  </div>

                  <div className="mt-3">
                    <p>
                      Nuestro <b>objetivo principal</b> es:
                    </p>
                    <p className="border-left ps-2">
                      Comprender la relación con el deporte de nuestros usuarios
                      y sus hábitos, necesidades, motivaciones y frustraciones a
                      la hora de comprar ropa deportiva online, para diseñar una
                      experiencia de compra eficiente, intuitiva y accesible.
                    </p>
                    <p>
                      Para ello nos centraremos en los siguientes{" "}
                      <b>objetivos específicos:</b>
                    </p>
                    <ol>
                      <li>
                        Saber con qué frecuencia hacen deporte y desde cuándo.
                      </li>
                      <li>
                        Conocer los hábitos de compra y su frecuencia, desde que
                        dispositivo lo realizan.
                      </li>
                      <li>
                        Detectar sus necesidades a la hora de hacer la compra y
                        a qué le dan más valor.
                      </li>
                      <li>
                        Identificar futuros problemas a la hora de usar la
                        aplicación, frustraciones y bloqueos.
                      </li>
                      <li>
                        Conocer qué apps actuales les gustan y usan con más
                        frecuencia para la compra de ropa deportiva.
                      </li>
                      <li>
                        Conocer sus motivaciones, si les importan las
                        tendencias, el estilo o la calidad del producto.
                      </li>
                      <li>
                        Analizar oportunidades de mejora respecto a la
                        competencia, que esperan o echan en falta en relación
                        con lo que ya hay.
                      </li>
                    </ol>
                  </div>

                  <div className="mt-3">
                    <h4 className="fs-5 mt-4">
                      1.2.1- Elaboración de cuestionario
                    </h4>
                    <p className="mt-3">
                      En base a la investigación de mercado planteamos el
                      siguiente <b>perfil inicial</b> de usuario:
                    </p>
                    <p class="fst-italic">
                      “Nuestros potenciales clientes son personas comprometidas
                      con su bienestar y salud, que se interesan por el deporte
                      y lo practican en mayor o menor medida. Pero también gente
                      que le gusta llevar como estilo de vestir ropa cómoda y
                      con estética deportiva. Todas ellas están familiarizadas
                      con las compras on line, por lo que principalmente su
                      rango de edad será desde los 18 a los 65 años, centrado
                      principalmente en el rango de 20 a 45 años. Son tanto
                      hombres como mujeres, principalmente de entornos urbanos o
                      semiurbanos. Nivel de estudios de básicos a avanzados.
                      Algunos son deportistas habituales, otros con estilo de
                      vida fitness y otros compradores ocasionales (hay que
                      valorar también gente que compra para hacer regalos por
                      ejemplo).”
                    </p>
                    <p>
                      Para obtener la información deseada y verificar o ajustar
                      nuestro público objetivo inicial, hemos determinado que en
                      este caso es mejor diseñar nuestro{" "}
                      <a
                        href="https://docs.google.com/document/d/1lEsq6fh1mx6PwW8yXMZdn8ZI-5MZB5rgIeQFv_7vHUE/edit?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="d-inline-flex align-items-center gap-1 fw-bold"
                      >
                        <BsBoxArrowUpRight size={13} aria-hidden="true" />
                        propio cuestionario
                      </a>
                      , incluyendo preguntas abiertas y cerradas, algunas con
                      múltiples respuestas, para intentar obtener los máximos
                      matices y detalles que nos hagan recopilar la mayor
                      información posible relevante.
                    </p>
                  </div>
                  <div className="mt-3">
                    <h4 className="fs-5 mt-4">
                      1.2.2- Análisis de los resultados
                    </h4>
                    <p>
                      La encuesta fue distribuida mediante <b>Google Forms</b>.
                      Se han seleccionado 30 personas como muestra de estudio,
                      contemplando un amplio rango de edades (desde los 20 años
                      a los 61 años), sin distinción de género, con diferentes
                      ocupaciones y nivel de estudios. La mayoría residen en
                      Madrid. Intentamos investigar diferentes perfiles que
                      encajen con nuestra app.
                    </p>
                    <p>
                      Respeto al perfil planteado inicialmente, vemos que la
                      mayoría cumplen con los siguientes requisitos:
                    </p>
                    <ol>
                      <li>Ha comprado ropa deportiva online</li>
                      <li>Está dentro del rango de edad (18–65 años)</li>
                      <li>
                        Tiene relación con el deporte o uso de ropa deportiva
                        (deporte o uso lifestyle)
                      </li>
                    </ol>
                    <p>
                      Aproximadamente el <b>75% de la muestra</b> coincide con
                      el perfil inicialmente planteado, lo que indica que la
                      mayoría de los participantes representan adecuadamente al
                      público objetivo definido. Con lo que consideramos que la
                      muestra es válida y relevante.
                    </p>
                    <p>
                      Gracias a esta encuesta hemos obtenido datos sobre
                      comportamientos reales del público objetivo, evitando
                      sesgos y análisis subjetivos. No obstante hay que tener en
                      cuenta que la información recolectada no tiene que
                      coincidir al 100% con aquello que la gente dice con lo que
                      realmente hace, siempre hay un pequeño margen de error.
                    </p>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className="mt-3">
                    <h3 className="fs-4 my-3">1.2- User Persona</h3>
                                            <p>
                          Los <b>dos User Persona</b> mostrados a continuación,
                          han sido construidos a partir de los datos obtenidos
                          en la fase de investigación, representando los
                          principales{" "}
                          <b>patrones de comportamiento detectados</b>.{" "}
                        </p>
                        <p>
                          Estas personas han ayudado a guiar el proyecto durante
                          las siguientes fases, asegurándonos de que el diseño
                          cumpla con los parámetros de los datos obtenidos.
                          Gracias a los cuestionarios, hemos encontrado las
                          motivaciones del usuario y sus necesidades,
                          información fundamental que nos va a permitir elaborar
                          con más exactitud los perfiles de usuario.
                        </p>
                        <div className="d-md-flex align-items-center gap-2">
                          <img
                            className="w-100 w-md-50"
                            src={imgUser1}
                            alt="descripcion de la primera user persona"
                            height=""
                          />
                          <img
                            className="w-100 w-md-50 mt-2 mt-md-0"
                            src={imgUser2}
                            alt="descripcion de la segunda user persona"
                            height=""
                          />
                        </div>
                  </div>
                </Col>
              </Row>
                         <Row>
                <Col>
                  <div className="mt-4">
                    <h3 className="fs-4 my-3">1.3- Conclusiones de la investigación y hallazgos clave</h3>
                    <p>Desde la <b>empatía y el análisis</b>, podemos alinearnos con los gustos y puntos de dolor de los usuarios. Los resultados de la investigación muestran que el público objetivo está formado por usuarios con experiencia en la compra online de ropa deportiva, que practican deporte de forma habitual o utilizan este tipo de prendas en su día a día.</p>
                    <p>Se trata de perfiles digitales que realizan sus compras principalmente desde el móvil, a veces también desde el ordenador y que valoran especialmente la calidad, la comodidad y el precio.
A pesar de estar familiarizados con plataformas actuales como Nike, Adidas o Decathlon, los usuarios presentan frustraciones recurrentes relacionadas con la elección de tallas, el exceso de publicidad, la navegación y la sobrecarga de información.</p>
<p><b>Hallazgos Clave:</b></p>
<ol>
  <li>Tenemos la oportunidad de diseñar una aplicación que simplifique el proceso de compra, mejore la personalización y reduzca la incertidumbre, especialmente en aspectos críticos como la selección de talla y la exploración de productos.</li>
  <li>Un diseño fresco que sea accesible para todos los usuarios. Como elemento diferenciador, incluir guías de tallas lo más precisas posibles, composición de prendas, seguimiento real y buena atención al cliente.</li>
</ol>
                    </div>
                    </Col>
                    </Row>
            </article>
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default MoveOn;
