import React from "react";

export const ReturnCoffee = () => {
    return (
        <div className={'col-xs-6 col-sm-6 col-md-4 col-lg-3 mb-3'}>
            <div className={'text-center'}>
                <img src={require('../../../Images/CoffeeImages/new-coffee.png')}
                     width={'151'}
                     height={'233'}
                     alt={'coffee'}
                />
                <h6 className={'mt-2'}>La Lia Farms</h6>
                <p>Tarrazu, Costa Rica</p>
                <p>Cherry, Sweet Pastry, Red Wine</p>
                <a className={'btn main-color text-white'} href={'#'}>Buy</a>
            </div>
        </div>
    );
}