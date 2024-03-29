// FUNCTION: Actualiza el tema en la URL
export const handleThemeChange = (router, theme) => {
  router.push({
    pathname: router.pathname,
    query: { ...router.query, theme: theme },
  });
};

// FUNCTION: Actualiza el idioma en la URL
export const handleLanguageChange = (router, language) => {
  router.push({
    pathname: router.pathname,
    query: { ...router.query, language: language },
  });
};

export default { handleThemeChange, handleLanguageChange };
