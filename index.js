import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

/* useEffect(()=>{
  setTimeout(()=>{setCount((count)=count+1),1000}) 
  }) */

const E=[{o1:'Steve chen',o2:'Jawed Karim',o3:'Chad Hurley',o4:'All of the above'},{o1:'Sundar Pichai',o2:'Satya Nadella',o3:'Jeff Bezos',o4:'Steve Chen'},{o1:'Srilanka',o2:'Brazil',o3:'Australia',o4:'India'},{o1:'Lion',o2:'Elephant',o3:'Giraffe',o4:'Goat'}]

let Ques=["Who is the founder of youtuber ?","Who's is the CEO of Google ?","Which team was the winner of 2023 Cricket World Cup ?","Which is the tallest animal ?"]

let j=0

let k=-1 // when i have written inside the function ( i.e function XYZ ) .. Whenever i was clicking on the 
         // submit button ,, k value becoming -1.

    let l=0;
    let score=0;
    let value;

const aim=['Question 2','Question 3','Question 4','Question 5']       

function XYZ(){

var answer=['New Delhi','All of the above','Sundar Pichai','Australia','Giraffe']

const [ques,changeques]=useState("What is the capital of India ?")

const [op,setop]=useState({o1:'Patna',o2:'New Delhi',o3:'Odisha',o4:'Goa'})

const [input,setInput] = useState('Question 1')

const [pqr,xyz] = useState('radio') 

const [set,lastSet] = useState(true)

const [ ok,setOk ] = useState(null)

const [ type,type1 ] = useState('button')

let gh='Submit'

const W=()=>{

if(k<4){

changeques(Ques[k])
setop(E[k])
j=0
setOk(false)

setTimeout(()=>setOk(null),500)

// console.log(j)

}
else
{

changeques(<h2>Results</h2>) // Working ,, but getting warning [ in console ] 
setop("")
xyz('hidden')
lastSet(false)
type1('hidden')
console.log(score)

}

}

const Y=e=>{

e.preventDefault() // -- did nothing

if(j>0)
{
if(value===answer[l]){
  // alert()
  score=score+1
  // console.log(score)
  // console.log(value)
}

k++
l++
setInput(aim[k])
W()

}

else 

{
  alert('Select an option')
}

}

const Z=e=>{

 // setOk(true)
 j++
 value=e.target.value
 // setOk(null)
 // setOk(null)
 console.log(value)

 }

const M=e=>{
 e.preventDefault() // form will not submit
    // alert()
}

return (

<>

<h1 id='1'>QUIZ APP</h1>

<h2>{input}</h2>

<h3>{ques}</h3>
 
 <h1>{ set ? null : 'Your Score is' } </h1>
<h2>{ set ? null : score }</h2>

<form onSubmit={M}> 

{/* hidden = 'false' did not worked [it was not hiding] */}

<label >{op.o1}
<input type={pqr} onClick={Z} name='option' value={op.o1} checked={ok} />
</label><br></br>
<label >{op.o2} 
<input type={pqr} onClick={Z} name='option' value={op.o2} checked={ok} />
</label><br></br>
<label >{op.o3}
<input type={pqr} onClick={Z} name='option' value={op.o3} checked={ok} /> 
</label><br></br>
<label >{op.o4}
<input type={pqr} onClick={Z} name='option' value={op.o4} checked={ok} /> 
</label><br></br>

{/* 
<button>Great</button> */}

</form>

<br></br>

<div>

<input type={type} value={gh} onClick={Y}></input>

{/* button types are submit,reset and button */}

</div><br></br>

{/* </form> */}

</>

)

}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<XYZ />)

// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
//  );

reportWebVitals();

