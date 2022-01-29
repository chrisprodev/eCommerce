import React, { useState } from "react";
import styled from "styled-components";

const PaymentForm: React.FC<{ total: number }> = ({ total }) => {
  const [payment, setPayment] = useState(0);
  return (
    <PaymentInfo>
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
          <PaymentInput
            type="text"
            name="email"
            aria-invalid="false"
            aria-required="true"
            value=""
          />
          <p className="payment__card-number">Card number</p>
          <PaymentInput
            type="text"
            name="number"
            placeholder="1234 1234 1234 1234"
            aria-invalid="false"
            aria-required="true"
            value=""
          />
          <Column>
            <Row>
              <p className="payment__exp-date">Expiry</p>
              <PaymentInput
                type="text"
                name="number"
                placeholder="MM/YY"
                aria-invalid="false"
                aria-required="true"
                value=""
              />
            </Row>
            <Row>
              <p className="payment__card-number">CVC</p>
              <PaymentInput
                type="text"
                name="text"
                placeholder="CVC"
                aria-invalid="false"
                aria-required="true"
                value=""
              />
            </Row>
          </Column>
        </>
      ) : (
        <>
          <p className="payment__name">Email</p>
          <PaymentInput
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

const PaymentInfo = styled.div`
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

const PaymentInput = styled.input`
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
`;

const Row = styled.div`
  display: flex;
  flex-direction: column;
`;

const Column = styled.div`
  display: block;
  columns: 2;
  //gap: 4rem;
`;
