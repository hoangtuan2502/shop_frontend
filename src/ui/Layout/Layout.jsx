import React from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import MyHeader from '../../components/header/Header';
import MySlider from '../../components/slider/Slider';
import Category from '../../components/category/Category';
import ListProduct from '../../components/ListProduct/ListProduct';
import MyPagination from '../pagination/MyPagination';

const { Header, Content, Footer } = Layout;
const items = new Array(3).fill(null).map((_, index) => ({
  key: String(index + 1),
  label: `nav ${index + 1}`,
}));
const MyLayout = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout>
      <MyHeader />
      <MySlider />
      <Content
        style={{
          padding: '0 48px',
        }}
      >
       
        <div
          style={{
            margin: '16px 0',
            padding: 24,
            minHeight: 400,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Category />
          <ListProduct />
          <MyPagination />
        </div>
      </Content>
      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        HoangTuan ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </Layout>
  );
};
export default MyLayout;

