function idade(){
  var n = 0;
  var nacimento = [2015, 9, 02];
  var ms = moment().diff(moment(nacimento), 'months', true);
  var yr = moment().diff(moment(nacimento), 'year', true);
  
  if(yr > 1){
    ano = parseInt(yr);
    yms = ms - (ano * 12);
    
    n = parseInt(yr) + " e "+ (parseInt(yms));
    
  }else{
    n = parseInt(ms);     
  }
  return n + " meses";
}
