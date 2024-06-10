import Header from "../../Componentes/Header";
import { Rodape } from "../../Componentes/Rodape";

export const Inicio = () => {
    return (
        <div>
            <Header />
            {/* Container (About Section) */}
            <div id='about' className='container-fluid'>
            <div className='row'>
                <div className='col-sm-8'>
                <h2>QUEM SOMOS</h2><br />
                <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h4><br />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <br /><button className='btn btn-default btn-lg'>SAIBA MAIS</button>
                </div>
                <div className='col-sm-4'>
                <span className='glyphicon glyphicon-signal logo'></span>
                </div>
            </div>
            </div>
            <div className='container-fluid bg-grey'>
            <div className='row'>
                <div className='col-sm-4'>
                <span className='glyphicon glyphicon-globe logo '></span>
                </div>
                <div className='col-sm-8'>
                <h2>NOSSOS VALORES</h2><br />
                <h4><strong>MISSION:</strong> Our mission lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h4><br />
                <h4><p><strong>VISION:</strong> Our vision Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p></h4>
                </div>
            </div>
            </div>
            <Rodape />
        </div>
    );
}