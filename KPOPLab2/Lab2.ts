enum Category {
    BusinessAnalyst,
    Developer,
    Designer,
    QA,
    ScrumMaster
}
//2.1 Not worker but Employee
interface Employee {
    id: number;
    name: string;
    surname: string;
    available: boolean;
    salary: number;
    category: Category;
    //markPrize: PrizeLogger;
}
//2.2
// interface PrizeLogger {
//     (message: string): void;
// }
// function prizeLog(message: string): void {
//     console.log(`Prize awarded: ${message}`);
// }

// let logPrize: PrizeLogger;
// logPrize = prizeLog;
// logPrize('Gold medal');

//2.3
interface Person {
    name: string;
    email: string;
}

interface Author extends Person {
    numBooksPublished: number;
}

interface Librarian extends Person {
    department: string;
    assistCustomer(custName: string): void;
}
//2.4
class UniversityLibrarian implements Librarian {
    name: string;
    email: string;
    department: string;

    constructor(name: string, email: string, department: string) {
        this.name = name;
        this.email = email;
        this.department = department;
    }
    assistCustomer(custName: string): void {
        console.log(`${this.name} is assisting ${custName}`);
    }
}
//2.5
abstract class ReferenceItem {
    public title: string;
    protected year: number;
    private _publisher: string;
    static department: string = 'BBS Department';

    abstract printCitation(): void;

    get publisher(): string {
        return this._publisher.toUpperCase();
    }
    set publisher(newPublisher: string) {
        this._publisher = newPublisher;
    }
    // constructor(newTitle: string, newYear: number) {
    //     console.log('Creating a new ReferenceItem...');
    //     this.title = newTitle;
    //     this.year = newYear;
    // }
    constructor(title: string, year: number) {
        console.log('Creating a new ReferenceItem...');
        this.title = title;
        this.year = year;
    }
    printItem(): void {
        console.log(`${this.title} was published in ${this.year}`);
        console.log(`Department: ${ReferenceItem.department}`);
    }
}
//2.6
class Encyclopedia extends ReferenceItem {
    constructor(title: string, year: number, public edition: number) {
        super(title, year);
    }
    printItem(): void {
        super.printItem();
        console.log(`Edition: ${this.edition} (${this.year})`);
    }
    //2.7
    printCitation(): void {
        console.log(`${this.title} - ${this.year}`);
    }
}

function getAllEmployees(): Employee[] {
    let employees: Employee[] = [
        {id: 1, name: 'Ivan', surname: 'Ivanov', available: true, salary: 1000, category: Category.BusinessAnalyst},
        {id: 2, name: 'Petro', surname: 'Petrov', available: true, salary: 1600, category: Category.Developer},
        {id: 3, name: 'Vasyl', surname: 'Vasyliev', available: false, salary: 1900, category: Category.Designer},
        {id: 4, name: 'Evgen', surname: 'Zhukov', available: true, salary: 1250, category: Category.QA},
        {id: 5, name: 'Oleg', surname: 'Olegov', available: true, salary: 2000, category: Category.ScrumMaster}
    ];
    return employees;
}

//2.1_3
function getWorkerByID(id: number): Employee | undefined {
    const employees = getAllEmployees();
    // @ts-ignore
    const foundWorker = employees.find(worker => worker.id === id);

    if (foundWorker) {
        return foundWorker;
    }

    return undefined;
}
function PrintWorker(worker: Employee): void {
    console.log(`${worker.name} ${worker.surname} got salary ${worker.salary}`);
}

//main
//2.1
console.log("Start of program...\n\n2.1\n");
const allEmployees = getAllEmployees();

console.log("\nAll Employees:");
console.log(allEmployees);

console.log("\nWorker by ID:");
const emp = getWorkerByID(3);
PrintWorker(emp);

console.log("\n2.3\nFavorite Author:");
// Оголошення змінної favoriteAuthor використовуючи інтерфейс Author
let favoriteAuthor: Author = {
    name: "John Green",
    email: "johnGGG@gmail.com",
    numBooksPublished: 5
};
console.log(favoriteAuthor);

// Оголошення змінної favoriteLibrarian використовуючи інтерфейс Librarian
// let favoriteLibrarian: Librarian = {
//     name: "Alice Smith",
//     email: "aliceSmiTH2003@outlook.com",
//     department: "Fiction",
//     assistCustomer(custName: string) {
//         console.log(`Assisting customer ${custName}`);
//     }
// };

console.log("\n2.4\nUniversity Librarian:");
// Ініціалізація об'єкта класу UniversityLibrarian
const favoriteLibrarian: Librarian = new UniversityLibrarian("Alice", "aliceSmiTH2003@outlook.com", "Fiction");
// Присвоєння значення властивості name та виклик методу assistCustomer()
favoriteLibrarian.assistCustomer("John"); // Викликаємо метод assistCustomer()

//2.5
// const book = new ReferenceItem("Harry Potter", 2003);
// book.printItem();
// book.publisher = 'Rowling';
// console.log(book.publisher);

console.log("\n2.6\nNew Encyclopedia:");
const refBook = new Encyclopedia('My Encyclopedia', 2023, 3);
refBook.printItem();

console.log("\n2.7\nAbstract class:");
refBook.printCitation();

console.log("\nEnd of program...\n");