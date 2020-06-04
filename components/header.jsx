import Router from 'next/router'
import 'bootstrap/dist/css/bootstrap.min.css';

export default () => {
    return (
        <nav className="navbar navbar-dark ">
            <button className='btn btn-dark' style={{fontSize:'0.8em',margin:'5px'}} onClick={()=>{Router.push('/')}}>Index</button>
            <button className='btn btn-dark' style={{fontSize:'0.8em',margin:'5px'}} onClick={()=>{Router.push('/p1')}}>P1</button>
            <button className='btn btn-dark' style={{fontSize:'0.8em',margin:'5px'}} onClick={()=>{Router.push('/p2')}}>P2</button>
            <h3 className="mx-auto">Demo Next.js</h3>
            <h6>by Purinat Sanbundit</h6>
        </nav>
     );

    }
 
