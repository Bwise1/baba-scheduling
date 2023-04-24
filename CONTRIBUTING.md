<!-- omit in toc -->

# Contributing to baba scheduling Web App

## IMPORTANT!!! : OPEN YOUR PULL REQUESTS ON `dev` BRANCH

## I Want To Contribute

In order to contribute to this project, the entire process follows the following structure

- You identify a feature you want to work on, or is assigned to you.
- You make changes that solves this issue, you then write tests (Where required) and ensure that it passes.
- You open a pull request, which will be reviewed by javascript baba, and merged if it checks the right boxes.

## Editor setup

We're using eslint for tsx linting, and prettier for code formating, make sure you install eslint and prettier plugins in your editor so you can
see linting errors as you code and have your code formatted on save by prettier. If formatOnSave doesn't work please google how to set up
format on save for the eslint & prettier plugins in your editor 🙃

#### First Time Contributing?

Everyone was a beginner at a point, and it goes without saying that, to become a master, you need to be a learner. Therefore, if this is your first time contributing, relax, read the following instructions and I promise you won't mess things up.

So here is a run down of how you would go about contributing:

- #### Clone a copy of Repository to your local machine

  The first thing you will want to do is clone [this](https://github.com/Bwise1/baba-scheduling.git) repository. checkout to a branch of your choice from the dev branch, make your desired changes, push to the repo, make your PR, sip your cup of coffee and let Baba review your PR

- #### Clone the Repository on your Local Machine

  The first thing you will want to do is clone [this](https://github.com/Bwise1/baba-scheduling.git) repository to your local machine (Laptop, PC, MacBook). To do that,

  - click on the link above.
  - Open the folder you want to work on your machine.
  - Open your favourite editor.
  - Open the terminal.
  - run `git clone https://github.com/Bwise1/baba-scheduling.git`.

- #### Commiting your changes

  Now, you can start making changes that relates to your issues and then commiting them. To do this, follow these instructions:

  - First, create a branch with the feat prefixing the name of the feature you are to implement.
  - For example, do this by running `git checkout -b feat/signup`
  - Make your changes.
  - add the changes using `git add .` or any one that serves your needs.
  - add concise commit messages
    > e.g `git commit -m "adds signup button to the sign up page"`
  - run `git pull origin dev`
    > this is to update your branch with recent update from dev branch
  - run `git push origin [name of the branch you created]`
    > For the example above, you run
    > `git push origin feat/signup`
    >
    > Which pushes your changes to the online copy, after which you then open a pull request.

- #### Opening Pull requests

  Now that you have pushed your changes to the repo. You will need a way to inform the baba that your contribution is ready. To do that, you open a Pull request, which simply means that you want baba to combine(merge) your changes with the live updates. Because, what is the essence of making changes without the changes being merged right?

  To open a pull request, immediately after the last step (commiting your changes with push):

  - Head over to your github account. And click on the repo link.
  - go to your new branch, You will see the option to open a pull request.
  - Create your pull request with a meaninful title about your changes
  - Explain what your changes does, adding images and proof (test) if needed.
  - Click the open pull request button and wait.
  - Add comments where neccesary and wait for baba to check.

## Styleguides

We advocate for clean code and well structured codes. It is easier said than done, which is why there are linting configurations set up in the repository. Endeavour to keep the code you write clean and maintainable. Software is not only a science, but also an art.

### Commit Messages

Commit messages should include concise messages about what was done and what has changed. Failure to follow this would result in the pull request being rejected.

## Other Information

- Make sure you lint your code properly.
- Please make sure your commit messages and pr titles give enough info about the changes you've made.
