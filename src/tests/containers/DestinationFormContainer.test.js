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

it('gets a destination and maps it to the state', async () => {

    let DestinationFormContainerTest;

    DestinationFormContainerTest = class extends DestinationFormContainer {
        componentDidMount() {
            // do nothing
        }
    };
    
    // setup
    const destinationFormContainerTest = shallow(<DestinationFormContainerTest />);

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
