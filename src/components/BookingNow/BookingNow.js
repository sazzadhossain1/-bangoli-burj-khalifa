import { useLoaderData } from "react-router-dom";

const BookingNow = () => {
  const productData = useLoaderData();
  console.log(productData[0].name);
  return (
    <div>
      <h1>This is bookingsssssssss</h1>
    </div>
  );
};

export default BookingNow;
