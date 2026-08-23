### Real output: 
--- BAO CAO ---
Doanh thu (don paid): 120.58050
  Unknown: 120.580
  Unknown: 50
Xong. So don con lai = 5

### Expected output:
--- BAO CAO ---
Doanh thu (don paid) = 250.5
An: 200.5
Chi: 50
Xong. So don con lai = 3

+ ban đầu là sai kết quả, Doanh thu (don paid): 120.58050, nguyên nhân là do trong data, line 11 file api.ts. Do tsc ko chỉ kiểm tra kiểu dữ liệu ở thời điểm viết code, nó ko biết được dữ liệu thực tế chạy trong máy lúc đó (runtime) là gì. 
=> Ban đầu là nghĩ ngay đến sửa data, mà nghĩ là ko nên như vậy vì..bài toán thực tế, nên chuyển hướng đến ép kiểu. Và chọn dùng Number.. Cách sửa này còn có đường lọt vào sai, vì nhỡ nếu như có ký tự lạ(vd: "80abc"), chưa biết cách nào khác. 
=> lỗi tương tự ở dòng kết quả 2, vẫn áp kiểu solution cũ, Number()

+ cái lỗi tiếp là cái user nó in ra Unknow. Lỗi ở line 8: store.ts Cái này từ ban đầu tra là thấy đang bị khác kiểu so với trong data, type là string mà, sao lại "u1"? thế là nghi ngờ lỗi giống ở trên. Vậy là ép kiểu String vào. 
=> Sửa và chạy, vẫn ghi ra Unknow => mất thời gian ngồi nghĩ, mất thời gian nhất, rồi để ý thấy, là đã export userNameById ra rồi, rồi xong sao mới loadUser()? Ở trên là mảng rỗng nữa, hay nghĩ là rỗng mà chưa có user đã ép lại vào thì lỗi gì đó? 
=> solution là ném cái const sang bên report.ts thôi. Ở đây giải thích chưa rõ ràng => chưa chắc chắn tsc ko bắt lỗi hay sao, skip 
+ câu cuối ko đủ time => skip 
start: 8:17 PM