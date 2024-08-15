document.addEventListener('DOMContentLoaded', () => {
  const data = [
    {
      name: 'Jane Cooper',
      company: 'Microsoft',
      phone: '(225) 555-0118',
      email: 'jane@microsoft.com',
      country: 'United States',
      status: 'Active',
    },
    {
      name: 'Floyd Miles',
      company: 'Yahoo',
      phone: '(205) 555-0100',
      email: 'floyd@yahoo.com',
      country: 'Kiribati',
      status: 'Inactive',
    },
    {
      name: 'Ronald Richards',
      company: 'Adobe',
      phone: '(302) 555-0107',
      email: 'ronald@adobe.com',
      country: 'Israel',
      status: 'Inactive',
    },
    // Добавьте больше данных здесь...
  ];

  const itemsPerPage = 5;
  let currentPage = 1;

  const tableBody = document.querySelector('tbody');
  const paginationList = document.querySelector('.pagination-list');

  function renderTable(page) {
    tableBody.innerHTML = '';
    const start = (page - 1) * itemsPerPage;
    const end = page * itemsPerPage;
    const pageData = data.slice(start, end);

    pageData.forEach(item => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${item.name}</td>
        <td>${item.company}</td>
        <td>${item.phone}</td>
        <td>${item.email}</td>
        <td>${item.country}</td>
        <td>${item.status}</td>
      `;
      tableBody.appendChild(row);
    });
  }

  function renderPagination() {
    paginationList.innerHTML = '';
    const pageCount = Math.ceil(data.length / itemsPerPage);

    for (let i = 1; i <= pageCount; i++) {
      const li = document.createElement('li');
      li.textContent = i;
      li.classList.add(i === currentPage ? 'active' : '');
      li.addEventListener('click', () => {
        currentPage = i;
        renderTable(currentPage);
        renderPagination();
      });
      paginationList.appendChild(li);
    }
  }

  document.querySelector('.prev').addEventListener('click', () => {
    if (currentPage > 1) {
      currentPage--;
      renderTable(currentPage);
      renderPagination();
    }
  });

  document.querySelector('.next').addEventListener('click', () => {
    const pageCount = Math.ceil(data.length / itemsPerPage);
    if (currentPage < pageCount) {
      currentPage++;
      renderTable(currentPage);
      renderPagination();
    }
  });

  renderTable(currentPage);
  renderPagination();
});
