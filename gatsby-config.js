const defaultLanguage = 'en'

module.exports = {
  siteMetadata: {
    languages: [
      { code: 'en', label: 'english' },
      { code: 'de', label: 'deutsch' },
    ],
    defaultLanguage,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-i18n',
      options: {
        langKeyDefault: defaultLanguage,
        useLangKeyLayout: true,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `alwbr05zfpsn`,
        accessToken: `0683d5056b856d68d835f75333309cd104f06c22fbcd4897d4155e400f294687`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-3900768-20',
        anonymize: true,
        respectDNT: true,
      },
    },
  ],
}
