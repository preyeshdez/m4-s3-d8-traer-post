const getPosts = async () => {
    try{
       let response = await fetch("https://jsonplaceholder.typicode.com/posts");
    
    let posts = await response.json();

    let lista = ``;

    for (const post of posts) {
        let contenido = crearPost(post);

        lista += contenido;
        
    }

    document.getElementById("post-data").innerHTML = lista; 

    }catch(error){
        console.log(error);
    }
    
}

const crearPost = (post) => {
    let contenido = `
        <li>
            <h4>${post.id}.- ${post.title}</h4>
            <p>Usuario: ${post.userId}</p>
            <p>${post.body}</p>
        </li>
        `;

        return contenido;
};