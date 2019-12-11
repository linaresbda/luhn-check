const { luhn_validate, info_card } = require('./index');

(async function () {
  // Tarjeta incorrecta
  let data1 = await info_card(1234567890);
  console.log(data1);
  
  // tarjeta correcta
  let data2 = await info_card(4152311235);
  console.log(data2);
 })();
