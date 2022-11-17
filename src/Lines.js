import React,{useState} from 'react';
import SubmitForm from './SubmitForm';
import Header from './Header'
import SubwayCard from './SubwayCard';


function Lines ({info}) {

const [select, setSelect]= useState('all')

const newArray= info.filter(info=>{
    if (select === 'all') return true
    return info
})


function handleSelectChange(e){
    setSelect(e.target.value)
}


    return(
        <>

        <label for="Lines">Select: </label>
<select value={select} onChange={handleSelectChange} className='header-lines'name="Lines" id="Lines">
<option value='all'>Metro-Lines </option>
<optgroup label='Eight Avenue Line'>
  <option>A</option>
  <option>C</option>
  <option>E</option>
  </optgroup>
  <optgroup label='Sixth Avenue Line'>
  <option>B</option>
  <option>D</option>
  <option>F</option>
  <option>M</option>
  </optgroup>
  <optgroup label='Crosstown line'>
  <option >G</option>
  </optgroup>
  <optgroup label='Canarsie Line'>
  <option >L</option>
  </optgroup>
  <optgroup label='Nassau Street Line'>
  <option >J</option>
  <option >Z</option>
  </optgroup>
  <optgroup label='Broadway Line'>
  <option>N</option>
  <option>Q</option>
  <option>R</option>
  <option>W</option>
  </optgroup>
  <optgroup label='Broadway-Seventh Avenue Line'>
  <option>1</option>
  <option>2</option>
  <option>3</option>
  </optgroup>
  <optgroup label='Lexington Avenue Line'>
  <option>4</option>
  <option>5</option>
  <option>6</option>
  </optgroup>
  <optgroup label='Flushing Line'>
  <option>7</option>
  </optgroup>
  <optgroup label='Second Avenue Line'>
  <option>T</option>
  </optgroup>

  
</select>


        <div>
           {info.map((inf)=>{
           return  <SubwayCard info={inf}/>
           })}
        </div>
        <SubmitForm />
        
        </>
    )
}

export default Lines