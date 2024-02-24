import { useEffect, useState } from "react";
import Header from "../components/Header";
import Mere from "../components/Mere";

function Home(props) {
    const [services, setService] = useState();
    const [equipes, setEquipe] = useState();
    const [variable, setVariable] = useState('RAKOTO');

    function Clicked() {
        fetch('http://localhost:3000/acceuil/post',{
            method: "POST",
            headers: {
                "Content-Type":'application/json'
            },
            body:JSON.stringify({'var':variable})
        })
    }

    useEffect(()=>{
        fetch('http://localhost:3000/acceuil').then((value)=>{
            return value.json();
        }).then((value)=>{
            setService(value.services);
            setEquipe(value.team);
        })
    }, [])

    return(
        <>
            <Header></Header>
            <Mere titre="Nos services" data={services}></Mere>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo alias reiciendis minus voluptatem vero, error, id harum, voluptate qui sunt soluta quidem magnam necessitatibus molestias fugiat rerum quas fuga hic!</p>
            <Mere titre="Notre equipes" data={equipes}></Mere>
           
            <input type="text" onChange={(e)=>{
                setVariable(e.target.value) 
            }} value={variable}/>
            <button onClick={Clicked}>Valider</button>
        </>
    )
}

export default Home;