<template>
  <v-list two-line>
    <template v-for="(notification, index) in notifications">
      <v-list-item :key="notification._id" @click="openDetail(notification)">
        <v-list-item-avatar>
          <v-icon>{{ getIcon(notification) }}</v-icon>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title :class="{ unread: !notification.read }">
            {{ notification.properties.task.name }}
          </v-list-item-title>
          <v-list-item-subtitle>
            {{ $t(`history.${notification.type}`) }}
            <template v-if="notification.properties.user">
              ({{ formatUser(notification.properties.user) }} )
            </template>
          </v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-action>
          <v-list-item-action-text>
            {{ formatDateDuration(notification.createdAt) }}
          </v-list-item-action-text>
          <v-btn icon ripple @click.stop="removeNotification(notification)">
            <v-icon color="grey lighten-1">
              mdi-close
            </v-icon>
          </v-btn>
        </v-list-item-action>
      </v-list-item>
      <v-divider v-if="index + 1 < notifications.length" :key="index" inset />
    </template>
  </v-list>
</template>

<script>
import DatesMixin from "/imports/ui/mixins/DatesMixin.js";
import usersMixin from "/imports/ui/mixins/UsersMixin.js";
import { NotificationTypes } from "/imports/api/notifications/notifications.js";

export default {
  mixins: [DatesMixin, usersMixin],
  props: {
    notifications: {
      type: Array,
      default: () => []
    },
    showNotificationCenterLink: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    openDetail(notification) {
      this.$router.push({
        name: "project-task",
        params: {
          projectId: notification.properties.task.projectId,
          taskId: notification.properties.task._id
        }
      });
      this.$emit("click");
    },
    removeNotification(notification) {
      Meteor.call(
        "notifications.remove",
        { notificationId: notification._id },
        (error) => {
          if (error) {
            this.$store.dispatch("notifyError", error);
            return;
          }
          this.$emit("refresh");
          this.$store.dispatch("notify", this.$t("Notification deleted"));
        }
      );
    },

    getIcon(notification) {
      if (
        notification.type === NotificationTypes.TASK_REMINDER_START_DATE
        || notification.type === NotificationTypes.TASK_REMINDER_DUE_DATE
      ) {
        return "mdi-alarm";
      }
      return "mdi-pencil";
    }
  }
};
</script>

<style scoped>
.unread {
  font-weight: bold;
}
</style>
