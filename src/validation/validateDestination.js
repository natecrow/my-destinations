export const validate = values => {
    const errors = {
        address: {}
    };

    if (!values.name || values.name === "") {
        errors.name = 'Name is required';
    }

    if (values.cost) {
        if (isNaN(Number(values.cost))) {
            errors.cost = 'Must be a number';
        }
        if (values.cost < 0) {
            errors.cost = 'Cannot be negative';
        }
    }

    const address = values.address || {};
    if (address.state) {
        if (address.state.length < 2 || address.state.length > 2) {
            errors.address.state = 'Must be a 2-char abbreviation';
        }
    }

    return errors;
}
