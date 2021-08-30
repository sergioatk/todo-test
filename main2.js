import { validateTask, createNewTask, addTaskToList, clearInput, renderTasks } from './js/tools.js'
import { renderTasks } from './js/ui.js'

const $inputTask = document.querySelector('input');
const $buttonTags = document.querySelectorAll('button');
const $taskList = document.querySelector('#task-list');

const tasks = [];

$buttonTags.forEach(button => {
    button.onclick = (e) => {

        e.preventDefault()



        if (button.id === 'submit-button') {
            handleSubmit($inputTask, tasks, validateTask, createNewTask, addTaskToList, clearInput, renderTasks, $taskList, handleDelete);
        }

        if (button.classList.contains('delete')) {
            console.log('delete')
            handleDelete(button);
        }
    }
})



function handleSubmit($input, taskArray, callbackValidateTask, callbackCreateNewTask, callbackAddTaskToList, callbackClearInput, callbackRenderNewList, callbackDelete) {

    const task = $input.value;

    if (callbackValidateTask(task)) {
        const newTask = callbackCreateNewTask(task);
        callbackAddTaskToList(newTask, taskArray);
        callbackClearInput($input);
        callbackRenderNewList(taskArray, $taskList, callbackDelete);


    }
}


function handleDelete(button) {
    console.log('lets delete some things')
    // const parent = button.parentNode;
    // parent.remove();
}
