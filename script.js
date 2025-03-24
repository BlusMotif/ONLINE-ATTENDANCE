// Student data mapping
const studentData = {
    "B202220002": "SYLVANUS AKYEM MAWUKO",
    "B202220003": "EMMANUEL BENTIL",
    "B202220004": "LAWRENCE DOTSE",
    "B202220005": "ADU SAMUEL SEFAH",
    "B202220006": "YEBOAH KELVIN",
    "B202220007": "COURAGE VIKU JOHN",
    "B202220008": "BOTCHWAY JOSEPH DANQUAH",
    "B202220009": "TOPHA FIDELIX",
    "B202220010": "AIDOO ISAAC TWENEBOAH",
    "B202220011": "SEDJARA JEFFSON BROWN",
    "B202220012": "QUAYE CHARLOTTE TETEKOR",
    "B202220013": "ANI ADJEI THEOPHILUS KWAKU NYARKO",
    "B202220014": "NUGBLE FRANCIS ETORNAM",
    "B202220015": "ANDERSON IVAN KWEKU",
    "B202220016": "OFORI-ATTAH CLIFFORD",
    "B202220017": "PENEKU RICHMOND",
    "B202220018": "ARNOLD HADZIDE",
    "B202220019": "AMOAH CALEB JANOVE",
    "B202220020": "ELEBLU NUNANA",
    "B202220021": "TETTEH FRANK NITTI",
    "B202220022": "YEBOAH GIDEON KWANING",
    "B202220023": "JOHN LIYAB TACHIN",
    "B202220024": "MENSAH JEREMIAH AFOTEY",
    "B202220025": "JANSBAK SUNTIAH ISSAHAKU",
    "B202220026": "DANQUAH KOFI ODURO",
    "B202220027": "ASARE KELVIN OFORI",
    "B202220028": "AWEN-NAAM AWENATE BONAVENTURE",
    "B202220029": "APPIAH CLETUS NARTEY",
    "B202220030": "AMPAH DAVID ANNIE",
    "B202220031": "DARKO KENNEDY OFFEI",
    "B202220032": "NYEDZI JOSHUA TAWIAH",
    "B202220033": "SELWYN KLENAM SELASE",
    "B202220034": "NTSIFUL ISHMAEL KWESI",
    "B202220036": "BOABENG MAXWELL",
    "B202220037": "ADUBOFUOR CHRIS KWAME NTORI",
    "B202220038": "DARKWAH MICHAEL",
    "B202220039": "ANAOF VICTOR APUSIYINE",
    "B202220041": "ELIJAH OFORI",
    "B202220042": "YEBOAH DENNIS",
    "B202220043": "BOADI CONFIDENCE",
    "B202220044": "DONKOR RICHMOND",
    "B202220045": "TIENBEH JADAM-BASUMA",
    "B202220046": "AGBAVITOR ABRAHAM",
    "B202220047": "DODZI ELIAH AGBENYEGAN NUMORVI",
    "B202220049": "FREEMAN DZAMESI TOME",
    "B202220051": "FRIMPONG GILBERT OFORI",
    "B202220052": "QUAICOE HENRY",
    "B202220053": "ASIMANI SAMUEL OFORI",
    "B202220054": "QUANSAH JOSEPH",
    "B202220057": "DANSO ANDREWS",
    "B202220058": "ARHIN KELVIN",
    "B202220059": "AMO RICHARD MANTE",
    "B202220060": "ANNAN FREDRICK",
    "B202220062": "TENGE BRIAN",
    "B202220063": "OTOO OBED",
    "B202220064": "NKANSAH PERTIRA APPAU",
    "B202220065": "KOTON NATHANIEL",
    "B202220066": "FAWUZAN MASAHUDU",
    "B202220067": "NYAMEKEYE SERGIO KWESI",
    "B202220068": "KELVIN AKWETEY",
    "B202220069": "AFFOH DERRICK ASIEDU",
    "B202220071": "TAY BENJAMIN CARLOS",
    "B202220072": "FOSU HENRY EMMANUEL",
    "B202220073": "YAKUBU ZURKANAANI MUSAH",
    "B202220074": "LOWORTEY WISDOM",
    "B202220075": "OKYERE ROCKSON",
    "B202220077": "DOROTHY ADOMA YEBOAH",
    "B202220078": "ESSUMENG NATHANIEL MARTEY",
    "B202220079": "LAWER PATRICK LOWORTEY",
    "B202220080": "MINTAH WILSON KWEKU",
    "B202220081": "FOLI-MENSAH YARVOH",
    "B202220083": "NYARKO ADOM MICHAEL",
    "B202220084": "KENU BISMARK",
    "B202220085": "BOATENG RICHARD",
    "B202220086": "ASAMOAH ISAAC",
    "B202220088": "AGYEI DESMOND",
    "B202220089": "AYIM GODFRED ASAMOAH",
    "B202220090": "AMEYAW EMMANUEL ASHATEY",
    "B202220091": "MIAH JOSEPH KOFI KUM DE-GRAFT",
    "B202220092": "OPARE KATE AYEBA",
    "B202220093": "TWUMASI FRANCIS",
    "B202220094": "KUYOLE NAMBU MOSES",
    "B202220095": "ISAAC KISSIEDU",
    "B202220096": "SAMUEL OWUSU BOATENG",
    "B202220097": "EKUMAH ELVIS KWEKU-ACKON",
    "B202220098": "DEBRAH SAMUEL",
    "B202220100": "PAUL OWUSU",
    "B202220102": "AGYEMANG NANA KONADU",
    "B202220104": "LEONARD LARNOR SACKITEY",
    "B202220105": "OKPOTI EMMANUEL KWAME",
    "B202220106": "AZAMETI KWABLA",
    "B202220107": "DAKU JETHFER NENSAH",
    "B202220108": "APPIAH EMMANUEL GYIMAH"
  };

