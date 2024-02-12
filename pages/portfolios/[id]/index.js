import BaseLayout from "@/components/layouts/BaseLayout";
import BasePage from "@/components/BasePage";
import PortfolioApi from "@/lib/api/portfolios";
import { formatDate, formatDescription } from "helpers/functions";


const Portfolio = ({ portfolio }) => {
  return (
    <BaseLayout navClass="transparent">
      <BasePage
        noWrapper
        indexPage
        title={`${portfolio.title} - Filip Jerga`}
        header="Portfolio Detail"
        metaDescription={portfolio.description}
      >
        <div className="portfolio-detail">
          <div class="cover-container d-flex h-100 p-3 mx-auto flex-column">
            <main role="main" class="inner page-cover">
              <h1 class="cover-heading">{portfolio.title}</h1>
              <p class="lead dates">
                {formatDate(portfolio.startDate)} -{" "}
                {formatDate(portfolio.endDate) || "Present"}
              </p>
              <p class="lead info mb-0">
                {portfolio.jobTitle} | {portfolio.company} |{" "}
                {portfolio.location}
              </p>
              <p
                className="lead"
                dangerouslySetInnerHTML={formatDescription(
                  portfolio.description
                )}
              ></p>{" "}
              <p class="lead">
                <a
                  href={portfolio.companyWebsite}
                  target="_"
                  class="btn btn-lg btn-secondary"
                >
                  Visit Company
                </a>
              </p>
            </main>
          </div>
        </div>
      </BasePage>
    </BaseLayout>
  );
};

export async function getServerSideProps({ query }) {
  const json = await new PortfolioApi().getById(query.id);
  const portfolio = json.data;

  return { props: { portfolio } };
}

export default Portfolio;
