<template>
  <div>
    <div @click="rateClicked()" :id="id" :data-rating="value" class="ui star rating"></div>
    ({{!count ? 0 : 1}})
  </div>
</template>


<script>
  import * as socialFetcher from '../../http-fetchers/social';
  import * as identity from '../../store/identity';
  import notifier from '../../utils/notifier';
  import co from 'co';

  export default {
    name: 'Rating',
    props: ['id', 'type', 'value', 'count'],
    data() {
      return {
        rated: false
      }
    },
    ready() {
      console.log('rating id:', this.id);
      console.log('rating type', this.type);
      console.log('rating value', this.value);
      console.log('count', this.count);

      let self = this;
      $(`#${self.id}`).rating({
        maxRating: 5,
        onRate: function(value) {
          if (self.rated) {
            console.log(value);
            console.log('rated');
            co(function *() {
              console.log('ratedddd');
              self.count++;
              try {
                let result = yield socialFetcher.rate(self.type, $pure(identity.state.token), self.id, value);
                console.log('resulttt', $pure(result));
                self.value = result.value;
                notifier('success', 'Rated succesfully!');
              } catch (err) {
                console.log(err);
                notifier('error', 'You cannot rate this!');
              }

              self.rated = false;
            });

          }


        }
      })
    },

    methods: {
      rateClicked() {
        this.rated = true;
      }
    }

  }
</script>