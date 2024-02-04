export const breakpointsUp = {
  desktop: "1200px", // 1440px
  tablet: "768px",
  mobile: "480px", // 375px
};

export const breakpointsDown = {
  desktop: "1199px",
  tablet: "767px",
  mobile: "479px",
};

export const breakpointUp = (size, content) =>
  `
    @media (min-width: ${breakpointsUp[size]}) {
      ${content}
    }
  `;

export const breakpointDown = (size, content) => `
    @media (max-width: ${breakpointsDown[size]}) {
      ${content}
    }
  `;
