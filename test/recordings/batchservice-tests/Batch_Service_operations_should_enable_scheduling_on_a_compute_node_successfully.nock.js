// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_BATCH_ACCOUNT'] = 'matthchreastus2';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://matthchreastus2.eastus2.batch.azure.com';
  process.env['AZURE_SUBSCRIPTION_ID'] = '2915bbd6-1252-405f-8173-6c00428146d9';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://matthchreastus2.eastus2.batch.azure.com:443')
  .post('/pools/nodesdktestpool1/nodes/tvm-3850571994_2-20160729t163835z/enablescheduling?api-version=2016-07-01.3.1')
  .reply(200, "", { 'transfer-encoding': 'chunked',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '04725bf5-ffeb-443d-ac02-aa127cae9be8',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  dataserviceversion: '3.0',
  dataserviceid: 'https://matthchreastus2.eastus2.batch.azure.com/pools/nodesdktestpool1/nodes/tvm-3850571994_2-20160729t163835z/enablescheduling',
  date: 'Fri, 29 Jul 2016 16:47:23 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://matthchreastus2.eastus2.batch.azure.com:443')
  .post('/pools/nodesdktestpool1/nodes/tvm-3850571994_2-20160729t163835z/enablescheduling?api-version=2016-07-01.3.1')
  .reply(200, "", { 'transfer-encoding': 'chunked',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '04725bf5-ffeb-443d-ac02-aa127cae9be8',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  dataserviceversion: '3.0',
  dataserviceid: 'https://matthchreastus2.eastus2.batch.azure.com/pools/nodesdktestpool1/nodes/tvm-3850571994_2-20160729t163835z/enablescheduling',
  date: 'Fri, 29 Jul 2016 16:47:23 GMT',
  connection: 'close' });
 return result; }]];