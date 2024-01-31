const breakpointsUp = {
  desktop: "1200px",
  tablet: "768px",
  mobile: "480px",
};

const breakpointsDown = {
  desktop: "1199px",
  tablet: "767px",
  mobile: "479px",
};

const breakpointUp = (size, content) => `
    @media (min-width: ${breakpointsUp[size]}) {
      ${content}
    }
  `;

const breakpointDown = (size, content) => `
    @media (max-width: ${breakpointsDown[size]}) {
      ${content}
    }
  `;
