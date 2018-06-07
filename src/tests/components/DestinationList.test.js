import React from 'react';
import DestinationList from '../../components/DestinationList';
import { mount, shallow } from 'enzyme';
import TableCell from '@material-ui/core/TableCell';

it('renders without crashing', () => {
    shallow(<DestinationList />);
});

describe('location cell', () => {
    let destination;
    let destinations = [];
    
    beforeEach(() => {
        destination = {
            id: 1,
            name: 'test',
            city: null,
            state: null,
            dateToVisit: '2019-01-01',
            linkToWebsite: 'www.test.com'
        };
    });

    it('displays nothing when neither city nor state is given', () => {
        // Setup
        destinations = [
            destination
        ];

        const wrapper = mount(<DestinationList destinations={destinations} />);
        const locationCell = wrapper.find(TableCell).get(6);

        // Expectations
        // The text of the cell would show as a child node in the string,
        // so it should not exist at all if there is no city or state
        expect(JSON.stringify(locationCell)).not.toContain('children');
    });

    it('displays city when no state is given', () => {
        // Setup
        destination = {
            ...destination,
            city: 'Dover'
        };
        destinations = [
            destination
        ];

        const wrapper = mount(<DestinationList destinations={destinations} />);
        const locationCell = wrapper.find(TableCell).get(6);

        // Expectations
        expect(JSON.stringify(locationCell)).toContain('Dover');
        expect(JSON.stringify(locationCell)).not.toContain('NH');
    });

    it('displays state when no city is given', () => {
        // Setup
        destination = {
            ...destination,
            state: 'NH'
        };
        destinations = [
            destination
        ];

        const wrapper = mount(<DestinationList destinations={destinations} />);
        const locationCell = wrapper.find(TableCell).get(6);

        // Expectations
        expect(JSON.stringify(locationCell)).not.toContain('Dover');
        expect(JSON.stringify(locationCell)).toContain('NH');
    });

    it('displays city and state when both are given', () => {
        // Setup
        destination = {
            ...destination,
            city: 'Dover',
            state: 'NH'
        };
        destinations = [
            destination
        ];

        const wrapper = mount(<DestinationList destinations={destinations} />);
        const locationCell = wrapper.find(TableCell).get(6);

        // Expectations
        expect(JSON.stringify(locationCell)).toContain('Dover');
        expect(JSON.stringify(locationCell)).toContain('NH');
    });
});
