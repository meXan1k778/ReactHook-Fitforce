
require("@babel/register");const fetch = require("node-fetch");

const router = require("./Routes").default;
const Sitemap = require("react-router-sitemap").default;

async function generateSitemap() {
    try {
    const trainers = await fetch(`https://87i6r1p1dc.execute-api.eu-central-1.amazonaws.com/dev/trainers`).then(res => res.json())
    const countrycities = await fetch(`https://87i6r1p1dc.execute-api.eu-central-1.amazonaws.com/dev/countrycities`).then(res => res.json())
    const countries = Object.keys(countrycities);

    let trainersId = [];

    for(var i = 0; i < trainers.length; i++) {
      trainersId.push({ id:trainers[i].url});
    }

    console.log('countrycities', countrycities)
    const paramsConfig = {
      "/trainer-profile/:id": trainersId,
      "/trainers/country": [{country:'country'}],
    //   [`/trainers?country=${countries}`]: [{countries:'countries'}],
    };

    return new Sitemap(router).applyParams(paramsConfig)
		.build('https://trainers.fitforce.com/')
		.save('./sitemap.xml', '/static/')


  } catch(e) {
    console.log(e);
  } 
}

generateSitemap()