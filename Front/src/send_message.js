const message = document.getElementById('form')
const url = 'https://0zj6hlcztf.execute-api.us-east-1.amazonaws.com/dev/contact'
const toast = document.getElementById('toast')
const submit = document.getElementById('submit')

async function post(url, body) {
    await fetch(url, {
      method: "POST",
      mode: "no-cors",
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },  
      body: JSON.stringify(body)
    }).catch(err => {
      error(err);
    }).then((response) => {
      console.log(response);
      success();
    })
}

function success () {
  toast.innerHTML = 'Thanks for sending me a message! I\'ll get in touch with you ASAP. :)'
  submit.disabled = false
  submit.blur()
  message.dname.focus()
  
  message.dname.value = ''
  message.demail.value = ''
  message.dmessage.value = ''
}

function error (err) {
  toast.innerHTML = 'There was an error with sending your message, hold up until I fix it. Thanks for waiting.'
  submit.disabled = false
  console.log(err)
}

message.addEventListener('submit', function (e) {
  e.preventDefault()
  toast.innerHTML = 'Sending'
  submit.disabled = true
  const payload = {
    name: message.dname.value,
    email: message.demail.value,
    content: message.dmessage.value
  }

  post(url, payload);
})