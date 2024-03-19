import React from 'react';
import { EditOutlined, EllipsisOutlined, SettingOutlined, StarFilled } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
import styles from './products.module.scss';
import { Rate } from 'antd';
const { Meta } = Card;

const Product = () => (
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
        </div>

    </Card>
);

export default Product;
