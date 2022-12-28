const path = require('path')

module.exports = {
  twin: {
    config: path.resolve(__dirname, 'packages/config/tailwind-config/tailwind.config.js'),
    preset: "styled-components"
  }
}
