const BASEURL = 'https://coetus.herokuapp.com'
const API = '/api/gamer'
const MEMORYCARDS = '/memory/cards'
const USERS = '/users'

function getMemoryCards(){
    return fetch(`${BASEURL}${API}${MEMORYCARDS}`)
            .then(res => res.json())
}

function login(user){
    let res = fetch(`${BASEURL}${API}${USERS}`,{
        headers:{
            'Content-Type':'application/json; charset=utf-8' 
        },
        method:'POST',
        body:JSON.stringify(user)
    }).then(res => res.json())
    return res
}

function register(user){
    return fetch(`${BASEURL}${API}${USERS}`,{
        headers:{
            'Content-Type':'application/json; charset=utf-8'
        },
        method:'PUT',
        body:JSON.stringify(user)
    }).then(res => res.json())
}

export {getMemoryCards,login,register}

