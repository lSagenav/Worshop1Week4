const { v4: uuidv4 } = require('uuid');

/**
 * Create a random uuid
 * @returns {string} uuid
 */
const uuid = () => {
  return uuidv4();
}

module.exports = { uuid };