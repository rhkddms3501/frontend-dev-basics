const fetch = require('./ex02.js');

const ex03 = async function (param) {
    try {
        const data = await fetch(param);
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

ex03("data");
console.log("wait...");