let count = 1;
setInterval(() => {
  console.log(count);
  if (count === 10) {
    clearInterval();
  }
  count++;
}, 1000);
