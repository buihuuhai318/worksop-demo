# Quy chuẩn dự án chi-phi-doan

Dự án demo cho workshop. Mọi thay đổi, kể cả do AI viết, phải theo các quy tắc dưới đây.

## Cấu trúc
- `src/chi-phi.js`: toàn bộ logic tính tiền, là ES module thuần, không đụng tới DOM.
- `index.html`: giao diện cho hướng dẫn viên, chỉ gọi hàm trong `src/chi-phi.js`, không tự tính tiền.
- `test/`: test tự động chạy bằng `node --test` (không cài thêm thư viện).
- `docs/`: ticket, câu trả lời của khách, user story, tiêu chí nghiệm thu.

## Quy tắc chung
- Tiền là số nguyên đồng.
- Không viết cứng số khách, số khoản hay tên người: mọi giới hạn lấy từ tiêu chí nghiệm thu.
- Dữ liệu sai phải báo lỗi rõ ràng, không được lặng lẽ bỏ qua.
- Không được tự giả định điều khách chưa nói: gặp điểm mơ hồ thì ghi vào `docs/cau-hoi.md`.

## Quy trình
- Viết hoặc cập nhật test trước, code sau.
- Chạy `node --test` trước khi báo xong. Test không đạt thì không được tạo Merge Request.
- Mọi Merge Request phải có người review trước khi merge vào `develop`.
- CI kiểm tra Merge Request trước khi merge và chạy lại sau merge. Pipeline demo không deploy. Chỉ phiên bản đã đủ kiểm thử và được người phụ trách duyệt mới được tích hợp.
- Bài kiểm thử trình duyệt (nếu được nhóm duyệt) nằm trong `e2e/`, dùng Playwright Python; không bắt buộc cài để chạy Unit Test.
