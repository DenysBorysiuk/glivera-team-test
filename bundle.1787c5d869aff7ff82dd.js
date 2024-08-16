/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 506:
/***/ (() => {

(() => {
  const menuOpenBtn = document.querySelector('[data-menu-open]');
  const menuCloseBtn = document.querySelector('[data-menu-close]');
  const mobileMenu = document.querySelector('[data-menu]');
  const body = document.querySelector('body');
  menuOpenBtn.addEventListener('click', openModal);
  menuCloseBtn.addEventListener('click', openModal);
  function openModal() {
    mobileMenu.classList.toggle('is-open');
    body.classList.toggle('no-scroll');
  }
})();

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";

;// CONCATENATED MODULE: ./src/js/data.js
const data = [{
  name: 'Jane Cooper',
  company: 'Microsoft',
  phone: '(225) 555-0118',
  email: 'jane@microsoft.com',
  country: 'United States',
  status: 'Active'
}, {
  name: 'Floyd Miles',
  company: 'Yahoo',
  phone: '(205) 555-0100',
  email: 'floyd@yahoo.com',
  country: 'Kiribati',
  status: 'Inactive'
}, {
  name: 'Ronald Richards',
  company: 'Adobe',
  phone: '(302) 555-0107',
  email: 'ronald@adobe.com',
  country: 'Israel',
  status: 'Inactive'
}, {
  name: 'Marvin McKinney',
  company: 'Tesla',
  phone: '(252) 555-0126',
  email: 'marvin@tesla.com',
  country: 'Iran',
  status: 'Active'
}, {
  name: 'Jerome Bell',
  company: 'Google',
  phone: '(629) 555-0129',
  email: 'jerome@google.com',
  country: 'Réunion',
  status: 'Active'
}, {
  name: 'Kathryn Murphy',
  company: 'Microsoft',
  phone: '(406) 555-0120',
  email: 'kathryn@microsoft.com',
  country: 'Curaçao',
  status: 'Active'
}, {
  name: 'Jacob Jones',
  company: 'Yahoo',
  phone: '(208) 555-0112',
  email: 'jacob@yahoo.com',
  country: 'Brazil',
  status: 'Active'
}, {
  name: 'Kristin Watson',
  company: 'Facebook',
  phone: '(704) 555-0127',
  email: 'kristin@facebook.com',
  country: 'Åland Islands',
  status: 'Inactive'
}, {
  name: 'Jane Cooper1',
  company: 'Microsoft',
  phone: '(225) 555-0118',
  email: 'jane@microsoft.com',
  country: 'United States',
  status: 'Active'
}, {
  name: 'Floyd Miles1',
  company: 'Yahoo',
  phone: '(205) 555-0100',
  email: 'floyd@yahoo.com',
  country: 'Kiribati',
  status: 'Inactive'
}, {
  name: 'Ronald Richards1',
  company: 'Adobe',
  phone: '(302) 555-0107',
  email: 'ronald@adobe.com',
  country: 'Israel',
  status: 'Inactive'
}, {
  name: 'Marvin McKinney1',
  company: 'Tesla',
  phone: '(252) 555-0126',
  email: 'marvin@tesla.com',
  country: 'Iran',
  status: 'Active'
}, {
  name: 'Jerome Bell1',
  company: 'Google',
  phone: '(629) 555-0129',
  email: 'jerome@google.com',
  country: 'Réunion',
  status: 'Active'
}, {
  name: 'Kathryn Murphy1',
  company: 'Microsoft',
  phone: '(406) 555-0120',
  email: 'kathryn@microsoft.com',
  country: 'Curaçao',
  status: 'Active'
}, {
  name: 'Jacob Jones1',
  company: 'Yahoo',
  phone: '(208) 555-0112',
  email: 'jacob@yahoo.com',
  country: 'Brazil',
  status: 'Active'
}, {
  name: 'Kristin Watson1',
  company: 'Facebook',
  phone: '(704) 555-0127',
  email: 'kristin@facebook.com',
  country: 'Åland Islands',
  status: 'Inactive'
}, {
  name: 'Jane Cooper2',
  company: 'Microsoft',
  phone: '(225) 555-0118',
  email: 'jane@microsoft.com',
  country: 'United States',
  status: 'Active'
}, {
  name: 'Floyd Miles2',
  company: 'Yahoo',
  phone: '(205) 555-0100',
  email: 'floyd@yahoo.com',
  country: 'Kiribati',
  status: 'Inactive'
}, {
  name: 'Ronald Richards2',
  company: 'Adobe',
  phone: '(302) 555-0107',
  email: 'ronald@adobe.com',
  country: 'Israel',
  status: 'Inactive'
}, {
  name: 'Marvin McKinney2',
  company: 'Tesla',
  phone: '(252) 555-0126',
  email: 'marvin@tesla.com',
  country: 'Iran',
  status: 'Active'
}, {
  name: 'Jerome Bell2',
  company: 'Google',
  phone: '(629) 555-0129',
  email: 'jerome@google.com',
  country: 'Réunion',
  status: 'Active'
}, {
  name: 'Kathryn Murphy2',
  company: 'Microsoft',
  phone: '(406) 555-0120',
  email: 'kathryn@microsoft.com',
  country: 'Curaçao',
  status: 'Active'
}, {
  name: 'Jacob Jones2',
  company: 'Yahoo',
  phone: '(208) 555-0112',
  email: 'jacob@yahoo.com',
  country: 'Brazil',
  status: 'Active'
}, {
  name: 'Kristin Watson2',
  company: 'Facebook',
  phone: '(704) 555-0127',
  email: 'kristin@facebook.com',
  country: 'Åland Islands',
  status: 'Inactive'
}, {
  name: 'Jane Cooper3',
  company: 'Microsoft',
  phone: '(225) 555-0118',
  email: 'jane@microsoft.com',
  country: 'United States',
  status: 'Active'
}, {
  name: 'Floyd Miles3',
  company: 'Yahoo',
  phone: '(205) 555-0100',
  email: 'floyd@yahoo.com',
  country: 'Kiribati',
  status: 'Inactive'
}, {
  name: 'Ronald Richards3',
  company: 'Adobe',
  phone: '(302) 555-0107',
  email: 'ronald@adobe.com',
  country: 'Israel',
  status: 'Inactive'
}, {
  name: 'Marvin McKinney3',
  company: 'Tesla',
  phone: '(252) 555-0126',
  email: 'marvin@tesla.com',
  country: 'Iran',
  status: 'Active'
}, {
  name: 'Jerome Bell3',
  company: 'Google',
  phone: '(629) 555-0129',
  email: 'jerome@google.com',
  country: 'Réunion',
  status: 'Active'
}, {
  name: 'Kathryn Murphy3',
  company: 'Microsoft',
  phone: '(406) 555-0120',
  email: 'kathryn@microsoft.com',
  country: 'Curaçao',
  status: 'Active'
}, {
  name: 'Jacob Jones3',
  company: 'Yahoo',
  phone: '(208) 555-0112',
  email: 'jacob@yahoo.com',
  country: 'Brazil',
  status: 'Active'
}, {
  name: 'Kristin Watson3',
  company: 'Facebook',
  phone: '(704) 555-0127',
  email: 'kristin@facebook.com',
  country: 'Åland Islands',
  status: 'Inactive'
}, {
  name: 'Jane Cooper4',
  company: 'Microsoft',
  phone: '(225) 555-0118',
  email: 'jane@microsoft.com',
  country: 'United States',
  status: 'Active'
}, {
  name: 'Floyd Miles4',
  company: 'Yahoo',
  phone: '(205) 555-0100',
  email: 'floyd@yahoo.com',
  country: 'Kiribati',
  status: 'Inactive'
}, {
  name: 'Ronald Richards4',
  company: 'Adobe',
  phone: '(302) 555-0107',
  email: 'ronald@adobe.com',
  country: 'Israel',
  status: 'Inactive'
}, {
  name: 'Marvin McKinney4',
  company: 'Tesla',
  phone: '(252) 555-0126',
  email: 'marvin@tesla.com',
  country: 'Iran',
  status: 'Active'
}, {
  name: 'Jerome Bell4',
  company: 'Google',
  phone: '(629) 555-0129',
  email: 'jerome@google.com',
  country: 'Réunion',
  status: 'Active'
}, {
  name: 'Kathryn Murphy4',
  company: 'Microsoft',
  phone: '(406) 555-0120',
  email: 'kathryn@microsoft.com',
  country: 'Curaçao',
  status: 'Active'
}, {
  name: 'Jacob Jones4',
  company: 'Yahoo',
  phone: '(208) 555-0112',
  email: 'jacob@yahoo.com',
  country: 'Brazil',
  status: 'Active'
}, {
  name: 'Kristin Watson4',
  company: 'Facebook',
  phone: '(704) 555-0127',
  email: 'kristin@facebook.com',
  country: 'Åland Islands',
  status: 'Inactive'
}, {
  name: 'Jane Cooper5',
  company: 'Microsoft',
  phone: '(225) 555-0118',
  email: 'jane@microsoft.com',
  country: 'United States',
  status: 'Active'
}, {
  name: 'Floyd Miles',
  company: 'Yahoo',
  phone: '(205) 555-0100',
  email: 'floyd@yahoo.com',
  country: 'Kiribati',
  status: 'Inactive'
}, {
  name: 'Ronald Richards',
  company: 'Adobe',
  phone: '(302) 555-0107',
  email: 'ronald@adobe.com',
  country: 'Israel',
  status: 'Inactive'
}, {
  name: 'Marvin McKinney',
  company: 'Tesla',
  phone: '(252) 555-0126',
  email: 'marvin@tesla.com',
  country: 'Iran',
  status: 'Active'
}, {
  name: 'Jerome Bell',
  company: 'Google',
  phone: '(629) 555-0129',
  email: 'jerome@google.com',
  country: 'Réunion',
  status: 'Active'
}, {
  name: 'Kathryn Murphy',
  company: 'Microsoft',
  phone: '(406) 555-0120',
  email: 'kathryn@microsoft.com',
  country: 'Curaçao',
  status: 'Active'
}, {
  name: 'Jacob Jones',
  company: 'Yahoo',
  phone: '(208) 555-0112',
  email: 'jacob@yahoo.com',
  country: 'Brazil',
  status: 'Active'
}, {
  name: 'Kristin Watson1',
  company: 'Facebook',
  phone: '(704) 555-0127',
  email: 'kristin@facebook.com',
  country: 'Åland Islands',
  status: 'Inactive'
}, {
  name: 'Jane Cooper6',
  company: 'Microsoft',
  phone: '(225) 555-0118',
  email: 'jane@microsoft.com',
  country: 'United States',
  status: 'Active'
}, {
  name: 'Floyd Miles',
  company: 'Yahoo',
  phone: '(205) 555-0100',
  email: 'floyd@yahoo.com',
  country: 'Kiribati',
  status: 'Inactive'
}, {
  name: 'Ronald Richards',
  company: 'Adobe',
  phone: '(302) 555-0107',
  email: 'ronald@adobe.com',
  country: 'Israel',
  status: 'Inactive'
}, {
  name: 'Marvin McKinney',
  company: 'Tesla',
  phone: '(252) 555-0126',
  email: 'marvin@tesla.com',
  country: 'Iran',
  status: 'Active'
}, {
  name: 'Jerome Bell',
  company: 'Google',
  phone: '(629) 555-0129',
  email: 'jerome@google.com',
  country: 'Réunion',
  status: 'Active'
}, {
  name: 'Kathryn Murphy',
  company: 'Microsoft',
  phone: '(406) 555-0120',
  email: 'kathryn@microsoft.com',
  country: 'Curaçao',
  status: 'Active'
}, {
  name: 'Jacob Jones',
  company: 'Yahoo',
  phone: '(208) 555-0112',
  email: 'jacob@yahoo.com',
  country: 'Brazil',
  status: 'Active'
}, {
  name: 'Kristin Watson',
  company: 'Facebook',
  phone: '(704) 555-0127',
  email: 'kristin@facebook.com',
  country: 'Åland Islands',
  status: 'Inactive'
}, {
  name: 'Jane Cooper',
  company: 'Microsoft',
  phone: '(225) 555-0118',
  email: 'jane@microsoft.com',
  country: 'United States',
  status: 'Active'
}, {
  name: 'Floyd Miles',
  company: 'Yahoo',
  phone: '(205) 555-0100',
  email: 'floyd@yahoo.com',
  country: 'Kiribati',
  status: 'Inactive'
}, {
  name: 'Ronald Richards',
  company: 'Adobe',
  phone: '(302) 555-0107',
  email: 'ronald@adobe.com',
  country: 'Israel',
  status: 'Inactive'
}, {
  name: 'Marvin McKinney',
  company: 'Tesla',
  phone: '(252) 555-0126',
  email: 'marvin@tesla.com',
  country: 'Iran',
  status: 'Active'
}, {
  name: 'Jerome Bell',
  company: 'Google',
  phone: '(629) 555-0129',
  email: 'jerome@google.com',
  country: 'Réunion',
  status: 'Active'
}, {
  name: 'Kathryn Murphy',
  company: 'Microsoft',
  phone: '(406) 555-0120',
  email: 'kathryn@microsoft.com',
  country: 'Curaçao',
  status: 'Active'
}, {
  name: 'Jacob Jones',
  company: 'Yahoo',
  phone: '(208) 555-0112',
  email: 'jacob@yahoo.com',
  country: 'Brazil',
  status: 'Active'
}, {
  name: 'Kristin Watson1',
  company: 'Facebook',
  phone: '(704) 555-0127',
  email: 'kristin@facebook.com',
  country: 'Åland Islands',
  status: 'Inactive'
}, {
  name: 'Jane Cooper',
  company: 'Microsoft',
  phone: '(225) 555-0118',
  email: 'jane@microsoft.com',
  country: 'United States',
  status: 'Active'
}, {
  name: 'Floyd Miles',
  company: 'Yahoo',
  phone: '(205) 555-0100',
  email: 'floyd@yahoo.com',
  country: 'Kiribati',
  status: 'Inactive'
}, {
  name: 'Ronald Richards',
  company: 'Adobe',
  phone: '(302) 555-0107',
  email: 'ronald@adobe.com',
  country: 'Israel',
  status: 'Inactive'
}, {
  name: 'Marvin McKinney',
  company: 'Tesla',
  phone: '(252) 555-0126',
  email: 'marvin@tesla.com',
  country: 'Iran',
  status: 'Active'
}, {
  name: 'Jerome Bell',
  company: 'Google',
  phone: '(629) 555-0129',
  email: 'jerome@google.com',
  country: 'Réunion',
  status: 'Active'
}, {
  name: 'Kathryn Murphy',
  company: 'Microsoft',
  phone: '(406) 555-0120',
  email: 'kathryn@microsoft.com',
  country: 'Curaçao',
  status: 'Active'
}, {
  name: 'Jacob Jones',
  company: 'Yahoo',
  phone: '(208) 555-0112',
  email: 'jacob@yahoo.com',
  country: 'Brazil',
  status: 'Active'
}, {
  name: 'Kristin Watson',
  company: 'Facebook',
  phone: '(704) 555-0127',
  email: 'kristin@facebook.com',
  country: 'Åland Islands',
  status: 'Inactive'
}, {
  name: 'Jane Cooper',
  company: 'Microsoft',
  phone: '(225) 555-0118',
  email: 'jane@microsoft.com',
  country: 'United States',
  status: 'Active'
}, {
  name: 'Floyd Miles',
  company: 'Yahoo',
  phone: '(205) 555-0100',
  email: 'floyd@yahoo.com',
  country: 'Kiribati',
  status: 'Inactive'
}, {
  name: 'Ronald Richards',
  company: 'Adobe',
  phone: '(302) 555-0107',
  email: 'ronald@adobe.com',
  country: 'Israel',
  status: 'Inactive'
}, {
  name: 'Marvin McKinney',
  company: 'Tesla',
  phone: '(252) 555-0126',
  email: 'marvin@tesla.com',
  country: 'Iran',
  status: 'Active'
}, {
  name: 'Jerome Bell',
  company: 'Google',
  phone: '(629) 555-0129',
  email: 'jerome@google.com',
  country: 'Réunion',
  status: 'Active'
}, {
  name: 'Kathryn Murphy',
  company: 'Microsoft',
  phone: '(406) 555-0120',
  email: 'kathryn@microsoft.com',
  country: 'Curaçao',
  status: 'Active'
}, {
  name: 'Jacob Jones',
  company: 'Yahoo',
  phone: '(208) 555-0112',
  email: 'jacob@yahoo.com',
  country: 'Brazil',
  status: 'Active'
}, {
  name: 'Kristin Watson1',
  company: 'Facebook',
  phone: '(704) 555-0127',
  email: 'kristin@facebook.com',
  country: 'Åland Islands',
  status: 'Inactive'
}];
;// CONCATENATED MODULE: ./src/js/table.js

const tableBody = document.querySelector('tbody');
const itemsPerPage = 8;
function renderTable(page) {
  tableBody.innerHTML = '';
  const start = (page - 1) * itemsPerPage;
  const end = page * itemsPerPage;
  const pageData = data.slice(start, end);
  pageData.forEach(item => {
    const row = document.createElement('tr');
    const statusClass = item.status === 'Active' ? 'table__cell--status-active' : 'table__cell--status-inactive';
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
;// CONCATENATED MODULE: ./src/js/pagination.js


const paginationList = document.querySelector('.pagination__list');
const pagination_itemsPerPage = 8;
function renderPagination(currentPage) {
  paginationList.innerHTML = '';
  const totalPages = Math.ceil(data.length / pagination_itemsPerPage);
  const prevPageItem = document.createElement('li');
  prevPageItem.className = 'pagination__item';
  prevPageItem.innerHTML = `<a href="#" class="pagination__link" data-page="${currentPage - 1}">&lt;</a>`;
  prevPageItem.firstElementChild.disabled = currentPage === 1;
  paginationList.appendChild(prevPageItem);
  for (let i = 1; i <= totalPages; i++) {
    if (i === 1 || i === totalPages || i <= 4 || Math.abs(currentPage - i) < 2) {
      const pageItem = document.createElement('li');
      pageItem.className = 'pagination__item';
      pageItem.innerHTML = `<a href="#" class="pagination__link ${i === currentPage ? 'pagination__link--active' : ''}" data-page="${i}">${i}</a>`;
      paginationList.appendChild(pageItem);
    } else if (i === 5 && currentPage < totalPages - 2) {
      const dotsItem = document.createElement('li');
      dotsItem.className = 'pagination__item pagination__link--dots';
      dotsItem.textContent = '...';
      paginationList.appendChild(dotsItem);
    } else if (i === totalPages - 1 && currentPage > totalPages - 3) {
      const dotsItem = document.createElement('li');
      dotsItem.className = 'pagination__item pagination__link--dots';
      dotsItem.textContent = '...';
      paginationList.appendChild(dotsItem);
    }
  }
  const nextPageItem = document.createElement('li');
  nextPageItem.className = 'pagination__item';
  nextPageItem.innerHTML = `<a href="#" class="pagination__link" data-page="${currentPage + 1}">&gt;</a>`;
  nextPageItem.firstElementChild.disabled = currentPage === totalPages;
  paginationList.appendChild(nextPageItem);
}
paginationList.addEventListener('click', function (e) {
  e.preventDefault();
  if (e.target.classList.contains('pagination__link')) {
    const currentPage = parseInt(document.querySelector('.pagination__link--active').dataset.page);
    const targetPage = parseInt(e.target.dataset.page);
    if (targetPage && targetPage !== currentPage) {
      renderTable(targetPage);
      renderPagination(targetPage);
    }
  }
});
renderTable(1);
renderPagination(1);
// EXTERNAL MODULE: ./src/js/mobile-menu.js
var mobile_menu = __webpack_require__(506);
;// CONCATENATED MODULE: ./src/index.js
// scss



// js


})();

/******/ })()
;