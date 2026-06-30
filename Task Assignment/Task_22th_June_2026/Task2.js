class Student {

    static batchName = "Playwright 2x Batch";

    constructor(id, name) {
        this.id = id;
        this.name = name;
    }

    print() {
        console.log(`ID: ${this.id}, Name: ${this.name}`);
    }

    static printBatch() {
        console.log("Batch Name:", Student.batchName);
    }
}

Student.printBatch();

const students = [
    new Student(1, "Abhishek"),
    new Student(2, "Rahul"),
    new Student(3, "Aman"),
    new Student(4, "Rohit"),
    new Student(5, "Neha"),
    new Student(6, "Priya"),
    new Student(7, "Karan"),
    new Student(8, "Ankit"),
    new Student(9, "Simran"),
    new Student(10, "Pooja")
];

for (const student of students) {
    student.print();
}