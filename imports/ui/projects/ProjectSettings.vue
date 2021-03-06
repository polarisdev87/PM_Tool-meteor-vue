<template>
  <div class="project-settings">
    <div v-if="!$subReady.project">
      <v-progress-linear indeterminate />
    </div>
    <div v-if="$subReady.project" class="project-wrapper">
      <v-tabs>
        <v-tab id="tab-general">
          {{ $t("Settings") }}
        </v-tab>
        <v-tab id="tab-users">
          {{ $t("Users") }}
        </v-tab>
        <v-tab-item>
          <project-settings-general
            :project="project"
          />
        </v-tab-item>
        <v-tab-item>
          <project-settings-manage-users
            :project="project"
            class="users"
          />
        </v-tab-item>
      </v-tabs>
    </div>
  </div>
</template>

<script>
import { Projects } from "/imports/api/projects/projects.js";

export default {
  props: {
    projectId: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      savedProjectName: "",
      editProjectName: false,
      title() {
        return this.$t("Settings");
      }
    };
  },
  mounted() {
    this.$store.dispatch("setCurrentProjectId", this.projectId);
  },
  beforeDestroy() {
    this.$store.dispatch("setCurrentProjectId", null);
  },
  meteor: {
    // Subscriptions
    $subscribe: {
      project: function() {
        return [this.projectId];
      }
    },
    project() {
      return Projects.findOne();
    }
  },
  methods: {}
};
</script>

<style scoped>
.toolbar {
  background-color: white;
}

.search {
  max-width: 300px;
}

.project-settings {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.users {
  overflow-y: scroll;
}

.edit-project-name input {
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 0.02em;
  margin-top: 6px;
  padding: 0;
  font-family: Roboto, Noto Sans, -apple-system, BlinkMacSystemFont, sans-serif;
}

@media (max-width: 600px) {
  .container {
    margin: 4px;
    overflow-x: hidden;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
  }
}

@media (min-width: 601px) {
  .container {
    margin: 4px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    overflow-x: auto;
    overflow-y: scroll;
    padding-left: 4px;
  }
}

.container-wrapper {
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
}

.absolute-right {
  position: fixed;
  right: 24px;
  bottom: 24px;
  z-index: 1000;
}
</style>
