// Define the Teacher interface
interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any; // Allow additional dynamic attributes
}

// Create a function to create a Teacher object with specified attributes
function createTeacher({
    firstName,
    lastName,
    fullTimeEmployee,
    yearsOfExperience,
    location,
    ...rest
}: Partial<Teacher>): Teacher {
    return {
        firstName,
        lastName,
        fullTimeEmployee,
        yearsOfExperience,
        location,
        ...rest,
    };
}

// Create a Teacher object
const teacher3: Teacher = createTeacher({
    firstName: 'John',
    lastName: 'Doe',
    fullTimeEmployee: false,
    location: 'London',
    contract: false, // Adding a dynamic attribute
});

// Log the Teacher object
console.log(teacher3);
