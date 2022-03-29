import styled from "styled-components";
import { motion } from "framer-motion";

export const ProductsWrapper = styled(motion.div)<{ displayGrid: boolean }>`
  padding-bottom: 7rem;
  display: ${({ displayGrid }) => (displayGrid ? "grid" : "flex")};
  grid-template-columns: repeat(4, 1fr);
  gap: ${({ displayGrid }) => (displayGrid ? "2rem" : "0")};

  @media screen and (max-width: 960px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
