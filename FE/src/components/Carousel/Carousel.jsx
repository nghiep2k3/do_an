import React from 'react';
import { Carousel } from 'antd';
import 'antd/dist/reset.css'; // Import CSS của Ant Design

export default function Carousels() {
    return (
        <Carousel autoplay draggable autoplaySpeed={3000}>
            <div>
                <img src="https://via.placeholder.com/800x300" alt="Slide 1" style={{ width: '100%' }} />
            </div>
            <div>
                <img src="https://via.placeholder.com/800x300" alt="Slide 2" style={{ width: '100%' }} />
            </div>
            <div>
                <img src="https://via.placeholder.com/800x300" alt="Slide 3" style={{ width: '100%' }} />
            </div>
            <div>
                <img src="https://via.placeholder.com/800x300" alt="Slide 4" style={{ width: '100%' }} />
            </div>
        </Carousel>
    );
}
