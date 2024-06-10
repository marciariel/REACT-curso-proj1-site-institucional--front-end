import Header from "../../Componentes/Header";
import { Rodape } from "../../Componentes/Rodape";

export const Contato = () => {
    
    return (
        <div>
             <Header />
             <div id='contact' className='container-fluid bg-grey'>
        <h2 className='text-center'>CONTATO</h2>
        <div className='row'>
            <div className='col-sm-5'>
            <p>ONDE ESTAMOS</p>
            <p><span className='glyphicon glyphicon-map-marker'></span> Chicago, US</p>
            <p><span className='glyphicon glyphicon-phone'></span> +00 1515151515</p>
            <p><span className='glyphicon glyphicon-envelope'></span> myemail@something.com</p>
            </div>
            <div className='col-sm-7 '>
            <div className='row'>
                <div className='col-sm-6 form-group'>
                <input className='form-control' id='name' name='name' placeholder='Name' type='text' required />
                </div>
                <div className='col-sm-6 form-group'>
                <input className='form-control' id='email' name='email' placeholder='Email' type='email' required />
                </div>
            </div>
            <textarea className='form-control' id='comments' name='comments' placeholder='Comment'></textarea><br />
            <div className='row'>
                <div className='col-sm-12 form-group'>
                <button className='btn btn-default pull-right' type='submit'>Send</button>
                </div>
            </div>
            </div>
        </div>
         <Rodape />
        </div>
        </div>
        
    );
}