module.exports = {
  app: {
    name: 'Passport SAML strategy example',
    port: process.env.PORT || 3000
  },
  passport: {
    strategy: 'saml',
    saml: {
      protocol: process.env.NO_SSL ? 'http' : 'https',
      path: process.env.SAML_PATH || '/login/callback',
      entryPoint: process.env.SAML_ENTRY_POINT || 'https://openidp.feide.no/simplesaml/saml2/idp/SSOService.php',
      issuer: process.env.SAML_ISSUER || 'passport-saml',
      cert: process.env.SAML_CERT || null
    }
  }
};
