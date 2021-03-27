async function getDiningData() {
    const endpoint = '/api/dining';
    const request = await fetch(endpoint);
    const dining = await request.json();
    const diningData = dining.data
    console.log(data);

    const diningTable = document.querySelector('.table');
    // console.table(diningTable);

    data.forEach((item) => { 
        const appendItem = document.createElement('tr');
        appendItem.innerHTML = `
            <td>${item.hall_id}</td>
            <td>${item.hall_name}</td>
            <td>${item.hall_location}</td>
        `;
        diningTable.append(appendItem);
    });
}

async function windowActions() {
    await getDiningData(); 
}

window.onload = windowActions;