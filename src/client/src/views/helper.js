export function numberFormater(number, round, cut, unit='') {
  let finalString = '';
  number = Math.round(number/round)*round;
  let array = String(number).split('');
  array = array.slice(0, array.length-cut);
  for (let i = 0; i < array.length; i++) {
    if (i%3===0 && i!==0) finalString = array[array.length-1-i] + '.' + finalString;
    else finalString = array[array.length-1-i] + finalString;
  }
  return finalString + unit;
}
