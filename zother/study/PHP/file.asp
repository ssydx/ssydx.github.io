<%
 response.expires=-1
 dim a(32)
 '用姓名填充数组
 a(1)="Ava"
 a(2)="Brielle"
 a(3)="Caroline"
 a(4)="Diana"
 a(5)="Elise"
 a(6)="Fiona"
 a(7)="Grace"
 a(8)="Hannah"
 a(9)="Ileana"
 a(10)="Jane"
 a(11)="Kathryn"
 a(12)="Laura"
 a(13)="Millie"
 a(14)="Nancy"
 a(15)="Opal"
 a(16)="Petty"
 a(17)="Queenie"
 a(18)="Rose"
 a(19)="Shirley"
 a(20)="Tiffany"
 a(21)="Ursula"
 a(22)="Victoria"
 a(23)="Wendy"
 a(24)="Xenia"
 a(25)="Yvette"
 a(26)="Zoe"
 a(27)="Angell"
 a(28)="Adele"
 a(29)="Beatty"
 a(30)="Carlton"
 a(31)="Elisabeth"
 a(32)="Violet"

 '从 URL 获取 q 参数
 q=ucase(request.querystring("q"))

 '查看数组中所有 hint，q 的长度是否大于 0
 if len(q)>0 then
   hint=""
   for i=1 to 30
     if q=ucase(mid(a(i),1,len(q))) then
       if hint="" then
         hint=a(i)
       else
         hint=hint & " , " & a(i)
       end if
     end if
   next
 end if

 '如果未找到 hint，输出 "no suggestion"，或输出正确的值
 if hint="" then
   response.write("no suggestion")
 else
   response.write(hint)
 end if
%>