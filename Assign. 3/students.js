// You are not permitted to change this in any way

function Student(name, major, yearInSchool, club) {
  this.name = name; // string, (e.g. "Jim", "Pam", "Michael")
  this.major = major; // string, (e.g. "Computer Science", "Art", "Business")
  this.yearInSchool = yearInSchool; // int, (e.g. 1, 2, 3, 4)
  this.club = club; // string, (e.g. "Improv", "Art")
}

var students = [
  new Student("Pam", "Art", 2, "Art"),
  new Student("Michael", "Business", 4, "Improv"),
  new Student("Dwight", "Horticulture", 1, "Karate"),
  new Student("Jim", "Sports Science", 2, "Guitar"),
  new Student("Angela", "Accounting", 4, "Cat"),
  new Student("Toby", "Human Resources", 3, "Photography")
];

/* This function is called logMe that will log each student and determine whether or
not to print the club in the array*/

Student.prototype.logMe = function(bool) {
  if (bool == true) {
    console.log(this.name + " - " + this.major + " - " + this.yearInSchool + " - " + this.club);
  } else {
    console.log(this.name + " - " + this.major + " - " + this.yearInSchool);
  }
}

/* This function sorts arrays using an arbitrary comparator. You pass it a comparator 
and an array of objects appropriate for that comparator and it will return a new array 
which is sorted with the largest object in index 0 and the smallest in the last index*/

function sortArr(comparator, array) {
  var copyArray = array.slice(0);
  for (var i = 0; i < copyArray.length-1; i++) {
    for (var j = i+1; j < copyArray.length; j++) {
      if (comparator(copyArray[j], copyArray[i])) {
        var tempHolder = copyArray[i];
        copyArray[i] = copyArray[j];
        copyArray[j] = tempHolder;
      }
    }
  }
  return copyArray;
}

/* This compares two students based on their year in school. Sort in descending order.*/

function yearComparator(student1, student2) {
  if (student1.yearInSchool > student2.yearInSchool) {
    return true;
  } else {
    return false;
  }
}

/* This compares two students based on their major. It should be case insensitive and 
makes which are alphabetically earlier in the alphabet are "greater" than ones that 
come later (from A-Z).*/

function majorComparator(student1, student2) {
  if (student1.major.toLowerCase() < student2.major.toLowerCase()) {
    return true;
  } else {
    return false;
  }
}

/* This compares two students based on the club they're in. The ordering from "greatest" 
to "least" is as follows: improv, cat, art, guitar, (types not otherwise listed). 
It should be case insensitive. If two clubs are of equal type then the student who
has the higher year in school should be "greater."*/

function clubComparator(student1, student2) {
  var club1 = student1.club.toLowerCase();
  var club2 = student2.club.toLowerCase();
  if (club1 == club2) {
    if (student1.yearInSchool > student2.yearInSchool)
      return true;
    else
      return false;
  }
  else if (club1 == 'improv' && club2 != 'improv')
    return true;
  else if (club1 == 'cat' && club2 != 'improv')
    return true;
  else if (club1 == 'art' && club2 != 'improv' && club2 != 'cat')
    return true;
  else if (club1 == 'guitar' && club2 != 'improv' && club2 != 'cat' && club2 != 'art')
    return true;
  else
    return false;
}

/* This function will print the students through the now sorted arrays*/

function printStudents(array, bool) {
  for (i = 0; i < array.length; i++)
    array[i].logMe(bool);
}

console.log("*****\nThe students sorted by year in school are:");
var sortedYears = sortArr(yearComparator, students);
printStudents(sortedYears, false);

console.log("*****\nThe students sorted by major are:");
var sortedMajors = sortArr(majorComparator, students);
printStudents(sortedMajors, false);

console.log("*****\nThe students sorted by club affiliation are:");
var sortedClubs = sortArr(clubComparator, students);
printStudents(sortedClubs, true);
console.log("*****");
