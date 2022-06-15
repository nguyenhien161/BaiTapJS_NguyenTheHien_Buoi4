//Bài 1: Xuất 3 số thứ tự tăng dần
document.getElementById('btnSapXep').onclick = function () {
    var a = document.getElementById('NhapSo_1').value;
    var b = document.getElementById('NhapSo_2').value;
    var c = document.getElementById('NhapSo_3').value;

    var sapXep = '';
    if (a > b && b > c) {
        sapXep = a + '>' + b + '>' + c;
    } else if (a > b && c > b) {
        sapXep = a + '>' + c + '>' + b;
    } else if (a > b && c > a) {
        sapXep = c + '>' + a + '>' + b;
    } else if (b > a && b > c) {
        sapXep = b + '>' + a + '>' + c;
    } else if (b > c && c > a) {
        sapXep = b + '>' + c + '>' + a;
    } else {
        sapXep = a + '<' + b + '<' + c;
    }

    document.getElementById('ketQua').innerHTML = sapXep;
}

//Bài 2: Viết chương trình "chào hỏi" các thành viên trong gia đình
document.getElementById('btnGuiLoiChao').onclick = function () {
    var chaohoi = document.getElementById('chaoHoi').value;
    var inKetQua = '';

    if (chaohoi === '') {
        inKetQua = "Bạn chưa chọn thành viên"
    } else if (chaohoi === 'B') {
        inKetQua = 'Xin chào Bố'
    } else if (chaohoi === 'M') {
        inKetQua = 'Xin chào Mẹ'
    } else if (chaohoi === 'A') {
        inKetQua = 'Xin chào Anh Trai'
    } else if (chaohoi === 'E') {
        inKetQua = 'Xin chào Em Gái'
    } else {
        inKetQua = 'Không thể in !'
    }
    document.getElementById('guiLoiChao').innerHTML = inKetQua;
}

//bài 3: Viết chương trình đếm số chẵn và số lẻ
document.getElementById('btnDem').onclick = function () {
    var sothu1 = Number(document.getElementById('nhapSo1').value);
    var sothu2 = Number(document.getElementById('nhapSo2').value);
    var sothu3 = Number(document.getElementById('nhapSo3').value);

    var sochan = 0;
    var sole = 0;

    if (sothu1 % 2 === 0) {
        sochan++;
    }
    if (sothu2 % 2 === 0) {
        sochan++;
    }
    if (sothu3 % 2 === 0) {
        sochan++;
    }

    sole = 3 - sochan;
    document.getElementById('ketQua_2').innerHTML = 'Số chẵn có : ' + sochan + ' Số lẻ có : ' + sole;
}

//bài 4 : dự đoán tam giác 
document.getElementById('btnDuDoan').onclick = function () {
    var canhthu1 = Number(document.getElementById('canh1').value);
    var canhthu2 = Number(document.getElementById('canh2').value);
    var canhthu3 = Number(document.getElementById('canh3').value);

    var duDoan = '';

    if (canhthu1 === canhthu2 && canhthu2 === canhthu3) {
        duDoan = 'tam giác điều'
    } else if (canhthu1 === canhthu2 || canhthu2 === canhthu3 || canhthu3 === canhthu1) {
        duDoan = 'tam giác cân'
    } else if (canhthu1 * canhthu1 == canhthu2 * canhthu2 + canhthu3 * canhthu3 || canhthu2 * canhthu2 == canhthu1 * canhthu1 + canhthu3 * canhthu3
        || canhthu3 * canhthu3 == canhthu2 * canhthu2 + canhthu1 * canhthu1) {
        duDoan = 'tam giác vuông'
    } else {
        duDoan = 'tám giác nào đó !'
    }
    document.getElementById('ketQua_3').innerHTML = duDoan;

}

//bài 5: Tính ngày tháng năm
document.getElementById('btnNgayHomQua').onclick = function () {
    var ngay = Number(document.getElementById('ngay').value);
    var thang = Number(document.getElementById('thang').value);
    var nam = Number(document.getElementById('nam').value);

    var ngayHomQua = 0;
    ngayHomQua = ngay - 1;
    document.getElementById('ketQua_4').innerHTML = ngayHomQua + ' / ' + thang + ' / ' + nam;
}
document.getElementById('btnNgayMai').onclick = function () {
    var ngay = Number(document.getElementById('ngay').value);
    var thang = Number(document.getElementById('thang').value);
    var nam = Number(document.getElementById('nam').value);


    var ngayNgayMai = 0;
    ngayNgayMai = ngay + 1;
    document.getElementById('ketQua_4').innerHTML = ngayNgayMai + ' / ' + thang + ' / ' + nam;
}

//bài 6: Viết chương trình nhập vào tháng, năm. Cho biết tháng đó có bao nhiêu ngày. (bao gồm tháng
//của năm nhuận).

document.getElementById('btnTinhNgay').onclick = function () {
    var thang = Number(document.getElementById('nhapThang').value);
    var nam = Number(document.getElementById('nhapNam').value);

    var soNgay = 0;
    var soThang = '';
    switch (thang) {
        case 1: {
            soThang = "Tháng một !";
            soNgay = 31;
        }; break;
        case 2: {
            soThang = "Tháng hai !";
            soNgay = 28;
        }; break;
        case 3: {
            soThang = "Tháng ba !";
            soNgay = 31;
        }; break;
        case 4: {
            soThang = "Tháng tư !";
            soNgay = 30;
        }; break;
        case 5: {
            soThang = "Tháng năm !";
            soNgay = 31;
        }; break;
        case 6: {
            soThang = "Tháng sáu !";
            soNgay = 30;
        }; break;
        case 7: {
            soThang = "Tháng bảy !";
            soNgay = 31;
        }; break;
        case 8: {
            soThang = "Tháng tám !";
            soNgay = 30;
        }; break;
        case 9: {
            soThang = "Tháng chín !";
            soNgay = 31;
        }; break;
        case 10: {
            soThang = "Tháng mười !";
            soNgay = 30;
        }; break;
        case 11: {
            soThang = "Tháng mười một !";
            soNgay = 31;
        }; break;
        case 12: {
            soThang = "Tháng mười hai !";
            soNgay = 30;
        }; break;

        default: {
            soThang = 'Không xác định';
            soNgay = 0;
        }
    }
    document.getElementById('ketQua_5').innerHTML = soThang + ' Năm ' + nam + ' có ' + soNgay + ' Ngày ';
}
