<script setup>
import {computed, ref} from "vue";

const month = ref(new Date().toLocaleString('default', {month: 'long'}));
const year = ref(new Date().getFullYear());

const daysInMonth = computed(() => {
  const days = [];
  const totalDays = new Date(year.value, new Date().getMonth() + 1, 0).getDate();
  for (let i = 1; i <= totalDays; i++) {
    days.push(i);
  }
  return days;
});

const isToday = (day) => {
  const today = new Date().getDate();
  return day === today;
};
</script>
<template>
  <div class="calendarRoot">
    <div class="header">
      {{ month }} {{ year }}
    </div>
    <div class="days">
      <div v-for="day in daysInMonth" :key="day" :class="{ day: true, today: isToday(day) }">{{ day }}</div>
    </div>
  </div>
</template>


<style scoped>
.calendarRoot {
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  padding: 10px;
  display: inline-block;
}

.header {
  text-align: center;
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: green;
}

.days {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 5px;
}

.day {
  background-color: #f0f0f0;
  border-radius: 5px;
  padding: 5px;
  text-align: center;
}

.today {
  background-color: lightblue;
}
</style>
