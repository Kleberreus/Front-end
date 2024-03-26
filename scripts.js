//interpolação
//console.log(`A soma de 2 + 2 = ${2 + 2}`);

//comparações
//console.log(5>2);
//console.log(5<2);
//console.log(5<=2);
//console.log(5>=2);
//console.log(2==2);
//console.log(2 === '2') igual idêntico ou absoluto
//console.log(3 != 3);
//console.log(3 !== '3'); diferente absoluto
//console.log(3>2 && 2>1); (and)
//console.log(3>1 || 2<1); || (OR)
//console.log(!true); 
//console.log(!false); 

//variáveis

//var a = 2;
//let b = 3;
//const c = 4;

//if(true) {
    //console.log(a);
    //console.log(b);
    //console.log(c);
    
    //var d = 5;
    //let e = 6; //   não pode ser acessada de fora deste bloco
    //const f = 7;}

//console.log(d)
//console.log(e) // não pode
//console.log(f) // não pode

//declaração multipla
//const g=1, h=2, i=3;
//console.log(g,h,i);

//if-else
//const user = 'kleber';
//if(user == 'kleber'){
    //console.log('usuario autenticado');} //else{
    //console.log('usuario inexistente');}

//operador ternário -> equivale ao if-else
//user == 'kleber' ? console.log('usuario autenticado') : console.log('usuario inexistente');

//const curso = 'ENC';
//switch(curso) {
    //case 'ENC':
        //console.log('Engenharia de Computação');
      //  break;
    //case 'ESW':
        //console.log('Engenharia de Software'); 
      //  break
    //case 'EMC':
        //console.log('Engenharia Mecatronica');
      //  break;
    //default:
        //console.log('Curso inexistente');}

        // laços de repetição

//let j = 0;
//while(j<10) {
    //j++;
  //  console.log('Indice: ', j);
//}

//let k = 0;
//do{
    //console.log('Indice: ', k);
  //  k++;
//} while(k<10);

//for(let i = 0; i<10; i++) {
//    console.log('Indice: ', i);}

//funções

function defineParouImpar2(numero){
    numero % 2 === 0 ? console.log(`${numero} é par`) : console.log(`${numero} é impar`);
}
