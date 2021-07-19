const scrollTo = (id) => {
  setTimeout(
    () =>
      document.getElementById(id) &&
      document.getElementById(id).scrollIntoView({
        behavior: "smooth",
      }),
    0
  );
};

export default scrollTo;
