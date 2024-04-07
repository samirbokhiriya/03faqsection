// const expand = document.querySelectorAll('.question');
// expand.forEach(exp => {
//     exp.addEventListener("click",()=>{
        
        
//         const answer = exp.nextElementSibling; // Selects the <p> element following the clicked question
//         answer.classList.toggle('active');
//         let svgElement = exp.querySelector('.emote');
//         if(svgElement.classList.contains('activee')){
//             svgElement.classList.add('inactive');
//             svgElement.classList.remove('activee');
//             console.log(svgElement.classList);
//         }
//         else if(svgElement.classList.contains('inactive')){
//             svgElement.classList.add('activee');
//             svgElement.classList.remove('inactive');
//         }
//     });
// });

const expand = document.querySelectorAll('.question');
expand.forEach(exp => {
    exp.addEventListener("click",()=>{
        const answer = exp.nextElementSibling; // Selects the <p> element following the clicked question
        answer.classList.toggle('active');
        let svgElements = exp.querySelectorAll('.emote');
        svgElements.forEach(svgElement => {
            svgElement.classList.toggle('inactive');
            svgElement.classList.toggle('activee');
        });
    });
});
