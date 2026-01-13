const studentsData = {
    "2330104155": {
        name: "Nikhil Tukaram Pawar",
        branch: "CSE", 
        results: {
            1: { 
                subjects: [
                    { code: "HTM101", name: "Html", marks: 85 },
                    { code: "JS101", name: "Javascript", marks: 75 },
                    { code: "CSE101", name: "C Programming", marks: 88 },
                    { code: "CSE102", name: "Java Programming", marks: 80 }
                ], 
                sgp: 8.5, 
                cgp: 8.2 
            },
            2: { 
                subjects: [
                    { code: "JS101", name: "Javascript", marks: 90 },
                    { code: "HTM101", name: "HTML", marks: 82 },
                    { code: "CSE201", name: "Data Structures", marks: 85 },
                    { code: "CSE202", name: "Database Systems", marks: 88 }
                ], 
                sgp: 8.7, 
                cgp: 8.4 
            },
        }
    },
    "2310104035": {
        name: "Shreyash Dilip Gurav",
        branch: "MECH", 
        results: {
            1: { 
                subjects: [
                    { code: "HTM101", name: "Html", marks: 92 },
                    { code: "JS101", name: "Javascript", marks: 85 },
                    { code: "CSE101", name: "C Programming", marks: 78 },
                    { code: "CSE102", name: "Java Programming", marks: 90 }
                ], 
                sgp: 9.2, 
                cgp: 9.1 
            },
            2: { 
                subjects: [
                    { code: "HTM101", name: "Html", marks: 88 },
                    { code: "JS101", name: "Javascript", marks: 85 },
                    { code: "CSE201", name: "Data Structures", marks: 95 },
                    { code: "CSE202", name: "Database Systems", marks: 87 }
                ], 
                sgp: 9.3, 
                cgp: 9.2 
            },
        }
    },
    "2310104029": {
        name: "Pavan Sukhadev Gaikwad",
        branch: "AIDS", 
        results: {
            1: { 
                subjects: [
                    { code: "HTM101", name: "Html", marks: 75 },
                    { code: "JS101", name: "Javascript", marks: 68 },
                    { code: "CSE101", name: "C Programming", marks: 80 },
                    { code: "CSE102", name: "Java Programming", marks: 70 }
                ], 
                sgp: 7.0, 
                cgp: 7.5 
            },
            2: { 
                subjects: [
                    { code: "HTM101", name: "Html", marks: 85 },
                    { code: "JS101", name: "Javascript", marks: 89 },
                    { code: "CSE201", name: "Data Structures", marks: 77 },
                    { code: "CSE202", name: "Database Systems", marks: 80 }
                ], 
                sgp: 8.0, 
                cgp: 7.8 
            },
        }
    },
    "2310104030": {
        name: "Aditya Kishor Talekar",
        branch: "CSE", 
        results: {
            1: { 
                subjects: [
                    { code: "HTM101", name: "Html", marks: 88 },
                    { code: "JS101", name: "Javascript", marks: 90 },
                    { code: "CSE101", name: "C Programming", marks: 92 },
                    { code: "CSE102", name: "Java Programming", marks: 93 }
                ], 
                sgp: 9.0, 
                cgp: 8.9 
            },
            2: { 
                subjects: [
                    { code: "HTM101", name: "Html", marks: 92 },
                    { code: "JS101", name: "Javascript", marks: 88 },
                    { code: "CSE201", name: "Data Structures", marks: 95 },
                    { code: "CSE202", name: "Database Systems", marks: 85 }
                ], 
                sgp: 9.5, 
                cgp: 9.2 
            },
        }
    },
    "2310104031": {
        name: "Harish Kashinath Pawar",
        branch: "AIDS", 
        results: {
            1: { 
                subjects: [
                    { code: "HTM101", name: "Html", marks: 80 },
                    { code: "JS101", name: "Javascript", marks: 78 },
                    { code: "CSE101", name: "C Programming", marks: 85 },
                    { code: "CSE102", name: "Java Programming", marks: 82 }
                ], 
                sgp: 8.3, 
                cgp: 8.1 
            },
            2: { 
                subjects: [
                    { code: "JS101", name: "Javascript", marks: 85 },
                    { code: "HTM101", name: "Html", marks: 88 },
                    { code: "CSE201", name: "Data Structures", marks: 90 },
                    { code: "CSE202", name: "Database Systems", marks: 87 }
                ], 
                sgp: 8.6, 
                cgp: 8.4 
            },
        }
    },
    "2310104065": {
        name: "Yash Arun Waychal",
        branch: "MECH", 
        results: {
            1: { 
                subjects: [
                    { code: "HTM101", name: "Html", marks: 88 },
                    { code: "JS101", name: "Javascript", marks: 85 },
                    { code: "CSE101", name: "C Programming", marks: 90 },
                    { code: "CSE102", name: "Java Programming", marks: 86 }
                ], 
                sgp: 8.8, 
                cgp: 8.5 
            },
            2: { 
                subjects: [
                    { code: "HTM101", name: "Html", marks: 91 },
                    { code: "JS101", name: "Javascript", marks: 85 },
                    { code: "CSE201", name: "Data Structures", marks: 94 },
                    { code: "CSE202", name: "Database Systems", marks: 82 }
                ], 
                sgp: 8.9, 
                cgp: 8.7 
            },
        }
    }
};


function fetchResult() {
    const prn = document.getElementById('prn').value;
    const branch = document.getElementById('branch').value.toUpperCase();
    const semester = document.getElementById('sem').value;

    if (!studentsData[prn] || studentsData[prn].branch !== branch || !studentsData[prn].results[semester]) {
        alert("No data found for the given PRN, branch, and semester.");
        return;
    }

    const student = studentsData[prn];
    const result = student.results[semester];

    document.getElementById('studentName').textContent = student.name;
    document.getElementById('studentPRN').textContent = prn;
    document.getElementById('studentBranch').textContent = branch;
    document.getElementById('studentSemester').textContent = `Semester ${semester}`;

    const subjectTable = document.getElementById('subjectTable');
    subjectTable.innerHTML = '';
    result.subjects.forEach(subject => {
        const row = `<tr>
            <td>${subject.code}</td>
            <td>${subject.name}</td>
            <td>${subject.marks}</td>
        </tr>`;
        subjectTable.innerHTML += row;
    });

    document.getElementById('studentSGP').textContent = result.sgp;
    document.getElementById('studentCGP').textContent = result.cgp;
    document.getElementById('resultContainer').style.display = 'block';
}
