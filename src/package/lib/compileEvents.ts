import { all } from "bluebird"
import { utils } from '../../shared/utils';

export default function compileEvents() {
  const createEventsPromises = [];

  this.serverless.service.getAllFunctions().forEach((functionName) => {
    const metaData = utils.getFunctionMetaData(functionName, this.provider.getParsedBindings(), this.serverless);

    createEventsPromises.push(this.provider.createEventsBindings(functionName, metaData.entryPoint, metaData.handlerPath, metaData.params));
  });

  return all(createEventsPromises);
};

