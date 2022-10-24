function input(props){
const {placeholder,func, type , classname , value } = props
return <input type={type} classname = {classname} placeholder = {placeholder} onChange = {func}></input>
}
function Button(props){
    return <button onClick={props.click}>{props.btnValue}</button>
  }


// for multiple components
export{input,Button}
    