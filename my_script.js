

// 1. Принять от пользователя имена людей для набора в команду.
let names = [];

function getNames() {
  for (let i = 0; i < 7; i++) {
    let name = prompt('Введите имя для должности ' + position[i]);
    names.push(name);
  }
}

// Массив с должностями
let position = ['Junior developer', 'Middle developer', 'Senior developer', 'Junior QA', 'Middle QA', 'Senior QA', 'Project manager'];

// 2. Создать объект team в котором будут храниться новые объекты-сотрудники
let team = {};

function createTeam() {
  for ( let i = 0; i < 7; i++) {
    team[position[i]] = {
      name: names[i],
      position: position[i],
      salary: 0
    };
  }
}

// 3. Добавить сотрудникам зарплаты
function setSalary() {
  for ( let i = 0; i < 7; i++) {
    let pos = position[i].toLowerCase();
    if (pos.indexOf('junior') !== -1) {
      team[position[i]].salary = Math.floor(Math.random() * (1000 - 500 + 1)) + 500;
    } else if (pos.indexOf('middle') !== -1) {
      team[position[i]].salary = Math.floor(Math.random() * (2000 - 1500 + 1)) + 1500;
    } else if (pos.indexOf('senior') !== -1) {
      team[position[i]].salary = Math.floor(Math.random() * (3000 - 2500 + 1)) + 2500;
    } else {
      team[position[i]].salary = Math.floor(Math.random() * (4500 - 4000 + 1)) + 4000;
    }
  }
}

// 4. Добавить каждому сотруднику метод tellAboutYourSelf()
function setTellAboutYourSelf() {
  for ( let i = 0; i < 7; i++) {
    team[position[i]].tellAboutYourSelf = function() {
      console.log('Меня зовут ' + this.name + ' и я - ' + this.position + '. Я зарабатываю ' + this.salary + '$.');
    }
    team[position[i]].tellAboutYourSelf; 
  }
}

// 5. Добавить объекту team метод showTeam()
team.showTeam = function() {
  for ( let i = 0; i < 7; i++) {
    console.log(team[position[i]].name + ' - ' + team[position[i]].position + '. Зарплата - ' + team[position[i]].salary + '$.');
  }
};

// Вызов функций в логическом порядке
getNames();
createTeam();
setSalary();
setTellAboutYourSelf();
team.showTeam();

