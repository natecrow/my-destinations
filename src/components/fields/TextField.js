import React from 'react';
import { PropTypes } from 'prop-types';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';

const TextField = ({ input, label, type, name, helperText, adornment, shrinkLabel, meta: { touched, error, warning } }, classes) => (
    <div>
        {(touched && (error || warning) &&
            <FormControl error aria-describedby={name} className={classes.formControl} fullWidth style={{marginBottom: '1rem'}}>
                <InputLabel htmlFor={name} shrink={shrinkLabel}>{label}</InputLabel>
                <Input {...input} type={type} startAdornment={adornment} style={{marginRight: '1rem'}}/>
                {
                    (error && <FormHelperText id={name}>{error}</FormHelperText>) ||
                    (warning && <FormHelperText id={name}>{warning}</FormHelperText>)
                }
            </FormControl>
        ) ||
            <FormControl aria-describedby={name} className={classes.formControl} fullWidth style={{marginBottom: '1rem'}}>
                <InputLabel htmlFor={name} shrink={shrinkLabel}>{label}</InputLabel>
                <Input {...input} type={type} startAdornment={adornment} style={{marginRight: '1rem'}}/>
                { 
                    (helperText && <FormHelperText id={name}>{helperText}</FormHelperText>)
                }
            </FormControl>
        }
    </div>
)

TextField.propTypes = {
    input: PropTypes.string,
    label: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string,
    helperText: PropTypes.string,
    adornment: PropTypes.object,
    shrinkLabel: PropTypes.bool,
    meta: PropTypes.shape ({
        touched: PropTypes.bool,
        error: PropTypes.string,
        warning: PropTypes.string
    })
}

export default TextField;
