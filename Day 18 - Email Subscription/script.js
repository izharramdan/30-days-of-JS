const scriptURL = 'https://script.google.com/macros/s/AKfycbwmTfZ585SRv3ZKw2HlWUHPkEml1JsnKDfjoXAuVeMTrewHlRB_P5lFXzi9HWFpKGt5rA/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerText = "Thank you for subscribing";
            setTimeout(function () {
                msg.innerText = "";
            }, 5000)
            form.reset();
        })
        .catch(error => console.error('Error!', error.message))
})

