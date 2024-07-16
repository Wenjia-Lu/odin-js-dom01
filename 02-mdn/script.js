// main 
const al_input = document.querySelector(".add_list input");
const al_button = document.querySelector(".add_list button");
const lists_div = document.querySelector(".lists");

// add a todo list


function addList(){
    const list_div = document.createElement("div");
    list_div.classList.add("list");
    const listName = document.createElement("h2"); 
    listName.textContent = al_input.value;
    al_input.value = '';
    list_div.appendChild(listName);
    make_list(list_div);
    lists_div.appendChild(list_div);
}

al_button.addEventListener("click", addList);

al_input.addEventListener("keydown", (e) => {
    if(e.key === "Enter"){
        addList();
    }
});

function make_list(div){
    // tdlist input
    const list = document.createElement("ul");
    const input = document.createElement("input");
    const button = document.createElement("button");
    button.textContent = "+";
    input.placeholder = "Enter new item here";
    div.appendChild(list);
    div.appendChild(input);
    div.appendChild(button);

    // add item to todolist button
    function addItem(){
        // make item
        const itemText = input.value;
        input.value = "";
        const itemList = document.createElement("li");
        const itemSpan = document.createElement("span");
        const itemButton = document.createElement("button");
        itemList.appendChild(itemSpan);
        itemList.appendChild(itemButton);
        itemSpan.textContent = itemText;
        itemButton.textContent = "Delete";
        list.append(itemList);
        
        // remove self (item) button
        itemButton.addEventListener("click", ()=> {
            itemList.remove();
        })

        input.focus();
    }

    button.addEventListener("click", addItem);
    input.addEventListener("keydown", (e) => {
        if(e.key === "Enter"){
            addItem();
        }
    });

}