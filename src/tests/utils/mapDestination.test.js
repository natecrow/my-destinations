import DestinationMapper from '../../utils/DestinationMapper';

describe('list mappings', () => {
    let inputDestination = {
        id: 1,
        name: 'test'
    };
    let expectedOutput = {
        id: 1,
        name: 'test',
        city: null,
        state: null,
        dateToVisit: null,
        linkToWebsite: null
    }

    it('maps destination with minimum data', () => {
        expect(DestinationMapper.mapDestinationToList(inputDestination)).toEqual(expectedOutput);
    });

    it('maps destination with city, state, date to visit, and link to website', () => {
        inputDestination = {
            ...inputDestination,
            dateToVisit: '06/01/2018',
            linkToWebsite: 'www.test.com',
            address: {
                city: 'Test City',
                state: 'NH'
            }
        };
        expectedOutput = {
            ...expectedOutput,
            city: 'Test City',
            state: 'NH',
            dateToVisit: '06/01/2018',
            linkToWebsite: 'www.test.com'
        };
        
        expect(DestinationMapper.mapDestinationToList(inputDestination)).toEqual(expectedOutput);
    });
});

describe('form mappings', () => {
    let inputDestination = {
        id: 1,
        name: 'Pawtuckaway State Park'
    };
    let expectedOutput = {
        id: 1,
        name: 'Pawtuckaway State Park',
        address: {
            street: null,
            city: null,
            state: null,
            zip: null,
            linkToMap: null
        },
        cost: null,
        dateToVisit: null,
        timeToVisit: null,
        linkToWebsite: null,
        phoneNumber: null,
        notes: null
    }

    it('maps destination with minimum data', () => {
        expect(DestinationMapper.mapDestinationToForm(inputDestination)).toEqual(expectedOutput);
    });

    it('maps destination with all data', () => {
        inputDestination = {
            ...inputDestination,
            address: {
                street: '7 Pawtuckaway Road',
                city: 'Nottingham',
                state: 'NH',
                zip: '03290',
                linkToMap: 'https://goo.gl/maps/F3STETRbbNx'
            },
            cost: 0,
            dateToVisit: '2018-06-09',
            timeToVisit: '09:00:00',
            linkToWebsite: 'https://www.nhstateparks.org/visit/state-parks/pawtuckaway-state-park.aspx',
            phoneNumber: '603-895-3031',
            notes: 'A state park in NH'
        };
        expectedOutput = {
            ...expectedOutput,
            address: {
                street: '7 Pawtuckaway Road',
                city: 'Nottingham',
                state: 'NH',
                zip: '03290',
                linkToMap: 'https://goo.gl/maps/F3STETRbbNx'
            },
            cost: 0,
            dateToVisit: '2018-06-09',
            timeToVisit: '09:00:00',
            linkToWebsite: 'https://www.nhstateparks.org/visit/state-parks/pawtuckaway-state-park.aspx',
            phoneNumber: '603-895-3031',
            notes: 'A state park in NH'
        };
        
        expect(DestinationMapper.mapDestinationToForm(inputDestination)).toEqual(expectedOutput);
    });
});
