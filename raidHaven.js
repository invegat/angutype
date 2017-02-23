function(server,minValue,minRatio,maxValue,maxRatio,minLevel,maxLevel) {
    
    server = typeof server != 'undefined' ? server : 1;
    minValue = typeof minValue != 'undefined' ? minValue : 62500;
    maxValue = typeof maxValue != 'undefined' ? maxValue : 400000;
    minLevel = typeof minLevel != 'undefined' ? minLevel : 22;
    maxLevel = typeof maxLevel != 'undefined' ? maxLevel : 400;
    minRatio = typeof minRatio != 'undefined' ? minRatio: 0.75;
    maxRatio = typeof maxRatio != 'undefined' ? maxRatio: 2000000.0;
    
    print ("server: " + server);
    print ("minValue: " + minValue);
    print ("maxValue: " + maxValue);
    print ("minRatio: " + minRatio);
    print ("maxRatio: " + maxRatio);
    print ("minLevel: " + minLevel);
    print ("maxValue: " + maxLevel);
    

return db.getCollection('PirateTargets').find({
"max.gL":{$gt:minValue,$lt:maxValue},
"max.ratio":{$gt:minRatio,$lt:maxRatio},
"level.value":{$gt:minLevel,$lt:maxLevel},
server:{$eq:server},
nogo:{$exists:false}}).
sort({"raids.0.date":1})

}