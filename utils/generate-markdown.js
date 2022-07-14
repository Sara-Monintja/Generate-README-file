function generateLicenseBadge(license){
  const licenseName = encodeURIComponent(license.replace('-', ' '))

  return `![${license}-licensed](https://img.shields.io/badge/license-${licenseName}-green)`
}
function generateMarkdown({ 
  title,
  license,
  github,
  email
}) {
  return `

# ${title}

${generateLicenseBadge(license)}


## Description

An instant professional readme file markdown generator, that is completed based on user input through the terminal.

The application will be invoked by using the following command on the terminal:

## Table of Contents

- [Installation](#installation)
- [License](#license)
- [Contributing](#contributing))
- [Tests](#tests)
- [Questions](#Questions)

## Installation
To install the application:
  - Simply clone the code
  - Open VS Code, and create a folder 
  

  
## Questions 

- How to reach me? 
[${email}](mailto:${email})


- Want to see more from me?
[${github}](https://github.com/${github})
`;
}

module.exports = generateMarkdown;
