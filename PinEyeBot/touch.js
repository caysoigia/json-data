function getTotalTap() {
  const tapElement = document.querySelector('.level_p');
  if (tapElement) {
    const tapText = tapElement.textContent || tapElement.innerText;
    const totalTap = tapText.split('/')[0].trim();
    return Number(totalTap);
  } else {
    return 0;
  }
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const xpath = "//img[contains(@src, 'pineye/level')] ";
const sectionElement = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

function randomTouch() {
  if (sectionElement) {
    const randomX = getRandomNumber(150, window.innerWidth - 150);
    const randomY = getRandomNumber(200, window.innerHeight - 200);

    const touch = new Touch({
      identifier: Date.now(),
      target: sectionElement,
      clientX: randomX,
      clientY: randomY
    });

    const touchStartEvent = new TouchEvent('touchstart', {
      touches: [touch],
      targetTouches: [touch],
      changedTouches: [touch],
      bubbles: true,
      cancelable: true
    });

    const touchEndEvent = new TouchEvent('touchend', {
      touches: [touch],
      targetTouches: [touch],
      changedTouches: [touch],
      bubbles: true,
      cancelable: true
    });

    sectionElement.dispatchEvent(touchStartEvent);
    sectionElement.dispatchEvent(touchEndEvent);
  }
}

let totalTap = getTotalTap();
totalTap = totalTap > 100 ? 100 : totalTap;
async function main() {
  for (let i = 0; i < totalTap; i++) {
    if (getTotalTap() < 20) break;
    for (let j = 0; j < getRandomNumber(2, 5); j++) {
      randomTouch();
      await sleep(getRandomNumber(20, 80));
    }
    await sleep(getRandomNumber(80, 150));
  }
}
await main();