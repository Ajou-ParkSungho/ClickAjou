
<template>
    <transition name="reserve-fade">
    <div class="my-modal"
        v-if="visible" @click.self="handleWrapperClick">
        <div class="my-modal__dialog">
        <header class="my-modal__header">
            <span>{{title}}</span>
        </header>
        <div class="my-modal__body">
            <slot></slot>
        </div>
        <div class="my-modal__footer">
            현재 창을 닫으시려면 창 바깥쪽을 클릭하시거나 
            <button @click="$emit('update:visible', !visible)">나가기</button>
            버튼을 눌러주세요.<br><br>
        </div>
        </div>
    </div>
    </transition>
</template>

<script>
export default {
  name: 'my-modal',
  props: {
    visible: {
      type: Boolean,
      require: true,
      default: false
    },
    title: {
      type: String,
      require: false,
    },
  },
  methods: {
    handleWrapperClick(){
      this.$emit('update:visible', false)
    },
  },
}
</script>

<style lang="scss" scoped>
$module: 'my-modal';
.#{$module} {
  // This is modal bg
  background-color: rgba(0,0,0,.7);
  top: 0; right: 0; bottom: 0; left: 0;
  position: fixed;
  overflow: auto;
  margin: 0;

  //This is modal layer
  &__dialog{
    
    left: 30%;
    top: 10%;
    width: 700px;
    height: auto;
    position: absolute;
    background: #fff;
    margin-bottom: 50px;
  }
  &__header {
    font-size: 28px;
    font-weight: bold;
    line-height: 1.29;
    padding: 16px 16px 0 25px;
    position: relative;
  }
  &__body {
    padding: 25px;
    min-height: 150px;
    max-height: 412px;
  }
  &__footer {
    margin-top:50px;
  }
}
</style>