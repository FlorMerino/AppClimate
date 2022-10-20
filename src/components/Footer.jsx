
import './Footer.css';

export default function Loading ({element}){
    return(
        <footer className={element.length>0? 'footerElem' : 'footerNotElm'}><p>Todos los derechos reservados. FlorM</p></footer>
    )
}