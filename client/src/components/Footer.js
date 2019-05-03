import React, { Component } from 'react';

export default class Footer extends Component {
    
    render(){
        return(
            <React.Fragment>

            <div id="copyright" className="fixed-bottom" style={{margingTop: 40}}>
                <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12">
                    <p className="text-center ">©2019 Clothes Store.</p>
                    </div>
                </div>
                </div>
            </div>
            </React.Fragment>
        )
    }
}