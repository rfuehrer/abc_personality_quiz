# ABC Personality Quiz - work in progress

A simple quiz built with HTML, CSS, JavaScript.

## Notes

The repository is being prototyped as part of an agile MVP. For this reason, we would like to point out that requests, issues and PRs are not always answered promptly.

## Purpose

With the help of this project we support our Agile Base Camp (ABC) in an internal marketing campaign to recruit new colleagues as members of the agile teams in the Agile Base Camp. The quiz is based on the way classic personality tests from newspapers work. In this format, answers are assigned to letters and by counting the letters of answered questions, a categorization is made (depending on the test).

With the help of this test we would like to recruit interested colleagues to join one of the teams by answering a few questions. Marker questions can be used to determine whether one's own attitudes to the questions match the attitudes of one of the teams. In the sense of a matching process, common interests and ways of acting can thus be brought together.

## Technical information

### Browser Support

* Chrome
* Firefox
* Safari
* Opera - Basic Functionality
* IE

### Used technology

This quiz is built using Javascript, HTML & CSS. Currently the application offers very basic functionality.

## Test repo via Heroku

This is a quick description explaining how to get a static website hosted on Heroku.

### Why do this?

Heroku hosts *apps* on the internet, not static websites. To get it to run your static portfolio, personal blog, etc., you need to trick Heroku into thinking your website is a PHP app. This 6-step tutorial will teach you how this is done in this repo.

### Preperation

1. Add a file called *composer.json* to the root directory by running `touch composer.json`
2. In *composer.json*, add the following content: `{}`
3. Add a file called *index.php* to the root directory by running `touch index.php`
4. Rename the original homepage (e.g. index.html) to *home.html*
5. In *index.php*, add the following line: `<?php include_once("home.html"); ?>`
6. Run `git push heroku master`

**Note:** Step 4. is necessary to avoid possible conflicts in prioritizing the display of index.html and index.php.

### Test
Done! Visit your deployed single-page website, hosted by Heroku (as a fake PHP app). Within Github you a reference is displayed within the `Environment` section (if set to visible).

## Authors

* **Evans Dube** - (https://github.com/edubz99)
* **R. Fuehrer** - (https://github.com/rfuehrer)

## Kudos

Orginal repo published by Evans Dube (https://github.com/edubz99/Simple-Personality-Quiz)

Instructions how to host a static webpages at Heroku by 
wh1tney (https://gist.github.com/wh1tney/2ad13aa5fbdd83f6a489.js)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
