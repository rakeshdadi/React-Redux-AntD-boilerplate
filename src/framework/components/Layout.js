import React from 'react';
import AntLayout from 'antd/lib/layout';
import 'antd/lib/layout/style/css';

const Layout = ({ children, ...props }) => (
  <AntLayout {...props}>{children}</AntLayout>
);

Layout.Header = AntLayout.Header;
Layout.Footer = AntLayout.Footer;
Layout.Sider = AntLayout.Sider;
Layout.Content = AntLayout.Content;

export default Layout;