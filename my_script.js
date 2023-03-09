//1. Принять от пользователя имена людей для набора в команду. 
function getNames() {
    const positions = [
      'Junior developer',
      'Middle developer',
      'Senior developer',
      'Junior QA',
      'Middle QA',
      'Senior QA',
      'Project manager'
    ];
  
    const employees = [];
    for (const position of positions) {
      let name = prompt('Введите имя сотрудника на должность' + position);
      employees.push({ name, position });
    }
    return employees;
  }
  
  // Шаг 2: Создаем объект команды и заполняем его данными
  function createTeam() {
    const employees = getNames();
    const team = {
      employees
    };
    return team;
  }
  
  // Шаг 3: устанавливаем зарплату для каждого сотрудника
  function setSalary(team) {
    for (const employee of team.employees) {
      let salary;
      if (employee.position.toLowerCase().indexOf('junior') !== -1) {
        salary = Math.floor(Math.random() * (1000 - 500 + 1) + 500);
      } else if (employee.position.toLowerCase().indexOf('middle') !== -1) {
        salary = Math.floor(Math.random() * (2000 - 1500 + 1) + 1500);
      } else if (employee.position.toLowerCase().indexOf('senior') !== -1) {
        salary = Math.floor(Math.random() * (3000 - 2500 + 1) + 2500);
      } else {
        salary = Math.floor(Math.random() * (4500 - 4000 + 1) + 4000);
      }
      employee.salary = salary;
    }
  }
  
  // Шаг 4: добавляем метод tellAboutYourself() для каждого сотрудника
  function addTellAboutYourselfMethod(team) {
    for (const employee of team.employees) {
      employee.tellAboutYourself = function() {
        console.log('Меня зовут' + this.name + 'и я' + this.position +'. Я зарабатываю' + this.salary);
      };
    }
  }
  
  // Шаг 5: добавляем метод showTeam() для команды
  function addShowTeamMethod(team) {
    team.showTeam = function() {
      for (const employee of this.employees) {
        console.log(employee.name + ' ' + employee.position + 'Зарплата' + ' ' + employee.salary);
      }
    };
  }
  
  // Вызываем все функции в логическом порядке
  const team = createTeam();
  setSalary(team);
  addTellAboutYourselfMethod(team);
  addShowTeamMethod(team);
  team.showTeam();
      