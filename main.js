// hameburger section
let hamcross = document.querySelector('#hamcross')
let hambox = document.querySelector('.hamelement')
let hambur = document.querySelector('.hamburger')

hamcross.addEventListener('click',()=>{
  hambox.style.transform = 'translateX(-300px)'
})
hambur.addEventListener('click',()=>{
  hambox.style.transform = 'translateX(0px)'
})

let big = document.querySelector('#big')
let imgcross = document.querySelector('#imgcross')




// api and umages work
let sl1 = document.querySelector('#sl1')
let allimg = document.querySelector('#allimg')
async function derive() {
  let url = 'https://raw.githubusercontent.com/Alok-raj-ui/DataBase-AGD/main/Data.json'
  console.log(url)
  let rawdata = await fetch(url)
  console.log(rawdata)
  let data = await rawdata.json()
  console.log(data)
   
  console.log(data[0].url)
  
  let n = 0
  setInterval(()=>{
    sl1.src = data[n].url
    n++
    if(n == 5){
      n = 0
    }
  },3000)
  
  for (let i = 0;i <= 4;i++){
    let img = new Image
    img.src = data[i].url
    allimg.appendChild(img)
    img.classList.add("imgs")
  }
  let imgs = await document.querySelectorAll('.imgs')
  
  imgs.forEach(a =>{
    a.addEventListener('click',()=>{
      big.style.zIndex = '200'
      a.style.width = '100vw'
      big.appendChild(a)
      a.style.zIndex = '50'
      bg.style.backgroundColor='black'
  imgcross.addEventListener('click',()=>{
        big.style.zIndex = '-150'
      big.removeChild(a)
      allimg.appendChild(a)
      a.style.width = '190px'
      bg.style.background='white'
})
    })
  })
  
  
}

derive()