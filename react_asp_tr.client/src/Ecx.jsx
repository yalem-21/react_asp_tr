import './Style/Ecx.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Images from './assets/images.jpg'
import './index.css';
function Ecx() {
    return (
        <>
            <div>
                <div className="navbar">
                    <div className="side1">
                        <img src={Images} alt="X ECX Image" height="40px" /><p>ECX  board</p>
                    </div>
                    <div className="side2">
                        <div>
                            <div>
                                <p>hhdhsjv</p>
                            </div>
                            <div>
                                <p>hhdhsjv</p>
                            </div>
                        </div>
                       
                        <div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                     
                </div>
                <p><i className="bi bi-0-circle-fill"></i>fgyhj <i className="bi bi-0-circle-fill"></i></p>
            </div> 
            <h1 className=" underline text-blue">
                Hello world!
            </h1>
            <div className="flex flex-row text-3xl  underline">
                <div>01</div>
                <div>02</div>
                <div>03</div>
            </div>
        </>
  );
}

export default Ecx;