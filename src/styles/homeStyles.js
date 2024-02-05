import styled from "styled-components";

import { colors } from "../styles/colors";

export const SwitchButton = styled.label`
  position: relative;
  display: inline-block;
  width: 3rem;
  height: 1.75rem;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${colors.purple};
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 34px;
  }

  span:before {
    position: absolute;
    content: "";
    width: 1.25rem;
    height: 1.25rem;
    left: 4px;
    bottom: 4px;
    background-color: #fff;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 50%;
  }

  input:checked + span {
    background-color: ${colors.purple};
  }

  input:focus + span {
    box-shadow: 0 0 1px #2196f3;
  }

  input:checked + span:before {
    -webkit-transform: translateX(1.25rem);
    -ms-transform: translateX(1.25rem);
    transform: translateX(1.25rem);
  }
`;
