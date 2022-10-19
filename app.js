const input = document.querySelector(".input");
const button = document.querySelector("button");
const body = document.querySelector("body");
const user = document.querySelector(".user");
const main = document.querySelector(".Main");
let Length = 0;
const onChange = (ev) => {
    const Value = input.value;
    try{
        fetch(`https://api.github.com/users/${Value}/repos`).then(res=>res.json())
        .then(json=>{
            console.log(json);
            Length = json.length;
            console.log(Length);
            if(Length == 0){
                alert("존재하지 않는 유저입니다");
            }
            else{
                const link = `https://github.com/${Value}.png`;
                const rink = `https://github.com/${Value}`;
                let img = document.createElement('img');
                img.src = link;
                main.href = rink;
                main.appendChild(img);
                for (let i = 0; i < Length; i++) {
                    let List = document.createElement('button');
                    let Div = document.createElement('div');
                    let language = document.createElement('div');
                    let ListText = document.createTextNode( json[i].name );
                    let LanguageText = document.createTextNode(json[i].language);
                    Div.setAttribute('class', 'Div');
                    List.appendChild( ListText );
                    Div.appendChild( List );
                    language.appendChild(LanguageText);
                    Div.appendChild(language);
                    language.setAttribute('class','user__Text');
                    List.setAttribute('class', 'user__user');
                    user.appendChild(Div);
                    List.addEventListener("click", () => {
                        location = json[i].html_url;
                    })
                    button.disabled = true;
                }
            }
        })
    }
    catch{
        alert("존재하지 않는 유저입니다");
    }
}
button.addEventListener("click", onChange);