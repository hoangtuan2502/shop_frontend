import { Col, Row } from 'antd'
import React from 'react'
import { Image } from 'antd';
import styles from './productDetail.module.scss';
import { Typography } from 'antd';

const { Title } = Typography;
const ProductDetail = () => {
    return (
        <Row gutter={[16, 16]}>
            <Col xs={9}>
                <div className={styles.left}>
                    <Image.PreviewGroup
                        items={[
                            'https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp',
                            'https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp',
                            'https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp',
                            'https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp',
                        ]}
                    >
                        <Image
                            width={'100%'}
                            src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp"
                        />
                    </Image.PreviewGroup>
                    <Image.PreviewGroup
                        preview={{
                            onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                        }}
                    >
                        <Image
                            width={'25%'}
                            src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
                        />
                        <Image
                            width={'25%'}
                            src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
                        />
                        <Image
                            width={'25%'}
                            src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
                        />
                        <Image
                            width={'25%'}
                            src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
                        />
                        <Image
                            width={'25%'}
                            src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
                        />
                        <Image
                            width={'25%'}
                            src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
                        />
                        <Image
                            width={'25%'}
                            src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
                        />
                    </Image.PreviewGroup>
                </div>
            </Col>
            <Col xs={15}>
                <div className={styles.right}>
                    <Title level={4}>Điện thoại Apple iPhone 15 Pro 128GB</Title>
                    <Row>
                        <Col >
                        </Col>
                    </Row>
                </div>
            </Col>
        </Row>
    )
}

export default ProductDetail