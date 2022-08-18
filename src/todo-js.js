import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  addItem(inputText);

  // 未完了リストから指定の要素を削除
  const deleteItem = (deleteTarget) => {
    document.getElementById("imcomplete-list").removeChild(deleteTarget);
  };

  //未完了リストに要素を追加
  function addItem(text) {
    const div = document.createElement("div");
    div.classList.add("list-row");
    const li = document.createElement("li");
    li.innerText = text;

    // 完了ボタン
    const completeButton = document.createElement("button");
    completeButton.innerText = "完了";
    completeButton.addEventListener("click", () => {
      deleteItem(completeButton.parentNode);

      // 未完了TODO
      const addTarget = completeButton.parentNode;
      const text = addTarget.firstChild.innerText;

      // divを初期化
      addTarget.textContent = null;

      // 完了 TODO
      const completeList = document.getElementById("complete-list");
      const completeLi = document.createElement("li");
      completeLi.innerText = text;

      // 戻すボタン
      const returnBotton = document.createElement("button");
      returnBotton.innerText = "戻す";
      returnBotton.addEventListener("click", () => {
        const deleteTarget = returnBotton.parentNode;
        document.getElementById("complete-list").removeChild(deleteTarget);
        addItem(text);
      });

      addTarget.appendChild(completeLi);
      addTarget.appendChild(returnBotton);
      completeList.appendChild(addTarget);
    });
    // 削除ボタン
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "削除";
    deleteButton.addEventListener("click", () => {
      deleteItem(deleteButton.parentNode);
    });

    div.appendChild(li);
    div.appendChild(completeButton);
    div.appendChild(deleteButton);
    document.getElementById("imcomplete-list").appendChild(div);
  }
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
