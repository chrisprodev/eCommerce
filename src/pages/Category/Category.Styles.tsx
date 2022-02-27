import styled from "styled-components";
import { motion } from "framer-motion";

export const Header = styled(motion.header)`
  height: 20rem;
  max-width: 126rem;
  margin: 0 auto;
  display: flex;
  align-items: flex-end;
  padding: 0 2rem;

  h2 {
    line-height: 5.6rem;
  }
`;

export const Filters = styled(motion.section)`
  max-width: 126rem;
  margin: 0 auto;

  padding: 6rem 2rem 0 2rem;
  display: flex;
  justify-content: space-between;
`;
