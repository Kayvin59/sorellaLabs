# Sorella Labs DAPP

# Folders

- Cypress
  - includes front end test for home page
- SVG Drawings
  - contains nothing currently, but this is where the SVG files should be located in the future.
- Public
  - contains the images used for the main page, and strategies page

# SRC/{PATH}

- Documents
  - Button.tsx
    - Contains Custom button that is used on Tranche Cards
    - allows for easily passing in multiple children with same styling
  - Footer.tsx
    - Same as button
  - layout-config.tsx
    - Defines routes/urls for the correct folder which should point to the page
      - /about no page
      - /home (created)
      - /about no page
      - /team (created, but absolutely no data)
    - Footers
      - docs no page
      - policy no page
      - contract no page
    - Strategies
      - Strategy (basic page created)
  - Layout.tsx
    - custom component for App page

# Strategies Folder

- FirstParagraph.tsx
  - First part of the page, has animation but it does not currently trigger. Needs to add svg
- SecondParagraph.tsx
  - First part of the page, has animation but it does not currently trigger. Needs to add svg
- ThirdParagraph.tsx
  - has animation but it does not currently trigger. Needs to add svg, is just plain text does not define anything
- Team-Section.tsx
  - has animation but it does not currently trigger. Needs to add svg, maps each team member to the page, with their description.
- team-section-config.tsx
  - file which the team members and their descriptions are imported from/defined.
- index.tsx
  - imports the components: FirstParagraph.tsx, SecondParagraph.tsx, ThirdParagraph.tsx to create the format for home page
- Icons
  - Imports Dai, USDC, USDT token logo and creates a dynamic import use case template in IconUtils.tsx
- Strategies
  - strategies-config.tsx
  - TrancheCard.tsx
    - Template for each strategy view on the Strategies page, using props: name, tokenExposure, URL, protocolsExposure
  - utils.tsx

# Pages/

- dapp/Strategies
  - the code renders a Strategies dashboard page with a dynamic section height, text description, tranche cards, and an image background.
- dapp/strategies/ (A,B,C)
  - creates the strategies cards importing the details of the strategy from strategies-config.ts

# Hooks/

- checks to see if the window is on mobile or a web browser and resizes your screen accordingly

## Specs

- Add a link for DOCS to be redirected to gitbook in the front page.
- Implement background animations for the front page using the SVGs located in design/finished_elements. The SVGs are broken down into individual lines to create a modular animation effect. The aim is to produce a liquid/flow/sea-like animation.
- Add Team member detail, semi anon with twitter links & pfp
