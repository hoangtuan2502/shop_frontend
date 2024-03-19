import React from 'react';
import { Carousel, Col, Row } from 'antd';
import styles from './slider.module.scss';
import img1 from '../../assets/img/banner_1.jpg';
import img2 from '../../assets/img/banner_2.png';

const contentStyle = {
  height: '320px',
  color: '#fff',
  lineHeight: '320px',
  textAlign: 'center',
  background: '#364d79',
};
// ../../assets/img/banner_1.jpg

const SlideItem = ({ src }) => {

  return (
    <div style={contentStyle}>
      <img src={src} className={styles.img} />
    </div>
  )
}

const listSlide = [
  img1,
  img2
]

const listImg = [
"https://www.apple.com/vn/iphone/home/images/meta/iphone__ky2k6x5u6vue_og.png",
"https://static-images.vnncdn.net/files/publish/2023/10/9/bo-tttt-lam-viec-voi-apple-ve-viec-iphone-12-phat-buc-xa-vuot-nguong-884.jpg"
]


const MySlider = () => (
  <Row style={{marginTop: '20px',padding: '0 48px',}} gutter={[32, 8]}>
    <Col  md={16} lg={16}>
      <Carousel autoplay>
        {listSlide.map((item, index) => (
          <SlideItem key={index} src={item} />
        ))}

      </Carousel>
    </Col>
    <Col  md={8} lg={8}>
        {listImg.map((item, index) => (
          <img key={index} src={item} className={styles.img_second} />
        ))}
    </Col>
  </Row>

);

export default MySlider;