import React from 'react';
import { Button, Col, ConfigProvider, Row } from 'antd';
import theme from '../theme/themeConfig';
import LogoCarousel from '@/component/carousel/LogoCarousel';

const HomePage = () => (
  <ConfigProvider theme={theme}>
    <Row style={{'height': '500px'}}>
      <Col span={20} offset={2}>
        <LogoCarousel/>
      </Col>
    </Row>
  </ConfigProvider>
);

export default HomePage;