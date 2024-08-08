import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AlchemyFunctions } from "../utils/functions";
import { ethers } from "ethers";

const AddressPage = () => {
  const { address } = useParams();
  const [addressData, setAddressData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAddressInfo = async () => {
      try {
        setAddressData(await AlchemyFunctions.getBalance(address));
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAddressInfo();
  }, [address]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!addressData) return <div>No Block Data Found.</div>;

  console.log({ addressData });

  const balance = ethers.formatEther(addressData._hex);

  return (
    <div className="address-page">
      <h1>Address {address}</h1>
      <h2>Address Details</h2>
      <div className="address-details">
        <p>
          <span>Balance:</span> {balance}
        </p>
      </div>
    </div>
  );
};

export default AddressPage;
