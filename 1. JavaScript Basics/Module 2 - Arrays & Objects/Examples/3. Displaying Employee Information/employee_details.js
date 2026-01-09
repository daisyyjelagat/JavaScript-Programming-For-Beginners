// initializing the employee details
const employees = [
    { id: 1, name: 'Alice Grace', age: 30, department: 'IT', salary: 50000 },
    { id: 2, name: 'Daisy Jelagat', age: 22, department: 'HR', salary: 45000 },
    { id: 3, name: 'Bob Smith', age: 35, department: 'Finance', salary: 60000 },
];

// function to display all employees
function displayEmployees() {
    const totalEmployees = employees
        .map(employee => `<p>${employee.id}: ${employee.name} - ${employee.department} - ${employee.salary}</p>`)
        .join('');
    document.getElementById('employeesDetails').innerHTML = totalEmployees;
}

// function to calculate the total salaries
function totalSalaries() {
    const totalSalaries = employees.reduce((acc, employee) => acc + employee.salary, 0); // Fixed to add salaries
    alert('Total Salaries: ' + totalSalaries);
}

// function to display HR employees
function displayHREmployees() {
    const hrEmployee = employees.filter(employee => employee.department === 'HR');
    const hrEmployeesDisplay = hrEmployee
        .map(employee => `<p>${employee.id}: ${employee.name} - ${employee.department} - ${employee.salary}</p>`)
        .join('');
    document.getElementById('employeesDetails').innerHTML = hrEmployeesDisplay;
}

// function to display employee details based on ID
function findEmployeeByID() {
    const foundEmployee = employees.find(employee => employee.id === 2);
    if (foundEmployee) {
        document.getElementById('employeesDetails').innerHTML = `<p>${foundEmployee.id}: ${foundEmployee.name} - ${foundEmployee.department} - ${foundEmployee.salary}</p>`;
    } else {
        document.getElementById('employeesDetails').innerHTML = 'No employee has been found with this ID';
    }
}