// login.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

// Firebase SDKの設定情報を貼り付ける
const firebaseConfig = {
    apiKey: "AIzaSyDkDYPvhxXMbWWt47Ec7_2-KzOcvM0AP9c",
    authDomain: "graduation-a857b.firebaseapp.com",
    databaseURL: "https://graduation-a857b-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "graduation-a857b",
    storageBucket: "graduation-a857b.appspot.com",
    messagingSenderId: "96504372176",
    appId: "1:96504372176:web:2f1b75466066155cb837d5",
    measurementId: "G-QB6S1TL34V"
}

// Firebaseの初期化
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// ログイン関数
function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            document.getElementById('message').innerText = 'ログインに成功しました！';
            // ログイン成功後にリダイレクトする
            window.location.href = "display.html";
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            document.getElementById('message').innerText = `エラー: ${errorMessage}`;
        });
}

// DOMが読み込まれた後にイベントリスナーを追加
document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('login-button').addEventListener('click', login);
});
