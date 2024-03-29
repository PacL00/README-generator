// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "none") {
    return `![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "none") {
    return `https://choosealicense.com/licenses/${license}/`
  }
  return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "none"){
    return `## license
  This repo is using the ${license} license. View the full license [here](${renderLicenseLink(license)})` 
  }
  return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Table of contents
  * [installation](#installation)
  * [usage](#usage)
  * [contribution](#contribution)
  * [tests](#tests)
  * [questions](#questions)
  * [license](#license)
  ## description
  ${data.description}
  ## application URL
  ${data.link}
  ## screenshot
  ![alt-text](${data.screenshot})
  ## instalation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## contribution
  ${data.contribution}
  ## tests
  ${data.tests}
  ## questions
  send any questions [here](mailto:${data.email}?subject=[Github]question) or visit [github/${data.creator}](https://github.com/${data.creator}).
  
  ${renderLicenseSection(data.license)}
  
`;
}

module.exports = generateMarkdown;
