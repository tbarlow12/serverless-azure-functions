'use strict';
const sinon = require('sinon');
const fs = require('fs');
const os = require('os');
const Serverless = require('../test/serverless');
const AzureProvider = require('./azureProvider');

describe('Azure Provider', () => {

    let serverless;
    let azureProvider;
    let setProviderStub;
    let homedirStub;
    let readFileSyncStub;

    const functionAppName = 'myFunctionApp';
    const resourceGroupName = 'my-resource-group';
    const deploymentName = `${resourceGroupName}-deployment`

    beforeEach(() => {
        serverless = new Serverless();
        serverless.version = '1.0.0';
        serverless.service = {
            service: functionAppName,
            provider: {
                resourceGroup: resourceGroupName,
                deploymentName
            }
        }
        setProviderStub = sinon.stub(serverless, 'setProvider').returns();
        readFileSyncStub = sinon.stub(fs, 'readFileSync')
            .returns('{"client_email": "foo@bar.com","private_key": "wasdqerty"}');
        homedirStub = sinon.stub(os, 'homedir');
    });

    afterEach(() => {
        serverless.setProvider.restore();
        fs.readFileSync.restore();
        os.homedir.restore();
    });

    describe('#constructor()', () => {
        azureProvider = new AzureProvider(serverless);
        azureProvider.initialize(serverless, )
        
    });

    describe('#initialize()', () => {
        it('initializes provider', () => {
            azureProvider.initialize
        });
    });

    describe('#getParsedBindings()', () => {
        it('gets parsed bindings', () => {
            
        });
    });

    describe('#Login()', () => {

    });

    describe('#CreateResourceGroup', () => {

    });

    describe('#CreateFunctionApp', () => {

    });

    describe('#DeleteDeployment', () => {

    });

    describe('#DeleteResourceGroup', () => {

    });

    describe('#getAdminKey', () => {

    });

    describe('#pingHostStatus', () => {

    });

    describe('#isExistingFunctionApp', () => {

    });

    describe('#getDeployedFunctionsNames', () => {

    });

    describe('#getLogsStream', () => {

    });

    describe('#getInvocationId', () => {

    });

    describe('#getLogsForInvocationId', () => {

    });

    describe('#invoke', () => {

    });

    describe('#syncTriggers', () => {

    });

    describe('#runKuduCommand', () => {

    });

    describe('#cleanUpFunctionsBeforeDeploy', () => {

    });

    describe('#deleteFunction', () => {

    });

    describe('#uploadPackageJson', () => {

    });

    describe('#createEventsBindings', () => {

    });

    describe('#uploadFunction', () => {

    });    
});
