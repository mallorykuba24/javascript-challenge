
showData(data);


function showData(info) {
    d3.select('tbody').html('');

    info.forEach(obj => {
        var row = d3.select('tbody').append('tr');
        Object.values(obj).forEach(val =>{
            row.append('td').text(val)
        })
    });
};

d3.select('button').on('click', () => {
    var date = d3.select('input').property('value');

    console.log(date);

    var filteredData = data.filter(obj => obj.datetime == date);
    showData(filteredData);
})
