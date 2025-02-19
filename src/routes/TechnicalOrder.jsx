import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import DataLoader from "../ui/loaders/DataLoader";
import useGetOrder from "../hooks/orders/useGetOrder";
import OrderInfoCard from "../ui/orders/OrderInfoCard";

export default function TechnicalOrder() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { data: orderDetails, isLoading } = useGetOrder();

  return isLoading ? (
    <DataLoader />
  ) : (
    <section className="orderDetails">
      <Container>
        <Row>
          <Col lg={12} className="p-2">
            <h2 className="orderDetails-title">
              <button onClick={() => navigate(-1)}>
                <i className="fa-regular fa-angle-right"></i>
              </button>{" "}
              {t("orderDetails")}
            </h2>
          </Col>

          <Col lg={5} md={6} className="p-2"></Col>

          <Col lg={7} md={6} className="p-2">
            <OrderInfoCard orderDetails={orderDetails} />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
