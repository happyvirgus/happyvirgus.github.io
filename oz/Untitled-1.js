// Lấy phần tử button từ DOM
var button = document.getElementById('myButton');

// Định nghĩa hàm xử lý sự kiện khi button được nhấn
function handleClick() {
  alert('Button đã được nhấn!');
}

// Gán hàm xử lý sự kiện cho sự kiện "click" của button
button.addEventListener('click', handleClick);