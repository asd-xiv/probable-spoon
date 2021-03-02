# Probable Spoon

> An 8bit diagramming tool.

<!-- vim-markdown-toc GFM -->

* [Development](#development)
  * [Monorepo](#monorepo)
  * [Tools](#tools)
  * [Reusable components](#reusable-components)
  * [Own components](#own-components)
* [Changelog](#changelog)

<!-- vim-markdown-toc -->

## Development

Treating the application as the sum of it's components. Components can be independent, reusable in other applications.

```bash
git clone --recurse-submodules git@github.com:asd-xiv/probable-spoon.mono.git
```

### Monorepo

* :godmode: Encourages splitting functionalities and package composition.
* :rocket: Is a "higher-order" repository with CI level responsibilities. Individual repositories changes should not not trigger CI deployments.
* :recycle: A good monorepo is a disposable monorepo. The removal should not bring structural changes to the application, it should optimize and automate maintenance tasks, like "npm link" calls, and keep the packages glued.

### Tools

* [Lerna](https://github.com/lerna/lerna): run scripts across multiple repositories and automatic package linking for fast local development.
* [Git Submodules](https://git-scm.com/book/en/v2/Git-Tools-Submodules): allow each component it's own code, scripts, issues, history etc. Can easily move thought commits and deploy custom version.

### Reusable components

* [@asd14/eslint-config](https://github.com/asd-xiv/eslint-config): ESLint rules
* [@asd14/react-hooks](https://github.com/asd-xiv/react-hooks): Custom reusable React Hooks
* [@asd14/gruvbox-ui](https://github.com/asd-xiv/gruvbox-ui): Gruvbox React UI components

### Own components

* [probable-spoon.webapp](https://github.com/asd-xiv/probable-spoon.webapp): React frontend
* [probable-spoon.api-auth](https://github.com/asd-xiv/probable-spoon.api-auth): Node.js Authentication & Authorization API

## Changelog

See the [releases section](https://github.com/asd-xiv/probable-spoon/releases) for details.
