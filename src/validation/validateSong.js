export const validate = values => {
    const errors = {};

    if (values.year) {
        if (isNaN(Number(values.year))) {
            errors.year = 'Must be a number';
        } else if (values.year.length > 4) {
            errors.year = 'Must be between 0 and 9999';
        }
    }

    return errors;
}
