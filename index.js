const btn = document.getElementById('btn');
btn.addEventListener('click', getFetch);

function getFetch() {
    const url = 'https://icanhazdadjoke.com'
    let config = {
        headers: {
            'Accept': "application/json",
        },
    };
    fetch(url, config)
        .then(res => res.json())
        .then(data => {
            const joke = data.joke
            console.log(data.joke)

            const li = document.createElement('li')
            li.textContent = joke
            document.querySelector('ul').textContent = ''
            document.querySelector('ul').appendChild(li)
            li.style.listStyle = "none"
        })

        .catch(err => {
            console.log(`error ${err}`)
        });
}


