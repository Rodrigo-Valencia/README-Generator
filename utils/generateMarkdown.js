function generateMarkdown(data) {
  return `
  <h1 align="center">${data.prjectTitle} </h1>

  ![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)<br />

  ## Description
  ${data.description}

  ## Table of Contents
  - [Description](#description)
  - [Insallation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ! [badge](https://img.shields.io/badge/license-${data.license}-brightgreen)
  

  ## Contributing 
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  ${data.questions}

  Email me with any questions: ${data.email}

`;
}

module.exports = generateMarkdown;
