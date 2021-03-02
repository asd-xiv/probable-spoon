# Probable Spoon Monorepo

> Treating an application as the sum or composition of it's components. Components can be independent, and used in other configurations, or specific to this context. 

## This monorepo

* :godmode: Improves local development by encouraging splitting and composition of packages.
* :rocket: Is a "higher-order" repository with CI level responsibilities. Commits to individual repositories will not trigger CI deployments.
* :lipstick: Does not have it's own code, only manages other repositories.

## Tools used

* [Lerna](https://github.com/lerna/lerna) - run scripts across multiple repositories and automatic package linking for fast local development.
* [Git Submodules](https://git-scm.com/book/en/v2/Git-Tools-Submodules): allow each component it's own code, scripts, issues, history etc. Can easily move thought commits and deploy custom version.

## Reusable components

* [@asd14/eslint-config](https://github.com/asd-xiv/eslint-config) - ESLint rules
* [@asd14/react-hooks](https://github.com/asd-xiv/react-hooks) - Custom reusable React Hooks
* [@asd14/gruvbox-ui](https://github.com/asd-xiv/gruvbox-ui) - Gruvbox React UI components

## Own components

* [probable-spoon.webapp](https://github.com/asd-xiv/probable-spoon.webapp) - React frontend
* [probable-spoon.api-auth]() - Node.js Authentication & Authorization API
