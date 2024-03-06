document.addEventListener('DOMContentLoaded', function() {
  // 定义一个存储背景图案URL的数组
  const backgrounds = [
    'url("BKG.png")',
    'url("BKG2.png")',
    'url("BKG3.png")'
    // 在这里添加更多背景图案的URL
  ];

  // 获取随机的背景图案URL
  function getRandomBackground() {
    const randomIndex = Math.floor(Math.random() * backgrounds.length);
    return backgrounds[randomIndex];
  }

  // 设置初始背景图案
  document.body.style.backgroundImage = getRandomBackground();

  // 获取表单元素和输入框
  const form = document.querySelector('form');
  const passwordInput = document.querySelector('#password');

  // 监听表单提交事件
  form.addEventListener('submit', function(event) {
    event.preventDefault(); // 阻止表单默认提交行为

    // 检查密码是否正确（示例：假设密码为 "password"）
    if (passwordInput.value === 'password') {
      
      // 密码正确，重定向到新的页面
      window.location.href = 'success.html';
    } else {
      // 密码错误，提示用户重新输入
      alert('密码错误，请重新输入！');
	  document.body.style.backgroundImage = getRandomBackground();
      window.location.reload();
    }
  });
});
