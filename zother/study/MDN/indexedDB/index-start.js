// Create needed constants
const list = document.querySelector('ul');
const titleInput = document.querySelector('#title');
const bodyInput = document.querySelector('#body');
const form = document.querySelector('form');
const submitBtn = document.querySelector('form button');

// 创建一个 db 对象的实例，用于存储打开的数据库
let db;

// 打开我们的数据库；如果数据库不存在，将会创建它
// （请参见下面的 upgradeneeded 处理器）
const openRequest = window.indexedDB.open("notes_db", 1);
console.log(openRequest);
// 错误处理器表示数据库未成功打开
openRequest.addEventListener("error", () => console.error("数据库打开失败"));

// 成功处理器表示数据库成功打开
openRequest.addEventListener("success", () => {
  console.log("数据库成功打开");

  // 将打开的数据库对象存储在 db 变量中。下面会多次使用
  db = openRequest.result;
    console.log(db);
  // 运行 displayData() 函数以显示已存在于 IDB 中的笔记
  displayData();
});

// 如果尚未设置数据库表，则进行设置
openRequest.addEventListener("upgradeneeded", (e) => {
    // 获取已打开的数据库的引用
    db = e.target.result;
  
    // 在我们的数据库中创建一个用于存储笔记和自增键的 objectStore
    // objectStore 类似于关系数据库中的“表”
    const objectStore = db.createObjectStore("notes_os", {
      keyPath: "id",
      autoIncrement: true,
    });
  
    // 定义 objectStore 将包含的数据项
    objectStore.createIndex("title", "title", { unique: false });
    objectStore.createIndex("body", "body", { unique: false });
  
    console.log("数据库设置完成");
  });
  
// 创建一个提交事件处理器，当表单提交时运行 addData() 函数
form.addEventListener("submit", addData);

// 定义 addData() 函数
function addData(e) {
    // 阻止默认行为——我们不希望表单以传统方式提交
    e.preventDefault();
    // 获取输入字段中输入的值，并将它们存储在一个对象中，准备插入到数据库中
    const newItem = { title: titleInput.value, body: bodyInput.value };
  
    // 打开一个读/写事务，准备添加数据
    const transaction = db.transaction(["notes_os"], "readwrite");
  
    // 调用已添加到数据库中的 objectStore
    const objectStore = transaction.objectStore("notes_os");
  
    // 发起请求，将我们的 newItem 对象添加到 objectStore 中
    const addRequest = objectStore.add(newItem);
  
    addRequest.addEventListener("success", () => {
      // 清空表单，为添加下一个条目做好准备
      titleInput.value = "";
      bodyInput.value = "";
    });
  
    // 在事务完成时报告成功，当所有操作完成后
    transaction.addEventListener("complete", () => {
      console.log("事务完成：数据库修改结束。");
  
      // 通过再次运行 displayData() 来更新数据的显示，以显示新添加的条目
      displayData();
    });
  
    transaction.addEventListener("error", () =>
      console.log("事务未成功打开，出现错误"),
    );
  }

  // 定义 displayData() 函数
function displayData() {
    // 每次更新显示时，我们都清空列表元素的内容
    // 如果不这样做，每次添加新笔记时列表中会出现重复项
    while (list.firstChild) {
      list.removeChild(list.firstChild);
    }
  
    // 打开我们的对象存储，然后获取游标——它会迭代存储中的所有数据项
    const objectStore = db.transaction("notes_os").objectStore("notes_os");
    objectStore.openCursor().addEventListener("success", (e) => {
      // 获取游标的引用
      const cursor = e.target.result;
  
      // 如果还有数据项需要迭代，则继续运行此代码
      if (cursor) {
        // 创建一个列表项、h3 和 p 元素，用于在显示数据项时放置它们
        // 构建 HTML 片段，并将其附加到列表中
        const listItem = document.createElement("li");
        const h3 = document.createElement("h3");
        const para = document.createElement("p");
  
        listItem.appendChild(h3);
        listItem.appendChild(para);
        list.appendChild(listItem);
  
        // 将游标中的数据放入 h3 和 para 中
        h3.textContent = cursor.value.title;
        para.textContent = cursor.value.body;
  
        // 将数据项的 ID 存储在 listItem 的一个属性中，以便我们知道
        // 这项数据对应哪个条目。这在稍后删除条目时会很有用
        listItem.setAttribute("data-note-id", cursor.value.id);
  
        // 创建一个按钮，并将其放置在每个 listItem 中
        const deleteBtn = document.createElement("button");
        listItem.appendChild(deleteBtn);
        deleteBtn.textContent = "删除";
  
        // 设置事件处理器，当按钮被点击时，运行 deleteItem() 函数
        deleteBtn.addEventListener("click", deleteItem);
  
        // 迭代到游标中的下一个项
        cursor.continue();
      } else {
        // 如果列表为空，则显示“没有存储的笔记”消息
        if (!list.firstChild) {
          const listItem = document.createElement("li");
          listItem.textContent = "没有存储的笔记。";
          list.appendChild(listItem);
        }
        // 如果没有更多的游标项需要迭代，说明所有笔记都已显示
        console.log("所有笔记已显示");
      }
    });
  }
  
  // 定义 deleteItem() 函数
function deleteItem(e) {
    // 获取要删除的任务的 ID。我们需要将其转换为数字，因为在 IDB 中使用时
    // IDB 键值对对类型敏感。
    const noteId = Number(e.target.parentNode.getAttribute("data-note-id"));
  
    // 打开一个数据库事务并删除任务，使用我们上面检索到的 ID 查找它
    const transaction = db.transaction(["notes_os"], "readwrite");
    const objectStore = transaction.objectStore("notes_os");
    const deleteRequest = objectStore.delete(noteId);
  
    // 报告数据项已被删除
    transaction.addEventListener("complete", () => {
      // 删除按钮的父元素
      // 也就是列表项，使其不再显示
      e.target.parentNode.parentNode.removeChild(e.target.parentNode);
      console.log(`笔记 ${noteId} 已删除。`);
  
      // 如果列表为空，则显示“没有存储的笔记”消息
      if (!list.firstChild) {
        const listItem = document.createElement("li");
        listItem.textContent = "没有存储的笔记。";
        list.appendChild(listItem);
      }
    });
  }