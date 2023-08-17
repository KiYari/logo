'use client'
import {Col, ConfigProvider, Row, Typography} from 'antd'
import catalogStyles from './catalog.module.css'
import theme from '@/theme/themeConfig'
import Title from 'antd/es/typography/Title'
import catalogCategoriesProps from '@/component/catalogCategories'
import {useEffect} from 'react'
import Link from 'next/link'

const catalog = () => {
    let categories : catalogCategoriesProps[][] = [
        [
            {
                'name': 'Одежда',
                'isSubcategory': false
            }, {
                'name': 'Обувь',
                'isSubcategory': false
            }, {
                'name': 'Платья',
                'isSubcategory': true
            }, {
                'name': 'Шапки',
                'isSubcategory': false
            }, {
                'name': 'Кроссовки',
                'isSubcategory': true
            }, {
                'name': 'Дублёнки',
                'isSubcategory': true
            }, {
                'name': 'Жилеты',
                'isSubcategory': true
            }, {
                'name': 'Ремни',
                'isSubcategory': true
            }, {
                'name': 'Аксессуары',
                'isSubcategory': false
            }, {
                'name': 'Платья',
                'isSubcategory': true
            }
        ]
    ];

    return (
        <ConfigProvider theme={theme}>

            <Row>
                {categories.map((categoryCol, categoryKey) => {
                    return <Col
                        offset={categoryKey == 0
                        ? 2
                        : 0}>{categoryCol.map(category => <Title
                            level={category.isSubcategory
                            ? 5
                            : 4}>
                            <Link href='' className={catalogStyles.linkToCategory}>{category.name}</Link>
                        </Title>)}</Col>
                })}
            </Row>
        </ConfigProvider>
    )
}

export default catalog
