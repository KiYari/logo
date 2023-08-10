import React from 'react';
import {Col, ConfigProvider, Row} from 'antd';
import theme from '../theme/themeConfig';
import LogoCarousel from '@/component/carousel/LogoCarousel';
import LogoCard from '@/component/card/Card';
import homeStyles from './home.module.css'

const cardItems = [
    {
        'title': 't1',
        'description': 'd1',
        'itemLink': '',
        'price': '500'
    }, {
        'title': 't2',
        'description': 'd2',
        'itemLink': '',
        'price': '500'
    }, {
        'title': 't3',
        'description': 'd3',
        'itemLink': '',
        'price': '500'
    }, {
        'title': 't4',
        'description': 'd4',
        'itemLink': '',
        'price': '500'
    }, {
        'title': 't5',
        'description': 'd5',
        'itemLink': '',
        'price': '500'
    }, {
        'title': 't6',
        'description': 'd6',
        'itemLink': '',
        'price': '500'
    }, {
      'title': 't7',
      'description': 'd7',
      'itemLink': '',
      'price': '500'
  }, {
    'title': 't8',
    'description': 'd8',
    'itemLink': '',
    'price': '500'
},
]

const HomePage = () => (
    <ConfigProvider theme={theme}>
        <Row gutter={[32, 0]} style={{
            'height': '450px'
        }}>
            <Col span={20} offset={2}>
                <LogoCarousel/>
            </Col>
        </Row>
{/* 
        {
          cardItems.map((item, key) => {
            console.log(key)
            return(<div></div>)
          })
        } */}

        <Row gutter={[16, 0]} className={homeStyles.cardRow}>
            {cardItems.map((item, key) => key % 4 == 0
                ? <Col span={5} offset={2} key={key} className={homeStyles.cardCol}>
                        <LogoCard
                            key={key}
                            title={item.title}
                            description={item.description}
                            itemLink={item.itemLink}
                            price={item.price}/>
                    </Col>
                : <Col span={5} key={key} className={homeStyles.cardCol}>
                    <LogoCard
                        key={key}
                        title={item.title}
                        description={item.description}
                        itemLink={item.itemLink}
                        price={item.price}/>
                </Col>)
}
        </Row>

    </ConfigProvider>
);

export default HomePage;