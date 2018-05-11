export default (destination) => {
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
};
