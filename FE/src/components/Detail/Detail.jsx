import React from 'react'
import Header from '../../components/Header/Header'
import styles from './Detail.module.css';
import { Col, Image, Row } from 'antd';
import { StarOutlined, StarFilled, StarTwoTone, GiftFilled, CheckOutlined, PhoneOutlined, HomeOutlined } from '@ant-design/icons';
import { WrapperStyleColImage, WrapperStyleImageSmall, WrapperStyleTextSell } from './style';
import getFontSizes from 'antd/es/theme/themes/shared/genFontSizes';
export default function Detail() {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.productDetaiTitle}>
          <h1>Màn hình LG 24MR400-B (23.8 inch/FHD/IPS/100Hz/5ms)</h1>
        </div>
        <div className={styles.Container}>
          <div style={{ marginTop: '10px', display: 'flex', background: '#fff', borderRadius: '1.3em' }}>
            <Row style={{ padding: '16px', }}>
              <Col span={10}>
                <Image src="https://laptop88.vn/media/product/9008_loq_15iax9i___2__.jpg" alt="" preview={false} />
                <Row style={{ paddingTop: '10px' }}>
                  <WrapperStyleColImage span={5}>
                    <WrapperStyleImageSmall src="https://laptop88.vn/media/product/9008_loq_15iax9i___2__.jpg" alt="" preview={false} />
                  </WrapperStyleColImage>
                  <WrapperStyleColImage span={5}>
                    <WrapperStyleImageSmall src="https://laptop88.vn/media/product/9008_loq_15iax9i___2__.jpg" alt="" preview={false} />
                  </WrapperStyleColImage>
                  <WrapperStyleColImage span={5}>
                    <WrapperStyleImageSmall src="https://laptop88.vn/media/product/9008_loq_15iax9i___2__.jpg" alt="" preview={false} />
                  </WrapperStyleColImage>
                  <WrapperStyleColImage span={5}>
                    <WrapperStyleImageSmall src="https://laptop88.vn/media/product/9008_loq_15iax9i___2__.jpg" alt="" preview={false} />
                  </WrapperStyleColImage>
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
                    <div className={styles.price}>16.290.000 đ</div>
                    <div className={styles.mainPrice}>
                      <del className={styles.oldPrice}> 25.990.000 đ</del>
                      <div className={styles.saleofPrice}>-60%</div>
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
                <StarFilled style={{ fontSize: '12px', color: 'rgb(253,216,54)' }} />
                <StarFilled style={{ fontSize: '12px', color: 'rgb(253,216,54)' }} />
                <StarFilled style={{ fontSize: '12px', color: 'rgb(253,216,54)' }} />
                <StarFilled style={{ fontSize: '12px', color: 'rgb(253,216,54)' }} />
                <StarFilled style={{ fontSize: '12px', color: 'rgb(253,216,54)' }} />
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
                <div className={styles.productStore}>
                  <h3 className={styles.titleHome}> <HomeOutlined />
                    Địa chỉ kho hàng</h3>
                  <div style={{ display: 'block' }}>
                    <div className={styles.contentFilterStore}>
                      <select  onChange="lay_danh_sach_cua_hang_theo_tinh(this.value)">
                        <option value="0">Tỉnh/Thành</option>
                        <option value="1">Hà Nội</option>
                        <option value="2">TP.Hồ Chí Minh</option>
                      </select>
                    </div>

                    <div className={styles.note}>Có <span style={{ fontWeight: '700', color: 'red' }}>1</span> cửa hàng có sẵn sản phẩm này</div>
                    <div className={styles.contentStoreList}>
                      <div className={styles.itemAddress}>
                        <a className={styles.itemPhone} href="">
                          <PhoneOutlined /> 0904583588
                        </a>
                        <a className={styles.itemMap} href="">
                          <HomeOutlined /> 125 Trần Đại Nghĩa, Hai Bà Trưng, Hà Nội (showroom)
                        </a>
                      </div>
                    </div>
                    <a href="" className={styles.btnAddtoCart}>ADD TO CART</a>
                  </div>
                </div>
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
