import React from 'react';
import DestinationListContainer from '../../containers/DestinationListContainer';
import { shallow } from 'enzyme';
import mockAxios from 'axios';
import getAllDestinationsResponseMock from '../resources/getAllDestinationsResponseMock.json';

describe('DestinationListContainer tests', () => {
    let DestinationListContainerTest;

    beforeAll(() => {
        DestinationListContainerTest = class extends DestinationListContainer {
            componentDidMount() {
                // do nothing
            }
        };
    });

    it('renders without crashing', () => {
        shallow(<DestinationListContainerTest />);
    });

    it('gets all destinations from API and map them to the state', async () => {
        // setup
        const destinationListContainerTest = shallow(<DestinationListContainerTest />);

        mockAxios.get.mockImplementationOnce(
            jest.fn(() => Promise.resolve({ data: getAllDestinationsResponseMock }))
        )

        const expectedDestinations = {
            destinations: [
                {
                    id: 1,
                    name: 'Canobie Lake Park',
                    city: 'Salem',
                    state: 'NH',
                    dateToVisit: '2018-05-26',
                    linkToWebsite: 'http://www.canobie.com/'
                },
                {
                    id: 3,
                    name: 'Pawtuckaway State Park',
                    city: 'Nottingham',
                    state: 'NH',
                    dateToVisit: '2018-06-09',
                    linkToWebsite: 'https://www.nhstateparks.org/visit/state-parks/pawtuckaway-state-park.aspx'
                }]
        };

        // call function under test
        await destinationListContainerTest.instance().getAllDestinations();

        // expectations
        expect(mockAxios.get).toHaveBeenCalledTimes(1);
        expect(mockAxios.get).toHaveBeenCalledWith('/api/destinations');
        expect(destinationListContainerTest.instance().state).toEqual(expectedDestinations);
    });

    it('deletes a destination and removes it from the state', async () => {
        // setup
        const destinationListContainerTest = shallow(<DestinationListContainerTest />);

        const initialDestinations = {
            destinations: [
                {
                    id: 1,
                    name: 'Canobie Lake Park',
                    city: 'Salem',
                    state: 'NH',
                    dateToVisit: '2018-05-26',
                    linkToWebsite: 'http://www.canobie.com/'
                },
                {
                    id: 3,
                    name: 'Pawtuckaway State Park',
                    city: 'Nottingham',
                    state: 'NH',
                    dateToVisit: '2018-06-09',
                    linkToWebsite: 'https://www.nhstateparks.org/visit/state-parks/pawtuckaway-state-park.aspx'
                }]
        };
        destinationListContainerTest.setState(initialDestinations);

        const expectedDestinations = {
            destinations: [
                {
                    id: 3,
                    name: 'Pawtuckaway State Park',
                    city: 'Nottingham',
                    state: 'NH',
                    dateToVisit: '2018-06-09',
                    linkToWebsite: 'https://www.nhstateparks.org/visit/state-parks/pawtuckaway-state-park.aspx'
                }]
        };

        // call function under test
        await destinationListContainerTest.instance().deleteDestination(1);

        // expectations
        expect(mockAxios.delete).toHaveBeenCalledTimes(1);
        expect(mockAxios.delete).toHaveBeenCalledWith('/api/destinations/1');
        expect(destinationListContainerTest.instance().state).toEqual(expectedDestinations);
    })
})
