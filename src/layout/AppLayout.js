import React from "react";
import styled from "styled-components";
import theme from "../styles/theme";
import Layout from "../framework/components/Layout";
import MobileHeader from "../components/mobileHeader";
import { Menu } from "antd";

const { Header, Content, Sider } = Layout;
const sideNavWidth = theme.layout.sideNavWidth;

class AppLayout extends React.Component {
  render() {
    const { className, children } = this.props;
    return (
      <Layout id="AppWrapper" className={className}>
        <MobileHeader />
        <Sider width={sideNavWidth} className="left-sidemenu">
          <Menu theme="dark" mode="vertical">
            <Menu.Item key="1">Dashboard</Menu.Item>
            <Menu.Item key="2">About</Menu.Item>
            <Menu.Item key="3">Contact</Menu.Item>
          </Menu>
        </Sider>
        <Layout className="module-body main-body">
          <Header>
            <Menu theme="dark" mode="horizontal">
              <Menu.Item key="1">Dashboard</Menu.Item>
              <Menu.Item key="2">About</Menu.Item>
              <Menu.Item key="3">Contact</Menu.Item>
            </Menu>
          </Header>
          <Content className="app-content">{children}</Content>
        </Layout>
      </Layout>
    );
  }
}

const StyledAppLayout = styled(AppLayout)`
  .ant-layout-header {
    height: 46px;
    padding: 0px 20px;
  }
  .module-body {
    background-color: #f8f9f9;
  }
  .main-body {
    height: 100vh;
    position: relative;
    > .app-content {
      display: flex;
      flex-direction: column;
    }
  }
  .ant-layout-header {
    position: fixed;
    z-index: 1;
    width: 100%;
  }
  .ant-layout-content {
    overflow: initial;
    margin: 24px 24px 0;
  }
  .left-sidemenu {
    display: none;
    left: 0;
    right: 0;
    width: 100%;
    margin-top: 4rem;
  }
  .company-logo {
    background: #fff;
    z-index: 1;
    position: fixed;
    width: 100%;
    height: 60px;
    padding: 10px;
  }
  @media only screen and (max-device-width: 414px) {
    .ant-layout-header {
      display: none;
    }
    .left-sidemenu {
      display: none;
      left: 0;
      right: 0;
      width: 100%;
      margin-top: 4rem;
    }
    .ant-layout-content {
      margin: 24px 12px 0;
    }
    .ant-table-body {
      font-size: 11px;
    }
  }
  .ant-layout-sider {
    border-right: 1px solid ${props => props.theme.color.grayLight};
  }
`;

export default StyledAppLayout;
