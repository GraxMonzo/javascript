---
'gatsby-plugin-clerk': major
'@clerk/localizations': major
'@clerk/nextjs': major
'@clerk/clerk-react': major
'@clerk/remix': major
'@clerk/types': major
---

Drop deprecations. Migration steps:
- drop `orgs` jwt claim from session token
- change type of `auth` param of `withServerAuth()` callback to `AuthObject` from `ServerSideAuth` in `gatsby-clerk-plugin`
    - use `auth.sessionClaims` instead of `auth.claims`
    - use `AuthObject` properties from `auth`
- use `publishableKey` instead of `frontendApi`
- drop `formFieldLabel__emailAddress_phoneNumber` from localization keys
- drop `formFieldLabel__phoneNumber_username` from localization keys
- drop `formFieldLabel__emailAddress_phoneNumber_username` from localization keys
- drop `formFieldInputPlaceholder__emailAddress_phoneNumber` from localization keys
- drop `formFieldInputPlaceholder__phoneNumber_username` from localization keys
- drop `formFieldInputPlaceholder__emailAddress_phoneNumber_username` from localization keys
- use `title__connectionFailed` instead of `title__conectionFailed` from localization keys
- use `actionLabel__connectionFailed` instead of `actionLabel__conectionFailed` from localization keys
- use `headerTitle__members` instead of `headerTitle__active` from localization keys
- use `headerTitle__invitations` instead of `headerTitle__invited` from localization keys
- drop `createOrganization.subtitle` from localization keys
- use `deDE` instead of `deDe` localization from `@clerk/localizations`