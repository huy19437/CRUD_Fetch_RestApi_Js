// Promise là một cơ chế trong JavaScript giúp bạn thực thi các tác vụ bất đồng bộ mà không rơi vào callback hell hay pyramid of doom
//promise có 3 trạng thái: pending, fullfilled, reject
var users = [
    {
        id: 1,
        name: 'nguyen huy'
    },
    {
        id: 2,
        name: 'son dang'
    },
    {
        id: 3,
        name: 'ngoc khanh'
    }
]

var comments = [
    {
        id: 1,
        user_id: 1,
        content: 'content 1'
    },
    {
        id: 2,
        user_id: 2,
        content: 'content 2'
    }
]

function getComments() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(comments)
        }, 1000);
    })
}

function getUsersByIds(userIds) {
    return new Promise((resolve, reject) => {
        var result = users.filter(user => userIds.includes(user.id))
        setTimeout(() => {
            resolve(result)
        }, 1000);
    })
}

getComments()
    .then((comments) => {
        var userIds = comments.map((comment) => {
            return comment.user_id
        })
        return userIds
        // return getUsersByIds(userIds)
        //     .then((users) => {
        //         return {
        //             users: users,
        //             comments: comments
        //         }
        //     })
    })
    .then((userIds) => {
        return getUsersByIds(userIds)
    })
    .then((users) => {
        return {
            users: users,
            comments: comments
        }
    })
    .then((data) => {
        var cmtBlock = document.getElementById('cmt-block')
        var html = ''
        data.comments.forEach((comment) => {
            var user = data.users.find((user) => {
                return user.id === comment.user_id
            })
            html += `<li>${user.name}: ${comment.content}</li>`
        })
        cmtBlock.innerHTML = html
    })
    
