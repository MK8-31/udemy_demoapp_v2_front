<template>
  <v-container fluid>
    <v-card flat tile color="transparent">
      <v-card-title>
        Usersテーブルの取得
      </v-card-title>
      <v-card-text>
        <v-simple-table>
          <template v-if="users.length" #default>
            <thead>
              <tr>
                <th v-for="(key, i) in userKeys" :key="`key-${i}`">
                  {{ key }}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(user, i) in users" :key="`user-${i}`">
                <td>{{ user.id }}</td>
                <td>{{ user.name }}</td>
                <td>{{ user.email }}</td>
                <td>{{ dateFormat(user.created_at) }}</td>
              </tr>
            </tbody>
          </template>
          <template v-else>
            ユーザーが存在しません
          </template>
        </v-simple-table>
      </v-card-text>
      <v-card-title>
        Vuetifyの導入（オリジナルカラーの確認）
      </v-card-title>
      <v-card-text>
        <v-btn
          v-for="(color, i) in colors"
          :key="`color-${i}`"
          :color="color"
          class="mr-2"
        >
          {{ color }}
        </v-btn>
      </v-card-text>
      <!-- 追加 -->
      <v-card-title>
        VuetifyカスタムCSSの検証
      </v-card-title>
      <v-card-text>
        ipad（768px）とmobile（426px）で表示・非表示
      </v-card-text>
      <v-card-text>
        <v-card
          v-for="(cls, i) in customClass"
          :key="`cls-${i}`"
          :color="cls.color"
          :class="cls.name"
        >
          <v-card-text>
            {{ cls.des }}
          </v-card-text>
        </v-card>
      </v-card-text>
      <!-- ここまで -->
    </v-card>
  </v-container>
</template>

<script>
  export default {
    layout: "default",
    async asyncData({ $axios }) {
      let users = [];
      await $axios.$get("/api/v1/users").then((res) => (users = res));
      return { users };
    },
    // data () 追加
    data() {
      return {
        colors: [
          "primary",
          "info",
          "success",
          "warning",
          "error",
          "background",
        ],
        // 追加
        customClass: [
          {
            name: "hidden-ipad-and-down",
            color: "error",
            des: "ipad未満で隠す",
          },
          { name: "hidden-ipad-and-up", color: "info", des: "ipad以上で隠す" },
          {
            name: "hidden-mobile-and-down",
            color: "success",
            des: "mobile未満で隠す",
          },
          {
            name: "hidden-mobile-and-up",
            color: "warning",
            des: "mobile以上で隠す",
          },
        ],
      };
    },
    computed: {
      dateFormat() {
        return (date) => {
          const dateTimeFormat = new Intl.DateTimeFormat("ja", {
            dateStyle: "medium",
            timeStyle: "short",
          });
          return dateTimeFormat.format(new Date(date));
        };
      },
    },
  };
</script>
