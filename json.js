fetch('./program-data.json')

.then(response => {

return response.json();

})

.then(data => {
    // This 'data' is the actual JSON object parsed from the response body.
    console.log(data);
  });


