export const loadAll = async () =>{
      
            // eslint-disable-next-line
            const reqPost =  fetch('https://jsonplaceholder.typicode.com/posts')
const reqImage = fetch('https://jsonplaceholder.typicode.com/photos');
            const [post, image] = await Promise.all([reqPost, reqImage]);
 const postJson = await post.json();
 const imageJson = await image.json();

const postAndPhotos = postJson.map((post, index)=> {


    return {...post, cover: imageJson[index].url}

});

return postAndPhotos;


}