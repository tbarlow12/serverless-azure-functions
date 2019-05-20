import {join} from 'path';
import {all} from 'bluebird'

export default function uploadFunctions () {
  const createFunctionPromises = [];

  this.serverless.service.getAllFunctions().forEach((functionName) => {

    createFunctionPromises.push(this.provider.uploadFunction(functionName)
      .then(() => this.provider.runKuduCommand('mv '+ join(functionName, functionName +'-function.json') +' '+ join(functionName, 'function.json'))));
  });

  return all(createFunctionPromises)
          .then(() => this.provider.syncTriggers());
};
