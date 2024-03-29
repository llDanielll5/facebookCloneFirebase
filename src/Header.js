import {FaFacebook, FaSearch, FaAlignJustify} from 'react-icons/fa';


export default () => {
    return (
        <div className="header">
            <div className="headerLeft">
                <div className="logo-fb">
                    <FaFacebook />
                </div>
                <div className="search-fb">
                    <FaSearch />
                </div>
                <div className="menu-fb">
                    <FaAlignJustify />
                </div>
            </div>
            <div className="headerRight">
                <div className="plus-btn">+</div>
            </div>
        </div>
    )
}

