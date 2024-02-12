import { Card, CardHeader, CardBody, CardText, CardTitle } from "reactstrap";
import { formatDescription } from "helpers/functions";

const PortfolioCard = ({ portfolio, children }) => (
  <Card className="portfolio-card">
    <CardHeader className="portfolio-card-header">
      {portfolio.jobTitle}
    </CardHeader>
    <CardBody>
      <p className="portfolio-card-city">{portfolio.location}</p>
      <CardTitle className="portfolio-card-title">{portfolio.title}</CardTitle>
      <div
        className="portfolio-card-text"
        dangerouslySetInnerHTML={formatDescription(portfolio.description)}
      ></div>

      {children}
    </CardBody>
  </Card>
);

export default PortfolioCard;
