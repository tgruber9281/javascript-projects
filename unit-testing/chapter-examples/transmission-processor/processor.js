function processor(transmission) {
    if (transmission.indexOf("::") < 0) {
        // Data is invalid
        return -1;
     }
    let parts = transmission.trim().split("::");
    if (parts.length >2) {
        return -1;
    }

    let id = parts[0];
    id = processID(id);
    
    let rawData = parts[1];
    rawData = processRawdata(rawData);
    
    return {
        id: id,
        rawData: rawData
    };
}

function processID(id) {
    if (isNaN(id)) {
        id = -1;
    } else {
        id = Number(id);
    }
    return id;
}

function processRawdata(rawData) {
    let regex = /^[0-9]+$/;

    if (rawData[0] !== '<' || rawData[(rawData.length-1)] !== '>') {
        rawData = -1;
    } else {
        rawData = rawData.slice(1,-1);
        if (rawData.indexOf('<') !== -1 || rawData.indexOf('>') !== -1 || regex.test(rawData) === false) {
            rawData = -1;
        }
    }
    return rawData
}

processor('9701::<487297403495<720912>');

module.exports = processor;