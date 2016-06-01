var path = require('path');
var fs = require('fs');
var app = require(path.resolve(__dirname, '../server'));
var outputPath = path.resolve(__dirname, '../../common/models');

var dataSource = app.dataSources.plands;

function schemaCB(err, schema) {
  if(schema) {
    console.log("Auto discovery success: " + schema.name);
    var outputName = outputPath + '/' +schema.name + '.json';
    fs.writeFile(outputName, JSON.stringify(schema, null, 2), function(err) {
      if(err) {
        console.log(err);
      } else {
        console.log("JSON saved to " + outputName);
      }
    });
  }
  if(err) {
    console.error(err);
    return;
  }
  return;
};

dataSource.discoverSchema('ACTIVITY',{schema:'plan_it'},schemaCB);
dataSource.discoverSchema('ACTIVITY_SPECIFIC',{schema:'plan_it'},schemaCB);
dataSource.discoverSchema('AGRICULTURE__PROFILE',{schema:'plan_it'},schemaCB);
dataSource.discoverSchema('ANIMAL_HUSBANDRY',{schema:'plan_it'},schemaCB);
dataSource.discoverSchema('COMMUNITY_INSTITUTES',{schema:'plan_it'},schemaCB);
dataSource.discoverSchema('CREDIT_INSTITUTE',{schema:'plan_it'},schemaCB);
dataSource.discoverSchema('DIESEASE_VI',{schema:'plan_it'},schemaCB);
dataSource.discoverSchema('DISTRICT',{schema:'plan_it'},schemaCB);
dataSource.discoverSchema('EDUCATIONAL__INST',{schema:'plan_it'},schemaCB);
dataSource.discoverSchema('EDUCATION_PROFILE',{schema:'plan_it'},schemaCB);
dataSource.discoverSchema('FARMER',{schema:'plan_it'},schemaCB);
dataSource.discoverSchema('FOREST__FAUNA',{schema:'plan_it'},schemaCB);
dataSource.discoverSchema('FOREST__FLORA',{schema:'plan_it'},schemaCB);
dataSource.discoverSchema('HH_ASSETS_MASTER',{schema:'plan_it'},schemaCB);
dataSource.discoverSchema('HH__ASSEST',{schema:'plan_it'},schemaCB);
dataSource.discoverSchema('HOUSEHOLD',{schema:'plan_it'},schemaCB);
dataSource.discoverSchema('HOUSE_HOLD_SIZE',{schema:'plan_it'},schemaCB);
dataSource.discoverSchema('INDIVIDUAL_HH_ASSET',{schema:'plan_it'},schemaCB);
dataSource.discoverSchema('INDVIDUALS_HOUSEHOLD',{schema:'plan_it'},schemaCB);
dataSource.discoverSchema('INSTITUTE',{schema:'plan_it'},schemaCB);
dataSource.discoverSchema('INSTITUTE_ACTIVITY_REL',{schema:'plan_it'},schemaCB);
dataSource.discoverSchema('INSTITUTE_VILLAGE_REL',{schema:'plan_it'},schemaCB);
dataSource.discoverSchema('ISSUE',{schema:'plan_it'},schemaCB);
dataSource.discoverSchema('ISSUE_ACTIVITY_REL',{schema:'plan_it'},schemaCB);
dataSource.discoverSchema('MARKET',{schema:'plan_it'},schemaCB);
dataSource.discoverSchema('MARKET__PRODUCT',{schema:'plan_it'},schemaCB);
dataSource.discoverSchema('NTFP',{schema:'plan_it'},schemaCB);
dataSource.discoverSchema('OCCUPATION_VI',{schema:'plan_it'},schemaCB);
dataSource.discoverSchema('PLAN',{schema:'plan_it'},schemaCB);
dataSource.discoverSchema('PLAN_ACTIVITY_REL',{schema:'plan_it'},schemaCB);
dataSource.discoverSchema('POPULATION_VI',{schema:'plan_it'},schemaCB);
dataSource.discoverSchema('PROFESSION',{schema:'plan_it'},schemaCB);
dataSource.discoverSchema('SCHEME',{schema:'plan_it'},schemaCB);
dataSource.discoverSchema('SCHEME_ACTIVITY_REL',{schema:'plan_it'},schemaCB);
dataSource.discoverSchema('SELF_HELP_GROUP',{schema:'plan_it'},schemaCB);
dataSource.discoverSchema('SELF_HELP_MEMBER',{schema:'plan_it'},schemaCB);
dataSource.discoverSchema('SITUATION_ANALYSIS',{schema:'plan_it'},schemaCB);
dataSource.discoverSchema('SKILLS',{schema:'plan_it'},schemaCB);
dataSource.discoverSchema('SOLUTION_CHART',{schema:'plan_it'},schemaCB);
dataSource.discoverSchema('STATE',{schema:'plan_it'},schemaCB);
dataSource.discoverSchema('TALUK',{schema:'plan_it'},schemaCB);
dataSource.discoverSchema('USER__PLAN__REL',{schema:'plan_it'},schemaCB);
dataSource.discoverSchema('VEGETATION',{schema:'plan_it'},schemaCB);
dataSource.discoverSchema('VILLAGE',{schema:'plan_it'},schemaCB);
dataSource.discoverSchema('VILLAGE_ACTIVITY_REL',{schema:'plan_it'},schemaCB);
dataSource.discoverSchema('VI__ASSEST',{schema:'plan_it'},schemaCB);
