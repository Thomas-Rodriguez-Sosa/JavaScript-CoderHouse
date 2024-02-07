fetch("/js/index.json")
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
