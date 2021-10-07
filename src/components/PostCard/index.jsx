export const PostCard = (bananaprops) =>{
const {item} = bananaprops;

return(

<div key={item.id} className="post">
    <img src={item.cover} alt={item.title} />
<div  className="post-card">
<h1>{item.title}</h1>
<p>{item.body}</p>

</div>
</div>

);

}