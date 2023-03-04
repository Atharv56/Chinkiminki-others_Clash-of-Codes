import React, { useState } from "react";
import {Card, Form, Button, Container} from 'react-bootstrap'
export default function Predict() {
    const [values, setValues] = useState(
        {quote : '',}
    )
    const [predict, setPredict] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(values)
        console.log(JSON.stringify(values))
        try{
                console.log(values)
                let res = await fetch("http://127.0.0.1:5000/predict", {
                    method: "POST",
                    // mode: "no-cors",
                    headers: {
                        Accept: "application/json, text/plain, /",
                    'Content-type': 'application/json; charset=UTF-8',
                    },
                    body: JSON.stringify(
                           values
                    ),
                });
                let resJson = await res.json()
                console.log(resJson)
                //if(res.status === 200 || 400){
                    // setValues({
                    //     magnitude: 0,
                    //     velocity: 0
                    // });
                    console.log("fetched Successfully")
                //}
                //else{
                //alert('some error occured')
                // }
            // console.log(res.values)
            setPredict(resJson)
            // //setPredict(parseFloat(resJson['predict'].toFixed(4)))
            // const response = await axios.post("http://127.0.0.1:5000/predict", values)
        }
        catch(err){
            alert(err)
        }
        
    }
    return(
        <>
        <body className="bg-dark">
        <Container className="d-flex align-items-center justify-content-center" style={{minHeight: '100vh'}}>
        <div className='w-100' style={{maxWidth: '400px'}}>
        <Card className="bg-light">
            <Card.Body>
                <h2 className='text-center mb-4'>Prediction</h2>
                <Form>
                   <Form.Group id = 'text'>
                        <Form.Label>Enter the location</Form.Label>
                        <Form.Control type = 'text' onChange={e => setValues((prev)=>({...prev, quote: e.target.value}))} required></Form.Control>
                    </Form.Group> 
                   
                    <Button onClick={handleSubmit} type="button" className='w-100 mt-4 bg-success'>Predict</Button>
                </Form>
            </Card.Body>
            <Card.Body>
                <h2 className="text-center mb-4">Top 5 Quotes:</h2>
                <h5 className="text-center mb-4">{predict.map((data) => {
                    
                    return <p>{data}</p>
                })}</h5>
            </Card.Body>
        </Card>
        </div>
        </Container>
        </body>
        
        </>
    )
}