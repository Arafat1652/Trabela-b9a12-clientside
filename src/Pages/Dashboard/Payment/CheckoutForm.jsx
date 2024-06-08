import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";


import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";
import toast from "react-hot-toast";


const CheckoutForm = ({money}) => {
    const [error, setError]= useState('')
    const [clientSecret, setClientSecret] = useState('')
    const [transactionId, setTransactionId] = useState('')
    const stripe = useStripe()
    const element = useElements()
    const axiosSecure = useAxiosSecure()
    const {user} = useAuth()
    const navigate = useNavigate()
    // const totalPrice = cart.reduce((total, item)=> total + item.price ,0)
    const {price} = money
    console.log(price);
    

    useEffect(()=>{
        if(price> 0){
          axiosSecure.post('/create-payment-intent', {price: price})
        .then(res=>{
            console.log(res.data.clientSecret);
            setClientSecret(res.data.clientSecret)

        })
        }
    },[axiosSecure, price])

    const handleSubmit= async(e)=>{
        e.preventDefault()

        if(!stripe || !element){
            return
        }

        const  card = element.getElement(CardElement)

        if(card === null){
            return
        }

        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if(error){
            console.log('payment error', error);
            setError(error.message)
        }
        else{
            console.log('payment method', paymentMethod);
            setError('')
        }

        // confirm payment 
        const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(clientSecret,{
          payment_method:{
            card: card,
            billing_details:{
              email: user?.email || 'anonymous',
              name: user?.displayName || 'anonymous'
            }
          }
        })

        if(confirmError){
          console.log('confirm error');
        }
        else{
          console.log('payment intent', paymentIntent)
          if(paymentIntent.status === 'succeeded'){
            console.log('transaction if', paymentIntent.id);
            setTransactionId(paymentIntent.id)

            toast.success('your payment is successfull')
             navigate('/dashboard/my-bookings')
            
          }
        }
    }

    return (
        <form
         onSubmit={handleSubmit}
         >
           <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button type="submit" className="btn btn-sm btn-primary my-4" disabled={!stripe || !clientSecret}>
        Pay
      </button>
      <p className="text-red-400">{error}</p>
      {transactionId && <p className="text-green-600"> Your transaction Id: {transactionId}</p> }
      
        </form>
    );
};

export default CheckoutForm;