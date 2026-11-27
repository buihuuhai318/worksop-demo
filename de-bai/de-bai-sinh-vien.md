# Đề bài Phần 2 · Làm cùng nhau

Bạn đóng vai một thành viên trong nhóm phát triển phần mềm. Mở sẵn một công cụ AI bất kỳ (ChatGPT, Claude, Gemini…).
Mỗi bước, hãy **tự nghĩ trước**, rồi mới hỏi AI. Ghi lại câu trả lời của bạn để nộp cuối phần.

**Cách hỏi AI:** chép câu mẫu trong khung dưới đây vào ô chat của AI, thay phần trong ngoặc vuông `[...]` bằng nội dung của bạn rồi gửi. Gõ câu bình thường như nhắn tin cho đồng nghiệp; không cần lệnh đặc biệt hay cài đặt thêm. Nếu bạn dùng Claude Code, hãy mở nó trong thư mục của bước đang làm và gõ đúng như vậy.

> Không dán mật khẩu, khóa truy cập hay dữ liệu thật của khách hàng vào công cụ AI. Dữ liệu trong đề bài là giả định.

---

## Yêu cầu của khách hàng · CT-20

**Chị Lan, Trưởng phòng điều hành tour, Công ty du lịch Hội An Xanh** (khách hàng giả định):

> Mỗi tháng công ty chạy khoảng 60 đoàn, mỗi đoàn từ 15 đến 40 khách. Trong tour có nhiều khoản phát sinh ngoài giá tour: xe đưa đón thêm, vé tham quan tự chọn, bữa ăn đặc biệt. Hiện hướng dẫn viên ghi sổ tay rồi về tính bằng Excel, hay sai và khách hay thắc mắc. Bên chị muốn hướng dẫn viên ghi các khoản chi ngay trong tour, khách xem được mình phải trả thêm bao nhiêu và vì sao, kế toán đối soát và xuất báo cáo cuối tour. Hướng dẫn viên và khách dùng điện thoại. Bên chị muốn có bản đầu tiên để chạy thử trong tháng sau.

---

## Bước 1 · Nhận yêu cầu (1 phút)

Nếu được giao xây dựng ứng dụng này, bạn cần hỏi thêm điều gì trước khi bắt đầu? **Ghi lại một câu hỏi.** Chưa dùng AI.

---

## Bước 2 · Phân tích yêu cầu (4 phút)

Chép câu dưới đây vào AI. Thay `[dán nội dung docs/ticket-CT-20.md]` bằng đoạn yêu cầu của chị Lan ở trên (hoặc mở file `docs/ticket-CT-20.md`, copy nội dung rồi dán một lần vào khung chat):

```
Đây là yêu cầu của khách hàng: [dán nội dung docs/ticket-CT-20.md].
Chưa viết code. Hãy liệt kê các câu cần hỏi lại theo nhóm: vai trò, quy mô, nghiệp vụ, dữ liệu và yêu cầu khác. Giải thích vì sao cần hỏi.
```

**Ghi lại:** 3 câu hỏi bạn thấy cần hỏi khách trước tiên. Có câu nào AI gợi ý mà bạn chưa nghĩ tới?

---

## Bước 3 · Chia việc và viết tiêu chí nghiệm thu

### Phần A · Chia yêu cầu thành user story

Sau khi làm rõ, khách đã trả lời các câu hỏi (xem file `docs/tra-loi-cua-khach.md`). Mở hai file `docs/ticket-CT-20.md` và `docs/tra-loi-cua-khach.md`, copy nội dung rồi dán vào chỗ tương ứng. Nhờ AI chia yêu cầu thành các việc nhỏ:

```
Đây là yêu cầu của khách hàng: [dán nội dung docs/ticket-CT-20.md] và câu trả lời của khách: [dán nội dung docs/tra-loi-cua-khach.md].
Chưa viết code. Hãy chia yêu cầu thành các user story theo mẫu “Là …, tôi muốn … để …” và cho biết story nào nên làm trước.
```

**Ghi lại:** story nào AI cho là nên làm trước, bạn có đồng ý không. Hôm nay nhóm làm **US-02** (xem `docs/user-stories.md`).

### Phần B · Viết tiêu chí nghiệm thu (4 phút)

Sau buổi họp, khách hàng đã chốt:
- Mỗi khoản chi **chia đều cho khách tham gia** khoản đó.
- Phần của mỗi khách trong **từng khoản** được **làm tròn lên đến 1.000 đ**, rồi mới cộng các khoản lại.
- Khi tạo khoản chi mới, **chưa chọn khách nào**. Có nút "Chọn tất cả".
- Mỗi đoàn tối đa 60 khách.

User story cần làm, **US-02**: *Là hướng dẫn viên, tôi muốn ghi khoản chi và chọn khách tham gia để biết chính xác số tiền mỗi khách cần trả mà không phải tính thủ công.*

**Tự viết 2 tiêu chí nghiệm thu.** Mỗi tiêu chí cần có điều kiện, thao tác và kết quả có thể kiểm chứng. Dùng số cụ thể cho phép tính; với giao diện, mô tả trạng thái mong đợi (ví dụ khoản mới chưa chọn khách nào).
- Chưa đạt: "Ứng dụng tính tiền chính xác."
- Đạt: "Chia 9.000.000 đ cho 28 khách, mỗi khách trả 322.000 đ sau khi làm tròn."

