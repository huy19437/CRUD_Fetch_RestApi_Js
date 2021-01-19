var courseApi = 'http://localhost:3000/courses'
function start() {
    getCourses((courses) => {
        renderCourses(courses)
    })
    handleCreateForm()
}

start()

function getCourses(callback) {
    fetch(courseApi)
        .then(response => response.json())
        .then(callback)
}

function createCourse(data, callback) {
    var options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    fetch(courseApi, options)
        .then(response => response.json())
        .then(callback)
}

function handleDeleteCourse(id) {
    var options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    }
    var url = courseApi + '/' + id
    fetch(url, options)
        .then(response => response.json())
        .then(() => {
            var courseItem = document.querySelector('.course-item-' + id)
            if(courseItem){
                courseItem.remove()
            }
        })
}

function renderCourses(courses) {
    var listCoursesBlock = document.querySelector('#list-courses')
    var htmls = courses.map((course) => {
        return `
            <li class="course-item-${course.id}">
                <h4>${course.name}</h4>
                <p>${course.description}</p>
                <button onclick="handleDeleteCourse(${course.id})">Delete</button>
            </li>
        `
    })

    listCoursesBlock.innerHTML = htmls.join('')
}

function handleCreateForm() {
    var createBtn = document.querySelector('#create-btn')

    createBtn.onclick = () => {
        var name = document.querySelector('input[name="name"]').value
        var description = document.querySelector('input[name="description"]').value
        var formData = {
            name: name,
            description: description
        }
        createCourse(formData, () => {
            getCourses((courses) => {
                renderCourses(courses)
            })
        })
    }
}