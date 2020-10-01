<template>
  <table class="history-table">
    <thead>
      <tr>
        <th>ID</th>
        <th>Transaction</th>
        <th>Amount</th>
        <th>Description</th>
        <th>Data</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="row in history" :key="row.id">
        <td>{{ row.id }}</td>
        <td id="transaction">{{ row.transaction }}</td>
        <td>{{ row.amount + " $" }}</td>
        <td>{{ row.description }}</td>
        <td>{{ row.date }}</td>
      </tr>
    </tbody>
  </table>
</template>


<script>
import { history } from "../history";

export default {
  data() {
    return {
      history: history,
    };
  },
};
</script>


<style lang="scss">


.history-table {
  width: 70%;
  text-align: center;
  border-collapse: separate;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  border-spacing: 0;
  border-radius: 10px;
  margin-bottom: 1rem;
}

table tr:last-child td:first-child {
  border-bottom-left-radius: 10px;
}

table tr:last-child td:last-child {
  border-bottom-right-radius: 10px;
}

table th:first-child {
  border-top-left-radius: 10px;
}
table th:last-child {
  border-top-right-radius: 10px;
}

td,
th {
  padding: 0.7rem;
  border: 1px solid #979797;
}

th::first-letter {
  text-transform: uppercase;
}

table tr:nth-child(even) {
  background: rgb(236, 236, 236);
}

table th {
  background-color: rgb(228, 255, 254);
}

table tr:hover {
  background: rgb(82, 82, 82);
  color: white;
}

table tr {
  background-color: white;
}

td {
  font-size: 0.8em;
}

#transaction {
  text-transform: uppercase;
  font-size: 0.8rem;
}
</style>