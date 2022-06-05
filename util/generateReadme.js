const generateReadme = (data) => {
  return ` 
# ${data.projectTitle}

![badge](https://img.shields.io/badge/license-${data.license}-orange)<br />

# Description: 
${data.description}

# Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributors](#contributors)
* [Tests](#tests)
* [Questions](#questions)

# Installation:
${data.installation}
# Usage: 
${data.usage}
# License:
![badge](https://img.shields.io/badge/license-${data.license}-orange)
<br />
This application is covered by the ${data.license} license. 
# Contributors 
${data.contributors}
# Tests:
${data.tests}
# Questions:
Github Profile: [Github Profile](https://github.com/${data.username})
<br>
Email me at: ${data.email}

`;
};

// exports the Readme info from the userinput
module.exports = generateReadme;
