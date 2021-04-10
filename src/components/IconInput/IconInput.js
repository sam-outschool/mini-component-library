import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const styles = {
  small: {
    borderWidth: 1,
    padding: 4,
    paddingLeft: 24,
    iconSize: 16,
    fontSize: 14,
  },
  large: {
    borderWidth: 2,
    padding: 6,
    paddingLeft: 36,
    iconSize: 24,
    fontSize: 18,
  },
};

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const style = styles[size];

  if (!style) {
    throw new Error(`Unknown size passed to IconInput: ${size}`);
  }

  return (
    <Wrapper
      style={{
        "--width": width + "px",
        "--border-width": style.borderWidth + "px",
        "--padding": style.padding + "px",
        "--padding-left": style.paddingLeft + "px",
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper>
        <Icon id={icon} strokeWidth={2} size={style.iconSize} />
      </IconWrapper>
      <Input
        placeholder={placeholder}
        style={{ "--font-size": style.fontSize + "px" }}
      />
      <Outline />
    </Wrapper>
  );
};

const IconWrapper = styled.div`
  position: absolute;
  left: 0;
  bottom: 6px;
  margin: auto;
  color: ${COLORS.gray700};
`;

const Input = styled.input`
  border: none;
  color: ${COLORS.gray700};
  font-size: var(--font-size);
  font-weight: 700;
  width: 100%;

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }

  &:focus {
    outline: none;
  }
`;

const Outline = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  pointer-events: none;

  ${Input}:focus + & {
    outline: 2px solid #4377cb;
    outline-offset: 4px;
    border-radius: 2px;
  }
`;

const Wrapper = styled.label`
  display: block;
  position: relative;
  border-bottom: var(--border-width) solid black;
  padding: var(--padding);
  padding-left: var(--padding-left);
  width: var(--width);

  &:hover ${IconWrapper}, &:hover ${Input} {
    color: black;
  }
`;

export default IconInput;
