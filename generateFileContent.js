const generateFileContent = (event) => {
    let stringToWrite = ``;
    for(let i = 0; i < 20; i++) {
      let randomNum = Math.floor(Math.random() * 100 * i);
      stringToWrite += `requestType:${event.requestType}-${randomNum},requestUrl:${event.requestUrl}-${randomNum},apiKey:${event.requestValues.api_key}-${randomNum},date:${event.requestValues.date}-${randomNum},hd:${event.requestValues.hd}-${randomNum},concept_tags:${event.requestValues.concept_tags}-${randomNum},count:${event.requestValues.count}-${randomNum},start_date:${event.requestValues.start_date},end_date:${event.requestValues.end_date},thumbs:${event.requestValues.thumbs}-${randomNum},thumbsize:${event.requestValues.thumbsize},title:${event.requestValues.title},explanation:${event.requestValues.explanation},url:${event.requestValues.url},hdurl:${event.requestValues.hdurl},media_type:${event.requestValues.media_type},service_version:${event.requestValues.service_version},date:${event.requestValues.date},copyRight:${event.requestValues.copyRight}\n`;
    }

    return stringToWrite;
}

module.exports = {
    generateFileContent
};