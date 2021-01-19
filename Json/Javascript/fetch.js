var courseApi = 'http://localhost:3000/courses'

fetch(courseApi)
    .then(response => response.json())
    .then((json) => {
        var infos = json.map((value) => {
            return `<li>${value.name}</li>`
        })
        info = infos.join('')
        document.getElementById('cmt-block').innerHTML = info
    })