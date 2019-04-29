import React from 'react';

const BreadCrumb = ({title, category}) => {

    return (<div className="col-lg-12">
                {/* <!-- breadcrumb--> */}
                <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="/">Home</a></li>
                    <li aria-current="page" className="breadcrumb-item active">{title}</li>
                    {category !== '' ? <li aria-current="page" className="breadcrumb-item active">{category}</li> : ''}
                    
                </ol>
                </nav>
            </div>)
}

BreadCrumb.defaultProps = {
    title: '',
    category: '',
};

export default BreadCrumb