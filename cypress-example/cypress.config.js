const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    // Specifies the base URL for your tests
    baseUrl: 'https://example.cypress.io',
    
    // Path to test files
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    
    // Disables the support file if you're not using it
    supportFile: false,
    
    // Adjust this to where your fixtures are located, if you use any
    fixturesFolder: 'cypress/fixtures',
    
    // Additional configurations can be added here as needed
    // For example, to disable video recording:
    // video: false,
    
    // To set up environment variables:
    // env: {
    //   name: 'value'
    // }
  },

  // Configure retries for failed tests - optional
  retries: {
    runMode: 2, // Retry failed tests on CI twice
    openMode: 0, // Do not retry failed tests when running interactively
  },
  
  // Additional global configurations can be placed outside the e2e object
  // For example, configuring viewport size for all tests:
  // viewportWidth: 1280,
  // viewportHeight: 720,
});
