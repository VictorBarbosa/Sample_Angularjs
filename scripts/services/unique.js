 // Aqui nos definimos o filtro
angular.module('app').filter('unique', function() {
// Aqui iremos retonar uma funcção com a coleção que iremos pegar
// E a palabra chave
return function(collection, keyname) {
   // nos definimos nossa saida e as chaves do array;
   var output = [],
       keys = [];
//aqui usaremos o forEach do angular na coleção
      angular.forEach(collection, function(item) {
                  //checamos a chave de cada objeto
          var key = item[keyname];
  if(keys.indexOf(key) === -1) {
   //adiciona a chave ao array
      keys.push(key); 
     // da um push no array de saida
      output.push(item);
  }
});
//   retorna a nossa saida
 return output;
};
});