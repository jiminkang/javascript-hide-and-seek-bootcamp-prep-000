function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector('#nested').querySelector('.target');
}

function increaseRankBy(n){
  const lis = document.querySelectorAll('.ranked-list');
  
}

function deepestChild(){
  return document.querySelector('#grand-node div div div div');
}