(function () {
    async function getUsers() {
        const usersResponse = await fetch('http://localhost:3000/api/clients');
        return await usersResponse.json();
    }

    function generateId() {
        return Number(Math.random().toString().replace('.', '').slice(-5));
    }

    function User(name) {
        this.id = generateId();
        this.name = name;
        this.createdAt = new Date();
        this.editedAt = new Date();
    }

    function renderTable(students) {
        const crmTable = document.getElementById('crm-table');
        for (let student of students) {
            let listItem = document.createElement('li');
            listItem.classList.add('crm-table__row', 'crm-table__row_content');

            let idWrapper = document.createElement('div');
            idWrapper.classList.add('row__cell', 'cell', 'id-cell');
            let id = document.createElement('span');
            id.classList.add('cell__content', 'cell__content_content', 'id-cell__content');
            id.textContent = student.id;
            idWrapper.append(id);
            listItem.append(idWrapper);

            let nameWrapper = document.createElement('div');
            nameWrapper.classList.add('row__cell', 'cell', 'name-cell');
            let name = document.createElement('span');
            name.classList.add('cell__content', 'cell__content_content', 'name-cell__content');
            name.textContent = `${student.surname} ${student.name} ${student.lastName}`;
            nameWrapper.append(name);
            listItem.append(nameWrapper);

            let createdWrapper = document.createElement('div');
            createdWrapper.classList.add('row__cell', 'cell', 'created-cell');
            let created = document.createElement('span');
            created.classList.add('cell__content', 'cell__content_content', 'created-cell__content');
            let createdTime = document.createElement('span');
            createdTime.classList.add('created-time', 'time');
            created.textContent = '21.02.2021';
            createdTime.textContent = '12:41';
            created.append(createdTime);
            createdWrapper.append(created);
            listItem.append(createdWrapper)

            let editedWrapper = document.createElement('div');
            name.classList.add('row__cell', 'cell', 'edited-cell');
            let edited = document.createElement('span');
            edited.classList.add('cell__content', 'cell__content_content', 'edited-cell__content');
            let editedTime = document.createElement('span');
            editedTime.classList.add('edited-time', 'time');
            edited.textContent = '21.02.2021';
            editedTime.textContent = '12:41';
            edited.append(editedTime);
            editedWrapper.append(edited);
            listItem.append(editedWrapper)

            let iconsWrapper = document.createElement('div');
            iconsWrapper.classList.add('row__cell', 'cell', 'contacts-cell');
            let icons = document.createElement('div');
            icons.classList.add('contacts-cell__icons');
            icons.innerHTML = "<svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
                "              <path d=\"M8 0C3.58187 0 0 3.58171 0 8C0 12.4183 3.58187 16 8 16C12.4181 16 16 12.4183 16 8C16 3.58171 12.4181 0 8 0ZM12.058 8.86523C12.4309 9.22942 12.8254 9.57217 13.1601 9.97402C13.3084 10.1518 13.4482 10.3356 13.5546 10.5423C13.7065 10.8371 13.5693 11.1604 13.3055 11.1779L11.6665 11.1776C11.2432 11.2126 10.9064 11.0419 10.6224 10.7525C10.3957 10.5219 10.1853 10.2755 9.96698 10.037C9.87777 9.93915 9.78382 9.847 9.67186 9.77449C9.44843 9.62914 9.2543 9.67366 9.1263 9.90707C8.99585 10.1446 8.96606 10.4078 8.95362 10.6721C8.93577 11.0586 8.81923 11.1596 8.43147 11.1777C7.60291 11.2165 6.81674 11.0908 6.08606 10.6731C5.44147 10.3047 4.94257 9.78463 4.50783 9.19587C3.66126 8.04812 3.01291 6.78842 2.43036 5.49254C2.29925 5.2007 2.39517 5.04454 2.71714 5.03849C3.25205 5.02817 3.78697 5.02948 4.32188 5.03799C4.53958 5.04143 4.68362 5.166 4.76726 5.37142C5.05633 6.08262 5.4107 6.75928 5.85477 7.38684C5.97311 7.55396 6.09391 7.72059 6.26594 7.83861C6.45582 7.9689 6.60051 7.92585 6.69005 7.71388C6.74734 7.57917 6.77205 7.43513 6.78449 7.29076C6.82705 6.79628 6.83212 6.30195 6.75847 5.80943C6.71263 5.50122 6.53929 5.30218 6.23206 5.24391C6.07558 5.21428 6.0985 5.15634 6.17461 5.06697C6.3067 4.91245 6.43045 4.81686 6.67777 4.81686L8.52951 4.81653C8.82136 4.87382 8.88683 5.00477 8.92645 5.29874L8.92808 7.35656C8.92464 7.47032 8.98521 7.80751 9.18948 7.88198C9.35317 7.936 9.4612 7.80473 9.55908 7.70112C10.0032 7.22987 10.3195 6.67368 10.6029 6.09801C10.7279 5.84413 10.8358 5.58142 10.9406 5.31822C11.0185 5.1236 11.1396 5.02785 11.3593 5.03112L13.1424 5.03325C13.195 5.03325 13.2483 5.03374 13.3004 5.04274C13.6009 5.09414 13.6832 5.22345 13.5903 5.5166C13.4439 5.97721 13.1596 6.36088 12.8817 6.74553C12.5838 7.15736 12.2661 7.55478 11.9711 7.96841C11.7001 8.34652 11.7215 8.53688 12.058 8.86523Z\"\n" +
                "                    fill=\"#9873FF\"/>\n" +
                "            </svg>"
            iconsWrapper.append(icons);
            listItem.append(iconsWrapper);

            let actionsWrapper = document.createElement('div');
            actionsWrapper.classList.add('row__cell', 'cell', 'actions-cell', 'actions-cell_content');
            let actionAlter = document.createElement('button');
            actionAlter.classList.add('cell__content', 'cell__content_content', 'actions-cell__content', 'actions-cell__alter');
            let actionDelete = document.createElement('button');
            actionAlter.classList.add('cell__content', 'cell__content_content', 'actions-cell__content', 'actions-cell__delete');
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
        }
    }

    // renderTable(getUsers());

})();
