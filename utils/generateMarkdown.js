function generateMarkdown(data) {
  return `
  # ${data.projectTitle}

  ![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)<br />

  ## Description
  ${data.description}

  ## Table of Contents
  * [Description](#description)
  * [Insallation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)
  

  ## Contributing 
  ${data.contributing}

  ## Tests
  ${data.tests}

  ### Questions
  * Find me on GitHub: [${data.username}](https://github.com/${data.username})<br />
  * Email me with any questions: ${data.email}<br />

`;
}

module.exports = generateMarkdown;
