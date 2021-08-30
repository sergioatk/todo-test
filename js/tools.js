export function validateTask(task) {
    if (!task) {
        return false;
    }
    return true;
}

export function createNewTask(task) {
    const newTask = {
        task,
        id: Date.now()
    }

    return newTask;
}

export function addTaskToList(task, taskList) {
    taskList.push(task);
    return taskList;
}

export function clearInput(input) {

    input.value = '';

}

