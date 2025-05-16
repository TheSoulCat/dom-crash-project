const form = document.getElementById('addForm');
const itemList = document.getElementById('items');
const filter = document.getElementById('filter');

// Form Submit Event
form.addEventListener('submit', addItem);
// Delete Event
itemList.addEventListener('click', removeItem);
// Filter Items
filter.addEventListener('keyup', filterItems);

// Add Item
function addItem(e) {
    e.preventDefault();

    //Get Input Value
    const newItem = document.getElementById('item').value;

    //Create New LI Element
    const li = document.createElement('li');
    //Add Class
    li.className = 'list-group-item';
    //Add Text Node
    li.appendChild(document.createTextNode(newItem)); 

    //Create Delete Button Element
    const deleteBtn = document.createElement('button');

    //Add Classes To Delete Button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    
    // Append Text Node
    deleteBtn.appendChild(document.createTextNode('X'));

    // Append Delete Button To LI
    li.appendChild(deleteBtn);

    // Append LI To List
    itemList.appendChild(li);
}

    // Remove Item
    function removeItem(e){
        if(e.target.classList.contains('delete')) {
            if(confirm('Are You Sure?')){
                const li = e.target.parentElement;
                itemList.removeChild(li);
            }
        }
    }

    // Filter Items
    function filterItems(e) {
        // Convert Text To Lower Case
        const text = e.target.value.toLowerCase();
        // Get List
        const items = itemList.getElementsByTagName('li');
        // Convert to an array
        Array.from(items).forEach(function(item){
            const itemName = item.firstChild.textContent;
            if(itemName.toLowerCase().indexOf(text) != -1){
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        })
    }

