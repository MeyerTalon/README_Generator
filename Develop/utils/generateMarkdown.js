// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT License') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  } else if (license === 'Apache 2.0 License') {
    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  } else if (license === 'ISC License') {
    return '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)';
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT License') {
    return 'https://opensource.org/licenses/MIT';
  } else if (license === 'Apache 2.0 License') {
    return 'https://opensource.org/licenses/Apache-2.0';
  } else if (license === 'ISC License') {
    return 'https://opensource.org/licenses/ISC';
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'MIT License') {
    return `## License

License Link: ${renderLicenseLink(license)}

This program is protected under the MIT License and all users/distributors must comply with the MIT License parameters. Refer to the link above for further detail.`;
  } else if (license === 'Apache 2.0 License') {
    return `## License

License Link: ${renderLicenseLink(license)}
    
This program is protected under the Apache 2.0 License and all users/distributors must comply with the Apache 2.0 License parameters. Refer to the link above for further detail.`;
  } else if (license === 'ISC License') {
    return `## License

License Link: ${renderLicenseLink(license)}
        
This program is protected under the ISC License and all users/distributors must comply with the ISC License parameters. Refer to the link above for further detail.`;
  } else {
    return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

## Description
    
${data.description}
     
## Installation

${data.installation}
  
## Usage
      
${data.usage}
  
## Contributing
  
${data.constribute}
  
## Tests
  
${data.test}

${renderLicenseSection(data.license)}`;

}

module.exports = generateMarkdown;