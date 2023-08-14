let list = document.querySelector('.list')
let listItem = document.querySelectorAll('.list>li')
let remove = document.querySelector('.list>li>.remove')
let text = document.querySelector('input')
let admin = document.querySelector('.add>.admin')
let client = document.querySelector('.add>.client')

let chatList = JSON.parse(localStorage.getItem('chatList')) ? JSON.parse(localStorage.getItem('chatList')) : []

function setChat() {
  localStorage.setItem('chatList', JSON.stringify(chatList))
}

function showChat() {
  chatList.forEach((item, id) => {
    if (item.admin) {
      list.innerHTML += `
      <li class="admin">
        ${item.admin}
        <span class="remove" onclick="deleteChat(${id})">
          <i class="fi fi-br-trash"></i>
        </span>
      </li>`
    }
    if (item.client) {
      list.innerHTML += `
      <li class="client">
        ${item.client}
        <span class="remove" onclick="deleteChat(${id})">
          <i class="fi fi-br-trash"></i>
        </span>
      </li>`
    }
  });
}
function deleteChat(id) {
  chatList.splice(id, 1)
  setChat()
  list.innerHTML = ''
  showChat()
}
function addAdmin() {
  chatList.push({ admin: text.value.trim() })
  setChat()
  list.innerHTML = ''
  showChat()
  text.value = ''
  list.scrollTo(0, list.scrollHeight);
}
function addClient() {
  chatList.push({ client: text.value.trim() })
  setChat()
  list.innerHTML = ''
  showChat()
  text.value = ''
  list.scrollTo(0, list.scrollHeight);
}


document.addEventListener('keydown', (e) => {
  if (e.shiftKey && e.key == 'Enter' && text.value !== '') {
    addClient()
  } else if (e.key == "Enter" && text.value !== '') {
    addAdmin()
  }
  text.focus()
})
showChat()