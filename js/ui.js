export function renderTasks(taskList, $DOMlist, callbackDelete) {
    $DOMlist.innerHTML = '';

    taskList.forEach(task => {
        const $taskContainer = document.createElement('li');
        $taskContainer.dataset.id = task.id;

        const $newListItem = document.createElement('li');
        $newListItem.textContent = task.task;

        const $newDoneButton = document.createElement('button');
        $newDoneButton.addEventListener('click', callbackDelete)
        $newDoneButton.textContent = 'DONE';
        $newDoneButton.dataset.id = task.id;
        $newDoneButton.classList.add('delete');
        
        

        $taskContainer.appendChild($newListItem);
        $taskContainer.appendChild($newDoneButton);

        $DOMlist.appendChild($taskContainer);
    })

}