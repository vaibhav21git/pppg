const b1 = document.getElementById('p1b');
const b2  = document.querySelector('#p2b');
const resetb = document.querySelector('#reset')
const maxscore = document.querySelector('#playto')
let gameover = false;

b1.addEventListener('click' , function()
{
    if(!gameover)
    {
    if(p1s!==winningscore)
    {
    p1s+=1;
    if(p1s===winningscore)
    {
        sc1.classList.add('winner');
        sc2.classList.add('loser');
        gameover  = true;
    }
    sc1.textContent = p1s;
    }
    }
}
);
b2.addEventListener('click' , function()
{
    if(!gameover)
    {
    if(p2s!==winningscore)
    {
    p2s+=1;
    if(p2s===winningscore)
    {
        sc2.classList.add('winner');
        sc1.classList.add('loser');
        gameover  = true;
    }
    sc2.textContent = p2s;
    }
    }

}
);

let winningscore  = 5; 

const sc1  = document.getElementById('s1');
const sc2  = document.querySelector('#s2');

let p1s = 0; 
let p2s  = 0; 

resetb.addEventListener('click',reset);


maxscore.addEventListener('change' ,function()
{
   winningscore  =  parseInt(this.value);
   reset();
}
)


function reset()
{
    gameover  = false;
    p1s = 0; 
    p2s  = 0; 
    sc1.textContent = 0 ;
    sc2.textContent = 0 ; 
    sc1.classList.remove('winner','loser');
    sc2.classList.remove('winner','loser');

 }
 