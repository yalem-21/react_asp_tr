import './Style/Ecx.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Images from './assets/images.png'
function Ecx() {
    return (
        <>
            <div>
                <div className="navbar">
                    <div className="side1">
                        <img src={Images} alt="X ECX Image" height="40px" />
                    </div>
                    <div className="side2"><p className="tittle">Project name</p></div>
                   
                </div>
                <p><i className="bi bi-0-circle-fill"></i>fgyhj <i className="bi bi-0-circle-fill"></i></p>
            </div>   
        </>
  );
}

export default Ecx;