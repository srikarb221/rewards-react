

export const callRewardsApi = (urlpath) => {
    let url = 'http://localhost:8080/rewards/';

    if (urlpath) {
        url += urlpath;
    }

    return fetch(url, {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
        }
    });
}

export const getMonthName = (month) => {
    switch (month) {
        case '1':
            return 'January';
        case '2':
            return 'February';
        case '3':
            return 'March';
        case '4':
            return 'April';
        case '5':
            return 'May';
        case '6':
            return 'June';
        case '7':
            return 'July';
        case '8':
            return 'August';
        case '9':
            return 'September';
        case '10':
            return 'October';
        case '11':
            return 'November';
        case '12':
            return 'December';
        default:
            return month;
    }
}