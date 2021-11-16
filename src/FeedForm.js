import { AiFillVideoCamera, AiOutlineFileImage, AiOutlineMeh,  } from 'react-icons/ai';
import Daniel2 from './resources/Daniel2.jpg';

export default () => {
    return (
        <div className="feed">
            <div className="feedForm">
                <img src={Daniel2} />
                <input type="text" placeholder="Diga o que está pensando..." />
            </div>
            <div className="feedIcons">
                <div className="iconSingle">
                    <AiFillVideoCamera />
                    <span>Vídeo ao vivo</span>
                </div>
                <div className="iconSingle img">
                    <AiOutlineFileImage />
                    <span>Vídeo ao vivo</span>
                </div>
                <div className="iconSingle emoji">
                    <AiOutlineMeh />
                    <span>Vídeo ao vivo</span>
                </div>
            </div>
        </div>
    )
}