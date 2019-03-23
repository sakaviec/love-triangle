/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let population = [undefined];
  let result = 0;

  for (let i = 0; i < preferences.length; i++) {
    population[i+1] = preferences[i];
  }

  for (let oneWhoLoves = 1; oneWhoLoves <= preferences.length; oneWhoLoves++) {

    let oneWhoIsLoved = population[oneWhoLoves];

    for (let j = 1; j <= preferences.length; j++) {
        let oneWhoIsThird = population[oneWhoIsLoved];

        if (population[oneWhoIsThird]==oneWhoLoves) {
            //console.log(oneWhoLoves+" - "+oneWhoIsLoved+" — "+oneWhoIsThird);
            result++
        }
            else {}
    }


  }
  
  if (preferences.length===0) {
  	return 0
  }
  	else{
  		return Math.floor(result/preferences.length/3)
  	}
};