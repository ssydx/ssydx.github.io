const rememberDiv = document.querySelector(".remember");
const forgetDiv = document.querySelector(".forget");
const form = document.querySelector("form");
const nameInput = document.querySelector("#entername");
const submitBtn = document.querySelector("#submitname");
const forgetBtn = document.querySelector("#forgetname");

const h1 = document.querySelector("h1");
const personalGreeting = document.querySelector(".personal-greeting");

form.addEventListener("submit", (e) => e.preventDefault());

// 当点击“Say hello”按钮时运行函数
submitBtn.addEventListener("click", () => {
    // 将输入的名字存储到网页存储中
    localStorage.setItem("name", nameInput.value);
    // 运行 nameDisplayCheck() 来处理显示个性化问候语和更新表单显示
    nameDisplayCheck();
  });

  // 当点击“Forget”按钮时运行函数
forgetBtn.addEventListener("click", () => {
    // 从网页存储中移除存储的名字
    localStorage.removeItem("name");
    // 运行 nameDisplayCheck() 来重新显示通用问候语并更新表单显示
    nameDisplayCheck();
  });

  // 定义 nameDisplayCheck() 函数
function nameDisplayCheck() {
    // 检查 'name' 数据项是否存储在网页存储中
    if (localStorage.getItem("name")) {
      // 如果存在，显示个性化问候语
      const name = localStorage.getItem("name");
      h1.textContent = `欢迎，${name}`;
      personalGreeting.textContent = `欢迎来到我们的网站，${name}！希望您在这里玩得开心。`;
      // 隐藏表单中的 'remember' 部分，显示 'forget' 部分
      forgetDiv.style.display = "block";
      rememberDiv.style.display = "none";
    } else {
      // 如果不存在，显示通用问候语
      h1.textContent = "欢迎来到我们的网站";
      personalGreeting.textContent =
        "欢迎来到我们的网站。希望您在这里玩得开心。";
      // 隐藏表单中的 'forget' 部分，显示 'remember' 部分
      forgetDiv.style.display = "none";
      rememberDiv.style.display = "block";
    }
  }

  nameDisplayCheck();