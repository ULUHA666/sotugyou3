// login.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

// Firebase SDKの設定情報を貼り付ける
const firebaseConfig = {
  
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
