// Firebaseの初期化
const firebaseConfig = {
    apiKey: "AIzaSyDkDYPvhxXMbWWt47Ec7_2-KzOcvM0AP9c",
    authDomain: "graduation-a857b.firebaseapp.com",
    databaseURL: "https://graduation-a857b-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "graduation-a857b",
    storageBucket: "graduation-a857b.appspot.com",
    messagingSenderId: "96504372176",
    appId: "1:96504372176:web:2f1b75466066155cb837d5",
    measurementId: "G-QB6S1TL34V"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// ページが読み込まれた時に実行
document.addEventListener('DOMContentLoaded', function () {
    // ログイン状態の確認
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            // ユーザーがログインしている場合の処理
            displayUserInfo(); // ユーザー情報を表示する関数の呼び出し
        } else {
            // ユーザーがログインしていない場合の処理
            // ログイン画面にリダイレクトするなどの処理を記述
            window.location.href = "login.html";
        }
    });

    // ログアウトボタンをクリックした時の処理
    document.getElementById('logout-button').addEventListener('click', function() {
        auth.signOut().then(() => {
            console.log('ログアウトしました');
            window.location.href = "login.html"; // ログイン画面にリダイレクト
        }).catch((error) => {
            console.error('ログアウトエラー:', error);
        });
    });
});

// ユーザー情報を表示する関数
function displayUserInfo() {
    const userInfoDiv = document.getElementById('user-info');

    firebase.firestore().collection("users").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            const data = doc.data();
            userInfoDiv.innerHTML += `
                <p><strong>氏名:</strong> ${data.name}</p>
                <p><strong>住所:</strong> ${data.address}</p>
                <p><strong>身分証:</strong> <img src="${data.profilePicture}" alt="身分証"></p>
                <hr>
            `;
        });
    }).catch((error) => {
        console.error("ドキュメントの取得エラー: ", error);
    });
}

// 修正ボタンをクリックした時の処理
function redirect() {
    window.location.href = "signup.html"; // 修正画面にリダイレクト
}
