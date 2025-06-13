const grid = document.querySelector('.grid');

new Sortable(document.querySelector('.grid'), {

   group: 'shared',
   filter: ".add-task",
});