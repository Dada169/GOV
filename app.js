// Configuration Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAWzsDt4nK5Tnqa3TD6CwqUgNeKx7o97XM",
    authDomain: "govathon-cde9a.firebaseapp.com",
    databaseURL: "https://govathon-cde9a-default-rtdb.firebaseio.com",
    projectId: "govathon-cde9a",
    storageBucket: "govathon-cde9a.appspot.com",
    messagingSenderId: "53116071757",
    appId: "1:53116071757:web:b6db703a62bb2541f5d104",
    measurementId: "G-C7327K7HVM"
};

// Initialiser Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const storage = firebase.storage().ref();
document.addEventListener('DOMContentLoaded', () => {
    const driversList = document.getElementById('drivers-list');

    // Récupérer les données des chauffeurs depuis Firebase Realtime Database
    database.ref('/drowsiness_detection').on('child_added', (snapshot) => {
        const data = snapshot.val();
        const driverDiv = document.createElement('div');
        driverDiv.classList.add('driver');

        // Ajouter les données à la page
        driverDiv.innerHTML = `
            <p><strong>Timestamp:</strong> ${new Date(data.timestamp * 1000).toLocaleString()}</p>
            <p><strong>EAR:</strong> ${data.ear}</p>
            <p><strong>Alarm Triggered:</strong> ${data.alarm_triggered ? 'Yes' : 'No'}</p>
            <img src="${data.image_url}" alt="Image">
        `;

        driversList.appendChild(driverDiv);
    });
});
