const handler = require('./index').handler;

handler({
    "requestType": "GET",
    "requestUrl": "https://api.nasa.gov/planetary/apod",
    "requestValues": {
        api_key: "DEMO_KEY", 
        date: "2020-07-15",
        hd: true,
        concept_tags: true,
        count: 10,
        start_date: "2020-07-15",
        end_date: "2020-07-15",
        thumbs: true,
        thumbsize: 1920,
        title: "Apod",
        explanation: "Explanation",
        url: "URL",
        hdurl: "HDURL",
        media_type: "MediaType",
        service_version: "ServiceVersion",
        date: "Date",
        copyRight: "CopyRight"
    }
}).then((response) => {
    console.log(response);
});