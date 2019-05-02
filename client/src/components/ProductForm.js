import React from 'react';
import { isEmptyObject, validateProduct } from '../helpers/helpers';

import {error} from '../helpers/notifications'


class ProductForm extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
            product: {...props.product, uploadImages: {FileList:[]}},
            errors: {},
        };
    
      }

      componentWillReceiveProps({ product }) {
        // alert('recieves props')
        this.setState({ product: {...product, uploadImages: {FileList:[]}} });
      }

      handleSubmit = (e) => {
        e.preventDefault();
        const { product } = this.state;
        const errors = validateProduct(product);

        if (!isEmptyObject(errors)) {
          this.setState({ errors });
          error("Fill required field!!")
        } else {
          const { onSubmit } = this.props;
          onSubmit(product);
        }
      }

      handleInputChange = (event) => {
        const { target } = event;
        const value = target.type === 'file'? target.files : target.value;
        
        this.updateProduct(target.name, value)
      }

      updateProduct = (key, value) => {      
        this.setState({
          product: {
            ...this.state.product,
            [key]: value,
          },
        }, () => {
          const errors = validateProduct(this.state.product);

          if (!isEmptyObject(errors)) {
            this.setState({ errors });
          }else{
            this.setState({errors: {}})
          }
        });
      }

      // renderErrors() {
      //   const { errors } = this.state;
    
      //   if (isEmptyObject(errors)) {
      //     return null;
      //   }
    
      //   return (
      //     <div className="alert alert-danger">
      //       <h3>The following errors prohibited the event from being saved:</h3>
      //       <ul>
      //         {Object.values(errors).map(error => (
      //           <li key={error}>{error}</li>
      //         ))}
      //       </ul>
      //     </div>
      //   );
      // }

      render(){
        const { product } = this.state;
        const { errors } = this.state;
        const style ={marginBottom: 80}
        const style2 ={marginBottom: 580}

        const { path } = this.props;

        if (!product.id && path === '/admin/products/:id/edit') return <h1 style={style2}>Product not found</h1>;

        const cancelURL = `/admin/products` ;
        const title = product.id ? `Edit ${product.name} ` : 'New Product';

        return(
          <React.Fragment>

            <div className="col-lg-9" style={style}>
              <form className="form-horizontal"  onSubmit={this.handleSubmit}>
              {/* {this.renderErrors()} */}

                <fieldset>
                  <legend className='text-center'>{title}</legend>

                  <div className="form-group">
                    <label >Select images:</label>
                    <input 
                    type="file" 
                    name="uploadImages"
                    // { product.id ? "": "required"}
                    multiple 
                    className="form-control-file"
                    onChange={this.handleInputChange}
                    />
                    <span className="text-info">{product.id ? 'Select images only if needed':''}</span><br/>
                    <span className="text-danger">{errors.uploadImages}</span>                    
                  </div>

                  <div className="form-group">
                    <label >Product Name</label>
                    <input  
                    name="name" 
                    placeholder="Product Name" 
                    className={errors.name ? 'form-control is-invalid': 'form-control' }
                    type="text"
                    onChange={this.handleInputChange}
                    value={product.name}
                    />
                    <span className="text-danger">{errors.name}</span>
                  </div>

                  <div className="form-group">
                    <label >Description</label>
                    <textarea 
                    name="description" 
                    placeholder="Description" 
                    className={errors.description ? 'form-control is-invalid': 'form-control' }
                    type="text"
                    onChange={this.handleInputChange}
                    value={product.description}
                    />
                    <span className="text-danger">{errors.description}</span>
                  </div>

                  <div className="form-group">
                    <label >Price</label>
                    <input 
                    name="price" 
                    placeholder="Price" 
                    className={errors.price ? 'form-control is-invalid': 'form-control' }
                    type="text"
                    onChange={this.handleInputChange}
                    value={product.price}
                    />
                    <span className="text-danger">{errors.price}</span>
                  </div>

                  <div className="form-group">
                    <label >Section</label>
                    <select 
                      name="section" 
                      className={errors.section ? 'form-control is-invalid': 'form-control' }
                      onChange={this.handleInputChange}
                      value={product.section}
                    >
                        <option value="" >Please select your state</option>
                        
                        <option >West Virginia</option>
                        <option >Wisconsin</option>
                        <option >Wyoming</option>
                    </select>
                    <span className="text-danger">{errors.section}</span>
                  </div>

                  <div className="form-group">
                    <label >Category</label>
                    <select 
                      name="category_id" 
                      className={errors.category_id ? 'form-control is-invalid': 'form-control' }
                      onChange={this.handleInputChange}
                      value={product.category_id}
                    >
                        <option value="" >Please select your state</option>
                        
                        <option value="1">West Virginia</option>
                        <option value="3">Wisconsin</option>
                        <option value="2">Wyoming</option>
                    </select>
                    <span className="text-danger">{errors.category_id}</span>
                  </div>

                  <div className="form-group">
                    <div className="col-md-4">
                        <button type="submit" className="btn btn-primary" >{product.id? "Edit":"Create"} <span className="glyphicon glyphicon-send"></span></button>
                        <a href={cancelURL} className="btn btn-danger" >Cancel <span className="glyphicon glyphicon-send"></span></a>                          
                    </div>
                  </div>

                </fieldset>
              </form>
            </div>
          </React.Fragment>
        )
      }
}

ProductForm.defaultProps = {
    product: {
      id: '',
      name: '',
      description: '',
      price: '',
      section: '',
      category_id: '',
      images_url: [],
      uploadImages: {FileList:[]},
      user_id: 1,
    },
    errors: {}
};
  
export default ProductForm;