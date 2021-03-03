
function simplefunction() {

    // Select the HTML DOM elements
    const input1box = document.querySelector("#input1");
    const input2box = document.querySelector("#input2");
    const outputparagraph = document.querySelector("#echoinputs")

    // Regurgitate the inputs
    outputparagraph.textContent = ("Your inputs were: " + input1box.value +
        " and " + input2box.value);

    // The Poemist API does not take any query parameters, but
    //  if it did you could use the inputs to build the proper query.
    var apiQuery = 'https://www.poemist.com/api/v1/randompoems'

    fetch(apiQuery)
        .then(response => response.json())
        .then(data => displayResponse(data));

}

function displayResponse(data) {

    // Poemist returns an array of poems. Get the first one
    firstitem = data[0]

    // Each poem has several fields. Just get the content field
    poem = firstitem.content

    // Select the target HTML element
    const simpleOut = document.querySelector("#poem");
    
    // Set the text
    simpleOut.textContent = data[0].content
}

