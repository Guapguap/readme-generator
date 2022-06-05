const generateReadme = (data) => {
  return ` ${data.projectTitle}

# Github Username and Email
${data.username}
${data.email}

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
# Usage 
${data.usage}
# License:
This project is license under ${data.license}
# Contributors 
${data.contributors}
# Tests:
${data.tests}
# Questions
${data.questions}
`;
};

// exports the Readme info from the userinput
module.exports = generateReadme;
