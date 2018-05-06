import {validate} from '../../validation/validateDestination';

describe('validateDestination.validate()', () => {
    let values;
    let actualErrors;
    let expectedErrors;

    describe('when values are valid', () => {
        beforeEach(() => {
            values = {
                'name': 'Valid values',
                'address': {
                    'street': 'test road 123',
                    'city': 'Testopia',
                    'state': 'NH',
                    'zip': '00000'
                }
            };
            expectedErrors = {'address': {}};
            actualErrors = validate(values);
        });

        it('does not give any errors', () => {
            expect(actualErrors).toEqual(expectedErrors);
        });
    });

    describe('when name is missing', () => {
        it('should say name is required', () => {
            values = {};
            actualErrors = validate(values);
            expect(actualErrors.name).toEqual('Required');
        });
    });

    describe('when name is empty', () => {
        it('should say name is required', () => {
            values = {'name': ''};
            actualErrors = validate(values);
            expect(actualErrors.name).toEqual('Required');
        });
    });

    describe('when cost is not a number', () => {
        it('should say cost must be a number', () => {
            values = {'cost': 'abc'};
            actualErrors = validate(values);
            expect(actualErrors.cost).toEqual('Must be a number');
        });
    });

    describe('when cost is negative', () => {
        it('should say cost cannot be negative', () => {
            values = {'cost': -1};
            actualErrors = validate(values);
            expect(actualErrors.cost).toEqual('Cannot be negative');
        });
    });

    describe('when state is too short', () => {
        it('should say state must be two characters', () => {
            values = {'address': {'state': 'N'}};
            actualErrors = validate(values);
            expect(actualErrors.address.state).toEqual('Must be a 2-char abbreviation');
        });
    });

    describe('when state is too long', () => {
        it('should say state must be two characters', () => {
            values = {'address': {'state': 'NHA'}};
            actualErrors = validate(values);
            expect(actualErrors.address.state).toEqual('Must be a 2-char abbreviation');
        });
    });
});
