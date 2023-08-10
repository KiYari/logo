import React from 'react';
import { Col, ConfigProvider, Row } from 'antd';
import theme from '../theme/themeConfig';
import LogoCarousel from '@/component/carousel/LogoCarousel';
import LogoCard from '@/component/card/Card';
import homeStyles from './home.module.css'

const HomePage = () => (
  <ConfigProvider theme={theme}>
    <Row gutter={[32, 0]} style={{'height': '450px'}}>
      <Col span={20} offset={2}>
        <LogoCarousel/>
      </Col>
    </Row>
    
    <Row gutter={[16, 0]} className={homeStyles.cardRow}>
      <Col span={5} offset={2}>
        <LogoCard title='sex' description='sexdescription' itemLink=''/>
      </Col>

      <Col span={5}>
        <LogoCard title='sex' description='sexdescription' itemLink=''/>
      </Col>

      <Col span={5}>
        <LogoCard title='sex' description='sexdescription' itemLink=''/>
      </Col>

      <Col span={5}>
        <LogoCard title='sex' description='sexdescription' itemLink=''/>
      </Col>
    </Row>

  </ConfigProvider>
);

export default HomePage;