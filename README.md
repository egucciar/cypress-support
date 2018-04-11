# Cypress Repro Repo

simple Cypress Repro Repo

For run, note the Cypress.json required a setting [as per this issue](https://github.com/julianburr/cypress-match-screenshot/issues/7)

# OS Specs

macOS 10.13.1

Also linux server on CircleCI - need to confirm the exact spec

# Before Running

Take a look at **cypress/screenshots/diff** for an example "false negative" diff.


# How to

## install and run

Npm or Yarn

```
yarn
yarn start
yarn cypress:open
```

## what to do for open

1. Run example_spec once to allow base screenshots to be captured
2. Run this example again to see base screenshots to be matched against latest screenshots
3. Resize the window by a margin to see a diff (Note: resizing is straight forward - doesnt need to be for specific dimensions. Fairly easy to reproduce just by resizing from large to smaller window, or docking the UI from a big monitor into a small monitor)

## what to do for run

In my case I ran this in CircleCI and false negatives were created in that enviroment. Its a linux enviroment, but speced out a little less nicely than my Mac. 

Currently to fix the issue i am saving the images stored by the CI in the repo (in my company's repo). This works since runtimes and specs between circle runs are basically guarenteed.

# Issues

* changing resolution between runs creates false results :(