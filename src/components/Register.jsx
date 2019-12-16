import React, { useState, useEffect, useCallback } from 'react';

const Register = () => {
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [pwConfirm,setPwConfirm] = useState('')
    const [validPw, setValidPw] = useState(false)
    const [isSame, setIsSame] = useState(false)

    
    
    useEffect(() =>{
        function isValidPw(){
            if((/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/g).test(password)){
                setValidPw(true)
            }
            else{
                setValidPw(false)
            }
        }
        console.log(password)
        isValidPw()
    },[password])

    useEffect(() => {
        setIsSame(pwConfirm === password)
        console.log(pwConfirm === password)
    },[pwConfirm,password])

    return (
        <form>
            <input type="text" placeholder="Име" required onInput={e => {
                setName(e.target.value)
            }}/>
            <input type="text" placeholder="Презиме" required onInput={e => {
                setSurname(e.target.value)
            }}/>

            <input type="text" placeholder="Корисничко име" required onInput={e => {
                setUsername(e.target.value)
            }}/>  
            <input type="email" placeholder="Email" required onInput={e => {
                setEmail(e.target.value)
            }}/>
            <input type="password" placeholder="Шифра" required onInput={e => {
                setPassword(e.target.value)
                //TODO: check same password (idiot proofing)
            } }/>
            <input type="password" placeholder="Потврди шифру" required onInput={e => {
                setPwConfirm(e.target.value)
            }} />
                

            <input type="submit" value="Региструј се" onClick={() => {}} />
        </form>
    )
}

export default Register