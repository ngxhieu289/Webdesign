// Hàm thay đổi màu sắc
function doiMau(mau) {
    document.getElementById("NoiDung").style.backgroundColor = mau;
}

// Hàm thay đổi cỡ chữ
function doiCoChu() {
    var size = document.getElementById("fontSize").value;
    document.getElementById("NoiDung").style.fontSize = size;
}

// Hàm thay đổi chiều cao
function doiChieuCao() {
    var height = document.getElementById("heightSize").value;
    document.getElementById("NoiDung").style.height = height;
}

// Hàm tăng chiều cao thêm 50px
function tangChieuCao() {
    var noiDung = document.getElementById("NoiDung");
    var chieuCaoHienTai = window.getComputedStyle(noiDung).height;
    noiDung.style.height = (parseInt(chieuCaoHienTai) + 50) + 'px';
}

// Hàm nạp CSS cho tiêu đề
function napCSSTieuDe() {
    var tieuDe = document.querySelector("h2");
    tieuDe.style.color = "blue";
    tieuDe.style.fontSize = "24px";
    tieuDe.style.fontStyle = "italic";
}

// Hàm nạp CSS cho nội dung
function napCSSNoiDung() {
    var noiDung = document.getElementById("NoiDung");
    noiDung.style.color = "purple";
    noiDung.style.fontFamily = "Times New Roman";
}
