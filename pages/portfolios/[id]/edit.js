import BaseLayout from "@/components/layouts/BaseLayout";
import BasePage from "@/components/BasePage";
import withAuth from "@/hoc/withAuth";
import { useRouter } from "next/router";
import { useGetPortfolio } from "@/actions/portfolios";
import PortfolioForm from "@/components/PortfolioForm";
import { Row, Col } from "reactstrap";
import { useUpdatePortfolio } from "@/actions/portfolios";
import { toast } from "react-toastify";

const PortfolioEdit = ({ user }) => {
  const router = useRouter();
  const [updatePortfolio, { error }] = useUpdatePortfolio();
  const { data: initialData } = useGetPortfolio(router.query.id);

  const _updatePortfolio = async (data) => {
    await updatePortfolio(router.query.id, data);
    toast.success("Portfolio has been updated!", { autoClose: 1600 });

    // delayed jump
    setTimeout(() => {
      router.push("/portfolios");
    }, 1600);
  };

  return (
    <BaseLayout user={user} loading={false}>
      <BasePage header="Portfolio Edit">
        <Row>
          <Col md="8">
            {initialData && (
              <PortfolioForm
                onSubmit={_updatePortfolio}
                initialData={initialData}
                buttonLabel="Save"
              />
            )}
            {error && <div className="alert alert-danger mt-2">{error}</div>}
          </Col>
        </Row>
      </BasePage>
    </BaseLayout>
  );
};
export default withAuth(PortfolioEdit)("admin");
