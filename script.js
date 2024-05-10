'use strict';

// JSON данные
const lessonsData = [
    {
        name: "Название занятия",
        time: "Время провидения",
        maxMembers: "Максимальное количество участников",
        currentMembers: "Текущее количество участников"
    },
    {
        name: "Название занятия",
        time: "Время провидения",
        maxMembers: "Максимальное количество участников",
        currentMembers: "Текущее количество участников"
    }
];

lessonsData.forEach(element => {
    const lessonItem = createLesson(element.name, element.time, element.maxMembers, element.currentMembers);
    lessonList.append(lessonItem);
});

function createLesson (name, time, maxMembers, currentMembers) {
    const lessonItem = document.createElement('li');
    lessonItem.classList.add('list-group-item');

    const lessonName = document.createElement('h2');
    lessonName.classList.add('mb-3');
    lessonName.textContent = name;

    const lessonTime = document.createElement('p');
    lessonTime.textContent = time;

    const lessonMaxMembers = document.createElement('p');
    lessonMaxMembers.textContent = maxMembers;

    const lessonCurrentMembers = document.createElement('p');
    lessonCurrentMembers.textContent = currentMembers;

    const editButton = document.createElement('button');
    editButton.textContent = 'Редактировать';
    editButton.classList.add('btn', 'btn-warning');

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Удалить';
    deleteButton.classList.add('btn', 'btn-danger');

    lessonItem.append(lessonName);
    lessonItem.append(lessonTime);
    lessonItem.append(lessonMaxMembers);
    lessonItem.append(lessonCurrentMembers);
    lessonItem.append(editButton);
    lessonItem.append(deleteButton);

    return lessonItem;
}