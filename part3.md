# Phần 3 — Câu hỏi (30 phút)

10 câu. Trả lời ngắn, 2–4 dòng mỗi câu là đủ. Không cần thuật ngữ chuẩn, cần đúng cơ chế.

**Trong số này có những câu mà đáp án đúng là "không cần sửa gì".** Trả lời đúng như vậy
kèm lý do là đạt. Đề xuất sửa một chỗ vốn không cần sửa bị tính là sai.

1. `tsc` chạy xong không báo lỗi. Điều đó có chứng minh trong code không còn `any` không?
2. Một hàm có 3 lệnh `await` liên tiếp, gọi 3 API **không liên quan gì tới nhau**. Có nên
   sửa không, sửa thế nào?
3. Một hàm có 2 lệnh `await`, lệnh sau cần kết quả của lệnh trước mới chạy được. Có nên
   sửa không?
4. Một hàm gọi API, bọc `try/catch`, trong `catch` viết `return []`. Vấn đề gì?
5. Một mảng dữ liệu được cache lại để dùng cho nhiều lần render. Mỗi lần render gọi
   `.sort()` trực tiếp lên mảng đó. Vấn đề gì?
6. API trả về object có 40 field. `interface` trong code chỉ khai 3 field mà code dùng
   tới. Như vậy có thiếu không?
7. Trong code có `setTimeout` dùng để hoãn animation 500ms. Có nên chuyển nó thành
   `await sleep(500)` không?
8. Một biến khai báo bằng `const` ở top-level của một file ESM. Sau khi chạy, truy cập
   `window.<tên biến>` có ra giá trị đó không? Vì sao?
9. Một file ESM chạy trực tiếp trên browser, câu `import` viết là `from './game'`
   (không có `.js`). Lỗi xảy ra lúc nào — lúc `tsc` hay lúc chạy? Vì sao?
10. Một hàm nhận tham số kiểu `HTMLElement | null` và trong thân hàm dùng `element!`.
    Rủi ro là gì? Có trường hợp nào dùng `!` là chấp nhận được không?
