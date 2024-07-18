import React, { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import styles from './Detail.module.css';
import { Col, Image, Row, Alert, Flex, Spin, Rate } from 'antd';
import { StarOutlined, StarFilled, StarTwoTone, GiftFilled, CheckOutlined, PhoneOutlined, HomeOutlined, PlusOutlined, MinusOutlined } from '@ant-design/icons';
import { WrapperStyleColImage, WrapperStyleImageSmall, WrapperStyleTextSell } from './style';
import getFontSizes from 'antd/es/theme/themes/shared/genFontSizes';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function Detail() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const stock = 6;
  const minQuantity = 1;
  const [mainImage, setMainImage] = useState('https://laptop88.vn/media/product/9008_loq_15iax9i___2__.jpg');
  const imageUrls = [];
  const handleImageClick = (url) => {
    setMainImage(url);
  };
  const handleDecrement = (e) => {
    e.preventDefault();
    if (quantity > minQuantity) {
      setQuantity(quantity - 1);
    }
  };

  useEffect(() => {
    window.scroll(0, 0)
  }, []);

  // useEffect(() => {
  //   window.location.reload();
  // }, [id]);

  // call api với usePrams
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://trandai03.online/api/products/detail?productId=${id}`);
        setData(response.data.data);
      } catch (error) {
        console.error('Có lỗi xảy ra:', error);
      }
    };

    fetchData();
  }, []);


  const handleIncrement = (e) => {
    e.preventDefault();
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  if (!data) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <p>{`LOADING: https://trandai03.online/api/detail?productId=${id}`}</p>
        {/* Loading... */}
      </div>
    )
  }
  const formatPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.') + ' đ';
  };
  for (let i = 0; i < data.product_images.length; i++) {
    imageUrls.push(data.product_images[i].image_url);
  }
  const newPrice = data.price - (data.price * data.discount / 100);
  return (
    <>
      <div className={styles.main}>
        <div className={styles.Container}>
          <h4>{data.name}</h4>
          <div style={{ marginTop: '10px', display: 'flex', background: '#fff', borderRadius: '1.3em' }}>
            <Row style={{ padding: '16px', }}>
              <Col span={10}>
                <Image src={mainImage} alt="" />
                <Row style={{ paddingTop: '10px' }}>
                  {imageUrls.map((url, index) => (
                    <WrapperStyleColImage span={5} key={index}>
                      <WrapperStyleImageSmall
                        src={url}
                        alt={`Small ${index}`}
                        preview={false}
                        onClick={() => handleImageClick(url)}
                      />
                    </WrapperStyleColImage>
                  ))}
                </Row>
                <div className={styles.offerDetail}>
                  <div className={styles.title}>
                    <GiftFilled />
                    Thông tin Khuyến mãi
                  </div>
                  <div className={styles.contentOffer}>
                    <p className={styles.specialOfferGroup}>
                      <CheckOutlined style={{ color: '#646362' }} />
                      <span className={styles.kmai}> Balo laptop chống sốc / hoặc / Túi xách Laptop88 trị giá 199.000đ</span>
                      <span className={styles.kmaiInfo}>
                        <span className={styles.descKmai}> </span>
                      </span>
                    </p>
                    <p className={styles.specialOfferGroup}>
                      <CheckOutlined style={{ color: '#646362' }} />
                      <span className={styles.kmai}>  CHUỘT KHÔNG DÂY Deino OFi 1 Mới | hoặc | Forter FD V1     </span>
                      <span className={styles.kmaiInfo}>
                        <span className={styles.descKmai}> </span>
                      </span>
                    </p>
                    <p className={styles.specialOfferGroup}>
                      <CheckOutlined style={{ color: '#646362' }} />
                      <span className={styles.kmai}>   Thẻ Gold Member - ƯU ĐÃI GIÁ TRỊ trị giá 1.290.000 đ     </span>
                      <span className={styles.kmaiInfo}>
                        <span className={styles.descKmai}> </span>
                      </span>
                    </p>
                    <p className={styles.specialOfferGroup}>
                      <CheckOutlined style={{ color: '#646362' }} />
                      <span className={styles.kmai}>  Miễn phí dán Skin mặt lưng Laptop - sử dụng tại các cơ sở Skin88 trị giá 180.000đ     </span>
                      <span className={styles.kmaiInfo}>
                        <span className={styles.descKmai}> </span>
                      </span>
                    </p>
                  </div>
                </div>
              </Col>
              <div className={styles.mainProductMid}>
                <div className={styles.boxDeal}>
                  <div className={styles.priceDealLeft}>
                    <div className={styles.price}>{formatPrice(newPrice)}</div>
                    <div className={styles.mainPrice}>
                      <del className={styles.oldPrice}> {formatPrice(data.price)}</del>
                      <div className={styles.saleofPrice}>{data.discount}%</div>
                    </div>
                  </div>
                  <div className={styles.dealRight}>
                    <div className={styles.timeDeal}>
                      <p>Kết thúc sau </p>
                      <div className={styles.time}>
                        <span className={styles.h}>8</span>:
                        <span className={styles.m}>11</span>:
                        <span className={styles.s}>37</span>
                      </div>
                    </div>
                    <style>
                    </style>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <p className={styles.productTime}>
                        <span className={styles.productTimeLine}></span>
                        <span>ĐÃ BÁN 1</span>
                      </p>
                      <p className={styles.quantityDeal}>Số lượng bán: <span className={styles.quantityLeft}> 5 </span></p>
                    </div>
                  </div>
                </div>
                <Rate style={{ fontSize: '15px', margin: '10px 0' }} allowHalf defaultValue={2.5} />
                <div className={styles.productStatus}>
                  <div className={styles.item}>
                    <a className={styles.nameCate} href="#">New 100%</a>
                    <a className={styles.txt} href="#">Sản phẩm chưa qua sử dụng, tình trạng mới 100% full-box</a>
                  </div>
                </div>
                <div className={styles.configHolder}>
                  <div className={styles.SelectConfig}>
                    <span className={styles.name}>CPU: </span>
                    <ul>
                      <li className={styles.SelectedValue}>
                        <span>Intel Core i7 1360P</span>
                      </li>
                    </ul>
                  </div>
                  <div className={styles.SelectConfig}>
                    <span className={styles.name}>RAM: </span>
                    <ul>
                      <li className={styles.SelectedValue}>
                        <span>RAM 16GB DDR5</span>
                      </li>
                    </ul>
                  </div>
                  <div className={styles.SelectConfig}>
                    <span className={styles.name}>Ổ cứng: </span>
                    <ul>
                      <li className={styles.SelectedValue}>
                        <span>SSD 512GB NVMe</span>
                      </li>
                    </ul>
                  </div>
                  <div className={styles.SelectConfig}>
                    <span className={styles.name}>Card đồ họa: </span>
                    <ul>
                      <li className={styles.SelectedValue}>
                        <span>Card Intel Iris Xe Graphics</span>
                      </li>
                    </ul>
                  </div>
                  <div className={styles.SelectConfig}>
                    <span className={styles.name}>Màn hình: </span>
                    <ul>
                      <li className={styles.SelectedValue}>
                        <span>13.4 Inch Full HD+, Touch</span>
                      </li>
                    </ul>
                  </div>
                  <div className={styles.SelectConfig}>
                    <span className={styles.name}>Bảo hành: </span>
                    <ul>
                      <li className={styles.SelectedValue}>
                        <span>GÓI BẢO HÀNH CƠ BẢN</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className={styles.proQuantity}>
                  <a href="" onClick={handleDecrement} data-value="-1">-</a>
                  <input type="number"
                    className={styles.quantityChange}
                    value={quantity}
                    data-stock={stock}
                    data-min={minQuantity}
                    min={minQuantity}
                    readOnly />
                  <a href="" onClick={handleIncrement} data-value="1">+</a>
                </div>
                <div className={styles.btnAddCart}>
                  <a href="" className={styles.btnAdd}>Mua trả
                    góp <span className={styles.block}>Thủ tục đơn
                      giản - lãi suất
                      thấp</span></a>
                  <a href="" className={styles.btnAdd}>Mua ngay
                    <span className={styles.block}>Giao tận nơi hoặc nhận ở cửa hàng</span></a>
                </div>
              </div>
              <div className={styles.mainProductRight}>
                <div className={styles.productWarranty}>
                  <h3 className={styles.titleWarranty}>Thông tin bảo hành</h3>
                  <div className={styles.content}>
                    <p>✅Bảo hành 12 tháng Laptop88
                    </p><p>✔️Tùy chọn:</p>
                    <p>- <a href="/goi-bao-hanh-mo-rong-tai-laptop88.html" target="_blank">Gói BẢO HÀNH VÀNG</a>: gia tăng thêm 12 tháng bảo hành</p>
                    <p>- <a href="/goi-bao-hanh-mo-rong-tai-laptop88.html" target="_blank">Gói BẢO HÀNH KIM CƯƠNG</a>: gia tăng thêm 24 tháng bảo hành</p>

                    <p>&nbsp;</p>
                    <p>✅&nbsp;MIỄN PHÍ GIAO HÀNG TẬN NHÀ</p>
                    <p>- Với đơn hàng &lt; 4.000.000 đồng: Miễn phí giao hàng cho đơn hàng &lt; 5km tính từ cửa hàng Laptop88 gần nhất</p>
                    <p>- Với đơn hàng &gt; 4.000.000 đồng: Miễn phí giao hàng (khách hàng chịu phí bảo hiểm hàng hóa nếu có)</p>
                    <p>&nbsp;</p>
                  </div>
                </div>
                <div className={styles.productWarranty}>
                  <h3 className={styles.titleWarranty}>Yên tâm mua hàng</h3>
                  <div className={styles.content}>
                    <p>Hệ thống cửa hàng toàn quốc</p>
                    <p>Đại lý phân phối chính hãng</p>
                    <p>Giá luôn tốt nhất</p>
                    <p>Hỗ trợ trả góp lãi suất thấp</p>
                    <p>Bảo hành dài, hậu mãi chu đáo</p>
                    <p>Miễn phí giao hàng toàn quốc</p>
                  </div>
                </div>
              </div>
            </Row>
          </div>
          <div style={{ marginTop: '10px', display: 'flex', flexDirection: 'column', background: '#fff', borderRadius: '1.3em' }}>
            <div className={styles.combosetTitle}>Sản phẩm thường được mua kèm</div>
            <div className={styles.combosetContent}>
              <div className={styles.combosetInfo}>
                Tổng tiền:
                <div className={styles.passPrice}>25.990.000đ</div>
                <div className={styles.Oldprice}>25.990.000đ</div>
                <a href="" className={styles.Buy_combo}>Mua thêm <span className={styles.Selected}>0</span> sản phẩm</a>
              </div>
              <div className={styles.cProItem}>
                <div className={styles.cProImg}>
                  <img src="	https://laptop88.vn/media/product/250_9008_loq_15iax9i___2__.jpg" alt="[New 100%] Laptop Lenovo LOQ 15IAX9I 83FQ002LUS - Intel Core i5 12450HX | ARC A530M | 144Hz 100%sRGB"></img>
                </div>
                <label className={styles.cProName}>[New 100%] Laptop Lenovo LOQ 15IAX9I 83FQ002LUS - Intel Core i5 12450HX | ARC A530M | 144Hz 100%sRGB</label>
                <span className={styles.cProPrice}>25.990.000Đ</span>

                <span className={styles.cProOldprice}>25.990.000đ</span>

                <span className={styles.cProDiscount}>(-38%)</span>

              </div>
              <div className={styles.combosetProductList}>
                <div className={styles.combosetContainer}>
                  <div className={styles.cProItem}>
                    <a className={styles.cProImg} href="/new-100-tai-nghe-jbl-tune-510bt-wireless-bluetooth-on-ear-headphones-1.html" target="_blank"><img src="	https://laptop88.vn/media/product/250_8596_doc_2023_11_09_15_15_40.png"></img>
                    </a>
                    <label className={styles.cProName}>
                      <input type="checkbox" class="js-price js-check-select js-combo-set js-combo-set-select-product" data-price="890000" data-unprice="890000" data-idpk="8596" data-set-id="68" data-group-key="tai-nghe-2023" data-product-id="8596"></input>
                      <span>[New Outlet] Tai nghe JBL Tune 510BT Wireless Bluetooth On-Ear Headphones</span>
                    </label>
                    <span className={styles.cProPrice}>890.000đ</span>
                    <span className={styles.cProOldPrice}>
                      1.990.000đ
                      <span className={styles.cProDiscount}>(-56%)</span>
                    </span>
                    <span className={styles.cProDiscount}>(-0%)</span>
                    <a className={styles.cProChange}>CHỌN SẢN PHẨM KHÁC</a>
                    <a href="" className={styles.cssCheckbox}></a>
                  </div>
                  <div className={styles.cProItem}>
                    <a className={styles.cProImg} href="/new-100-tai-nghe-jbl-tune-510bt-wireless-bluetooth-on-ear-headphones-1.html" target="_blank"><img src="https://laptop88.vn/media/product/250_8596_doc_2023_11_09_15_15_40.png" alt="[New Outlet] Tai nghe JBL Tune 510BT Wireless Bluetooth On-Ear Headphones"></img>
                    </a>
                    <label className={styles.cProName}>
                      <input type="checkbox" class="js-price js-check-select js-combo-set js-combo-set-select-product" data-price="890000" data-unprice="890000" data-idpk="8596" data-set-id="68" data-group-key="tai-nghe-2023" data-product-id="8596"></input>
                      <span>[New Outlet] Tai nghe JBL Tune 510BT Wireless Bluetooth On-Ear Headphones</span>
                    </label>
                    <span className={styles.cProPrice}>890.000đ</span>
                    <span className={styles.cProOldPrice}>
                      1.990.000đ
                      <span className={styles.cProDiscount}>(-56%)</span>
                    </span>
                    <span className={styles.cProDiscount}>(-0%)</span>
                    <a className={styles.cProChange}>CHỌN SẢN PHẨM KHÁC</a>
                    <a href="" className={styles.cssCheckbox}></a>
                  </div>
                  <div className={styles.cProItem}>
                    <a className={styles.cProImg} href="/new-100-tai-nghe-jbl-tune-510bt-wireless-bluetooth-on-ear-headphones-1.html" target="_blank"><img src="https://laptop88.vn/media/product/250_8596_doc_2023_11_09_15_15_40.png" alt="[New Outlet] Tai nghe JBL Tune 510BT Wireless Bluetooth On-Ear Headphones"></img>
                    </a>
                    <label className={styles.cProName}>
                      <input type="checkbox" class="js-price js-check-select js-combo-set js-combo-set-select-product" data-price="890000" data-unprice="890000" data-idpk="8596" data-set-id="68" data-group-key="tai-nghe-2023" data-product-id="8596"></input>
                      <span>[New Outlet] Tai nghe JBL Tune 510BT Wireless Bluetooth On-Ear Headphones</span>
                    </label>
                    <span className={styles.cProPrice}>890.000đ</span>
                    <span className={styles.cProOldPrice}>
                      1.990.000đ
                      <span className={styles.cProDiscount}>(-56%)</span>
                    </span>
                    <span className={styles.cProDiscount}>(-0%)</span>
                    <a className={styles.cProChange}>CHỌN SẢN PHẨM KHÁC</a>
                    <a href="" className={styles.cssCheckbox}></a>
                  </div>
                  <div className={styles.cProItem}>
                    <a className={styles.cProImg} href="/new-100-tai-nghe-jbl-tune-510bt-wireless-bluetooth-on-ear-headphones-1.html" target="_blank"><img src="https://laptop88.vn/media/product/250_8596_doc_2023_11_09_15_15_40.png" alt="[New Outlet] Tai nghe JBL Tune 510BT Wireless Bluetooth On-Ear Headphones"></img>
                    </a>
                    <label className={styles.cProName}>
                      <input type="checkbox" class="js-price js-check-select js-combo-set js-combo-set-select-product" data-price="890000" data-unprice="890000" data-idpk="8596" data-set-id="68" data-group-key="tai-nghe-2023" data-product-id="8596"></input>
                      <span>[New Outlet] Tai nghe JBL Tune 510BT Wireless Bluetooth On-Ear Headphones</span>
                    </label>
                    <span className={styles.cProPrice}>890.000đ</span>
                    <span className={styles.cProOldPrice}>
                      1.990.000đ
                      <span className={styles.cProDiscount}>(-56%)</span>
                    </span>
                    <span className={styles.cProDiscount}>(-0%)</span>
                    <a className={styles.cProChange}>CHỌN SẢN PHẨM KHÁC</a>
                    <a href="" className={styles.cssCheckbox}></a>
                  </div>
                  <div className={styles.cProItem}>
                    <a className={styles.cProImg} href="/new-100-tai-nghe-jbl-tune-510bt-wireless-bluetooth-on-ear-headphones-1.html" target="_blank"><img src="https://laptop88.vn/media/product/250_8596_doc_2023_11_09_15_15_40.png" alt="[New Outlet] Tai nghe JBL Tune 510BT Wireless Bluetooth On-Ear Headphones"></img>
                    </a>
                    <label className={styles.cProName}>
                      <input type="checkbox" class="js-price js-check-select js-combo-set js-combo-set-select-product" data-price="890000" data-unprice="890000" data-idpk="8596" data-set-id="68" data-group-key="tai-nghe-2023" data-product-id="8596"></input>
                      <span>[New Outlet] Tai nghe JBL Tune 510BT Wireless Bluetooth On-Ear Headphones</span>
                    </label>
                    <span className={styles.cProPrice}>890.000đ</span>
                    <span className={styles.cProOldPrice}>
                      1.990.000đ
                      <span className={styles.cProDiscount}>(-56%)</span>
                    </span>
                    <span className={styles.cProDiscount}>(-0%)</span>
                    <a className={styles.cProChange}>CHỌN SẢN PHẨM KHÁC</a>
                    <a href="" className={styles.cssCheckbox}></a>
                  </div>
                </div>
              </div>
              <div className={styles.clear}></div>
            </div>
          </div>
          <div className={styles.contentDescDetail}>
            <div className={styles.contentDesc}>
              <h3 className={styles.titleDesc}>
                <span>Đặc điểm nổi bật</span>
                <p className={styles.descMain}>{data.description}</p>
              </h3>
            </div>
            <Col span={8}>
            </Col>
          </div >
        </div>
      </div >
    </>

  )
}
