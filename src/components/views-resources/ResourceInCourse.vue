<template>
  <div>

    <div class="ui card fluid">
      <div class="content">
        <h3 class="ui header">
          <i :class="getTypeIconClass()" class="icon"></i>
          <div class="content">
            <a :href="'http://' + url" target="_blank">{{title}}</a>
            <div class="sub header">{{site}}</div>
          </div>
        </h3>
      </div>
    </div>


  </div>
</template>

<script>
  export default {
    name: 'ResourceInCourse',
    props: ['type', 'url', 'title', 'site'],
//    created() {
//      console.log(this.type);
//      console.log(this.title);
//      console.log(this.site);
//    },
    methods: {
      getTypeIconClass() {
        switch (this.type) {
          case 'video':
            return 'video play';
          case 'article':
            return 'newspaper';
          case 'other':
            return 'newspaper';
          default:
            return 'newspaper';
        }
      }
    }
  }
</script>