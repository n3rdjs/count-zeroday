const fetch = require('node-fetch');

let x = require('./z3r0d4y.json');

r = ''
down = 0;
dep = 0;
for (let n of x) {
     fetch('https://www.npmjs.com/package/'+encodeURIComponent(n))
        .then(v=>v.text())
        .then(v=> {
            dep += parseInt(/{"dependentsCount":(\d+)/.exec(v)[1]);
            console.log(dep);
        });
}