<template>
  <ui-page title="list">
    <guide-navi />
    <h2 class="gd__h1 first">
      SNS인척 리스트
    </h2>
    <h3 class="gd__h2">
      페이지에 v-for문을 이용해서 출력
    </h3>
    <div class="post-wrap">
      <div
        v-for="(item, i) in listData"
        :key="i"
        class="post"
      >
        <div class="post-header">
          <div
            class="profile"
            :style="`background-image:url(${item.userImage})`"
          />
          <span class="profile-name">{{ item.name }}</span>
        </div>
        <slot />
        <div
          class="post-body"
          :class="[item.filter]"
          :style="`background-image:url(${item.postImage})`"
        />
        <div class="post-content">
          <p>{{ item.likes }} Likes</p>
          <p><strong>{{ item.name }}</strong> {{ item.caption }}</p>
          <p class="date">
            {{ item.date }}
          </p>
        </div>
      </div>
    </div>

    <h3 class="gd__h2">
      컴포넌트를 이용해서 출력
    </h3>
    <post-list
      :items="listData"
      @postClick="getPostLike"
    />
  </ui-page>
</template>

<script>
import guideNavi from '@/components/page/guideNavi.vue'
import PostList from '@/components/page/PostList.vue'

export default {
  name: 'List',
  components: {
    guideNavi,
    PostList,
  },
  data() {
    return {
      listData: [
        {
          name: 'Kimhyukmin',
          userImage: 'https://placeimg.com/100/100/arch',
          postImage: 'https://placeimg.com/640/480/arch',
          likes: 36,
          date: 'May 15',
          liked: false,
          caption: '오늘 무엇을 했냐면요 😫 아무것도 안했어요.',
          filter: 'perpetua',
        }, {
          name: 'Dangdud',
          userImage: 'https://placeimg.com/200/200/arch',
          postImage: 'https://placeimg.com/640/480/people',
          likes: 20,
          date: 'Apr 20',
          liked: false,
          caption: 'Do you even lift, bro?',
          filter: 'clarendon',
        }, {
          name: 'Mungmung',
          userImage: 'https://placeimg.com/100/100/animals',
          postImage: 'https://placeimg.com/640/480/animals',
          likes: 49,
          date: 'Apr 4',
          liked: false,
          caption: '고양이 멍뭉이',
          filter: 'lofi',
        }],
    }
  },
  methods: {
    getPostLike(e) {
      console.log(this.listData[e].likes)
    },
  },
}
</script>
