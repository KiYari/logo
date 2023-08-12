import { ConfigProvider } from 'antd'
import catalogStyles from './catalog.module.css'
import theme from '@/theme/themeConfig'

const catalog = () => {
    return(<ConfigProvider theme={theme}>
        
    </ConfigProvider>)
}

export default catalog
