// Write your cade below:
function main(system,user) {
    var aNumber=0;
    var bNumber=0;
    for(let i=0;i<4;i++){
        for(let j=0;j<4;j++){
            if (user[j] === system[i]) {
                  if (i === j) {
                       aNumber++;
                  }
                  else
                       bNumber++;
            }
        }
    }
    result=aNumber+'A'+bNumber+'B';
    return result;

}

module.exports = main;