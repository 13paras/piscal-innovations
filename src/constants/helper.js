// To create scroll functionality
export const scrollToSection = goTo => {
  document.querySelector("#" + goTo).scrollIntoView({ behavior: "smooth" });
};
