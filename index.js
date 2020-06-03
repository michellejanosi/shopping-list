'use strict';
const $ = 'jQuery';
// app user should be able to enter items they need to purchase by entering text and hitting "Return" or clicking the "Add item" button
// check and uncheck items on the list by clicking the "Check" button
// permanently remove items from the list

function main() {
  $('#js-shopping-list-form').submit(event => {
    event.preventDefault();

    let entry = $('#shopping-list-entry').val();
    let listEntry = `<li>
        <span class="shopping-item">${entry}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`;

    $('.shopping-list').append(listEntry);
    $('#shopping-list-entry').val('');

    $('ul .shopping-item-toggle').click(function (event) {
      event.stopPropagation();

      $(this).parent().siblings('.shopping-item').toggleClass('shopping-item__checked');
    });

    $('ul .shopping-item-delete').click(function () {
      $(this).closest('li').remove();
    });
  });
}

$(main);