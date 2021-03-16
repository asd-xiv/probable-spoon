# Probable Spoon

> 8bit diagrams

Monorepo gluing all application parts, _specific_ or _reusable_, each in it's own repository, imported using Git modules.

* :godmode: Composition - Encourage package based development. The application is the sum of it's parts.
* :rocket: High-order CI - Entry point for production deployment. Component changes should trigger production deployments.
* :lock: Private - Lerna links all packages, indifferent of published or repository visibility status.
* :recycle: Disposable - Monorepo removal should not bring structural changes to the application. It only automates maintenance tasks, like "npm link" calls, and keeps the packages glued.

## Table of contents

<!-- vim-markdown-toc GFM -->

* [Tools](#tools)
* [Development](#development)
  * [Git related](#git-related)
* [Components](#components)
  * [Specific](#specific)
  * [Reusable](#reusable)
* [Random tips](#random-tips)
* [Changelog](#changelog)

<!-- vim-markdown-toc -->

## Tools

* :dragon: [Lerna](https://github.com/lerna/lerna): run scripts across multiple repositories and automatic package linking for fast local development.
* :octopus: [Git Submodules](https://git-scm.com/book/en/v2/Git-Tools-Submodules): allow each component it's own code, scripts, issues, history etc. Can easily move thought commits and deploy custom version.

## Development

1. Clone repo with all submodules

```bash
git clone --recurse-submodules git@github.com:asd-xiv/probable-spoon.mono.git
```

2. Link all submodules/packages defined in `lerna.json` and start Webpack dev server

```bash
# "start": "lerna bootstrap && cd ./main.webapp && npm run start"
npm run start
```

3. Build and watch all submodules

```bash
# "build:deps:watch": "lerna bootstrap && lerna run --scope '@asd14/*' --parallel build:watch",
npm run build:deps:watch
```

### Git related 

* Add submodule

```bash
git submodule add <remote_url> <destination_folder>
```

* Remove repo

```bash
# Remove submodule entry from .git/config
git submodule deinit -f -- path/to/submodule

# Remove the submodule folder from main project's .git/modules
rm -rf .git/modules/path/to/submodule

# Remove entry in .gitmodules and remove submodule folder
git rm -f a/submodule
```

## Components

### Specific

* [ui] [main.webapp](https://github.com/asd-xiv/probable-spoon.webapp): React frontend
* [api] [main.api-auth](https://github.com/asd-xiv/probable-spoon.api-auth): Authentication & Authorization
* [api] [main.api-diagrams](https://github.com/asd-xiv/probable-spoon.api-diagrams): Diagrams and Models

### Reusable

* [core] [@asd14/eslint-config](https://github.com/asd-xiv/eslint-config): ESLint rules
* [core] [@asd14/m](https://github.com/asd-xiv/m): Point free style, functional Javascript library
* [ui] [@asd14/react-hooks](https://github.com/asd-xiv/react-hooks): Custom reusable React Hooks
* [ui] [@asd14/gruvbox-ui](https://github.com/asd-xiv/gruvbox-ui): Gruvbox React UI components
 
## Random tips

* [Naming conventions that work](https://github.com/kettanaito/naming-cheatsheet)
* [Hierarchical Model-View-Controller](https://en.wikipedia.org/wiki/Hierarchical_model%E2%80%93view%E2%80%93controller)
* Better repeat yourself than a wrong abstraction.
* Don't fix imaginary future problem.
* Extract code in libraries and [unit test](https://github.com/ericelliott/riteway). `App` = `library1` + `library2` + `component1` + ... + `componentN`
* Mocking takes time to setup and keep in sync. Don't mock, [E2E](https://devexpress.github.io/testcafe/) [test](https://nightwatchjs.org/).

## Changelog

See the [releases section](https://github.com/asd-xiv/probable-spoon/releases) for details.
