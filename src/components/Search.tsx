import React from "react";
import styled from "styled-components";
import { useForm, SubmitHandler } from "react-hook-form";

interface Props {
  animation: boolean;
  sticky: boolean;
}

type Inputs = {
  input: string;
};

const Search: React.FC<Props> = ({ animation, sticky }) => {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  return (
    <Container
      onSubmit={handleSubmit(onSubmit)}
      sticky={sticky}
      animation={animation}
    >
      <input
        className="navbar__search"
        type="text"
        placeholder="Search items..."
        {...register("input", { required: true })}
      />
    </Container>
  );
};

export default Search;

const Container = styled.form<Props>`
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  input {
    height: 4.4rem;
    padding: 0rem 2rem;
    border-radius: 5rem;
    border: none;
    background: ${({ animation, sticky }) =>
      animation ? (sticky ? "var(--gray)" : "#ffffff") : "var(--gray)"};
    transition: background 0.15s ease, border 0.15s ease, box-shadow 0.15s ease,
      color 0.15s ease;

    :focus {
      outline: rgba(100, 83, 247, 1);
      background: #fff;
      box-shadow: 0px 1px 1px rgba(100, 83, 247, 0.3),
        0px 3px 6px rgba(100, 83, 247, 0.05), 0 0 0 3px rgba(100, 83, 247, 0.3);
    }
  }

  @media screen and (max-width: 640px) {
    input {
      display: none;
    }
  }
`;
