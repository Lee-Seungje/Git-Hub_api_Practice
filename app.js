const input = document.querySelector(".input");
const button = document.querySelector(".BTN");
const body = document.querySelector("body");
const user = document.querySelector(".user");
const main = document.querySelector(".Main");
const secondBTN = document.querySelector(".secondBTN");
secondBTN.addEventListener("click", ()=>{
    button.disabled = false;
})
let Length = 0;
const onChange = (ev) => {
    const Value = input.value;
    if(Value == 'JuuuuHong'){
        input.value = "박주홍꺼져";
        setTimeout(()=>{
            window.close()}
            , 3000);
            return;
    }
    if(Value == 'TaerangLee'){
        input.value = "이태랑꺼져";
        setTimeout(()=>{
            window.close()}
            , 3000);
            return;

    }
    if(Value == 'KIMHUEMANG'){
        input.value = "김희망꺼져";
        setTimeout(()=>{
            window.close()}
            , 3000);
            return;

    }
    if(Value == 'Chaejongin12'){
        input.value = "채종인꺼져";
        setTimeout(()=>{
            window.close()}
            , 3000);
            return;

    }
    try{
        fetch(`https://api.github.com/users/${Value}/repos`,{
            headers: {
                Authorization: "token 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",
            }, 
        }).then(res=>res.json())
        .then(json=>{
            console.log(json);
            Length = json.length;
            console.log(Length);
            if(Length == 0 || json.message == 'Not Found'){
                alert("존재하지 않는 유저입니다");
            }
            else{
                button.disabled = true;
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