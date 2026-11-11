// To add a game: create games/<id>.html and add one entry here.
const GAMES=[
{id:'gravity-flip',name:'Gravity Flip',e:'🌀',k:'#3de0d0',d:'One button flips gravity. Dodge the blocks.',unit:'pts'},
{id:'code-breaker',name:'Code Breaker',e:'🔐',k:'#ffd24a',d:'Crack the secret 4-digit code in 8 tries.',unit:'tries',low:1},
{id:'typing-rush',name:'Typing Rush',e:'⌨️',k:'#ff5d73',d:'Type falling tech words before they hit the floor.',unit:'words'},
{id:'memory-matrix',name:'Memory Matrix',e:'🧠',k:'#9b8cff',d:'Memorize the lit tiles. Gets harder every level.',unit:'levels'},
{id:'reflex-duel',name:'Reflex Duel',e:'⚡',k:'#7dff7a',d:'Two players, one keyboard. Fastest finger wins.',unit:''}
];
const best={
 get(id){try{return localStorage.getItem('best_'+id)}catch(e){return null}},
 set(id,v){try{const g=GAMES.find(x=>x.id===id),o=localStorage.getItem('best_'+id);
  if(o===null||(g.low?v<+o:v>+o))localStorage.setItem('best_'+id,v)}catch(e){}}
};
