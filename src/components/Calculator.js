import{React ,useState}  from 'react';
import CalButton from './CalButton';
import Result from './Result';

function Calculator(props) {

    const [result, setResult] = useState(0);
    const [firstNumber, setFirstNumber] = useState(0);
    const digits=["c","+-","%","/","7",'8','9','*','4','5','6','-','1','2','3','+','0','.','='];
 
    const [operation, setOPeration] = useState("");
    const array = ["+", "-", "*","/"];

      const handleClearInput= (e)=>{
        const symbole=(e.target.value);

        if(!isNaN(parseInt(symbole))){
          
        
          setResult(parseInt(symbole))
          console.log(result)
    
        }
        else if (symbole==="c"){
            setResult(0);
          }
          else if(symbole==='+-'){
            setResult(result*-1);
          }
          else if (symbole==="."){
            setResult(result+".");
          }
          else if(symbole==='+-'){
            setResult(result*-1);
          }


          else if (symbole==='%'){
            setResult(result/100.0)
          }
          else if(array.includes(symbole)){
            setFirstNumber(result)
            setOPeration(symbole)
            setResult(symbole);
            console.log(firstNumber)
          }
        
          else if(symbole==='='){
            let secoundNumber=result
            
            if(operation==="+"){
              setResult(firstNumber+secoundNumber)
            }
            else if(operation==='-'){
                setResult(firstNumber-secoundNumber)
            }
            else if(operation==='*'){
                setResult(firstNumber*secoundNumber)
            }
            else if(operation==='/'){
                setResult((firstNumber/secoundNumber).toFixed(5))
            }
          }
   
      }
     
     


    return (
        <div>
            <div className="calculator">
                <Result result={result}/>
                <div className="calculator-buttons">

                {digits.map((digit,index)=>{
                    return(
                        <CalButton key={index} value={digit} onClick={handleClearInput}/>
                    )
                })
                /* <CalButton value="C"  onClick={handleClearInput}/>
                <CalButton value="+-"  onClick={handleClearInput}/>
                <CalButton value="%"  onClick={handleClearInput}/>
                <CalButton value="/"  onClick={handleClearInput}/>
                <CalButton value="7"  onClick={handleClearInput}/>
                <CalButton value="8"  onClick={handleClearInput}/>
                <CalButton value="9"  onClick={handleClearInput}/>
                <CalButton value="*"  onClick={handleClearInput}/>
                <CalButton value="4"  onClick={handleClearInput}/>
                <CalButton value="5"  onClick={handleClearInput}/>
                <CalButton value="6"  onClick={handleClearInput}/>
                <CalButton value="-"  onClick={handleClearInput}/>
                <CalButton value="1"  onClick={handleClearInput}/>
                <CalButton value="2"  onClick={handleClearInput}/>
                <CalButton value="3"  onClick={handleClearInput}/>
                <CalButton value="+"  onClick={handleClearInput}/>
                <CalButton value="0"  onClick={handleClearInput}/>
                <CalButton value="."  onClick={handleClearInput}/>
                <button className = "equal" value = "=" onClick = {handleClearInput}> =</button> */}
                </div>

            </div>

            


            
        </div>
    );
}

export default Calculator;