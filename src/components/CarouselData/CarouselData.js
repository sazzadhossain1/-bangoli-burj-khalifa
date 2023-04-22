// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./CarouselData.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

const CarouselData = () => {
  return (
    <div className="slider-div">
      <h1 className="branches-header">Our Branches</h1>
      <div className="hr"></div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <div className="">
          <SwiperSlide className="img-swiper">
            <img
              src="https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium, dolor. Qui illo, obcaecati sunt ab incidunt quasi
              molestias error ex.
            </p>
          </SwiperSlide>
          <SwiperSlide className="img-swiper">
            <img
              src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aG90ZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              impedit magni praesentium quasi ipsa at quod perferendis autem
              debitis vitae.
            </p>
          </SwiperSlide>
          <SwiperSlide className="img-swiper">
            <img
              src="https://images.unsplash.com/photo-1568084680786-a84f91d1153c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat
              nulla architecto sunt ipsum mollitia impedit ipsa libero odio
              perspiciatis nam.
            </p>
          </SwiperSlide>
          <SwiperSlide className="img-swiper">
            <img
              src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem
              accusamus, officia in voluptate excepturi mollitia eius nobis.
              Eum, ratione in.
            </p>
          </SwiperSlide>
          <SwiperSlide className="img-swiper">
            <img
              src="https://images.unsplash.com/photo-1589923158776-cb4485d99fd6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTN8fGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur neque fuga reiciendis excepturi ab officia autem,
              amet deserunt quam! Iusto.
            </p>
          </SwiperSlide>
          <SwiperSlide className="img-swiper">
            <img
              src="https://images.unsplash.com/photo-1535827841776-24afc1e255ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjN8fGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Inventore perspiciatis ipsa quibusdam iusto natus id asperiores
              nesciunt cupiditate eius voluptates!
            </p>
          </SwiperSlide>
          <SwiperSlide className="img-swiper">
            <img
              src="https://images.unsplash.com/photo-1562133567-b6a0a9c7e6eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjR8fGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia
              laboriosam quam, incidunt dolorem similique repellat quae vitae
              delectus quis porro.
            </p>
          </SwiperSlide>
          <SwiperSlide className="img-swiper">
            <img
              src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njh8fGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus, quas sunt! Pariatur magnam voluptatem unde eius ea
              possimus atque vel.
            </p>
          </SwiperSlide>
        </div>
      </Swiper>
    </div>
  );
};

export default CarouselData;
