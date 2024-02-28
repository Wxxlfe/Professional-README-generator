// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const licenses = {
  'MIT': {
    badge: `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`,
    link: `[MIT](https://opensource.org/licenses/MIT)`
  },
  'Apache': {
    badge: `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`,
    link: `[Apache](https://opensource.org/licenses/Apache-2.0)`
  },
  'GPL': {
    badge: `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`,
    link: `[GPL](https://www.gnu.org/licenses/gpl-3.0)`
  },
  'BSD': {
    badge: `[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`,
    link: `[BSD](https://opensource.org/licenses/BSD-3-Clause)`
  }
};

function renderLicenseBadge(license) {
  return licenses[license] ? licenses[license].badge : '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return licenses[license] ? licenses[license].link : '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return license === 'None' ? '' : `## License\nThis project is licensed under the ${renderLicenseLink(license)} license.`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}
## Description
${data.description}
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contribution](#contribution)
* [Tests](#tests)
* [Questions](#questions)
     
## Installation
${data.installation}
  
## Usage
${data.usage}
  
${renderLicenseSection(data.license)}
  
## Contribution
${data.contribution}
  
## Tests
${data.test}
  
## Questions
Questions?  Email me at ${data.email} or visit my [${data.github}](GitHub):`;
}

module.exports = generateMarkdown;