<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<script src="${pageContext.request.contextPath }/jquery/jquery-3.6.0.js"></script>
<script>
	$(function() {
		$("button").click(function() {
			var vo = {
				name : "둘리",
				password : "1234",
				message : "호이~"

			};
			$.ajax({
				url : "${pageContext.request.contextPath}/api/post02",
				async : true,
				type : "post",
				dataType : "json",
				contentType : "application/json",
				data : JSON.stringify(vo),
				success : function(response) {
					if (response.result === "fail") {
						console.error(response.message);
						return;
					}
					var vo = response.data;
					
					var htmls = "";
					htmls += ("<h3>" + vo.no + "</h3>");
					htmls += ("<h4>" + vo.name + "</h4>");
					htmls += ("<h5>" + vo.message + "</h5>");
					
					$("#data").html(htmls);
				},
				error : function(xhr, status, error) {
					console.error(status, error);
				}
			});
		});
	});
</script>
</head>
<body>
	<h1>AJAX Test: JSON Format Data: $.ajax() 함수 사용하기</h1>

	<button>데이터 보내기(post, delete, put)</button>
	<div id="data"></div>
</body>
</html>