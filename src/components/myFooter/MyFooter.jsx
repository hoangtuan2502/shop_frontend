import React from 'react'
import { Carousel, Col, Row } from 'antd';
import styles from './myFooter.module.scss';
const MyFooter = () => {
    return (
        <div className={`${styles.footer}`}>
            <Row>
                <Col xs={12} sm={8} md={6}>
                    <div className={styles.box_col}>
                        <div className={styles.head_footer}>CHĂM SÓC KHÁCH HÀNG</div>
                        <ul className={styles.support_list}>
                            <li className={styles.support_item}>Trung Tâm Trợ Giúp</li>
                            <li className={styles.support_item}>Shopee Blog</li>
                            <li className={styles.support_item}>Shopee Mall</li>
                            <li className={styles.support_item}>Hướng Dẫn Mua Hàng</li>
                            <li className={styles.support_item}>Hướng Dẫn Bán Hàng</li>
                            <li className={styles.support_item}>Thanh Toán</li>
                            <li className={styles.support_item}>Shopee Xu</li>
                            <li className={styles.support_item}>Vận Chuyển</li>
                            <li className={styles.support_item}>Trả Hàng & Hoàn Tiền</li>
                            <li className={styles.support_item}>Chăm Sóc Khách Hàng</li>
                            <li className={styles.support_item}>Chính Sách Bảo Hành</li>
                        </ul>
                    </div>
                </Col>
                <Col xs={12} sm={8} md={6}>
                    <div className={styles.box_col}>
                        <div className={styles.head_footer}>VỀ HT</div>
                        <ul className={styles.support_list}>
                            <li className={styles.support_item}>Giới Thiệu Về HT Việt Nam</li>
                            <li className={styles.support_item}>Tuyển Dụng</li>
                            <li className={styles.support_item}>Điều Khoản HT</li>
                            <li className={styles.support_item}>Chính Sách Bảo Mật</li>
                            <li className={styles.support_item}>Chính Hãng</li>
                            <li className={styles.support_item}>Kênh Người Bán</li>
                            <li className={styles.support_item}>Flash Sales</li>
                            <li className={styles.support_item}>Chương Trình Tiếp Thị Liên Kết HT</li>
                            <li className={styles.support_item}>Liên Hệ Với Truyền Thông</li>
                        </ul>
                    </div>
                </Col>
                <Col xs={12} sm={8} md={6}>
                    <div className={styles.box_col}>
                        <div className={styles.head_footer}>THEO DÕI CHÚNG TÔI TRÊN</div>
                        <ul className={styles.support_list}>
                            <li className={styles.support_item}><i className="icon__mxh fab fa-facebook"></i> Facebook</li>
                            <li className={styles.support_item}><i className="icon__mxh fab fa-instagram-square"></i> Instagram</li>
                            <li className={styles.support_item}><i className="icon__mxh fab fa-linkedin"></i> Linkedin</li>
                        </ul>
                    </div>
                </Col>
                <Col xs={12} sm={8} md={6}>
                    <div className={styles.box_col}>
                        <div className={styles.head_footer}>TẢI ỨNG DỤNG HT NGAY THÔI</div>
                        <div className="img__app--link">
                            <div className="img__app--link-code">
                                <img src="./assets/img/code_qr.png" alt="" />
                            </div>
                            <div className="img__app--link-web">
                                <img src="./assets/img/AppStore.png" alt="" />
                                <img src="./assets/img/CH_Play.png" alt="" />
                                <img src="./assets/img/App.png" alt="" />
                            </div>
                        </div>
                    </div>

                </Col>
            </Row>
        </div>


    )
}

export default MyFooter