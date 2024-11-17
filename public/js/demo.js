const fetchItemsBtn = document.getElementById('fetchItems');

fetchItemsBtn.addEventListener('click', async () => {
  try {
    const response = await fetch('/api/items');
    const items = await response.json();

    const dataDiv = document.getElementById('data');
    let content = '<ul>';
    items.forEach(item => {
      content += `<li>
                    <img src="${item.image}" alt="${item.name}" style="width:50px;">
                    ${item.name} - $${item.price}
                  </li>`;
    });
    content += '</ul>';

    dataDiv.innerHTML = content;
  } catch (error) {
    console.error('Error fetching items:', error);
  }
});
