function delay(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}


async function delayFn(time) {
  await delay(time);
  console.log(`${time} ms have passed`);
}

delayFn(2000);

async function divide(a, b) {
  try {
    if (b === 0) {
        throw new Error('cannot divide by zero');
      }
    
      return a / b;
  } catch (error) {
    console.log(error);
  }
}