import React, { useCallback, useEffect, useRef, useState } from 'react'

export default function Passwordgenerator() {
  const [length,setLength]=useState(8)
  const [numberAllowed,setNumberAllowed]=useState(false)
  const [charAllowed,setCharAllowed] = useState(false)
  const [password,setPassword]=useState("")


  const PasswordGenerator = useCallback(()=>{
    let pass = ""
    var str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    
    if(numberAllowed){
      str+="01234567890"
    }

    if(charAllowed)
    {
      str+="!@#$%^&*()_-=+?~"
    }

    for(let i=1;i<=length;i++)
    {
      let char=Math.floor(Math.random() * str.length+1);
      pass+=str.charAt(char);
    }
    
  setPassword(pass)

  },[length,numberAllowed,charAllowed,setPassword]);

  // function for copy the password 
  const copyPassword=useCallback(()=>{
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0,3)      //only 3 character select karte
    window.navigator.clipboard.writeText(password);
  },[password])

  // useEffect hook
  
  useEffect(()=>{
    PasswordGenerator()
  },[length,numberAllowed,charAllowed,PasswordGenerator]);


  // useRef  hook

  const passwordRef = useRef(null)

  return (
    <>
        
        <div className="container mt-3 bg-white">
            <div className="row m-0 bg-dark" style={{borderRadius:"20px"}}>
                <div className="col-md-12 ">
                    <h1 className="text-center text-light mt-4 mb-5">Password Generator</h1>
                </div>
                <div className="col-md-12">
                  <div className="row">
                    <div className="col-md-10">
                      <input 
                        type="text" 
                        value={password} 
                        className='form-control mb-5' 
                        placeholder='Password' 
                        readOnly
                        ref={passwordRef}
                        />
                    </div>
                    <div className="col-md-2">
                      <button onClick={copyPassword} className='btn btn-primary form-control'>Copy</button>
                    </div>

                  </div>
                  <div className="row mb-3">
                    <div className="col-md-2">
                      <input type="range" min={6} max={100} value={length} className='form-control'
                        onChange={(e)=>setLength(e.target.value)}/>
                    </div>

                    <div className="col-md-2">
                      <label className='text-light form-check-label'> Length : {length}</label>
                    </div>

                    <div className="col-md-2 form-check">
                      <input 
                        type="checkbox"
                        value={numberAllowed} 
                        className="form-check-input" 
                        id="numberInput"
                        defaultChecked={numberAllowed}
                        onChange={()=>{
                          setNumberAllowed((prev)=>!prev);
                        }}
                        />
                      
                        <div className=" mb-2">
                          <label className="form-check-label text-light">
                            Numbers
                          </label>
                        </div>
                    </div>


                    <div className="col-md-3 form-check">
                      <input 
                        type="checkbox"
                        value={charAllowed} 
                        className="form-check-input" 
                        id="numberInput"
                        defaultChecked={charAllowed}
                        onChange={()=>{
                          setCharAllowed((prev)=>!prev);
                        }}
                        />
                      
                        <div className=" mb-2">
                          <label className="form-check-label text-light">
                            Character
                          </label>
                        </div>
                    </div>

                  </div>
                </div>
            </div>
        </div>
    </>
  )
}

