import React from "react";
import "./OffersAndDeals.css";

const OffersAndDeals = () => {
  return (
    <div className="offersAndDeals-div">
      <h1 className="offers-heading">Offers & Deals</h1>
      <div className="grid-offers-div">
        <div className="first-child">
          <img
            className="offers-img"
            src="https://images.healthshots.com/healthshots/en/uploads/2022/09/07225829/family-vacation-770x436.jpg"
            alt=""
          />
          <div className="child-flex-div">
            <p className="gettogether">GET TOGETHER</p>
            <div className="empty-div"></div>
          </div>
          <p className="heading-p">Family vacation</p>
          <p className="details-lorem-div">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. A vitae,
            repellendus temporibus aliquam omnis, blanditiis voluptate soluta
            expedita enim aut qui porro voluptates eum sequi obcaecati quod
            deleniti eligendi nam necessitatibus? Eveniet itaque, vitae sed
            incidunt quam quibusdam odio ad ut impedit porro quia, corporis
            eius, mollitia consequuntur at magnam? Facere quas nobis iure
            tenetur impedit pariatur fuga ex natus?
          </p>
          <div className="btn-flex-div">
            <button className="btn-button">Details</button>
            <p className="price-night">$80 / night</p>
          </div>
        </div>
        <div className="second-child">
          <img
            className="offers-img"
            src="https://www.travelandleisure.com/thmb/nZ0wsnSK-Wk8YkAVHqur46f2nmE=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/sandos-finisterra-FAMALLINC0222-d033ea25e5cf4e839e2083e4094f115a.jpg"
            alt=""
          />
          <div className="child-flex-div">
            <p className="gettogether">CELEBRATE</p>
            <div className="empty-div"></div>
          </div>
          <p className="heading-p">Newlyweds weekend</p>
          <p className="details-lorem-div">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
            similique veniam blanditiis laboriosam perferendis. Id, sint
            nesciunt error quasi earum eaque qui neque nihil at sunt a
            reprehenderit aliquam corrupti laboriosam doloremque ad quod eveniet
            distinctio totam itaque repellendus aspernatur recusandae
            consequatur. Iste officiis similique ea ab enim accusamus ad officia
            temporibus porro aspernatur earum corrupti a dolorem,
          </p>
          <div className="btn-flex-div">
            <button className="btn-button">Details</button>
            <p className="price-night">$100 / night</p>
          </div>
        </div>
        <div className="third-child">
          <img
            className="offers-img"
            src="https://media.cnn.com/api/v1/images/stellar/prod/210902101650-underscored-grand-hyatt-baha-mar-baha-bay-lazy-river.jpg?q=x_0,y_0,h_1800,w_3200,c_fill/h_720,w_1280/f_webp"
            alt=""
          />

          <div className="child-flex-div">
            <p className="gettogether">PROCRASTINATE</p>
            <div className="empty-div"></div>
          </div>
          <p className="heading-p">Lazy weekend</p>
          <p className="details-lorem-div">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quos
            sapiente optio? Sint ea aut doloremque veniam molestiae esse
            possimus quod odio molestias aliquid voluptas quibusdam, enim ex
            consectetur natus porro quasi optio perspiciatis totam ut dicta
            unde! Accusamus suscipit, asperiores dicta ipsa ullam eos
            consequuntur obcaecati itaque nisi nulla quisquam doloribus nam
            tempora eligendi deserunt dolore excepturi error voluptatum?
          </p>
          <div className="btn-flex-div">
            <button className="btn-button">Details</button>
            <p className="price-night">$40 / night</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OffersAndDeals;
