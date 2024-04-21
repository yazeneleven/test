document.getElementById('comment-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var comment = document.getElementById('comment').value;

    if (name && comment) {
        // เช็คว่าชื่อมีแค่ตัวเลขและมีความยาว 10 ตัว
        if (/^\d{10}$/.test(name)) {
            // ถ้าผ่านเงื่อนไขทั้งสอง
            var commentSection = document.getElementById('comments');
            var commentElement = document.createElement('div');
            commentElement.classList.add('comment');
            commentElement.innerHTML = '<h3>' + name + '</h3><p>' + comment + '</p>';
            commentSection.appendChild(commentElement);

            document.getElementById('name').value = '';
            document.getElementById('comment').value = '';
        } else {
            alert('Name must be a 10-digit number.');
        }
    } else {
        alert('Please fill in all fields.');
    }
});

// เพิ่มการตรวจสอบเมื่อผู้ใช้พิมพ์ในช่อง "Name"
document.getElementById('name').addEventListener('input', function() {
    var nameInput = this.value;
    // เช็คว่ามีตัวอักษรในชื่อหรือไม่
    if (/\D/.test(nameInput)) {
        this.setCustomValidity('Name must be a 10-digit number.');
    } else {
        this.setCustomValidity('');
    }
});
