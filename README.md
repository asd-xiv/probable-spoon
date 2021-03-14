# Probable Spoon

> 8bit diagramms

<!-- vim-markdown-toc GFM -->

* [Development](#development)
  * [Monorepo](#monorepo)
  * [Tools](#tools)
  * [Reusable components](#reusable-components)
  * [Own components](#own-components)
* [npm scripts](#npm-scripts)
* [Cheat sheet](#cheat-sheet)
* [Changelog](#changelog)

<!-- vim-markdown-toc -->

## Development

Treating `probable-spoon` application as the sum of it's parts/components. Components should be independent and reusable in other applications.

```bash
git clone --recurse-submodules git@github.com:asd-xiv/probable-spoon.mono.git
```

### Monorepo

* :godmode: Encourages splitting functionalities and package composition.
* :rocket: A "high-order" repository with CI level responsibilities. Individual repositories changes should not not trigger CI deployments.
* :recycle: A good monorepo is a removeable monorepo. The removal should not bring structural changes to the application. It only optimizes and automates maintenance tasks, like "npm link" calls, and keep the packages glued.

### Tools

* [Lerna](https://github.com/lerna/lerna): run scripts across multiple repositories and automatic package linking for fast local development.
* [Git Submodules](https://git-scm.com/book/en/v2/Git-Tools-Submodules): allow each component it's own code, scripts, issues, history etc. Can easily move thought commits and deploy custom version.

### Reusable components

* [@asd14/eslint-config](https://github.com/asd-xiv/eslint-config): ESLint rules
* [@asd14/react-hooks](https://github.com/asd-xiv/react-hooks): Custom reusable React Hooks
* [@asd14/gruvbox-ui](https://github.com/asd-xiv/gruvbox-ui): Gruvbox React UI components
* [@asd14/m](https://github.com/asd-xiv/m): Point free style, functional Javascript library

### Own components

* [main.webapp](https://github.com/asd-xiv/probable-spoon.webapp): React frontend
* [main.api-auth](https://github.com/asd-xiv/probable-spoon.api-auth): API for Authentication & Authorization

## npm scripts

* Link all submodules/packages defined in `lerna.json` and start Webpack dev server

```bash
# "start": "lerna bootstrap && cd ./main.webapp && npm run start"
npm run start
```

* Build and watch all submodules (run the `build:watch` script of all submodules that have the script defined)

```bash
# "build:deps:watch": "lerna bootstrap && lerna run --scope '@asd14/*' --parallel build:watch",
npm run build:deps:watch
```

## Cheat sheet

* Add submodule

```bash
git submodule add <remote_url> <destination_folder>
```

* Remove repo

```bash
```

## Changelog

See the [releases section](https://github.com/asd-xiv/probable-spoon/releases) for details.
