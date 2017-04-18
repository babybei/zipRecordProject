$(function() {
  window.dozip={
    init:function(){
      var self=this;
	  this.addListener();
    },
    addListener:function(){   //压缩事件监听
      var self=this;
      $("#begingZip").click(function(){
      	debugger;
        self.toZip();
      });

      $("#begingSave").click(function(){
        saveAs();
      });
    },
    toZip:function(){  //进行文件压缩
      debugger;
      var self=this;
      var zip = new JSZip();
      zip.file("Hello.txt", "Hello World babe\n");
      var imgZip = zip.folder("images");
      //var imgData='R0lGODdhBQAFAIACAAAAAP/eACwAAAAABQAFAAACCIwPkWerClIBADs=';
      // var imgData='images/2.jpg';
      // img.file("1.jpg", imgData,{base64: false});

      var img = document.createElement('img'); 
      img.src = 'images/11.png'; 
      img.onload =function() {
        var a=self.getBase64Image(img);
        var imgData = a.split(',')[1];
        debugger;
        imgZip.file("1.wav", imgData,{base64: true});

        zip.generateAsync({type:"blob"})
         .then(function(content) {
          // see FileSaver.js
          debugger;
          saveAs(content, "example.zip");
        });
      }
      document.body.appendChild(img);
      //imgZip.file("now11.png", imgData,{base64: true});

      // zip.generateAsync({type:"blob"})
      // .then(function(content) {
      //     // see FileSaver.js
      //     saveAs(content, "example.zip");
      // });
    },
    getBase64Image:function(img){
      var canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      var ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0, img.width, img.height);
      var dataURL = canvas.toDataURL("images/png");
      return dataURL // return dataURL.replace("data:image/png;base64,", ""); 
    }
  };
  dozip.init();
});