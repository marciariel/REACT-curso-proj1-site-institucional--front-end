import Header from "../../Componentes/Header"
import { Rodape } from "../../Componentes/Rodape";

export const Servicos = () => {
    return (

        <div>
            <Header />
            <div id='services' className='container-fluid text-center'>
            
        <h2>SERVIÇOS</h2>
        <h4>O Que Oferecemos</h4>
        <br />
        <div className='row '>
            <div className='col-sm-4'>
            <span className='glyphicon glyphicon-off logo-small'></span>
            <h4>TÍTULO 1</h4>
            <p>Lorem ipsum dolor sit amet..</p>
            </div>
            <div className='col-sm-4'>
            <span className='glyphicon glyphicon-heart logo-small'></span>
            <h4>TÍTULO 2</h4>
            <p>Lorem ipsum dolor sit amet..</p>
            </div>
            <div className='col-sm-4'>
            <span className='glyphicon glyphicon-lock logo-small'></span>
            <h4>TÍTULO 3</h4>
            <p>Lorem ipsum dolor sit amet..</p>
            </div>
        </div>
        <br /><br />
        <div className='row '>
            <div className='col-sm-4'>
            <span className='glyphicon glyphicon-leaf logo-small'></span>
            <h4>TÍTULO 4</h4>
            <p>Lorem ipsum dolor sit amet..</p>
            </div>
            <div className='col-sm-4'>
            <span className='glyphicon glyphicon-certificate logo-small'></span>
            <h4>TÍTULO 5</h4>
            <p>Lorem ipsum dolor sit amet..</p>
            </div>
            <div className='col-sm-4'>
            <span className='glyphicon glyphicon-wrench logo-small'></span>
            <h4>TÍTULO 6</h4>
            <p>Lorem ipsum dolor sit amet..</p>
            </div>
        </div>
        </div>
        <Rodape />
        </div>
    );
}