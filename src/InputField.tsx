import React from "react";
import { useState, useEffect, useRef } from "react";
import { StyledInput } from "./styles/InputField.styled";
import { SearchSuggestions } from "./SearchSuggestions";
import { useSearchUpdateContext } from "./ContextProvider";

//Component responsible for processing the input data from user.
export const InputField = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const setSearch = useSearchUpdateContext();
  const textInput = useRef<HTMLInputElement>(null);
  const suggestionsRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false)
  let styleHelper = "hidden";

  useEffect(()=>{
    const closeDropdown = (e:any) =>{
      console.log("path")
      console.log(e.path[0]);
      console.log("target");
      console.log(suggestionsRef.current);
      if(e.path[0]=== textInput.current){
        setIsOpen(true);
      }
      if(e.path[0]!== textInput.current&&e.path[0]!== suggestionsRef.current){
        if(textInput.current!==null)
      textInput.current.blur();
      setIsOpen(false);
    }
    }
    document.body.addEventListener('mousedown', closeDropdown);
    return ()=> document.body.removeEventListener('mousedown', closeDropdown);
  },[])
 
  
  const FocusOnSearchComponent = () =>{
    setSearch(searchTerm);
    setIsOpen(true);
    if(textInput.current!==null){
      textInput.current.focus();}
  }

  if (document.activeElement === textInput.current&&isOpen!==true) {
    setIsOpen(true);
   }
   
  if(isOpen) styleHelper = "visible";

  const style ={visibility: styleHelper} as React.CSSProperties

  useEffect(() => {
    //setSearch(searchTerm);
  }, [searchTerm]);

  return (
    <StyledInput>
      <div>
      <div className="xd">
      <input
      ref={textInput}
        type="text"
        //value={copy}
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
        required
      />
      <span className="placeholder">Username</span>
      </div>
      <div onClick={()=>FocusOnSearchComponent()}>Search</div>
      </div>
      <div style = {style} className="suggestions">
        <SearchSuggestions ref={suggestionsRef}/>
      </div>
    </StyledInput>
  );
};

export default InputField;
