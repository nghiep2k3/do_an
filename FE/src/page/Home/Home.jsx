import React from 'react'
import Header from '../../components/Header/Header'
import Carousels from '../../components/Carousel/Carousel'
import CatSlider from '../../components/CatSlider/CatSlider'
import Footer from '../../components/Footer/Footer'
import CardPhone from '../../components/ProductCardPhone/ProductCardPhone';
import Banner from '../../components/Banner/Banner'
import ContactBox from '../../components/ContactBox/ContactBox'
import Laptop from '../../page/Laptop/Laptop'


export default function Home() {
  const phoneProducts = [
    {
      id: 1,
      product_images: [
        {
          image_url: 'https://cdn.tgdd.vn/Products/Images/42/321895/oppo-reno11-f-purple-thumb-600x600.jpg'
        }
      ],
      name: 'Điện thoại OPPO Reno11',
      price: 12000000,
      discount: 10
    },
    {
      id: 2,
      product_images: [
        {
          image_url: 'https://cdn.tgdd.vn/Products/Images/42/249948/samsung-galaxy-s23-ultra-green-thumbnew-600x600.jpg'
        }
      ],
      name: 'Samsung Galaxy S23 Ultra',
      price: 32000000,
      discount: 15
    },
    {
      id: 3,
      product_images: [
        {
          image_url: 'https://cdn.tgdd.vn/Products/Images/42/320722/samsung-galaxy-z-flip6-xanh-thumbn-600x600.jpg'
        }
      ],
      name: 'Samsung Galaxy Z Flip6',
      price: 28000000,
      discount: 20
    },
    {
      id: 4,
      product_images: [
        {
          image_url: 'https://cdn.tgdd.vn/Products/Images/42/305658/iphone-15-pro-max-blue-thumbnew-600x600.jpg'
        }
      ],
      name: 'iPhone 15 Pro Max',
      price: 40000000,
      discount: 5
    }
  ];

  const sampleProducts = [
    {
      id: 1,
      product_images: [
        {
          image_url: 'https://cdn.tgdd.vn/Products/Images/44/313333/lenovo-ideapad-slim-3-15iah8-i5-83er00evn-thumb-600x600.jpg'
        }
      ],
      name: 'Laptop Lenovo IdeaPad Slim 3',
      price: 20000000,
      discount: 10
    },
    {
      id: 2,
      product_images: [
        {
          image_url: 'https://cdn.tgdd.vn/Products/Images/44/311178/asus-vivobook-go-15-e1504fa-r5-nj776w-thumb-600x600.jpg'
        }
      ],
      name: 'Laptop Asus Vivobook Go 15',
      price: 15000000,
      discount: 12
    },
    {
      id: 3,
      product_images: [
        {
          image_url: 'https://cdn.tgdd.vn/Products/Images/44/326050/hp-15-fd0303tu-i3-a2nl4pa-thumb-1-600x600.jpg'
        }
      ],
      name: 'Laptop HP 15',
      price: 18000000,
      discount: 15
    },
    {
      id: 4,
      product_images: [
        {
          image_url: 'https://cdn.tgdd.vn/Products/Images/44/320870/acer-aspire-lite-15-51m-5542-i5-nxks5sv001-thumb-2-600x600.jpg'
        }
      ],
      name: 'Laptop Acer Aspire Lite',
      price: 17000000,
      discount: 8
    },
    {
      id: 5,
      product_images: [
        {
          image_url: 'https://cdn.tgdd.vn/Products/Images/44/321436/acer-aspire-a315-44p-r9w8-r7-nxksjsv002-thumb-600x600.jpg'
        }
      ],
      name: 'Laptop Acer Aspire A315',
      price: 16000000,
      discount: 5
    },
    {
      id: 6,
      product_images: [
        {
          image_url: 'https://cdn.tgdd.vn/Products/Images/44/326049/hp-245-g10-r5-a20tdpt-thumb-600x600.jpg'
        }
      ],
      name: 'Laptop HP 245 G10',
      price: 14000000,
      discount: 18
    },
    {
      id: 7,
      product_images: [
        {
          image_url: 'https://cdn.tgdd.vn/Products/Images/44/309565/hp-pavilion-15-eg2081tu-i5-7c0q4pa-thumb-600x600.jpg'
        }
      ],
      name: 'Laptop HP Pavilion 15',
      price: 22000000,
      discount: 25
    },
    {
      id: 8,
      product_images: [
        {
          image_url: 'https://cdn.tgdd.vn/Products/Images/44/310282/acer-aspire-3-a315-510p-32ef-i3-nxkdhsv001-thumb-600x600.jpg'
        }
      ],
      name: 'Laptop Acer Aspire 3',
      price: 13000000,
      discount: 20
    }
  ];

  const accessoryProducts = [
    {
      id: 1,
      product_images: [
        {
          image_url: 'https://hanoicomputercdn.com/media/product/250_81427_ban_phim_co_co_day_logitech_g713_rgb_tkl_off_white_tactile_920_010427_1.jpg'
        }
      ],
      name: ' Bàn phím cơ có dây Logitech G713 RGB TKL Off White Linear (920-010679) ',
      price: 1599000,
      discount: 10
    },
    {
      id: 2,
      product_images: [
        {
          image_url: 'https://hanoicomputercdn.com/media/product/250_58045_logitech_mk295_den_usb_silenttouch_0001_2.jpg'
        }
      ],
      name: 'Bộ bàn phím chuột không dây Logitech MK295 màu đen (USB/SilentTouch)',
      price: 2599000,
      discount: 15
    },
    {
      id: 3,
      product_images: [
        {
          image_url: 'https://hanoicomputercdn.com/media/product/250_65703_tai_nghe_asus_rog_cetra_true_wireless_90yh03g1_b5ua00_0001_2.jpg'
        }
      ],
      name: 'Tai nghe Asus ROG Cetra True Wireless 90YH03G1-B5UA00 ',
      price: 1899000,
      discount: 20
    },
    {
      id: 4,
      product_images: [
        {
          image_url: 'https://hanoicomputercdn.com/media/product/250_69536_tai_nghe_asus_rog_cetra_true_wireless_white_90yh03x1_b5ua00_0001_2.jpg'
        }
      ],
      name: 'Tai nghe Asus ROG Cetra True Wireless White 90YH03X1-B5UA00',
      price: 1890000,
      discount: 5
    }
  ];
  return (
    <div>
      <Header></Header>
      {/* <ContactBox></ContactBox> */}
      <Carousels></Carousels>
      <div className="container">
        <div className="row">
          <Banner></Banner>
          <CatSlider></CatSlider>
          <h1 style={{ textAlign: 'center' }}>Điện thoại ưu chuộng</h1>
          {/* {phoneProducts.map((product, index) => (
            <div key={index} className="col-md-3">
              <CardPhone product={product} />
            </div>
          ))} */}
          <Laptop></Laptop>
          <h1 style={{ textAlign: 'center', marginTop: 50 }}>Máy tính nổi bật</h1>

          {sampleProducts.map((product, index) => (
            <div key={index} className="col-md-3">
              <CardPhone product={product} />
            </div>
          ))}
          <h1 style={{ textAlign: 'center', marginTop: 50 }}>Phụ kiện điện tử</h1>

          {accessoryProducts.map((product, index) => (
            <div key={index} className="col-md-3">
              <CardPhone product={product} />
            </div>
          ))}
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}
