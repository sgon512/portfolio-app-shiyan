import BaseLayout from "@/components/layouts/BaseLayout";
import BasePage from "@/components/BasePage";
import withAuth from "@/hoc/withAuth";
import { Row, Col } from "reactstrap";
import PortfolioForm from "@/components/PortfolioForm";
import { useCreatePortfolio } from "@/actions/portfolios";
import Redirect from "@/components/shared/Redirect";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

const PortfolioNew = ({ user, loading: userLoading }) => {
  const router = useRouter();
  const [createPortfolio, { data, loading, error }] = useCreatePortfolio();
  if (data) {
    toast.success("Portfolio has been updated!", { autoClose: 1600 });
    // delayed jump
    setTimeout(() => {
      router.push("/portfolios");
    }, 1600);
  }
  return (
    <BaseLayout user={user} loading={userLoading}>
      <BasePage header="Create Portfolio">
        <Row>
          <Col md="8">
            <PortfolioForm onSubmit={createPortfolio} />
            {error && <div className="alert alert-danger mt-2">{error}</div>}
          </Col>
        </Row>
      </BasePage>
    </BaseLayout>
  );
};

export default withAuth(PortfolioNew)("admin");
