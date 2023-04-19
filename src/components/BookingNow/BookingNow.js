import React from "react";
import { useLoaderData } from "react-router-dom";

const BookingNow = () => {
  const getProductById = useLoaderData();

  return (
    <div>
      <h1>This is bookingsssssssss</h1>
    </div>
  );
};

export default BookingNow;
