(async function () {
    const contactIcons = {
        vkontakte: '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '<g opacity="0.7">\n' +
            '<path d="M8 0C3.58187 0 0 3.58171 0 8C0 12.4183 3.58187 16 8 16C12.4181 16 16 12.4183 16 8C16 3.58171 12.4181 0 8 0ZM12.058 8.86523C12.4309 9.22942 12.8254 9.57217 13.1601 9.97402C13.3084 10.1518 13.4482 10.3356 13.5546 10.5423C13.7065 10.8371 13.5693 11.1604 13.3055 11.1779L11.6665 11.1776C11.2432 11.2126 10.9064 11.0419 10.6224 10.7525C10.3957 10.5219 10.1853 10.2755 9.96698 10.037C9.87777 9.93915 9.78382 9.847 9.67186 9.77449C9.44843 9.62914 9.2543 9.67366 9.1263 9.90707C8.99585 10.1446 8.96606 10.4078 8.95362 10.6721C8.93577 11.0586 8.81923 11.1596 8.43147 11.1777C7.60291 11.2165 6.81674 11.0908 6.08606 10.6731C5.44147 10.3047 4.94257 9.78463 4.50783 9.19587C3.66126 8.04812 3.01291 6.78842 2.43036 5.49254C2.29925 5.2007 2.39517 5.04454 2.71714 5.03849C3.25205 5.02817 3.78697 5.02948 4.32188 5.03799C4.53958 5.04143 4.68362 5.166 4.76726 5.37142C5.05633 6.08262 5.4107 6.75928 5.85477 7.38684C5.97311 7.55396 6.09391 7.72059 6.26594 7.83861C6.45582 7.9689 6.60051 7.92585 6.69005 7.71388C6.74734 7.57917 6.77205 7.43513 6.78449 7.29076C6.82705 6.79628 6.83212 6.30195 6.75847 5.80943C6.71263 5.50122 6.53929 5.30218 6.23206 5.24391C6.07558 5.21428 6.0985 5.15634 6.17461 5.06697C6.3067 4.91245 6.43045 4.81686 6.67777 4.81686L8.52951 4.81653C8.82136 4.87382 8.88683 5.00477 8.92645 5.29874L8.92808 7.35656C8.92464 7.47032 8.98521 7.80751 9.18948 7.88198C9.35317 7.936 9.4612 7.80473 9.55908 7.70112C10.0032 7.22987 10.3195 6.67368 10.6029 6.09801C10.7279 5.84413 10.8358 5.58142 10.9406 5.31822C11.0185 5.1236 11.1396 5.02785 11.3593 5.03112L13.1424 5.03325C13.195 5.03325 13.2483 5.03374 13.3004 5.04274C13.6009 5.09414 13.6832 5.22345 13.5903 5.5166C13.4439 5.97721 13.1596 6.36088 12.8817 6.74553C12.5838 7.15736 12.2661 7.55478 11.9711 7.96841C11.7001 8.34652 11.7215 8.53688 12.058 8.86523Z" fill="#9873FF"/>\n' +
            '</g>\n' +
            '</svg>\n',
        facebook: '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '<g opacity="0.7">\n' +
            '<path d="M7.99999 0C3.6 0 0 3.60643 0 8.04819C0 12.0643 2.928 15.3976 6.75199 16V10.3775H4.71999V8.04819H6.75199V6.27309C6.75199 4.25703 7.94399 3.14859 9.77599 3.14859C10.648 3.14859 11.56 3.30121 11.56 3.30121V5.28514H10.552C9.55999 5.28514 9.24799 5.90362 9.24799 6.53815V8.04819H11.472L11.112 10.3775H9.24799V16C11.1331 15.7011 12.8497 14.7354 14.0879 13.2772C15.3261 11.819 16.0043 9.96437 16 8.04819C16 3.60643 12.4 0 7.99999 0Z" fill="#9873FF"/>\n' +
            '</g>\n' +
            '</svg>\n',
        phone: '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '<g opacity="0.7">\n' +
            '<circle cx="8" cy="8" r="8" fill="#9873FF"/>\n' +
            '<path d="M11.56 9.50222C11.0133 9.50222 10.4844 9.41333 9.99111 9.25333C9.83556 9.2 9.66222 9.24 9.54222 9.36L8.84444 10.2356C7.58667 9.63556 6.40889 8.50222 5.78222 7.2L6.64889 6.46222C6.76889 6.33778 6.80444 6.16444 6.75556 6.00889C6.59111 5.51556 6.50667 4.98667 6.50667 4.44C6.50667 4.2 6.30667 4 6.06667 4H4.52889C4.28889 4 4 4.10667 4 4.44C4 8.56889 7.43556 12 11.56 12C11.8756 12 12 11.72 12 11.4756V9.94222C12 9.70222 11.8 9.50222 11.56 9.50222Z" fill="white"/>\n' +
            '</g>\n' +
            '</svg>\n',
        email: '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '<path opacity="0.7" fill-rule="evenodd" clip-rule="evenodd" d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM4 5.75C4 5.3375 4.36 5 4.8 5H11.2C11.64 5 12 5.3375 12 5.75V10.25C12 10.6625 11.64 11 11.2 11H4.8C4.36 11 4 10.6625 4 10.25V5.75ZM8.424 8.1275L11.04 6.59375C11.14 6.53375 11.2 6.4325 11.2 6.32375C11.2 6.0725 10.908 5.9225 10.68 6.05375L8 7.625L5.32 6.05375C5.092 5.9225 4.8 6.0725 4.8 6.32375C4.8 6.4325 4.86 6.53375 4.96 6.59375L7.576 8.1275C7.836 8.28125 8.164 8.28125 8.424 8.1275Z" fill="#9873FF"/>\n' +
            '</svg>\n',
        other: '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '<path opacity="0.7" fill-rule="evenodd" clip-rule="evenodd" d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM3 8C3 5.24 5.24 3 8 3C10.76 3 13 5.24 13 8C13 10.76 10.76 13 8 13C5.24 13 3 10.76 3 8ZM9.5 6C9.5 5.17 8.83 4.5 8 4.5C7.17 4.5 6.5 5.17 6.5 6C6.5 6.83 7.17 7.5 8 7.5C8.83 7.5 9.5 6.83 9.5 6ZM5 9.99C5.645 10.96 6.75 11.6 8 11.6C9.25 11.6 10.355 10.96 11 9.99C10.985 8.995 8.995 8.45 8 8.45C7 8.45 5.015 8.995 5 9.99Z" fill="#9873FF"/>\n' +
            '</svg>\n',
    };

    const buttonTextContent = {
        vkontakte: 'VK',
        facebook: 'Facebook',
        phone: 'Телефон',
        email: 'Email',
        other: 'Доп.&nbsp;телефон',
    }

    let users = await getUsers();

    async function getUsers() {
        const usersResponse = await fetch('http://localhost:3000/api/clients');
        return await usersResponse.json();
    }

    function postUser(data, callback = () => {
    }) {
        fetch('http://localhost:3000/api/clients', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        }).then(callback);
    }

    function editUser(data, userId, callback = () => {
    }) {
        fetch(`http://localhost:3000/api/clients/${userId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        }).then(callback);
    }

    function deleteUser(userId) {
        fetch(`http://localhost:3000/api/clients/${userId}`, {
            method: 'DELETE',
        });
    }

    async function getUserFromSearch(searchValue) {
        fetch(`http://localhost:3000/api/clients?search=${searchValue}`)
            .then((res) => res.json())
            .then((data) => {
                users = data;
                deleteTable();
                sortStudents(data, 'id', sortedBy, true);
                renderTable(users);
            });
    }

    function generateRandomNumber() {
        return Math.random().toString(36).substring(2, 15);
    }

    function calcTop(el) {
        return `calc(50% - ${el.getBoundingClientRect().height / 2}px)`;
    }

    function getFixedDate(date) {
        if (String(date).length === 1) {
            return `0${date}`
        }
        return date;
    }

    function sortStudents(studentsArray, sortBy, sortedColumn, reverse = false) {
        function convertToSortableType(value, sortBy) {
            switch (sortBy) {
                case 'id':
                    return Number(value.id);
                case 'name':
                    return `${value.lastName}${value.name}${value.surname}`;
                case 'created':
                    return new Date(value.createdAt).getTime();
                case 'edited':
                    return new Date(value.updatedAt).getTime();
            }
        }

        if (reverse) {
            return {
                studentsArray: studentsArray.sort(function (a, b) {
                    if (convertToSortableType(a, sortBy) > convertToSortableType(b, sortBy)) return 1;
                    return -1;
                }),
                sortedColumn
            }
        } else {
            return {
                studentsArray: studentsArray.sort(function (a, b) {
                    if (convertToSortableType(a, sortBy) < convertToSortableType(b, sortBy)) return 1;
                    return -1;
                }),
                sortedColumn
            }
        }
    }

    function deleteTable() {
        const tableItems = document.querySelectorAll('.crm-table__row_content');
        for (let item of tableItems) {
            item.remove();
        }
    }

    function validateForm() {
        const convertName = {
            'lastname': 'Отчество',
            'name': 'Имя',
            'surname': 'Фамилия',
            'email': 'Email',
            'phone': 'Телефон',
            'facebook': 'Facebook',
            'vkontakte': 'VK',
            'other': 'Доп. телефон'
        }
        const validateForms = [ ...document.querySelectorAll('.form__input'), ...document.querySelectorAll('.contact-input-field') ]
        const EMAIL_REGEX = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
        const NAME_REGEX = /^[А-Я][а-яё]*$/;
        let errorMessage;
        let invalidInput;
        for (let input of validateForms) {
            input.classList.remove('invalidField');
            if ((input.name === 'phone' || input.name === 'other') && input.value.length !== 18) {
                errorMessage = `Поле ${convertName[input.name]} должно содержать 9 цифр`
                invalidInput = input;
                break;
            }
            if (input.name === 'vkontakte' && !input.value.includes('vk.com/')) {
                errorMessage = 'Введите верный id Вконтакте'
                invalidInput = input;
                break;
            }
            if (input.name === 'facebook' && !input.value.includes('https://www.facebook.com/')) {
                errorMessage = 'Введите верную ссылку на Facebook'
                invalidInput = input;
                break;
            }
            if (input.name === 'email' && !EMAIL_REGEX.test(input.value)) {
                errorMessage = 'Введите верный email'
                invalidInput = input;
                break;
            }
            if ((input.name === 'name' || input.name === 'surname') && !NAME_REGEX.test(input.value) || (input.name === 'lastname' && input.value.length > 0 && !NAME_REGEX.test(input.value))) {
                errorMessage = `Поле ${convertName[input.name]} содержит недопустимые символы`
                invalidInput = input;
                break;
            }
            if (input.name !== 'lastname' && input.value.length < 3 || input.name === 'lastname' && input.value.length > 0 && input.value.length < 3) {
                errorMessage = `Поле ${convertName[input.name]} должно содержать минимум 3 символа`
                invalidInput = input;
                break;
            }
        }

        if (invalidInput) {
            invalidInput.classList.add('invalidField');
        }
        return errorMessage ? errorMessage : '';
    }

    function renderTable(students) {
        const crmTable = document.getElementById('crm-table');
        for (let student of students) {
            const createdDateObj = new Date(student.createdAt);
            const editDateObj = new Date(student.updatedAt);
            const listItem = document.createElement('li');
            listItem.classList.add('crm-table__row', 'crm-table__row_content');

            const idWrapper = document.createElement('div');
            idWrapper.classList.add('row__cell', 'cell', 'id-cell');
            const id = document.createElement('span');
            id.classList.add('cell__content', 'cell__content_content', 'id-cell__content');
            id.textContent = student.id
            idWrapper.append(id);
            listItem.append(idWrapper);

            const nameWrapper = document.createElement('div');
            nameWrapper.classList.add('row__cell', 'cell', 'name-cell');
            const name = document.createElement('span');
            name.classList.add('cell__content', 'cell__content_content', 'name-cell__content');
            name.textContent = `${student.surname} ${student.name} ${student.lastName}`;
            nameWrapper.append(name);
            listItem.append(nameWrapper);

            const createdWrapper = document.createElement('div');
            createdWrapper.classList.add('row__cell', 'cell', 'created-cell');
            const created = document.createElement('span');
            created.classList.add('cell__content', 'cell__content_content', 'created-cell__content');
            const createdTime = document.createElement('span');
            createdTime.classList.add('created-time', 'time');
            created.textContent = `${getFixedDate(createdDateObj.getDate())}.${getFixedDate(createdDateObj.getMonth())}.${createdDateObj.getFullYear()}`;
            createdTime.textContent = `${getFixedDate(createdDateObj.getHours())}:${getFixedDate(createdDateObj.getMinutes())}`;
            created.append(createdTime);
            createdWrapper.append(created);
            listItem.append(createdWrapper);

            const editedWrapper = document.createElement('div');
            editedWrapper.classList.add('row__cell', 'cell', 'edited-cell');
            const edited = document.createElement('span');
            edited.classList.add('cell__content', 'cell__content_content', 'edited-cell__content');
            const editedTime = document.createElement('span');
            editedTime.classList.add('edited-time', 'time');
            edited.textContent = `${getFixedDate(editDateObj.getDate())}.${getFixedDate(editDateObj.getMonth())}.${editDateObj.getFullYear()}`;
            editedTime.textContent = `${getFixedDate(editDateObj.getHours())}:${getFixedDate(editDateObj.getMinutes())}`;
            edited.append(editedTime);
            editedWrapper.append(edited);
            listItem.append(editedWrapper);

            const iconsWrapper = document.createElement('div');
            iconsWrapper.classList.add('row__cell', 'cell', 'contacts-cell');
            const icons = document.createElement('div');
            icons.classList.add('contacts-cell__icons');
            const otherContacts = [];
            let mountedContacts = 0;
            for (let contact of student.contacts) {
                const icon = document.createElement('button');
                icon.classList.add('tippy');
                icon.dataset.tippyContent = contact.value;
                icon.innerHTML = contactIcons[contact.type];
                if (contact.type === 'other') {
                    otherContacts.push(icon);
                } else {
                    icons.append(icon);
                    mountedContacts++;
                }
            }

            while (mountedContacts < 5 && otherContacts.length !== 0 && !(mountedContacts === 4 && otherContacts.length > 1)) {
                mountedContacts++;
                icons.append(otherContacts.shift());
            }
            if (otherContacts.length !== 0) {
                const contactsLeft = document.createElement('div');
                contactsLeft.classList.add('contacts-left');
                contactsLeft.innerHTML = `<span>+${otherContacts.length}</span>`;
                icons.append(contactsLeft);
                contactsLeft.addEventListener('click', () => {
                    contactsLeft.remove();
                    for (let otherContact of otherContacts) {
                        icons.append(otherContact);
                        tippy(otherContact, {
                            theme: 'crm',
                            trigger: 'click',
                            interactive: true,
                        })
                    }
                })
            }


            iconsWrapper.append(icons);
            listItem.append(iconsWrapper);

            const actionsWrapper = document.createElement('div');
            actionsWrapper.classList.add('row__cell', 'cell', 'actions-cell', 'actions-cell_content');
            const actionAlter = document.createElement('button');
            actionAlter.classList.add('cell__content', 'cell__content_content', 'actions-cell__content', 'actions-cell__alter');
            const actionDelete = document.createElement('button');
            actionDelete.classList.add('cell__content', 'cell__content_content', 'actions-cell__content', 'actions-cell__delete')
            actionAlter.classList.add('cell__content', 'cell__content_content', 'actions-cell__content');
            actionAlter.innerHTML = '<svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
                '                          <path d="M0 10.5V13H2.5L9.87333 5.62662L7.37333 3.12662L0 10.5ZM11.8067 3.69329C12.0667 3.43329 12.0667 3.01329 11.8067 2.75329L10.2467 1.19329C9.98667 0.933291 9.56667 0.933291 9.30667 1.19329L8.08667 2.41329L10.5867 4.91329L11.8067 3.69329Z" fill="#9873FF"/>\n' +
                '                        </svg>\n' +
                '                        Изменить'
            actionDelete.innerHTML = '<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
                '                            <path d="M6 0C2.682 0 0 2.682 0 6C0 9.318 2.682 12 6 12C9.318 12 12 9.318 12 6C12 2.682 9.318 0 6 0ZM6 10.8C3.354 10.8 1.2 8.646 1.2 6C1.2 3.354 3.354 1.2 6 1.2C8.646 1.2 10.8 3.354 10.8 6C10.8 8.646 8.646 10.8 6 10.8ZM8.154 3L6 5.154L3.846 3L3 3.846L5.154 6L3 8.154L3.846 9L6 6.846L8.154 9L9 8.154L6.846 6L9 3.846L8.154 3Z"\n' +
                '                                  fill="#F06A4D"/>\n' +
                '                        </svg>\n' +
                '                        Удалить'
            actionsWrapper.append(actionAlter);
            actionsWrapper.append(actionDelete);
            listItem.append(actionsWrapper);

            actionDelete.addEventListener('click', () => {
                renderModalForm('delete client', student);
            });

            actionAlter.addEventListener('click', () => {
                renderModalForm('edit client', student);
                const modal = document.querySelector('.modal');
                const modalBackground = document.querySelector('.modal-background');
                modalBackground.style.height = `calc(100% + ${modal.getBoundingClientRect().height}px - 300px)`;
            });

            crmTable.append(listItem);
        }
        tippy('.tippy', {
            theme: 'crm',
            trigger: 'click',
            interactive: true,
        });
    }

    const addClientButton = document.querySelector('.add-client');
    addClientButton.addEventListener('click', () => {
        renderModalForm('new client');
        const modal = document.querySelector('.modal');
        const modalBackground = document.querySelector('.modal-background');
        modalBackground.style.height = `calc(100% + ${modal.getBoundingClientRect().height}px)`;
    });

    function renderModalForm(kind, student = null) {
        const modalBackground = document.createElement('div');
        modalBackground.classList.add('modal-background');

        const modal = document.createElement('div');
        modal.classList.add('modal');
        if (kind === 'new client') {
            modal.innerHTML = "<div class=\"modal__container\">\n" +
                "      <h2 class=\"modal__title\">Новый клиент</h2>\n" +
                "      <form class=\"modal__form form\">\n" +
                "        <div class=\"input-wrapper\">\n" +
                "          <div class='name-wrapper'>\n" +
                "              <input id='lastname' type=\"text\" class=\"form__input form__input_surname\" name='surname'>\n" +
                "              <label for='lastname' class='new-client-label'>Фамилия<span>*</span></label>\n" +
                "          </div>\n" +
                "          <div class='name-wrapper'>\n" +
                "              <input id='name' type=\"text\" class=\"form__input form__input_name\" name='name'>\n" +
                "              <label for='name' class='new-client-label'>Имя<span>*</span></label>\n" +
                "          </div>\n" +
                "          <div class='name-wrapper'>\n" +
                "              <input id='surname' type=\"text\" class=\"form__input form__input_lastname\" name='lastname'>\n" +
                "              <label for='surname' class='new-client-label'>Отчество</label>\n" +
                "          </div>\n" +
                "        </div>\n" +
                "        <div class=\"add-contact-container\">\n" +
                "          <button class=\"form__add-contact no-contacts\">\n" +
                "            Добавить контакт\n" +
                "          </button>\n" +
                "        </div>\n" +
                "        <p class='error'></p>\n" +
                "        <button class=\"form__preserve\">Сохранить</button>\n" +
                "        <button class=\"modal__cancel\">Отмена</button>\n" +
                "      </form>\n" +
                "      <button class=\"close-modal\">\n" +
                "        <svg width=\"17\" height=\"17\" viewBox=\"0 0 17 17\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
                "          <path fill-rule=\"evenodd\" clip-rule=\"evenodd\"\n" +
                "                d=\"M16.2333 1.73333L15.2666 0.766664L8.49991 7.53336L1.73324 0.766696L0.766576 1.73336L7.53324 8.50003L0.766603 15.2667L1.73327 16.2333L8.49991 9.46669L15.2666 16.2334L16.2332 15.2667L9.46657 8.50003L16.2333 1.73333Z\"\n" +
                "                fill=\"#B0B0B0\"/>\n" +
                "        </svg>\n" +
                "      </button>\n" +
                "    </div>";
            mountModal();


            const newContact = document.querySelector('.form__add-contact');
            let contactsArray = [];
            const deletedArray = [];
            newContact.addEventListener('click', (el) => {
                el.preventDefault();
                openContactsSelector(newContact, contactsArray, deletedArray);
                contactsArray = contactsArray.filter((item) => {
                    return deletedArray.indexOf(item.randomId) === -1
                });
                if (contactsArray.length === 10) {
                    newContact.remove();
                }
            });


            const saveClientButton = document.querySelector('.form__preserve');
            saveClientButton.addEventListener('click', async (e) => {
                e.preventDefault();
                const name = document.querySelector('.form__input_name');
                const lastname = document.querySelector('.form__input_lastname');
                const surname = document.querySelector('.form__input_surname');
                const contacts = contactsArray.map((item) => ({
                    type: String(item.select.value),
                    value: String(item.contactInput.value),
                }));
                const saveMessage = validateForm();
                if (saveMessage.length === 0) {
                    postUser({
                        name: name.value,
                        surname: surname.value,
                        lastName: lastname.value,
                        contacts: contacts,
                    }, renderNewTable);
                } else {
                    saveClientButton.style.outline = '1px solid #F06A4D'
                    modal.querySelector('.error').textContent = saveMessage;
                }

            });

            const inputs = document.querySelectorAll('.form__input');
            const labels = document.querySelectorAll('.new-client-label');
            for (let input = 0; input < 3; input++) {
                inputs[input].addEventListener('input', () => {
                    if (inputs[input].value.length !== 0) {
                        labels[input].style.opacity = '0';
                    } else {
                        labels[input].style.opacity = '1';
                    }
                })
            }
        } else if (kind === 'edit client') {
            modal.innerHTML = "<div class=\"modal__container\">\n" +
                "      <div class='modal-header'>\n" +
                "        <h2 class=\"modal__title\">Изменить данные</h2>\n" +
                `        <span class='client-id'>ID: ${student.id}</span>\n` +
                "      </div>\n" +
                "      <form class=\"modal__form form\">\n" +
                "        <div class=\"input-wrapper\">\n" +
                "          <label for='lastname' class='edit-label'>Фамилия<span>*</span></label>\n" +
                `          <input id='lastname' type=\"text\" class=\"form__input form__input_surname\" value='${student.surname}' name='lastname'>\n` +
                "          <label for='name' class='edit-label'>Имя<span>*</span></label>\n" +
                `          <input id='name' type=\"text\" class=\"form__input form__input_name\" value='${student.name}' name='name'>\n` +
                "          <label for='surname' class='edit-label'>Отчество</label>\n" +
                `          <input id='surname' type=\"text\" class=\"form__input form__input_lastname\" value='${student.lastName}' name='surname'>\n` +
                "        </div>\n" +
                "        <div class=\"add-contact-container\">\n" +
                "          <button class=\"form__add-contact no-contacts\">\n" +
                "            Добавить контакт\n" +
                "          </button>\n" +
                "        </div>\n" +
                "        <p class='error'></p>\n" +
                "        <button class=\"form__preserve\">Сохранить</button>\n" +
                "        <button class=\"modal__client-delete\">Удалить клиента</button>\n" +
                "      </form>\n" +
                "      <button class=\"close-modal\">\n" +
                "        <svg width=\"17\" height=\"17\" viewBox=\"0 0 17 17\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
                "          <path fill-rule=\"evenodd\" clip-rule=\"evenodd\"\n" +
                "                d=\"M16.2333 1.73333L15.2666 0.766664L8.49991 7.53336L1.73324 0.766696L0.766576 1.73336L7.53324 8.50003L0.766603 15.2667L1.73327 16.2333L8.49991 9.46669L15.2666 16.2334L16.2332 15.2667L9.46657 8.50003L16.2333 1.73333Z\"\n" +
                "                fill=\"#B0B0B0\"/>\n" +
                "        </svg>\n" +
                "      </button>\n" +
                "    </div>";
            mountModal();

            const newContact = modal.querySelector('.form__add-contact');
            const deletedArray = [];
            const existedContacts = student.contacts;
            let contactsArray = [];
            for (let contact of existedContacts) {
                openContactsSelector(newContact, contactsArray, deletedArray, contact);
            }
            newContact.addEventListener('click', (ev) => {
                ev.preventDefault();
                openContactsSelector(newContact, contactsArray, deletedArray);
                contactsArray = contactsArray.filter((item) => {
                    return deletedArray.indexOf(item.randomId) === -1
                });
                if (contactsArray.length === 10) {
                    newContact.remove();
                }
            });

            const saveClientButton = document.querySelector('.form__preserve');
            saveClientButton.addEventListener('click', async (e) => {
                e.preventDefault();
                const name = document.querySelector('.form__input_name');
                const lastname = document.querySelector('.form__input_lastname');
                const surname = document.querySelector('.form__input_surname');
                const contacts = contactsArray.map((item) => ({
                    type: String(item.select.value),
                    value: String(item.contactInput.value),
                }));
                const data = {};
                const saveMessage = validateForm();
                if (saveMessage.length === 0) {
                    editUser({
                        name: name ? name.value : student.name,
                        surname: surname ? surname.value : student.surname,
                        lastName: lastname ? lastname.value : student.lastName,
                        contacts: contacts,
                    }, student.id, renderNewTable);
                } else {
                    modal.querySelector('.error').textContent = saveMessage;
                }
            });


        } else if (kind === 'delete client') {
            modal.classList.add('modal-delete');
            const deleteClient = document.createElement('button');
            const modalDeleteContainer = document.createElement('div');
            modalDeleteContainer.classList.add('modal__container-delete');
            deleteClient.classList.add('modal__delete-client');
            deleteClient.textContent = 'Удалить';
            modalDeleteContainer.innerHTML = '<h2 class="modal__title delete-title">Удалить клиента</h2>\n' +
                '      <p class="modal__desc">Вы действительно хотите удалить данного клиента?</p>\n' +
                '      <button class="modal__cancel">Отмена</button>\n' +
                '      <button class="close-modal">\n' +
                '        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
                '          <path fill-rule="evenodd" clip-rule="evenodd" d="M16.2333 1.73333L15.2666 0.766664L8.49991 7.53336L1.73324 0.766696L0.766576 1.73336L7.53324 8.50003L0.766603 15.2667L1.73327 16.2333L8.49991 9.46669L15.2666 16.2334L16.2332 15.2667L9.46657 8.50003L16.2333 1.73333Z" fill="#B0B0B0"/>\n' +
                '        </svg>\n' +
                '      </button>';
            modalDeleteContainer.insertBefore(deleteClient, modalDeleteContainer.querySelector('.modal__cancel'));
            modal.append(modalDeleteContainer);
            deleteClient.addEventListener('click', (event) => {
                event.preventDefault();
                deleteUser(student.id);
                closeModal();
                users = users.filter((item) => item !== student);
                deleteTable();
                renderTable(users);
            });
            mountModal();
        }

        const modalCancel = modal.querySelector('.modal__cancel');
        const modalClientDelete = modal.querySelector('.modal__client-delete');
        if (modalCancel) {
            modalCancel.addEventListener('click', (ev) => {
                ev.preventDefault();
                closeModal();
            });
        }

        if (modalClientDelete) {
            modalClientDelete.addEventListener('click', (ev) => {
                ev.preventDefault();
                closeModal();
                renderModalForm('delete client', student);
            })
        }

        function mountModal() {
            const main = document.querySelector('.main');
            main.append(modalBackground);
            main.append(modal);
            modal.style.top = calcTop(modal);
            const closeButton = document.querySelector('.close-modal');
            closeButton.addEventListener('click', () => {
                closeModal();
            })
        }

        function closeModal() {
            modal.remove();
            modalBackground.remove();
        }

        async function renderNewTable() {
            await fetch('http://localhost:3000/api/clients')
                .then((res) => res.json())
                .then((data) => {
                    users = data;
                    deleteTable();
                    closeModal();
                    renderTable(users);
                });
        }
    }

    function openContactsSelector(newContact, contactsArray, deletedArray, contact = null) {
        newContact.classList.remove('no-contacts');
        const randomId = generateRandomNumber();
        const contactContainer = document.querySelector('.add-contact-container');
        const fieldExist = document.querySelector('.contact-field-container');
        const contactFieldContainer = document.createElement('form');
        contactFieldContainer.innerHTML = `<div class="itc-select" id="select-${randomId}">\n` +
            '      <button type="button" class="itc-select__toggle" name="contact" value="phone" data-select="toggle" data-index="0">\n' +
            '        Телефон\n' +
            '      </button>\n' +
            '      <div class="itc-select__dropdown">\n' +
            '        <ul class="itc-select__options">\n' +
            '          <li class="itc-select__option itc-select__option_selected" data-select="option" data-value="phone" data-index="0">Телефон</li>\n' +
            '          <li class="itc-select__option" data-select="option" data-value="email" data-index="1">Email</li>\n' +
            '          <li class="itc-select__option" data-select="option" data-value="facebook" data-index="2">Facebook</li>\n' +
            '          <li class="itc-select__option" data-select="option" data-value="vkontakte" data-index="3">VK</li>\n' +
            '          <li class="itc-select__option" data-select="option" data-value="other" data-index="4">Доп.&nbsp;телефон</li>\n' +
            '        </ul>\n' +
            '      </div>\n' +
            '    </div>\n' +
            `    <input type="text" class="contact-input-field" placeholder="Введите данные контакта" name="phone">\n` +
            `    <button class="remove-contact">\n` +
            '      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '        <path d="M6 0C2.682 0 0 2.682 0 6C0 9.318 2.682 12 6 12C9.318 12 12 9.318 12 6C12 2.682 9.318 0 6 0ZM6 10.8C3.354 10.8 1.2 8.646 1.2 6C1.2 3.354 3.354 1.2 6 1.2C8.646 1.2 10.8 3.354 10.8 6C10.8 8.646 8.646 10.8 6 10.8ZM8.154 3L6 5.154L3.846 3L3 3.846L5.154 6L3 8.154L3.846 9L6 6.846L8.154 9L9 8.154L6.846 6L9 3.846L8.154 3Z"\n' +
            '              fill="#B0B0B0"/>\n' +
            '      </svg>\n' +
            '    </button>';


        contactFieldContainer.classList.add('contact-field-container');
        const inputField = contactFieldContainer.querySelector('.contact-input-field');
        if (window.innerWidth < 768) {
            contactFieldContainer.querySelector('.contact-input-field').placeholder = 'Введите данные'
        }

        if (fieldExist) {
            contactContainer.insertBefore(contactFieldContainer, fieldExist);
        } else {
            contactContainer.append(contactFieldContainer);
        }

        const select = new ItcCustomSelect(`#select-${randomId}`);

        const removeButton = contactFieldContainer.querySelector('.remove-contact');
        removeButton.addEventListener('click', (event) => {
            event.preventDefault();
            contactFieldContainer.remove();
            deletedArray.push(randomId);
            const isAnyContactField = document.querySelector('.contact-field-container');
            if (!isAnyContactField) {
                document.querySelector('.form__add-contact').classList.add('no-contacts');
            }
            if (!document.querySelector('.form__add-contact')) {
                document.querySelector('.add-contact-container').prepend(newContact);
            }
        });

        if (contact) {
            const selectButton = contactFieldContainer.querySelector('.itc-select__toggle');
            const contactInput = contactContainer.querySelector('.contact-input-field');
            contactInput.value = contact.value;
            selectButton.value = contact.type;
            selectButton.innerHTML = buttonTextContent[contact.type];
            inputField.name = contact.type;
        }

        const contactInput = contactFieldContainer.querySelector('.contact-input-field');
        const phoneMask = new Inputmask("+7 (999) 999-99-99");
        if (select.value === 'phone' || select.value === 'other') {
            phoneMask.mask(contactInput);
        }
        contactFieldContainer.querySelector(`#select-${randomId}`).addEventListener('itc.select.change', (e) => {
            const selected = e.target.querySelector('.itc-select__toggle').value;
            if (selected === 'phone' || selected === 'other') {
                phoneMask.mask(contactInput);
            } else if (contactInput.inputmask) {
                contactInput.inputmask.remove();
            }
            contactInput.value = '';
            inputField.name = selected;
        });

        contactsArray.push({ contactInput: contactInput, select, randomId });
    }

    const columnSortButtons = document.querySelectorAll('.cell__sort-btn');
    let sortedBy = columnSortButtons[0];
    sortedBy.querySelector('svg').style.transform = 'rotate(180deg)';
    sortStudents(users, 'id', sortedBy, true);
    renderTable(users);
    let sortedResult;
    for (let columnSort of columnSortButtons) {
        columnSort.addEventListener('click', () => {
            if (sortedBy === columnSort) {
                sortedResult = sortStudents(users, columnSort.dataset.type, columnSort);
                sortedResult.sortedColumn = null;
                columnSortButtons.forEach((item) => {
                    item.querySelector('svg').style.transform = '';
                })
            } else {
                columnSortButtons.forEach((item) => {
                    item.querySelector('svg').style.transform = '';
                })
                sortedResult = sortStudents(users, columnSort.dataset.type, columnSort, true);
                sortedResult.sortedColumn.querySelector('svg').style.transform = 'rotate(180deg)';
            }
            users = sortedResult.studentsArray;
            sortedBy = sortedResult.sortedColumn;
            deleteTable();
            renderTable(users);
        })
    }

    const searchInput = document.querySelector('.header__user-search');
    let timer;
    searchInput.addEventListener('input', () => {
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(async () => {
            await getUserFromSearch(searchInput.value);
        }, 1000);
    })


})();
