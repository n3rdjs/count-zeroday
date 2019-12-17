const fetch = require('node-fetch');

x=require('./z3r0d4y.json')
down = 0;

for (let n of x) {
     fetch('https://npm-stat.com/api/download-counts?package='+encodeURIComponent(n)+'&from=1990-12-16&until=2019-12-16')
        .then(v=>v.json())
        .then(v=> {
            
    try{
        down += Object.values(v[Object.keys(v)[0]]).reduce((x,y)=>x+=y);
        console.log(down)
    } catch(e) { console.log(e+'\n'+e.stack) }
        })

}