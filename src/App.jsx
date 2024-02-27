import Button from '../Button'
import React,{useState} from 'react'


const App = () => {
  const [displayValue, setDisplayValue] = useState("0");

  const handleButtonClick = (value)=>{
    if(value === "C"){
      setDisplayValue("0");
    }
    else if (value === "="){
      setDisplayValue(eval(displayValue));
    }
    else{
      if(displayValue==="0"){
        setDisplayValue(value);
      } else{
        setDisplayValue(displayValue+value);
      }
    }
  }
  return (<>
      <div className='main_container'>
        <div className='inside_container'>
        <div className='display_number'>
         {displayValue}
        </div>
      <div className='first_line'>
      <Button onClick={handleButtonClick} value = {"7"} num ="7"/>
      <Button onClick={handleButtonClick} value = {"8"} num ="8"/>
      <Button onClick={handleButtonClick}  value = {"9"}num ="9"/>
      <Button onClick={handleButtonClick} value = {"+"}name="special_btn" num ="+" />
      </div>
      <div className='second_line'>
      <Button onClick={handleButtonClick} value = {"4"} num ="4"/>
      <Button onClick={handleButtonClick}  value = {"5"} num ="5"/>
      <Button onClick={handleButtonClick} value = {"6"} num ="6"/>
      <Button  onClick={handleButtonClick} value = {"-"}name="special_btn" num ="-"/>
      </div>

      <div className='third_line'>
      <Button value = {"1"} onClick={handleButtonClick} num ="1"/>
      <Button onClick={handleButtonClick} value = {"2"} num ="2"/>
      <Button onClick={handleButtonClick}  value = {"3"}num ="3"/>
      <Button onClick={handleButtonClick} value = {"*"}name="special_btn" num ="*"/>
      </div>

      <div className='fourth_line'>
      <Button onClick={handleButtonClick} value = {"C"}name="delete_btn" num ="C"/>
      <Button onClick={handleButtonClick} value = {"0"} num ="0"/>
      <Button onClick={handleButtonClick} value = {"="}name="special_btn" num ="="/>
      <Button onClick={handleButtonClick} value = {"/"} name= "special_btn" num ="/"/>
      </div>
      </div>
      </div>
      </>
  )
}

export default App