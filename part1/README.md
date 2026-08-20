# Phần 1 — Debug (90 phút)

Chương trình in ra một báo cáo doanh thu. `tsc` chạy **không có lỗi nào**. Nhưng
output không đúng với đặc tả dưới đây.

## Chạy

Mọi lệnh của phần này chạy **trong thư mục `part1/`**, không phải ở gốc repo:

```
cd part1
npx -p typescript@latest tsc
node dist/main.js
```

Chạy ở gốc repo thì `tsc` không thấy `tsconfig.json` nên in bảng trợ giúp thay vì biên
dịch — trông như thành công — rồi `node dist/main.js` báo `MODULE_NOT_FOUND`.

## Đặc tả — chương trình PHẢI làm đúng những điều này

1. `Doanh thu (don paid)` = tổng `amount` của **tất cả đơn có `status` là `paid`**, tính
   ra một con số.
2. Mỗi dòng tiếp theo = **tên** của một user, kèm tổng `amount` các đơn `paid` của
   user đó. Tên lấy từ danh sách users, không phải id.
3. `archiveOldOrders()` loại các đơn `pending` ra khỏi danh sách.
4. Dòng cuối `So don con lai` = số đơn còn lại **sau khi** archive xong.

## Việc cần làm

- [ ] Tự tính ra bằng tay output đúng phải là gì, dựa vào dữ liệu trong `api.ts` và
      đặc tả trên, ghi vào `part1/expected-output.md` — file này đã được push rỗng từ
      trước khi bắt đầu (xem README ở gốc repo), giờ chỉ điền nội dung vào
- [ ] So output thật với output đúng. Với **mỗi** chỗ lệch: chỉ ra `file:dòng`, giải
      thích cơ chế gây ra nó, và nói vì sao `tsc` không bắt được
- [ ] Sửa, chạy lại, output khớp đặc tả
- [ ] Với mỗi chỗ đã sửa, trả lời: cách sửa này còn đường nào khác lọt vào lại trạng
      thái sai không?

## Cách nộp

Comment kèm: output đúng tự tính bằng tay, output trước khi sửa, danh sách chỗ lệch
đã tìm được kèm `file:dòng` và giải thích, output sau khi sửa, và diff.

Không nói trong đề có bao nhiêu chỗ sai. Tìm được bao nhiêu tính bấy nhiêu — đây là
phần được chấm nặng nhất.
