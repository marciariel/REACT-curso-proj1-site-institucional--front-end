import Header from "../../Componentes/Header"
import { Rodape } from "../../Componentes/Rodape";

export const Portfolio = () => {
    return(
        <div>
            <Header />
             <div id='portfolio' className='container-fluid text-center bg-grey'>
            <h2>Portfolio</h2><br />
            <h4>O Que Nós Criamos</h4>
            <div className='row text-center '>
                <div className='col-sm-4'>
                <div className='thumbnail'>
                    <img src='paris.jpg' alt='Projeto 1' width='400' height='300' />
                    <p><strong>Projeto 1</strong></p>
                    <p>...</p>
                </div>
                </div>
                <div className='col-sm-4'>
                <div className='thumbnail'>
                    <img src='newyork.jpg' alt='Projeto 2' width='400' height='300' />
                    <p><strong>Projeto 2</strong></p>
                    <p>...</p>
                </div>
                </div>
                <div className='col-sm-4'>
                <div className='thumbnail'>
                    <img src='sanfran.jpg' alt='Projeto 3' width='400' height='300' />
                    <p><strong>Projeto 3</strong></p>
                    <p>...</p>
                </div>
                </div>
            </div><br />
            
            <h2>What our customers say</h2>
            <div id='myCarousel' className='carousel slide text-center' data-ride='carousel'>
                {/* Indicators */}
                <ol className='carousel-indicators'>
                <li data-target='#myCarousel' data-slide-to='0' className='active'></li>
                <li data-target='#myCarousel' data-slide-to='1'></li>
                <li data-target='#myCarousel' data-slide-to='2'></li>
                </ol>

                {/* Wrapper for slides */}
                <div className='carousel-inner' role='listbox'>
                <div className='item active'>
                    <h4>'This company is the best. I am so happy with the result!'<br /><span>Michael Roe, Vice President, Comment Box</span></h4>
                </div>
                <div className='item'>
                    <h4>'One word... WOW!!'<br /><span>John Doe, Salesman, Rep Inc</span></h4>
                </div>
                <div className='item'>
                    <h4>'Could I... BE any more happy with this company?'<br /><span>Chandler Bing, Actor, FriendsAlot</span></h4>
                </div>
                </div>

                {/* Left and right controls */}
                <a className='left carousel-control' href='#myCarousel' role='button' data-slide='prev'>
                <span className='glyphicon glyphicon-chevron-left' aria-hidden='true'></span>
                <span className='sr-only'>Previous</span>
                </a>
                <a className='right carousel-control' href='#myCarousel' role='button' data-slide='next'>
                <span className='glyphicon glyphicon-chevron-right' aria-hidden='true'></span>
                <span className='sr-only'>Next</span>
                </a>
            </div>
            </div>
            <Rodape />
        </div>
    );
}