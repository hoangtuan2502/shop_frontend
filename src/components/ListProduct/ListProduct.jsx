import React from 'react';
import { Card, List } from 'antd';
import { Typography } from 'antd';
import Product from '../Product/Product';

const { Title } = Typography;
const ListProduct = () => {
    return (
        <>
            <Title level={4} style={{ color: '#d0011b' }}>Danh sách sản phẩm</Title>
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
                dataSource={[1, 2, 3, 4, 5,6,7,8,9,10]}
                renderItem={(item) => {
                    console.log('item', item);
                    return (
                        <List.Item>
                            <Product />
                        </List.Item>
                    )
                }}
            />
        </>
    )
}

export default ListProduct