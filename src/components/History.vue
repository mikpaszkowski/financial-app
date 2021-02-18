<template>
  <table class="history-table">
    <thead>
      <tr>
        <th>Date</th>
        <th>Description</th>
        <th>Status</th>
        <th>Amount</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="row in history" :key="row.id">
        <td>{{ row.date }}</td>
        <td>{{ row.description }}</td>
        <td>status</td>
        <td>
          {{
            row.transaction == "deposit"
              ? `- ${row.amount} (${row.currency})`
              : `+ ${row.amount} (${row.currency})`
          }}
        </td>
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
  width: 90%;
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
  padding: 1rem;
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
  font-size: 1em;
}

#transaction {
  text-transform: uppercase;
  font-size: 1em;
}
</style>