
import './style.css';


export const Input = (bananaprops) =>{
const {onChange , searchValue} = bananaprops;

return(

<div className="input-container">
<input className="input-search" onChange={onChange} type="search" value={searchValue} placeholder="Busque um post aqui"></input>
</div>
)
}