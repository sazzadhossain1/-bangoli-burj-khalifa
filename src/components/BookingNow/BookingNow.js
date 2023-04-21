import { useLoaderData } from "react-router-dom";

const BookingNow = () => {
  const productData = useLoaderData();
  console.log(productData[0].img);
  return (
    <div>
      <h2>Name: {productData[0].name}</h2>
      <img style={{ height: "600px" }} src={productData[0].img} alt="" />
    </div>
  );
};

export default BookingNow;
