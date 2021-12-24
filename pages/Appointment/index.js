import axios from "axios";
import React from "react";
import { Form, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
export default function Appointment() {
  const [service, setService] = useState([]);
   const [onChaneService,setOnChaneService] = useState('')
   const [name, setName]=useState('');
   const [price , setPrice]=useState();

  useEffect(() => {
  
    axios
      .get("http://localhost:4000/services/")
      .then((res) => {
        console.log(res.data);
        setService(res.data);
        // setOnChaneService(res.data.name)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
//***save the Appointmint in admin page ***//
function saveAppointment(e){
  e.preventDefault()
  axios.post('http://localhost:4000/appointment/save',{name,price})
  .then((res)=>{
   

        console.log(res)
  }).catch((err)=>{
    console.log(err);
  })
}
  return (
    <div>
      <h1>Appointment</h1>
      <div>
        <h2>Choose an service:</h2>
        {/* <p> {data[1].name} </p> */}
        <div>
          <Form
          //  onSubmit={(e) => {
          //             handleSubmit(e);
          //           }}
          >
            <select
              onChange={(e) => {
                setOnChaneService(JSON.parse(e.target.value));
                setName(JSON.parse(e.target.value).name)
                setPrice(JSON.parse(e.target.value).price)
              }}
            >
              
              {service.map((services, i) => (
                <option key={i} value={JSON.stringify(services)}>
                  {services.name}
                </option>
              ))}
            </select>
            {onChaneService && (
              <div>
                <h4>Name of Servies: {onChaneService.name} </h4>
                <h4 > price of Servies : ${onChaneService.price} </h4>
              </div>
            )}
            Time :{" "}
            <div>
              {["radio"].map((type) => (
                <div key={`inline-${type}`} className="mb-3">
                  <Form.Check
                    inline
                    label="9AM-12PM"
                    name="group1"
                    type={type}
                    id={`inline-${type}-morning`}
                  />
                  <Form.Check
                    inline
                    label="3PM-6PM"
                    name="group1"
                    type={type}
                    id={`inline-${type}-evening1`}
                  />
                  <Form.Check
                    inline
                    label="7PM-11PM"
                    name="group1"
                    type={type}
                    id={`inline-${type}-evening2`}
                  />
                </div>
              ))}
            </div>
            <Button type="click" onClick={(e)=>{
              saveAppointment(e)
            }}>Submit</Button>
          </Form>
        </div>
      </div>
    </div>
  );
}
// export async function getStaticProps(context) {

//     const res = await fetch("http://localhost:4000/services/oneService");
//     const datab = await res.json();
//     return{
//         props:{
//             datab
//         }
//     }
// }
{
  /* <FloatingLabel controlId="floatingSelect" label="Works with selects">
  <Form.Select aria-label="Floating label select example">
    <option>Open this select menu</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </Form.Select>
</FloatingLabel> */
}
