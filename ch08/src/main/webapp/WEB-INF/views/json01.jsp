<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<script src="${pageContext.request.contextPath }/jquery/jquery-3.6.0.js"></script>
<script type="text/javascript">
	$( ()=>{
		$("button").click( ()=>{
			$.ajax({
				url: "http://localhost:8080/ch08/api/json",
				async: true, // 동기 비동기
				type: "GET",
				dataType: "json",
				success: (response)=>{
					if(response.result === "fail"){
						console.error(response.message);
						return;
					}
					console.log(response);
					var guestbookVo = response.data;
					var htmls = "";
					htmls += ("<h3>"+ guestbookVo.no +"</h3>");
					htmls += ("<h4>"+ guestbookVo.name +"</h4>");
					htmls += ("<h5>"+ guestbookVo.message +"</h5>");
					
					$("#data").html(htmls);
				},
				error: (xhr, status, error)=>{
					console.error(status, error);
				}
			});
		});
	});
</script>
</head>
<body>
	<h1>AJAX Test: jSON Format Data: $.ajax() 함수 사용하기</h1>
	
	<button>데이터 가져오기</button>
	<div id="data"></div>
</body>
</html>