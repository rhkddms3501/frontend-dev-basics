package ch08.controller.api;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import ch08.dto.JsonResult;
import ch08.vo.GuestbookVo;

@RestController
@RequestMapping("/guestbook/api")
public class GuestbootController {
	
	@PostMapping("")
	public JsonResult ex01(@RequestBody GuestbookVo vo) {
		// guestbookService.addMessage(vo);
		
		vo.setNo(1L);
		vo.setPassword("");
		
		return JsonResult.success(vo);
	}
	
	@GetMapping("")
	public JsonResult ex02(@RequestParam(value = "sno", required = true, defaultValue = "0") Long startNo) {
		List<GuestbookVo>list = new ArrayList<>();
		
		GuestbookVo vo1 = new GuestbookVo();
		vo1.setNo(10L);
		vo1.setName("짱구");
		vo1.setMessage("호호이~");
		list.add(vo1);
		
		GuestbookVo vo2 = new GuestbookVo();
		vo2.setNo(9L);
		vo2.setName("짱아");
		vo2.setMessage("따따야~");
		list.add(vo2);
		
		GuestbookVo vo3 = new GuestbookVo();
		vo3.setNo(8L);
		vo3.setName("흰둥이");
		vo3.setMessage("왈왈!");
		list.add(vo3);
		
		return JsonResult.success(list);
	}

}
