import React from 'react';
import { CheckOutlined, EditOutlined, EllipsisOutlined, FireOutlined, SettingOutlined, StarFilled } from '@ant-design/icons';
import { Avatar, Card, Progress } from 'antd';
import styles from './products.module.scss';
import { Rate } from 'antd';
import { Flex } from 'antd';
const { Meta } = Card;
const twoColors = {
    '0%': 'yellow',
    '100%': '#ff4400',
  };
const Product = ({ isSale }) => (
    <div className={styles.product_item}>
        {isSale && <div className={styles.product__item_label_sale}>
            <CheckOutlined />
            <span>Giảm giá</span>
        </div>}
        {isSale && <div className={styles.product__item_percent_sale}>
            <p className={styles.sale__percent}>43%</p>
            <p className={styles.sale__text}>GIẢM</p>
        </div>}

        <Card
            cover={
                <img
                    alt="example"
                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />

            }
            className={styles.card}
        >
            <div className={styles.container}>
                <div className={styles.product_name}>Áo thun Unisex N7 Basic Tee phông trơn nam nữ tay lỡ oversize form rộng 12 màu</div>
                <div className={styles.price}>
                    <div className={styles.old_price}>150.000đ</div>
                    <div className={styles.current_price}>120.000đ</div>
                </div>

                <div className={styles.rate}>
                    <StarFilled />
                    <StarFilled />
                    <StarFilled />
                    <StarFilled />
                    <StarFilled />
                    <span className={styles.rate_count}>Đã bán 160</span>
                </div>
                <div
                    className={styles.address}>
                    Hà Nội
                </div>
                {isSale && <Flex align="center" wrap="wrap">
                    <Progress percent={86} strokeColor={twoColors} status='exception'size={[280, 20]} format={(percent) => <b>Đã bán 18 <FireOutlined /></b>} />
                </Flex>}
                
            </div>
            
            

        </Card>
    </div>

);

export default Product;
