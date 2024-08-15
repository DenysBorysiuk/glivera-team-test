import { data } from './data';

const tableBody = document.querySelector('tbody');
const paginationList = document.querySelector('.pagination-list');

const itemsPerPage = 8;

function renderTable(page) {
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

function renderPagination() {
  paginationList.innerHTML = '';
  const totalPages = Math.ceil(data.length / itemsPerPage);

  for (let i = 1; i <= totalPages; i++) {
    const pageItem = document.createElement('li');
    pageItem.className = 'pagination__item';
    pageItem.innerHTML = `<a href="#" class="pagination__link ${
      i === 1 ? 'pagination__link--active' : ''
    }" data-page="${i}">${i}</a>`;
    paginationList.appendChild(pageItem);
  }
}

paginationList.addEventListener('click', function (e) {
  e.preventDefault();
  if (e.target.classList.contains('pagination__link')) {
    document
      .querySelector('.pagination__link--active')
      .classList.remove('pagination__link--active');
    e.target.classList.add('pagination__link--active');
    const page = parseInt(e.target.dataset.page);
    renderTable(page);
  }
});

renderTable(1); // рендеринг первой страницы
renderPagination();
