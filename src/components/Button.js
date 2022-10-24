function Button(props){
  return <button onClick={props.click}>{props.btnValue}</button>
}
export default Button;