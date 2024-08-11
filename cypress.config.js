const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    viewportWidth: 1280,
    viewportHeight: 720,
    video: true,
    videosFolder: 'videos',
    screenshotsFolder: 'screenshoots',
    retries: {
      runMode: 2,
      openMode: 3
    }
  },
});
