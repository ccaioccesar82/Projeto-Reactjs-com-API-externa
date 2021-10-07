import {React, Component }from 'react';


import './styles.css';

import {Button} from '../../components/Button/index';
import{loadAll} from '../../funcoes/loadAll';
import {Input} from '../../components/Input/index';
import { PostCard } from '../../components/PostCard/index';


class Home extends Component{

   
state ={

post:[],
allPost: [],
page: 0,
postsPerPages:6,
searchValue: ''

};
    async componentDidMount() {
      
       await this.loadAll()
    }

    loadAll =  async() =>{
 
        const {page, postsPerPages} = this.state;
        const postAndPhotos = await loadAll();
this.setState({
    
    post: postAndPhotos.slice(page, postsPerPages),
    allPosts: postAndPhotos,
});

}

loadOtherPages = () =>{
const {post, page, 
    postsPerPages,allPosts} = this.state


    const nextPage = page + postsPerPages;
  const newPost = allPosts.slice(nextPage, nextPage + postsPerPages);

post.push(...newPost);
this.setState({post, page: nextPage})
    }

handleSearchValue = (e) =>{
const {value} = e.target;
this.setState({searchValue: value});


}


render(){

    const {post, searchValue, allPosts} = this.state;

    const postsFiltered = !!searchValue ? allPosts.filter(post => {
    
        return post.title.toLowerCase().includes(searchValue.toLowerCase()
        )
    }) : post;

return (



<div className="body">
        <section className="container-1">

{!!searchValue && 
<h1 className="texto-secreto">Sua busca é: {searchValue}</h1>
}

    
<Input onChange={this.handleSearchValue} value={searchValue} />
<div className="posts">

{postsFiltered.map((item)=>(
<PostCard key={item.id} item={item}/>
))}

</div>
<Button onClick={this.loadOtherPages}/>

</section>
</div>
)};


}
export default Home;