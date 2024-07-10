// Firebaseの初期化
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// ユーザー情報を表示する関数
function displayUserInfo() {
    const userInfoDiv = document.getElementById('user-info');

    // Firestoreからユーザーの情報を取得して表示する
    db.collection("users").get().then((querySnapshot) => {
        userInfoDiv.innerHTML = ''; // データを上書きするために初期化

        querySnapshot.forEach((doc) => {
            // ドキュメントデータを取得
            const data = doc.data();

            // 取得したデータをHTMLに追加
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

// ページが読み込まれた時に実行
document.addEventListener('DOMContentLoaded', function () {
    displayUserInfo();
});
