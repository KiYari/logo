import {Card, Image, Typography} from 'antd';
import {FC, ReactNode} from 'react';
import itemStyles from './card.module.css';
import Link from 'next/link';
import GoodsProps from '@/component/card/goodsProps';
import { inherits } from 'util';

const LogoCard : FC < GoodsProps > = ({image, title, description, itemLink}) => {
    return (
        <Card className={itemStyles.card} bodyStyle={{'height': 'inherit'}}>
            {image == null || image == undefined || image == ""
                ? <Link style={{'height': '100%'}}
                        href={itemLink == '' || itemLink == null || itemLink == undefined
                        ? ''
                        : itemLink}>

                            <Image
                            height='95%'
                            alt={description}
                            className={itemStyles.cardImage}
                            preview={false}
                            src='https://epiphanychi.com/wp-content/uploads/2021/07/1200px-No_image_3x4.svg.png'/>
                    </Link>

                : 
                    <Link
                    href={itemLink == '' || itemLink == null || itemLink == undefined
                    ? ''
                    : itemLink}>

                        <Image alt={description} src={image}/>
                    </Link>
                }
            <Typography className={itemStyles.title}>{title}</Typography>
        </Card>
    )

}

export default LogoCard