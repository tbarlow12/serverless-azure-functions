'use strict';

// mock to test functionality in a command unrelated matter
// this mean that not e.g. azureDeploy but the more abstract azureCommand can be used
class AzureCommand {
  constructor(serverless, options, testSubject) {
    this.options = options;
    this.serverless = serverless;
    this.provider = this.serverless.getProvider('azure');

    Object.assign(
      this,
      testSubject);
  }
}

module.exports = AzureCommand;