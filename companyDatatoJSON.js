'use strict';

const fs = require('fs');
const csv = require('csv');

fs.readFile('./data/CompanyData.csv', (error, data) => {
  csv.parse(data, (error, data) => {
    let companies = [];
    for (var i = 1; i < data.length; i++) {
      let row = data[i];
      let year = row
//General and industry info on companies
      let general = {
        ISIN: row[0],
        name: row[1],
        ticker: row[2],
        country: row[3],
        industry: row[4],
        sector: row[5],
        sector2: row[6],
        gics: row[7],
        sub: row[8],
        ipcc: row[9],
        target: [],
        emissions: [],
        emissionsgdp: []
      }
// Company Targets for CO2 emissions
      general.target.push({
        reduction: row[10],
        base: row[11],
        target: row[12],
        delta: row[13],
        gap2EIA: row[14]
      })
// CO2 EMISSIONS
      general.emissions.push({
        2007: parseFloat(row[15]),
        2008: parseFloat(row[16]),
        2009: parseFloat(row[17]),
        2010: parseFloat(row[18]),
        2011: parseFloat(row[19]),
        2012: parseFloat(row[20]),
        2013: parseFloat(row[21]),
        2014: parseFloat(row[22]),
        2015: parseFloat(row[23]),
        2016: parseFloat(row[24]),
        2017: parseFloat(row[25]),
      })
// CO2 Emissions / GDP
      general.emissionsgdp.push({
        2007: parseFloat(row[26]),
        2008: parseFloat(row[27]),
        2009: parseFloat(row[28]),
        2010: parseFloat(row[29]),
        2011: parseFloat(row[30]),
        2012: parseFloat(row[31]),
        2013: parseFloat(row[32]),
        2014: parseFloat(row[33]),
        2015: parseFloat(row[34]),
        2016: parseFloat(row[35]),
        2017: parseFloat(row[36])
      })

      companies.push(general);
    }
    fs.writeFile('./seed/companies.json', JSON.stringify(companies, null, 2),(error) => {
      console.log('companies.json created');
    });
  });
});
