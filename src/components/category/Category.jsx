import React from 'react';
import { Card, List } from 'antd';
import { Typography } from 'antd';
import styles from './category.module.scss';
const { Title } = Typography;
const data = [
    {
        src: 'https://down-vn.img.susercontent.com/file/9833088fd62135c66eac59ef0f3be192',
    },
    {
        src: 'https://down-vn.img.susercontent.com/file/73d2178d186105221a1fe9f2196a1581',
    },
    {
        src: 'https://down-vn.img.susercontent.com/file/vn-50009109-eca094e4eccbf1cc7dd65f5791d518af',
    },
    {
        src: 'https://down-vn.img.susercontent.com/file/8d07eba70c67ed285d116a88abbba7ee',
    },
    {
        src: 'https://down-vn.img.susercontent.com/file/4124bc67c3bd8d7f2c6713e4f33aea1e',
    },
    {
        src: 'https://down-vn.img.susercontent.com/file/e353d002868251a550c5f21261c5b36a',
    }
];



const Category = () => (
    <>
        <Title level={4} style={{ color: '#d0011b' }}>HT MALL</Title>
        <List
            grid={{
                gutter: 8,
                xs: 4,
                sm: 4,
                md: 6,
                lg: 8,
                xl: 8,
                xxl: 8,
            }}
            dataSource={data}
            renderItem={(item) => {
                console.log('item', item);
                return (
                    <List.Item>
                        <Card  > 
                            <img className={styles.category_img} src={item.src} alt="" />
                        </Card>
                    </List.Item>
                )
            }}
        />
    </>

);

export default Category;


