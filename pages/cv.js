import BaseLayout from "@/components/layouts/BaseLayout";
import BasePage from "@/components/BasePage";
import { Row, Col } from "reactstrap";

const Cv = () => {
  return (
    <BaseLayout>
      <BasePage title="My CV - Shiyan Gong">
        <Row>
          <Col md={{ size: 10, offset: 1 }}>
            <iframe
              style={{ width: "100%", height: "800px" }}
              src="/Shiyan-Gong-CV2-SOT.pdf"
            />
          </Col>
        </Row>
      </BasePage>
    </BaseLayout>
  );
};

export default Cv;
