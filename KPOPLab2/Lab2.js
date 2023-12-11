var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Category;
(function (Category) {
    Category[Category["BusinessAnalyst"] = 0] = "BusinessAnalyst";
    Category[Category["Developer"] = 1] = "Developer";
    Category[Category["Designer"] = 2] = "Designer";
    Category[Category["QA"] = 3] = "QA";
    Category[Category["ScrumMaster"] = 4] = "ScrumMaster";
})(Category || (Category = {}));
//2.4
var UniversityLibrarian = /** @class */ (function () {
    function UniversityLibrarian(name, email, department) {
        this.name = name;
        this.email = email;
        this.department = department;
    }
    UniversityLibrarian.prototype.assistCustomer = function (custName) {
        console.log(this.name + " is assisting " + custName);
    };
    return UniversityLibrarian;
}());
//2.5
var ReferenceItem = /** @class */ (function () {
    // constructor(newTitle: string, newYear: number) {
    //     console.log('Creating a new ReferenceItem...');
    //     this.title = newTitle;
    //     this.year = newYear;
    // }
    function ReferenceItem(title, year) {
        console.log('Creating a new ReferenceItem...');
        this.title = title;
        this.year = year;
    }
    Object.defineProperty(ReferenceItem.prototype, "publisher", {
        get: function () {
            return this._publisher.toUpperCase();
        },
        set: function (newPublisher) {
            this._publisher = newPublisher;
        },
        enumerable: false,
        configurable: true
    });
    ReferenceItem.prototype.printItem = function () {
        console.log(this.title + " was published in " + this.year);
        console.log("Department: " + ReferenceItem.department);
    };
    ReferenceItem.department = 'BBS Department';
    return ReferenceItem;
}());
//2.6
var Encyclopedia = /** @class */ (function (_super) {
    __extends(Encyclopedia, _super);
    function Encyclopedia(title, year, edition) {
        var _this = _super.call(this, title, year) || this;
        _this.edition = edition;
        return _this;
    }
    Encyclopedia.prototype.printItem = function () {
        _super.prototype.printItem.call(this);
        console.log("Edition: " + this.edition + " (" + this.year + ")");
    };
    //2.7
    Encyclopedia.prototype.printCitation = function () {
        console.log(this.title + " - " + this.year);
    };
    return Encyclopedia;
}(ReferenceItem));
function getAllEmployees() {
    var employees = [
        { id: 1, name: 'Ivan', surname: 'Ivanov', available: true, salary: 1000, category: Category.BusinessAnalyst },
        { id: 2, name: 'Petro', surname: 'Petrov', available: true, salary: 1600, category: Category.Developer },
        { id: 3, name: 'Vasyl', surname: 'Vasyliev', available: false, salary: 1900, category: Category.Designer },
        { id: 4, name: 'Evgen', surname: 'Zhukov', available: true, salary: 1250, category: Category.QA },
        { id: 5, name: 'Oleg', surname: 'Olegov', available: true, salary: 2000, category: Category.ScrumMaster }
    ];
    return employees;
}
//2.1_3
function getWorkerByID(id) {
    var employees = getAllEmployees();
    // @ts-ignore
    var foundWorker = employees.find(function (worker) { return worker.id === id; });
    if (foundWorker) {
        return foundWorker;
    }
    return undefined;
}
function PrintWorker(worker) {
    console.log(worker.name + " " + worker.surname + " got salary " + worker.salary);
}
//main
//2.1
console.log("Start of program...\n\n2.1\n");
var allEmployees = getAllEmployees();
console.log("\nAll Employees:");
console.log(allEmployees);
console.log("\nWorker by ID:");
var emp = getWorkerByID(3);
PrintWorker(emp);
console.log("\n2.3\nFavorite Author:");
// Оголошення змінної favoriteAuthor використовуючи інтерфейс Author
var favoriteAuthor = {
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
var favoriteLibrarian = new UniversityLibrarian("Alice", "aliceSmiTH2003@outlook.com", "Fiction");
// Присвоєння значення властивості name та виклик методу assistCustomer()
favoriteLibrarian.assistCustomer("John"); // Викликаємо метод assistCustomer()
//2.5
// const book = new ReferenceItem("Harry Potter", 2003);
// book.printItem();
// book.publisher = 'Rowling';
// console.log(book.publisher);
console.log("\n2.6\nNew Encyclopedia:");
var refBook = new Encyclopedia('My Encyclopedia', 2023, 3);
refBook.printItem();
console.log("\n2.7\nAbstract class:");
refBook.printCitation();
console.log("\nEnd of program...\n");
