import { useEffect } from "react";
import BaseLayout from "@/components/layouts/BaseLayout";
import BasePage from "@/components/BasePage";
import { useGetUser } from "@/actions/user";
import { Row, Col } from "reactstrap";

const About = () => {
  const { data, loading } = useGetUser();

  useEffect(() => {
    return () => {
      window.__isAboutLoaded = true;
    };
  }, []);

  const createFadeInClass = () => {
    if (typeof window !== "undefined") {
      return window.__isAboutLoaded ? "" : "fadein";
    }

    return "fadein";
  };

  return (
    <BaseLayout user={data} loading={loading}>
      <BasePage className="about-page" title="About Me - Shiyan Gong">
        <Row className="mt-5">
          <Col md="6">
            <div className="left-side">
              <h1 className={`title ${createFadeInClass()}`}>Hello, Welcome</h1>
              <h4 className={`subtitle ${createFadeInClass()}`}>
                To About Page
              </h4>
              <p className={`subsubTitle ${createFadeInClass()}`}>
                Feel free to read short description about me.
              </p>
            </div>
          </Col>
          <Col md="6">
            <div
              className={`${createFadeInClass()}`}
              style={{ textAlign: "justify" }}
            >
              <p>
                Embarking on my journey into the IT field has been an intriguing
                adventure, one that's far from linear but incredibly rewarding.
                My curiosity about the transformative potential of technology,
                especially in the field of education, led me to pursue a
                Master's degree in IT at the University of Auckland. This
                academic journey has been an eye-opener, expanding my view on
                how technology can not just revolutionize education but make a
                significant impact across various sectors.
              </p>
              <p>
                My technical expertise spans front-end and back-end development,
                with a keen interest in advancing my skills in cloud computing
                platforms such as AWS and Google Cloud. This technical
                proficiency, coupled with my passion for continuous learning and
                effective communication, forms the cornerstone of my approach to
                software engineering. Beyond the technical realm, dance as a
                personal hobby enriches my life with creativity and inspiration.
                This artistic outlet not only fuels my innovative thinking but
                also enables me to integrate creativity into technological
                solutions.
              </p>
            </div>
          </Col>
        </Row>
      </BasePage>
    </BaseLayout>
  );
};
export default About;
