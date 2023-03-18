# dApp

## Dev workflow

### Common Commands

```
yarn install # Install dependencies
yarn dev # Run frontend at http://localhost:3000
yarn test # Run unit tests + coverage
yarn lint:fix # Fix lint issues automatically
```

### Run E2E Tests

1. [Install Cypress UI](https://docs.cypress.io/guides/getting-started/installing-cypress)
1. Run `yarn run cypress open`
1. Click E2E Testing

---

## File Structure

```
cypress
 ├── e2e
 |    └── home.cy.ts                  <- end 2 end tests for www.SorellaLabs.com/home
src
 ├── components
 │    └── home                        <- components for home
 │         ├── tests                  <- tests for home components
 │         │    ├── Footer.spec.tsx
 │         │    ├── Header.spec.tsx
 │         │    └── Layout.spec.tsx
 │         ├── Footer.tsx
 │         ├── Header.tsx
 │         ├── layout-config.tsx
 │         └── Layout.tsx
 ├── tests
 │    └── home.spec.tsx              <- tests for home page
 └── pages
      └── home.tsx                   <- www.SorellaLabs.com/home

```
