// const counter  = document.querySelector ("#counter");
// const btns = document.querySelectorAll (".btn");
// let count =0;
// btns.forEach((btn)=>{
//     btn.addEventListener ("click") , (e) => {
//         const styles = e.currentTarget.classList
//         if(styles.contains("increase")){
//             count++
//         }
//         counter.textContent = count
//     }
// })

// document.querySelectorAll("counter").innerHTML = <h1>counter changed </h1>
const count = document.getElementById("count");
const sub = document.getElementById("sub");
const reset = document.getElementById("reset");
const add = document.getElementById ("add");

add.addEventListener("click", ()=>{

    count.innerHTML++;
    color()
});

sub.addEventListener("click",()=>{
    count.innerHTML--;
    color()
});

reset.addEventListener("click", ()=>{
    count.innerHTML = 0;
    color()
});

function color(){
    if(count.innerHTML>0){
        count.style.color = 'green';
    }
    else if (count.innerHTML < 0){
        count.style.color = "red"
    }
    else{
       count.style.color ="black"
    }
}
