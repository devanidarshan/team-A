let winCombination = [[1,2,3], [1,4,7],[2,5,8],[3,6,9], [1,5,9],[3,5,7], [4,5,6], [7,8,9]]
const game = document.getElementById('game')
let moves = 0

function turns(){
  moves ++
  return moves & 1 ? 'X':'O'
}
 
function checkWin(combs){
  let O = combs.filter(inner => inner.every(x=>x=='O'))
  let X = combs.filter(inner => inner.every(x=>x=='X'))
  if (O[0] != undefined){
    return 'O'
  }
  else if (X[0] != undefined){
    return 'X'
  }
  else return false
  }
    
game.addEventListener('click', e=>{
  if (e.target.nodeName === 'BUTTON'){ 
    if (e.target.textContent != ''){
      return
    } 
    let player = turns()
    e.target.className += ' '+player
    e.target.textContent = player
     let square = Array.from(game.children).indexOf(e.target)+1
     
     winCombination = winCombination.map(inners => {
       let i = inners.indexOf(square)
       if (i >=0){
         inners[i] = player         
       } 
       return inners
       }
     )
    
      let winner = checkWin(winCombination)    
     if (winner){
       setTimeout(_=>game.textContent = winner+' wins', 200)
     }
  }
})
