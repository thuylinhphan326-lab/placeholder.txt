function generatePlan() {
    const budget = Number(document.getElementById("budget").value);

    if (!budget || budget <= 0) {
        alert("Vui lòng nhập số tiền hợp lệ!");
        return;
    }

    // Tỉ lệ chi Tết chuẩn
    const percent = {
        giaDinh: 0.25,
        quaBieu: 0.15,
        liXi: 0.20,
        trangPhuc: 0.15,
        anUong: 0.12,
        hocTap: 0.08,
        duPhong: 0.05
    };

    // Các nhóm chi giống y như bố cục hiện tại
    const planGroups = [
        {
            key: "giaDinh",
            title: "🏡 1. Chi tiêu gia đình & chuẩn bị Tết",
            items: [
                "Mua bánh kẹo Tết",
                "Mua hoa, cây cảnh",
                "Mua mâm ngũ quả",
                "Trang trí nhà – đèn, dây treo",
                "Dọn dẹp – bao rác, nước lau sàn",
                "Đồ dùng bếp mới"
            ]
        },
        {
            key: "quaBieu",
            title: "🎁 2. Quà biếu & thăm hỏi",
            items: [
                "Quà biếu ông bà",
                "Quà biếu họ hàng",
                "Quà biếu thầy cô",
                "Quà biếu hàng xóm",
                "Tiền thăm hỏi"
            ]
        },
        {
            key: "liXi",
            title: "🧧 3. Lì xì Tết",
            items: [
                "Lì xì cho trẻ em",
                "Lì xì cho anh chị em",
                "Lì xì cho bố mẹ",
                "Lì xì bạn bè",
                "Lì xì phát sinh"
            ]
        },
        {
            key: "trangPhuc",
            title: "👗 4. Trang phục & cá nhân",
            items: [
                "Mua quần áo mới",
                "Giày dép",
                "Cắt tóc – nhuộm",
                "Mỹ phẩm – skincare",
                "Phụ kiện (vòng, nón…)"
            ]
        },
        {
            key: "anUong",
            title: "🍜 5. Ăn uống – đi chơi",
            items: [
                "Đi cafe – trà sữa",
                "Đi ăn với bạn",
                "Đi xem phim",
                "Đi chơi hội hoa",
                "Tiền xăng / xe bus",
                "Lưu niệm",
                "Đi du lịch"
            ]
        },
        {
            key: "hocTap",
            title: "📚 6. Học tập đầu năm",
            items: [
                "Dụng cụ học tập",
                "Sách mới",
                "Dán màn hình – ốp điện thoại",
                "In ảnh – lưu niệm"
            ]
        },
        {
            key: "duPhong",
            title: "🛡️ 7. Quỹ dự phòng",
            items: [
                "Phát sinh bất ngờ",
                "Quỹ khẩn cấp"
            ]
        }
    ];

    // BẮT ĐẦU TẠO HTML (giữ nguyên layout website của bạn)
    let html = "";

    planGroups.forEach(group => {
        const groupBudget = Math.round(budget * percent[group.key]);       // Tổng tiền nhóm
        const itemBudget = Math.round(groupBudget / group.items.length);   // Tiền mỗi khoản

        html += `
        <div class="plan-card">
            <h2>${group.title}</h2>
            <ul>
        `;

        group.items.forEach(item => {
            html += `<li>${item} — <b>${itemBudget.toLocaleString()}đ</b></li>`;
        });

        html += `
            </ul>
        </div>
        `;
    });

    document.getElementById("planContainer").innerHTML = html;
}
