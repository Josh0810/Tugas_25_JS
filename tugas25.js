function Tugas25() {
    var sebelum = [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16];
    console.log("Sebelumnya :", sebelum.join(","));
    var ascen = sebelum.sort();
    console.log("Ascending :", ascen.join(","));
    var descen = ascen.reverse();
    console.log("Descending :", descen.join(","));
    let filter = descen.filter(number => {
        return number > 10;
    });
    console.log("Filter > 10 :", filter.join(","));
}
Tugas25()