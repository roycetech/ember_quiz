# Overview

This is based on code school watch me build quiz app.


## Steps to Build

1. Generate blueprint via CLI
   - Update `.gitignore` to exclude `.DS_Store`
2. Download assets from github.
3. Copy styles to `app/styles` renaming application.css to `app.css`
4. Edit the `application.hbs`
5. Update the link to home.
6. Generate the `polls` route
7. generate the `polls\poll` using `$ ember generate route polls/poll --path ":poll_id"`
8. Generate polls result `$ ember generate route polls/poll/results`
9. Add ember extension from Chrome App Extensions.
10.  Copy the 3 mock up files to the ember application.
11. Update the button links
12. Create models _poll_, _option_, and _vote_ manually to avoid using ember data.
13. Generate the store service
14. Implement the `findAllPolls()` and use it in the `polls` route.
15. Implement the `polls.hbs`
16. Implement `polls/poll/index.hbs` and `polls/poll/results.hbs`
17. Implement the voting by creating a new route manually `polls/poll/index.js`
18. Create a new route index.js and return `Vote` as the model
19. Update the `polls/poll/index.hbs` to get the polls via the new Vote model.
20. `$ ember install ember-cli-format-number`

## Features

- custom eq helper


## Issues

- Naming a project with underscore character, it will be converted to hyphen in code.


# ember-quiz

This README outlines the details of collaborating on this Ember application.
A short introduction of this app could easily go here.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Bower](https://bower.io/)
* [Ember CLI](https://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* `cd ember-quiz`
* `npm install`
* `bower install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
