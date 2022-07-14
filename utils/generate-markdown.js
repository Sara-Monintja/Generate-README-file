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


## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#License)
- [Contributing](#contributing)
- [Questions](#Questions)


## Installation

To install the application:
  - Simply clone the code


## Usage

After cloning the code:
  - Open the code in VS Code
  - Navigate to index.js
  - Navigate to terminal by right clicking on Index.js file
  - In terminal, install npm packages and also npm inquirer
  - In terminal, type ' node index.js '
  - Answer each questions
  - Navigate to Output folder, where the Markdown file is generated


## License 

This application is based on MIT License by default


## Contributing

Contribution is what make a great community. Any contributions you make are greatly appreciated.
For suggestion that would make this better, simply fork the repo and create a pull request. Thank You!
  - Fork the project
  - Create your future branch
  - Commit your changes
  - Push to the branch
  - Open a Pull Request
  
  
## Questions 

- How to reach me? 
[${email}](mailto:${email})


- Want to see more from me?
[${github}](https://github.com/${github})
`;
}

module.exports = generateMarkdown;
