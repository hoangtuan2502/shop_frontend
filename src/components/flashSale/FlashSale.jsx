import React from 'react';
import { Card, List } from 'antd';
import { Typography, Statistic } from 'antd';
import Product from '../Product/Product';
import logo from '../../assets/img/flashSale.png'
import styles from './flashSale.module.scss';
import { Flex } from 'antd';
import { SmileOutlined } from '@ant-design/icons';
import { ConfigProvider } from 'antd';
import { Space } from 'antd';
import { Empty } from 'antd';
const { Title } = Typography;
const { Countdown } = Statistic;
const FlashSale = () => {
    const onChange = (val) => {
        if (typeof val === 'number' && 4.95 * 1000 < val && val < 5 * 1000) {
            console.log('changed!');
        }
    };
    return (
        <div className='container_component'>
            <Flex wrap="wrap" gap="small" align='flex-end'>
                <div className={styles.title} style={{ background: `url(${logo}) 50% no-repeat`, backgroundSize: 'contain' }}></div>
                <Countdown value={Date.now() + 1000 * 1000} onChange={onChange} />
            </Flex>
            <ConfigProvider renderEmpty={CustomizeRenderEmpty}>
                <Space direction="vertical" style={{ width: '100%' }}>
                    <List
                        grid={{
                            gutter: 16,
                            xs: 2,
                            sm: 3,
                            md: 4,
                            lg: 4,
                            xl: 5,
                            xxl: 5
                        }}
                        pagination={{
                            onChange: (page) => {
                                console.log(page);
                            },
                            pageSize: 5,
                            position: 'bottom',
                            align: 'center'
                        }}
                        dataSource={[9,9,9,9,9,9,9]}
                        renderItem={(item) => {
                            return (
                                <List.Item>
                                    <Product isSale={true} />
                                </List.Item>
                            )
                        }}
                    />
                </Space>
            </ConfigProvider>

        </div>
    )
}

const CustomizeRenderEmpty = () => (
    <Empty
        image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
        imageStyle={{ height: 60 }}
        description={
            <span>
                Danh sách trống
            </span>
        }
    />
);

export default FlashSale