class DestinationMapper {

    static mapDestinationToList(destination) {
        let city = null;
        let state = null;
        let dateToVisit = null;
        let linkToWebsite = null;
        
        if (destination.address != null) {
            if (destination.address.city != null) {
                city = destination.address.city;
            }
            if (destination.address.state != null) {
                state = destination.address.state;
            }
        }
        if (destination.dateToVisit != null) {
            dateToVisit = destination.dateToVisit;
        }
        if (destination.linkToWebsite != null) {
            linkToWebsite = destination.linkToWebsite;
        }

        return {
            id: destination.id,
            name: destination.name,
            city: city,
            state: state,
            dateToVisit: dateToVisit,
            linkToWebsite: linkToWebsite
        };
    }

    static mapDestinationToForm(destination) {
        let cost = null;
        let dateToVisit = null;
        let timeToVisit = null;
        let linkToWebsite = null;
        let phoneNumber = null;
        let notes = null;
        
        // address
        let street = null;
        let city = null;
        let state = null;
        let zip = null;
        let linkToMap = null;
        
        if (destination.cost != null) {
            cost = destination.cost;
        }
        if (destination.dateToVisit != null) {
            dateToVisit = destination.dateToVisit;
        }
        if (destination.timeToVisit != null) {
            timeToVisit = destination.timeToVisit;
        }
        if (destination.linkToWebsite != null) {
            linkToWebsite = destination.linkToWebsite;
        }
        if (destination.phoneNumber != null) {
            phoneNumber = destination.phoneNumber;
        }
        if (destination.notes != null) {
            notes = destination.notes;
        }

        if (destination.address != null) {
            if (destination.address.street != null) {
                street = destination.address.street;
            }
            if (destination.address.city != null) {
                city = destination.address.city;
            }
            if (destination.address.state != null) {
                state = destination.address.state;
            }
            if (destination.address.zip != null) {
                zip = destination.address.zip;
            }
            if (destination.address.linkToMap != null) {
                linkToMap = destination.address.linkToMap;
            }
        }

        return {
            id: destination.id,
            name: destination.name,
            address: {
                street: street,
                city: city,
                state: state,
                zip: zip,
                linkToMap: linkToMap
            },
            cost: cost,
            dateToVisit: dateToVisit,
            timeToVisit: timeToVisit,
            linkToWebsite: linkToWebsite,
            phoneNumber: phoneNumber,
            notes: notes
        };
    };
}

export default DestinationMapper;
