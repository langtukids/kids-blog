    function ajaxLogin() {
      var email = $("#email").val();
      var pwd = $("#pwd").val();
      if (!email) {
        $("#msg").addClass("text-danger ").html('<i class="fa fa-close" aria-hidden="true"></i> Vui lòng nhập Email');
        $("#email").focus();
      } else if (!pwd) {
        $("#msg").addClass("text-danger").html('<i class="fa fa-close" aria-hidden="true"></i> Vui lòng nhập mật khẩu');
        $("#pwd").focus();
      }
      else
      {
        $.post('/user/login', {email:email,pwd:pwd,}, function (result){
            if(result.status){
              $("#msg").html('<i class="fa fa-check" aria-hidden="true"></i>  Đăng nhập thành công!').removeClass("text-danger").addClass("text-success");
              setTimeout(function(){
                window.location.href = '/user';
              }, 1000);
            }
            else{
              $("#msg").addClass("text-danger").html('<i class="fa fa-close" aria-hidden="true"></i> '+result.msg);
            }
          },
          'JSON'
        );
      }
    }
	function ajaxRegister() {
      var Mail = $("#Mail").val();
      var Phone = $("#Phone").val();
      var Pass = $("#Pass").val();
      if (!Mail) {
        $("#msg1").addClass("text-danger ").html('<i class="fa fa-close" aria-hidden="true"></i> Vui lòng nhập Email');
        $("#Mail").focus();
      } 
	   else if (!Phone) {
        $("#msg1").addClass("text-danger ").html('<i class="fa fa-close" aria-hidden="true"></i> Vui lòng nhập số điện thoại');
        $("#Phone").focus();
      }
	  else if (!Pass) {
        $("#msg1").addClass("text-danger").html('<i class="fa fa-close" aria-hidden="true"></i> Vui lòng nhập mật khẩu');
        $("#Pass").focus();
      }
      else
      {
        $.post('/user/reg', {Mail:Mail,Phone:Phone,Pass:Pass,}, function (resul){
            if(resul.statu){
              $("#msg1").html('<i class="fa fa-check" aria-hidden="true"></i>  Đăng ký thành công!').removeClass("text-danger").addClass("text-success");
              setTimeout(function(){
                window.location.href = '/user';
              }, 1000);
            }
            else{
              $("#msg1").addClass("text-danger").html('<i class="fa fa-close" aria-hidden="true"></i> '+resul.msg1);
            }
          },
          'JSON'
        );
      }
    }
