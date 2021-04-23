let promise = fetch("https://22.javascript.pages.academy/code-and-magick/data");
promise.then((res) => res.json())
.then((data) => {
  console.log(data)
})
.catch((error) => {
  debugger
})


console.log()
