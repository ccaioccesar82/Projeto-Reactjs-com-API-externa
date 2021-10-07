import './style.css'


export const Button = (bananaprops) =>{
const  {onClick} = bananaprops;

return(
<div className="button-container">
<button className="button" onClick={onClick}>Aperte aqui</button>
</div>
)
}