import {useEffect, useState} from 'react';
import api from '../../Components/Services/Api';
import { Link } from 'react-router-dom';
import './Home.css'

// https://developers.themoviedb.org/3
//https://api.themoviedb.org/3/movie/550?api_key=35674ffe8e9fdc174d122e65010df406 exemplo de requisição

function Home() {
    const [filmes, setFilmes] = useState([]);
    useEffect(()=>{
        async function loadFilmes() {
            const response = await api.get('movie/now_playing', {
                params:{
                    api_key:"35674ffe8e9fdc174d122e65010df406",
                    language:"pt-BR",
                    page:1

                }
            })
            setFilmes(response.data.results.slice(0, 5));
        }
        loadFilmes();

    
    }, [])





    return(
        <div className='container'>
            <div className='lista-filmes'>
                {filmes.map((filme)=>{
                    return(
                        <article key={filme.id}>
                            <strong>
                                {filme.title}
                                <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt ={filme.title}/>
                            <Link to = {`/filme/${filme.id}`}>Acessar</Link>

                            </strong>
                        </article>
                    )
                })}
            </div>
            
        </div>
    )
}

export default Home;