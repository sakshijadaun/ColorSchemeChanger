//Fetching Elements

const body = document.querySelector('body');
const buttons = document.querySelectorAll('.btn');

// buttons.forEach( (button) => {
//     button.addEventListener('click' , (e) => {
//         body.style.backgroundColor = e.target.id;
//     });
// });

//Note -> if we are setting color based on id .Javascript assumes id directly corresponds to a color name
// so we have to make sure that id is a valid color name like(red,blue,pink) . If not then it won't work as expected;



// buttons.forEach( (button) => {
//     button.addEventListener('click' , (e) => {
//         const color = e.target.getAttribute('data-color');
//         body.style.backgroundColor = color;
//     })
// })

// Note -> custom attribute are also setting color based on the valid color name




// buttons.forEach( (button) => {
//     button.addEventListener('click', (e) => {
//         // console.log(e.target.className);

//         body.classList.remove('b1', 'b2', 'b3', 'b4');
        
//         if(e.target.id === 'btn1'){
//             body.classList.add('b1');
//         }
//         if(e.target.id === 'btn2'){
//             body.classList.add('b2');
//         }
//         if(e.target.id === 'btn3'){
//             body.classList.add('b3');
//         }
//         if(e.target.id === 'btn4'){
//             body.classList.add('b4');
//         }
//     })
// })

//Note-> But in this case classList does not remove existing classes so we have to do manually
         //so we added this line body.classList.remove('b1', 'b2','b3','b4'); It removes all the classes before clicking on the button.