import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import NewIcon from "../icons/NewIcon";
import AudioIcon from "../icons/AudioIcon";
import DroneIcon from "../icons/DroneIcon";
import ComputerIcon from "../icons/ComputerIcon";
import TvIcon from "../icons/TvIcon";
import MobileIcon from "../icons/MobileIcon";
import CameraIcon from "../icons/CameraIcon";
import StarIcon from "../icons/StarIcon";
import { useAppDispatch } from "../store/hooks";
import { setCategory } from "../features/app/appSlice";

interface props {
  id: number;
  name: string;
  icon: string;
}

const CategoryIcon: React.FC<props> = ({ id, name }) => {
  const [hover, setHover] = useState(false);

  const dispatch = useAppDispatch();

  const handleSetCategory = () => {
    dispatch(setCategory(id));
  };

  return (
    <Container>
      <Link
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        to={`/products`}
        onClick={handleSetCategory}
      >
        {name === "New Arrivals" && <NewIcon hover={hover} />}
        {name === "Featured" && <StarIcon hover={hover} />}
        {name === "Photography" && <CameraIcon hover={hover} />}
        {name === "Computers" && <ComputerIcon hover={hover} />}
        {name === "Entertaiment" && <TvIcon hover={hover} />}
        {name === "Mobile" && <MobileIcon hover={hover} />}
        {name === "Drones" && <DroneIcon hover={hover} />}
        {name === "Audio" && <AudioIcon hover={hover} />}
        <p>{name}</p>
      </Link>
    </Container>
  );
};

export default CategoryIcon;

const Container = styled.div`
  a {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: var(--gray);
    border-radius: 1rem;
    width: 12.8rem;
    height: 12.8rem;
    transition: all 150ms ease;

    :hover {
      background: var(--gray-mid);
      color: var(--purple);
    }

    svg {
      height: 3rem;
    }

    p {
      font-size: 1.6rem;
      font-weight: 600;
      margin: 0;
      padding-top: 2.2rem;
    }
  }
`;
