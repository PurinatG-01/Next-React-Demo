import React from 'react'
import Layout from '../components/layout'
import Compo1 from '../components/compo-1'
import Compo2 from '../components/compo-2'



export default function p2() {
    
    
    const [value, setvalue] = React.useState(0);
    const [counter, setcounter] = React.useState(0)


    React.useEffect(() => {
        console.log("Effect Done : value : " + value)
        return () => {
            console.log("Clean up : value : " + value)
        };
    }, [value]);


    React.useEffect(() => {
        console.log("Effect Done : counter : "+ counter)
        let id = setInterval(()=>{setcounter(counter=> counter+1)},1000)
        return () => { clearInterval(id) };
    }, []);

    const callbackAlert = () => {
        alert("Callback function from P2")
    }

    return (
        <Layout>
            <h1 style={{textAlign:'center'}} ><span className='badge badge-pill badge-warning'>Value : {value}</span></h1>
            <h1 style={{textAlign:'center'}} ><span className='badge badge-pill badge-info'>Counter : {counter}</span></h1>
      <Compo1 title='#1'>
          <Compo2 title='#1' onAlert={() =>  { setvalue(value+1);callbackAlert()}}>
            <Compo2 title='-' onAlert={() =>  { setvalue(value+1);callbackAlert()}}></Compo2>
          </Compo2>
          <Compo2 title='#2' onAlert={() =>  { setvalue(value+1);callbackAlert()}}>
            <Compo2 title='-' onAlert={() =>  { setvalue(value+1);callbackAlert()}}></Compo2>
          </Compo2>
        </Compo1>
        
        <Compo1 title='#2'>
          <Compo2 title='#1' onAlert={() =>  { setvalue(value+1);callbackAlert()}}>
            <Compo2 title='-' onAlert={() =>  { setvalue(value+1);callbackAlert()}}></Compo2>
          </Compo2>
          <Compo2 title='#2' onAlert={() =>  { setvalue(value+1);callbackAlert()}}>
            <Compo2 title='-' onAlert={() =>  { setvalue(value+1);callbackAlert()}}></Compo2>
          </Compo2>
        </Compo1>   
        
        </Layout>
    )
}
