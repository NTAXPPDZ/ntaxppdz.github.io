var posts=["2024/11/09/hello-world/","2024/11/10/GitHub520/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };