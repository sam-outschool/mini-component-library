import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <NativeSelect value={value} onChange={onChange}>
        {children}
      </NativeSelect>
      <PresentationalBit>
        {displayedValue}
        <Chevron id="chevron-down" strokeWidth={2} />
      </PresentationalBit>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: max-content;
`;

const NativeSelect = styled.select`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
`;

const PresentationalBit = styled.div`
  background: ${COLORS.transparentGray15};
  color: ${COLORS.gray700};
  align-items: center;
  border-radius: 8px;
  padding: 12px 16px;
  padding-right: 52px;
  width: fit-content;

  ${NativeSelect}:hover + & {
    color: ${COLORS.black};
  }

  ${NativeSelect}:focus + & {
    outline: 1px dotted #212121;
  }
`;

const Chevron = styled(Icon)`
  position: absolute;
  top: 20%;
  right: 12px;
  pointer-events: none;
`;

export default Select;
