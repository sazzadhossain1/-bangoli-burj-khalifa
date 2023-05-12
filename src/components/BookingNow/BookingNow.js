import { Link, useLoaderData } from "react-router-dom";
import "./BookingNow.css";

const BookingNow = () => {
  const productData = useLoaderData();
  console.log(productData);
  return (
    <div className="main-parent-div">
      <div className="booking-div">
        <div className="parent-flex ">
          <div>
            <div className="executive-blank-div">
              <h1 className="executive-text">Executive</h1>
              <div className="blank-div"></div>
            </div>
            <h2 className="product-name"> {productData.name}</h2>
          </div>
          <h4 className="text-description">
            At the heart of San Diego, on one of the most colorful beaches,
            right next to the Pacific ocean, lies the Hotel California, most
            famous for it’s easy going staff and vacation you’ll never forget…
          </h4>
        </div>
        <img style={{ height: "600px" }} src={productData.img} alt="" />
        <div className="person-price-div">
          <p>{productData.description}</p>
          <p>Person: {productData.persone}</p>
          <p>Price: ${productData.price}</p>

          <Link to="/">
            <button className="choose-another-room">Choose Another Room</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookingNow;
