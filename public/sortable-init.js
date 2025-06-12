const grid = document.querySelector('.grid');

new Sortable(document.querySelector('.grid'), {
   animation: 150,
ghostClass: 'sortable-ghost',
chosenClass: 'sortable-chosen',
fallbackOnBody: true,
swapThreshold: 0.65
});