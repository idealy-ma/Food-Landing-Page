import Carte from "./Carte";

function Mere(props) {
    return(
        <div>
            <h1>{props.titre}</h1>
            {
                props.data?.map((value)=>{
                    return (<Carte description={value.description} image={value.image}></Carte>)
                })
            }
        </div>
    )
}

export default Mere;