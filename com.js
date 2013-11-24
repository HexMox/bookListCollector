/*
 *‘+’按钮逻辑
 *if 之前的书名框都不为空
 *  addBookBox()
	DOM节点结构
	<div style="">
	  <input type="text" name="bookname + i">
	  <span style="background: #eee;width=height: 10px;
	    border:1px solid #333;border-radius:5px">X</span>
	</div>
 *else
 *  便利的第一个没填的框框focus
 *  break
 *
 *提交按钮逻辑
 *if name框不为空 && 
 *  if bookname框数 > 1 && 都不为空 || bookname == 1
 *    提交成功
 *  else
 *    alert('原因')
 *
 *删除按钮逻辑，弹出是否继续提示。
 *根据操作删除相应父元素
 *sortName()
 */
var bookNameCount = 0;
var addBtn = document.getElementById('addBookBtn');
addBtn.onclick = function() {
	var books = document.querySelectorAll('.books');
	var flag = true;
	for (var i = 0; i < books.length; i++) {
		book = books[i];
		if (book.value === "") {
			book.focus();
			alert('请先填完空余再添加！！！');
			flag = false;
			break;
		}
	}
	if (flag) {
		var div = document.createElement('div');
		div.style.width = "100%";
		div.style.height = "46px";
		div.style.position = "relative";
		var input = document.createElement('input');
		input.type = "text";
		input.name = "bookname" + (bookNameCount + 1).toString();
		input.className = "books";
		bookNameCount++;
		var span = document.createElement('span');
		span.className = "deleteBtn";
		span.innerHTML = "X";
		span.onclick = function() {
			var form = document.getElementById('form');
			form.removeChild(this.parentNode);
			sortName();
		}
		div.appendChild(input);
		div.appendChild(span);
		var form = document.getElementById('form');
		form.insertBefore(div, addBtn);
	}
}

var submitBtn = document.getElementById('submitBtn');
submitBtn.onclick = function(event) {
	var books = document.querySelectorAll('.books');
	var flag = true;
	var n = document.querySelector('input[name="name"]');
	if (n.value == "") {
		alert("请先填写姓名！！！");
		n.focus();
		event.preventDefault();
	} else {
		if (books.length > 1) {
			for (var i = 0; i < books.length; i++) {
				book = books[i];
				if (book.value === "") {
					alert("请不要有多余的空书名！！！");
					book.focus();
					event.preventDefault();
				}
			}
			alert("提交成功，谢谢你的参与与合作！");
		} else {
			alert("提交成功，谢谢你的参与与合作！");
		}
	}
}

function sortName() {
	var books = document.querySelectorAll('.books');
	for (var i = 0; i < books.length; i++) {
		books[i].name = "bookname" + i.toString();
	}
}