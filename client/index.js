//const axios = require('axios');

// Promise.all([
//     axios.get('http://localhost:3000/randomWord'),
//     axios.get('http://localhost:3000/randomWord'),
//     axios.get('http://localhost:3000/randomWord'),
//     axios.get('http://localhost:3000/randomWord'),
//     axios.get('http://localhost:3000/randomWord')
// ]).then(result => {
//     console.log(result[0]),
//         console.log(result[1]),
//         console.log(result[2]),
//         console.log(result[3]),
//         console.log(result[4]);
// });

$(document).ready(function() {
    Promise.all([
        axios.get('http://localhost:3000/randomWord'),
        axios.get('http://localhost:3000/randomWord'),
        axios.get('http://localhost:3000/randomWord'),
        axios.get('http://localhost:3000/randomWord'),
        axios.get('http://localhost:3000/randomWord')
    ]).then(result => {
        $('body').append('<h3>Random words:</h3>');
        $('body').append('<ul><li>' + result[0].data + '</li></ul>');
        $('body').append('<ul><li>' + result[1].data + '</li></ul>');
        $('body').append('<ul><li>' + result[2].data + '</li></ul>');
        $('body').append('<ul><li>' + result[3].data + '</li></ul>');
        $('body').append('<ul><li>' + result[4].data + '</li></ul>');
    });
});
