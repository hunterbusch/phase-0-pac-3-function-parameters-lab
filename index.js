function introduction(name) { 
    return `Hi, my name is ${name}.`
}
introduction("Hunter");
function introductionWithLanguage(name, language){
 return `Hi, my name is ${name} and I am learning to program in ${language}.`   
}
introductionWithLanguage("Hunter", "English");
function introductionWithLanguageOptional(name, language = "JavaScript" ){
    return `Hi, my name is ${name} and I am learning to program in ${language}.`   
   }
introductionWithLanguageOptional("Hunter");