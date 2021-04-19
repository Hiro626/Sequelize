// async function getDiningData() {
//     const request = await fetch('/api/dining');
//     const dining = await request.json();
//     const diningData = dining.data;

//     const diningTable = document.querySelector('.table');

//     diningData.forEach((item) => { 
//         const appendItem = document.createElement('tr');
//         appendItem.innerHTML = `
//             <td>${item.hall_id}</td>
//             <td>${item.hall_name}</td>
//             <td>${item.hall_address}</td>
//         `;
//         diningTable.append(appendItem);
//     });
// }

// window.onload = getDiningData();