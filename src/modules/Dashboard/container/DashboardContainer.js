import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import { Row, Col } from "antd";
import Page from "../../../layout/Page";
import DashboardComponent from "../components/DashboardComponent";

class DashboardContainer extends React.Component {
  render() {
    const { className } = this.props;

    return (
      <Page pageHeaderText="Hello" className={className}>
        <DashboardComponent />
      </Page>
    );
  }
}

const StyledDashboardContainer = styled(DashboardContainer)``;
export default withRouter(StyledDashboardContainer);