// Initialize attendance records and course title from localStorage
let attendanceRecords = JSON.parse(localStorage.getItem('attendanceRecords')) || [];
let currentCourseTitle = localStorage.getItem('currentCourseTitle') || '';
let currentWeek = localStorage.getItem('currentWeek') || '';
const attendanceForm = document.getElementById('attendance-form');

// Add event listener for index number input
document.getElementById('index-number').addEventListener('input', function(e) {
    const indexNumber = e.target.value.trim().toUpperCase();
    const studentNameInput = document.getElementById('student-name');

    if (studentData[indexNumber]) {
        studentNameInput.value = studentData[indexNumber];
    } else {
        studentNameInput.value = '';
    }
});

// Set course title and week if they exist and lock them
if (currentCourseTitle) {
    document.getElementById('course-title').value = currentCourseTitle;
    document.getElementById('course-title').disabled = true;
    document.getElementById('week-number').value = currentWeek;
    document.getElementById('week-number').disabled = true;
} else {
    document.getElementById('course-title').disabled = false;
    document.getElementById('week-number').disabled = false;
}
const recordsList = document.getElementById('records');
const exportBtn = document.getElementById('export-btn');
const clearBtn = document.getElementById('clear-btn');
const saveBtn = document.getElementById('save-btn');
const searchInput = document.getElementById('search-input');

// Set default date to today
document.getElementById('attendance-date').valueAsDate = new Date();

// Show notification
function showToast(message, type = 'success') {
    swal({
        title: type === 'success' ? "Success!" : "Error!",
        text: message,
        icon: type,
        buttons: false,
        timer: 2500,
        className: "sweet-alert-custom",
        closeOnClickOutside: true
    });
}

