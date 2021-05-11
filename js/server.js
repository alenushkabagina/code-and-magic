



export const getData = (onSuccess, onError) => {
  let promise = fetch("https://22.javascript.pages.academy/code-and-magick/data");
  promise.then((res) => {
    return res.json()
  })
  .then((data) => {
    onSuccess(data);
  })
  .catch((error) => {
    onError(error);
  })
}

export const load = (data, onSuccess, onError) => {
  fetch('https://22.javascript.pages.academy/code-and-magick', {
    method: 'POST',
    body: data
  }).then(onSuccess).catch(onError)
}
