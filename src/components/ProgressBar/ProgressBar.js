/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const ProgressBar = ({ value, size }) => {
  const Component =
    size === "large"
      ? LargeWrapper
      : size === "medium"
      ? MediumWrapper
      : SmallWrapper;
  return (
    <Component
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <BarWrapper>
        <Bar value={value} />
        <VisuallyHidden>{value}%</VisuallyHidden>
      </BarWrapper>
    </Component>
  );
};

const Wrapper = styled.div`
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px rgba(128, 128, 128, 0.35);
  border-radius: 4px;
  overflow: hidden;
`;

const LargeWrapper = styled(Wrapper)`
  height: 24px;
  border-radius: 8px;
  padding: 4px;
`;

const MediumWrapper = styled(Wrapper)`
  height: 12px;
`;

const SmallWrapper = styled(Wrapper)`
  height: 8px;
`;

const BarWrapper = styled.div`
  overflow: hidden;
  border-radius: 4px;
  height: 100%;
`;

const Bar = styled.div`
  background-color: ${COLORS.primary};
  width: ${(p) => p.value}%;
  height: 100%;
`;

export default ProgressBar;
