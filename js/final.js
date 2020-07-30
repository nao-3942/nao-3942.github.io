function songs() {
    rand = Math.floor(Math.random() * 5);
    if (rand == 0) {
        msg = "あなたには①がおすすめ！この曲をBGMに優雅な気持ちで作業を進めよう！";
    } else if (rand == 1) {
        msg = "今のあなたには②！リラックスしてひと休み。";
    } else if (rand == 2) {
        msg = "③をぜひ聞いてみて！気分もどんどん上がっちゃう！？";
    } else if (rand == 3) {
        msg = "④を聞いてみるのはどうですか？心地よい音楽でリフレッシュしましょう！";
    } else if (rand == 4) {
        msg = "あなたには⑤がおすすめかも！クラシックの名曲に挑戦してみては？";
    } else {
        msg = "エラーが発生しました。もう一度やり直してみてください。"
    }
    alert(msg);
}




