import { motion } from "framer-motion";
import styled from "styled-components";
import { space } from "styled-system";

export const Button = styled(motion.button)`
  font-size: 1rem;
  font-family: system-ui, sans-serif;
  font-weight: bold;
  letter-spacing: 2px;
  text-transform: uppercase;
  background-color: ${(props) => props.theme.colors.text};
  padding: 20px 40px;
  color: ${(props) => props.theme.colors.background};
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  ${space}

  &:focus {
    outline: 4px solid white;
    outline-offset: 2px;
  }

  ::selection {
    background: ${(props) => props.theme.colors.background};
  }
  ::-moz-selection {
    background: ${(props) => props.theme.colors.background};
  }
`;
