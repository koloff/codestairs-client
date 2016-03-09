<template>
  <div>
    <div class="ui divider hidden"></div>
    <div class="ui segment basic">
      <h2 class="ui icon header center aligned">
        <i class="student icon"></i>
        <div class="content">
          Learning path
          <div class="sub header">Join resources and create amazing learning experience!</div>
        </div>
      </h2>
    </div>
  </div>
  <path-editor :resources="resources"></path-editor>

</template>

<script>
  import PathEditor from './PathEditor.vue';

  export default {
    name: 'NewPathPage',
    components: {
      PathEditor
    },
    data() {
      return {
        resources: []
//          [{
//            "_id": "Id_1",
//            "url": "http://telerikacademy.com/Courses/LectureResources/Video/6511/%D0%92%D0%B8%D0%B4%D0%B5%D0%BE-16-%D1%8E%D0%BD%D0%B8-2015-%D0%9A%D0%BE%D0%BB%D0%B5%D0%B2",
//            "title": "Classical Inheritance in JavaScript",
//            "description": "Learn what is OOP in Javascript and classical inheritance in it. ",
//            "difficulty": "Medium",
//            "duration": "2H",
//            "screenshotName": "3rd.JPG"
//          },
//          {
//            "_id": "Id_2",
//            "url": "http://telerikacademy.com/Courses/LectureResources/Video/6528/%D0%92%D0%B8%D0%B4%D0%B5%D0%BE-22-%D1%8E%D0%BD%D0%B8-2015-%D0%98%D0%B2%D0%B0%D0%B9%D0%BB%D0%BE",
//            "title": "Prototype-based inheritance",
//            "description": "Learn the other way of inheritance - prototype-based.",
//            "difficulty": "Medium",
//            "duration": "1:30H",
//            "screenshotName": "2nd.JPG"
//          },
//          {
//            "_id": "Id_3",
//            "url": "http://telerikacademy.com/Courses/LectureResources/Video/6487/%D0%92%D0%B8%D0%B4%D0%B5%D0%BE-15-%D1%8E%D0%BD%D0%B8-2015-%D0%94%D0%BE%D0%BD%D1%87%D0%BE",
//            "title": "JavaScript Patterns",
//            "description": "Learn what are modules and module patterns.",
//            "difficulty": "Experienced",
//            "duration": "1H",
//            "screenshotName": "1st.JPG"
//          }]
      };
    }
  }
</script>