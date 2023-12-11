var Category;
(function (Category) {
    Category[Category["BusinessAnalyst"] = 0] = "BusinessAnalyst";
    Category[Category["Developer"] = 1] = "Developer";
    Category[Category["Designer"] = 2] = "Designer";
    Category[Category["QA"] = 3] = "QA";
    Category[Category["ScrumMaster"] = 4] = "ScrumMaster";
})(Category || (Category = {}));
//1.1
function getAllworkers() {
    var workers = [
        { id: 1, Name: 'Ivan', surname: 'Ivanov', available: true, salary: 1000, category: Category.BusinessAnalyst },
        { id: 2, Name: 'Petro', surname: 'Petrov', available: true, salary: 1500, category: Category.Developer },
        { id: 3, Name: 'Vasyl', surname: 'Vasyliev', available: false, salary: 1600, category: Category.Designer },
        { id: 4, Name: 'Evgen', surname: 'Zhukov', available: true, salary: 1300, category: Category.QA },
        { id: 5, Name: 'Oleg', surname: 'Olegov', available: true, salary: 1400, category: Category.ScrumMaster }
    ];
    return workers;
}
function logFirstAvailable(workers) {
    if (workers === void 0) { workers = getAllworkers(); }
    var numberOfWorkers = workers.length;
    console.log("Number of workers: " + numberOfWorkers);
    for (var _i = 0, workers_1 = workers; _i < workers_1.length; _i++) {
        var worker = workers_1[_i];
        if (worker.available) {
            console.log("First available worker: " + worker.Name + " " + worker.surname);
            break;
        }
    }
}
//1.2
function getWorkersNamesByCategory(workers, category) {
    if (category === void 0) { category = Category.Designer; }
    var workersInCategory = workers.filter(function (worker) { return worker.category === category; });
    return workersInCategory.map(function (worker) { return worker.surname; });
}
function logWorkersNames(workers) {
    for (var _i = 0, workers_2 = workers; _i < workers_2.length; _i++) {
        var worker = workers_2[_i];
        console.log(worker.Name + " " + worker.surname);
    }
}
//1.3
function getWorkerByID(id) {
    var allWorkers = getAllworkers();
    // @ts-ignore
    var foundWorker = allWorkers.find(function (worker) { return worker.id === id; });
    if (foundWorker) {
        var Name = foundWorker.Name, surname = foundWorker.surname, salary = foundWorker.salary, available = foundWorker.available;
        return { Name: Name, surname: surname, salary: salary, available: available };
    }
    return undefined;
}
//1.4
function createCustomerID(name, id) {
    return "" + name + id;
}
//1.5
function createCustomer(name, age, city) {
    console.log("Customer name: " + name);
    if (age !== undefined) {
        console.log("Age: " + age);
    }
    if (city !== undefined) {
        console.log("City: " + city);
    }
}
function checkoutWorkers(customer, workerIDs) {
    console.log("Customer: " + customer);
    var availableWorkers = [];
    workerIDs.forEach(function (id) {
        var worker = getWorkerByID(id);
        if (worker && worker.available) {
            availableWorkers.push(worker.Name + " " + worker.surname);
        }
    });
    return availableWorkers;
}
//main
//1.1
console.log("Start of program...\n\n1.1\n");
var allWorkers = getAllworkers();
logFirstAvailable(allWorkers);
//1.2
console.log("\n1.2\nSurnames of Developers\n");
var developers = getWorkersNamesByCategory(allWorkers, Category.Developer);
console.log(developers);
console.log("\nNames of all workers (by function logWorkersNames):");
logWorkersNames(allWorkers);
//1.3
console.log("\n1.3\nNames of Developers:");
//Стрілочна Функція
allWorkers.forEach(function (worker) {
    if (worker.category === Category.Developer) {
        console.log("Name: " + worker.Name + ", Surname: " + worker.surname);
    }
});
//1.3_3
console.log("\nWorker by ID:");
var workerDetails = getWorkerByID(3);
if (workerDetails) {
    console.log("Name: " + workerDetails.Name + ", Surname: " + workerDetails.surname + ", Salary: " + workerDetails.salary);
}
else {
    console.log("Worker not found");
}
//1.4
console.log("\n1.4\nMy ID:");
var myID = '';
myID = createCustomerID('Ann', 10);
console.log(myID);
console.log("\nCustomer ID:");
var IdGenerator;
IdGenerator = function (name, id) { return "" + name + id; };
var customerID = IdGenerator("John", 7);
console.log(customerID);
//1.5
console.log("\n1.5\nFunction createCustomer with different numbers of parameters\n");
// Виклики функції з різними кількостями параметрів:
createCustomer('Andrew');
createCustomer('Alice', 30);
createCustomer('Bob', 25, 'New York');
// Виклик функції без параметра
console.log("Function getWorkersNamesByCategory without parameters\n");
var designers = getWorkersNamesByCategory(allWorkers);
console.log(designers); // Виведе масив прізвищ робітників категорії Designer
console.log("\nFunction logFirstAvailable without parameters\n");
logFirstAvailable(); // Без параметрів
console.log("\nRealisation of function checkoutWorkers...\n");
var myWorkers = checkoutWorkers('Ann', [1, 2, 4]);
myWorkers.forEach(function (worker) {
    console.log(worker);
});
console.log("\nEnd of program...\n");
