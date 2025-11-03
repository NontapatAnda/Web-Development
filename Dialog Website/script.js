const openBtn = document.getElementById('openBtn')
const dialog = document.getElementById('myDialog')
const imageInput = document.getElementById('imageInput');
const preview = document.getElementById('preview');
const cancelBtn = document.getElementById('dialogButton-cancel');
const submitBtn = document.getElementById('dialogButton-submit');
const itemName = document.getElementById('itemName');
const itemPrice = document.getElementById('itemPrice');
const displayItem = document.getElementById('displayItem');

openBtn.addEventListener('click', () =>{
    dialog.showModal()
})

cancelBtn.addEventListener('click',() =>{
    dialog.close()
})



imageInput.addEventListener('change', () => {
  const file = imageInput.files[0]; // เอาไฟล์แรก
  if (file) {
    preview.src = URL.createObjectURL(file); // สร้าง URL ชั่วคราว
    preview.style.display = 'block'; // แสดงรูป
  } else {
    preview.style.display = 'none'; // ถ้าไม่มีไฟล์ hide
  }
});

submitBtn.addEventListener('click', () => {
  const name = itemName.value.trim();
  const price = itemPrice.value.trim();
  const file = imageInput.files[0];

  if (!name || !price || !file) {
    alert("Please fill all fields!");
    return;
  }

  // สร้าง item card
  const itemCard = document.createElement('div');
  itemCard.classList.add('item-card');

  const img = document.createElement('img');
  img.src = URL.createObjectURL(file);

  const nameEl = document.createElement('h4');
  nameEl.textContent = name;

  const priceEl = document.createElement('p');
  priceEl.textContent = price + ' บาท';

  itemCard.append(img, nameEl, priceEl);
  displayItem.append(itemCard);

  dialog.close();
  resetForm();
});

// ฟังก์ชัน reset form
function resetForm() {
  itemName.value = '';
  itemPrice.value = '';
  imageInput.value = '';
  preview.style.display = 'none';
}