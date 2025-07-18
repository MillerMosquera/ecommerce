// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination , Navigation} from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function Hero() { 

    return (
    <>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          
          //paginacion
          modules={[Pagination]}
          pagination={{clickable:true}}

          // navegacion
          navigation
        >
        
        <SwiperSlide>
          <img 
            src='https://storecomponents.vtexassets.com/arquivos/banner-decoration.png'
            className="w-screen object-cover"
          ></img>
        
        </SwiperSlide>

        <SwiperSlide>

          <img 
            src='https://storecomponents.vtexassets.com/arquivos/Class&Style-desktop.png'
            className="w-screen object-cover"
          ></img>
        
        </SwiperSlide>
    
      </Swiper>

      <div
        className='bg-[#0f3e99] py-[14px]'
      >
        <div
          className='container mx-auto text-white flex justify-evenly'
        >

          <div className=' flex flex-col items-center justify-center'>
            <img title="" sizes="" srcSet="" src="https://storecomponents.vtexassets.com/arquivos/box.png" alt="" className='max-h-[24px] w-1/3'></img>
            <p> Free Shipping </p>
          </div>

          <div className=' flex flex-col items-center justify-center'>
            <img title="" sizes="" srcSet="" src="https://storecomponents.vtexassets.com/arquivos/delivery-fast.png" alt="" className='max-h-[24px] w-1/3'  loading="eager"></img>
            <p> One day delivery</p>
          </div>

          <div className=' flex flex-col items-center justify-center'>
            <img title="" sizes="" srcSet="" src="https://storecomponents.vtexassets.com/arquivos/store.png" alt="" className='max-h-[24px] w-1/3' loading="eager" ></img>
            <p> Pick up in store </p>
          </div>

          <div className=' flex flex-col items-center justify-center'>
            <img title="" sizes="" srcSet="" src="https://storecomponents.vtexassets.com/arquivos/coupon.png" alt="" className='max-h-[24px] w-1/3' loading="eager"></img>
            <p>Exclusive deals</p>
          </div>

        </div>
    
      </div> 

    </>

    )
}

