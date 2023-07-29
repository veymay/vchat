let list = document.querySelector('.list')
let listItem = document.querySelectorAll('.list>li')
let remove = document.querySelector('.list>li>.remove')
let text = document.querySelector('input')
let admin = document.querySelector('.add>.admin')
let client = document.querySelector('.add>.client')
document.addEventListener('keydown', (e) => {
  if (e.shiftKey && e.key == 'Enter' && text.value != '') {
    list.innerHTML += `<li class="client">${text.value.trim()}<span class="remove"><i class="fi fi-br-trash"></i></span></li>`
    text.value = ''
    list.scrollTo(0, list.scrollHeight);
  } else if (e.key == "Enter" && text.value != '') {
    list.innerHTML += `<li class="admin">${text.value.trim()}<span class="remove"><i class="fi fi-br-trash"></i></span></li>`
    text.value = ''
    list.scrollTo(0, list.scrollHeight);
    listItem = document.querySelectorAll('.list>li')
  }
  text.focus()
})

admin.addEventListener('click', () => {
  list.innerHTML += `<li class="admin animate__animated animate__slideInUp">${text.value.trim()}</li>`
  console.log(text.value.trim());
  text.value = ''
})
client.addEventListener('click', () => {
  list.innerHTML+=`<li class="client">${text.value.trim()}</li>`
})
listItem.forEach(item => {
  remove.addEventListener('click', (e) => {
    item.remove()
    console.log('li');
    e.stopPropagation()
  })
})
list.addEventListener('click', () => {
  console.log('ul');
})