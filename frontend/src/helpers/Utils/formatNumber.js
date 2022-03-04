export default function formatNumber(number) {
  var decimalSeparator = " ";
  var thousandSeparator = " ";

  var result = String(number);

  var parts = result.split(decimalSeparator);

  result = parts[0].split("").reverse().join("");

  result = result.replace(/(\d{3}(?!$))/g, "$1" + thousandSeparator);

  parts[0] = result.split("").reverse().join("");

  return parts.join(decimalSeparator);
}
