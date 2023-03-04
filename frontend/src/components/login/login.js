import React, { useRef , useState} from 'react'
import {Card, Form, Button, Container} from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import{signInWithEmailAndPassword} from 'firebase/auth'
import {auth} from '../firebase'
import AnimatedPage from '../Animate/Animate'
export default function Login() {

    const navigate = useNavigate()
    // const [values, setValues] = useState({
    //     email: "",
    //     pass: ""
    // })
    const emailRef = useRef()
    const passwordRef = useRef()
    const [errorMsg, setErrorMsg]= useState('')


    const handleSubmission= () =>{

        signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value).then(()=>{
            navigate('/home')
        }).catch((err)=> {
            setErrorMsg(err.message)
            console.log("Error - ", err.message)
    })
    }

  return (
    <>
    <AnimatedPage>
    <Container className="d-flex align-items-center justify-content-center" style={{minHeight: '100vh'}}>
        <div className='w-100' style={{maxWidth: '400px'}}>
        <Card>
            <Card.Body>
                <h2 className='text-center mb-4'>Login</h2>
                <h6>{errorMsg}</h6>
                <Form>
                    <Form.Group id ='email'>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type='email' ref = {emailRef} required />
                    </Form.Group>
                    <Form.Group id ='password'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control  type='password' ref = {passwordRef} required />
                    </Form.Group>
                    <Button type="button" onClick={handleSubmission} className='w-100 mt-2'>Log in
                    </Button>
    
                </Form>
            </Card.Body>
        </Card>
        <div className='w-100 text-center mt-2'>
            Don't have an account? <Link to="/">Sign Up</Link> 
        </div>
        </div>
        </Container>
        </AnimatedPage>
    </>
  )
}



    // const {signup} = useAuth()
    // const [error, setError] = useState("")
    // const [loading, setLoading] = useState(false)

    // async function handleSubmit(e){
    //     e.preventDefault()

    //     if(passwordRef.current.value !==
    //         passwordConfirmRef.current.value){
    //             return setError('Passwords do not match')
    //         }
    //         try{
    //             setError('')
    //             setLoading(true)
    //            await signup(emailRef.current.value, passwordRef.current.value)
    //         }
    //         catch{
    //             setError('Failed to create an account')
    //         }
    //         setLoading(false)

    //     signup(emailRef.current.value, passwordRef.current.value)
    // }



    