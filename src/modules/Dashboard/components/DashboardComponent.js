import React from "react";
import styled from "styled-components";
import { Row, Col } from "antd";

const DashboardComponent = ({}) => {
  return (
    <Row>
      <Col xs={24} sm={24} md={14} lg={14}>
        <h1>React boilerplate</h1>
      </Col>
    </Row>
  );
};

const StyledDashboardComponent = styled(DashboardComponent)``;
export default StyledDashboardComponent;
