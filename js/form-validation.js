// Lab 2: Bootstrap form validation
// 提交时检查必填项；不合格就显示红色提示，合格就显示成功信息
const form = document.getElementById('registerForm');
const successMessage = document.getElementById('formSuccess');

form.addEventListener('submit', function (event) {
    event.preventDefault(); // 还没有后端（Lab 3 才接 Laravel），先不真正提交

    if (form.checkValidity()) {
        successMessage.classList.remove('d-none');
    } else {
        successMessage.classList.add('d-none');
    }

    form.classList.add('was-validated');
});
