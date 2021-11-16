import { BiWorld } from "react-icons/bi";
import Daniel2 from './resources/Daniel2.jpg';

export default (props) => {
    return (
        <div className="feedPosts">
            <div className="feedPostSingle">
                <div className="feedPost__profile">
                    <img src={Daniel2} />
                    <h3>{props.nome} <br /> <span>{props.horario} - <a href='#' className="worldIcon"><BiWorld /></a></span></h3>
                </div>
                <div className="feedPost__content">
                    <p>{props.conteudo}</p>
                    <img src="https://wallpaperaccess.com/full/4596443.jpg" />
                </div>
            </div>
        </div>
    )
}