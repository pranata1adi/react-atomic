import React,{ Component } from 'react'
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

class Btn extends Component{
    render(){
        const {variant, color, title } = this.props
        return(
            <Button 
                variant = {variant}
                color = {color || "inherit"}
            >
                {title}
            </Button>
        )
    }
}

Btn.propTypes = {
    variant: PropTypes.string,
    color: PropTypes.string,
    title: PropTypes.string,
}

export default Btn