import React from 'react';

class ProductForm extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
            event: props.event,
            errors: {},
        };
    
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.dateInput = React.createRef();
    
      }
}

ProductForm.defaultProps = {
    event: {
      event_type: '',
      event_date: '',
      title: '',
      speaker: '',
      host: '',
      published: false,
    },
};
  
export default ProductForm;