// Update table with records
function updateTable(records = attendanceRecords) {
    recordsList.innerHTML = '';
    records.forEach((record, index) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${index + 1}</td>
            <td>
                <div style="font-weight: bold">${record.indexNumber}</div>
                <div style="color: #666; font-size: 0.9em">${record.studentName}</div>
            </td>
            <td>${new Date(record.attendanceDate).toLocaleDateString('en-GB', {day: '2-digit', month: '2-digit', year: 'numeric'})}</td>
            <td><span class="status-badge present">Present</span></td>
            <td>
                <button class="edit-btn" onclick="editRecord(${index})">✎</button>
                <button class="delete-btn" onclick="deleteRecord(${index})">×</button>
            </td>
        `;
        recordsList.appendChild(tr);
    });
}

// Handle form submission
attendanceForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const studentName = document.getElementById('student-name').value.trim();
    const indexNumber = document.getElementById('index-number').value.trim();
    const attendanceDate = document.getElementById('attendance-date').value;
    const originalName = studentData[indexNumber];
    const isEdited = originalName && originalName !== studentName;

    // Check for duplicates
    const isDuplicate = attendanceRecords.some(record => 
        record.indexNumber === indexNumber && 
        record.attendanceDate === attendanceDate
    );

    if (isDuplicate) {
        showToast("This student has already marked attendance for this date.", "error");
        return;
    }

    // Add new record
    const courseTitle = document.getElementById('course-title').value.trim();
    const weekNumber = document.getElementById('week-number').value.trim();
    currentCourseTitle = courseTitle;
    currentWeek = weekNumber;
    localStorage.setItem('currentCourseTitle', courseTitle);
    localStorage.setItem('currentWeek', weekNumber);
    attendanceRecords.push({ 
        studentName, 
        indexNumber, 
        attendanceDate, 
        courseTitle, 
        weekNumber,
        isEdited,
        originalName: isEdited ? originalName : undefined
    });

    // Hide course title and week fields after first entry
    document.getElementById('course-title').parentElement.parentElement.style.display = 'none';

    updateTable();
    swal("Congrats!", "Attendance marked successfully!", "success");
    // Reset form but keep course title
    document.getElementById('student-name').value = '';
    document.getElementById('index-number').value = '';
    document.getElementById('attendance-date').valueAsDate = new Date();
    saveToLocalStorage();
});

// Search functionality
searchInput.addEventListener('input', function(e) {
    const searchTerm = e.target.value.toLowerCase();
    const filteredRecords = attendanceRecords.filter(record => 
        record.studentName.toLowerCase().includes(searchTerm) ||
        record.indexNumber.includes(searchTerm)
    );
    updateTable(filteredRecords);
});

// Delete record
function deleteRecord(index) {
    if (confirm('Are you sure you want to delete this record?')) {
        attendanceRecords.splice(index, 1);
        updateTable();
        saveToLocalStorage();
        showToast("Record deleted successfully!");
    }
}

// Edit record
function editRecord(index) {
    const record = attendanceRecords[index];
    document.getElementById('student-name').value = record.studentName;
    document.getElementById('index-number').value = record.indexNumber;
    document.getElementById('attendance-date').value = record.attendanceDate;
    document.getElementById('course-title').value = record.courseTitle;

    attendanceRecords.splice(index, 1);
    updateTable();
    saveToLocalStorage();
    showToast("Edit the record and submit to update");
}

// Clear all records
clearBtn.addEventListener('click', function() {
    if (confirm('Are you sure you want to clear all records?')) {
        attendanceRecords = [];
        currentCourseTitle = '';
        currentWeek = '';
        localStorage.removeItem('currentCourseTitle');
        localStorage.removeItem('currentWeek');
        document.getElementById('course-title').value = '';
        document.getElementById('week-number').value = '';
        document.getElementById('course-title').disabled = false;
        document.getElementById('week-number').disabled = false;
        document.getElementById('course-title').parentElement.parentElement.style.display = 'block';
        updateTable();
        saveToLocalStorage();
        showToast("All records cleared!");
    }
});

// Save to localStorage
function saveToLocalStorage() {
    localStorage.setItem('attendanceRecords', JSON.stringify(attendanceRecords));
}

saveBtn.addEventListener('click', function() {
    saveToLocalStorage();
    showToast("Data saved successfully!");
});

// Export functionality
exportBtn.addEventListener('click', function() {
    // Get all students from studentData
    const today = new Date().toISOString().split('T')[0];
    const allStudents = Object.entries(studentData).map(([indexNumber, name]) => ({
        indexNumber,
        studentName: name,
        status: 'Absent',
        attendanceDate: today
    }));

    // Mark present students and update their dates
    const presentStudents = new Set();
    attendanceRecords.forEach(record => {
        presentStudents.add(record.indexNumber);
        const student = allStudents.find(s => s.indexNumber === record.indexNumber);
        if (student) {
            student.status = 'Present';
            student.attendanceDate = record.attendanceDate;
        }
    });

    // Sort students (Present first, then Absent)
    allStudents.sort((a, b) => {
        if (a.status === b.status) return 0;
        return a.status === 'Present' ? -1 : 1;
    });

    // Calculate totals
    const totalPresent = allStudents.filter(s => s.status === 'Present').length;
    const totalAbsent = allStudents.filter(s => s.status === 'Absent').length;

    const printWindow = window.open('', '', 'width=800,height=600');
    printWindow.document.write(`
        <html>
            <head>
                <title>Attendance Records</title>
                <style>
                    body { font-family: Arial, sans-serif; padding: 20px; }
                    table { width: 100%; border-collapse: collapse; margin-top: 20px; }
                    th, td { 
                        border: 1px solid #ddd; 
                        padding: 8px; 
                        text-align: left;
                        font-size: 14px;
                        line-height: 1.4;
                    }
                    th { 
                        background-color: #f2f2f2;
                        font-weight: bold;
                    }
                    td { white-space: nowrap; }
                    .date-column { width: 120px; }
                    h1 { text-align: center; color: #007bff; }
                    .present, .absent { 
                        padding: 5px 10px;
                        border-radius: 15px;
                        color: white;
                        font-weight: 700;
                        display: inline-block;
                        text-transform: uppercase;
                        letter-spacing: 0.5px;
                    }
                    .present { background-color: #28a745; }
                    .absent { background-color: #dc3545; }
                </style>
            </head>
            <body>
                <div style="text-align: center; margin-bottom: 20px;">
                    <img src="KTU LOGO.PNG" alt="School Logo" style="max-width: 150px;">
                    <h1 style="margin: 15px 0; font-size: 24px;">KOFORIDUA TECHNICAL UNIVERSITY</h1>
                    <h2 style="margin: 10px 0; font-size: 20px;">Faculty of Applied Science and Technology</h2>
                    <h3 style="margin: 10px 0; font-size: 18px;">Department of Computer Science</h3>
                    <h4 style="margin: 10px 0; font-size: 16px;">COMPUTER SCIENCE BTECH (300)</h4>
                    <div style="margin: 20px 0; padding: 10px; border: 2px solid #333; display: inline-block;">
                        <h2 style="margin: 0;">ATTENDANCE SHEET</h2>
                    </div>
                </div>
                <div style="margin: 20px 0; font-size: 16px;">
                    <div style="display: grid; grid-template-columns: auto 1fr; gap: 10px; margin-bottom: 10px;">
                        <strong>Course Title:</strong>
                        <span>${attendanceRecords[0]?.courseTitle || 'N/A'}</span>
                        <strong>Week:</strong>
                        <span>${attendanceRecords[0]?.weekNumber || 'N/A'}</span>
                        <strong>Date:</strong>
                        <span>${new Date().toLocaleDateString('en-GB')}</span>
                    </div>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th style="font-size: 14px; font-weight: bold;">#</th>
                            <th style="font-size: 14px; font-weight: bold;">Full Name</th>
                            <th style="font-size: 14px; font-weight: bold;">Index Num</th>
                            <th style="font-size: 14px; font-weight: bold;">Date</th>
                            <th style="font-size: 14px; font-weight: bold;">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${allStudents.map((student, index) => `
                            <tr>
                                <td style="font-size: 14px;">${index + 1}</td>
                                <td style="font-size: 14px;">${student.studentName}${student.isEdited ? 
                                    ` <span style="color: #dc3545;">(Edited from: ${student.originalName})</span>` 
                                    : ''}</td>
                                <td style="font-size: 14px;">${student.indexNumber}</td>
                                <td style="font-size: 14px;">${student.status === 'Present' ? 
                                    new Date(attendanceRecords.find(r => r.indexNumber === student.indexNumber)?.attendanceDate).toLocaleDateString('en-GB')
                                    : new Date().toLocaleDateString('en-GB')}</td>
                                <td><span class="${student.status.toLowerCase()}">${student.status}</span></td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
                <div style="margin-top: 30px; border-top: 1px solid #333; padding-top: 20px;">
                    <div style="display: flex; justify-content: space-between; font-size: 16px; font-weight: bold;">
                        <div>
                            <p>Total Students Present: ${totalPresent}</p>
                            <p>Total Students Absent: ${totalAbsent}</p>
                            <p>Total Class Size: ${totalPresent + totalAbsent}</p>
                        </div>
                        <div style="text-align: right;">
                            <p style="margin-bottom: 50px;">___________________</p>
                            <p>Course Lecturer's Signature</p>
                        </div>
                    </div>
                </div>
            </body>
        </html>
    `);
    printWindow.document.close();
    printWindow.print();
});

// Initial table update
updateTable();

// Prevent right-click
document.addEventListener('contextmenu', (e) => e.preventDefault());

// Prevent keyboard shortcuts and dev tools
document.addEventListener('keydown', function(e) {
    if (e.ctrlKey && (

        e.keyCode === 73 || // I key
        e.keyCode === 74 || // J key
        e.keyCode === 75 || // K key
        e.keyCode === 83 || // S key
        e.keyCode === 85 || // U key
        e.keyCode === 86    // V key
    )) {
        e.preventDefault();
    }
    // Prevent F12
    if(e.keyCode === 123) {
        e.preventDefault();
    }
});

// Disable source viewing
document.addEventListener('keypress', function(e) {
    if (e.ctrlKey && e.shiftKey && e.keyCode === 73) {
        e.preventDefault();
    }
});
