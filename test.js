let arr = await fetch('https://raw.githubusercontent.com/caysoigia/json-data/refs/heads/master/bums-youtube-hidden-code.json').then(response => {
  return response.json();
}).then(data => {
  return JSON.stringify(data);
}).catch(err => {
  return JSON.stringify(
    {
      "0": "42858",
      "1": "95065",
      "2": "88125",
      "3": "51264",
      "4": "13527"
    }
  )
  // Do something for an error here
});

function getElementByXpath(path) {
  return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}

let elm = getElementByXpath('//*[@role="dialog" and not(contains(@style, "display: none"))]//*[contains(text(),"Find hidden code")]');
let epNum = elm.textContent.replace(/[^0-9]/g, "");

let hiddenCodeArr = JSON.parse(arr);
console.log(arr, hiddenCodeArr[epNum]);

let input = getElementByXpath('//input[@placeholder="Enter the CODE"]');
input.value = hiddenCodeArr[epNum]
input.dispatchEvent(new Event('input', {bubbles: true}));

// function setNativeValue(element, value) {
//   console.log(element)
//   const valueSetter = Object.getOwnPropertyDescriptor(element, 'value').set;
//   const prototype = Object.getPrototypeOf(element);
//   const prototypeValueSetter = Object.getOwnPropertyDescriptor(prototype, 'value').set;

//   if (valueSetter && valueSetter !== prototypeValueSetter) {
//     prototypeValueSetter.call(element, value);
//   } else {
//     valueSetter.call(element, value);
//   }
// }

// setNativeValue(input, hiddenCodeArr[epNum])
// input.dispatchEvent(new Event('input', { bubbles: true }));