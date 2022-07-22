let div4 = document.createElement("div")
document.querySelector("body").append(div4)
let p1 = document.createElement("p")
p1.innerText="Ideakart is a site that gives u an idea about the book you want to buy. We offer a huge collection of books in diverse categories."
div4.append(p1)

let p2 = document.createElement("p")
p2.innerText="We have a user friendly search engine and a quick delivery system. With this we even provide best discounts on our books. You can write to us for any idea or any help you need."
div4.append(p2)
let p3 = document.createElement("p")
p3.innerText="Ideakart is a site that gives u an idea and a platform for the book you want. We offer a huge collection of books in diverse categories."
div4.append(p3)

let p4 = document.createElement("p")
p4.innerText="We have a user friendly search engine and a quick delivery system. With this we even provide best discounts on our books. You can write to us for any idea or any help you need."
div4.append(p4)

let p5 = document.createElement("p")
p5.innerText="Get To Know Us"
document.querySelector("body").append(p5)

let ul = document.createElement("ul")
document.querySelector("body").append(ul)
let v=["About","Contact","Search","Privacy Policy","Refund Policy","Earn Money Online","QuickBuyer"]
v.forEach(function(elem){
    let li = document.createElement("li")
    li.innerText=elem
    ul.append(li)
})

