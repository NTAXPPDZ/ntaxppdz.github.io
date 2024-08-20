var posts=["2024/08/21/hello-world/","2024/08/21/测试1/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };