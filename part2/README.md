# Phần 2 — Viết lại từ đầu (45 phút)

Đây là RULES.md #2 áp dụng ở quy mô lớn hơn: viết lại được từ đầu = hiểu thật.

## Việc cần làm

- [ ] Viết `part2/api.ts` và `part2/game.ts` từ **file trắng**, đúng chức năng như bản
      đang chạy trên `main` của `Pokemon-game`
- [ ] `tsc` chạy không lỗi
- [ ] Ghi lại chỗ nào phải mở docs để tra, và chỗ nào phải đoán

## Chạy

`tsconfig.json` đã có sẵn trong `part2/`, **không sửa nó**. Mọi lệnh chạy trong `part2/`:

```
cd part2
npx -p typescript@latest tsc --noEmit
```

Hai điều cần biết về `tsc`, vì nó đã bẫy nhiều người:

- Chạy `tsc` ở thư mục **không có** `tsconfig.json` thì nó in bảng trợ giúp rồi thoát
  với mã 0 — trông y như thành công, nhưng không biên dịch gì cả.
- Chạy `tsc api.ts game.ts` thì nó **bỏ qua** `tsconfig.json`, tức mất luôn `strict`.
  Điều kiện "`tsc` không lỗi" ở trên chỉ có nghĩa khi chạy đúng lệnh trong khung trên.

## Điều kiện

Trong 45 phút này **không mở** repo `Pokemon-game`, không mở lịch sử git của nó, không
mở tab cũ. Được mở docs TypeScript/MDN.

Không cần `user-interface.ts`, không cần chạy được game — chỉ cần hai file trên và `tsc`
sạch.

## Cách nộp

Commit hai file vào `part2/` rồi push (đây là lần push thứ 3 theo README ở gốc repo).

Phần ghi lại chỗ phải tra docs / phải đoán thì viết thành comment trong Pull Request,
không cần cho vào file.

Viết không xong cũng nộp, ghi rõ dừng ở đâu và vướng gì. Phần ghi lại chỗ phải đoán được
tính điểm — nó cho biết chỗ nào chưa vững, và đó là thông tin giá trị hơn một file hoàn
chỉnh nhờ nhớ máy móc.
