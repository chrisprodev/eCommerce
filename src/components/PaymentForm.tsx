import React, { useState } from "react";
import Cleave from "cleave.js/react";
import styled from "styled-components";
import { fadeUp } from "../constants/animations";
import { motion } from "framer-motion";

const PaymentForm: React.FC<{ total: number }> = ({ total }) => {
  const [payment, setPayment] = useState(0);
  return (
    <PaymentInfo variants={fadeUp}>
      <h5>Payment</h5>
      <span className="payment__method-title">Payment method</span>
      <OptionsWrapper>
        <label className="payment__form-control" onClick={() => setPayment(0)}>
          <input type="radio" name="radio" checked={payment === 0 && true} />
          Credit card
        </label>
        <label className="payment__form-control" onClick={() => setPayment(1)}>
          <input type="radio" name="radio" checked={payment === 1 && true} />
          Paypal
        </label>
      </OptionsWrapper>
      {payment === 0 ? (
        <>
          <p className="payment__name">Email</p>
          <input
            placeholder="Enter your email"
            type="text"
            name="email"
            aria-invalid="false"
            aria-required="true"
            value=""
          />
          <p className="payment__card-number">Card number</p>
          <Cleave
            placeholder="1234 1234 1234 1234"
            options={{ creditCard: true }}
          />
          <Column>
            <Row>
              <p className="payment__exp-date">Expiry</p>
              <Cleave
                placeholder="MM/YY"
                options={{
                  date: true,
                  datePattern: ["m", "y"],
                }}
              />
            </Row>
            <Row>
              <p className="payment__card-number">CVC</p>
              <Cleave
                placeholder="CVC"
                options={{
                  blocks: [3],
                }}
              />
            </Row>
          </Column>
        </>
      ) : (
        <>
          <p className="payment__name">Email</p>
          <input
            placeholder="Enter your Paypal email"
            type="text"
            name="email"
            aria-invalid="false"
            aria-required="true"
            value=""
          />
        </>
      )}

      <button>{`Pay $${total}`}</button>
    </PaymentInfo>
  );
};

export default PaymentForm;

const PaymentInfo = styled(motion.div)`
  border-radius: 1rem;
  background: var(--gray);
  padding: 3rem;
  margin-left: 5rem;
  margin-bottom: 5rem;
  display: flex;
  flex-direction: column;
  width: 40%;

  h5 {
    font-size: 2.4rem;
    margin: 0 0 3rem 0;
  }

  .payment__method-title,
  .payment__name,
  .payment__card-number,
  .payment__exp-date {
    font-size: 1.8rem;
    color: #666669;
  }

  .payment__form-control {
    font-size: 1.6rem;
    font-weight: 600;
    line-height: 3rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--black);

    input[type="radio"] {
      cursor: pointer;
      -webkit-appearance: none;
      appearance: none;
      background-color: #fff;
      margin: 0;
      font: inherit;
      color: currentColor;
      width: 2rem;
      height: 2rem;
      border: 2px solid #666669;
      border-radius: 50%;
      display: grid;
      place-content: center;

      ::before {
        content: "";
        width: 1.2rem;
        height: 1.2rem;
        border-radius: 50%;
        transform: scale(0);
        transition: 120ms transform ease-in-out;
        background: var(--purple);
      }

      :checked {
        border: 2px solid var(--purple);
      }

      :checked::before {
        transform: scale(1);
      }
    }
  }

  button {
    cursor: pointer;
    color: #ffffff;
    background: var(--purple);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5.4rem;
    height: 4.4rem;
    width: 100%;
    font-size: 1.8rem;
    font-weight: 600;
    margin-top: 6rem;
    border: none;
  }

  input[type="text"],
  input[type="number"] {
    padding: 1.2rem;
    margin-bottom: 1rem;
    background-color: #fff;
    border-radius: 0.5rem;
    transition: background 0.15s ease, border 0.15s ease, box-shadow 0.15s ease,
      color 0.15s ease;
    border: 1px solid #e6e6e6;
    box-shadow: 0px 1px 1px rgb(0 0 0 / 3%), 0px 3px 6px rgb(0 0 0 / 2%);

    :focus {
      outline: 0;
      border-color: rgba(100, 83, 247, 0.7);
      box-shadow: 0px 1px 1px rgba(100, 83, 247, 0.3),
        0px 3px 6px rgba(100, 83, 247, 0.05), 0 0 0 3px rgba(100, 83, 247, 0.3);
    }
  }

  @media screen and (max-width: 1280px) {
    margin-left: 0;
    width: unset;

    h5 {
      font-size: 2.2rem;
    }
  }
`;

const OptionsWrapper = styled.div`
  margin-top: 1rem;
  margin-bottom: 1.6rem;
`;

const Row = styled.div`
  display: flex;
  flex-direction: column;
`;

const Column = styled.div`
  display: block;
  columns: 2;
`;
