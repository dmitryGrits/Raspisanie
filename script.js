'use strict';

// JSON данные
const lessonsData = [
    {
        name: "Бокс",
        time: "12.05.2024 14:00",
        maxMembers: 10,
        currentMembers: 8
    },
    {
        name: "Плавание",
        time: "11.05.2024 13:00",
        maxMembers: 10,
        currentMembers: 9
    },
    {
        name: "Каратэ",
        time: "11.05.2024 16:00",
        maxMembers: 10,
        currentMembers: 1
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
    lessonTime.classList.add('time');

    const lessonMaxMembers = document.createElement('p');
    lessonMaxMembers.textContent = maxMembers;
    lessonMaxMembers.classList.add('max');

    const lessonCurrentMembers = document.createElement('p');
    lessonCurrentMembers.textContent = currentMembers;
    lessonCurrentMembers.classList.add('current');

    const signUpButton = document.createElement('button');
    signUpButton.textContent = 'Записаться';
    signUpButton.classList.add('sign','btn', 'btn-warning');

    const cancelButton = document.createElement('button');
    cancelButton.textContent = 'Отменить запись';
    cancelButton.classList.add('cancel','btn', 'btn-danger');

    lessonItem.append(lessonName);
    lessonItem.append(lessonTime);
    lessonItem.append(lessonMaxMembers);
    lessonItem.append(lessonCurrentMembers);
    lessonItem.append(signUpButton);
    lessonItem.append(cancelButton);

    return lessonItem;
}

lessonList.addEventListener('click', function (e) {

    const lessonItem = e.target.closest('li');
    const lessonMaxMembers = lessonItem.querySelector('p.max');
    const lessonCurrentMembers = lessonItem.querySelector('p.current');
    const signUpButton = lessonItem.querySelector('button.sign');
    const cancelButton = lessonItem.querySelector('button.cancel');
    let current = Number(lessonCurrentMembers.textContent);
    const max = Number(lessonMaxMembers.textContent);

    if (e.target.textContent == 'Записаться') {
        if (current < max) {
            signUpButton.classList.remove('btn-secondary');
            signUpButton.classList.add('btn-warning');
            current += 1;
            lessonCurrentMembers.textContent = current;
            alert("Вы записались на занятие!");
            
        } else {
            signUpButton.classList.remove('btn-warning');
            signUpButton.classList.add('btn-secondary');
            alert("Вы не можете записаться занятие!");
        }
    
    }

    if (e.target.textContent == 'Отменить запись') {
        if (current <= 0) {
            alert("Ошибка (число людей не может быть меньше 0)");
        } else {
            current -= 1;
        lessonCurrentMembers.textContent = current;
        alert("Вы отменили запись на занятие!");
        if (current < max) {
            signUpButton.classList.remove('btn-secondary');
            signUpButton.classList.add('btn-warning');
        }
        }
    }
});