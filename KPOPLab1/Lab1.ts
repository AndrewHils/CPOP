enum Category {
    'BusinessAnalyst',
    'Developer',
    'Designer',
    'QA',
    'ScrumMaster'
}
//1.1
function getAllworkers() {
    let workers = [
        {id: 1, Name: 'Ivan', surname: 'Ivanov', available: true, salary: 1000, category: Category.BusinessAnalyst },
        {id: 2, Name: 'Petro', surname: 'Petrov', available: true, salary: 1500, category: Category.Developer },
        {id: 3, Name: 'Vasyl', surname: 'Vasyliev', available: false, salary: 1600, category: Category.Designer },
        {id: 4, Name: 'Evgen', surname: 'Zhukov', available: true, salary: 1300, category: Category.QA },
        {id: 5, Name: 'Oleg', surname: 'Olegov', available: true, salary: 1400, category: Category.ScrumMaster }
    ]
    return workers;
}

function logFirstAvailable(workers: { Name: string, surname: string, available: boolean, salary: number }[] = getAllworkers()): void {
    let numberOfWorkers: number = workers.length;
    console.log(`Number of workers: ${numberOfWorkers}`);

    for (const worker of workers) {
        if (worker.available) {
            console.log(`First available worker: ${worker.Name} ${worker.surname}`);
            break;
        }
    }
}
//1.2
function getWorkersNamesByCategory(
    workers: { Name: string, surname: string, available: boolean, salary: number, category: Category }[],
    category: Category = Category.Designer
): string[] {
    const workersInCategory = workers.filter(worker => worker.category === category);
    return workersInCategory.map(worker => worker.surname);
}

function logWorkersNames(workers: { Name: string, surname: string, available: boolean, salary: number, category: Category }[]): void {
    for (const worker of workers) {
        console.log(`${worker.Name} ${worker.surname}`);
    }
}
//1.3
function getWorkerByID(id: number): { Name: string, surname: string, salary: number, available: boolean } | undefined {
    const allWorkers = getAllworkers();
    // @ts-ignore
    const foundWorker = allWorkers.find(worker => worker.id === id);
    if (foundWorker) {
        const { Name, surname, salary, available } = foundWorker;
        return { Name, surname, salary, available };
    }
    return undefined;
}
//1.4
function createCustomerID(name: string, id: number): string {
    return `${name}${id}`;
}

//1.5
function createCustomer(name: string, age?: number, city?: string): void {
    console.log(`Customer name: ${name}`);

    if (age !== undefined) {
        console.log(`Age: ${age}`);
    }

    if (city !== undefined) {
        console.log(`City: ${city}`);
    }
}

function checkoutWorkers(customer: string, workerIDs: number[]): string[] {
    console.log(`Customer: ${customer}`);
    const availableWorkers: string[] = [];

    workerIDs.forEach(id => {
        const worker = getWorkerByID(id);
        if (worker && worker.available) {
            availableWorkers.push(`${worker.Name} ${worker.surname}`);
        }
    });

    return availableWorkers;
}
//main
//1.1
console.log("Start of program...\n\n1.1\n");
const allWorkers = getAllworkers();
logFirstAvailable(allWorkers);

//1.2
console.log("\n1.2\nSurnames of Developers\n");
const developers = getWorkersNamesByCategory(allWorkers, Category.Developer);
console.log(developers);

console.log("\nNames of all workers (by function logWorkersNames):");
logWorkersNames(allWorkers);

//1.3
console.log("\n1.3\nNames of Developers:");
//Стрілочна Функція
allWorkers.forEach(worker => {
    if (worker.category === Category.Developer) {
        console.log(`Name: ${worker.Name}, Surname: ${worker.surname}`);
    }
});

//1.3_3
console.log("\nWorker by ID:");
const workerDetails = getWorkerByID(3);
if (workerDetails) {
    console.log(`Name: ${workerDetails.Name}, Surname: ${workerDetails.surname}, Salary: ${workerDetails.salary}`);
} else {
    console.log("Worker not found");
}

//1.4
console.log("\n1.4\nMy ID:");
let myID = '';
myID = createCustomerID('Ann', 10);
console.log(myID);

console.log("\nCustomer ID:");
let IdGenerator: (name: string, id: number) => string;
IdGenerator = (name, id) => `${name}${id}`;

const customerID = IdGenerator("John", 7);
console.log(customerID);

//1.5
console.log("\n1.5\nFunction createCustomer with different numbers of parameters\n");
// Виклики функції з різними кількостями параметрів:
createCustomer('Andrew');
createCustomer('Alice', 30);
createCustomer('Bob', 25, 'New York');

// Виклик функції без параметра
console.log("Function getWorkersNamesByCategory without parameters\n");
const designers = getWorkersNamesByCategory(allWorkers);
console.log(designers); // Виведе масив прізвищ робітників категорії Designer

console.log("\nFunction logFirstAvailable without parameters\n");
logFirstAvailable();// Без параметрів

console.log("\nRealisation of function checkoutWorkers...\n");
const myWorkers = checkoutWorkers('Ann', [1,2,4]);

myWorkers.forEach(worker => {
    console.log(worker);
});

console.log("\nEnd of program...\n");