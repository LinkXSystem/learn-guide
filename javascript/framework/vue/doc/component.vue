<template>
  <section class="container" :style="layout">
    <slot name="side"></slot>
    <slot></slot>
  </section>
</template>

<script>
export default {
  props: {
    direction: {
      type: String,
      default: "row"
    }
  },

  compute: {
    layout() {
      return Object.assign(
        {},
        {
          flexDirection: this.props.direction
        }
      );
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  align-items: center;
}
</style>
