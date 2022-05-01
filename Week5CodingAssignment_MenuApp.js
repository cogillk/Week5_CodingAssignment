class Teacher {
    constructor(name, subject){
        this.name = name;
        this.subject = subject;
    }

    describe(){
        return `${this.name} teaches ${this.subject}.`
    }
}

class School {
    constructor(name) {
        this.name = name;
        this.teachers = []
    }

    addTeacher(teacher) {
        if (teacher instanceof Teacher) {
            teachers.push(teacher); //pushes new teacher to empty teacher array
        } else {
            throw new Error(`You can only add an instance of a Teacher. Argument is not a Teacher: ${player}`)
        }
    }

    describe() {
        return `${this.name} has ${this.teachers.length} teachers.`
    }
}

class Menu {
    constructor() {
        this.teachers = [];
        this.schools = [];
        this.selectedTeacher = null;
    }

    start() {
       let selection = this.showMainMenuOptions();
       while (selection != 0) {
           switch (selection){
               case '1':
                   this.createSchool();
                   break;
                case '2':
                    this.viewSchool();
                    break;
                case '3':
                    this.deleteSchool();
                    break;
                default:
                    selection = 0;
           }
           selection = this.showMainMenuOptions();
       }

       alert('Goodbye!');
    }

    showMainMenuOptions(){
       return prompt(`
        0) exit
        1) create new school
        2) view school
        3) delete school
       `);
    }

    showSchoolMenuOptions(teacherInfo) {
        return prompt(`
        0) back
        1) create teacher
        2) delete teacher
        -----------------------
        ${teacherInfo}
        `)
    }

    createSchool() {
        let name = prompt(`Enter new school name:`);
        this.schools.push(new School(name));  //pushes new school to empty school array
    }

    viewSchool() {
        let index = prompt(`Enter the index of the school that you wish to view:`);
        if (index > -1 && index < this.schools.length) {
            this.selectedSchool = this.schools[index];
            let description = 'School Name:; ' + this.selectedSchool.name + '\n';

            for(let i = 0; i < this.selectedSchool.teachers.length; i++){
                description += i + ') ' + this.selectedSchool.teachers[i].name + ' - ' + this.selectedSchool.teachers[i].subject + '\n';
            }

            let selection = this.showSchoolMenuOptions(description);
            switch (selection) {
                case '1':
                    this.createTeacher();
                    break;
                case '2':
                    this.deleteTeacher();
                    break;
            }
        }
    }

    // the viewSchool above loops through the index of the teachers in order to show all the teachers and the 
    // subjects that they teach
    deleteSchool() {
        let index = prompt('Enter the index of the school that you wish to delete:');
        if (index > -1 && index < this.schools.length) {
            this.schools.splice(index, 1);
        }
    }


    createTeacher() {
        let name = prompt('Enter name for the new teacher:');
        let subject = prompt('Enter the subject taught by the new teacher:');
        this.selectedSchool.teachers.push(new Teacher(name, subject));  //adds teacher to current selected school
    }


    deleteTeacher() {
        let index = prompt('Enter the index of the teacher that you wish to delete:');
        if (index > -1 && index < this.selectedSchool.teachers.length) {
            this.selectedSchool.teachers.splice(index, 1); //deletes current selected school based on index input by user
        }
    }
}

let menu = new Menu();
menu.start();


