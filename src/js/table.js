import { data } from './data';

const tableBody = document.querySelector('tbody');
const itemsPerPage = 8;

export function renderTable(page) {
  tableBody.innerHTML = '';
  const start = (page - 1) * itemsPerPage;
  const end = page * itemsPerPage;
  const pageData = data.slice(start, end);

  pageData.forEach(item => {
    const row = document.createElement('tr');
    const statusClass =
      item.status === 'Active' ? 'table__cell--status-active' : 'table__cell--status-inactive';

    row.innerHTML = `
      <td class="table__cell">${item.name}</td>
      <td class="table__cell">${item.company}</td>
      <td class="table__cell">${item.phone}</td>
      <td class="table__cell">${item.email}</td>
      <td class="table__cell">${item.country}</td>
      <td class="table__cell"><span class="table__cell--status ${statusClass}">${item.status}</span></td>
    `;
    tableBody.appendChild(row);
  });
}
