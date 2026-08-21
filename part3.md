# Phần 3 — Câu hỏi (30 phút)

10 câu. Trả lời ngắn, 2–4 dòng mỗi câu là đủ. Không cần thuật ngữ chuẩn, cần đúng cơ chế.

**Trong số này có những câu mà đáp án đúng là "không cần sửa gì".** Trả lời đúng như vậy
kèm lý do là đạt. Đề xuất sửa một chỗ vốn không cần sửa bị tính là sai.

1. `tsc` chạy xong không báo lỗi. Điều đó có chứng minh trong code không còn `any` không?
+ Không. tsc chỉ kiểm tra các lỗi kiểu dữ liệu, nhưng nếu có any mà không vi phạm quy tắc kiểm tra, nó vẫn sẽ chạy mà không báo lỗi. 
2. Một hàm có 3 lệnh `await` liên tiếp, gọi 3 API **không liên quan gì tới nhau**. Có nên
   sửa không, sửa thế nào?
  + có, nên sửa, dùng Promise.all hoặc..Promise gì gì đó => chưa chắc chắn phần Promise, cái tue chắc chắn là cần phải sửa 
3. Một hàm có 2 lệnh `await`, lệnh sau cần kết quả của lệnh trước mới chạy được. Có nên
   sửa không? 
   + ko, vì câu trả lời đã có sẵn trong câu hỏi, đây là 1 quá trình tuần tự rồi, ko ép nó chạy song song được
4. Một hàm gọi API, bọc `try/catch`, trong `catch` viết `return []`. Vấn đề gì?
   + hmm, hàm trả về 1 mảng rỗng này, thếeee nếu như ko thông báo lỗi thì ko ai biết được là lỗi gì? 
5. Một mảng dữ liệu được cache lại để dùng cho nhiều lần render. Mỗi lần render gọi
   `.sort()` trực tiếp lên mảng đó. Vấn đề gì?
   + do là sort thẳng từ dữ liệu, nên dữ liệu đấy ở các lần sử dụng sau sẽ ko hoạt động theo ý mình. ví dụ: Alba, AA, Alche, Axe.. nhiều lần sort thì thằng Axe lại nhảy lên đầu là hỏng
6. API trả về object có 40 field. `interface` trong code chỉ khai 3 field mà code dùng
   tới. Như vậy có thiếu không?
   + không cần sửa gì, thì ko dùng, thì ko khai báo 
7. Trong code có `setTimeout` dùng để hoãn animation 500ms. Có nên chuyển nó thành
   `await sleep(500)` không?
   + Ko, vì chỉ nhớ là setTimeout của JS, còn sleep thuộc TS...Hiện tại chưa biết giải thích thêm
8. Một biến khai báo bằng `const` ở top-level của một file ESM. Sau khi chạy, truy cập
   `window.<tên biến>` có ra giá trị đó không? Vì sao?
   + đang đoán là KO, vì cái biến đấy nó chỉ tồn tại trong cái module đấy thôi (module của ESM)
9.  Một file ESM chạy trực tiếp trên browser, câu `import` viết là `from './game'`
   (không có `.js`). Lỗi xảy ra lúc nào — lúc `tsc` hay lúc chạy? Vì sao?
   + Lúc chạy, vì biết rõ là tsc chỉ check cú pháp + data type. CHƯA BIẾT giải thích thêm
10. Một hàm nhận tham số kiểu `HTMLElement | null` và trong thân hàm dùng `element!`.
    Rủi ro là gì? Có trường hợp nào dùng `!` là chấp nhận được không?
   +chưa rõ lỗi(rủi ro) là gì, đoán là sẽ gặp lỗi nếu như kiểu của nó là thuộc null(và cũng ko biết lỗi lúc nào?runtime/tsc?). dùng `!` là chấp nhận được nếu như BIẾT CHẮC, cái kiểu mình truyền vào KO PHẢI null.