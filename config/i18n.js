// Only one item MUST have the "default: true" key

module.exports = {
  en: {
    default: true,
    path: `en`,
    locale: `en-US`,
    dateFormat: `DD/MM/YYYY`,
    siteLanguage: `en`,
    ogLanguage: `en_US`,
    defaultTitle: `Using i18n with Gatsby`,
    defaultDescription: `Gatsby example site using MDX and dependency-free i18n`,
  },
  ne: {
    path: `ne`,
    locale: `ne-NP`,
    dateFormat: `DD.MM.YYYY`,
    siteLanguage: `ne`,
    ogLanguage: `ne-NP`,
    defaultTitle: `title in nepali`,
    defaultDescription: `nepali description`,
  },
};
