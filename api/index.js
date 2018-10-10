const NestoriaClient = require('./class/nestoria');

async function main() {
  const nestoriaInstance = new NestoriaClient('eeendpoint');
  const nestoriaRawData = await nestoriaInstance.fetchData();
  const nestoriaProcessedData = nestoriaInstance.processData(nestoriaRawData);
  nestoriaInstance.saveData(nestoriaProcessedData);
  console.log(nestoriaProcessedData);
}

main();
