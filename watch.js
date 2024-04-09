
let i = 0
const press = () => {
    if (!i) {
        document.getElementById("img").style.backgroundImage = " url(./hand.jpg)"
        i = 1
    } else if (!i) {
        document.getElementById("img").style.backgroundImage = " url(./lp.jpg)"
        i = 1
    } else {
        document.getElementById("img").style.backgroundImage = " url(./vec.jpg)"
        i = 0
    }
}


const time = setInterval(() => {
    T = new Date()
    document.getElementById("Time").innerHTML = T.toLocaleTimeString();
}, 1000);

const day = () => {
    arr = ["Sun", "Mon", "Tues", "Wed", "Thus", "Fri", "Sat"]
    j = new Date().getDay()
    document.getElementById("week").innerHTML = arr[j]
}

const date=()=>{
m = new Date()
document.getElementById('date').innerHTML = m.toLocaleDateString()
}
