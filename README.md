# **About**

A fast / easy / production ready Next.js boilerplate.Include a easy fast development ui kit [esducad-ui](https://github.com/emresandikci/esducad-ui), linter, commit linter, prettier, styled-component

#

# Please read this section before start to development.

> First of all you have to install these plugins to your editor (**vscode**), but if you are using an another code editor or IDE install them for your dev environment

- [Styled Component Syntax highlighting for VS Code](https://marketplace.visualstudio.com/items?itemName=jpoissonnier.vscode-styled-components)

- [ESLint Plugin for VS Code](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

- [Prettier - Code formatter for VS Code](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

- [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)

If you don't use one of these Code Editor/IDE [please check is your EDITOR/IDE exist or not](https://editorconfig.org/#download) please install Editor Config plugin for your Code Editor/IDE.

# Linter / Commit Messages

While developing this library you should take an attention to linter rules, all of your codes and commit messages, because you can't do any development without checking by rules.

<span style="color:red;">**Notice:**</span> Before commit to changes, [HuskyJs](https://github.com/typicode/husky) checking these commit messages / linter rules

If you get a lint's error when you commiting a message, you can check for [eslint](https://eslint.org/docs/user-guide/getting-started) linter rules or if you get an error because of your commit message you can check below commit message types and examples or you can check from [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/).

**Commit-lint Types**

**Examples:**

```bash
git commit -m "feat: navbar component added"
```

```bash
git commit -m "docs(Readme): server link added"
```

- **build:** Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
- **ci:** Changes to our CI configuration files and scripts (example scopes: Circle, BrowserStack, SauceLabs)
- **chore:** Updating packages,build project etc. (no production code change)
- **docs:** Documentation only changes
- **feat:** A new feature
- **fix:** A bug fix
- **perf:** A code change that improves performance
- **refactor:** A code change that neither fixes a bug nor adds a feature, when refactoring a production code, eg. renaming a variable.
- **revert:** A commit revert message
- **style:** Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- **test:** Adding missing tests or correcting existing tests
