import React from 'react'
import Header from '../../components/Header/Header'
import Carousels from '../../components/Carousel/Carousel'
import CatSlider from '../../components/CatSlider/CatSlider'
import Footer from '../../components/Footer/Footer'
import ContactBox from '../../components/ContactBox/ContactBox'
import Cart from '../../components/Cart/Cart'
export default function Home() {
    const products = [
        {
            id: 1,
            name: 'Vsmart Live4 Rẻ Đẹp Chính Hãng',
            image: 'https://img.lazcdn.com/g/p/cd92da7e165d756dcb3d7da99d079675.jpg_720x720q80.jpg',
            oldPrice: '3.599.000đ',
            newPrice: '2.599.000đ'
        },
        {
            id: 2,
            name: 'Samsung Galaxy S21',
            image: 'https://cdn.tgdd.vn/Products/Images/42/305658/iphone-15-pro-max-blue-thumbnew-600x600.jpg',
            oldPrice: '20.990.000đ',
            newPrice: '18.990.000đ'
        },
        {
            id: 3,
            name: 'iPhone 12 Pro Max',
            image: 'https://hc.com.vn/i/ecommerce/media/ckeditor_3370949.jpg',
            oldPrice: '33.990.000đ',
            newPrice: '30.990.000đ'
        },
        {
            id: 4,
            name: 'Xiaomi Mi 11',
            image: 'https://cdn.tgdd.vn/Products/Images/42/247508/iphone-14-pro-vang-thumb-600x600.jpg',
            oldPrice: '16.990.000đ',
            newPrice: '14.990.000đ'
        },
        {
            id: 5,
            name: 'Iphone 15 Pro max',
            image: 'https://cdn.tgdd.vn/Products/Images/42/247508/iphone-14-pro-vang-thumb-600x600.jpg',
            oldPrice: '16.990.000đ',
            newPrice: '14.990.000đ'
        }
    ];
    return (
        <div>
            <Header></Header>
            <ContactBox></ContactBox>
            <Carousels></Carousels>
            {/* <CatSlider></CatSlider> */}
            sản phẩm bán chạy
            <div className="container">
                <div className="row">
                    {products.map((product, index) => (
                        <div key={index} className="col-md-3">
                            <Cart product={product} />
                        </div>
                    ))}
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}
