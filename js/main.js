! function() {
	  var duration=50
		$('.actions').on('click','button',function(e){
		let $button=$(e.currentTarget)
		let speed=$button.attr('data-speed')
		$button.addClass('active')
		 .siblings('.active').removeClass('active')
		 switch(speed){
		 	case'slow':
		 		duration=100
		 		break
		 	case'normal':
		 		duration=50
		 		break
		 	case 'fast':
		 		duration=10
		 		break
		 }
	})
	function writeCode(prefix, code, fn) {
		let container = document.querySelector('#code')
		let styleTag = document.querySelector('#styleTag')
		let n = 0
		let id
		id=setTimeout(function run(){
			n += 1
			container.innerHTML = code.substring(0, n)
			styleTag.innerHTML = code.substring(0, n)
			container.scrollTop = container.scrollHeight
			if (n < code.length) {
				id=setTimeout(run,duration)
			}else{
				fn && fn.call()
			}
		}, duration)
	}
	let code = `
/*
 *首先，需要准备皮卡丘的皮肤
 */
.preview{
    height:100%;
    border:1px solid black;
    display:flex;
    justify-content:center;
    align-items:center;
    background:#FFE600;
  }
  .wrapper{
    width:100%;
    height:165px;
    position: relative;
  }
/*
 *接下来，画皮卡丘的鼻子
 */
  .nose{
    width:0px;
    height:0px;
    border-color:black transparent transparent;
    border-style:solid;
    border-width:15px;
    border-radius:50%;
    position: absolute;
    left:50%;
    top:30px;
    margin-left:-11px;
  }
/*
 *皮卡丘的眼睛
 */
  .eye{
    width:49px;
    height:49px;
    background:#2E2E2E;
    border-radius:50%;
    border:2px solid black;
    position: relative;
  }
/*
 *皮卡丘的左眼
 */
  .eye.left{
    position: absolute;
    right:50%;
    margin-right:90px;
  }
/*
 *皮卡丘的右眼
 */
   .eye.right{
    position: absolute;
    left:50%;
    margin-left:90px;
  }
/*
 *眼睛得有眼珠子
 */
  .eye::after{
    content:'';
    display:block;
    width:24px;
    height:24px;
    background:#fff;
    border-radius:50%;
    border:2px solid black;
    left:6px;
    top:-1px;
    position: absolute;
  }
/*
 *给皮卡丘加个小脸蛋
 */
  .face{
    width:68px;
    height:68px;
    background:#FF0000;
    border-radius:50%;
    border:2px solid black;
    top:85px;
    position: absolute;
  }
  .face.left{
    right:50%;
    margin-right:116px;
  }
  .face.right{
    left:50%;
    margin-left:116px;
  }
/*
 *开始画嘴唇啦
 */
  .upperLip{
    width:79px;
    height:25px;
    border:2px solid black;
    position: absolute;
    top:55px;
    background:#FFE600;
  }
  .upperLip.left{
    border-bottom-left-radius:40px 25px;
    transform:rotate(-21deg);
    right:50%;
    margin-right:-4px;
    border-top:none;
    border-right:none;
  }
  .upperLip.right{
    border-bottom-right-radius:40px 25px;
    transform:rotate(21deg);
    left:50%;
    border-top:none;
    border-left:none;
    margin-left:5px;
  }
/*
 *还有下嘴唇
 */
  .lowerLip-wrapper{
    position: absolute;
    left:50%;
    bottom:-48px;
    margin-left:-68px;
    overflow: hidden;
    width:140px;
    height:150px;
  }
  .lowerLip{
    width:140px;
    height:1500px;
    background:#9B000A;
    border-radius:200px/900px;
    border:2px solid black;
    position: absolute;
    bottom:0px;
    overflow: hidden;
  }
/*
 *最后加个可爱的小舌头
 */
  .lowerLip::after{
    content:'';
    position: absolute;
    width:120px;
    height:120px;
    background:#FF485F;
    left:50%;
    bottom:-5px;
    margin-left:-60px;
    border-radius:50%;
  }
/*
 *一只可爱的皮卡丘送给你
 */`
	writeCode('', code)
}.call()