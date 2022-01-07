const messages = [
    "Congrats on 2000k! The method is really beer, Pomu!!",
    "Congrats on 200k Pomu! Fantastically being a highlight, and so much for more supporting and with the gorilities and watching you as a substitute into success.",
    "Congratulations on 200k Pomu!!! And other legs, due to catching marijuana. We are giving on the way so I watched, abused the woman.",
    "Congrats to 200k 200k!! Is this our streams with spoilers! 200k and good teach, Matt!",
    "Pomu on milestones. Congratulations on 200k Pomu! I can't be more to chest yo.",
    "Congrats on 200k! Your streams (the beginning characters). Congrats on achieving memes (!!!!!)",
    "Congratulations on the forest college and I can unfortunately vomit with hamburg so I was always waiting for the future. How do you start with your bird?",
    "We far my boys and I defund this horse. Congratulations with your options and so much sin.",
    "More Pomu! Pomelish and streaming. Youtube like populations, always hard.",
    "Thank you for fun with you and the first time!?",
    "Congratulations to come and what Pomu!! We proud for always hurt in appreciation. I hope you get off milestone world. We love you all as smootherally.",
    "Can't see you by your rear until 200k! This amazing Pomudachi in the future."
];

let cardContainerElm = null;

const cardMsgLoader = ()=>{
    if(cardContainerElm == null){
        return;
    }
    let mergedMsgHtml = '';
    for(let msg of messages){
        mergedMsgHtml += `
        <div class="col">
            <div class="card h-100">
                <div class="card-body">
                    <p class="card-text">
                        ${msg}
                    </p>
                </div>
            </div>
        </div>
        `;
    }
    cardContainerElm.innerHTML = mergedMsgHtml;
};

const windowLoader = ()=>{
   cardContainerElm = document.querySelector('#card-container');
   cardMsgLoader();
};

window.addEventListener('DOMContentLoaded', windowLoader);