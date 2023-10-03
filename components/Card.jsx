import style from "../estilos/card.module.css"
import { Link } from "react-router-dom";

export default function Card({ id,name, status, species, gender,origin,image,onclose}) {
   return (
      <div className={style.contenedor}>
         <section className={style.contenedorImagen}>
         <img className={style.imagen} src={image} alt={`No se encuenta la imagen de ${name}`} />
        
         </section>
         <div className={style.contendorletras}>
            <Link to ={`/detail/${id}`} >
         <h2 className={style.nombre}> {name} </h2>
         </Link>
         <h2 className={style.status}><span>Status:</span> {status} </h2>
         <h2 className={style.species}><span>Specie:</span>{species} </h2>
         <h2 className={style.gender}><span>Gender:</span> {gender} </h2>
         <h2 className={style.origin}><span>Origin: </span>{origin} </h2>
         </div> 
         <div className={style.contenedorbotones}>
         <button onClick={onclose} className={style.botonfavo}>💚</button>
         <button onClick={ () => onclose(id)} className={style.boton}>❎</button>
         </div>
         

      </div>
   );
}
