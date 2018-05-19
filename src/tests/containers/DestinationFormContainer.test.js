import React from 'react';
import DestinationFormContainer from '../../containers/DestinationFormContainer';
import { shallow } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import getADestinationResponseMock from '../resources/getADestinationResponseMock';
import mockAxios from 'axios';

it('renders without crashing', () => {
    shallow(<BrowserRouter>
                <DestinationFormContainer />
            </BrowserRouter>);
});

describe('DestinationFormContainer tests', () => {
    let DestinationFormContainerTest;
    let destinationFormContainerTest;
    let history;

    beforeAll(() => {
        DestinationFormContainerTest = class extends DestinationFormContainer {
            componentDidMount() {
                // do nothing
            }
        };
        // mock router's history object
        history = {
            push: jest.fn(() => {})
        };
        destinationFormContainerTest = shallow(<DestinationFormContainerTest history={history}/>);
    });
    
    it('gets a destination and maps it to the state', async () => {
        // setup
        mockAxios.get.mockImplementationOnce(
            jest.fn(() => Promise.resolve({ data: getADestinationResponseMock }))
        )
    
        const expectedDestination = {
            destination: {
                id: 1,
                address: {
                    street: "7 Pawtuckaway Road",
                    city: "Nottingham",
                    state: "NH",
                    zip: "03290",
                    linkToMap: 'https://goo.gl/maps/F3STETRbbNx'
                },
                name: 'Pawtuckaway State Park',
                cost: 39,
                dateToVisit: '2018-06-09',
                timeToVisit: '09:00:00',
                linkToWebsite: 'https://www.nhstateparks.org/visit/state-parks/pawtuckaway-state-park.aspx',
                phoneNumber: '603-895-3031',
                notes: ''
            }
        }
    
        // call function under test
        await destinationFormContainerTest.instance().getDestination(1);
    
        // expectations
        expect(mockAxios.get).toHaveBeenCalledTimes(1);
        expect(mockAxios.get).toHaveBeenCalledWith('/api/destinations/1');
        expect(destinationFormContainerTest.instance().state).toEqual(expectedDestination);
    });

    it('deletes a destination and removes it from the state', async () => {
        // setup
        const initialDestinations = {
            destination: {
                id: 1,
                address: {
                    street: "7 Pawtuckaway Road",
                    city: "Nottingham",
                    state: "NH",
                    zip: "03290",
                    linkToMap: 'https://goo.gl/maps/F3STETRbbNx'
                },
                name: 'Pawtuckaway State Park',
                cost: 39,
                dateToVisit: '2018-06-09',
                timeToVisit: '09:00:00',
                linkToWebsite: 'https://www.nhstateparks.org/visit/state-parks/pawtuckaway-state-park.aspx',
                phoneNumber: '603-895-3031',
                notes: ''
            }
        };
        destinationFormContainerTest.setState(initialDestinations);

        const expectedState = {
            destination: {}
        };

        // call function under test
        await destinationFormContainerTest.instance().deleteDestination(1);

        // expectations
        expect(mockAxios.delete).toHaveBeenCalledTimes(1);
        expect(mockAxios.delete).toHaveBeenCalledWith('/api/destinations/1');
        expect(history.push).toHaveBeenCalledTimes(1);
        expect(history.push).toHaveBeenCalledWith('/destinations');
        expect(destinationFormContainerTest.instance().state).toEqual(expectedState);
    });

    it('creates a destination and clears it from the state', async () => {
        // setup
        const formInputValues = {
            address: {
                street: "7 Pawtuckaway Road",
                city: "Nottingham",
                state: "NH",
                zip: "03290",
                linkToMap: 'https://goo.gl/maps/F3STETRbbNx'
            },
            name: 'Pawtuckaway State Park',
            cost: 39,
            dateToVisit: '2018-06-09',
            timeToVisit: '09:00:00',
            linkToWebsite: 'https://www.nhstateparks.org/visit/state-parks/pawtuckaway-state-park.aspx',
            phoneNumber: '603-895-3031',
            notes: ''
        }
        const expectedState = {
            destination: {}
        }

        // call function under test
        await destinationFormContainerTest.instance().submit(formInputValues);

        // expectations
        expect(mockAxios.post).toHaveBeenCalledTimes(1);
        expect(mockAxios.post).toHaveBeenCalledWith('/api/destinations', formInputValues);
        expect(destinationFormContainerTest.instance().state).toEqual(expectedState);
    });

    it('updates a destination and clears it from the state', async () => {
        // setup
        const formInputValues = {
            id: 1,
            address: {
                street: "7 Pawtuckaway Road",
                city: "Nottingham",
                state: "NH",
                zip: "03290",
                linkToMap: 'https://goo.gl/maps/F3STETRbbNx'
            },
            name: 'Pawtuckaway State Park',
            cost: 39,
            dateToVisit: '2018-06-09',
            timeToVisit: '09:00:00',
            linkToWebsite: 'https://www.nhstateparks.org/visit/state-parks/pawtuckaway-state-park.aspx',
            phoneNumber: '603-895-3031',
            notes: ''
        }
        const expectedState = {
            destination: {}
        }

        // call function under test
        await destinationFormContainerTest.instance().submit(formInputValues);

        // expectations
        expect(mockAxios.put).toHaveBeenCalledTimes(1);
        expect(mockAxios.put).toHaveBeenCalledWith('/api/destinations/1', formInputValues);
        expect(destinationFormContainerTest.instance().state).toEqual(expectedState);
    });
});
