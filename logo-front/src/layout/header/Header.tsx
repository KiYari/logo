import {Breadcrumb, Button, Input, Space} from 'antd';
import headerStyles from './header.module.css';
import Link from 'next/link';
import {UserOutlined, ShoppingCartOutlined, SearchOutlined} from '@ant-design/icons';

const Header = () => {
    const headerLowbarItems = [
        {
            title: <a className={headerStyles.breadcrumbsItem} href='/'>Одежда</a>
        }, {
            title: <a className={headerStyles.breadcrumbsItem} href='/'>Обувь</a>
        }, {
            title: <a className={headerStyles.breadcrumbsItem} href='/'>Верхняя одежда</a>
        }, {
            title: <a className={headerStyles.breadcrumbsItem} href='/'>Домашняя одежда</a>
        }, {
            title: <a className={headerStyles.breadcrumbsItem} href='/'>Купальники</a>
        }, {
            title: <a className={headerStyles.breadcrumbsItem} href='/'>Аксессуары</a>
        }, {
            title: <a className={headerStyles.breadcrumbsItem} href='/'>Mariana rialdi</a>
        }, {
            title: <a className={headerStyles.breadcrumbsItem} href='/'>Идеи для подарков</a>
        }
    ];

    return (
        <header className={headerStyles.head}>
            <div className={headerStyles.mainContentHolder}>
                <p className={`${headerStyles.logo} ${headerStyles.headerTextOnButtons}`}>Logo</p>

                <Space>
                    <Input
                        placeholder="Одежда для мальчиков"
                        className={headerStyles.input}
                        suffix={< Button icon = { < SearchOutlined />
                    }
                    href = '/' />}/>
                </Space>

                <Link href="/" className={headerStyles.headerButtonCase}>
                    <p className={headerStyles.headerTextOnButtons}>
                        Username
                    </p>

                    < UserOutlined className={headerStyles.headerButtonIcon}/>
                </Link>

                <Link href="/" className={headerStyles.headerButtonCase}>
                    <p className={headerStyles.headerTextOnButtons}>
                        5000р / 5шт.
                    </p>
                    < ShoppingCartOutlined className={headerStyles.headerButtonIcon}/>
                </Link>
            </div>

            <br/>
            <hr/>

            <Breadcrumb
                items={headerLowbarItems}
                separator=' '
                className={headerStyles.breadcrumbsCase}/>

        </header>
    )
}

export default Header;