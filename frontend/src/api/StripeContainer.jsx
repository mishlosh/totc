// This file is for loading Stripe-js into the website and creates the Payment Form element
import React from 'react'
import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import PaymentForm from "../components/PaymentForm"

const PUBLIC_KEY = "pk_test_51OyeaUBdF8gFWyzTWAe9XfDopfcqbiPwg77eLPcfsQWYwXi3efzBl9xKTDzf1EU7JDk7dEdKJqFI2rhCsOSFfDwi00ujPBzfRw"

const stripePromise = loadStripe(PUBLIC_KEY)

export default function StripeContainer() {
    return (
        <Elements stripe={stripePromise}>
            <PaymentForm />
        </Elements>
    )
}