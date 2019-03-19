import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';

class Prgrf extends Component{
    render(){
        const {content} = this.props
        return(
            <Typography component="p">
                {content}
            </Typography>
        )
    }
}

Prgrf.propTypes = {
    content: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
}

export default Prgrf