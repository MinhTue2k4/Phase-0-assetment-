# Bài kiểm tra cuối Phase 0

Tổng thời gian: **3 tiếng**, làm liền một buổi. Chia 3 phần, làm theo đúng thứ tự.

Được dùng: docs chính thức (MDN, TypeScript handbook), Google, terminal.
Không được dùng: AI (Claude, ChatGPT, Copilot…), và không xem lại code Phase 0 của
mình ở phần 2.

Nộp qua Pull Request — xem mục "Quy trình bắt buộc" bên dưới.

| Phần | Nội dung | Thời gian |
|---|---|---|
| 1 | Debug — [part1/](./part1) | 90 phút |
| 2 | Viết lại từ đầu — [part2/README.md](./part2/README.md) | 45 phút |
| 3 | Trả lời câu hỏi — [part3.md](./part3.md) | 30 phút |

Hết giờ phần nào thì dừng phần đó, ghi rõ làm được tới đâu. Nộp dở đúng thời gian
được tính điểm cao hơn nộp đủ mà quá giờ.

## Cấu trúc và thư mục làm việc

```
part1/        phần 1 — code có bug, tsconfig.json có sẵn
part2/        phần 2 — viết 2 file vào đây, tsconfig.json có sẵn
part3.md      phần 3 — câu hỏi
```

Phần 1 và phần 2 mỗi phần có `tsconfig.json` riêng. **Luôn `cd` vào thư mục của phần đó
trước khi chạy `tsc`.** Chạy `tsc` ở gốc repo thì nó in bảng trợ giúp rồi thoát với mã 0
— trông như thành công nhưng không biên dịch gì.

## Quy trình bắt buộc — mốc giờ

Làm trên branch riêng, tên `assessment/<tên>`. Có 4 lần push, **push ngay tại thời
điểm đó**, không dồn lại push một lượt cuối buổi:

| Lần | Nội dung commit | Ý nghĩa |
|---|---|---|
| 1 | tạo và đẩy file rỗng `part1/expected-output.md` lên | mốc **bắt đầu** |
| 2 | phần 1 làm xong | hết phần 1 |
| 3 | phần 2 làm xong | hết phần 2 |
| 4 | phần 3 làm xong | hết bài |

Push lần 1 phải xong **trước khi làm bất kì phần nào** của phần 1. Thời gian tính từ
push lần 1.

Dồn tất cả vào một lần push cuối buổi thì phần chấm thời gian bị tính là không có dữ
liệu, và bài mất điểm ở mục đó.

Xong lần 4 thì mở 1 Pull Request. Câu trả lời của phần 2 và phần 3 nộp bằng comment
trong PR đó.
