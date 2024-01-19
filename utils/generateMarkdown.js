// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  # Table of Contents
  1. [Description](#description)
  2. [Installation](#installation)
  3. [Usage](#usage)
  4. [License](#license)
  
  
  ## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## License
${data.license}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
${data.questions}
`;
  /* return data; */
}

module.exports = generateMarkdown;
