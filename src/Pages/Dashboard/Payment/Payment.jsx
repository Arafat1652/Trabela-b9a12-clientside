import { loadStripe } from "@stripe/stripe-js";

import { Elements } from "@stripe/react-stripe-js";
import { useParams } from "react-router-dom";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import CheckoutForm from "./CheckoutForm";


const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK)

const Payment = () => {
    const {id} = useParams()
    console.log("id", id);
    const {user} = useAuth()
    const axiosSecure = useAxiosSecure()

    const {
        data: paymentPrice = [],
        isLoading,
        refetch,
      } = useQuery({
        queryKey: ["payment",],
        queryFn: async () => {
          const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/payment/${id}`);
          return data;
        },
      });

    //   console.log(paymentPrice.price);

    return (
        <div>
           
            <div>
                <Elements stripe={stripePromise}>
                    <CheckoutForm money={paymentPrice}/>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;