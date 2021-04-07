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
      <ProgressMask value={value}>
        <FullProgress />
        <VisuallyHidden>{value}%</VisuallyHidden>
      </ProgressMask>
    </Component>
  );
};

const Wrapper = styled.div`
  width: 370px;
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px rgba(128, 128, 128, 0.35);
`;

const ProgressMask = styled.div`
  width: ${(p) => p.value}%;
  overflow: hidden;
`;

const FullProgress = styled.div`
  background-color: ${COLORS.primary};
  width: 370px;
  border-radius: 4px;
`;

const LargeWrapper = styled(Wrapper)`
  height: 24px;
  border-radius: 8px;
  padding: 4px;

  ${FullProgress} {
    width: 362px;
    height: 16px;
  }
`;

const MediumWrapper = styled(Wrapper)`
  height: 12px;
  border-radius: 4px;

  ${FullProgress} {
    height: 12px;
  }
`;

const SmallWrapper = styled(Wrapper)`
  height: 8px;
  border-radius: 4px;

  ${FullProgress} {
    height: 8px;
  }
`;

export default ProgressBar;
