javascript:(
    function(){
        var href = document.location.href;
        var thumbnail = document.getElementsByTagName('video')[0].poster
        var markdown = "[![Video thumbneil](" + thumbnail + ")](" + href + "/video/1)";

        var listener = function(e){
            e.clipboardData.setData("text/plain" , markdown);
            e.preventDefault();
            document.removeEventListener("copy", listener);
        }
        document.addEventListener("copy", listener);
        document.execCommand("copy");
        
        alert("クリップボードにコピーしました。");
    }
)();