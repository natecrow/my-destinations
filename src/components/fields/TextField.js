import React from 'react';
import { PropTypes } from 'prop-types';
import Input, { InputLabel } from 'material-ui/Input';
import { FormControl, FormHelperText } from 'material-ui/Form';

const TextField = ({ input, label, type, name, helperText, adornment, shrinkLabel, meta: { touched, error, warning } }, classes) => (
    <div>
        {(touched && (error || warning) &&
            <FormControl error aria-describedby={name} margin='theme.spacing.unit' style={{marginBottom: '1rem'}}>
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
                { helperText &&
                    <FormHelperText id="name-helper-text">{helperText}</FormHelperText>
                }
            </FormControl>
        }
    </div>
)

TextField.propTypes = {
    input: PropTypes.any,
    label: PropTypes.any,
    type: PropTypes.any,
    name: PropTypes.any,
    helperText: PropTypes.any,
    adornment: PropTypes.any,
    shrinkLabel: PropTypes.any,
    meta: PropTypes.any,
}

export default TextField;
