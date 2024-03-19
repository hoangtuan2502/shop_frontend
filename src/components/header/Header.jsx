import React from 'react'
import styles from './header.module.scss'
import { Col, Input, Row } from 'antd';
import { AlignLeftOutlined, BookOutlined, PhoneOutlined, ProductOutlined, SearchOutlined, ShoppingCartOutlined, UnorderedListOutlined, UserOutlined } from '@ant-design/icons';
import DropdownSearch from '../dropdowSearch/DropdonwSearch';
import { Select } from 'antd';
import { Badge } from 'antd';
import { AutoComplete } from 'antd';
import { useState } from 'react';
const MyHeader = () => {

    const [options, setOptions] = useState([]);

    const handleSearch = (value) => {
        setOptions([]);
    };

    const onSelect = (value) => {
        console.log('onSelect', value);
    };
    return (

        <div className={styles.header}>
            <div style={{padding: '0 48px'}}>
                <div className={styles.main}>
                    <Row>
                        <Col xs={22} sm={22} md={6} lg={6} xl={6}>
                            <div className={styles.left}>
                                <div className={styles.logo}>
                                    HT-Shop
                                </div>
                                <span className={styles.dot}></span>
                            </div>
                        </Col>
                        <Col xs={2} sm={2} md={0}>
                            <UnorderedListOutlined />
                        </Col>
                        <Col xs={0} sm={0} md={18} lg={18} xl={18}>
                            <div className={styles.right}>
                                <div className={styles.search}>
                                    {/* <Input style={{ padding: '6px 12px' }} suffix={<SearchOutlined style={{ fontSize: '20px', cursor: 'pointer' }} />} placeholder="Nhập sản phẩm cần tìm" allowClear /> */}
                                    <AutoComplete
                                        popupMatchSelectWidth={252}
                                        style={{ width: '100%' }}
                                        options={options}
                                        onSelect={onSelect}
                                        onSearch={handleSearch}
                                        size="middle"
                                    >
                                        <Input.Search size="middle" allowClear placeholder="Nhập sản phẩm cần tìm kiếm ...." enterButton />
                                    </AutoComplete>
                                </div>
                                <div className={styles.item}>
                                    <div className={styles.item_icon}>
                                        <Badge count={99} >
                                            <ShoppingCartOutlined style={{ fontSize: '24px' }} />
                                        </Badge>
                                    </div>
                                    <div className={styles.item_infor}>
                                        <p>Giỏ hàng</p>
                                        <p>150.000</p>
                                    </div>
                                </div>
                                <div className={styles.item}>
                                    <div className={styles.item_icon}>
                                        <UserOutlined />

                                    </div>
                                    <div className={styles.item_infor}>
                                        <p>User</p>
                                        <p>Account</p>
                                    </div>
                                </div>
                            </div></Col>
                    </Row>
                </div>
            </div>

            <div className={styles.menu}>
                <div className={styles.menu_content}>
                    <Row>
                        <Col xs={24} sm={0} md={0} lg={0} xl={0}>
                            <div className={styles.menu_item}>
                                <span className={styles.icon}>
                                    <AlignLeftOutlined />
                                </span>
                                All categories
                            </div>
                        </Col>
                        <Col xs={0} sm={24} md={24} lg={24} xl={24}>
                            <Row>
                                <Col sm={8} md={3} lg={3} xl={3}>
                                    <div className={styles.menu_item}>
                                        <span className={styles.icon}>
                                            <ProductOutlined/>
                                        </span>
                                        Products
                                    </div>
                                </Col>
                                <Col sm={8} md={3} lg={3} xl={3}>
                                    <div className={styles.menu_item}>
                                        <span className={styles.icon}>
                                        <BookOutlined />
                                        </span>
                                        Blog
                                    </div>


                                </Col>
                                <Col sm={8} md={3} lg={3} xl={3}>
                                    <div className={styles.menu_item}>
                                        <span className={styles.icon}>
                                            <PhoneOutlined />
                                        </span>
                                        Contact
                                    </div>

                                </Col>
                            </Row>
                            
                        </Col>

                    </Row>
                </div>
            </div>
        </div>

    )
}

export default MyHeader