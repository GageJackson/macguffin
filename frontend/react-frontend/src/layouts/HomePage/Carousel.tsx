import {ReturnCoffee} from "./ReturnCoffee";

export const Carousel = () => {
    return(
        <div className={'container mt-5'} style={{height: 550}}>
            <div className={'homepage-carousel-title'}>
                <h3>Find your next favorite coffee</h3>
            </div>
            <div id={'carouselControls'} className={'carousel carousel-dark slide mt-5 d-none d-lg-block'} data-bs-interval={'false'}>
                {/* Desktop */}
                <div className={'carousel-inner'}>
                    <div className={'carousel-item active'}>
                        <div className={'row d-flex justify-content-center align-items-center'}>
                            <ReturnCoffee/>
                            <ReturnCoffee/>
                            <ReturnCoffee/>
                        </div>
                    </div>
                    <div className={'carousel-item'}>
                        <div className={'row d-flex justify-content-center align-items-center'}>
                            <ReturnCoffee/>
                            <ReturnCoffee/>
                            <ReturnCoffee/>
                        </div>
                    </div>
                    <div className={'carousel-item'}>
                        <div className={'row d-flex justify-content-center align-items-center'}>
                            <ReturnCoffee/>
                            <ReturnCoffee/>
                            <ReturnCoffee/>
                        </div>
                    </div>
                </div>
                <button className={'carousel-control-prev'} type={'button'}
                        data-bs-target={'#carouselControls'} data-bs-slide={'prev'}
                >
                    <span className={'carousel-control-prev-icon'} aria-hidden={'true'}></span>
                    <span className={'visually-hidden'}>Previous</span>
                </button>
                <button className={'carousel-control-next'} type={'button'}
                        data-bs-target={'#carouselControls'} data-bs-slide={'next'}
                >
                    <span className={'carousel-control-next-icon'} aria-hidden={'true'}></span>
                    <span className={'visually-hidden'}>Next</span>
                </button>
            </div>

            {/* Mobile */}
            <div className={'d-lg-none mt-3'}>
                <div className={'row d-flex justify-content-center align-items-center'}>
                    <ReturnCoffee/>
                </div>
            </div>
            <div className={'homepage-carousel-title mt-3'}>
                <a className={'btn btn-outline-secondary btn-lg'} href={'#'}>View More</a>
            </div>
        </div>
    );
}