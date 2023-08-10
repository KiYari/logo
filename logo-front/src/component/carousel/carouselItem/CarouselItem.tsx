import {Card, Image, Typography} from 'antd';
import {FC, ReactNode} from 'react';
import itemStyles from './carouselItem.module.css';
import Link from 'next/link';
import GoodsProps from '@/component/card/goodsProps';


const CarouselItem : FC < GoodsProps >= ({image, title, description, itemLink, price}) => {
    return (
        <Card>
            {image == null || image == undefined || image == ""
                ? <Link
                        href={itemLink == '' || itemLink == null || itemLink == undefined
                        ? ''
                        : itemLink}>

                            <Image
                            alt={description}
                            className={itemStyles.carouselImage}
                            width='60vw'
                            height='45vh'
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

export default CarouselItem;