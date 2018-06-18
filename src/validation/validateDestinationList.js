export const validate = values => {

    const errors = {};

    if (!values.name || values.name === "") {
        errors.name = 'Required';
    }

    return errors;
}
