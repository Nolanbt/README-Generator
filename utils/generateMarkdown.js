// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.Title}
  
  ## GitHub Username:
  ${data.Username}

  ## Email: 
  ${data.Email}

  ## Table of Contents
  * [Description](###Description)
  * [License](###License)
  * [Installation](###Installation)
  * [Tests](###Tests)
  * [Usage](###Usage)
  * [Contributions](###Contributions)

  ### Description
  ${data.Description}

  ### License
  ${data.License}

  ### Installation
  ${data.Installation}

  ### Tests
  ${data.Tests}

  ### Usage
  ${data.Usage}

  ### Contributions
  ${data.Contribution}
`;
}

module.exports = generateMarkdown;
