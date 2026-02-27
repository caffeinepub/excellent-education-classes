import Map "mo:core/Map";
import Nat "mo:core/Nat";
import Time "mo:core/Time";
import Runtime "mo:core/Runtime";
import List "mo:core/List";

actor {
  type Student = {
    name : Text;
    email : Text;
    mobile : Text;
    gender : Text;
    school : Text;
    classLevel : Text;
    timestamp : Time.Time;
    id : Nat;
  };

  let students = Map.empty<Nat, Student>();
  var nextId = 1;

  public shared ({ caller }) func registerStudent(name : Text, email : Text, mobile : Text, gender : Text, school : Text, classLevel : Text) : async Nat {
    if (email.isEmpty() or mobile.isEmpty()) {
      Runtime.trap("Email and mobile number cannot be empty");
    };

    let student : Student = {
      name;
      email;
      mobile;
      gender;
      school;
      classLevel;
      timestamp = Time.now();
      id = nextId;
    };

    students.add(nextId, student);
    nextId += 1;
    student.id;
  };

  public query ({ caller }) func getAllStudents() : async [Student] {
    let list = List.empty<Student>();
    for ((_, student) in students.entries()) {
      list.add(student);
    };
    list.toArray();
  };

  public query ({ caller }) func getStudentById(id : Nat) : async Student {
    switch (students.get(id)) {
      case (null) { Runtime.trap("Student not found") };
      case (?student) { student };
    };
  };
};
