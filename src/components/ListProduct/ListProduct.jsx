import React from 'react';
import { Card, List } from 'antd';
import { Typography } from 'antd';
import Product from '../Product/Product';
import { Flex } from 'antd';

const { Title } = Typography;
const ListProduct = ({title}) => {
    return (
        <div className='container_component'>
            <Flex justify='center'>
                <Title level={4} style={{ color: '#d0011b', fontWeight: 600 }}>{title}</Title>
            </Flex>
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
                        console.log('page', page);
                    },
                    pageSize: 10,
                    total:100,
                    position: 'bottom',
                    align: 'center',
                    onShowSizeChange: (current, size) => {
                        console.log({current, size});
                    }
                }}
                dataSource={[1, 2, 3, 4, 5,6,7,8,9,10,1,5,6,7,8,9,10]}
                renderItem={(item) => {
                    
                    return (
                        <List.Item>
                            <Product />
                        </List.Item>
                    )
                }}
            />
        </div>
    )
}

export default ListProduct