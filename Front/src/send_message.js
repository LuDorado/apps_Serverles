const message = document.getElementById('form')
const url = 'https://1ohzxga8m8.execute-api.us-east-1.amazonaws.com/dev/contact'
const toast = document.getElementById('toast')
const submit = document.getElementById('submit')

function post(url, body, callback) {
  var req = new XMLHttpRequest();
  req.open("POST", url, true);
  req.setRequestHeader("Content-Type", "application/json");
  req.addEventListener("load", function () {
    if (req.status < 400) {
      callback(null, JSON.parse(req.responseText));
    } else {
      callback(new Error("Request failed: " + req.statusText));
    }
  });
  req.send(JSON.stringify(body));
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
  post(url, payload, function (err, res) {
    if (err) { return error(err) }
    success()
  })
})