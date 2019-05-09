import React from "react";
import styled from "styled-components";
import AppLayout from "./AppLayout";
import { Row, Col, Icon } from "antd";

const Page = ({ className, children, pageHeaderText, pageName }) => (
  <AppLayout className={className}>
    <div className="main-content">
      <Row>
        <Col xs={12} sm={18} md={18} lg={18}>
          <h3>
            <b>{pageHeaderText}</b>
          </h3>
        </Col>
      </Row>
      <div className="content">{children}</div>
    </div>
  </AppLayout>
);

const StyledPage = styled(Page)`
  @media only screen and (max-device-width: 414px) {
    .main-content {
      margin-top: 50px;
    }
  }
`;

export default StyledPage;
