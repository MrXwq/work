<template>
    <div id="alert">
      <slot></slot>  
      <div class="mt-5">
        <i class="iconfont icon-close- fs-white" style="font-size: 2rem;"></i>
      </div>
    </div>
</template>
<script>
export default {
    
}
</script>

<style lang="scss">
#alert {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  left: 0;
  top: 0;
  z-index: 20;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .alert-content {
    width: 20rem;
    height: 25rem;
    background: white;
    border-radius: 0.5rem;
    div {
      line-height: 2rem;
    } 
  }
}

</style>