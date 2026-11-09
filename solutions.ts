// Problem-01

function multiplyValue(value: number, multiplier?: number): number {
  return value * (multiplier ?? 2);
}
console.log(multiplyValue(10));


// Problem- 02
function processInput(value: string | number | boolean): string | number {
  if (typeof value === "string") {
    return value.trim().toLocaleLowerCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else {
    return value ? "Active" : "Inactive";
  }
}
console.log(processInput(" TypeScript "));
console.log(processInput(true));
console.log(processInput(50));



// Problem-03
function formatCoordinate(
  coordinate: readonly [number, number, string],
): string {
  const latitude = coordinate[0];
  const longitude = coordinate[1];
  const locationName = coordinate[2];

  return `Location: ${locationName} (${latitude}, ${longitude})`;
}
console.log(formatCoordinate([23.81, 90.41, "Dhaka"]));



// Problem - 04
function concatenateArrays<T>(...arrays: T[][]): T[] {
  const result: T[] = [];

  for (const arr of arrays) {
    for (const item of arr) {
      result.push(item);
    }
  }
  return result;
}
console.log(concatenateArrays(["a", "b"], ["c", "d"]));
console.log(concatenateArrays([1, 2], [3, 4], [5]));




//  Problem -05
interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}
function getPopularCourses(courses: Course[], minStudents: number): Course[] {
  const result: Course[] = [];

  for (let i = 0; i < courses.length; i++) {
    if (courses[i].isPublished && courses[i].students >= minStudents) {
      result.push(courses[i]);
    }
  }
  return result;
}
const courses: Course[] = [
  { title: "TypeScript Mastery", students: 120, isPublished: true },
  { title: "Draft Course", students: 200, isPublished: false },
  { title: "Basic HTML", students: 45, isPublished: true },
  { title: "Next.js Pro", students: 85, isPublished: true },
];
console.log(getPopularCourses(courses, 80));





// Problem - 06
function pluckValues <T, K extends keyof T> (
  items: T[],
  key: K 
): T[K][] {
  
    const result: T[K][] = [];
    for(let i = 0; i < items.length; i++) {
      result.push(items[i][key]);
    }
    return result;
}
const users = [
  { id: 1, name: "Rakib", role: "Admin" },
  { id: 2, name: "Sadia", role: "Editor" },
  { id: 3, name: "Tariq", role: "Subscriber" }
];
console.log(pluckValues(users, "name"));
console.log(pluckValues(users, "id"));



// Problem -07
class Employee {
  protected name: string;
  private baseSalary: number;

    constructor(name: string, baseSalary: number) {
      this.name = name;
      this.baseSalary = baseSalary;
    }

    getDetails(): string {
      return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`
    }
}

class Manager extends Employee {
   private department: string;
    
   constructor(name: string, baseSalary: number, department: string) {
     super(name, baseSalary)
     this.department = department;
   }

   getRoleInfo(): string {
     return  `Manager of ${this.department}: ${this.name}`;
   }
}
const manager = new Manager("Alice", 50000, "Engineering");
console.log(manager.getDetails());
console.log(manager.getRoleInfo());


// problem - 08

function validateAgeAsync (age: number): Promise<string> {
  return new Promise((resolve, reject) => {
    if(age >= 18) {
      setTimeout(() => {
        resolve("Access Granted");
      }, 1000)
    } else {
      reject(new Error("Access Denied: Must be 18 or older"));
    }
  })
}
validateAgeAsync(20)
    .then((message) => {
        console.log(message);
    })
    .catch((error: Error) => {
        console.log(error.message);
    });

validateAgeAsync(15)
    .then((message) => {
        console.log(message);
    })
    .catch((error: Error) => {
        console.log(error.message);
    });