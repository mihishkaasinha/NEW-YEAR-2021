function isTouching(movingRect,fixedRect){
    if(fixedRect.x-movingRect.x<=fixedRect.width/2+movingRect.width/2 && 
        movingRect.x-fixedRect.x<=fixedRect.width/2+movingRect.width/2 && 
        fixedRect.y-movingRect.y<=fixedRect.height/2+movingRect.height/2 && 
        movingRect.y-fixedRect.y<=fixedRect.height/2+movingRect.height/2 )
        {
          Matter.Body.setStatic(fixedRect.body,false)
      }else{
        return false;
      }
    
}