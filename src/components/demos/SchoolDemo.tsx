
import { useState } from "react";
import { Users, BookOpen, GraduationCap, Calendar, Plus, Edit, Trash2 } from "lucide-react";

interface Student {
  id: number;
  name: string;
  grade: string;
  subject: string;
  attendance: number;
}

interface Course {
  id: number;
  title: string;
  instructor: string;
  students: number;
}

export const SchoolDemo = () => {
  const [activeTab, setActiveTab] = useState<"students" | "courses">("students");
  const [students, setStudents] = useState<Student[]>([
    { id: 1, name: "John Smith", grade: "A", subject: "Mathematics", attendance: 95 },
    { id: 2, name: "Sarah Johnson", grade: "B+", subject: "Physics", attendance: 88 },
    { id: 3, name: "Mike Davis", grade: "A-", subject: "Chemistry", attendance: 92 }
  ]);
  
  const [courses, setCourses] = useState<Course[]>([
    { id: 1, title: "Advanced Mathematics", instructor: "Dr. Brown", students: 25 },
    { id: 2, title: "Physics Fundamentals", instructor: "Prof. Wilson", students: 30 },
    { id: 3, title: "Chemistry Lab", instructor: "Dr. Garcia", students: 20 }
  ]);

  const [newStudent, setNewStudent] = useState({ name: "", subject: "" });
  const [newCourse, setNewCourse] = useState({ title: "", instructor: "" });

  const addStudent = () => {
    if (newStudent.name.trim() && newStudent.subject.trim()) {
      setStudents([...students, {
        id: Date.now(),
        name: newStudent.name,
        grade: "N/A",
        subject: newStudent.subject,
        attendance: 0
      }]);
      setNewStudent({ name: "", subject: "" });
    }
  };

  const addCourse = () => {
    if (newCourse.title.trim() && newCourse.instructor.trim()) {
      setCourses([...courses, {
        id: Date.now(),
        title: newCourse.title,
        instructor: newCourse.instructor,
        students: 0
      }]);
      setNewCourse({ title: "", instructor: "" });
    }
  };

  const deleteStudent = (id: number) => {
    setStudents(students.filter(student => student.id !== id));
  };

  const deleteCourse = (id: number) => {
    setCourses(courses.filter(course => course.id !== id));
  };

  return (
    <div className="max-w-4xl mx-auto bg-gradient-to-br from-blue-50 to-indigo-100 p-6 rounded-xl">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-slate-800 mb-2">
          School Management System
        </h3>
        <p className="text-slate-600">Manage students, courses, and academic records</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-200">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Users className="text-blue-600" size={20} />
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-800">{students.length}</p>
              <p className="text-sm text-slate-600">Total Students</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-200">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-green-100 rounded-lg">
              <BookOpen className="text-green-600" size={20} />
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-800">{courses.length}</p>
              <p className="text-sm text-slate-600">Active Courses</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-200">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-purple-100 rounded-lg">
              <GraduationCap className="text-purple-600" size={20} />
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-800">
                {Math.round(students.reduce((acc, student) => acc + student.attendance, 0) / students.length)}%
              </p>
              <p className="text-sm text-slate-600">Avg Attendance</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="flex bg-white rounded-lg p-1 mb-6 shadow-sm border border-slate-200">
        <button
          onClick={() => setActiveTab("students")}
          className={`flex-1 py-2 px-4 rounded-md font-medium transition-colors ${
            activeTab === "students"
              ? "bg-blue-600 text-white"
              : "text-slate-600 hover:text-slate-800"
          }`}
        >
          <Users size={16} className="inline mr-2" />
          Students
        </button>
        <button
          onClick={() => setActiveTab("courses")}
          className={`flex-1 py-2 px-4 rounded-md font-medium transition-colors ${
            activeTab === "courses"
              ? "bg-blue-600 text-white"
              : "text-slate-600 hover:text-slate-800"
          }`}
        >
          <BookOpen size={16} className="inline mr-2" />
          Courses
        </button>
      </div>

      {/* Students Tab */}
      {activeTab === "students" && (
        <div>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-200 mb-4">
            <h4 className="font-bold text-slate-800 mb-3">Add New Student</h4>
            <div className="flex gap-2">
              <input
                type="text"
                value={newStudent.name}
                onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
                placeholder="Student name"
                className="flex-1 px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                value={newStudent.subject}
                onChange={(e) => setNewStudent({ ...newStudent, subject: e.target.value })}
                placeholder="Subject"
                className="flex-1 px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={addStudent}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
              >
                <Plus size={16} />
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-medium text-slate-700">Name</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-slate-700">Subject</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-slate-700">Grade</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-slate-700">Attendance</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-slate-700">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {students.map((student) => (
                    <tr key={student.id} className="hover:bg-slate-50">
                      <td className="px-4 py-3 text-sm font-medium text-slate-800">{student.name}</td>
                      <td className="px-4 py-3 text-sm text-slate-600">{student.subject}</td>
                      <td className="px-4 py-3 text-sm">
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          student.grade === 'A' ? 'bg-green-100 text-green-800' :
                          student.grade === 'B+' ? 'bg-blue-100 text-blue-800' :
                          student.grade === 'A-' ? 'bg-green-100 text-green-700' :
                          'bg-slate-100 text-slate-800'
                        }`}>
                          {student.grade}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-sm text-slate-600">{student.attendance}%</td>
                      <td className="px-4 py-3 text-sm">
                        <button
                          onClick={() => deleteStudent(student.id)}
                          className="text-red-500 hover:text-red-700 transition-colors"
                        >
                          <Trash2 size={14} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* Courses Tab */}
      {activeTab === "courses" && (
        <div>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-200 mb-4">
            <h4 className="font-bold text-slate-800 mb-3">Add New Course</h4>
            <div className="flex gap-2">
              <input
                type="text"
                value={newCourse.title}
                onChange={(e) => setNewCourse({ ...newCourse, title: e.target.value })}
                placeholder="Course title"
                className="flex-1 px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                value={newCourse.instructor}
                onChange={(e) => setNewCourse({ ...newCourse, instructor: e.target.value })}
                placeholder="Instructor name"
                className="flex-1 px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={addCourse}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
              >
                <Plus size={16} />
              </button>
            </div>
          </div>

          <div className="grid gap-4">
            {courses.map((course) => (
              <div key={course.id} className="bg-white p-4 rounded-lg shadow-sm border border-slate-200">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h5 className="font-bold text-slate-800 mb-1">{course.title}</h5>
                    <p className="text-sm text-slate-600 mb-2">Instructor: {course.instructor}</p>
                    <div className="flex items-center gap-4 text-sm text-slate-500">
                      <span className="flex items-center gap-1">
                        <Users size={14} />
                        {course.students} students
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar size={14} />
                        Active
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => deleteCourse(course.id)}
                    className="text-red-500 hover:text-red-700 transition-colors"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
