// email copy

const copyBtn = document.querySelector('#copy');

copyBtn.addEventListener('click', ()=> {
    navigator.clipboard.writeText('contact@dixel.space');
    copyBtn.textContent = 'copied!';
})

// form submit

const form = document.getElementById('form');
const result = document.getElementById('result');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const formData = new FormData(form);
  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);
  result.innerHTML = "Please wait..."

    fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: json
        })
        .then(async (response) => {
            let json = await response.json();
            if (response.status == 200) {
                result.textContent = json.message;
            } else {
                console.log(response);
                result.textContent = json.message;
            }
        })
        .catch(error => {
            console.log(error);
            result.textContent = "Something went wrong!";
        })
        .then(function() {
            form.reset();
            setInterval(() => {
                result.style.display = 'none'
            }, 6000);
        });
});