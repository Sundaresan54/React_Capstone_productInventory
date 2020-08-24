import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
	return (
		<Carousel>
		  <Carousel.Item>
		    <img
					className="d-block w-100 carousel-img-h"
		      src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Books/082020/BookBazaar/bookbazar_header_aug_1500x300-3-new.jpg"
		      alt="First slide"
		    />
		    <Carousel.Caption>
		    </Carousel.Caption>
		  </Carousel.Item>
		  <Carousel.Item>
		    <img
		      className="d-block w-100 carousel-img-h"
		      src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/PC/Accessories/Brands/Zebronics/work-from-home1500x300.gif"
		      alt="First slide"
		    />
		    <Carousel.Caption>
		    </Carousel.Caption>
		  </Carousel.Item>
		  <Carousel.Item>
		    <img
		      className="d-block w-100 carousel-img-h"
		      src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/Summerstore/XCM_Manual_1222500_1160571_IN_f08de626_002f_48ce_93f2_62659f796e94_1500x250_null_en_IN._CB432454943_.jpg"
		      alt="First slide"
		    />
		    <Carousel.Caption>
		    </Carousel.Caption>
		  </Carousel.Item>
		</Carousel>

	);
}

export default Banner;