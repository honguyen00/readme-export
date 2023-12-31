const licenses = {
  "Apache 2.0 License": {
    badge: "https://img.shields.io/badge/License-Apache_2.0-blue.svg",
    link: "https://opensource.org/licenses/Apache-2.0"
  },
  "Boost Software License 1.0": {
    badge: "https://img.shields.io/badge/License-Boost_1.0-lightblue.svg",
    link: "https://www.boost.org/LICENSE_1_0.txt"
  },
  "BSD 3-Clause License": {
    badge: "https://img.shields.io/badge/License-BSD_3--Clause-blue.svg",
    link: "https://opensource.org/licenses/BSD-3-Clause"
  },
  "Eclipse Public License 1.0": {
    badge: "https://img.shields.io/badge/License-EPL_1.0-red.svg",
    link: "https://opensource.org/licenses/EPL-1.0"
  },
  "GNU GPL v3": {
    badge: "https://img.shields.io/badge/License-GPLv3-blue.svg",
    link: "https://www.gnu.org/licenses/gpl-3.0"
  },
  "GNU GPL v2": {
    badge: "https://img.shields.io/badge/License-GPL_v2-blue.svg",
    link: "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html"
  },
  "GNU AGPL v3": {
    badge: "https://img.shields.io/badge/License-AGPL_v3-blue.svg",
    link: "https://www.gnu.org/licenses/agpl-3.0"
  },
  "GNU LGPL v3": {
    badge: "https://img.shields.io/badge/License-LGPL_v3-blue.svg",
    link: "https://www.gnu.org/licenses/lgpl-3.0"
  },
  "GNU FDL v1.3": {
    badge: "https://img.shields.io/badge/License-FDL_v1.3-blue.svg",
    link: "https://www.gnu.org/licenses/fdl-1.3"
  },
  "IBM Public License Version 1.0": {
    badge: "https://img.shields.io/badge/License-IPL_1.0-blue.svg",
    link: "https://opensource.org/licenses/IPL-1.0"
  },
  "ISC License": {
    badge: "https://img.shields.io/badge/License-ISC-blue.svg",
    link: "https://opensource.org/licenses/ISC"
  },
  "The MIT License": {
    badge: "https://img.shields.io/badge/License-MIT-yellow.svg",
    link: "https://opensource.org/licenses/MIT"
  },
  "Mozilla Public License 2.0": {
    badge: "https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg",
    link: "https://opensource.org/licenses/MPL-2.0"
  },
}

// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license != 'No license') {
    return `[![License: Open Font-1.1](${licenses[license].badge})](${licenses[license].link})`
  }
  return '';
}


// Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license, link) {
  if (license != 'No license') {
    return (
`## License
This project is available under ${license}
- See [LICENSE](${link.trim()})<br/>
- For questions about forking our project and more, refer to [Questions](#questions)`);
  }
  return '';
}

// A function to generate markdown for README
function generateMarkdown(data) {
  const licenseSection = renderLicenseSection(data.license, data.link)
  return (
`# ${data.title}

## Description
${data.description}<br/>

${renderLicenseBadge(data.license)}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation.trim()}

## Usage
${data.usage.trim()}

${licenseSection.trim()}

## Contributing 
${data.contributing.trim()}

## Tests
${data.tests.trim()}

## Questions
If you have any questions and need to contact me, feel free to reach out at ${data.email.trim()}.<br/>
Or visit my [Github](https://github.com/${data.username.trim()}) for more information.
`);
}

module.exports = generateMarkdown;
