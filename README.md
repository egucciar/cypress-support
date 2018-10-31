# Cypress Repro Repo

Simple Cypress Repro Repo

> **WARNING** Run `yarn` AFTER `git checkout <branch>` so you get the 
dependencies required for the specific reproducer branch

* [Local Storage not clearing](https://github.com/egucciar/cypress-support/tree/local-storage)
* [ESM In Node Modules not working](https://github.com/egucciar/cypress-support//tree/lodash-es)
* [Visual Diffing issues](https://github.com/egucciar/cypress-support/tree/visual-diff)

# How to

## install and run [per branch]

Npm or Yarn

```
git checkout <branch>
yarn
yarn start
yarn cypress:open
```

# OS Specs

macOS 10.13.1

Linux CircleCI node base 8