Rồi nhờ AI góp ý:

```
Đây là user story và các quy tắc khách hàng đã chốt: [dán phần "Sau buổi họp..." và US-02 ở trên].
Đây là 2 tiêu chí nghiệm thu tôi viết: [dán tiêu chí của bạn].
Chưa viết code. Tiêu chí của tôi đã rõ và có thể kiểm chứng chưa? Còn thiếu trường hợp nào dễ tính sai? Hãy tính lại kết quả để tôi đối chiếu.
```

**Dữ liệu đoàn mẫu HA-2611 (30 khách, mã K01–K30)** để bạn dùng khi viết tiêu chí:

| Khoản chi | Số tiền (đ) | Khách tham gia |
|---|---|---|
| Xe đưa đón | 9.000.000 | K01–K28 (K29, K30 đi xe riêng) |
| Vé tham quan | 3.600.000 | K01–K30 |
| Ăn tối | 4.500.000 | K01–K25 |

---

## Bước 4 · AI viết code

### Phần A · Nhờ AI viết code (làm trong thư mục `worksop-demo`)

Chép câu dưới đây vào AI:

```
Hãy viết code cho US-02 theo tiêu chí trong docs/tieu-chi-US-02.md.
Trước khi viết, cho tôi xem kế hoạch để tôi duyệt.
Viết xong thì chạy test và báo kết quả.
```

AI sẽ đưa ra kế hoạch rồi dừng lại chờ bạn. Đọc kế hoạch; nếu thấy ổn, trả lời:

```
Kế hoạch ổn, bạn làm đi.
```

Nếu công cụ AI của bạn không đọc được thư mục trên máy, hãy dán nội dung file `docs/tieu-chi-US-02.md` vào câu hỏi thay cho tên file.

### Phần B · Trong lúc AI viết code

Nghĩ ra **2 tình huống** ứng dụng có thể tính sai tiền (ví dụ: một khách rời đoàn giữa tour, khoản tiền không chia hết). Rồi hỏi AI (hai tình huống trong câu mẫu chỉ là ví dụ, hãy thay bằng tình huống của bạn):

```
Ứng dụng chia chi phí phát sinh của đoàn du lịch: mỗi khoản chia đều cho khách tham gia, phần của mỗi khách làm tròn lên 1.000 đ, đoàn tối đa 60 khách.
Tôi nghĩ ra 2 tình huống có thể tính sai: một khách rời đoàn giữa tour; khoản tiền không chia hết.
Hãy góp ý 2 tình huống này và gợi ý thêm 3 tình huống khác, mỗi tình huống kèm ví dụ bằng số.
```

**Ghi lại:** tình huống của bạn. Cùng diễn giả xem bộ kiểm thử đã có tình huống đó chưa.

---

## Bước 5 · Kiểm tra code (3 phút)

Một thành viên trong nhóm gửi thay đổi với lời nhắn *"Tiện hơn cho hướng dẫn viên: khoản mới chọn sẵn cả đoàn"*. Toàn bộ 37 bài kiểm thử vẫn đạt.

```diff
 function datLaiForm() {
   dangSua = null;
-  daChon = new Set();
+  daChon = new Set(maTatCaKhach());
```

**Bạn có đồng ý đưa thay đổi này vào nhánh code chung không? Tự giải thích lý do trước**, rồi hỏi AI:

```
Tôi đang kiểm tra code của ứng dụng chia chi phí đoàn du lịch. Khách hàng đã chốt: “Hướng dẫn viên hay quên bỏ chọn khách không tham gia, nên khi tạo khoản chi mới thì chưa chọn khách nào; có nút Chọn tất cả.”
Một thành viên đổi code như sau, ghi chú “Tiện hơn cho hướng dẫn viên: khoản mới chọn sẵn cả đoàn”. Mọi bài kiểm thử vẫn đạt.
[dán đoạn diff]
Có nên đưa thay đổi này vào nhánh chung không? Nêu hậu quả bằng ví dụ số tiền cụ thể.
```

Sau đó, mở một phiên AI **mới** trong thư mục `worksop-demo` (khi đã có nhánh `feature/US-02` chứa thay đổi trên) và nhờ AI tự kiểm tra nhánh:

```
Hãy review nhánh feature/US-02 so với nhánh develop. Chạy test, tìm lỗi và cho biết có nên đưa vào nhánh chung không. Không sửa file nào.
```

Nếu công cụ AI của bạn không đọc được thư mục trên máy, hãy dán tiêu chí US-02 (file `docs/tieu-chi-US-02.md`) và kết quả của `git show HEAD` (gõ trong terminal ở thư mục `worksop-demo`) vào câu hỏi.

---

## Nộp bài

Mở biểu mẫu nộp bài do diễn giả cung cấp. Nếu chưa có biểu mẫu hoặc mạng lỗi, ghi câu trả lời vào một tệp văn bản và trao đổi trực tiếp với nhóm hỗ trợ. Nội dung cần nộp:
1. Câu hỏi bạn ghi ở bước 1 và 3 câu chọn ở bước 2.
2. 2 tiêu chí nghiệm thu của bạn (bước 3, phần B).
3. 2 tình huống dễ tính sai (bước 4, phần B).
4. Quyết định của bạn ở bước 5: có đưa code vào không, vì sao.
