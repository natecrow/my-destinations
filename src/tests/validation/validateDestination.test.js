import {validate} from '../../validation/validateDestination';

let validValues = {
    'name': 'test',
    'address': {
        'street': 'test road 123',
        'city': 'Testopia',
        'state': 'NH',
        'zip': '00000'
    }
}

test('validating valid input does not result in any errors', () => {
    const errors = validate(validValues);
    expect(errors).toEqual({'address': {}});
});
