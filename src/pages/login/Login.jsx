import React from 'react';
import styles from './login.module.scss'
import { Col, Row } from 'antd';

const Login = () => (
  <Row>
    <Col xs={0} sm={0} md={14} lg={14} xl={14}>
        <img src="../../assets/img/login.png" alt="" />
        <button className={styles.button}>Click me</button>
    </Col>
    <Col xs={24} sm={24} md={10} lg={10} xl={10}>
        <div style={{backgroundColor: 'blue'}}>Col 2</div>
    </Col>
  </Row>
);

export default Login;