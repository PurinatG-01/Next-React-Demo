
import DataCard from './dataCard'

export default (props)=>{

    const style={
        width:"100%",
        height:'wrap-content',
        // background:'#aaa',
        color:'#232323',
        boxShadow: "0px 0px 33px 19px rgba(0,0,0,0.05)",
        padding:"30px",
        borderRadius: '10px',
        margin:'50px auto'
    }

    return (
        <div style={style}>
            <h1>COMPO-1 : {props.title} </h1>
            {props.children}
        </div>
    );

}