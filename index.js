// Add your code here
function user(name, email){
    let id = document.createElement('div')
    id.innerHTML = `
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
    `
    document.querySelector('body').appendChild(id)
}

function submitData(name, email){
    return fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            Accept: 'application/json',
        },
        body: JSON.stringify({name, email}),
    })
    .then(response => response.json())
    .then(json => document.body.innerHTML = json.id)
    .catch(function(error){
        document.body.innerHTML = error
    })
}
